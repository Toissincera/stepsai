import React from "react"

export default function Footer (){
  return (
    <div className="bg-dark-subtle lead fw-medium">
      <footer className="">
        <ul className="nav c border-bottom py-1">
          <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Home</a></li>
          <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Features</a></li>
          <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Pricing</a></li>
          <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">FAQs</a></li>
          <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">About</a></li>
        </ul>
        <p className="text-center text-body-secondary py-1 m-0">An Uzman Production</p>
      </footer>
    </div>
  )
};

