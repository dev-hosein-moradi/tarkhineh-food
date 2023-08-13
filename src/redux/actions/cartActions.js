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
    const pendingNotif = {
      isPending: true,
      id: parameter?.caller?.name,
      title: "در حال پردازش",
      message: "لطفا منتظر بمانید",
    };
    dispatch(notificationActions.pendingNotification(pendingNotif));

    try {
      // send request to firestore
      const data = await addDoc(foodsCollectionRef, parameter?.item);
      console.log(data);
      // update ui
      dispatch(cartActions.addItems(parameter?.item));
      // push notification
      const successNotif = {
        isSuccess: true,
        id: parameter?.caller?.name,
        title: "انجام شد",
        message: "عملیات با موفقیت انجام شد",
      };
      dispatch(notificationActions.successNotification(successNotif));
    } catch (error) {
      // push notification
      const errorNotif = {
        isError: true,
        id: parameter?.caller?.name,
        title: "خطا",
        message: "خطایی رخ داده است. عملیات انجام نشد",
      };
      dispatch(notificationActions.errorNotification(errorNotif));
    }
  };
};

// async thunk to remove item form cart
export const removeItem = (parameter) => {
  return async (dispatch) => {
    const pendingNotif = {
      isPending: true,
      id: parameter?.caller?.name,
      title: "در حال پردازش",
      message: "لطفا منتظر بمانید",
    };
    dispatch(notificationActions.pendingNotification(pendingNotif));

    try {
      const id = parameter.itemId;
      const itemDoc = doc(db, "cart", id);
      if (parameter?.itemQuantity === 1) {
        // send request to firestore
        const data = await deleteDoc(itemDoc);
      }
      // update ui
      dispatch(cartActions.removeItem(parameter?.item));
      // push notification
      const successNotif = {
        isSuccess: true,
        id: parameter?.caller?.name,
        title: "انجام شد",
        message: "عملیات با موفقیت انجام شد",
      };
      dispatch(notificationActions.successNotification(successNotif));
    } catch (error) {
      // push notification
      const errorNotif = {
        isError: true,
        id: parameter?.caller?.name,
        title: "خطا",
        message: "خطایی رخ داده است. عملیات انجام نشد",
      };
      dispatch(notificationActions.errorNotification(errorNotif));
    }
  };
};
