var img = new Image()   //для последующего вычисления ширины и высоты
  , rate = $('.rate')
  , rate_check = $('.rate_check')
  , star_selected;
img.src = rate.css('background-image').replace(/^url\(['"](.+)['"]\)/, '$1');   //получаем путь к звездам
rate.width(img.width*5);
rate.height(img.height);
rate_check.height(img.height);
setRateFromValue();
rate.mousemove(function(e){
    star_selected = Math.ceil((e.pageX-rate.offset().left)/img.width);
    rate_check.width(star_selected*img.width);
});
rate.mouseout(function(){
    setRateFromValue();
});
rate.click(function(){
    rate.attr('value',star_selected);
});
function setRateFromValue(){
    rate_check.width(rate.attr('value')*img.width);
}