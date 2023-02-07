import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import BookIcon from '@mui/icons-material/Book';
import StarIcon from '@mui/icons-material/Star';
import Link from 'next/link';
import Divider from '@mui/material/Divider';

import { useRouter } from 'next/router';

import { useState } from 'react';
import { Button, FavoriteIcon } from '@mui/material';

export async function getStaticProps() {

  const data = await fetch('http://192.168.71.213:3001/posts');

  const posts = await data.json();

  return {
    props: {
      posts
    }
  }
}

const feed = ({ posts  }) => {

  const router = useRouter();

  const [postes, setPosts] = useState([
    {
      id: 0,
      title: 'Post 1',
      description: 'Descrição do post 1',
      descriptionDetail: 'Descrição detalhada do post 1',
      image: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/instagram-clone/1.jpeg',
      likes: 10,
      authorId: 1,
      humor: 'feliz',
      comments: [
        {
          id: 1,
          name: 'Renan',
          comment: 'Comentário 1'
        },
        {
          id: 2,
          name: 'Renan',
          comment: 'Comentário 2'
        },
        {
          id: 3,
          name: 'Renan',
          comment: 'Comentário 3'
        }
      ]
    },
    {
      id: 2,
      title: 'Post 2',
      description: 'Descrição do post 2',
      descriptionDetail: 'Descrição detalhada do post 2',
      image: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/instagram-clone/2.jpeg',
      likes: 0,
      authorId: 1,
      humor: 'feliz',
      comments: [
        {
          id: 1,
          name: 'Renan',
          comment: 'Comentário 1'
        },
        {
          id: 2,
          name: 'Renan',
          comment: 'Comentário 2'
        },
        {
          id: 3,
          name: 'Renan',
          comment: 'Comentário 3'
        }
      ]
    },
    {
      id: 3,
      title: 'Post 3',
      description: 'Descrição do post 3',
      descriptionDetail: 'Descrição detalhada do post 3',
      image: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/instagram-clone/3.jpeg',
      likes: 0,
      authorId: 1,
      humor: 'feliz',
      comments: [
        {
          id: 1,
          name: 'Renan',
          comment: 'Comentário 1'
        },
        {
          id: 2,
          name: 'Renan',
          comment: 'Comentário 2'
        },
        {
          id: 3,
          name: 'Renan',
          comment: 'Comentário 3'
        }
      ]
    },
    {
      id: 4,
      title: 'Post 4',
      description: 'Descrição do post 4',
      descriptionDetail: 'Descrição detalhada do post 4',
      image: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/instagram-clone/4.jpeg',
      likes: 0,
      authorId: 1,
      humor: 'feliz',
      comments: [
        {
          id: 1,
          name: 'Renan',
          comment: 'Comentário 1'
        },
        {
          id: 2,
          name: 'Renan',
          comment: 'Comentário 2'
        },
        {
          id: 3,
          name: 'Renan',
          comment: 'Comentário 3'
        }
      ]
    },
    {
      id: 5,
      title: 'Post 5',
      description: 'Descrição do post 5',
      descriptionDetail: 'Descrição detalhada do post 5',
      image: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/instagram-clone/5.jpeg',
      likes: 0,
      authorId: 1,
      humor: 'feliz',
      comments: [
        {
          id: 1,
          name: 'Renan',
          comment: 'Comentário 1'
        },
        {
          id: 2,
          name: 'Renan',
          comment: 'Comentário 2'
        },
        {
          id: 3,
          name: 'Renan',
          comment: 'Comentário 3'
        }
      ]
    },
    {
      id: 6,
      title: 'Post 6',
      description: 'Descrição do post 6',
      descriptionDetail: 'Descrição detalhada do post 6',
      image: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/instagram-clone/6.jpeg',
      likes: 0,
      authorId: 1,
      humor: 'feliz',
      comments: [
        {
          id: 1,
          authorId: 'Renan',
          comment: 'Comentário 1'
        },
        {
          id: 2,
          name: 'Renan',
          comment: 'Comentário 2'
        },
        {
          id: 3,
          name: 'Renan',
          comment: 'Comentário 3'
        }
      ]
    },
    {
      id: 7,
      title: 'Post 7',
      description: 'Descrição do post 7',
      descriptionDetail: 'Descrição detalhada do post 7',
      image: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/instagram-clone/7.jpeg',
      likes: 0,
      authorId: 1,
      humor: 'feliz',
      comments: [
        {
          id: 1,
          name: 'Renan',
          comment: 'Comentário 1'
        },
        {
          id: 2,
          name: 'Renan',
          comment: 'Comentário 2'
        },
        {
          id: 3,
          name: 'Renan',
          comment: 'Comentário 3'
        }
      ]
    },
  ]);

  return (
    <Box style={{
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
      flexDirection: 'row',
    }}>
      <List
        sx={{
          width: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          borderRadius: '10px',
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          flexDirection: 'row',
          p: 1,
          m: 3,
        }}>
        <ListItem key={"text"} disablePadding sx={{ mardin: 5 }}>
          <ListItemButton
            sx={{
              minHeight: 48,
              borderRadius: 2,
              px: 2.5
            }}
          >
            <ListItemIcon
              sx={{
                justifyContent: 'center',
              }}
            >
              <BookIcon />
            </ListItemIcon>
            <ListItemText primary={"Blog"} />
          </ListItemButton>
        </ListItem>
        <ListItem key={"Dashboard"} disablePadding sx={{ mardin: 5 }}>
          <ListItemButton
            sx={{
              minHeight: 48,
              borderRadius: 2,
              px: 2.5
            }}
            onClick={() => {
            }}
          >
            <ListItemIcon
              sx={{
                justifyContent: 'center',
              }}
            >
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary={"Dash Board"} />
          </ListItemButton>
        </ListItem>
      </List>

      {posts.map((post) => (
        <Link color="inherit" style={{
          textDecoration: 'none',
        }}
          href={`/blog/feed/${post.id}`}
        >
          <Button
            color="inherit" 
            sx={{
              backgroundImage: `url('${post.image}')`,
              m: 3,
              p: 0,
              width: '300px',
              height: '300px',
              backgroundSize: 'cover',
              borderRadius: '10px',
              boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.5)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'flex-end',
              marginTop: '20px',
            }}>
            <Box sx={{
              width: '100%',
              height: '20%',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              borderRadius: '10px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              pt: 2,
              pb: 1,
              color: 'rgba(255, 255, 255, 0.5)',
            }}>
              <Box sx={{
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',
                flexDirection: 'row',
                px: 2,
              }}>
                <Typography variant="h5" component="div" gutterBottom>
                  {post.title}
                </Typography>
                <Box sx={{
                  display: 'flex',
                  flexDirection: 'row',
                }}>
                <Typography variant="h5" pr={1} p={0} component="div" gutterBottom>
                  {post.likes}
                </Typography>
                <StarIcon />
                </Box>
              </Box>

              <Typography variant="h6" gutterBottom component="div">
                {post.description}
              </Typography>
            </Box>
          </Button>
        </Link>
      ))
      }
    </Box>
  );
}

export default feed;