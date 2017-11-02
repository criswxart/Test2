// Initialize your app
var myApp = new Framework7();

// Export selectors engine
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});


$$(document).on('deviceready',initapp);

function initapp(){
  console.log("dispositivo listo!!!");
  $$('#tomar_foto').on('click',tomarfoto);
}

function tomarfoto(){
  console.log("tomar foto!!");
  navigator.camera.getPicture(onSuccess, onFail, options);
}
var options = {
        sourceType: 1,
        quality: 50,
        destinationType: 1,
        allowEdit: false,
        correctOrientation: true,
        saveToPhotoAlbum: true
}


function onSuccess(imageURI) {
    $$('#foto').attr('src',imageURI);
}

function onFail(message) {
    console.log('Failed because: ' + message);
}
function create_foto (){
var html_text ="";
html_text += '<li class="item-content">';
html_text += '<div class="item-media">';
html_text += '<img src="..." width="44">';
html_text += '</div>';
html_text += '<div class="item-inner">';
html_text += '<div class="item-title-row">';
html_text += '<div class="item-title">Yellow Submarine</div>';
html_text += '</div>';
html_text += '<div class="item-subtitle">Beatles</div>';
html_text += '</div>';
html_text += '</li>';
}
