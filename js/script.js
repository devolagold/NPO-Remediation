$(document).ready(function(){
    $("#selector").change(function(){
        $("body").toggleClass("bg-black");
        $("p").toggleClass("text-white");
        $("h3").toggleClass("text-green");
        $("h2").toggleClass("text-white");
        $("h4").toggleClass("text-green");
        $("a").toggleClass("text-white");
        $("input").toggleClass("form-control-white");
        $("textarea").toggleClass("form-control-white");
    })
});

const selector = document.getElementById("selector");

selector.addEventListener('click', ()=>{
    alert("Hello")
})