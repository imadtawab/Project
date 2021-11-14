const thanks = document.getElementById("thanks");
const font = document.getElementById("font");
const okay = document.getElementById("okay");
const hello = document.createElement("h3");
/******************************************
            BUY
*****************************************/
const par = document.getElementById("product");
par.addEventListener("click", (eo) => {
  if (eo.target.className == "btn btn-primary") {
    font.classList.add("db");
    eo.preventDefault();
  }
});
const cardNumber = document.getElementById("cardNumber");
/******************************************
            thanks
*****************************************/
thanks.addEventListener("click", (eo) => {
  okay.classList.add("dn");
  hello.innerText = "Thank you bro";
  hello.classList.add("helo");
  font.prepend(hello);
  setTimeout(() => {
    font.classList.remove("db");
    okay.classList.remove("dn");
    hello.remove();
  }, 2000);
  cardNumber.value = "";
});
/******************************************
            ADD
*****************************************/
const add = document.getElementById("add");
const adea = document.getElementById("adea");
add.addEventListener("click", () => {
  adea.classList.remove("dn");
});
/******************************************
            dark-mode
*****************************************/
const mbody = document.getElementsByTagName("body")[0];
const dark = document.getElementById("dark");
dark.addEventListener("click", () => {
  mbody.classList.toggle("dark");
});
/******************************************
           CLOSE
*****************************************/
par.addEventListener("click", (eo) => {
  if (eo.target.className == "fas fa-times close-card") {
    eo.target.parentElement.remove();
  }
});
const myadd = document.getElementById("myadd");
const myytitle = document.getElementById("title");
const mypar = document.getElementById("paragr");
const img1 = document.getElementById("dad");
// card
let i = 1;
myadd.addEventListener("click", (eo) => {
  par.innerHTML += `<div class="card new-card my-card" style="width: 18rem;">
                      <i class="fas fa-times close-card"></i>
                      <img src="" class="card-img-top prod${i}" alt="...">
                      <div class="card-body">
                        <h5 class="card-title">${myytitle.value}</h5>
                        <p class="card-text">${mypar.value}</p>
                         <a id="buy" href="#" class="btn btn-primary">Buy Now</a>
                      </div>
                      </div>`;
  adea.classList.add("dn");
  myytitle.value = "";
  mypar.value = "";
  img1.src = "";
  i++;
  defaultBtn.value = "";
});
setInterval(() => {
  if (myytitle.value == "" || mypar.value == "") {
    myadd.setAttribute("disabled" , "")
  } else {
    myadd.removeAttribute("disabled")
  }
}, 1000);
// img
const defaultBtn = document.querySelector("#file");
function defaultBtnActive() {
  defaultBtn.click();
}
defaultBtn.addEventListener("change", function () {
  const file = this.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function () {
      const result = reader.result;
      // *solution*
      myadd.addEventListener("click", (eo) => {
        par.querySelector(`.prod${i - 1}`).src = result;
      });
      img1.src = result;
    };
    reader.readAsDataURL(file);
  }
});
window.file.accept = "image/*";
const closeAdd = document.querySelector(".close-add");
adea.addEventListener("click", (eo) => {
  if (eo.target.className == "fas close-add fa-times") {
    adea.classList.add("dn");
  }
});

