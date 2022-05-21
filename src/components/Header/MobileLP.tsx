import ShoppingBagIcon from "@mui/icons-material/ShoppingBag"
import MenuIcon from "@mui/icons-material/Menu"
import IconButton from "@mui/material/IconButton"
import Avatar from "@mui/material/Avatar"
import Image from "next/image"
import Link from "../Link"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Paper from "@mui/material/Paper"

const MobileLPHeader = () => {
  return (
    <>
      <AppBar position="fixed" color="transparent" elevation={0}>
        <Toolbar sx={{ justifyContent: "space-between", py: 0 }}>
          <div>
            <IconButton sx={{ color: "#fff" }} aria-label="menu">
              <MenuIcon />
            </IconButton>
            <IconButton href="/" aria-label="go to homepage" sx={{ py: 0 }}>
              <Image
                src="/logo-placeholder.svg"
                alt="logo"
                width={35}
                height={60}
              />
            </IconButton>
          </div>
          <Paper elevation={2} sx={{ px: 0, borderRadius: 8 }}>
            <IconButton
              aria-label="shopping cart"
              component={Link}
              href="/cart"
              size="large"
            >
              <ShoppingBagIcon />
            </IconButton>
            <IconButton aria-label="sign up">
              <Avatar sx={{ bgcolor: "grey.600", width: 32, height: 32 }} />
            </IconButton>
          </Paper>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default MobileLPHeader
