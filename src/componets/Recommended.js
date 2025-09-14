import one from "../asset/images/c1.jpg"
import two from "../asset/images/c2.jpg"
import three from "../asset/images/c3.jpg"
import four from "../asset/images/c4.jpg"

//Recommended

function Recommend(){
  return (
     
  
    <div className="Recommended">
        <h1 className="Recommended__title">Recommended for you</h1>
        <p>Pick the best fit</p>
        <div className="Recommended__container">
            <div className="course--card">
                <img src={one} alt=""></img>
                <h3>python Data visulisation Masterclass 2025</h3>
                <p>Col Steele</p>
                <p>3.5⭐⭐⭐</p>
                <p>₹10,000 <del> ₹50,000</del></p>
            </div>
            <div className="course--card">
                <img src={two} alt=""></img>
                <h3>Web Development Bootcamp 2025</h3>
                <p>John</p>
                <p>4.5⭐⭐⭐⭐</p>
                <p>₹10,000 <del> ₹50,000</del></p>
            </div>
            <div className="course--card">
                <img src={three} alt=""></img>
                <h3>UI&UX Design with Figma Fullcourse</h3>
                <p>Markin</p>
                <p>3.5⭐⭐⭐</p>
                <p>₹10,000 <del> ₹50,000</del></p>
            </div>
            <div className="course--card">
                <img src={four} alt=""></img>
                <h3>Fullstack Web Developer Fullcourse</h3>
                <p>Finbalor</p>
                <p>4.9⭐⭐⭐⭐</p>
                <p>₹10,000 <del> ₹50,000</del></p>
            </div>

        </div>
    </div>
  )
}

export default Recommend