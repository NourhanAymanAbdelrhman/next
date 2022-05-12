import Image from 'next/image'
import img from '../../public/banner-14.jpg'
import img2 from '../../public/banner-15.jpg'
import img3 from '../../public/2000px-Logo_of_Mango__new_.webp'
import img4 from '../../public/Crocs.webp'
import img5 from '../../public/2000px-Logo_of_Mango__new_.webp'
import img6 from '../../public/PullBear_logo_wordmark_logotype.webp'
import img7 from '../../public/2000px-Logo_of_Mango__new_.webp'
import img8 from '../../public/calvin_klein_logo_original_2.webp'
import Link from 'next/link'
import axios from 'axios'
function home({sales}){
 
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
      
        <div className="row" style={{backgroundImage: "url('banner-9.webp')" }}>
        
        <div className="col-lg-3  borderline" style={{padding:"30px"}}>
        <h3 className="colorwhite">buy $49 get</h3>
        <div className="percentagelabel colorwhite">10
        <span>
          <span>%</span>
          OFF
        </span>
        </div>
        </div>

        <div className="col-lg-6 borderline" style={{paddingLeft:"90px",paddingTop:"25px"}}>
        <h1 className="colorwhite font-primary">Buy More, Save More!</h1>
        <span className="actionbtn">
        <Link  href={`home/sale`}>
        <button>SHOP NOW</button>  
        </Link> 
        </span>
        </div>

        <div className="col-lg-3 " style={{padding:"30px"}}>
        <h3 className="colorwhite">buy $75 get</h3>
        <div className="percentagelabel colorwhite">12
        <span>
          <span>%</span>
          OFF
        </span>
        </div>
        </div>

        </div>



      <div className="row ">
       

        <div className="col-lg-6" style={{backgroundImage: "url('banner-10.jpg')", height:"100%",paddingRight:"10px"}}>
      <div className="headr colorwhite" >
      <h1 >GO OUT IN STYLE</h1>
      <h4>FROM $24</h4>
      <span className="actionbtn">
      <Link  href={`home/women`}>
        <button>SHOP NOW</button>  
        </Link> 
        </span>
      </div>

        </div>


        <div className="col-lg-6 " style={{backgroundImage: "url('banner-11.jpg')", height:"100%",paddingLeft:"10px"}}>
      <div className="headr colorwhite" >
      <h1 >GO OUT IN STYLE</h1>
      <h4>FROM $24</h4>
      <span className="actionbtn">
      <Link  href={`home/men`}>
        <button>SHOP NOW</button>  
        </Link> 
        </span>
      </div>

        </div>

      </div>

   

      <div className="row ">
       
   <div className="col-lg-12 title" >
    <h2> SALE</h2>
      </div>
      </div>
       
      <div className="row ">
       
       {
         sales.map((product)=>{
           return(
             <div key={product.id} className="col-lg-2">
             <Image src={product.image} alt="notfound" width={250}  height={300}/>
             <h5>{product.name}</h5>
             <h5>{product.price}$</h5>
             <h6><i className="bi bi-heart" onClick={()=>addfavourit(product)}></i> 
             <i className="bi bi-bag" onClick={()=>addcart(product)}></i></h6>
             
             </div>
           )
         }
         )
       }

     
        </div>






     <div className="row ">
       

       <div className="col-lg-6" style={{backgroundImage: "url('banner-12.jpg')", height:"90%",paddingRight:"10px"}}>
     <div className="headr colorwhite" >
     <h1 >new women collection 
     <p className="font-primary">Hurry Up!</p></h1>
     
     <span className="actionbtn">
     <Link  href={`home/women`}>
       <button>SHOP NOW</button>   
       </Link>
       </span>
     </div>

       </div>


       <div className="col-lg-6 " style={{backgroundImage: "url('banner-13.jpg')", height:"100",paddingLeft:"10px"}}>
     <div className="headr colorwhite" >
     <h1 > 50% off everything
     <p className="font-primary">Summer Sale!</p></h1><br></br><br></br><br></br>
     <span className="actionbtn">
     <Link  href={`home/women`}>
       <button>SHOP NOW</button>  
       </Link> 
       </span>
     </div>

       </div>

     </div>





   <div className="row">

   <div className="col-lg-4" >
    <Image src={img} alt="notfound"></Image>
   </div>
   <div className="col-lg-2">
    <h2 style={{ marginTop:"100px"}}> FOR HIM</h2>
    <ul>
    <Link  href="home/men">
      <li><h5>Clothing</h5></li>
       </Link>
      <Link href="home/shoes">
      <li><h5>Shose</h5></li>
      </Link>
      <Link href="home/accessories">
      <li><h5>Accessories</h5></li>
      </Link>
      <Link href="home/sale">
      <li><h5>Sale</h5></li>
      </Link>
    </ul>
   </div>

   <div className="col-lg-2">
   <h2  style={{ marginTop:"100px"}}>FOR HER</h2>
    <ul>
    <Link href="home/women">
      <li><h5>Clothing</h5></li>
    </Link>
      <Link href="home/shoes">
      <li><h5>Shose</h5></li>
      </Link>
      <Link href="home/accessories">
      <li><h5>Accessories</h5></li>
      </Link>
      <Link href="home/sale">
      <li><h5>Sale</h5></li>
      </Link>
    </ul>
   </div>

   <div className="col-lg-4" >
   <Image src={img2} alt="notfound"></Image>
   </div>
   
   </div>


   <div className="row" style={{backgroundImage: "url('banner-16.jpg')",height:"500px"}} >
   <h1 style={{paddingLeft:"10%",paddingTop:"5%"}}>
   Denim 
   <br>
   </br>
   Perfect
   </h1>
       <div className="percentagelabel " style={{paddingLeft:"10%",color:"#e7033a"}}>20
        <span>
          <span>%</span>
          OFF
        </span>
        </div>

   <h3 style={{paddingLeft:"10%"}}>Designed to fit, 
     <br></br>
     flex & flatter
     </h3>   
     <span className="actionbtn">
     <Link  href={`home/sale`}>
       <button>SHOP NOW</button>   
       </Link>
       </span>  
   </div>


  <div className='row' style={{paddingBottom:"5%"}}>
   
   <div className='col-2'>
     <Image src={img3} alt="notfound"></Image>
   </div>

   <div className='col-2'>
     <Image src={img4} alt="notfound"></Image>
   </div>

   <div className='col-2'>
     <Image src={img5} alt="notfound"></Image>
   </div>

   <div className='col-2'>
     <Image src={img6} alt="notfound"></Image>
   </div>

   <div className='col-2'>
     <Image src={img7} alt="notfound"></Image>
   </div>

   <div className='col-2'>
     <Image src={img8} alt="notfound"></Image>
   </div>

   


  </div>


      
     





       
        <style jsx>{`
        .row{
          margin-top:5%
        }
        .offers{
          background: url('../public/banner-9.webp') ;

        }

       .percentagelabel {
        font-size: 130px;
          font-weight: 700;
         line-height: .9;
         text-transform: uppercase;
         display: flex;
        }
        .colorwhite {
          color: #fff;
      }
      .percentagelabel span {
        display: block;
        font-size: 48%;
        line-height: 1.22;
        text-align: center;
    }
    .font-primary {
      font-family: 'Caveat',cursive;
  }
  .actionbtn button{
    padding-right:20px;
    padding-left:20px;
    
    margin-left:25%;
    
   
  }
  h1,h4{
    font-size:60px;
  }
  .borderline{
    border-right:2px solid white;
  }
  .headr{
    padding-top:40%;
    padding-bottom:40%;
    padding-left:10%
  }
  .title{
    text-align:center
  }
  ul{
    list-style-type: none;
    
  }
  i{
    font-size:20px;
    color:crimson;
   padding-right:6%;
  
  }
  li{
    cursor: pointer;
  }
  
  
      `}</style>   
      </div>
      
    )
   }
export default home
export async function getStaticProps(){
 
  const res=await fetch('http://localhost:2000/sale')
  const data=await res.json()
   
  return{
    props:{
      sales:data
    }
  }




}