
import Navbar from '../components/navbar'
import AboutPage from '../components/aboutComponent'
import Footer from '../components/footer'

function about() {
  return (
    <>
       <Navbar />
       <div className='h-min-screen'>
       <AboutPage/>
       </div>
       <Footer/>
    </>
  )
}

export default about