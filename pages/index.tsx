import type { NextPage } from 'next';
import { Body } from '../components/home-page/Body';
import { Header } from '../components/home-page/Header';
import { Quote } from '../components/home-page/Quote';
import { SocialMediaLinks } from '../components/home-page/SocialMediaLinks';
import { DefaultLayout } from '../components/layouts/DefaultLayout';
import { Separator } from '../components/ui/Separator';

const Home: NextPage = () => {
  return (
    <DefaultLayout title='Start to see my magic here'>
      <Header />
      <Separator />
      <Quote />
      <Separator />
      <Body />
      <SocialMediaLinks />
    </DefaultLayout>
  );
};

export default Home;
