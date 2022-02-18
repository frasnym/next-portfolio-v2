import type { NextPage } from 'next'
import Body from '../components/home-page/body';
import Header from '../components/home-page/header';
import MediaSocial from '../components/home-page/media-social';
import Quote from '../components/home-page/quote';
import DefaultLayout from '../components/layouts/default-layout';
import Separator from '../components/ui/separator';

const Home: NextPage = () => {
  return (
    <DefaultLayout title='Home'>
      <Header />
      <Separator />
      <Quote />
      <Separator />
      <Body />
      <MediaSocial />
    </DefaultLayout>
  )
}

export default Home
