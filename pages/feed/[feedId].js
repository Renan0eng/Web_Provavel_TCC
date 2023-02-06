

import { Image } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import { useRouter } from 'next/router'

export async function getStaticProps(context) {

  const { params } = context

  const data = await fetch(`http://192.168.71.213:3001/post/${params.feedId}`);

  const post = await data.json();

  return {
    props: {
      post
    }
  }
}

export async function getStaticPaths() {

  const data = await fetch(`http://192.168.71.213:3001/posts`);

  const posts = await data.json();

  const paths = posts.map(post => {
    return {
      params: { feedId: post.id.toString() }
    }
  }
  )

  return {
    paths,
    fallback: false
  }
}

export default function Feed({ post }) {


  console.log(post[0]);


  return (
    <Box sx={{
      width: '100%',
      backgroundSize: 'cover',
      position: 'absolute',
      flexWrap: "wrap",
      top: '0',
      left: '0',
      right: '0',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      backgroundColor: 'rgba(0,0,0,0.8)',
    }}>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '70%',
        maxWidth: '70vh',
        backgroundSize: 'cover',
        position: 'relative',
      }}
      >
        <Typography sx={{
          color: 'white',
          fontSize: '1.5rem',
          fontWeight: 'bold',
          marginTop: '1rem',
        }}>{post[0].title}</Typography>
        <Typography sx={{
          color: 'white',
          fontSize: '1rem',
          marginTop: '1rem',
        }}>{post[0].description}</Typography>

        <Box sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: '1rem',
        }}>
          <Typography sx={{
            color: 'white',
            fontSize: '1rem',
            fontWeight: 'bold'
          }}>{post[0].authorId}</Typography>

          <Typography sx={{
            color: 'white',
            fontSize: '1rem',
            fontWeight: 'bold'
          }}>{post[0].humor}</Typography>

          <Typography sx={{
            color: 'white',
            fontSize: '1rem',
            fontWeight: 'bold'
          }}>{post[0].likes}</Typography>

        </Box>
      </Box>
    </Box>
  )
}