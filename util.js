const hexTable = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
];

function randomHex() {
  let newHex = "";
  for (let i = 0; i < 6; i++) {
    let random = hexTable[Math.floor(Math.random() * 16)];
    newHex += random;
  }
  console.log(newHex);
  return newHex;
}

function isThisHex(hex) {
  let hexArr = Array.from(hex);
  let result = hexArr.every((val) => hexTable.includes(val));
  return result;
}

function RGBToHex(rgb) {
  // Choose correct separator
  let sep = rgb.indexOf(",") > -1 ? "," : " ";
  // Turn "rgb(r,g,b)" into [r,g,b]
  rgb = rgb.substr(4).split(")")[0].split(sep);

  let r = (+rgb[0]).toString(16),
    g = (+rgb[1]).toString(16),
    b = (+rgb[2]).toString(16);

  if (r.length == 1) r = "0" + r;
  if (g.length == 1) g = "0" + g;
  if (b.length == 1) b = "0" + b;

  return r + g + b;
}
