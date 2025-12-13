import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom"
import { Toaster } from "@/components/ui/toaster"
import "./App.css"
import WelcomePage from "./pages/WelcomePage";

// Simplified router - only landing page
const router = createBrowserRouter([
  {
    path: "/",
    element: <WelcomePage />
  },
  {
    path: "/landing",
    element: <WelcomePage />
  },
  {
    path: "*",
    element: <Navigate to="/" replace />
  }
])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
      <Toaster />
    </div>
  )
}

export default App
