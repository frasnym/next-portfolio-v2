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
  const metaTitle = `${props.title} by Nyoman Frastyawan`;
  const metaDescription = `${metaTitle}. Working on backend software developer with Golang and Javascript.`;

  return (
    <Container>
      <NavBar />
      <Head>
        <title>{props.title} | Nyoman Frastyawan</title>
        <link rel='shortcut icon' href='/favicon.ico' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />

        {/* Primary Meta Tags */}
        <meta name='title' content={metaTitle} />
        <meta name='description' content={metaDescription} />
        <meta
          name='keywords'
          content='nyoman, frastyawan, frasnym, portfolio, backend, software, developer, golang, go, javascript'
        />

        {/* Google */}
        <meta
          name='google-site-verification'
          content='MOvO1VjEQWB6oyrmzVFy5pKYoHXBv_2T1LYi7y-djb8'
        />

        {/* Open Graph / Facebook */}
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://frasnym.tech/' />
        <meta property='og:title' content={metaTitle} />
        <meta property='og:description' content={metaDescription} />
        <meta
          property='og:image'
          content='https://raw.githubusercontent.com/frasnym/next-portfolio-v2/main/public/images/avatar.jpg'
        />
        <meta property='og:locale' content='en_ID' />
        <meta property='og:locale:alternate' content='en_ID' />

        {/* Twitter */}
        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:url' content='https://frasnym.tech/' />
        <meta property='twitter:title' content={metaTitle} />
        <meta property='twitter:description' content={metaDescription} />
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
