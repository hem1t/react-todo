import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import TodoTypeProvider from "./data_components/types.tsx";
import { BrowserRouter } from "react-router-dom";
import { TodoCreatorProvider } from "./data_components/todoContext.tsx";
import { TodoDataContextProvider } from "./data_components/TodoDataContextProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <TodoTypeProvider>
    <TodoCreatorProvider>
      <TodoDataContextProvider>
        <BrowserRouter>
          <React.StrictMode>
            <App />
          </React.StrictMode>
        </BrowserRouter>
      </TodoDataContextProvider>
    </TodoCreatorProvider>
  </TodoTypeProvider>
);
