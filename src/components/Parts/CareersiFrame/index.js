import { useEffect } from "react";

const loadCareers = () => {
  let el = document && document.getElementById("careers-iframe");

  if (document && el) {
    const script = document.createElement("script");
    script.id = "gnewtonjs";
    script.type = "text/javascript";
    script.async = true;
    script.defer = true;
    script.src =
      "//recruitingbypaycor.com/career/iframe.action?clientId=8a7883c66613934801661bdfb1e02ad3";
    el.appendChild(script);
  }
};
const CareersiFrame = () => {
  useEffect(loadCareers, []);
  return <div></div>;
};

export default CareersiFrame;
