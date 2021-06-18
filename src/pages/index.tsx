import Head from 'next/head'
import { Header } from '../components/Header'
import { Resume } from '../components/Resume'
import { About } from '../components/About'
import { Skills } from '../components/Skills'
import { Projects } from '../components/Projects'
import { Contact } from '../components/Contact'
import { Footer } from '../components/Footer'

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Portfolio Guilherme Lawisch</title>
      </Head>
      
      <Header/>

      <Resume/>

      <About/>

      <Skills/>

      <Projects/>

      <Contact/>

      <Footer/>
    </>
  )
}