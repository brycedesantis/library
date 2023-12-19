import { RouterProvider, createBrowserRouter } from "react-router-dom"
import App from "./App"
import SearchPage from "./Components/SearchPage"
import DefaultPage from "./Components/DefaultPage"
import MyBooks from "./Components/MyBooksPage"

export default function Router() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <App />,
			children: [
				{ index: true, element: <DefaultPage /> },
				{ path: "search-page", element: <SearchPage /> },
				{ path: "my-books", element: <MyBooks /> },
			],
		},
	])

	return <RouterProvider router={router} />
}
