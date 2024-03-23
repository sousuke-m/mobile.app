document.body.style.backgroundImage = `url(${localStorage.getItem('background_image_url')})`;
if(localStorage.getItem('background_image_url') == null){
    localStorage.setItem('background_image_url',"https://imageslabo.com/wp-content/uploads/2019/05/101_benishidare-sakura_6414-973x1460.jpg");
}
function settings_background_image(){
    var image_url = prompt('背景画像のURLを入力してください','https://sousuke-m.github.io/mobile.app/default/background/image/AC11FA81-DAEE-45AA-8BEE-15134D9B6BDF.jpg');
    localStorage.setItem('background_image_url',image_url);
    location.reload();
}