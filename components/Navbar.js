import Link from "next/link"
import Image from 'next/image'
import img from '../public/logo.webp'
import {useState} from 'react'
function Navbar(){

 const[show,setshow]=useState(false)
 const toggleicon=()=>{
  setshow(!show)
 }
    return(
        <div className="container">

   <div className="row">


   <div className="col-5">
         <input type="text" placeholder="search" className="hidden" style={show?{visibility:'visible'}:{visibility:'hidden'}}>
          </input> 
          <i className="bi bi-search nav-link active link mx-2 inputsearch"  onClick={toggleicon}> </i>
        </div>
        <div className="col-4">
        <Link  href="/home"  >
        <a className="nav-link active link1 mx-2" aria-current="page">
        <Image src={img} alt="notfound">
          </Image>
          </a>
        </Link>
        </div>
        <div className="col-1 offset-2">
        <Link  href="/favourit"  >
        <a className="nav-link active link1 mx-2" aria-current="page"> 
        <i className="bi bi-heart-fill"></i>
       </a>
        </Link>
        <Link  href="/cart"  >
        <a className="nav-link active link1 mx-2" aria-current="page">
        <i className="bi bi-bag-fill"></i> </a>
        </Link>
        </div>

        
        
 </div>  






        <div className="row">
          
  <nav  className="navbar navbar-expand-lg navbar-light bg-light">
  <div  className="container-fluid">
    
    <button  className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div  className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav pages offset-2">
        
      <Link href="/home">
               <a className="nav-link active link1 mx-2" aria-current="page"> 
                HOME
                </a>
               </Link>


               <Link href="/home/women">
               <a className="nav-link active link1 mx-2" aria-current="page"> 
                WOMEN
                </a>
               </Link>



               <Link href="/home/men">
               <a className="nav-link active link1 mx-2" aria-current="page"> 
                MEN
                </a>
               </Link>



               <Link href="/home/kids">
               <a className="nav-link active link1 mx-2" aria-current="page"> 
                KIDS
                </a>
               </Link>

               <Link href="/home/accessories">
               <a className="nav-link active link1 mx-2" aria-current="page"> 
                ACCESSORIES   
                </a>
               </Link>


               <Link href="/home/sale">
               <a className="nav-link active link1 mx-2" aria-current="page"> 
                SALE
                </a>
               </Link>

               









      </div>

    </div>


  </div>
</nav>
</div>
<style jsx>{`
        .pages {
            padding-left:10% ;
            font-size: 20px;
           
        }
        .row{
            margin-top:2%
        }
        .hidden{
          visibility:hidden;
         } 
         i{
           font-size:30px;
           color:crimson;
           padding-right:6%
         }
      `}</style>
</div>
    )

 

  
       

       
       
     
       
    
   }
   export default Navbar