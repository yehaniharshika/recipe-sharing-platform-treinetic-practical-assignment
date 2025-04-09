import { Box, Typography, Stack } from '@mui/material';
import playStore from '../../assets/play_store.png';
import appStore from '../../assets/app_store.png';

const AppDownload = () => {
  return (
    <Box
      id="app-download"
      sx={{
        mt: { xs: 8, md: 12 },
        textAlign: 'center',
        fontFamily: 'Montserrat, sans-serif',
      }}
    >
      <Typography
        variant="h5"
        sx={{
          fontWeight: 800,
          fontSize: { xs: '6vw', sm: '4vw', md: '2.5vw' },
          fontFamily: "Montserrat, sans-serif"}}
      >
         For Better Experience Download<br />
        <Box component="span" sx={{ fontFamily: 'Lilita One, sans-serif', color: 'rgb(68, 7, 9)' }}>
        FlavorNest
        </Box>{' '}
        App
      </Typography>

      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={{ xs: 3, sm: 5 }}
        justifyContent="center"
        alignItems="center"
        sx={{ mt: 5 }}
      >
        <Box
          component="img"
          src={playStore}
          alt="Play Store"
          sx={{
            width: { xs: '60vw', sm: '40vw', md: '180px' },
            maxWidth: '180px',
            cursor: 'pointer',
            transition: '0.5s',
            '&:hover': { transform: 'scale(1.05)' },
          }}
        />
        <Box
          component="img"
          src={appStore}
          alt="App Store"
          sx={{
            width: { xs: '60vw', sm: '40vw', md: '180px' },
            maxWidth: '180px',
            cursor: 'pointer',
            transition: '0.5s',
            '&:hover': { transform: 'scale(1.05)' },
          }}
        />
      </Stack>
    </Box>
  );
};

export default AppDownload;
