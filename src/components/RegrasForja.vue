<template>
  <div class="content">
      <div class="back">
      <RouterLink to="/" style="color: rgba(255, 123, 0, 1); font-family: 'Jura', sans-serif;">VOLTAR</RouterLink>
      </div>
    <div class="main-div">
      <h1>REGRAS</h1>
      <div class="robot-image">
        <img src="../assets/image.png" alt="Robot working with mechanical arms and gears" />
      </div>
      <div class="rules">
        <p>1. Preencha o formulário com atenção e esteja atento ao que foi pedido;</p>
        <p>2. Após o envio, será cotado um valor pelo serviço e entraremos em contato para confirmar o negócio;</p>
        <p>3. Caso já tenha uma ideia de arma em mente, descreva todos os detalhes que imaginou e tentaremos construir algo condizente com o desejado. Porém, mantenha-se alerta às regras de Aeolia, pois (quase sempre) não trabalhamos com itens... ilegais;</p>
        <p>4. Garanta de fazer seus pedidos com antecedência a missões, uma vez que a demanda pode vir a ser alta. </p>
        <p class="alert">PS: Em caso de conflito com regras do RPG, conversaremos com a administração para saber como prosseguir com a construção da arma.</p>
      </div>
      <footer><p class="footer-p">2024 © Mafê. All rights reserved.</p></footer>
    </div>
  </div>
</template>

<script>
</script>

<style scoped>

  p {
    color: rgba(248, 237, 237, 1);
    font-family: 'Jura', sans-serif;
    font-size: 14px;
    font-weight: 600;
    text-align: center;
  }

  .back{
    padding: 1%;
    width: 30%;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
  }

  .content{
    margin: 0%;
    padding: 1%;
    padding-left: 0%;
    height: 100%;
    width: 100%;
    overflow: scroll; 
    position: absolute;
    background-color: rgba(23, 59, 69, 1);
  }

  .alert{
    font-weight: 800;
    color: rgba(255, 123, 0, 1);
  }

  h1{
    font-family: 'Jura', sans-serif;
    margin: 0%;
    color: rgba(248, 237, 237, 1);;
  }

  .footer-p{
    font-size: 12px;
  }

  footer{
    margin-top: 3%;
  }

  .main-div {
    height: 100%;
    width: 100%;
    margin: 0%;
    background-color: rgba(23, 59, 69, 1);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden; 
    position: absolute;
  }

  .robot-image img {
    height: 200px;
    margin: 30px;
  }

  .logo-image{
    margin-top: 1%;
    margin-bottom: 1%;
    height: 80px;
  }

  .rules {
    color: rgba(248, 237, 237, 1);
    display: flex;
    flex-direction: column;
    width: 60%;
    gap: 5px;
    justify-content: center;
    align-items: center;
  }
</style>