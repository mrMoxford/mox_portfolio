import "./contactForm.css";
import InputField from "../inputfield/InputField";
import React, { useState } from "react";
import SelectField from "../selectfield/SelectField";
import TextAreaField from "../text-field/TextAreaField";
import { BsChevronCompactRight } from "react-icons/bs";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [values, setValues] = useState({
    fullName: "",
    email: "",
    enquiry: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const handleChange = e => {
    setValues(values => ({ ...values, [e.target.name]: e.target.value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    emailjs.send("service_4j3ho6b", "template_al2b6ax", values, "dPeSSfRFfQQQ0tFl0").then(
      response => {
        console.log("SUCCESS!", response);
        setValues({
          fullName: "",
          email: "",
          enquiry: "",
          message: "",
        });
        setStatus("SUCCESS");
      },
      error => {
        console.log("FAILED!", error);
      }
    );
  };

  return (
    <div className="contact-form | p-4 bg-black rounded-2xl text-white flex-1 ">
      {status && renderAlert()}
      <form onSubmit={handleSubmit}>
        {/* <h3 className="text-gray-700 text-2xl font-semibold uppercase">Shoot me a message</h3> */}
        <InputField label="Full Name" name="fullName" type="text" placeholder="John Doe" handleChange={handleChange} value={values.fullName} />
        <InputField label="E-mail" name="email" type="email" placeholder="john@exanple.com" handleChange={handleChange} value={values.email} />
        <SelectField label="Enquiry Type" name="enquiry" handleChange={handleChange} value={values.enquiry} />
        <TextAreaField label="Your Message" name="message" handleChange={handleChange} value={values.message} />
        <button value="submit" type="submit" className=" bg-white text-black rounded hover:bg-red-500 hover:text-white px-4 py-2 uppercase focus:outline-dashed">
          send
          <BsChevronCompactRight className=" w-6 ml-2 mt-1 float-right" />
        </button>
      </form>
    </div>
  );
};
const renderAlert = () => (
  <div className="sent-message | p-2 text-center text-green-700 bg-green-100 rounded">
    <p>Thanks for checking out my porfolio </p>
  </div>
);
export default ContactForm;
