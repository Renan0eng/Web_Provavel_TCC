import Nav from '../../components/nav';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const blog = () => {
  return (
    <>
      <Nav />
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
        <Typography variant="h1" component="h2" gutterBottom>
          Blog
        </Typography>
      </Box>
    </>
  );
}

export default blog;