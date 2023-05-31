import { Grid, Typography } from "@mui/material";

const Footer = () => {

  let time = new Date()
  return (
    <>
      <Grid
        className="footerGrid"
        container
        spacing={2}
        sx={{
          position: "fixed",
          bottom: 0,
          width: "100%",
          marginRight: 0,
          marginLeft: 0,
          height: 100
          
        }}
      >
        <Grid
          item
          xs={4}
        >
          <Typography variant="h3"></Typography>
        </Grid>
        <Grid
          item
          xs={4}
          
        >
          <Typography variant="h3"></Typography>
        </Grid>
        <Grid
          item
          xs={4}
          
        >
          <Typography variant="subtitle2"></Typography>
        </Grid>
        <Grid
          item
          xs={12}
          
        >
          <Typography
            variant="subtitle2"
            sx={{
              textAlign: "center",
              fontSize: 12,
            }}
          >
            Sistema Hasghy © {time.getFullYear()} | Desenvolvido por <span>Mateus Borsoi</span>
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default Footer;
