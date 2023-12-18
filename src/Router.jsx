import { RouterProvider, createBrowserRouter } from "react-router-dom"
import App from "./App"
import DefaultPage from "./Components/DefaultPage"

export default function Router() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <App />,
			children: [{ index: true, element: <DefaultPage /> }],
		},
	])

	return <RouterProvider router={router} />
}
