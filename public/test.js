document.getElementById("test").addEventListener("touchstart", test)

function test(e) {
  console.log(e);
  document.getElementById("test").innerText = "touched"
}