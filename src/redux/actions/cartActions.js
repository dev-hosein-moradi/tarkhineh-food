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
import { cartActions } from "../reducers/cartSlice";

const cartCollectionRef = collection(db, "cart");

// async thunk for add new item to cart
export const addNewItem = (parameter) => {
  return async (dispatch) => {
    let pendingBody = pendingNotification(parameter?.caller);
    let successBody = successNotification(parameter?.caller);
    let errorBody = errorNotification(parameter?.caller);

    dispatch(notificationActions.pendingNotification(pendingBody));

    try {
      // send request to firestore
      const data = await addDoc(cartCollectionRef, parameter?.item);
      if (data) {
        // update ui
        dispatch(cartActions.addItems(parameter?.item));
        // push notification
        dispatch(notificationActions.successNotification(successBody));
      } else {
        dispatch(notificationActions.errorNotification(errorBody));
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
      if (parameter?.itemQuantity === 1) {
        // send request to firestore
        const data = await deleteDoc(itemDoc);
        dispatch(cartActions.removeItem(parameter?.item));

        if (data) {
          dispatch(notificationActions.successNotification(successBody));
        }
      } else {
        // update ui
        dispatch(cartActions.removeItem(parameter?.item));
      }
    } catch (error) {
      // push notification
      dispatch(notificationActions.errorNotification(errorBody));
    }
  };
};
