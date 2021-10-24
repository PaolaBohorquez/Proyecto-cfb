import React from "react";
import "./header.css";

function Header({ children }) {
  return (
    <header className="header">
      <div className="wrapper">
        <div className="header-grid">
          <div>
            <img src="imagenes/carbon_footprint.svg" alt="" />
            <h1>Carbon FootPrint Badge</h1>
            <p className="header-total">
              Calcula tu huella de carbono de forma interactiva
            </p>
          </div>
          {children}
        </div>
      </div>
    </header>
  );
}

export default Header;
