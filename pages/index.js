import Layout from '../components/Layout'

import Nav from '../components/Nav'
import Hero from '../components/Hero'
import About from '../components/About'
import Roadmap from '../components/Roadmap'
import Showcase from '../components/Showcase'
import Team from '../components/Team'
import Faq from '../components/Faq'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <Layout>
      <Nav />
      <Hero />
      <About />
      <Roadmap />
      <Showcase />
      <Team />
      <Faq />
      <Footer />
    </Layout>
  )
}

export default Home