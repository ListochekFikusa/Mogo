jQuery(document).ready( function() {

jQuery('.accordion__text').hide();

// Accordion
jQuery('#accordionArr-1').click( function() {
	jQuery('#accordionArr-1').toggleClass('accordion__arrow_focus');
	jQuery('#accordion-2, #accordion-3').slideUp();
	jQuery('#accordion-1').slideToggle();
})
jQuery('#accordionArr-2').click( function() {
	jQuery('#accordionArr-2').toggleClass('accordion__arrow_focus');
	jQuery('#accordion-1, #accordion-3').slideUp();
	jQuery('#accordion-2').slideToggle();
})
jQuery('#accordionArr-3').click( function() {
	jQuery('#accordionArr-3').toggleClass('accordion__arrow_focus');
	jQuery('#accordion-1, #accordion-2').slideUp();
	jQuery('#accordion-3').slideToggle();
})

//slider service-2
let slidersNumber = jQuery('.slider-service-2__frame').length;//задание ширины ленты слайдера
let sliderWidth = jQuery('.slider-service-2__frame').width();
let overallWidth = slidersNumber * sliderWidth;
jQuery('.slider-service-2__tape-slider').width(overallWidth);

let elementShift;
let maxShift = overallWidth - sliderWidth;

jQuery('#slider-service-2__swipe_left').click( function() {//перемещение слайдера влево
	elementShift = jQuery('.slider-service-2__tape-slider').css('right');//текущее положение слайдера
	elementShift = parseInt(elementShift.match(/(\d+)/));
	elementShift = elementShift - sliderWidth;
	if ( elementShift < 0 ) elementShift = maxShift;
	jQuery('.slider-service-2__tape-slider').css({'right':`${elementShift}px`});
})
jQuery('#slider-service-2__swipe_right').click( function() {//перемещение слайдера вправо
	elementShift = jQuery('.slider-service-2__tape-slider').css('right');//текущее положение слайдера
	elementShift = parseInt(elementShift.match(/(\d+)/));
	elementShift = elementShift + sliderWidth;
	if ( elementShift > maxShift ) elementShift = 0;
	jQuery('.slider-service-2__tape-slider').css({'right':`${elementShift}px`});
})
})