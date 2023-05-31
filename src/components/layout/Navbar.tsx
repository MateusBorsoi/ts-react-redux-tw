import { Grid, Typography } from "@mui/material";

const Navbar = () => {
  return (
    <Grid
    container
    spacing={2}
    
    sx={{
      border: 2,  
      top: 0,
      width: "100%",
      backgroundColor: "lightblue",
      marginRight: 0,
      marginLeft:0
    }}
  >
    <Grid
      item
      xs={4}
      sx={{
        border: 2,
      }}
    >
      <Typography variant="h3">Navbar</Typography>
    </Grid>
    <Grid
      item
      xs={4}
      sx={{
        border: 2,
      }}
    >
      <Typography variant="h3">Navbar midle</Typography>
    </Grid>
    <Grid
      item
      xs={4}
      sx={{
        border: 2,
      }}
    >
      <Typography variant="h3">Navbar Final</Typography>
    </Grid>
  </Grid>
  );
};

export default Navbar;
