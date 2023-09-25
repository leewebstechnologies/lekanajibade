import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import "./projects.css";

const Projects = () => {
  return (
    <>
      <Navbar />
      <section className="projects">
        <h1 className="title">Featured Projects</h1>
        <div className="cards">
          <div className="card">
            <img className="cardImage" src="./assets/3.png" alt="" />
            <div className="container">
              <h4>
                <b>Adeniyi Ajibade Blog</b>
              </h4>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              <a className="link" href="https://aliajiabde.netlify.app">
                See more <span>&rarr;</span>
              </a>
            </div>
          </div>
          <div className="card">
            <img className="cardImage" src="./assets/4.png" alt="" />
            <div className="container">
              <h4>
                <b>MayBee</b>
              </h4>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              <a className="link" href="https://maybee-stores.netlify.app">
                See more <span>&rarr;</span>
              </a>
            </div>
          </div>
          <div className="card">
            <img className="cardImage" src="./assets/5.png" alt="" />
            <div className="container">
              <h4>
                <b>Ajala Travels</b>
              </h4>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              <a className="link" href="https://ajalatravels.netlify.app">
                See more <span>&rarr;</span>
              </a>
            </div>
          </div>
          <div className="card">
            <img className="cardImage" src="./assets/6.png" alt="" />
            <div className="container">
              <h4>
                <b>Facebook Clone</b>
              </h4>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              <a className="link" href="https://facebook-clone-ui.netlify.app">
                See more <span>&rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Projects;
