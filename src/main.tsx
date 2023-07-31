import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { GlobalStyle } from "./styles/globalStyles";

import ToastAnimated from "./styles/toast";
import { ContactProvider } from "./providers/contacts/contactContext";
import { UserListProvider } from "./providers/clients/userContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <ToastAnimated />
    <BrowserRouter>
      <ContactProvider>
        <UserListProvider>
          <App />
        </UserListProvider>
      </ContactProvider>
    </BrowserRouter>
  </React.StrictMode>
);
