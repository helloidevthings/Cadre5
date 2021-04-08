# Cadre5
Cadre5 Website

## Build
- Built in React `^16.3.0-alpha.1`
- Basic commands: `npm run build` & `npm run start`

## React + Tools
- Uses React Router Dom
- Uses Emotion (Styled Components)
- Uses `react-intersection-observer` which is a replacement for `in-view`, this package is used to animate each component when it scrolls into view. 

## Folder Structure
- Each Component is a folder containing two files: `index.js` & `styled.js`
  - Index contains the html, javascript, and anything else needed
  - Styled only contains the styles for each component

## Global & App Styles 
- Global and App styles are broken up into two files. This is to limit the amount of styles on initial load. 
  - App Styles contain utility styles that are used throughout the site, including CSS Animations & Transitions used to animate. 

## Images
- Images are using GLF (Github Large File Storage) [sauce](https://git-lfs.github.com/)

- This hooks in directly with Netlify's Large Media functionality [sauce](https://docs.netlify.com/large-media/overview/?_ga=2.97329180.2060224917.1617758824-900934121.1617758824)
  - `?nf_resize=fit&w=400` is resizing most main images on the site `Components/Parts/Image`

- Separate images at smaller sizes are being used for logos instead of transforms. (This is to limit the amount of transforms being used on the site)

- Hero Basic is using the `picture` element to load in different versions of hero images. That way each crop is unique to the image.
