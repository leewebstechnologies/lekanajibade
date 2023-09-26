import { useRef, useState } from "react";
import "./contact.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setDone(true);

    emailjs
      .sendForm(
        "service_2bwa8bq",
        "template_nx6tqat",
        formRef.current,
        "D7s2QtY9npU46KDNG"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <Navbar />
      <div className="contact">
        <h2 className="c-h2">Contact Me</h2>
        <form ref={formRef} onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input className="form" type="text" name="user_name" required />
          <label htmlFor="name">Email Address</label>
          <input className="form" type="email" name="user_email" required />
          <label htmlFor="name">Type of Enquiry</label>
          <select className="select" name="user_subject" id="" required>
            <option value="freelance">Select</option>
            <option value="freelance">Freelance Project Proposal</option>
            <option value="freelance">Tutorial Proposal</option>
            <option value="freelance">Job</option>
            <option value="freelance">Others</option>
          </select>
          <label htmlFor="message">Your message</label>
          <textarea
            className="form"
            name="message"
            id=""
            cols="90"
            rows="10"
            required
          />
          <br />
          <br />
          <button type="submit" className="btn">
            Submit
          </button>
          <h1 style={{ color: "#fff" }}>{done && "Thank you..."}</h1>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
