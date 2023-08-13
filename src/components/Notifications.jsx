import { toast } from "react-hot-toast";

const Notifications = ({ caller, notification }) => {
  if (caller === notification?.id) {
    if (notification?.isPending) {
      return toast.loading(`${notification?.message}`, {
        icon: "🤨",
      });
    } else if (notification?.isError) {
      return toast.error(`${notification?.message}`, {
        icon: "😕",
      });
    } else if (notification?.isSuccess) {
      return toast.success(`${notification?.message}`, {
        icon: "😎",
      });
    }
  }
};

export default Notifications;
