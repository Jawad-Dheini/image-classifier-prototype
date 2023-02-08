const loadFile = (event) => {
  var image = document.getElementById("output");
  image.src = URL.createObjectURL(event.target.files[0]);
  document.getElementById("classify-button").style.display = "block";
};

const classify = (result) => {
  document.getElementById(
    "result"
  ).innerHTML = `The AI classified the image as a ${result}`;
};

document.getElementById("input").onclick = () => {
  document.getElementById("result").innerHTML = "";
};

document.getElementById("classify-button").onclick = () =>
  classify(/*Output of the model should be put here */);
