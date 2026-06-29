const box = document.getElementById("gradientBox");
const generateBtn = document.getElementById("generate");
const css = document.getElementById("cssCode");
const copy = document.getElementById("copy");

function randomColor(){
    return "#" + Math.floor(Math.random()*1657776)
    .toString(16)
    .padStart(6,"0");
}

function generateGradient(){
    const color1 = randomColor();
    const color2 = randomColor();
    const angle = Math.floor(Math.random()*360);
    const gradient = `linear-gradient(${angle}deg,${color1},${color2})`;
    box.style.background = gradient;

    css.value = `background: ${gradient};`;
}

generateBtn.addEventListener("click",generateGradient);

copy.addEventListener("click",()=>{
    navigator.clipboard.writeText(css.value);
    copy.textContent = "copied!!";
    setTimeout(()=>{
        copy.textContent= "copy"
    },1500);

})

generateGradient();