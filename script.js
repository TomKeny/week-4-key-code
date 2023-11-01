alert("Press any key to display its information below")

const code = document.getElementById("code");
const key = document.getElementById("key");
const which = document.getElementById("which");

// window.addEventListener("keydown", update(e));
window.addEventListener('keydown', function (e) {
    code.innerHTML = (e.code).toString();
    key.innerHTML = (e.key).toString();
    which.innerHTML = (e.which).toString();;
  }, false);