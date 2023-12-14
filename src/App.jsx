import React from 'react'
import Nav from './components/nav/Nav'
import Button from './components/Button'
import Banner from './components/Banner'
import AuthButtons from './components/AuthButtons'

const WindowSizeContext = React.createContext()

export default function App() {
const [navVisible, setNavVisible] = React.useState(false)
const [windowWidth, setWindowWidth] = React.useState(0)

const overlayVisibility = navVisible ? "overlay-active" : ""
const layoutSwitchWidth = 1000
const desktopLayoutClassName = windowWidth < layoutSwitchWidth ? "" : "desktop-layout"
const heroImgSrc = windowWidth < layoutSwitchWidth ? 
"/images/image-hero-mobile.png" : 
"/images/image-hero-desktop.png"

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

  return (
    <WindowSizeContext.Provider value={{
                                          windowWidth, 
                                          layoutSwitchWidth, desktopLayoutClassName}}>

      {windowWidth < layoutSwitchWidth && 
      <>
      <div className={`nav-container-mobile ${navVisible ? "" : "hidden"}`}>
        <Nav 
          toggleNav={toggleNav}/>
      </div>
      <div className={`bg-overlay ${overlayVisibility}`}></div>
      </>}
      
      
      <header className={`page-header ${desktopLayoutClassName}`}>
        <img src="/images/logo.svg" className="logo"/>

        {windowWidth < layoutSwitchWidth ?
        <Button classProp="open-nav-btn" clickProp={toggleNav}>
          <img src="/icons/icon-menu.svg"/>
        </Button> :
        <>
          <Nav />
          <AuthButtons />
        </>}
      </header>

      <main className={`main-home ${desktopLayoutClassName}`}>
        <div className={`hero-img-container ${desktopLayoutClassName}`}>
          <img 
            src={heroImgSrc}
            className={`hero-img ${desktopLayoutClassName}`}
          />
        </div>
        
        <section className={`home-content ${desktopLayoutClassName}`}>
          <div className={`home-content-text`}>
            <h1 className={`home-content-header ${desktopLayoutClassName}`}>Make remote work</h1>
            <p>Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>
          </div>
          <Button classProp={`primary-btn ${desktopLayoutClassName}`}>Learn more</Button>
          <Banner classProp={`client-logos-banner ${desktopLayoutClassName}`}>
            <img 
              src="/images/client-databiz.svg"
              className="client-logo" />
            <img 
              src="/images/client-audiophile.svg"
              className="client-logo" />
            <img 
              src="/images/client-meet.svg"
              className="client-logo" />
            <img 
              src="/images/client-maker.svg"
              className="client-logo" />
          </Banner>
        </section>
      </main>
      
    </WindowSizeContext.Provider>
  )
}

export { WindowSizeContext }