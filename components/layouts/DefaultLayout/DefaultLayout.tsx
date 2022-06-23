import Head from 'next/head';
import { NextPage } from 'next';
import NavBar from '../../ui/navbar';
import Footer from '../../ui/footer';
import { Container, PageContainer } from './DefaultLayout.styled';

type Props = {
  children: React.ReactNode;
  title: string;
};

const DefaultLayout: NextPage<Props> = function (props) {
  return (
    <Container>
      <NavBar />
      <Head>
        <title>{props.title} | FrasNym</title>
        <link rel='shortcut icon' href='/favicon.ico' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />

        {/* Primary Meta Tags */}
        <meta
          name='title'
          content='Nyoman Frastyawan (FrasNym) - Software Engineer'
        />
        <meta
          name='description'
          content='Indonesian 🇮🇩 Backend Developer. At your service with Golang and Javascript.'
        />
        <meta
          name='keywords'
          content='nyoman frastyawan, frasnym, frasnym portfolio, frasnym developer, frasnym freelance'
        />

        {/* Open Graph / Facebook */}
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://frasnym.tech/' />
        <meta
          property='og:title'
          content='Nyoman Frastyawan (FrasNym) - Software Engineer'
        />
        <meta
          property='og:description'
          content='Indonesian 🇮🇩 Backend Developer. At your service with Golang and Javascript.'
        />
        <meta
          property='og:image'
          content='https://raw.githubusercontent.com/frasnym/next-portfolio-v2/main/public/images/avatar.jpg'
        />
        <meta property='og:locale' content='en_ID' />
        <meta property='og:locale:alternate' content='en_ID' />

        {/* Twitter */}
        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:url' content='https://frasnym.tech/' />
        <meta
          property='twitter:title'
          content='Nyoman Frastyawan (FrasNym) - Software Engineer'
        />
        <meta
          property='twitter:description'
          content='Indonesian 🇮🇩 Backend Developer. At your service with Golang and Javascript.'
        />
        <meta
          property='twitter:image'
          content='https://raw.githubusercontent.com/frasnym/next-portfolio-v2/main/public/images/avatar.jpg'
        />
        <meta name='twitter:site' content='@frasnym' />
        <meta name='twitter:creator' content='@frasnym' />
      </Head>
      <PageContainer>{props.children}</PageContainer>
      <Footer />
    </Container>
  );
};

export default DefaultLayout;
