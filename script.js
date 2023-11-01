const codeText = document.getElementById("code");
const keyText = document.getElementById("key");
const whichText = document.getElementById("which");

// window.addEventListener("keydown", update(e));
window.addEventListener('keydown', function (e) {
    codeText.innerHTML = (e.code).toString();
    keyText.innerHTML = (e.key).toString();
    whichText.innerHTML = (e.which).toString();;
  }, false);

  const button = document.getElementById("continue");
  const container = document.getElementById("welcome");

  button.addEventListener("click", () => {
    container.style.display = "none";
  })