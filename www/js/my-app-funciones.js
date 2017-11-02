// Initialize your app
var myApp = new Framework7();

// Export selectors engine
var $$ = Dom7;//acortar el codigo javascript

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});
//codigo nuevo, primera linea llama al index en donde esta el deviceready para llamarlo
$$(document).on('deviceready',initapp);
// on escuchar un evetno que se produzca
function initapp(){
  console.log("dispositivo listo!!");
  $$('#camara').on("click",click_camara);
  $$('#video').on("click",click_video);
  $$('#audio').on("click",click_audio);
}
function click_camara(){
  document.location = "camara.html"
}
function click_video(){
  document.location = "video.html"
}

function click_audio(){
  document.location = "audio.html"
}
