import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import { thunk } from "redux-thunk";
import rootReducer from "./redux/reducers";
const root = ReactDOM.createRoot(document.getElementById("root"));
const store = createStore(rootReducer, compose(applyMiddleware(thunk)));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
