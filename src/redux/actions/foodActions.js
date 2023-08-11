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

const foodsCollectionRef = collection(db, "foods");

/*  */
export const fetchFoods = (parameter) => {
  return async (dispatch) => {
    try {
      // get collection data from firestore
      const data = await getDocs(foodsCollectionRef);
      // filter response to find right data from response
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      dispatch(foodsActions.setFoods(filteredData));
    } catch (error) {
      console.log(error);
    }
  };
};
