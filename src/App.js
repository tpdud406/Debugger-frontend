import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { SocketContext, socket } from "./context/socket";

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
  return (
    <SocketContext.Provider value={socket}>
      <RouterProvider router={router} />
    </SocketContext.Provider>
  );
}

export default App;
