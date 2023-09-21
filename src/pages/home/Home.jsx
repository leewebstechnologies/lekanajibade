import "./home.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
const Home = () => {
  return (
    <>
      <Navbar />
      <main className="main">      
          <img className="circle" src="" alt="" />
          <h4 className="intro">Hello, I 'm Ali!</h4>     
      </main>
      <Footer />
    </>
  );
};

export default Home;
