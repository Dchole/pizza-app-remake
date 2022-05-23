import { useState } from "react"
import { useTheme } from "@mui/material/styles"
import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import useMediaQuery from "@mui/material/useMediaQuery"
import IconButton from "@mui/material/IconButton"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import Box from "@mui/system/Box"
import Container from "@mui/system/Container"
import { transitionStyles } from "../data/reviews"

interface IProps {
  reviews?: any[]
}

const Reviews = ({ reviews = [] }: IProps) => {
  const { transitions, breakpoints } = useTheme()
  const mobile = useMediaQuery(breakpoints.down("sm"))
  const reducedMotion = useMediaQuery("@media(prefers-reduced-motion)")
  const [currentReview, setCurrentReview] = useState(0)

  const {
    nameOffScreen,
    nameExitedScreen,
    nameEnteredScreen,
    reviewOffScreen,
    reviewExitedScreen,
    reviewEnteredScreen
  } = transitionStyles

  const handleNextReview = () =>
    currentReview < reviews.length - 1 && setCurrentReview(currentReview + 1)
  const handlePrevReview = () =>
    currentReview && setCurrentReview(currentReview - 1)

  return (
    <Box
      component="section"
      id="customers-reviews"
      position="relative"
      pt={10}
      sx={{ overflowX: "hidden" }}
    >
      <Typography variant="h2" mb={3}>
        Customers say
      </Typography>
      <Container maxWidth="sm">
        <Box position="relative" minHeight="38vh">
          {reviews.map(({ id, customer_name, review }, index) => (
            <Box
              key={id}
              width="80%"
              height="56%"
              position="absolute"
              top={0}
              left="50%"
              ml="-40%"
            >
              <Typography
                align="center"
                color="textSecondary"
                mb={4}
                sx={{
                  left: "50%",
                  top: 0,
                  width: "100%",
                  position: "absolute",
                  transition: transitions.create(
                    reducedMotion ? "opacity" : ["transform", "opacity"],
                    {
                      easing: transitions.easing.easeOut,
                      duration: transitions.duration.leavingScreen
                    }
                  ),
                  ...(index === currentReview
                    ? reviewEnteredScreen
                    : index < currentReview
                    ? reviewExitedScreen(mobile)
                    : reviewOffScreen(mobile))
                }}
              >
                <em>
                  &ldquo;{review.split(" ").slice(0, 20).join(" ")}&rdquo;
                </em>
              </Typography>
              <Typography
                align="right"
                sx={{
                  bottom: 0,
                  width: "100%",
                  position: "absolute",
                  transition: transitions.create(
                    reducedMotion ? "opacity" : ["transform", "opacity"],
                    {
                      easing: transitions.easing.easeOut,
                      duration: transitions.duration.shorter
                    }
                  ),
                  ...(index === currentReview
                    ? nameEnteredScreen
                    : index < currentReview
                    ? nameExitedScreen
                    : nameOffScreen)
                }}
              >
                &mdash;&nbsp;
                <span>{customer_name}</span>
              </Typography>
            </Box>
          ))}
        </Box>
        <Box position="absolute" pl={2} bottom={75}>
          <Stack direction="row">
            <IconButton
              aria-label="previous review"
              onClick={handlePrevReview}
              disabled={!currentReview}
            >
              <ArrowBackIcon />
            </IconButton>
            <IconButton
              aria-label="next review"
              onClick={handleNextReview}
              disabled={currentReview >= reviews.length - 1}
            >
              <ArrowForwardIcon />
            </IconButton>
          </Stack>
        </Box>
      </Container>
    </Box>
  )
}

export default Reviews
