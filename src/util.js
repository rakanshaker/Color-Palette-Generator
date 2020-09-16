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
