import React, { useEffect, useState } from "react";
import Notifications from "../../components/Notifications";
import { useDispatch, useSelector } from "react-redux";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  list,
} from "firebase/storage";
import { storage } from "../../configs/firebase";
import { v4 } from "uuid";
import { uploadFiles } from "../../redux/actions/uploadActions";

const Admin = () => {
  const notification = useSelector((state) => state.notifications.notification);
  const dispatch = useDispatch();

  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);

  const imagesListRef = ref(storage, "branchs/");

  const uploadFile = () => {
    if (imageUpload == null) return;
    const parameter = {
      file: imageUpload,
      folderName: "backgrounds",
      fileName: imageUpload.name,
    };
    dispatch(uploadFiles(parameter));
    // const imageRef = ref(storage, `branchs/${imageUpload.name + v4()}`);

    // uploadBytes(imageRef, imageUpload).then((snapshot) => {
    //   getDownloadURL(snapshot.ref).then((url) => {
    //     setImageUrls((prev) => [...prev, url]);
    //   });
    // });
  };

  useEffect(() => {
    listAll(imagesListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageUrls((prev) => [...prev, url]);
        });
      });
    });
  }, []);

  return (
    <div className="App">
      <input
        type="file"
        onChange={(event) => {
          setImageUpload(event.target.files[0]);
        }}
      />
      <button onClick={uploadFile}> Upload Image</button>
      {imageUrls.map((url, i) => {
        return <img key={i} src={url} />;
      })}
    </div>
  );
};

export default Admin;
