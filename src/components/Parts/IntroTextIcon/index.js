import React from "react";
import Button from "../Button";
import Styles from "./styled";

export default ({
  icon,
  title,
  descLg,
  desc,
  list = [],
  link = false,
}) => (
  <Styles className="text-wrapper">
    <div className="text">
      {icon && (
        <div className="icon">
          <figure
            style={{
              background: `url(./../images/svgs/${icon}.svg) no-repeat center center`,
            }}
          ></figure>
        </div>
      )}
      {/* <div className={`${base}_icon`}>{<`${icon}`/>}</div> */}
      <h2> {title} </h2>
    </div>
    {descLg && (
      <p className="descLg"> {descLg} </p>
    )}
    {desc && <p className="desc"> {desc} </p>}
    {link && (
      <Button
        themeColor={link.themeColor}
        btnStyle={link.btnStyle}
        href={link.href}
        text={link.text}
        arrow={false}
        target={link.target}
      />
    )}
    {list &&
      list.map((item, i) => {
        console.log(item);
        return (
          <ul className="list" key={i}>
            <li>{item}</li>
          </ul>
        );
      })}
  </Styles>
);
