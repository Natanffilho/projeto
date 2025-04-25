function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag da imagem
  const img = document.querySelector("#profile img")


  //subistituir a imagem
  if (html.classList.contains("light")) {
    // se tiver a imagem light mode, add a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute("alt", "foto branca")
  } 
  else {
    // se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute("alt", "Foto de Mayk Brito sorrindo.")
  }
}
