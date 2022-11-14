import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Start from "./Pages/Start";
import Debugging from "./Pages/Debugging";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Start />,
  },
  {
    path: "/debugging",
    element: <Debugging />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
