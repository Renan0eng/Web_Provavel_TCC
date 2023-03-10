import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from '../Components/Header';
import MainFeaturedPost from '../Components/MainFeaturedPost';
import FeaturedPost from '../Components/FeaturedPost';
import Main from '../Components/Main';
import Sidebar from '../Components/Sidebar';
import Footer from '../Components/Footer';
// import post1 from '../components/blog-post.1.md';
// import post2 from '../components/blog-post.2.md';
// import post3 from '../components/blog-post.3.md';

const sections = [
  { title: 'Technology', url: '#' },
  { title: 'Design', url: '#' },
  { title: 'Culture', url: '#' },
  { title: 'Business', url: '#' },
  { title: 'Politics', url: '#' },
  { title: 'Opinion', url: '#' },
  { title: 'Science', url: '#' },
  { title: 'Health', url: '#' },
  { title: 'Style', url: '#' },
  { title: 'Travel', url: '#' },
];

const mainFeaturedPost = {
  title: 'Title of a longer featured blog post',
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: 'https://source.unsplash.com/random',
  imageText: 'main image description',
  linkText: 'Continue reading…',
};

const featuredPosts = [
  {
    title: 'Featured post',
    date: 'Nov 12',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageLabel: 'Image Text',
  },
  {
    title: 'Post title',
    date: 'Nov 11',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageLabel: 'Image Text',
  },
];

const sidebar = {
  title: 'About',
  description:
    'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
  archives: [
    { title: 'March 2020', url: '#' },
    { title: 'February 2020', url: '#' },
    { title: 'January 2020', url: '#' },
    { title: 'November 1999', url: '#' },
    { title: 'October 1999', url: '#' },
    { title: 'September 1999', url: '#' },
    { title: 'August 1999', url: '#' },
    { title: 'July 1999', url: '#' },
    { title: 'June 1999', url: '#' },
    { title: 'May 1999', url: '#' },
    { title: 'April 1999', url: '#' },
  ],
  social: [
    { name: 'GitHub', icon: GitHubIcon, url: 'https://github.com/Renan0eng' },
    { name: 'Instagram', icon: InstagramIcon, url: 'https://www.instagram.com/renan_nardii/' },
    { name: 'Linkedin', icon: LinkedInIcon, url: 'https://www.linkedin.com/in/renan-nardi-569300223/' },
  ],
};

const post = '<h1>Teste poste com html</h1><h3><br></h3><h3>Motivos para usar este site.</h3><ul><li>Este site é focado em ajudar os alunos </li><li>Este site não tem fins lucrativos</li><li>Este site pode ser editado por vc no <a href="https://github.com/Renan0eng/CodeCampus" rel="noopener noreferrer" target="_blank">GitHub</a> </li><li>Este site é <strong>nosso</strong></li></ul><p><br></p><h3>Onde me encontra?</h3><ul><li><a href="https://github.com/Renan0eng" rel="noopener noreferrer" target="_blank">GitHub</a></li><li><a href="https://www.instagram.com/renan_nardii/" rel="noopener noreferrer" target="_blank">Instagram</a></li><li><a href="https://www.linkedin.com/in/renan-nardi-569300223" rel="noopener noreferrer" target="_blank">LinkedIn</a> </li></ul>'

export default function Blog() {

  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Diário de um Programador" sections={sections} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts && featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post}/>
            ))}
          </Grid>
          <Grid container spacing={5} sx={{ mt: 3 }}>
            <Main title="From the firehose" post={post} />
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid>
        </main>
      </Container>
      <Footer
        title="Footer"
        description="Todos os direitos reservados. Desenvolvido por Renan Nardi. Aprecie a jornada enquanto aprende e evolui com as tecnologias mais recentes."
      />
    </ThemeProvider>
  );
}