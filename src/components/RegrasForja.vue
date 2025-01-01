<template>
  <div class="main-div">
    <h1>REGRAS</h1>
    <div class="robot-image">
      <img src="../assets/image.png" alt="Robot working with mechanical arms and gears" />
    </div>
    <div class="rules">
      <p>1. Preencha o formulário com atenção e esteja atento ao que foi pedido;</p>
      <p>2. Após o envio, será cotado um valor pelo serviço e entraremos em contato para confirmar o negócio;</p>
      <p>3. Caso já tenha uma ideia de arma em mente, descreva todos os detalhes que imaginou e tentaremos construir algo condizente com o desejado. Porém, mantenha-se alerta às regras de Aeolia, pois (quase sempre) não trabalhamos com itens... ilegais.</p>
      <p class="alert">PS: Em caso de conflito com regras do RPG, conversaremos com a administração para saber como prosseguir com a construção da arma.</p>
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

  .alert{
    font-weight: 800;
    color: rgba(255, 123, 0, 1);
  }

  h1{
    font-family: 'Jura', sans-serif;
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
    height: 200px;
    margin: 20px;
  }

  .logo-image{
    margin-top: 1%;
    margin-bottom: 1%;
    height: 80px;
  }

  .rules {
    display: flex;
    flex-direction: column;
    width: 60%;
    gap: 5px;
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