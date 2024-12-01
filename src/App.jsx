


import "./App.css";
import AppProvider from "./context/AppProvider";

import React from 'react';
import { RouterProvider } from "react-router-dom";
import router from './router/routes';

function App() {
  return (
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
    
  );
}

export default App;
