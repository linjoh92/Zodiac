import { Outlet } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer
        title="@ Copywrite 2023 Linn"
        subtitle="Assigment Two - Webb- och mobilapplikationsutveckling - USE Typescrpit - Tailwind - Connect to API"
      />
    </>
  )
}
