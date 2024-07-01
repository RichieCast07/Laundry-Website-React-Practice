import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

const Promotions = () => (
  <div>
    <Header />
    <main>
      <div className="container mt-5">
        <h1>Promotions</h1>
        <div className="card mb-3">
          <img src="https://via.placeholder.com/800x400" className="card-img-top" alt="Promotion 1"/>
          <div className="card-body">
            <h5 className="card-title">Promotion 1</h5>
            <p className="card-text">Details about the promotion 1.</p>
          </div>
        </div>
        <div className="card mb-3">
          <img src="https://via.placeholder.com/800x400" className="card-img-top" alt="Promotion 2"/>
          <div className="card-body">
            <h5 className="card-title">Promotion 2</h5>
            <p className="card-text">Details about the promotion 2.</p>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default Promotions;
