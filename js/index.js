
function haikuHandler(event) {
  event.preventDefault();
  let inputText = document.getElementById("inputText").value;
  const haiku = storeState(inputText);
  haiku(testAll);
  (haiku().isHaiku) ? document.getElementById("result").innerText = 'This is a Haiku' : document.getElementById("result").innerText = 'This is not a Haiku';
}

window.onload = function () {
  document.querySelector("#haikuForm").addEventListener("submit", haikuHandler);
}