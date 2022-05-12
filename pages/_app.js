import '../styles/globals.css'
import Navbar from '../components/Navbar'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {useEffect} from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Footer from '../components/footer'
  

function MyApp({ Component, pageProps }) {
  useEffect(()=>{
    import ('../node_modules/bootstrap/dist/js/bootstrap.min.js')
    
  },[])
  return (
    <>
    <Navbar/>
   <div className='container'>
         <Component {...pageProps} />
   </div>
   <Footer/>
   </>
   )

}
export default MyApp
