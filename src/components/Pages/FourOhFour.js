import React from "react";
import BlogText from "../Parts/BlogText";
import Button from "../Parts/Button";
import WaveHR from "../Parts/WaveHR";
import Image from "../Parts/Image";
import Page from "../Page";

const FourOhFour = () => (
  <Page>
    <BlogText textAlign="center">
      <h1 className="red">Oops!</h1>
      <h2>
        <span className="blue">404</span>
        <span className="grayLt"> • </span>
        Page Not Found!
      </h2>
      <p>
        THe page you are looking for doesn't exist
        or an other error occured.
      </p>
      <Button
        href="/home"
        text="Return Home"
        themeColor="darkTheme"
        btnStyle="secondary"
        arrow={true}
      />
    </BlogText>
    <Image src="./images/404page.png" />
    <WaveHR bg="#ffffff" color="#ffffff" />
  </Page>
);

export default FourOhFour;
