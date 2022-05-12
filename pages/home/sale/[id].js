import Image from "next/image"
import ReactStars from 'react-stars'
function Id({product}){

return(
    <>
    <div className="continer">

        <div className="row">
            <div className="col-4 offset-2">
            <Image src={product.image} alt="notfound" width={400} height={300} /> 
            </div>
            <div className="col-4">
                <h1>{product.category}</h1>
                <h4>name:{product.category}</h4>
                <h6>{product.description}</h6>
                <h5>{product.price}$</h5>
                <ReactStars
                value={product.rating}
                 count={5}
                  size={24}
                 color2={'#ffd700'} />
            </div>
        </div>
        <style jsx>{`
        .row{
          margin-top:10%;
          margin-bottom:10%
        
        } `}
        </style>
    </div>
    
    
    </>
)


}
export default Id

export async function getServerSideProps(context){
    //context params in url 
    const {params} = context
    const res = await fetch(` http://localhost:2000/women/${params.id}`)
    const data = await res.json()
    return{
        props:{
            product:data,
            
        },
        
    }

}