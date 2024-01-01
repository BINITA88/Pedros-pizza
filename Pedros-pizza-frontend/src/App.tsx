
import {createBrowserRouter, RouterProvider} from "react-router-dom";


function App() {

  return (
      <>

          <RouterProvider router={createBrowserRouter([
              // {path:"/AdminDashboard",element:<AdminDashboard/>},
          ])} />
      </>

  )
}

export default App
