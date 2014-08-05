function getScreenSize(){
    var winHt, winWt,posX, posY;
    winHt = parseInt($(window).innerHeight());
    winWt = parseInt($(window).innerWidth());

    if (winWt > 1280){
        if (winHt > 800){
            //Therefore Kasya yung w and h ng go astral. Igigitna na lng.
            posX = (winWt * .5) - (640);
            posY = (winHt * .5) - 400;
            $("#mainFrame").css({
                "position" : "absolute",
                "left" : posX + "px",
                "top" : posY + "px",
                "width" : "1280px",
                "height" : "800px"
            });
        }
        else{
            //therefore kasya yung haba pero hinde yung tnagkad. Shrink this shit.
            posX = (winWt * .5) - (parseInt(shrinkWidth(winHt,800, 1280)) * .5);
            $("#mainFrame").css({
                "position": "absolute",
                "display": "block",
                "background": "black",
                "margin": 0,
                "padding" : 0,
                "width": shrinkWidth(winHt, 800, 1280) + "px",
                "height": winHt + "px",
                "top": "0px",
                "overflow" : "hidden"
            });
            $("#mainFrame").css("left", posX);
        }
    }
    else{
        if (winHt > 800) {
            //Possible ba na magkasya yung tangkad pero hinde yung haba? anyways shrink this shit.
        }
        else {
            //therefore maliit yung monitor. Shrink this shit. adopt the height of the monitor. Adjust the width of frame.
        }
    }
}
function shrinkWidth(ht,ht2,wt2){
    return ((parseInt(ht) * wt2) / ht2);
}
function shrinkHeight(wt,ht2,wt2){
    return ((parseInt(wt) * ht2) / wt2);
}
function showIntro(){
    
}
function layoutP1(){
    //adjust the sizes first
    var tempHt, winHt, winWt, tempWt, sp1, sp2;
    winHt = parseInt($(window).innerHeight());
    winWt = parseInt($(window).innerWidth());
        if (winWt > 1280){
        if (winHt > 800){
            //Therefore Kasya yung w and h ng go astral. Igigitna na lng.
            //set the sizes of elements to as it is
            //change nothing. 
        }
        else{
            //therefore kasya yung haba pero hinde yung tnagkad. Shrink this shit.
            //alter the heights of the elements with respect to the new screen heights
            tempHt = (parseInt($("#mainFrame").css("height")) * .83);
            getRule("1", (tempHt * .0363) - ((parseInt($("#mainFrame").css("height")) * .0588) *3) , "slideIn");
            $("#tbox1").css({
                height: (parseInt($("#mainFrame").css("height")) * .0588) 
            });
            $("#tbox2").css({
                height: (parseInt($("#mainFrame").css("height")) * .0588) 
            });
            $("#tbox3").css({
                height: (parseInt($("#mainFrame").css("height")) * .0588) 
            });
            $("#p1b1").css({
                "width": (parseInt($("#mainFrame").css("width")) * .1711),
                "height": (parseInt($("#mainFrame").css("height")) * .0588),
                "top": (parseInt($("#mainFrame").css("height")) * .5563),
                "left": (parseInt($("#mainFrame").css("width")) * .188)
            });
            $("#p1b2").css({
                "width": (parseInt($("#mainFrame").css("width")) * .1609),
                "height": (parseInt($("#mainFrame").css("height")) * .0588),
                "top": (parseInt($("#mainFrame").css("height")) * .025),
                "left": (parseInt($("#mainFrame").css("width")) * .3620)
            });
            $("#p1b3").css({
                "width": (parseInt($("#mainFrame").css("width")) * .225),
                "height": (parseInt($("#mainFrame").css("height")) * .0588),
                "top": (parseInt($("#mainFrame").css("height")) * .5438),
                "left": (parseInt($("#mainFrame").css("width")) * .6492)
            });
            $("#p1f1").css({
                "margin": 0,
                "width": shrinkWidth(tempHt, 664, 414) + "px",
                "height": tempHt + "px",
                "position": "relative",
                "left": (parseInt($("#mainFrame").css("width")) * .0266) + "px",
                "top": (tempHt * .0363) + winHt
            });
            $("#p1f2").css({
                "margin": 0,
                "width": shrinkWidth(tempHt, 664, 468) + "px",
                "height": tempHt + "px",
                "position": "relative",
                "top": (tempHt * .0363) - winHt
            });
            $("#p1f2").css("left", (parseInt($("#mainFrame").css("width")) * -.0367) + parseInt($("#p1f1").css("left")));
            $("#p1f3").css({
                "margin": 0,
                "width": shrinkWidth(tempHt, 664, 432) + "px",
                "height": tempHt + "px",
                "position": "relative",
                "left": (parseInt($("#mainFrame").css("width")) * -.0406) + parseInt($("#p1f2").css("left")) ,
                "top": (tempHt * .0363) + winHt
            });
            $("#p1b1").delay(4400).fadeIn(700);
            assignFx("#p1f1", "slideIn", "1s", (tempHt * .0363) - ((parseInt($("#mainFrame").css("height")) * .0588) *3));
            $("#p1b2").delay(8000).fadeIn(700);
            assignFx("#p1f2", "slideIn", "5s", (tempHt * .0363) - ((parseInt($("#mainFrame").css("height")) * .0588) *3));
            $("#p1b3").delay(11600).fadeIn(700);
            assignFx("#p1f3", "slideIn", "8s", (tempHt * .0363) - ((parseInt($("#mainFrame").css("height")) * .0588) *3));
        }
    }
    else{
        if (winHt > 800) {
            //Possible ba na magkasya yung tangkad pero hinde yung haba? anyways shrink this shit.
        }
        else {
            //therefore maliit yung monitor. Shrink this shit. adopt the height of the monitor. Adjust the width of frame.
        }
    }
}
function assignFx(objName,fxName,delay, x){
    $(objName).css({
        "-webkit-animation-duration": "4s",
        "-webkit-animation-delay": delay,
        "-webkit-animation-iteration-count": "1",
        "-webkit-animation-name": fxName,
        "animation-duration": "4s",
        "animation-delay": delay,
        "animation-iteration-count": "1",
        "animation-name": fxName,
        "-moz-animation-duration": "4s",
        "-moz-animation-iteration-count": "1",
        "-moz-animation-delay": delay,
        "-moz-mation-name": fxName,
        "-ms-transform": "scale(1,1)",
        "-webkit-transform": "scale(1,1)",
        "transform": "scale(1,1)"
    });
        $(objName).one('animationend webkitAnimationEnd MSAnimationEnd oAnimationEnd', function () {
        $(objName).css("opacity", 1);
        $(objName).css("top", x );
    });
}
function getRule(op,y, objName) //sets the keyframe rules
 {
    var rule;
    var ss = document.styleSheets;
    for (var i = 0; i < ss.length; ++i) {
        try{
        for (var temp = 0; temp < ss[i].cssRules.length; ++temp) {
            rule = ss[i].cssRules[temp];
            if (rule.name == objName && rule.type == window.CSSRule.KEYFRAMES_RULE) {
                cssRule = rule;
                try{cssRule.appendRule("100%{opacity: " + op + "; top: " + y + "px;}");}
                catch(err){
                    cssRule.insertRule("to{opacity: " + op + "; top: " + y + "px;}");}
            }
        }
        }
        catch(err){
            alert("bitch may error ka!");
        }
    }
}