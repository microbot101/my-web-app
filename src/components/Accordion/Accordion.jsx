import React, { useState } from 'react';

const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="accordion-wrapper">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={index} className="accordion-item">
            <div
              className="accordion-header"
              onClick={() => toggle(index)}
            >
              <span className="accordion-title">{item.title}</span>
              <span className="accordion-icon">
                {isOpen ? '−' : '+'}
              </span>
            </div>
            {isOpen && (
              <div className="accordion-content">
                {item.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
