import React, { useEffect } from "react";
import { agencyData, branchFood, comments } from "../../constants";
import Notifications from "../../components/Notifications";
import { useDispatch, useSelector } from "react-redux";
import { fetchFoods } from "../../redux/actions/foodActions";
import { addNewBranch } from "../../redux/actions/branchActions";

const Admin = () => {
  const notification = useSelector((state) => state.notifications.notification);
  const dispatch = useDispatch();

  const onSubmitNewFood = () => {
    const parameter = {
      branch: agencyData[3],
      caller: {
        name: "admin",
      },
    };
    dispatch(addNewBranch(parameter));
  };

  useEffect(() => {
    const caller = "admin";
    Notifications({ caller, notification });
  }, [notification]);
  return (
    <main>
      <button
        onClick={onSubmitNewFood}
        className="bg-black text-white m-20 p-5"
      >
        add food to db
      </button>
    </main>
  );
};

export default Admin;
