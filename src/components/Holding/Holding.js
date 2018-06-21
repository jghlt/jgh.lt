import React from 'react';
import ContactList from '../Contact/ContactList';

function Holding(props) {
  return (
    <div className="relative">
      <ContactList {...props}/>
    </div>
  );
}

export default Holding;
