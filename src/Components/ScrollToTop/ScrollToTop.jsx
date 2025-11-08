
// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";

// const ScrollToTop = () => {
//   const { pathname } = useLocation();

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [pathname]);

//   return null;
// };

// export default ScrollToTop;


import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // প্রথমে scroll behavior অস্থায়ীভাবে instant করো
    const html = document.documentElement;
    const prevBehavior = html.style.scrollBehavior;
    html.style.scrollBehavior = "auto";

    // পেজ টপে স্ক্রল করো
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });

    // আগের scroll-behavior ফেরত দাও
    html.style.scrollBehavior = prevBehavior;
  }, [pathname]);

  return null;
};

export default ScrollToTop;
