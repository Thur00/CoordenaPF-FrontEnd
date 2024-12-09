// utils/colorUtils.js
import tinycolor from "tinycolor2";

export const generateLightAndDarkColors = (color) => {
  const originalColor = tinycolor(color);

  const lighterColor = originalColor.lighten(20).toString(); // Aumenta a luminosidade em 20%
  const darkerColor = originalColor.darken(25).toString(); // Diminui a luminosidade em 25%

  return {
    lighter: lighterColor,
    darker: darkerColor,
  };
};
