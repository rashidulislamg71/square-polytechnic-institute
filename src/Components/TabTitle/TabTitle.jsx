

import React, { useEffect } from "react";

const Title = (tilte = "Home") => {
  useEffect(() => {
    document.title = `${tilte} - Square Polytechnic Institut`;
  }, [tilte]);
};

export default Title;
