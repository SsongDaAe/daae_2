$(document).ready(function() {
    
var numBanner = 8;
var bannerNow = 0;
var bannerPrev = 0;
var bannerNext = 0;
var firsrSlide = 1; // 처음에보여주는 슬라이드
var timerId = '';  
var timerSpeed = 2500;
var isTimerOn = true;
	
var numPopup = 29;
var PopupNow = 0;
var PopupPrev = 0;
var PopupNext = 0;
var firstPopup = 1; // 처음에보여주는 슬라이드
var timerPopup = '';  
var PopupSpeed = 3000;
var isPopupOn = true;
	
var numcommuniCation = 5;
var communiCationNow = 0;
var communiCationPrev = 0;
var communiCationNext = 0;
var firstcommuniCation = 1;
	
var numMovie = 5;
var movieNow = 0;
var moviePrev = 0;
var movieNext = 0;
var firstMovie = 1;
	
var numIcon = 2;
var iconNow = 0;
var iconPrev = 0;
var iconNext = 0;
var firstIcon = 1;
	
/*최상위로 올라가기*/
var topEle = $('#footer div.foot_wrap div.up > a');
var delay = 1000;
    
topEle.on('click', function() {
  $('html, body').stop().animate({scrollTop: 0}, delay);
});
	
$(document).on('click', 'a[href="#"]', function(e) {
	e.preventDefault();
});
	
$('#main-header div.search button.search_open').on('click', function() {
	$('#main-header div.search_Newwindow').addClass('open');
	$('#main-header div.search button.search_close').addClass('open');
	$('#main-header div.search button.search_close').on('click', function() {
		$(this).removeClass('open');
		$('#main-header div.search_Newwindow').css({'transition' : 'all 0.4s'});
		$('#main-header div.search_Newwindow').removeClass('open')
	});
});

/*lang*/
$('#main-header div.inner-header nav.gnb-user ul > li:last-child').on('click', function(e) {
	e.stopPropagation();
	$('#main-header div.inner-header nav.gnb-user div.lang_panel').toggleClass('on');
});

/*lnb*/
$('#main-header nav.main_lnb ul li a').on('mouseenter focusin', function() { 
	$(this).siblings().stop().slideDown();
});
$('#main-header nav.main_lnb ul li').on('mouseleave ', function() {
	$(this).children('div.sub').stop().slideUp();
});
	
/*mobil-menu*/
$('#main-header div.search button.menu_btn').on('click', function() {
	$('#main-header div.lnb').addClass('open');
	$('#main-header div.lnb div.menu_wrap').addClass('open');
});
$('#main-header div.lnb div.menu_link button.lnb_close').on('click', function() {
	$('#main-header div.lnb').removeClass('open');
	$('#main-header div.lnb div.menu_wrap').removeClass('open');
});
/*mobile-lnb*/
$('#main-header div.lnb nav.mainlnb > ul > li > a').on('click', function() {
	$('#main-header div.lnb nav.mainlnb > ul > li').toggleClass('on');
	$(this).toggleClass('on');
	$(this).siblings().find('dl').toggleClass('on')
});
	

communiCationSlide(firstcommuniCation);
$('div.main_communication_wrap div.slide_left div.btn_box button.prev').on('click', function() {
	communiCationSlide(communiCationPrev);
});
	$('div.main_communication_wrap div.slide_left div.btn_box button.next').on('click', function() {
	communiCationSlide(communiCationNext);
});

$('#main div.main_communication_wrap div.slide_left div.btn_box ul.slick-dots > li > button').on('click', function() {
    var index = $('#main div.main_communication_wrap div.slide_left div.btn_box ul.slick-dots > li').index($(this).parent());
    communiCationSlide(index + 1);
});  
	
movieSlide(firstMovie);
$('#main div.main_communication_wrap div.movieslide_right div.btn_box button.prev').on('click', function() {
	movieSlide(moviePrev);
});
	$('#main div.main_communication_wrap div.movieslide_right div.btn_box button.next').on('click', function() {
	movieSlide(movieNext);
});

$('#main div.main_communication_wrap div.movieslide_right div.btn_box ul.slick-dots > li > button').on('click', function() {
    var index = $('#main div.main_communication_wrap div.movieslide_right div.btn_box ul.slick-dots > li').index($(this).parent());
    movieSlide(index + 1);
});


$('#main div.main_wrap div.servce_wrap div.mid_conent_area div.notice li.notice_list').on('click', function() {
	//alert('12112121');
	var i = $(this).index();
	$('#main div.main_wrap div.servce_wrap div.mid_conent_area div.notice li.notice_list').removeClass('on');
	$('#main div.main_wrap div.servce_wrap div.mid_conent_area div.notice li.notice_list').eq(i).addClass('on');
	$('#main div.main_wrap div.mid_conent_area div.notice div.News').removeClass('on');
	$('#main div.main_wrap div.mid_conent_area div.notice div.News').eq(i).addClass('on');
});

$('#main div.main_wrap div.top_slide div.main_slide div.img_slide ul.slide li').each(function(i) {
$(this).css({'left': (i * 100) + '%', 'display': 'block'});
// 이미지 배열
});
    
bannerSlide(firsrSlide);

$('#main div.main_wrap div.top_slide div.main_slide div.img_slide div.btn_box > button.slide_prev').on('click', function() {
	bannerSlide(bannerPrev);
});
$('#main div.main_wrap div.top_slide div.main_slide div.img_slide div.btn_box > button.slide_next').on('click', function() {
	bannerSlide(bannerNext);
});
    
if (isTimerOn === true) {
    $('#main div.main_wrap div.top_slide div.main_slide div.img_slide div.btn_box > button.play').addClass('on');
}else {
    $('#main div.main_wrap div.top_slide div.main_slide div.img_slide div.btn_box > button.play').removeClass('on');
}
    
$('#main div.main_wrap div.top_slide div.main_slide div.img_slide div.btn_box > button.play').on('click', function() {
    if (isTimerOn === true) {
        clearTimeout(timerId);
        $(this).removeClass('on');
        isTimerOn = false;
        $('#main div.main_wrap div.top_slide div.main_slide div.img_slide div.btn_box > button.pause').addClass('on');
    } else {
        timerId = setTimeout(function() {bannerSlide(bannerNext);}, timerSpeed);
        $(this).addClass('on');
        isTimerOn = true;
    }
});
	
$('#main div.main_wrap div.mid_conent_area div.popup_zone div.popup_img > ul > li').each(function(i) {
$(this).css({'left': (i * 100) + '%', 'display': 'block'});
// 이미지 배열
});

if (isPopupOn === true) {
    $('#main div.main_wrap div.mid_conent_area div.popup_zone div.btn_box button.play').addClass('on');
}else {
    $('#main div.main_wrap div.mid_conent_area div.popup_zone div.btn_box button.play').removeClass('on');
}
    
$('#main div.main_wrap div.mid_conent_area div.popup_zone div.btn_box button.play').on('click', function() {
    if (isPopupOn === true) {
        clearTimeout(timerPopup);
        $(this).removeClass('on');
        isPopupOn = false;
        $('#main div.main_wrap div.mid_conent_area div.popup_zone div.btn_box button.pause').addClass('on');
		$('#main div.main_wrap div.mid_conent_area div.popup_zone div.btn_box button.pause.on').on('click', function() {
			$('#main div.main_wrap div.mid_conent_area div.popup_zone div.btn_box button.pause').removeClass('on');
			$('#main div.main_wrap div.mid_conent_area div.popup_zone div.btn_box button.play').addClass('on');
		});
    } else {
        timerPopup = setTimeout(function() {PopupSlide(PopupNext);}, timerPopup);
        $(this).addClass('on');
        isPopupOn = true;
    }
});
	
$('#main div.main_communication_wrap div.slide_left > ul.slide_inner li').each(function(i) {
$(this).css({'left': (i * 100) + '%', 'display': 'block'});
// 이미지 배열
});
	
$('#main div.main_communication_wrap div.movieslide_right > ul.slide_inner li').each(function(i) {
$(this).css({'left': (i * 100) + '%', 'display': 'block'});
// 이미지 배열
});
$('div.m_servcebox >ul > li').each(function(i) {
$(this).css({'left': (i * 100) + '%', 'display': 'block'});
// 이미지 배열
});
	
iconSlide(firstIcon);
$('#main div.main_wrap div.m_servce a.m_servce-prev').on('click', function() {
	iconSlide(iconPrev);
});
	$('#main div.main_wrap div.m_servce a.m_servce-next').on('click', function() {
	iconSlide(iconNext);
});
	
setBannerSlide('div.popup_zone:eq(0)', true, 2000);

    
function bannerSlide(b) {
    clearTimeout(timerId);
    if (bannerNow === 0) {
        $('#main div.main_wrap div.top_slide div.main_slide div.img_slide ul.slide').css({'transition': 'none','left': -((b - 1) * 100) + '%'}); 
    } else {
        $('#main div.main_wrap div.top_slide div.main_slide div.img_slide ul.slide').css({'transition': 'left 0.5s','left': -((b - 1) * 100) + '%'}); 
        }
    $('#main div.main_wrap div.top_slide div.main_slide div.img_slide ul.slick-dots > li').removeClass('on');
    $('#main div.main_wrap div.top_slide div.main_slide div.img_slide ul.slick-dots > li:eq(' + (b - 1) + ')').addClass('on');
    bannerNow = b;
    bannerPrev = (b === 1) ? numBanner : (b - 1);
    bannerNext = (b === numBanner) ? 1 : (b + 1);
    //console.log(bannerPrev  + ' / ' + bannerNow + ' / ' + bannerNext);
    if (isTimerOn === true) {
        timerId = setTimeout(function() {bannerSlide(bannerNext);}, timerSpeed);
    }
} 
    
function setBannerSlide(selector, status, speed) {
    var offsetLeft = 0;
    var boxWidth = 
	$(selector).find('div.popup_img').innerWidth();
    var barWidth = 0;
    var minOffsetLeft = 0;
    var numBanner = $(selector).find('div.popup_img > ul > li').length;
    var bannerNow = 0;
    var bannerPrev = 0;
    var bannerNext = 0;
    var timerId = '';
    var isTimerOn = status;
    var timerSpeed = speed;

    if (isTimerOn === true) {
        $(selector).find('p.control a.play').addClass('on');
    } else {
        $(selector).find('p.control a.play').removeClass('on');
    }
    setBannerStatus();
    showBanner(1);
    
    $(selector).find('div.btn_box button.slide_prev').on('click', function() {
        showBanner(bannerPrev);
    });
    $(selector).find('div.btn_box button.slide_next').on('click', function() {
        showBanner(bannerNext);
    });
    $(selector).find('div.btn_box button.play').on('click', function() {
        if (isTimerOn === true) {
            clearTimeout(timerId);
            $(this).removeClass('on');
            isTimerOn = false;
        } else {
            timerId = setTimeout(function() {showBanner(bannerNext);}, timerSpeed);
            $(this).addClass('on');
            isTimerOn = true;
        }
    });
    $(selector).find('div.popup_img > ul > li > a').on('focus', function() {
        var index = $('div.popup_img > ul > li').index($(this).parent());
        showBanner(index + 1);
    });
    $(window).on('resize', function() {
        setBannerStatus();
    });


    function setBannerStatus() {
        boxWidth = $(selector).find('div.box').innerWidth();
        barWidth = 0;
        $(selector).find('div.popup_img > ul > li').each(function() {
            barWidth += $(this).outerWidth(true);
        });
        $(selector).find('div.popup_img > ul').css({'width': barWidth + 'px'});
        minOffsetLeft = boxWidth - barWidth;
        $(selector).find('div.popup_img > ul > li').each(function(i) {
            if (-$(this).position().left < minOffsetLeft) {
                numBanner = (i + 1);
                return false;
            }
        });
        if (bannerNow !== 0) showBanner(bannerNow);
    }    

    function showBanner(n) {
        clearTimeout(timerId);
        offsetLeft = -$(selector).find('div.popup_img > ul > li:eq(' + (n - 1) + ')').position().left;
        if (offsetLeft < minOffsetLeft) offsetLeft = minOffsetLeft;
        $(selector).find('div.popup_img > ul').css({'transition': 'left 0.3s', 'left': offsetLeft + 'px'});
		$('#main div.main_wrap div.mid_conent_area div.popup_zone ul.slick-dots > li').removeClass('on');
    	$('#main div.main_wrap div.mid_conent_area div.popup_zone ul.slick-dots > li:eq(' + (n - 1) + ')').addClass('on');
        bannerNow = n;
        bannerPrev = (n <= 1) ? numBanner : (n - 1);
        bannerNext = (n >= numBanner) ? 1 : (n + 1);
        //console.log(bannerPrev + ' / ' + bannerNow + ' / ' + bannerNext);
        if (isTimerOn === true) {
            timerId = setTimeout(function() {showBanner(bannerNext);}, timerSpeed);
        }
    }
}
	
function iconSlide(d) {
    if (iconNow === 0) {
        $('#main div.main_wrap div.m_servce ul').css({'transition': 'none','left': -((d - 1) * 100) + '%'}); 
    } else {
        $('#main div.main_wrap div.m_servce ul').css({'transition': 'left 0.5s','left': -((d - 1) * 100) + '%'}); 
        }
	$('#main div.main_communication_wrap div.movieslide_right > ul.slide_inner li.slick-slide dl').removeClass('on');
    $('#main div.main_communication_wrap div.movieslide_right > ul.slide_inner li.slick-slide dl:eq(' + (d - 1) + ')').addClass('on');
	$('#main div.main_communication_wrap div.movieslide_right div.btn_box ul.slick-dots > li > button').removeClass('on');
    $('#main div.main_communication_wrap div.movieslide_right div.btn_box ul.slick-dots > li > button:eq(' + (d - 1) + ')').addClass('on');
	
	
    iconNow = d;
    iconPrev = (d === 1) ? numIcon : (d - 1);
   	iconNext = (d === numIcon) ? 1 : (d + 1);
}        	
	
function communiCationSlide(a) {
    if (communiCationNow === 0) {
        $('#main div.main_communication_wrap div.slide_left > ul.slide_inner li dl.clearfix').css({'transition': 'none','left': -((a - 1) * 100) + '%'}); 
    } else {
        $('#main div.main_communication_wrap div.slide_left > ul.slide_inner li dl.clearfix').css({'transition': 'left 0.5s','left': -((a - 1) * 100) + '%'}); 
        }
	$('#main div.main_communication_wrap div.slide_left > ul.slide_inner li dl.clearfix').removeClass('on');
    $('#main div.main_communication_wrap div.slide_left > ul.slide_inner li dl.clearfix:eq(' + (a - 1) + ')').addClass('on');
	$('#main div.main_communication_wrap div.slide_left div.btn_box ul.slick-dots > li > button').removeClass('on');
    $('#main div.main_communication_wrap div.slide_left div.btn_box ul.slick-dots > li > button:eq(' + (a - 1) + ')').addClass('on');
	
	
    communiCationNow = a;
    communiCationPrev = (a === 1) ? numcommuniCation : (a - 1);
   	communiCationNext = (a === numcommuniCation) ? 1 : (a + 1);
}       
    
function movieSlide(c) {
    if (movieNow === 0) {
        $('#main div.main_communication_wrap div.movieslide_right > ul.slide_inner li.slick-slide dl').css({'transition': 'none','left': -((c - 1) * 100) + '%'}); 
    } else {
        $('#main div.main_communication_wrap div.movieslide_right > ul.slide_inner li.slick-slide dl').css({'transition': 'left 0.5s','left': -((c - 1) * 100) + '%'}); 
        }
	$('#main div.main_communication_wrap div.movieslide_right > ul.slide_inner li.slick-slide dl').removeClass('on');
    $('#main div.main_communication_wrap div.movieslide_right > ul.slide_inner li.slick-slide dl:eq(' + (c - 1) + ')').addClass('on');
	$('#main div.main_communication_wrap div.movieslide_right div.btn_box ul.slick-dots > li > button').removeClass('on');
    $('#main div.main_communication_wrap div.movieslide_right div.btn_box ul.slick-dots > li > button:eq(' + (c - 1) + ')').addClass('on');
	
	
    movieNow = c;
    moviePrev = (c === 1) ? numMovie : (c - 1);
   	movieNext = (c === numMovie) ? 1 : (c + 1);
}        
    
    
});









