document.body.style.backgroundImage = `url(${localStorage.getItem('background_image_url')})`;
function settings_background_image(){
    var image_url = prompt('背景画像のURLを入力してください','https://sousuke-m.github.io/mobile.app/default/background/image/AC11FA81-DAEE-45AA-8BEE-15134D9B6BDF.jpg');
    localStorage.setItem('background_image_url',image_url);
    location.reload();
}