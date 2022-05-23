import type { NextPage } from "next"
import { useTheme, lighten } from "@mui/material/styles"
import OpenInNewIcon from "@mui/icons-material/OpenInNew"
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag"
import Button from "@mui/material/Button"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import Container from "@mui/system/Container"
import Box from "@mui/system/Box"
import useMediaQuery from "@mui/material/useMediaQuery"
import Head from "next/head"
import Image from "next/image"
import Header from "../components/Header/MobileLP"
import mobileCover from "../../public/mobile-cover.webp"
import Link from "../components/Link"
import Popular from "../components/Popular"
import Reviews from "../components/Reviews"
import { reasons } from "../data/reasons"
import { reviews } from "../data/reviews"

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
        <Box
          component="section"
          id="our-service"
          bgcolor={lighten(palette.primary.light, 0.7)}
        >
          <Container sx={{ py: 8 }} maxWidth="md">
            <Typography variant="h2" mb={4} color="text.primary">
              Our Service
            </Typography>
            <Typography variant="subtitle1" align="center" mb={3}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
              quidem ducimus aspernatur libero! Distinctio accusamus labore
              similique quod ipsam quo. Quisquam voluptate vitae porro,
              perspiciatis minima distinctio sint dicta quasi.
            </Typography>
            <Typography variant="subtitle1" align="center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              nihil consequatur nesciunt, ex a illum inventore harum rerum quas
              nulla quidem quia. Harum ducimus, iusto minus voluptates quam ipsa
              dicta.
            </Typography>
            <Stack direction="row" justifyContent="center" mt={3}>
              <Button
                href="/about"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  textTransform: "capitalize",
                  textDecoration: "underline",

                  "&:hover, &:focus": {
                    textDecoration: "none"
                  }
                }}
                endIcon={<OpenInNewIcon />}
              >
                Read more about us
              </Button>
            </Stack>
          </Container>
        </Box>
        <Popular />
        <Box
          component="section"
          id="how-we-stand-out"
          bgcolor={lighten(palette.secondary.light, 0.5)}
        >
          <Container sx={{ py: 8 }}>
            <Typography variant="h2" mb={4} color="text.primary">
              How we stand out
            </Typography>
            <Stack
              direction={!mobile ? "row" : "column"}
              justifyContent={!mobile ? "space-between" : undefined}
              my={4}
              spacing={3}
            >
              {reasons.map(({ title, icon, description }) => (
                <Box key={title} maxWidth={320}>
                  <Image src={icon} alt="" width={66} height={94} />
                  <Typography
                    variant="h4"
                    component="h3"
                    my={2}
                    color="text.primary"
                  >
                    {title}
                  </Typography>
                  <Typography color="text.secondary">{description}</Typography>
                </Box>
              ))}
            </Stack>
          </Container>
        </Box>
        <Reviews reviews={reviews} />
      </main>
    </>
  )
}

export default Home
