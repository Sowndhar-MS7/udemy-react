import one from "../asset/images/c1.jpg"
import two from "../asset/images/c2.jpg"
import three from "../asset/images/c3.jpg"
import four from "../asset/images/c4.jpg"
import five from "../asset/images/c5.jpg"
import six from "../asset/images/c6.jpg"
import seven from "../asset/images/c7.jpg"
import eight from "../asset/images/c8.jpg"

//Most Popular
function Mostpopular() {
    return (

        <div className="Popular">
            <h1 className="popular__title">Most Popular</h1>
            <p>Pick the best</p>
            <div className="popular__container">
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

                <div className="course--card">
                    <img src={five} alt=""></img>
                    <h3>Cyber Security</h3>
                    <p>Randy</p>
                    <p>4.9⭐⭐⭐⭐</p>
                    <p>₹20,000 <del> ₹10,0000</del></p>
                </div>
                <div className="course--card">
                    <img src={six} alt=""></img>
                    <h3>Data Science</h3>
                    <p>keven</p>
                    <p>3.5⭐⭐⭐</p>
                    <p>₹20,000 <del> ₹10,0000</del></p>
                </div>
                <div className="course--card">
                    <img src={seven} alt=""></img>
                    <h3>Deeplearning Strach to End</h3>
                    <p>Harlee</p>
                    <p>3.5⭐⭐⭐</p>
                    <p>₹20,000 <del> ₹10,0000</del></p>
                </div>
                <div className="course--card">
                    <img src={eight} alt=""></img>
                    <h3>Machine Learning</h3>
                    <p>Dravid</p>
                    <p>5.0⭐⭐⭐⭐⭐</p>
                    <p>₹20,000 <del> ₹10,0000</del></p>
                </div>
            </div>

        </div>
    )
}

export default Mostpopular