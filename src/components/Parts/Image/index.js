import React from "react";import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';
import Styles from "./styled";


export default ({ src, alt }) => (
  <Styles className="media">
    <Image cloudName="cadre5images" publicId={src} />
  </Styles>
);