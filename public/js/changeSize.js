const imageResize = () => {
  document.getElementsByClassName("fullImage")[0].style.width = window.innerWidth + "px";
  document.getElementsByClassName("fullImage")[0].style.height = window.innerHeight + "px";
}

imageResize();
window.addEventListener("resize", imageResize);