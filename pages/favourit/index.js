import Image from 'next/image'
import img from '/public/c-1.webp'
import Link from "next/link"
import axios from 'axios'
import ReactStars from 'react-stars'
 function Favourit({products}){
return(

        
          products.map((product)=>{
            return(
            <div  key={product.id} className="col-4">
              
              <Image src={product.image} alt="notfound" width={400} height={350}></Image>
              <div className='details'>
              <h3> {product.name}</h3>
              <h6>{product.price}$</h6>
           
              <ReactStars
                value={product.rating}
                 count={5}
                  size={24}
                 color2={'#ffd700'} />
              <h6><i className="bi bi-heart"></i> 
             </h6>
              </div>
               </div>
               
               )
          })  
       
         
      
)
 }


 export default Favourit

   export async function getStaticProps(){
   
    const res=await fetch('http://localhost:2000/favourit')
    const data= await res.json()
    return {
      props:{
        products:data
      }
    }




   }