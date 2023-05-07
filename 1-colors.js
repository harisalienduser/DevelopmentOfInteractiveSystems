const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById("colorChanger");
const colorTxt = document.querySelector(".color");
const infoSection = document.querySelector(".information");

btn.addEventListener('click',function(){
    console.log("button clciked");
    let randomIndex = getRandomHexColor();
    infoSection.style.backgroundColor = randomIndex;
})

// function getRandomNumber()
// {
//     let randomRGB = "rgba("+getRandomRGBNumber()+","+getRandomRGBNumber()+","+getRandomRGBNumber()+")";
//     console.log(randomRGB);
//     return randomRGB;
// }

function getRandomRGBNumber()
{
    let result = Math.floor(Math.random()*256);
    console.log(result);
    return result;
}
// Function to generate a random Hex color value
function getRandomHexColor() {
    const hexChars = '0123456789ABCDEF';
    let color = '#';
  
    for (let i = 0; i < 6; i++) {
      color += hexChars[Math.floor(Math.random() * hexChars.length)];
    }
  
    return color;
  }