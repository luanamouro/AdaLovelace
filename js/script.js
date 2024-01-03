document.getElementById("botaoEnviar").addEventListener("click", validaFormulario)

function validaFormulario(){
   if (document.getElementById("nome").value != "" &&      document.getElementById("email").value != ""&&          document.getElementById("telefone").value != ""){
    alert("Prontinho! Você receberá as mensagens por email!")
  }else{
    alert("Favor completar os campos nome, email e telefone.") 
}  
}
  
