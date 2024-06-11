function carregar() {
  let msg = document.getElementById("msg");
  let bomMsg = document.getElementById("msg-bom");
  let img = document.getElementById("foto");
  let dataAtual = new Date();
  let hora = dataAtual.getHours();

  msg.innerHTML = `Agora são ${hora} horas.`;

  if (hora >= 0 && hora < 12) {
    bomMsg.innerHTML = `Bom dia!`;
    img.src = "imagens/manha.jpg";
    document.body.style.background = "#F9D487";
  } else if (hora >= 12 && hora <= 18) {
    bomMsg.innerHTML = `Boa tarde!`;
    img.src = "imagens/tarde.jpg";
    document.body.style.background = "#B9846F";
  } else if (hora > 18 && hora <= 24) {
    bomMsg.innerHTML = `Boa Noite!`;
    img.src = "imagens/Noite.jpg";
    document.body.style.background = "#1d1c1c";
  }
}
