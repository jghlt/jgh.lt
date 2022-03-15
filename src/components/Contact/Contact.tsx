import React from "react";
import ContactList from "./ContactList";

function Contact(props) {
  return (
    <div className="relative">
      <ContactList {...props} />
    </div>
  );
}

export default Contact;
