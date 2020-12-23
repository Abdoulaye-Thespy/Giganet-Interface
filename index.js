    // Using ES6 feature.
    let redirect_Page = () => {
        let tID = setTimeout(function () {
            window.location.href = "./welcome.html";
            window.clearTimeout(tID);     // clear time out.
        }, 3700);

    }




const delete_connect = () => {
let btnDisconnect = document.getElementById("stop");
let connect = document.getElementById("start");
let conDiv = document.getElementById("con");
let deconDiv = document.getElementById("decon");
  btnDisconnect.style.display =  "none";
  con.style.display =  "none";
  decon.style.display =  "block";
  connect.style.display = "block";
}

const delete_deconnect = () => {
let btnDisconnect = document.getElementById("stop");
let connect = document.getElementById("start");
let conDiv = document.getElementById("con");
let deconDiv = document.getElementById("decon");
  btnDisconnect.style.display =  "block";
  conDiv.style.display =  "block";
  deconDiv.style.display =  "none";
  connect.style.display = "none";
}
