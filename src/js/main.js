/*
* >>========================================>
* Scolling ISI
* >>========================================>
*/

var DivElmnt = document.getElementById("isi");
DivElmnt.scrollTop = 0;

var ScrollRate = 100;
var initialDelay;
var PreviousScrollTop  = 0;
var ReachedMaxScroll = false;
var ScrollInterval;

function scrollDiv_init() {
	initialDelay = setTimeout(function(){
		ScrollInterval = setInterval('scrollDiv()', ScrollRate);
	}, 500);

	DivElmnt.addEventListener("ontouchmove", pauseDiv, false);
	DivElmnt.addEventListener("mouseenter", pauseDiv, false);
	DivElmnt.addEventListener("mouseleave", resumeDiv, false);
}

function scrollDiv() {
	if (!ReachedMaxScroll) {
		DivElmnt.scrollTop = PreviousScrollTop;
		PreviousScrollTop++;
		ReachedMaxScroll = DivElmnt.scrollTop >= (DivElmnt.scrollHeight - DivElmnt.offsetHeight);
	}
}

function pauseDiv() {
	clearTimeout(initialDelay);
	clearInterval(ScrollInterval);
}

function resumeDiv() {
	PreviousScrollTop = DivElmnt.scrollTop;
	ScrollInterval    = setInterval('scrollDiv()', ScrollRate);
}

/*
* >>========================================>
* Banner Animation
* >>========================================>
*/

var flowerAnimation = new TimelineLite({paused:true});

flowerAnimation
	.fromTo('#flower-5', .8, {opacity: 0}, {opacity: 1, ease: Linear.easeNone})
	.fromTo('#flower-6', .8, {x: -5, y: -5, scale: 0, opacity: 0}, {x: 0, y: 0, scale: 1, opacity: 1, ease: Power2.easeOut}, '-=.5')

flowerAnimation.timeScale(1)

var bannerAnimation = new TimelineLite({paused:true});

bannerAnimation
	
	.add(function(){
		flowerAnimation.play();
	})
	.fromTo('#fda-approved', .8, {opacity: 0}, {opacity: 1, delay: .5, ease: Linear.easeNone})
	
	.fromTo('#grafapex-logo', .6, {x: -300}, {x: 0, ease: Power1.easeOut})
	
	.fromTo('#isi', .6, {x: '100%'}, {x: 0, delay: .05, ease: Power1.easeOut, onComplete:function(){
		scrollDiv_init();
	}}, 'pi-entrance')
	.fromTo('#pi-warning-link', .8, {opacity: 0}, {opacity: 1, ease: Linear.easeNone},'pi-entrance')

	.add('copy-entrance', '+=1')
	.fromTo('#copy-1', .6, {opacity: 0, x: 300}, {opacity: 1, x: 0, ease: Power1.easeOut})

	.add('copy-exit', '+=5')
	.to('#copy-1', .6, {opacity: 0, ease: Linear.easeNone}, 'copy-exit')

	
	.add('button-entrance', '+=.5')
	.fromTo('#button', .6, {opacity: 0}, {opacity: 1, ease: Linear.easeNone}, 'button-entrance')
	.fromTo('#arrow', .6, {opacity: 0}, {opacity: 1, ease: Linear.easeNone}, 'button-entrance')