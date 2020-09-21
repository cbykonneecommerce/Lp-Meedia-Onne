//Validadores




// fim validadores

//MASCARAS 

//mascara CNPJ
$("#cnpj").on("keyup", function (e) {
    $(this).val(
        $(this).val()
            .replace(/\D/g, '')
            .replace(/^(\d{2})(\d{3})?(\d{3})?(\d{4})?(\d{2})?/, "$1 $2 $3/$4-$5"));
});



$("#investmedia").on("keyup", function (e) {

    var elemento = document.getElementById('investmedia');
    var valor = elemento.value;
    
    valor = valor + '';
    valor = parseInt(valor.replace(/[\D]+/g,''));
    valor = valor + '';
    valor = valor.replace(/([0-9]{2})$/g, ",$1");
  
    if (valor.length > 6) {
      valor = valor.replace(/([0-9]{3}),([0-9]{2}$)/g, "$1,$2");
    }
  
    elemento.value = valor;
  
});


//mascara TEL

$("#telefone").on("keyup", function (e) {

    let tel = $(this).val();
    tel = tel.replace(/\D/g, "")
    tel = tel.replace(/^(\d)/, "($1")
    tel = tel.replace(/(.{3})(\d)/, "$1)$2")
    if (tel.length == 9) {
        tel = tel.replace(/(.{1})$/, "-$1")
    } else if (tel.length == 10) {
        tel = tel.replace(/(.{2})$/, "-$1")
    } else if (tel.length == 11) {
        tel = tel.replace(/(.{3})$/, "-$1")
    } else if (tel.length == 12) {
        tel = tel.replace(/(.{4})$/, "-$1")
    } else if (tel.length > 12) {
        tel = tel.replace(/(.{4})$/, "-$1")
    }
    $(this).val(tel);
});





$("#form-sender").click(()=>{
    event.preventDefault()
    console.log("start")
    let formdata = {
        "apiKey": "1234",
        "cnpj":$("#cnpj").val(),
        "company_name": $("#empresa").val(),
        "site": $("#site").val(),
        "name":$("#name").val(),
        "role":$("#role").val(),
        "email":$("#email").val(),
        "phone_number":$("#telefone").val(),
        "page_views":$("#pgview").val(),
        "media_investment":$("#investmedia").val()
    }

 fetch('https://meediaonne.com/api/landing-page/store', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formdata)
  })
  .then(response =>{
      return response.json()
  })
  .then(result=>{
      console.log(result);
      alert("Dados enviados com sucesso!")
  })
  .catch(function(error) {
    console.log("Algo deu errado. Tente novamente.");
  });
})







$(".zero-cost").click(()=>{
    $(".zero-cost").addClass("active-topic");
    $(".real-roi").removeClass("active-topic")
    $(".artificial-inteligence").removeClass("active-topic")
    $(".topic-content").fadeOut();
    setTimeout(()=>{
        $(".topic-content#zero-cost").fadeIn()
    },600)
    
})

$(".real-roi").click(()=>{
    $(".real-roi").addClass("active-topic");
    $(".zero-cost").removeClass("active-topic")
    $(".artificial-inteligence").removeClass("active-topic")
    $(".topic-content").fadeOut();
    setTimeout(()=>{
        $(".topic-content#real-roi").fadeIn()
    },600)
    
})


$(".artificial-inteligence").click(()=>{
    $(".artificial-inteligence").addClass("active-topic");
    $(".real-roi").removeClass("active-topic")
    $(".zero-cost").removeClass("active-topic")
    $(".topic-content").fadeOut();

    setTimeout(()=>{
        $(".topic-content#artificial-inteligence").fadeIn()
    },600)

})



$("#saiba-mais").click(function(){
    const mq = window.matchMedia("(min-width: 1200px)");
    if (mq.matches) {
        $('html,body').animate({scrollTop: $("#forms").offset().top + 300});
    } else{
        $('html,body').animate({scrollTop: $("#forms").offset().top });
    }
        
  
  })