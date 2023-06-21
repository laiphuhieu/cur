import React from "react";
import AppRoutes from "./routes";
import { BASE_URL } from '@/config/app.config';

function App() {
  console.log(BASE_URL);
  return <AppRoutes />;
}

export default App;
