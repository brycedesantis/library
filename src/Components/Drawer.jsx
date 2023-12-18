import Box from "@mui/material/Box"
import Drawer from "@mui/material/Drawer"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import HomeIcon from "@mui/icons-material/Home"
import SearchIcon from "@mui/icons-material/Search"
import BookIcon from "@mui/icons-material/Book"
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary"
import { Typography } from "@mui/material"
import { Link } from "react-router-dom"

function listData(id, tab, icon, linkTo) {
	return { id, tab, icon, linkTo }
}

const libraryTabs = [
	listData("home", "Home", <HomeIcon />, "/"),
	listData("search", "Search", <SearchIcon />, "search-page"),
	listData("books", "My books", <BookIcon />, "my-books"),
	listData("about", "Directions and hours", <LocalLibraryIcon />, "about-page"),
]

export default function DrawerElement({ onClose, open }) {
	return (
		<Drawer anchor="right" onClose={onClose} open={open}>
			<Box role="presentation" sx={{ width: 250 }}>
				<Typography align="center" variant="h5" my={2}>
					Yazoo City Public Library
				</Typography>
				<List>
					{/* {["Inbox", "Starred", "Send email", "Drafts"].map((data) => (
						<ListItem key={data} disablePadding>
							<ListItemButton>
								<ListItemIcon></ListItemIcon>
								<ListItemText primary={data} />
							</ListItemButton>
						</ListItem>
					))} */}
					{libraryTabs.map((tab) => (
						<ListItem key={tab.id}>
							<Link
								style={{ textDecoration: "none", color: "initial" }}
								to={tab.linkTo}
							>
								<ListItemButton>
									<ListItemIcon>{tab.icon}</ListItemIcon>
									<ListItemText primary={tab.tab}></ListItemText>
								</ListItemButton>
							</Link>
						</ListItem>
					))}
				</List>
			</Box>
		</Drawer>
	)
}
