import React from 'react';

const Footer = () => (
  <footer className="bg-light text-center text-lg-start">
    <div className="container p-4">
      <div className="row">
        <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
          <h5 className="text-uppercase">Footer Content</h5>
          <p>Here you can use rows and columns to organize your footer content.</p>
        </div>
        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase">Links</h5>
          <ul className="list-unstyled mb-0">
            <li><a href="#!" className="text-dark">Link 1</a></li>
            <li><a href="#!" className="text-dark">Link 2</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div className="text-center p-3">
      © 2023 Copyright:
      <a className="text-dark" href="https://mdbootstrap.com/">MDBootstrap.com</a>
    </div>
  </footer>
);

export default Footer;
