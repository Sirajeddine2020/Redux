import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import reportWebVitals from "./reportWebVitals";

import "./index.css";
import App from "./App";


import store from "./JS/store/store";

ReactDOM.render(
  
    <Provider store={store}>
      <React.StrictMode>

      <App />
      </React.StrictMode>
      
    </Provider>,
  
  document.getElementById("root")
);

reportWebVitals();
