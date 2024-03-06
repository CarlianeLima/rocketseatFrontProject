function toggleMode() {
  const html = document.documentElement

  // if (html.classList.contains("light")) {
  //   html.classList.remove("light")
  // } else {
  //   html.classList.add("light")
  // }

  //Existe uma função chamada toggle que faz exatamente isso que o if fez:
  html.classList.toggle("light")

  // Pegar a tag img
  const img = document.querySelector("#profile img")

  // Substituir o src dela
  if (html.classList.contains("light")) {
    // Se tiver light mode, adicionar a imagem do sol
    // também tem a opção: img.setAttribute("src", "./assets/avatar-light.png")
    img.src = "./assets/avatar-light.png"
    img.alt = "Avatar Light Mode"
  } else {
    // Se não tiver light mode, adicionar a imagem da lua
    img.src = "./assets/avatar.png"
    img.alt = "Avatar Dark Mode"
  }
}
