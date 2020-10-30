jQuery(document).ready(function(){

    var scripts = document.getElementsByTagName("script");

    var jsFolder = "";

    for (var i= 0; i< scripts.length; i++)

    {

        if( scripts[i].src && scripts[i].src.match(/initslider-1\.js/i))

            jsFolder = scripts[i].src.substr(0, scripts[i].src.lastIndexOf("/") + 1);

    }

    jQuery("#amazingslider-1").amazingslider({

        sliderid:1,

        jsfolder:jsFolder,

        width:1300,

        height:600,

        skinsfoldername:"",

        loadimageondemand:false,

        videohidecontrols:false,

        playmutedandinlinewhenautoplay:false,

        donotresize:false,

        enabletouchswipe:true,

        fullscreen:true,

        autoplayvideo:false,

        addmargin:false,

        transitiononfirstslide:false,

        forceflash:false,

        isresponsive:true,

        forceflashonie11:true,

        forceflashonie10:true,

        pauseonmouseover:false,

        playvideoonclickthumb:true,

        slideinterval:4000,

        fullwidth:false,

        randomplay:false,

        scalemode:"fill",

        loop:0,

        autoplay:true,

        navplayvideoimage:"play-32-32-0.png",

        navpreviewheight:60,

        timerheight:2,

        descriptioncssresponsive:"font-size:12px;",

        shownumbering:false,

        navthumbresponsivemode:"samesize",

        skin:"Showcase",

        textautohide:false,

        lightboxshowtwitter:true,

        addgooglefonts:false,

        navshowplaypause:true,

        initsocial:false,

        navshowplayvideo:false,

        navshowplaypausestandalonemarginx:8,

        navshowplaypausestandalonemarginy:8,

        navbuttonradius:0,

        navthumbcolumn:5,

        navthumbnavigationarrowimageheight:32,

        navradius:0,

        navthumbsmallcolumn:3,

        lightboxshownavigation:false,

        showshadow:false,

        navfeaturedarrowimagewidth:16,

        lightboxshowsocial:false,

        navpreviewwidth:120,

        googlefonts:"",

        navborderhighlightcolor:"",

        navcolor:"#999999",

        lightboxdescriptionbottomcss:"{color:#333; font-size:12px; font-family:Arial,Helvetica,sans-serif; overflow:hidden; text-align:left; margin:4px 0px 0px; padding: 0px;}",

        lightboxthumbwidth:80,

        navthumbnavigationarrowimagewidth:32,

        navthumbtitlehovercss:"text-decoration:underline;",

        navthumbmediumheight:64,

        texteffectresponsivesize:600,

        arrowwidth:48,

        texteffecteasing:"easeOutCubic",

        texteffect:"slide",

        lightboxthumbheight:60,

        navspacing:6,

        navarrowimage:"navarrows-28-28-0.png",

        ribbonimage:"ribbon_topleft-0.png",

        navwidth:16,

        navheight:16,

        arrowimage:"arrows-48-48-3.png",

        timeropacity:0.6,

        titlecssresponsive:"font-size:12px;",

        navthumbnavigationarrowimage:"carouselarrows-32-32-0.png",

        navshowplaypausestandalone:false,

        texteffect1:"slide",

        navpreviewbordercolor:"#ffffff",

        texteffect2:"slide",

        customcss:"",

        ribbonposition:"topleft",

        navthumbdescriptioncss:"display:block;position:relative;padding:2px 4px;text-align:left;font:normal 12px Arial,Helvetica,sans-serif;color:#333;",

        lightboxtitlebottomcss:"{color:#333; font-size:14px; font-family:Armata,sans-serif,Arial; overflow:hidden; text-align:left;}",

        arrowstyle:"mouseover",

        navthumbmediumsize:800,

        navthumbtitleheight:20,

        navpreviewarrowheight:8,

        textpositionmargintop:24,

        navshowbuttons:false,

        buttoncssresponsive:"",

        texteffectdelay:500,

        navswitchonmouseover:false,

        playvideoimage:"playvideo-64-64-0.png",

        arrowtop:50,

        textstyle:"static",

        playvideoimageheight:64,

        navfonthighlightcolor:"#666666",

        showbackgroundimage:false,

        showpinterest:true,

        navpreviewborder:4,

        navshowplaypausestandaloneheight:28,

        navdirection:"horizontal",

        navbuttonshowbgimage:true,

        navbuttonbgimage:"navbuttonbgimage-28-28-0.png",

        textbgcss:"display:none;",

        playvideoimagewidth:64,

        buttoncss:"display:block; position:relative; margin-top:8px;",

        navborder:4,

        navshowpreviewontouch:false,

        bottomshadowimagewidth:96,

        showtimer:true,

        navmultirows:false,

        navshowpreview:false,

        navmarginy:12,

        navmarginx:12,

        navfeaturedarrowimage:"featuredarrow-16-8-0.png",

        texteffectslidedirection1:"right",

        showribbon:false,

        navstyle:"bullets",

        textpositionmarginleft:24,

        descriptioncss:"display:block; position:relative; font:14px \"Lucida Sans Unicode\",\"Lucida Grande\",sans-serif,Arial; color:#333; margin-top:8px;",

        navplaypauseimage:"navplaypause-28-28-0.png",

        backgroundimagetop:-10,

        timercolor:"#ffffff",

        numberingformat:"%NUM/%TOTAL ",

        navthumbmediumwidth:64,

        navfontsize:12,

        navhighlightcolor:"#333333",

        texteffectdelay1:1000,

        navimage:"bullet-16-16-3.png",

        texteffectdelay2:1500,

        texteffectduration1:600,

        navshowplaypausestandaloneautohide:false,

        texteffectduration2:600,

        navbuttoncolor:"#999999",

        navshowarrow:true,

        texteffectslidedirection:"left",

        navshowfeaturedarrow:false,

        lightboxbarheight:64,

        showfacebook:true,

        titlecss:"display:block; position:relative; font:bold 16px \"Lucida Sans Unicode\",\"Lucida Grande\",sans-serif,Arial; color:#333;",

        ribbonimagey:0,

        ribbonimagex:0,

        texteffectresponsive:true,

        navthumbsmallheight:48,

        texteffectslidedistance1:120,

        texteffectslidedistance2:120,

        navrowspacing:8,

        navshowplaypausestandaloneposition:"bottomright",

        lightboxshowpinterest:true,

        lightboxthumbbottommargin:8,

        lightboxthumbtopmargin:12,

        arrowhideonmouseleave:1000,

        navshowplaypausestandalonewidth:28,

        showsocial:false,

        navthumbresponsive:false,

        navfeaturedarrowimageheight:8,

        navopacity:0.8,

        textpositionmarginright:24,

        backgroundimagewidth:120,

        bordercolor:"#ffffff",

        border:0,

        navthumbtitlewidth:120,

        navpreviewposition:"top",

        texteffectseparate:false,

        arrowheight:48,

        arrowmargin:8,

        texteffectduration:600,

        bottomshadowimage:"bottomshadow-110-95-0.png",

        lightboxshowfacebook:true,

        lightboxshowdescription:false,

        timerposition:"bottom",

        navfontcolor:"#333333",

        navthumbnavigationstyle:"arrow",

        borderradius:0,

        navbuttonhighlightcolor:"#333333",

        textpositionstatic:"bottomoutside",

        texteffecteasing2:"easeOutCubic",

        navthumbstyle:"imageonly",

        texteffecteasing1:"easeOutCubic",

        textcss:"display:block; padding:12px 0px; text-align:center; margin-top:4px;",

        navthumbsmallwidth:48,

        navbordercolor:"#ffffff",

        navthumbmediumcolumn:4,

        navpreviewarrowimage:"previewarrow-16-8-0.png",

        showbottomshadow:true,

        texteffectslidedistance:30,

        shadowcolor:"#aaaaaa",

        showtwitter:true,

        textpositionmarginstatic:0,

        backgroundimage:"",

        navposition:"bottomright",

        navthumbsmallsize:480,

        navpreviewarrowwidth:16,

        textformat:"Underneath center",

        texteffectslidedirection2:"right",

        bottomshadowimagetop:95,

        textpositiondynamic:"bottomleft",

        shadowsize:5,

        navthumbtitlecss:"display:block;position:relative;padding:2px 4px;text-align:left;font:bold 14px Arial,Helvetica,sans-serif;color:#333;",

        textpositionmarginbottom:24,

        lightboxshowtitle:true,

        socialmode:"mouseover",

        tiles: {

            duration:1500,

            checked:true

        },

        slice: {

            checked:true,

            effectdirection:0,

            effects:"up,down,updown",

            slicecount:10,

            duration:1500,

            easing:"easeOutCubic"

        },

        blocks: {

            columncount:5,

            checked:true,

            rowcount:5,

            effects:"topleft,bottomright,top,bottom,random",

            duration:1500,

            easing:"easeOutCubic"

        },

        flip: {

            duration:1500,

            checked:true

        },

        cssslide: {

            duration:1500,

            easing:"ease",

            checked:true,

            effectdirection:0

        },

        slide: {

            duration:1500,

            easing:"easeOutCubic",

            checked:true,

            effectdirection:0

        },

        crossfade: {

            duration:1500,

            easing:"easeOutCubic",

            checked:true

        },

        fade: {

            duration:1500,

            easing:"easeOutCubic",

            checked:true

        },

        shuffle: {

            duration:1500,

            easing:"easeOutCubic",

            columncount:5,

            checked:true,

            rowcount:5

        },

        flipwithzoom: {

            duration:1500,

            checked:true

        },

        blinds: {

            duration:1500,

            easing:"easeOutCubic",

            checked:true,

            effectdirection:0,

            slicecount:3,

        },

        transition:"tiles,slice,blocks,flip,cssslide,slide,crossfade,fade,shuffle,flipwithzoom,blinds",

        scalemode:"fill",

        isfullscreen:true



        



    });

});
