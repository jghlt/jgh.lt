import Head from 'next/head'
import data from '../components/data'
import Holding from '../components/Holding/Holding'

function HomePage() {
  return (
    <div>
      <Head>
        <base href="/"/>
        <meta charSet="utf-8"/>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"/>
        
        <title>{ data.meta.title }</title>
        <meta name="description" content={ data.meta.description } />

        <meta property="og:type" content="website"/>
        <meta property="og:site_name" content={ data.meta.name } />
        <meta property="og:url" content={ data.meta.url } />
        <meta property="og:title" content={ data.meta.title } />
        <meta property="og:image" content="/icons/og.png" />
        <meta property="og:description" content={ data.meta.description } />

        <meta name="twitter:site" content={ data.meta.name } />
        <meta name="twitter:title" content={ data.meta.title } />
        <meta name="twitter:description" content={ data.meta.description } />
        <meta name="twitter:image" content="/icons/og.png" />
        <meta name="twitter:card" content="summary_large_image" />

        <link rel="shortcut icon" type="image/x-icon" href="/icons/icon-120x120.png" sizes="120x120" />
        <link rel="shortcut icon" type="image/x-icon" href="/icons/icon-152x152.png" sizes="152x152" />
        <link rel="shortcut icon" type="image/x-icon" href="/icons/icon-167x167.png" sizes="167x167" />
        <link rel="shortcut icon" type="image/x-icon" href="/icons/icon-180x180.png" sizes="180x180" />

      </Head>
      <Holding />
    </div>
  )
}

export default HomePage