import sale from "../asset/images/c9.jpg"

  //Sale Image
function Saleimg(){
  return(
  
    <div className="Sale-Image">

        <img src={sale} alt=""></img>
        <div className="Sale-Image__offer">
             
            <h1>Udemy flash Sale! 24hrs to save.</h1>
            <p>Get the top course for just 499.Just one to save but a lifetime to learn</p>
        </div>

    </div>

  )
}

  export default Saleimg