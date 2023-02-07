import { Avatar, Box, Button, Typography, } from '@mui/material';
import { useRouter } from 'next/router'
import StarIcon from '@mui/icons-material/Star';
import StartIcon from '@mui/icons-material/Start';
import MenuIcon from '@mui/icons-material/Menu';

import Link from 'next/link';

export async function getStaticProps(context) {

  const { params } = context

  const data = await fetch(`http://26.245.107.48:3001/post/${params.feedId}`);

  const post = await data.json();

  return {
    props: {
      post
    }
  }
}

export async function getStaticPaths() {

  const data = await fetch(`http://26.245.107.48:3001/posts`);

  const posts = await data.json();

  const paths = posts.map(post => {
    return {
      params: { feedId: post.id.toString() }
    }
  }
  )

  return {
    paths,
    fallback: true
  }
}

export default function Feed({ post }) {

  console.log(post[0]);

  return (

    <Box
      style={{
        backgroundColor: '#ccc',
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
        flexDirection: 'column',
      }}
    >


      <Box sx={{
        width: '70%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderRadius: '10px',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'column',
        p: 1,
        m: 3,
      }}
      >
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
            p: 1,
            mt: 3,
          }}
        >

          <Link style={{ textDecoration: "none", paddingLeft: '3rem', }} href={"/blog/feed"}>
            <Box sx={{
              display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', borderRadius: '50%', boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.9)', ml: 3, p: 1, backgroundColor: 'rgba(0, 0, 0, 0.2)',
            }}>
              <MenuIcon style={{ color: 'white'}} />
            </Box>
          </Link>

          <Link style={{ textDecoration: "none", paddingRight: '3rem', }} href={"/blog/feed"}>
            <Box sx={{
              display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', borderRadius: '50%', boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.9)', ml: 3, p: 1, backgroundColor: 'rgba(0, 0, 0, 0.2)',
            }}>
              <StartIcon style={{ color: 'white'}} />
            </Box>
          </Link>

        </Box>
        <Box sx={{
          width: '70%',
          borderRadius: '10px',
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          flexDirection: 'column',
          m: 3,
        }}
        >
          <Box sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            pb: '1rem',
            backgroundColor: 'rgba(0, 0, 0, 0.2)',
            mt: 3,
            mb: 3,
            borderRadius: '10px',
            boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.9)',
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
              justifyContent: 'space-around',
              marginTop: '1rem',
              flexWrap: "wrap",
            }}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  p: 2
                }}
              >
                <Avatar
                  sx={{
                    width: 50,
                    height: 50,
                    m: 1,
                    p: 0,
                    backgroundSize: 'cover',
                    position: 'relative',
                  }}
                  alt="Imagem"
                  src={post[0].authorAvatar}
                />

                <Typography sx={{
                  color: 'white',
                  fontSize: '1rem',
                  fontWeight: 'bold',
                }}>{post[0].authorName}</Typography>
              </Box>

              <Typography sx={{
                color: 'white',
                fontSize: '1rem',
                fontWeight: 'bold',
                p: 2
              }}>{post[0].humor}</Typography>

              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  p: 2
                }}
              >
                <StarIcon sx={{
                  color: 'white',
                  fontSize: '1rem',
                  fontWeight: 'bold'
                }} />

                <Typography sx={{
                  color: 'white',
                  fontSize: '1rem',
                  fontWeight: 'bold'
                }}>{post[0].likes}</Typography>

              </Box>

            </Box>

          </Box>
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
            backgroundSize: 'cover',
            position: 'relative',
          }}
          >
            <img src={post[0].image} style={{
              backgroundImage: `url('${post.image}')`,
              m: 3,
              p: 0,
              width: '100%',
              backgroundSize: 'cover',
              borderRadius: '10px',
              boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.5)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'flex-end',
              marginTop: '20px',
            }} alt="Imagem" />
          </Box>
          <Box sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundSize: 'cover',
            position: 'relative',
            pb: '1rem',
          }}
          >
            <Typography sx={{
              color: 'white',
              fontSize: '1rem',
              marginTop: '1rem',
            }}>{post[0].descriptionDetail}</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}