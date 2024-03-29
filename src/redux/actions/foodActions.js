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
    try {
      // get collection data from firestore
      const data = await getDocs(foodsCollectionRef);
      // filter response to find right data from response
      const filteredData = data?.docs?.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      if (data) {
        // call slice reducer to work on recived data
        dispatch(foodsActions.setFoods(filteredData));
      }
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

// async thunk for add new food
export const addNewFood = (parameter) => {
  return async (dispatch) => {
    let pendingBody = pendingNotification(parameter?.caller);
    let successBody = successNotification(parameter?.caller);
    let errorBody = errorNotification(parameter?.caller);

    dispatch(notificationActions.pendingNotification(pendingBody));

    try {
      // send request to add item in firestore
      const data = await addDoc(foodsCollectionRef, parameter?.food);
      // filter response to find right data from response
      const filteredData = data?.docs?.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      if (data) {
        // call slice reducer to work on recived data
        dispatch(foodsActions.setFoods(filteredData));

        // push notification about status of request and response
        dispatch(notificationActions.successNotification(successBody));
      } else {
        dispatch(notificationActions.errorNotification(errorBody));
      }
    } catch (error) {
      dispatch(notificationActions.errorNotification(errorBody));
    }
  };
};
