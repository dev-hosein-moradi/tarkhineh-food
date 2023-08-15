import { ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../configs/firebase";
import { v4 } from "uuid";

// async thunk to upload files to firebase storage
export const uploadFiles = (parameter) => {
  return async (dispatch) => {
    console.log("loading...!");
    const { folderName, fileName, file } = parameter;
    const fileRef = ref(storage, `${folderName}/${fileName + v4()}`);

    const data = uploadBytesResumable(fileRef, file);

    data.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        console.log(progress);
      },
      (error) => {
        console.log("error...!");
        console.log(error);
      },
      () => {
        console.log("success...!");
      }
    );
  };
};
