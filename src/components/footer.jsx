import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-lg font-semibold mb-4">Explore</h3>
            <ul className="space-y-2">
              <li>Homes</li>
              <li>Experiences</li>
              <li>Restaurants</li>
            </ul>
          </div>
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Hosting</h3>
            <ul className="space-y-2">
              <li>Become a Host</li>
              <li>Host your Home</li>
              <li>Host an Experience</li>
              <li>Host a Restaurant</li>
            </ul>
          </div>
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Help</h3>
            <ul className="space-y-2">
              <li>Support Center</li>
              <li>Community Standards</li>
              <li>Safety Tips</li>
              <li>Terms & Privacy</li>
            </ul>
          </div>
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>About Us</li>
              <li>Careers</li>
              <li>Press</li>
              <li>Policies</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
