import {
	Box,
	Divider,
	Stack,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableRow,
	Typography,
} from "@mui/material"

function rowData(date, startTime, eventDetails) {
	return { date, startTime, eventDetails }
}

const rows = [
	rowData("Monday", "9:00 am", "Mah Jong tournament"),
	rowData("Tuesday", "4:30 pm", "David Sperry book signing"),
	rowData("Wednesday", "12:00 pm", "Yazoo middle school PTA luncheon"),
	rowData("Thursday", "2:30 pm", "Crafts Fair"),
	rowData("Friday", "7:00 pm", "Bingo night"),
]

export default function DefaultPage() {
	return (
		<Box align="center">
			<Box m={5} sx={{ maxWidth: 550 }}>
				<Typography variant="h3" display={"block"} gutterBottom>
					Welcome to the Yazoo City Public Library!
				</Typography>
				<Typography variant="subtitle1" display={"block"} gutterBottom>
					Use our database to search for new books, keep track of your reading
					list, and discover the joys of reading!
				</Typography>
			</Box>
			<Divider />
			<Stack direction={"row"} my={2} spacing={2}>
				<Box>
					<Typography variant="h5">Upcoming events</Typography>
					<TableContainer>
						<Table sx={{ minWidth: 550 }} aria-label="upcoming events tabel">
							<TableBody>
								{rows.map((row) => (
									<TableRow
										key={row.date}
										sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
									>
										<TableCell component={"th"} scope="row">
											{row.date}
										</TableCell>
										<TableCell align="right">{row.startTime}</TableCell>
										<TableCell align="right">{row.eventDetails}</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</TableContainer>
				</Box>
				<Box textAlign={"center"} minWidth={500}>
					<Typography variant="h5">Book of the day</Typography>
				</Box>
			</Stack>
			<Divider />
			<Box my={3}>
				<Typography variant="h6">Not sure what to read?</Typography>
				<Typography variant="h6">
					Check out what others are reading in the Times top 100 books of 2023!
				</Typography>
				<a
					href="https://time.com/collection/must-read-books-2023/?fbclid=PAAaZyRnFEgeIO5MeDWh9-twuk_23p7J95d6mdF5omcEK_qRCBaPZB3sHfisk_aem_AYyZwsvRKF4ueHGqoADSCMC9MDffn48XD7e800x7U1jSaxpRzVcriaqAv767cZkz0lI"
					target="_blank"
					rel="noreferrer"
					aria-label="null - opens in new tab"
					data-sk-trans-index="155"
					data-orginal-font-size="16"
					data-orginal-line-height="25.6"
					data-orginal-letter-spacing="0"
				>
					<img
						style={{ maxWidth: "600px" }}
						srcSet="https://api.time.com/wp-content/uploads/2023/11/Top100Books2023_featured2.jpg?quality=85&amp;w=600&amp;h=600&amp;crop=1 600w, https://api.time.com/wp-content/uploads/2023/11/Top100Books2023_featured2.jpg?quality=85&amp;w=2024&amp;h=1138&amp;crop=1"
						sizes="(max-width: 600px) 600px, 800px"
						src="https://api.time.com/wp-content/uploads/2023/11/Top100Books2023_featured2.jpg?quality=85&amp;w=1012&amp;h=569&amp;crop=1"
						alt=""
					></img>
				</a>
			</Box>
		</Box>
	)
}
