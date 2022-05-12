import Image from 'next/image'
import img from '/public/c-2.webp'
import Link from "next/link"
import axios from 'axios'
 function Men({mens}){


  const addcart=(product)=>{
    console.log(JSON.stringify(product)+"hello")
  axios.post(" http://localhost:2000/addtocart",product) .then(res=>{
         console.log(res)})
         .catch(error=>{
                    console.log(error)
                 })
        
  }
  const addfavourit=(product)=>{
    console.log(JSON.stringify(product)+"hello")
  axios.post(" http://localhost:2000/favourit",product) .then(res=>{
         console.log(res)})
         .catch(error=>{
                    console.log(error)
                 })
        
  }
  



    return(
      <div className="container">
        <div className="row" style={{backgroundColor:"rgb(251, 250, 250)"}}>
          <div className="col-8">
        <h1 className='headr'>Men</h1>
        <h6 className='description'> 
        Fashion has always been so temporary and uncertain. You can’t keep up with it. 
        This social phenomenon is very whimsical,
         thus we as the consumers always.
        </h6>
          </div>
          <div className="col-4">
           <Image src={img} alt="notfound" ></Image>
          </div>
        </div>


      <div className="row">
        {
          mens.map((product)=>{
            return(
            <div  key={product.id} className="col-4">
              
              <Image src={product.image} alt="notfound" width={400} height={350}></Image>
              <Link   href={`men/${product.id}`}>
                <a>
              <i className="bi bi-chevron-double-right pagedetails" ></i></a>
              </Link>
              <div className='details'>
              <h3> {product.name}</h3>
              <h6>{product.price}$</h6>
              <p>{product.description}</p>
              <h6><i className="bi bi-heart" onClick={()=>addfavourit(product)}></i> 
             <i className="bi bi-bag" onClick={()=>addcart(product)}></i></h6>

             
              </div>
               </div>
               
               )
          })  
       
         }
      </div>
      <style jsx>{`
        .row{
          margin-top:5%
        }
        .headr{
          padding-top:10%
        }
  .description{
    line-height:1.9
  }
  .details{
    padding-left:25%
  }
  .pagedetails{
    padding-left:100%
  }
  i{
    font-size:20px;
    color:crimson;
   padding-right:6%
  }
  `}
  </style>

      </div>
      
    )
   }
   export default Men
   export async function getStaticProps(){
   
    const res=await fetch('  http://localhost:2000/men')
    const data= await res.json()
    return {
      props:{
        mens:data
      }
    }




   }