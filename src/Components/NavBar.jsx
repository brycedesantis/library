import {
	AppBar,
	Container,
	IconButton,
	Toolbar,
	Typography,
} from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import { Box } from "@mui/system"
import { useState } from "react"
import DrawerElement from "./Drawer"
import { Outlet } from "react-router-dom"

export default function NavBar() {
	const [open, setOpen] = useState(false)

	function openDrawer() {
		setOpen(true)
	}

	function closeDrawer() {
		setOpen(false)
	}

	return (
		<>
			<header>
				<Box sx={{ flexGrow: 1 }}>
					<AppBar
						component={"nav"}
						position="static"
						sx={{ height: "5rem", justifyContent: "center", padding: 1 }}
					>
						<Toolbar>
							<Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
								Yazoo City Public Library
							</Typography>
							<IconButton
								size="xl"
								edge="end"
								color="inherit"
								aria-label="menu"
								sx={{ mr: 2 }}
								onClick={openDrawer}
							>
								<MenuIcon />
							</IconButton>
						</Toolbar>
					</AppBar>
					<DrawerElement onClose={closeDrawer} open={open} />
				</Box>
			</header>
			<Container>
				<Outlet />
			</Container>
		</>
	)
}
