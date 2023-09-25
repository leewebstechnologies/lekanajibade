import "./contact.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="contact">
        <h2 className="c-h2">Contact Me</h2>
        <form action="">
          <label htmlFor="name">Name</label>
          <input className="form" type="text" name="name" required />
          <label htmlFor="name">Email Address</label>
          <input className="form" type="email" name="email" required />
          <label htmlFor="name">Type of Enquiry</label>
          <select className="select" name="" id="" required>
            <option value="freelance">Select</option>
            <option value="freelance">Freelance Project Proposal</option>
            <option value="freelance">Tutorial Proposal</option>
            <option value="freelance">Job</option>
            <option value="freelance">Others</option>
          </select>
          <label htmlFor="message">Your message</label>
          <textarea
            className="form"
            name=""
            id=""
            cols="90"
            rows="10"
            required
          ></textarea>
          <br />
          <br />
          <button type="button" className="btn">
            Submit
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
