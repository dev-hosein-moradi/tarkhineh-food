import React, { useEffect } from "react";
import { branchFood } from "../../constants";
import Notifications from "../../components/Notifications";
import { useDispatch, useSelector } from "react-redux";
import { addNewFood, fetchFoods } from "../../redux/actions/foodActions";

const Admin = () => {
  const notification = useSelector((state) => state.notifications.notification);
  const dispatch = useDispatch();

  const onSubmitNewFood = () => {
    const parameter = {
      food: branchFood[14],
      caller: {
        name: "admin",
      },
    };
    dispatch(addNewFood(parameter));
  };

  useEffect(() => {
    const parameter = {
      caller: {
        name: "admin",
      },
    };
    dispatch(fetchFoods(parameter));
  }, []);

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
