import {
  getDocs,
  collection,
  addDoc,
  deleteDoc,
  updateDoc,
  doc,
} from "firebase/firestore";
import { db } from "../../configs/firebase";
import {
  errorNotification,
  pendingNotification,
  successNotification,
} from "../../utils/notificationTypes";
import { notificationActions } from "../reducers/notificationSlice";
import { branchActions } from "../reducers/branchSlice";

const branchsCollectionRef = collection(db, "branchs");

// async thunk to get comments list
export const getBranchs = (parameter) => {
  return async (dispatch) => {
    let errorBody = errorNotification(parameter?.caller);

    try {
      // get collection data from firestore
      // const data = await getDocs(branchsCollectionRef);
      const data = [];
      // filter response to find right data from response
      const filteredData = data?.docs?.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      if (data) {
        console.log(data);
        // call slice reducer to work on recived data
        dispatch(branchActions.getBranchs(filteredData));
      } else {
        dispatch(notificationActions.errorNotification(errorBody));
      }
    } catch (error) {
      dispatch(notificationActions.errorNotification(errorBody));
    }
  };
};

// async thunk to add new comment
export const addNewBranch = (parameter) => {
  return async (dispatch) => {
    let pendingBody = pendingNotification(parameter?.caller);
    let successBody = successNotification(parameter?.caller);
    let errorBody = errorNotification(parameter?.caller);

    dispatch(notificationActions.pendingNotification(pendingBody));

    try {
      // send request to add item in firestore
      const data = await addDoc(branchsCollectionRef, parameter?.branch);
      // filter response to find right data from response
      const filteredData = data?.docs?.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      if (data) {
        // call slice reducer to work on recived data
        dispatch(branchActions.addNewBranch(filteredData));

        // push notification about status of request and response
        dispatch(notificationActions.successNotification(successBody));
      } else {
        dispatch(notificationActions.errorNotification(errorBody));
      }
    } catch (error) {
      console.log(error);
      dispatch(notificationActions.errorNotification(errorBody));
    }
  };
};
