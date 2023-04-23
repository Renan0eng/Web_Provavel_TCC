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
  // { title: 'Technology', url: '#' },
  // { title: 'Design', url: '#' },
  // { title: 'Culture', url: '#' },
  // { title: 'Business', url: '#' },
  // { title: 'Politics', url: '#' },
  // { title: 'Opinion', url: '#' },
  // { title: 'Science', url: '#' },
  // { title: 'Health', url: '#' },
  // { title: 'Style', url: '#' },
  // { title: 'Travel', url: '#' },
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

const post = '<!DOCTYPE html><html><head><title>Next.js 13: Melhorias e Novidades para o Desenvolvimento Web</title><style>body {background-color: #f7f7f7;font-family: Arial, sans-serif;font-size: 16px;line-height: 1.5;margin: 0;padding: 0;}header {background-color: #333;color: #fff;padding: 20px;text-align: center;}h1 {font-size: 36px;margin: 0;}main {margin: 20px;}section {background-color: #fff;border-radius: 5px;box-shadow: 0 2px 5px rgba(0, 0, 0, 01);padding: 20px;}h2 {font-size: 24px;margin: 0 0 10px;}p {margin: 0 0 10px;}a {color: #0077cc; /* Define a cor do texto do link */text-decoration: none; /* Remove o sublinhado padrão do link */font-weight: bold; /* Define a fonte em negrito para o link */}a:hover {text-decoration: underline; /* Adiciona um sublinhado ao passar o mouse sobre o link */}</style></head><body><h1>Next.js 13: Melhorias e Novidades para o Desenvolvimento Web</h1><h2>O que é o Next.js e por que ele é importante para o desenvolvimento web?</h2><p>O Next.js é um framework para React que tem se destacado nos últimos anos por oferecer diversas funcionalidades que ajudam a tornar o desenvolvimento de aplicações web mais eficiente e ágil. Em sua versão 13, lançada recentemente, o Next.js traz ainda mais melhorias e novidades para os desenvolvedores.</p><h2>Funcionalidades do Next.js: SSR, SSG, Rotas Dinâmicas e CSS-in-JS</h2><p>Uma das principais vantagens do Next.js é a sua capacidade de renderizar as páginas do lado do servidor (SSR), o que melhora significativamente o tempo de carregamento e a experiência do usuário. Além disso, o Next.js também oferece suporte a renderização estática (SSG), que pode ser ainda mais rápida em certos casos.</p><p>Outra funcionalidade interessante do Next.js é o seu sistema de rotas dinâmicas, que permite criar rotas personalizadas e dinâmicas para diferentes páginas da aplicação. Isso pode ser útil para criar páginas de produtos, por exemplo, onde cada produto teria sua própria página com uma rota personalizada.</p><p>O Next.js também oferece suporte a CSS-in-JS, o que permite criar estilos para os componentes da aplicação de forma mais modular e organizada. Além disso, o Next.js traz melhorias no suporte a TypeScript, tornando ainda mais fácil a integração dessa linguagem no desenvolvimento de aplicações web.</p><h2>Novidades da Versão 13 do Next.js: Melhorias na <a href="https://nextjs.org/blog/next-13" target="_blank">Documentação</a>, Usabilidade e Desempenho</h2><p>Outras novidades da versão 13 incluem melhorias na documentação e na usabilidade do framework, bem como melhorias no desempenho e na compatibilidade com diferentes navegadores.</p><h2>Por que escolher o Next.js para o seu próximo projeto de desenvolvimento web?</h2><p>Em resumo, o Next.js é um framework muito interessante para quem trabalha com React e deseja aumentar a eficiência e a agilidade no desenvolvimento de aplicações web. Com a sua nova versão 13, o Next.js traz ainda mais funcionalidades e melhorias para os desenvolvedores, tornando-o uma opção ainda mais atrativa para projetos web.</p></body></html>'

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
              <FeaturedPost key={post.title} post={post} />
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