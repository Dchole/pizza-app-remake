import Box from "@mui/system/Box"
import Container from "@mui/system/Container"
import Typography from "@mui/material/Typography"

interface IProps {}

const Popular = ({}: IProps) => {
  return (
    <Container component="section" id="customer-favorites" sx={{ py: 8 }}>
      <Typography variant="h2">Customers&apos; Favorite</Typography>
      <Box sx={{ overflowX: "auto" }}></Box>
    </Container>
  )
}

export default Popular
