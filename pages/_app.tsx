import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Script from 'next/script';

function MyApp({ Component, pageProps }: AppProps) {
  const gaId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS;

  return (
    <>
      {gaId ? (
        <>
          <Script
            strategy='lazyOnload'
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
          />
          <Script id='ga-script' strategy='lazyOnload'>
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', ${JSON.stringify(gaId)}, {
                page_path: window.location.pathname,
              });
            `}
          </Script>
        </>
      ) : null}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
