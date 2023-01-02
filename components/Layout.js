import { Navbar } from '../components/Navbar'
export function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div className="container-xxl py-5">{children}</div>
    </>
  )
}
