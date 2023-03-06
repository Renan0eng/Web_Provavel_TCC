import * as React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { Card, CardContent, Box } from '@mui/material';

function Main({ title, post }) {

  return (
    <Grid
      item
      xs={12}
      md={8}
      sx={{
        '& .markdown': {
          py: 3,
        },
      }}
    >
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Divider sx={{
        marginBottom: 3,
      }} />

      <Card sx={{ display: 'flex', marginBottom: 5, borderRadius: 2 }}>
        <CardContent sx={{ flex: 1 }}>
          <Box pb={2}
            dangerouslySetInnerHTML={{ __html: post }}
          />
        </CardContent>
      </Card>
    </Grid>
  );
}

Main.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
};

export default Main;