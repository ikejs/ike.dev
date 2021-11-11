import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Github, Instagram } from '@styled-icons/boxicons-logos'
import { Envelope } from '@styled-icons/boxicons-solid'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-800 text-white">
      <Head>
        <title>Ike Holzmann</title>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
        <link rel="manifest" href="/favicons/site.webmanifest" />
        <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <Image src="/images/me-wave.png" width="100px" height="100px" />
        <h1 className="text-6xl">Welcome to <span className="text-blue-400"><Link href="/">ike.dev</Link></span></h1>

        <p className="mt-3 text-2xl animate-pulse text-gray-300">
          My portfolio is under construction 👷
        </p>
        <p className="mt-2 text-gray-200">
          You can view my resume <a className="text-blue-400" href="/resume.pdf">here</a>.
        </p>
      </main>

      <footer className="flex items-center justify-between w-64 h-24 text-blue-500">
        <a
          href="https://github.com/ikejs"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github size="2em" color="white" />
        </a>
        <a
          href="https://www.instagram.com/isaac.holzmann/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Instagram size="2em" color="white" />
        </a>
        <a
          href="mailto:ike@holzmann.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Envelope size="2em" color="white" />
        </a>
      </footer>
    </div>
  )
}
