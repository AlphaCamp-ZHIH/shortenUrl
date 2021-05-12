const lowercase ="abcdefghijklmnopqrstuvwxyz"; 
const uppercase = lowercase.toUpperCase();
const number = "0123456789";
const numberBox = [...number];
const numberLength = numberBox.length;
const box = [...lowercase,...number,...uppercase];
const boxLength = box.length;

const generateShortenUrl = () => {
  let data =
    Math.random().toString().slice(-2) + Date.now().toString().slice(-3);
  // console.log(data)
  data = [...data].map((number, i,arr) =>{
    return arr.slice(i).join("")
  })
  const randomNum = Math.floor(Math.random()*5)
  const shortenUrl = data.map((number,i) => {
    if(i == randomNum) return numberBox[number % numberLength];
    return box[number % boxLength];
  }).join("");
  return shortenUrl
};
module.exports.generateShortenUrl = generateShortenUrl;



