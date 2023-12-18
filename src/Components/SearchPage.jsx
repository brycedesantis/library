import {
	Box,
	Button,
	Divider,
	FormControl,
	Grid,
	InputLabel,
	OutlinedInput,
	Stack,
} from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"
import { useState } from "react"
import { v4 as uuidv4 } from "uuid"
import Book from "./Book"

export default function SearchPage() {
	const [searchCriteria, setSearchCriteria] = useState("")
	const [searchedBooks, setSearchedBooks] = useState([])

	async function getBooks() {
		const fetchedData = []

		const bookData = await fetch(
			`https://openlibrary.org/search.json?q=${searchCriteria}&limit=20`
		)
		const retrievedBook = await bookData.json()
		for (let i = 0; i < retrievedBook.docs.length; i++) {
			const fetchImage = await fetch(
				`https://covers.openLibrary.org/b/isbn/${retrievedBook.docs[i]["isbn"][0]}-S.jpg`
			)

			const { title } = retrievedBook.docs[i]
			const pageCount = retrievedBook.docs[i]["number_of_pages_median"]
			const authorName = retrievedBook.docs[i]["author_name"]
			const coverImage = fetchImage.url

			fetchedData.push({
				title: title,
				author: authorName,
				pages: pageCount,
				coverImage: coverImage,
			})
		}
		setSearchedBooks([...fetchedData])
	}

	function handleChange(event) {
		let value = event.target.value

		let space = value.split(" ").join("+")
		setSearchCriteria(space)
	}

	const searchResults = searchedBooks.map((book) => {
		return (
			<Grid key={uuidv4} item xs={1}>
				<Book
					title={book.title}
					author={book.author}
					pages={book.pages}
					imageSrc={book.coverImage}
				/>
			</Grid>
		)
	})

	return (
		<Box mx={"auto"}>
			<Stack
				m={5}
				direction={"row"}
				justifyContent="center"
				component={"form"}
				alignItems={"center"}
				spacing={2}
			>
				<FormControl color="secondary">
					<InputLabel htmlFor="component-outlined">
						Search our catalog
					</InputLabel>
					<OutlinedInput
						onChange={handleChange}
						id="component-outlined"
						label="Search our catalog"
						name="title"
					/>
				</FormControl>
				<Button onClick={getBooks} variant="contained" color="secondary">
					<SearchIcon /> Search
				</Button>
			</Stack>
			<Divider />
			<Grid
				maxWidth={"1200px"}
				m={"10px auto"}
				columns={4}
				spacing={2}
				container
				justifyContent={"center"}
				alignItems={"center"}
			>
				{searchResults}
			</Grid>
		</Box>
	)
}
