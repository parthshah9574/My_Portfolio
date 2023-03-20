var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
        if (tablink.getAttribute("data-target") == tabname) {
            tablink.classList.add("active-link");
        }
    }

    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
        if (tabcontent.getAttribute("id") == tabname) {
            tabcontent.classList.add("active-tab");
        }
    }
}

var sidemenu = document.getElementById("sidemenu");

function openmenu() {
    sidemenu.style.right = "0";
}

function closemenu() {
    sidemenu.style.right = "-200px";
}

// FORM
const scriptURL =
    "https://script.google.com/macros/s/AKfycbzy7T3Pcd43fJiHjtQk5q_FtJfxRdV8kJZ1TKQ7ABEOI8Eha7RNUChbb67cdgiuZXDu4Q/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    fetch(scriptURL, {method: "POST", body: new FormData(form)})
        .then((response) => {
            msg.innerHTML = "Message sent successfully 🙌.";
            setTimeout(function () {
                msg.innerHTML = "";
            }, 5000);
            form.reset();
        })
        .catch((error) => console.error("Error!", error.message));
});
