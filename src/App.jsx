import React from 'react'
import Nav from './components/nav/Nav'
import Button from './components/Button'
import Banner from './components/Banner'

export default function App() {
const [navVisible, setNavVisible] = React.useState(false)

function toggleNav() {
  setNavVisible(prevState => !prevState)
}

  return (
    <>
      <div className={`nav-container-mobile ${navVisible ? "" : "hidden"}`}>
        <Nav toggleNav={toggleNav}/>
      </div>
      
      <header>
        <img src="./public/images/logo.svg" />

        <Button classProp="open-nav-btn" clickProp={toggleNav}>
          <img src="./public/icons/icon-menu.svg"/>
        </Button>
      </header>
      <main>
        <img 
          src="./public/images/image-hero-mobile.png"
          className="hero-img"
        />
        <section className="home-content">
          <h1>Make remote work</h1>
          <p>Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>
          <Button classProp="primary-btn">Learn more</Button>
          <Banner classProp="client-logos-banner">
            <img 
              src="./public/images/client-databiz.svg"
              className="client-logo" />
            <img 
              src="./public/images/client-audiophile.svg"
              className="client-logo" />
            <img 
              src="./public/images/client-meet.svg"
              className="client-logo" />
            <img 
              src="./public/images/client-maker.svg"
              className="client-logo" />
          </Banner>
        </section>
      </main>
      
    </>
  )
}
