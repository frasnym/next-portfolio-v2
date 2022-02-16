import styled from "styled-components";
import dynamic from 'next/dynamic'
import Menu from "../ui/menu";
import Head from "next/head";

const ThemeToggle = dynamic(() => import('../ui/theme-toggle'), { ssr: false })

type DefaultLayoutProps = {
  children: React.ReactNode,
  title: string,
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding-top: var(--nav-height);
  max-width: var(--max-width);
  margin: 0 auto;
`;

const PageContainer = styled.div`
  padding: 10px;
`

export default function DefaultLayout({ children, title }: DefaultLayoutProps) {
  return (
    <Container>
      <Head>
        <title>{title} | FrasNym</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        {/* Primary Meta Tags */}
        <meta name="title" content="Nyoman Frastyawan (FrasNym) - Software Engineer" />
        <meta name="description" content="Indonesian 🇮🇩 Backend Developer. At your service with Golang and Javascript." />
        <meta name="keywords" content="nyoman frastyawan, frasnym, frasnym portfolio, frasnym developer, frasnym freelance" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://frasnym.tech/" />
        <meta property="og:title" content="Nyoman Frastyawan (FrasNym) - Software Engineer" />
        <meta property="og:description" content="Indonesian 🇮🇩 Backend Developer. At your service with Golang and Javascript." />
        <meta property="og:image" content="https://raw.githubusercontent.com/frasnym/next-portfolio-v2/main/public/images/avatar.jpg" />
        <meta property="og:locale" content="en_ID" />
        <meta property="og:locale:alternate" content="en_ID" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://frasnym.tech/" />
        <meta property="twitter:title" content="Nyoman Frastyawan (FrasNym) - Software Engineer" />
        <meta property="twitter:description" content="Indonesian 🇮🇩 Backend Developer. At your service with Golang and Javascript." />
        <meta property="twitter:image" content="https://raw.githubusercontent.com/frasnym/next-portfolio-v2/main/public/images/avatar.jpg" />
        <meta name="twitter:site" content="@frasnym" />
        <meta name="twitter:creator" content="@frasnym" />
      </Head>
      <PageContainer>{children}</PageContainer>
      {/* <Footer /> */}
      <ThemeToggle />
      <Menu />
    </Container>
  );
}