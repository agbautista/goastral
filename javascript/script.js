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
            tempHt = (parseInt($("#mainFrame").css("height")) * .8475);
            $("#p1f1").css({
                "margin": 0,
                "width": shrinkWidth(tempHt, 678, 431) + "px",
                "height": tempHt + "px",
                "position": "relative",
                "left": (parseInt($("#mainFrame").css("width")) * .0195) + "px",
                "top": tempHt * .0125
            });
            $("#p1f2").css({
                "margin": 0,
                "width": shrinkWidth(tempHt, 678, 485) + "px",
                "height": tempHt + "px",
                "position": "relative",
                "top": tempHt * .0125
            });
            $("#p1f2").css("left", (parseInt($("#p1f1").css("width")) * -.1462) + parseInt($("#p1f1").css("left")));
            $("#p1f3").css({
                "margin": 0,
                "width": shrinkWidth(tempHt, 678, 445) + "px",
                "height": tempHt + "px",
                "position": "relative",
                "left": (parseInt($("#p1f2").css("width")) * -.1956) - 10 ,
                "top": tempHt * .0125
            });
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