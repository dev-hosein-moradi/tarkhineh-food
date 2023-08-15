import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./redux/store/index.js";

import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

ReactDOM.createRoot(document.getElementById("root")).render(
  <GoogleReCaptchaProvider reCaptchaKey="6LcE26knAAAAAPC3AJCcozFmQ3chFCsMsDTc8K28">
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </GoogleReCaptchaProvider>
);
