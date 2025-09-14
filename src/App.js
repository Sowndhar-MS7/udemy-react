import Navbar from './componets/Navbar';
import Categories from './componets/Categories';
import Saleimg from "./componets/Sale-img";
import Recommend from './componets/Recommended';
import Topic from "./componets/Topic";
import Mostpopular from "./componets/Most-Popular";
import Footer from "./componets/Footer";

function App() {
    return (
        <div>
            <Navbar></Navbar>
            <Categories></Categories>
            <Saleimg></Saleimg>
            <Recommend></Recommend>
            <Topic></Topic>
            <Mostpopular></Mostpopular>
            <Footer></Footer>
        </div>
    )
}

export default App