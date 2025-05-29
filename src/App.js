import "./App.css";
import router from "./routes";
import { RouterProvider } from "react-router";

function App() {
  return (
    <div className="App dark:bg-black">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
