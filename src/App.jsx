import React from 'react'
import Nav from './components/nav/Nav'
import Button from './components/Button'
import Banner from './components/Banner'

const WindowSizeContext = React.createContext()

export default function App() {
const [navVisible, setNavVisible] = React.useState(false)
const [windowWidth, setWindowWidth] = React.useState(0)

const overlayVisibility = navVisible ? "overlay-active" : ""
const layoutSwitchWidth = 1000

function toggleNav() {
  setNavVisible(prevState => !prevState)
}

function updateWindowSize() {
  const width = window.innerWidth
  setWindowWidth(width)
}

React.useEffect(() => {
  updateWindowSize()
  window.addEventListener("resize", updateWindowSize)
  return () => window.removeEventListener("resize", updateWindowSize)
}, [])

console.log(windowWidth)

  return (
    <WindowSizeContext.Provider value={{windowWidth, layoutSwitchWidth}}>
      {windowWidth < layoutSwitchWidth && 
      <>
      <div className={`nav-container-mobile ${navVisible ? "" : "hidden"}`}>
        <Nav 
          toggleNav={toggleNav}/>
      </div>
      <div className={`bg-overlay ${overlayVisibility}`}></div>
      </>}
      
      
      <header>
        <img src="./public/images/logo.svg" />

        {windowWidth < layoutSwitchWidth ?
        <Button classProp="open-nav-btn" clickProp={toggleNav}>
          <img src="./public/icons/icon-menu.svg"/>
        </Button> :
        <Nav/>}

        
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
      
    </WindowSizeContext.Provider>
  )
}

export { WindowSizeContext }