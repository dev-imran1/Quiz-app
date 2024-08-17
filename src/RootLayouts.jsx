
import Footer from './pages/Footer.jsx'
import Nav from './pages/Nav.jsx'
import { Outlet } from 'react-router-dom'

const RoutLayOut = () => {
  return (
    <>
    <Nav />
        <Outlet />
    <Footer />
    </>
  )
}

export default RoutLayOut