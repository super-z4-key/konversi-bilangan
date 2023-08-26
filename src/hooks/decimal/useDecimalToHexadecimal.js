import { useState } from "react";

export const useDecimalToHexadecimal = () => {
  const [hexadecimal, setHexadecimal] = useState(0);

  const setDecimalToHexadecimal = (decimal) => {
    let hex = "";
    while (decimal > 0) {
      let remainder = decimal % 16;
      let hexDigit =
        remainder < 10
          ? remainder.toString()
          : String.fromCharCode(remainder + 55);
      hex = hexDigit + hex;
      decimal = Math.floor(decimal / 16);
    }
    setHexadecimal(hex);
  };

  return { hexadecimal, setDecimalToHexadecimal };
};
