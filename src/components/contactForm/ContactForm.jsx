import "./contactForm.css";
import InputField from "../inputfield/InputField";
import React, { useState, useRef } from "react";
import SelectField from "../selectfield/SelectField";
import TextAreaField from "../text-field/TextAreaField";
import { BsChevronCompactRight } from "react-icons/bs";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [status, setStatus] = useState("");

  const formRef = useRef();

  const handleSubmit = e => {
    e.preventDefault();

    emailjs.sendForm(import.meta.env.VITE_REACT_APP_SERVICE_ID, import.meta.env.VITE_REACT_APP_TEMPLATE_ID, formRef.current, import.meta.env.VITE_REACT_APP_PUBLIC_KEY).then(
      response => {
        console.log("SUCCESS!", response);
        formRef.current.reset();

        setStatus("SUCCESS");
      },
      error => {
        console.log("FAILED!", error);
      }
    );
  };

  return (
    <div className="contact-form | p-4 bg-black text-white flex-1 ">
      {status && renderAlert()}
      <form ref={formRef} onSubmit={handleSubmit}>
        {/* <h3 className="text-gray-700 text-2xl font-semibold uppercase">Shoot me a message</h3> */}
        <InputField label="Full Name" name="fullName" type="text" placeholder="John Doe" />
        <InputField label="E-mail" name="email" type="email" placeholder="john@exanple.com" />
        <SelectField label="Enquiry Type" name="enquiry" />
        <TextAreaField label="Your Message" name="message" />
        <button value="submit" type="submit" className=" bg-white text-black  hover:bg-red-500 hover:text-white px-4 py-2 uppercase focus:outline-dashed">
          send
          <BsChevronCompactRight className=" w-6 ml-2 mt-1 float-right" />
        </button>
      </form>
    </div>
  );
};
const renderAlert = () => (
  <div className="sent-message | p-2 text-center text-green-700 bg-green-100">
    <p>Thanks for checking out my porfolio </p>
  </div>
);
export default ContactForm;
