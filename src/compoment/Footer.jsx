import React from 'react'

const Footer = () => {
  return (
    <div>
     <footer className="bg-dark text-white py-4 mt-5">
  <div className="container">
    <div className="row">
      {/* About Section */}
      <div className="col-12 col-md-4 ">
        <h4 className="h5 font-weight-semibold mb-3">About SocialChef Community</h4>
        <ul className="list-unstyled mt-3">
        <li className="small p-1">New Orleans Food & Drink Events</li>
          <li className="small p-1">San Francisco Holiday Events </li>
          <li className="small p-1">Chicago Events</li>
          <li className="small p-1">Events in Dallas Today</li>
          <li className="small p-1">Washington Events</li>
          <li className="small p-1">Sell Tickets Online </li>
        </ul>
      </div>

      {/* Help Section */}
      <div className="col-12 col-md-4 mb-4">
        <h4 className="h5 font-weight-semibold mb-3">Need help?</h4>
        {/* <p className="small ">Contact us via phone or email</p> */}
        <ul className="list-unstyled mt-3">
        <li className="small p-1">Create Events</li>
          <li className="small p-1">Event Planning</li>
          <li className="small p-1">Post your event online</li>
          <li className="small p-1">Sitemap</li>
          <li className="small p-1">Virtual Events Platform</li>
          <li className="small p-1">New York Events
          </li>
        </ul>
      </div>
      

      {/* Social Section */}
      <div className="col-12 col-md-4 mb-4">
        <h4 className="h5 font-weight-semibold mb-3">Connect With Us</h4>
        <div className="d-flex">
        <ul className="list-unstyled mt-2">
          <li className="small p-1">Contact Support</li>
          <li className="small p-1">Contact Sales </li>
          <li className="small p-1">Facebook</li>
          <li className="small p-1">LinkedIn</li>
          <li className="small p-1">Instagram</li>
          <li className="small p-1">TikTok </li>
        </ul>
        </div>
      </div>
  
    </div>

    <hr className=" border-secondary" />

    <div className="text-center">
      <p className="small ">
        Copyright @2024 SocialChef. All rights reserved.
      </p>
    </div>
  </div>
</footer>

    </div>
  )
}

export default Footer