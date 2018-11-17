const colors = {
  // Base
  nero: "#181818",
  black: "#1d1d1d",
  silver: "#bfbfbf",
  charcoal: "#494949",
  white: "#ffffff",
  // Fluo
  orange: "#ffbf00",
  pink: "#ff1493",
  yellow: "#ccff00",
  red: "#ff0000",
  blue: "#5aa3f1",
  linkedin: "#3277b0",
  twitter: "#4ba0eb"
};

export const randomFluo = () => {
  const fluoColors = [
    colors.orange,
    colors.pink,
    colors.yellow,
    colors.red,
    colors.blue,
    colors.linkedin,
    colors.twitte
  ];

  const random = Math.round(Math.random() * fluoColors.length);

  return fluoColors[random];
};

export default colors;
