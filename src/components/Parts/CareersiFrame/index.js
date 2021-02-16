import { useEffect } from "react";

const loadCareers = () => {
  let el = document && document.getElementById("careers-iframe");

  if (document && !el) {
    el = document.createElement("script");
    el.id = "gnewtonjs";
    el.type = "text/javascript";
    el.async = true;
    el.defer = true;
    el.src =
      "//recruitingbypaycor.com/career/iframe.action?clientId=8a7883c66613934801661bdfb1e02ad3";
    document.body.appendChild(el);
  }
  const CareersiFrame = () => {
    useEffect(loadCareers, [url]);
  };
  return <div></div>;
};

export default loadCareers;
