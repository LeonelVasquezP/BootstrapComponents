import React from "react";

const Home = () => {
  return (
    <div className="container my-5">
    <h1 className="text-center mb-4 display-5 fw-bold">Cards Con Bootstrap</h1>
    <p className="text-center text-muted fs-5 mb-5">
      Este es un sitio hecho con React, Bootstrap y Parcel.
    </p>
  
    <div className="row justify-content-center">
      <div className="col-md-4 mb-3">
        <div className="card shadow-sm">
          <div className="card-body">
            <h5 className="card-title">Elemento 1</h5>
            <p className="card-text">Esto es Una card.</p>
          </div>
        </div>
      </div>
      <div className="col-md-4 mb-3">
        <div className="card shadow-sm">
          <div className="card-body">
            <h5 className="card-title">Elemento 2</h5>
            <p className="card-text">Esto es Una card.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  );
};

export default Home;
