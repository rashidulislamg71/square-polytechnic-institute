import React from "react";

const GoogleMap = ({ className }) => {
  return (
    <div className={`overflow-hidden ${className}`}>
      <iframe
        title="Google Map - Square Polytechnic Institute"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2864.8838431721324!2d89.39698757413501!3d24.70069235163434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fdb30e6ecc90ab%3A0x4f3db0536e32df08!2sSquare%20Polytechnic%20Institute!5e1!3m2!1sen!2sbd!4v1757726606420!5m2!1sen!2sbd"
        className="w-full h-96 rounded-2xl shadow"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
};

export default GoogleMap;
