import createImgSrc from "/src/utils/createImgSrc";
const renderProps = ({ srcLight, srcDark }) => {
  const rawSrc = srcLight ? srcLight : srcDark;
  const src = createImgSrc(rawSrc);
  return src;
};
const Images = ({ width, height, alt, srcDark, srcLight }) => {
  const src = renderProps({
    srcLight,
    srcDark,
  });
  const newProps = { src, alt, width, height };

  return <img {...newProps} />;
};

export default Images;
