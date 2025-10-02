import { Link } from "react-router-dom";

/**
 * InstituteName Component
 * Shows the name of the institute
 */
export const InstituteName = ({ className = "" }) => {
  return (
    <div className={`font-bold ${className}`}>
      <h4>স্কয়ার পলিটেকনিক ইনস্টিটিউট</h4>
    </div>
  );
};

/**
 * InstituteAddress Component
 * Shows the institute's address and redirects to Google Maps on click.
 *
 * @param {string} className - Additional TailwindCSS classes (optional)
 */
export const InstituteAddress = ({ className = "" }) => {
  // Google Maps URL for the institute location
  const mapUrl =
    "https://www.google.com/maps/place/Square+Polytechnic+Institute/@24.7005621,89.3989614,164m/data=!3m1!1e3!4m6!3m5!1s0x39fdb30e6ecc90ab:0x4f3db0536e32df08!8m2!3d24.7006875!4d89.3995625!16s%2Fg%2F11hj_f73jt?entry=ttu";

  return (
    <a
      href={mapUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`hover:text-green-300 transition ${className}`}
    >
      গাড়িদহ,(পল্লী উন্নয়ন একাডেমি (RDA)), শেরপুর, বগুড়া
    </a>
  );
};
