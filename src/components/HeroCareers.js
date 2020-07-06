import React from "react";
import Button from "./Parts/Button";
import Image from "./Parts/Image";

const HeroCareers = () => (
  <section className="HeroCareers">
    <div className="text-wrapper">
      <h2 className="HeroCareers_title">Careers</h2>
      <h3 className="HeroCareers_leadin">
        We're dedicated to building great software
      </h3>
      <p className="HeroCareers_description">
        Founded in 1999, we strive to delight our customers and their end users
        with the systems we craft. We need YOU to join our team.
      </p>
      <Button
        style="primary"
        theme="light"
        href="./Careers"
        text="Job Postings"
      />
    </div>
    <Image
      base="HeroCareers"
      src="/images/stock-of-working.png"
      alt="people working in an office"
    />
  </section>
);

export default HeroCareers;
