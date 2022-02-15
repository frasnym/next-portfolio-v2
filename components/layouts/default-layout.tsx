import styled from "styled-components";
import dynamic from 'next/dynamic'
import Menu from "../ui/menu";

const ThemeToggle = dynamic(() => import('../ui/theme-toggle'), { ssr: false })

type DefaultLayoutProps = {
  children: React.ReactNode,
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

export default function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <Container>
      {/* <Header /> */}
      <PageContainer>{children}</PageContainer>
      {/* <Footer /> */}
      <ThemeToggle />
      <Menu />
    </Container>
  );
}
