import Head from 'next/head';
import Header from 'components/header';
import { useRouter } from 'next/router';


export default ({ children, title = 'FRYSTIC | digital prodcucts' }: LayoutType) => {
  const router = useRouter();
  const pathname = router.pathname;



  return (
    <div className="app-main">
      <Head>
        <title>{ title }</title>
        <link rel="stylesheet" href="/css/swiper.css" />
  <link rel="stylesheet" href="/css/base.css" />
  <link rel="stylesheet" href="/css/theme.css" />
  <link
    rel="stylesheet"
    media="screen and (min-width: 100px) and (max-width: 499px)"
    href="/css/mobile.css"
  />
  <link
    rel="stylesheet"
    media="screen and (min-width: 500px) and (max-width: 999px)"
    href="/css/tablet.css"
  />
  <link
    rel="stylesheet"
    media="screen and (min-width: 1000px) and (max-width: 1399px)"
    href="/css/mini-desktop.css"
  />
  <link
    rel="stylesheet"
    media="screen and (min-width: 1400px)"
    href="/css/desktop.css"
  />
         <div className="backg" />
<span id="circle" className="circle" />
      </Head>

      <meta charSet="utf-8" />
  <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
  />
  <meta
    name="keywords"
    content="طب سنتی, طب, داروخانه, شفا, تله مدیسن, بهبودخانه, بهبود خانه, behboodkhaneh, fif,nohki, fif,n ohki"
  />
  <meta
    name="description"
    lang="fa"
    content="سایت تخصصی پزشکی تلفیقی با رویکرد طب سنتی ایرانی"
  />
  <meta
    name="description"
    lang="en"
    content="Telemedicine - Combined medicine with the approach of traditional Persian medicine"
  />
  <meta name="author" lang="en" content="FRYSTIC" />
  <meta name="mobile-web-app-capable" content="yes" />
  <meta name="apple-mobile-web-app-capable" content="yes" />
  <meta name="apple-mobile-web-app-status-bar-style" content="#d4e1f2" />
  <meta name="msapplication-navbutton-color" content="#d4e1f2" />
  <meta name="msapplication-TileColor" content="#d4e1f2" />
  <meta name="msapplication-TileImage" content="/icon-144x144.png" />
  <meta name="robots" content="noindex, nofollow" />
  <link rel="shortcut icon" href="/img/icon/ico.ico" />

      <Header />

      <main className={(pathname !== '/' ? 'main-page' : '')}>
        { children }
      </main>
    </div>
  )
}