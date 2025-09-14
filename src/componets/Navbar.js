// Navbar
function Navbar() {
    return (
        <div className="navbar">

            <div className="navbar--1">
                <h1 className="navbar--1__title">Udemy</h1>
            </div>

            <div className="navbar--2">
                <i className="fa-solid fa-magnifying-glass" style={{ color: "#000205" }}></i>
                <input placeholder="Search for anything"></input>
            </div>

            <div className="navbar--3">
                <p>Course</p>
                <div className="myLearning">
                    <p>My Learning</p>
                    <div className="myLearning__popup">
                        <p>
                            You did not purchase anything yet.
                        </p>
                    </div>
                </div>

                <i className="fa-solid fa-cart-shopping" style={{ color: "#00040a" }}></i>
                <i className="fa-solid fa-bell" style={{ color: "#000000" }}></i>
                <i className="fa-solid fa-user" style={{ color: "#000000" }}></i>
            </div>
        </div>
    )
}

export default Navbar
