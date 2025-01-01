<template>
  <div class="main-div">
    <img class="logo-image" src="../assets/logo.svg" />
    <div>
      <p>“Há 437 anos oferecendo (quase) excelência na criação e aprimoramento de armas.”</p>
    </div>
    <div class="robot-image">
      <img src="../assets/image.png" alt="Robot working with mechanical arms and gears" />
    </div>
    <div class="buttons">
      <RouterLink to="/regras"><button class="regras-button">REGRAS</button></RouterLink>
      <button class="formulario-button">FORMULÁRIO</button>
    </div>
    <footer><p class="footer-p">2024 © Mafê. All rights reserved.</p></footer>
  </div>
</template>

<script>
</script>

<style scoped>
  html, body, #app {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    background-color: rgba(248, 237, 237, 1);
  }

  p {
    color: rgba(23, 59, 69, 1);
    font-family: 'Jura', sans-serif;
    font-size: 14px;
    font-weight: 600;
    text-align: center;
  }

  .footer-p{
    font-size: 12px;
  }

  footer{
    margin-top: 5%;
  }

  .main-div {
    height: 100%;
    width: 100%;
    background-color: rgba(248, 237, 237, 1);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    overflow-y: auto;
  }

  .robot-image img {
    height: 250px;
    margin: 40px;
  }

  .logo-image{
    margin-top: 1%;
    margin-bottom: 1%;
    height: 80px;
  }

  .buttons {
    display: flex;
    flex-direction: column;
    gap: 15px;
    justify-content: center;
    align-items: center;
  }

  .regras-button {
    font-style: normal;
    padding: 10px 20px;
    font-family: 'Jura', sans-serif;
    font-size: 14px;
    font-weight: 600;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    width: 150px; /* Largura fixa para os botões */
    background-color: rgba(255, 123, 0, 1);
    color: rgba(248, 237, 237, 1);
  }

  .formulario-button {
    padding: 10px 20px;
    font-family: 'Jura', sans-serif;
    font-size: 14px;
    font-weight: 600;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    width: 150px !important; /* Largura fixa para os botões */
    background-color: rgba(23, 59, 69, 1);
    color: rgba(248, 237, 237, 1);
  }
</style>
