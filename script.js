// Calling Api
let data = "";
async function api() {
  try {
    const response = await fetch("https://type.fit/api/quotes");
    data = await response.json();

    console.log(data);
  } catch (error) {
    console.error("Error:", error.message);
  }
}
api();

// color change
const color = {
  body: ["#944E63", "#12372A", "#1F2544", "#643843", "#092635"],
  container: ["#CAA6A6", "#ADBC9F", "#81689D", "#AC7D88", "#5C8374"],
  btn: ["#B47B84", "#436850", "#474F7A", "#85586F", "#1B4242"],
  border: ["#FFE7E7", "#FBFADA", "#FFD0EC", "#FDF0D1", "#9EC8B9"],
};
const body = document.body;
const container = document.querySelector(".container");
const btn = document.querySelector(".btn");
const quote = document.querySelector(".quote");
const author = document.querySelector(".author");

//change color

let i = 1;
let j = 0;
btn.addEventListener("click", () => {
  body.style.background = color.body[i];
  container.style.background = color.container[i];
  container.style.border = `${color.border[i]} 3px solid`;
  btn.style.background = color.btn[i];

  i === color.body.length - 1 ? (i = 0) : i++;

  // changing quote on click
  quote.innerHTML = data[j].text;
  author.innerHTML = data[j].author.split(",")[0];

  j === data.length - 1 ? (j = 0) : j++;
});
