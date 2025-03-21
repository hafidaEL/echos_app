import { Box, Typography } from "@mui/material"

export const Header = () => {
  return (
    <Box 
      sx={{ 
        backgroundColor: "#f7f7f7", 
        padding: "20px", 
        borderRadius: "10px",
        textAlign: "center"
      }}
      mb={5}
      data-testid="header"
    >
      <Typography variant="h5" fontWeight="bold">
        NEWSLETTERS
      </Typography>
      <Typography variant="body1" sx={{ maxWidth: "800px", margin: "0 auto" }}>
        Dans cette page, vous retrouvez l’ensemble des newsletters des Echos et des marques satellites. Ainsi, vous pouvez découvrir toutes nos newsletters selon vos centres d’intérêt et gérer plus facilement l’inscription à vos newsletters.
      </Typography>
    </Box>
  )
}
