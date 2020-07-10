import React from "react";


const header= {
  background:"cadetblue",
  
};


function Card({ icon, title, children }) {
  return (
    <div className="card mt-4">
      <div className="card-header" style={header}>
        <h3>
          <strong>
            <i className={`fa fa-${icon}`} aria-hidden="true" /> {title}
          </strong>
        </h3>
      </div>
      <div className="card-body">{children}</div>
    </div>
  );
}

export default Card;
