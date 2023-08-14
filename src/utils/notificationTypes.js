const pendingNotification = (caller) => {
  const pendingNotif = {
    isPending: true,
    id: caller?.name,
    title: "در حال پردازش",
    message: "لطفا منتظر بمانید",
  };
  return pendingNotif;
};

const successNotification = (caller) => {
  const successNotif = {
    isSuccess: true,
    id: caller?.name,
    title: "انجام شد",
    message: "عملیات با موفقیت انجام شد",
  };
  return successNotif;
};

const errorNotification = (caller) => {
  const errorNotif = {
    isError: true,
    id: caller?.name,
    title: "خطا",
    message: "خطایی رخ داده است. عملیات انجام نشد",
  };
  return errorNotif;
};

export { pendingNotification, successNotification, errorNotification };
