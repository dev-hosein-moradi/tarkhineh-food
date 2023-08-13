/* for internal pending notification that dont have any async request */
export const sendInternalPendingNotif = (notif) => {
  return (dispatch) => {
    dispatch(notificationActions.pendingNotification(notif));
  };
};

/* for internal error notification that dont have any async request */
export const sendInternalErrorNotif = (notif) => {
  return (dispatch) => {
    dispatch(notificationActions.errorNotification(notif));
  };
};

/* for internal success notification that dont have any async request */
export const sendInternalSuccessNotif = (notif) => {
  return (dispatch) => {
    dispatch(notificationActions.successNotification(notif));
  };
};
