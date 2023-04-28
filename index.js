let viewQRC = document.querySelector(".veiw-qr-code");
let btn = document.querySelector(".btn");
let urltext = document.querySelector(".urltext");
let imgCountiner = document.querySelector("img");


btn.addEventListener("click", () => {
    let val = urltext.value;

    if(val) {
        let url = `https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=${val}`;
        localStorage.setItem("img",url);

        imgCountiner.src = url
        imgCountiner.style.display = "inline-block";
    }
})

window.onload = () => {
    let localImg = localStorage.getItem("img");
    imgCountiner.src = localImg;
    imgCountiner.style.display = "inline-block";
}