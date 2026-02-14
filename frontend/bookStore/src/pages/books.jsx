
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Books from '../components/booksComponent';


function books() {
  return (
    <>
       <Navbar />
       <div className="min-h-screen">
       <Books />
       </div>
       <Footer />
    </>
  )
}

export default books