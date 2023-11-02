import {
  getDocs,
  collection,
  addDoc,
  deleteDoc,
  updateDoc,
  doc,
} from "firebase/firestore";
import { db } from "../../configs/firebase";
import { notificationActions } from "../reducers/notificationSlice";
import {
  errorNotification,
  pendingNotification,
  successNotification,
} from "../../utils/notificationTypes";
import { cartActions } from "../reducers/cartSlice";

const cartCollectionRef = collection(db, "cart");

// async thunk for get cart items
export const getCartItems = (parameter) => {
  return async (dispatch) => {
    let errorBody = errorNotification(parameter?.caller);

    try {
      // get collection data from firestore
      const data = await getDocs(cartCollectionRef);
      // filter response to find right data from response
      const filteredData = data?.docs?.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      if (data) {
        // call slice reducer to work on recived data
        dispatch(cartActions.setCartItems(filteredData));
      }
    } catch (error) {
      dispatch(notificationActions.errorNotification(errorBody));

      dispatch(notificationActions.errorNotification(errorNotif));
    }
  };
};

// async thunk for add new item to cart
export const addNewItem = (parameter) => {
  return async (dispatch) => {
    let pendingBody = pendingNotification(parameter?.caller);
    let successBody = successNotification(parameter?.caller);
    let errorBody = errorNotification(parameter?.caller);

    dispatch(notificationActions.pendingNotification(pendingBody));

    try {
      // get items to check items in db
      const itemsInDb = await getDocs(cartCollectionRef);
      // filtered data to get access to right data
      const filteredData = itemsInDb?.docs?.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      const existItem = filteredData?.some(
        (item) => item.originId === parameter.item.originId
      );

      if (!existItem) {
        // send request to firestore
        const data = await addDoc(cartCollectionRef, parameter?.item);
        if (data) {
          // update ui
          dispatch(cartActions.addItems({ item: parameter?.item }));
          // push notification
          dispatch(notificationActions.successNotification(successBody));
        } else {
          dispatch(notificationActions.errorNotification(errorBody));
        }
      }
    } catch (error) {
      // push notification
      dispatch(notificationActions.errorNotification(errorBody));
    }
  };
};

// async thunk to remove item form cart
export const removeItem = (parameter) => {
  return async (dispatch) => {
    let pendingBody = pendingNotification(parameter?.caller);
    let successBody = successNotification(parameter?.caller);
    let errorBody = errorNotification(parameter?.caller);

    dispatch(notificationActions.pendingNotification(pendingBody));

    try {
      const id = parameter.itemId;
      const itemDoc = doc(db, "cart", id);
      console.log(parameter);

      if (parameter.item?.quantity <= 1) {
        // send request to firestore
        dispatch(cartActions.removeItem(parameter?.item));
        const data = deleteDoc(itemDoc);

        if (data) {
          dispatch(notificationActions.successNotification(successBody));
        }
      } else {
        // update ui
        dispatch(cartActions.removeItem(parameter?.item));
        // update Doc from firestore
        updateDoc(itemDoc, {
          quantity: parameter?.item.quantity,
        });
      }
    } catch (error) {
      // push notification
      dispatch(notificationActions.errorNotification(errorBody));
    }
  };
};
