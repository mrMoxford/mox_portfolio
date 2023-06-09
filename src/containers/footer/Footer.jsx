import "./footer.css";
import React from "react";
import ContactForm from "src/components/contactForm/ContactForm";

const Footer = () => {
  return (
    <div className="mox__profile-footer--section | w-full section__padding" id="contact">
      <div className="mox__profile-footer--container | flow flex">
        <h2 className="mox__profile-footer-title--text | uppercase lg:text-6xl md:text-5xl text-4xl">Contact</h2>
        <div className="mox__profile-footer-content--container | w-full flex">
         
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Footer;
