function upDate(previewPic) {
  console.log("upDate triggered:", previewPic.alt, previewPic.src);
  let previewDiv = document.getElementById("image");
  previewDiv.style.backgroundImage = "url('" + previewPic.src + "')";
  previewDiv.innerHTML = previewPic.alt;
}

function unDo() {
  console.log("unDo triggered");
  let previewDiv = document.getElementById("image");
  previewDiv.style.backgroundImage = "url('')";
  previewDiv.innerHTML = "Hover or focus on an image below to display here.";
}

function initGallery() {
  console.log("Page loaded, initGallery triggered");
  let images = document.querySelectorAll("#gallery img");
  for (let i = 0; i < images.length; i++) {
    images[i].setAttribute("tabindex", "0");
  }
}
