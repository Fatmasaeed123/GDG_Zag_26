//   // تنسيقات
//   popup.style.cssText = 
//     width: 400px;
//     padding: 20px;
//     background-color: #eee;
//     border: 1px solid #ccc;
//     position: fixed;
//     left: 50%;
//     top: 50%;
//     transform: translate(-50%, -50%);
//     text-align: center;
//     font-family: Arial;
//   ;

//   closeBtn.style.cssText = 
//     position: absolute;
//     top: -10px;
//     right: -10px;
//     background-color: red;
//     color: white;
//     border: none;
//     width: 30px;
//     height: 30px;
//     border-radius: 50%;
//     cursor: pointer;
//   ;

//   closeBtn.onclick = function () {
//     popup.remove();
//   };
// }

// setTimeout(createPopup, 5000);
// let div = document.querySelector("div");

// let counter = setInterval(function () {
//   div.innerHTML -= 1;

//   if (Number(div.innerHTML) === 0) {
//     clearInterval(counter);
//   }
// }, 1000);
// let div = document.querySelector("div");

// let counter = setInterval(function () {
//   div.innerHTML -= 1;

//   if (Number(div.innerHTML) === 0) {
//     clearInterval(counter);
//     window.location.href = "https://elzero.org";
//   }
// }, 1000);
let div = document.querySelector("div");

let counter = setInterval(function () {
  div.innerHTML -= 1;

  if (Number(div.innerHTML) === 5) {
    window.open(
      "https://elzero.org",
      "_blank",
      "width=600,height=400,left=300,top=100"
    );
  }

  if (Number(div.innerHTML) === 0) {
    clearInterval(counter);
  }
}, 1000);