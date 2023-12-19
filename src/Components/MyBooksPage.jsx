import { Box, Grid, Typography } from "@mui/material"
import Book from "./Book"
import { v4 as uuidv4 } from "uuid"
import { useEffect, useState } from "react"

export default function MyBooks() {
	const [myLibrary, setMyLibrary] = useState([])

	function getLocalBooks() {
		const storage = [...JSON.parse(localStorage.getItem("myBooks"))]
		setMyLibrary([...storage])
	}

	useEffect(() => getLocalBooks, [])

	return (
		<Box mx={"auto"} align="center">
			<Typography variant="h5">My Books</Typography>
			<Grid
				maxWidth={"1200px"}
				m={"10px auto"}
				columns={4}
				spacing={2}
				container
				justifyContent={"center"}
				alignItems={"center"}
				rowSpacing={2}
			>
				{myLibrary.map((book) => {
					return (
						<Grid key={uuidv4} item xs={1}>
							<Book
								title={book.title}
								author={book.author}
								pages={book.pages}
								imageSrc={book.coverImage}
								inLibrary={true}
							/>
						</Grid>
					)
				})}
			</Grid>
		</Box>
	)
}
