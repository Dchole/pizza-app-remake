import Box from "@mui/system/Box"
import Stack from "@mui/material/Stack"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import { Storefront } from "@mui/icons-material"

interface IProps {}

const Popular = ({}: IProps) => {
  return (
    <Box component="section" id="customer-favorites" py={8}>
      <Box px={1}>
        <Typography variant="h2" mb={2}>
          Customers&apos; Favorite
        </Typography>
        <Typography variant="subtitle1" align="center">
          Most purchased pizzas from our customers
        </Typography>
      </Box>
      <Box sx={{ overflowX: "auto", my: 8 }}></Box>
      <Stack direction="row" justifyContent="flex-end" pr={2}>
        <Button variant="contained" endIcon={<Storefront />}>
          Go to our store
        </Button>
      </Stack>
    </Box>
  )
}

export default Popular
