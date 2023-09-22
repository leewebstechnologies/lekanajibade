import "./home.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
const Home = () => {
  return (
    <>
      <Navbar />
      <main className="main">
        <div className="homeImage">
          <img className="circle" src="./assets/2.png" alt="" />
          <h4 className="intro">Hello, I 'm Ali!</h4>
          <h1>A frontend developer specialised in React Js</h1>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;
