
import { Box, Typography, Grid, Divider, IconButton, Stack } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#323232', color: '#d9d9d9', pt: 10, pb: 4, px: { xs: 4, md: 10 }, mt: 10 }}>
      <Grid container spacing={8} justifyContent="center">
        {/* Left Section */}
        <Grid item xs={12} md={6}>
          <Typography variant="h4" fontWeight="bold" fontFamily="'Lilita One', cursive">
           YumVerse
          </Typography>
          <Typography mt={2} fontFamily="'Montserrat', sans-serif">
          Discover, share, and savor delightful recipes from around the world, making every meal a masterpiece! 🍽️
          </Typography>
          <Stack direction="row" spacing={2} mt={2}>
            <IconButton sx={{ color: '#d9d9d9' }}>
              <FacebookIcon />
            </IconButton>
            <IconButton sx={{ color: '#d9d9d9' }}>
              <TwitterIcon />
            </IconButton>
            <IconButton sx={{ color: '#d9d9d9' }}>
              <LinkedInIcon />
            </IconButton>
          </Stack>
        </Grid>

        {/* Center Section */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" color="white" fontFamily="'Montserrat', sans-serif">
            QUICK LINKS
          </Typography>
          <Box mt={2}>
            {['Home', 'About us', 'Recipes', 'Profile','Privacy policy'].map((item, index) => (
              <Typography
                key={index}
                sx={{ cursor: 'pointer', mb: 1, fontFamily: 'Montserrat, sans-serif' }}
              >
                {item}
              </Typography>
            ))}
          </Box>
        </Grid>

        {/* Right Section */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" color="white" fontFamily="'Montserrat', sans-serif">
            GET IN TOUCH
          </Typography>
          <Box mt={2}>
            <Typography fontFamily="'Montserrat', sans-serif" mb={1}>
              +9438-345-7890
            </Typography>
            <Typography fontFamily="'Montserrat', sans-serif">
              contact@yumrush.com
            </Typography>
          </Box>
        </Grid>
      </Grid>

      {/* Divider */}
      <Divider sx={{ my: 4, backgroundColor: 'grey' }} />

      {/* Copyright */}
      <Typography
        textAlign="center"
        variant="body2"
        fontFamily="'Montserrat', sans-serif"
      >
        Copyright 2025 © YumRush.com - All Right Reserved
      </Typography>
    </Box>
  );
};

export default Footer;
