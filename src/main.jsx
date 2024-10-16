import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./app/Store.js";
import { HelmetProvider } from "react-helmet-async";
import TagManager from "react-gtm-module";

const tagManagerArgs = {
  gtmId: "GTM-KXCSF95H",
};
TagManager.initialize(tagManagerArgs);

createRoot(document.getElementById("root")).render(
  <HelmetProvider>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </HelmetProvider>
);
