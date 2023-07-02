function addImagex1() {
  document.getElementById("img1").innerHTML = '<video autoplay muted loop id="myVideo"><source src="requirements/Portfolio.mp4" type="video/mp4" style="border-radius: 100%;"></video> <br>';
}

function addImagex2() {
  document.getElementById("img1").innerHTML = '<video autoplay muted loop id="myVideo"><source src="requirements/Digital Marketing.mp4" type="video/mp4" style="border-radius: 100%;"></video> <br>';
}

function addImagex3() {
  document.getElementById("img1").innerHTML = '<video autoplay muted loop id="myVideo"><source src="requirements/digitRecognition system.mp4" type="video/mp4" style="border-radius: 100%;"></video> <br>';
}

function removeImage() {
    document.getElementById("img1").innerHTML = " ";
}

document.getElementById("x1").addEventListener("mouseover", addImagex1);
document.getElementById("x2").addEventListener("mouseover", addImagex2);
document.getElementById("x3").addEventListener("mouseover", addImagex3);
document.getElementById("x1").addEventListener("mouseleave", removeImage);
document.getElementById("x2").addEventListener("mouseleave", removeImage);
document.getElementById("x3").addEventListener("mouseleave", removeImage);


