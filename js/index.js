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



$("#saiba-mais")