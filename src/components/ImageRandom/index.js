import React from "react";
import Styles from "./styled";

export default ({ classes }) => {
  // const randomSrc = [
  //   "building-circle1",
  //   "building-circle2",
  //   "meeting-portrait-circle",
  //   "megan-working-circle",
  //   "meeting3-circle",
  //   "kensoffice-circle",
  // ];
  // const cycleImages = (images, step) => {
  //   images.forEach((image, index) =>
  //     setTimeout(() => {
  //       console.log(image);
  //       return (
  //         <div
  //           className="RandomImages"
  //           style={{
  //             background: `url(
  //             "/images/${image}.png"
  //           )`,
  //           }}
  //         ></div>
  //       );
  //     }, step * (index + 1))
  //   );
  //   setTimeout(
  //     () => cycleImages(images, step),
  //     step * images.length
  //   );
  // };
  return (
    <Styles className={classes}>
      <img
        className="randomImage"
        src="./images/building-circle1.png"
        alt=""
      />
    </Styles>
  );
};
