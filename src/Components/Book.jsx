import { Card, CardContent, CardMedia, Typography } from "@mui/material"

export default function Book({ title, author, pages, imageSrc }) {
	return (
		<Card sx={{ maxWidth: 250 }}>
			<CardMedia component={"img"} image={imageSrc} sx={{ width: 150 }} />
			<CardContent>
				<Typography gutterBottom variant="h5">
					{title}
				</Typography>
				<Typography variant="h6" color={"text.secondary"}>
					By {author}
				</Typography>
				<Typography variant="subtitle2">Page count: {pages}</Typography>
			</CardContent>
		</Card>
	)
}
