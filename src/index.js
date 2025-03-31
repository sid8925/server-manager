import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "App";

// Context & Redux Providers
import { MaterialUIControllerProvider } from "context";
import { Provider } from "react-redux";
import store from "./Redux/store";

// Toastify
import { ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const container = document.getElementById("app");
const root = createRoot(container);

root.render(
  <Provider store={store}>
    {" "}
    {/* ✅ Redux Provider Added */}
    <BrowserRouter>
      <MaterialUIControllerProvider>
        <App />
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Bounce}
        />
      </MaterialUIControllerProvider>
    </BrowserRouter>
  </Provider>
);
