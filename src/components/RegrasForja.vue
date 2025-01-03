<template>
    <div class="main-div">
      <h1>REGRAS</h1>
      <img class="robot-image" src="../assets/image.png" />
      <div class="rules">
        <p>1. Preencha o formulário com atenção e esteja atento ao que for pedido;</p>
        <p>2. Após o envio, será cotado um valor pelo serviço e entraremos em contato para confirmar o negócio;</p>
        <p>3. Caso já tenha uma ideia de arma em mente, descreva todos os detalhes que imaginou e tentaremos construir algo condizente com o desejado; </p>
        <p>4. Garanta de fazer seus pedidos com antecedência a missões, uma vez que a demanda pode vir a ser alta. </p>
        <p class="alert">PS: mantenha-se alerta às regras de Aeolia, pois (quase sempre) não trabalhamos com itens... ilegais.</p>
      </div>
      <footer><p class="footer-p">2024 © Mafê. All rights reserved.</p></footer>
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

  .alert{
    font-weight: 800;
    color: rgba(255, 123, 0, 1);
  }

  h1{
    font-family: 'Jura', sans-serif;
    color: rgba(255, 123, 0, 1);
  }

  .footer-p{
    font-size: 12px;
  }

  footer{
    margin-top: 4%;
  }

  .main-div {
    height: 100%;
    width: 100%; 
    background-color: rgba(23, 59, 69, 1);
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: fixed; /* ou relative, dependendo do seu layout */
    overflow-y: auto;
    overflow-x: auto;
}

  .robot-image {
    width: 110px;
    margin: 3%;
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