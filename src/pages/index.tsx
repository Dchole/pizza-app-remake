import type { NextPage } from "next"
import { useTheme, lighten } from "@mui/material/styles"
import OpenInNewIcon from "@mui/icons-material/OpenInNew"
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag"
import Button from "@mui/material/Button"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"
import useMediaQuery from "@mui/material/useMediaQuery"
import Head from "next/head"
import Image from "next/image"
import Header from "../components/Header/MobileLP"
import mobileCover from "../../public/mobile-cover.webp"
import Link from "../components/Link"
import Popular from "../components/Popular"

const Home: NextPage = () => {
  const { breakpoints, palette } = useTheme()
  const mobile = useMediaQuery(breakpoints.down("sm"))

  return (
    <>
      <Head>
        <title>Moshzion Pizza</title>
      </Head>
      <Header />
      <main>
        <Container
          id="hero"
          component="section"
          sx={{
            position: "relative",
            height: "80vh",
            width: "100%,"
          }}
          disableGutters={mobile}
        >
          <Image
            src={mobileCover}
            alt=""
            priority
            layout="fill"
            objectFit="cover"
            placeholder="blur"
          />
          <Stack
            alignItems="center"
            justifyContent="flex-end"
            height="100%"
            pb={12}
            spacing={5}
          >
            <Typography variant="h1" sx={{ color: "#fff", zIndex: 0 }}>
              Brighten your day with a delicious pizza
            </Typography>
            <Button
              disableElevation
              variant="contained"
              component={Link}
              href="/store"
              endIcon={<ShoppingBagIcon />}
              sx={{
                bgcolor: "#fff",
                color: "text.primary",
                "&:hover, &:focus": {
                  bgcolor: "grey.100"
                }
              }}
            >
              Make an order
            </Button>
          </Stack>
        </Container>
        <Container
          component="section"
          id="our-service"
          sx={{
            py: 8,
            bgcolor: lighten(palette.primary.light, 0.7)
          }}
        >
          <Typography variant="h2" mb={4}>
            Our Service
          </Typography>
          <Typography align="center" mb={3}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
            quidem ducimus aspernatur libero! Distinctio accusamus labore
            similique quod ipsam quo. Quisquam voluptate vitae porro,
            perspiciatis minima distinctio sint dicta quasi.
          </Typography>
          <Typography align="center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque nihil
            consequatur nesciunt, ex a illum inventore harum rerum quas nulla
            quidem quia. Harum ducimus, iusto minus voluptates quam ipsa dicta.
          </Typography>
          <Stack direction="row" justifyContent="center" mt={3}>
            <Button
              href="/about"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: "primary.dark", textTransform: "capitalize" }}
              endIcon={<OpenInNewIcon />}
            >
              Read more about us
            </Button>
          </Stack>
        </Container>
        <Popular />
      </main>
    </>
  )
}

export default Home
