//1.setInterval
//2.animate margin-left
//3.last pic,go to position 1
//4.listen for mouse enter and pause
//5.resume when mouse leave
$(function(){
// ---------------------------------------------------------------------------
    var width=720;
    var animateSpeed=1000;
    var pause=1000;
    var $slider=$('#slider');
    var $sliderContainer=$slider.find('.slides');
    var $slides = $sliderContainer.find('.slide');
    var ans=1;
    var interval;
// ---------------------------------------------------------------------------
    function startSlider(){
    interval=setInterval(function(){
        $sliderContainer.animate({'margin-left':'-='+width},animateSpeed,backTofirst);
    },pause);
    }
    
    function backTofirst(){
        ans++;
        if(ans==$slides.length){
            ans=1;
            $sliderContainer.css('margin-left',0);
        }
    }
    
    function pasuseSlider(){
        clearInterval(interval);
    }
    startSlider();
    $slider.on('mouseenter',pasuseSlider).on('mouseleave',startSlider);
});