import {
  getDocs,
  collection,
  addDoc,
  deleteDoc,
  updateDoc,
  doc,
} from "firebase/firestore";
import { db } from "../../configs/firebase";
import { foodsActions } from "../reducers/foodSlice";
import { notificationActions } from "../reducers/notificationSlice";

const foodsCollectionRef = collection(db, "foods");

/* get list of foods from firebase */
export const fetchFoods = (parameter) => {
  return async (dispatch) => {
    const pendingNotif = {
      isPending: true,
      id: parameter?.caller?.name,
      title: "در حال پردازش",
      message: "لطفا منتظر بمانید",
    };
    dispatch(notificationActions.pendingNotification(pendingNotif));
    try {
      // get collection data from firestore
      const data = await getDocs(foodsCollectionRef);
      // filter response to find right data from response
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      // call slice reducer to work on recived data
      dispatch(foodsActions.setFoods(filteredData));

      // push notification about status of request and response
      const successNotif = {
        isSuccess: true,
        id: parameter?.caller?.name,
        title: "انجام شد",
        message: "عملیات با موفقیت انجام شد",
      };
      dispatch(notificationActions.successNotification(successNotif));
    } catch (error) {
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
