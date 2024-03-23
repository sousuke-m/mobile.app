document.body.style.backgroundImage = `url(${localStorage.getItem('background_image_url')})`;
if(localStorage.getItem('background_image_url') == null || localStorage.getItem('background_image_url') == 'null' || localStorage.getItem('background_image_url') == undefined || localStorage.getItem('background_image_url') == 'undefined'){
    localStorage.setItem('background_image_url',"https://sousuke-m.github.io/mobile.app/default/background/image/df2.jpg");
    location.reload();
}
function settings_background_image(){
    var image_url = prompt('背景画像のURLを入力してください','https://sousuke-m.github.io/mobile.app/default/background/image/df1.jpg');
    localStorage.setItem('background_image_url',image_url);
    location.reload();
}