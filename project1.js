/*
    espace
    ,
*/

const thanks = document.getElementById("thanks");
const font = document.getElementById("font");
const okay = document.getElementById("okay");
const hello = document.createElement("h3");

/******************************************
            BUY
*****************************************/
const buys = document.querySelectorAll(".btn-primary");
const par = document.getElementById("product");
par.addEventListener("click", (eo) => {
  if (eo.target.className == "btn btn-primary") {
    font.classList.add("db");
    eo.preventDefault();
  }
});
const hhh = document.getElementById("hhh");


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
  hhh.value=""
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
/*
    espace
    ,
    =>
*/

const mbody = document.getElementsByTagName("body")[0];
const dark = document.getElementById("dark");
dark.addEventListener("click", () => {
  mbody.classList.toggle("dark");
});

/******************************************
           CLOSE
*****************************************/
/*
    espace
    ,
    =>
*/

const close = document.querySelector(".close-card");
par.addEventListener("click", (eo) => {
  if (eo.target.className == "fas fa-times close-card") {
    eo.target.parentElement.remove();
  }
});







/*
    espace
    ,
    =>
*/

const myadd = document.getElementById("myadd");
const myytitle = document.getElementById("title");
const mypar = document.getElementById("paragr");
const img1 = document.getElementById("dad");


// const file = document.getElementById("file");



{/* <img src="" id="img" class="card-img-top" alt=""> */}
const img = document.createElement("img")
myadd.addEventListener("click", (eo) => {
  
img.classList.add("card-img-top")
  const par = document.getElementById("product");
  par.innerHTML += `<div class="card new-card my-card" style="width: 18rem;">
                      <i class="fas fa-times close-card"></i>
                      <div class="card-body">
                        <h5 class="card-title">${myytitle.value}</h5>
                        <p class="card-text">${mypar.value}</p>
                         <a id="buy" href="#" class="btn btn-primary">Buy Now</a>
                      </div>
                      </div>`;
                      const card = document.querySelector(".new-card")

                        card.prepend(img)
                    
     
                      
  
          







  adea.classList.add("dn");
  myytitle.value = "";
  mypar.value = "";
  img1.src=""
});






const defaultBtn = document.querySelector("#file")
function defaultBtnActive(){
        defaultBtn.click()
}
defaultBtn.addEventListener("change" , function(){
        const file = this.files[0]
        if(file){
                const reader = new FileReader()
                reader.onload = function(){
                        const result = reader.result
                        img.src = result
                        img1.src = result
                      
                }
                reader.readAsDataURL(file)
        }
        
})
window.file.accept="image/*"



const aadea = document.getElementById("adea");
console.log(adea)

const closeAdd = document.querySelector(".close-add");
adea.addEventListener("click", (eo) => {
  if (eo.target.className == "fas close-add fa-times") {
    adea.classList.add("dn");

  }
});
