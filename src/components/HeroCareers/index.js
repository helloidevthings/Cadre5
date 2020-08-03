import React from "react";
import Button from "../Parts/Button";
import Image from "../Parts/Image";
import Styles from "./styled";
import { useInView } from "react-intersection-observer";

export default () => {
  const [ref, inView] = useInView({ threshold: 0.25, triggerOnce: true });

  return (
    <Styles>
      <div
        className={`text-wrapper fadeUp ${inView ? "active" : ""}`}
        ref={ref}
      >
        <h2 className="title">Careers</h2>
        <h3 className="leadin">We're dedicated to building great software</h3>
        <p className="description">
          Founded in 1999, we strive to delight our customers and their end
          users with the systems we craft. We need YOU to join our team.
        </p>
        <Button
          btnStyle="primary"
          themeColor="light"
          href="./Careers"
          text="Job Postings"
          themeColor="lightTheme"
        />
      </div>
      <Image
        src="/images/stock-of-working.png"
        alt="people working in an office"
      />
    </Styles>
  );
};
