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
            posX = (winWt * .5) - (parseInt(shrinkWidth(winHt)) * .5);
            alert(posX);
            $("#mainFrame").css({
                "position": "absolute",
                "display": "block",
                "background": "white",
                "width": "fill-available",
                "height": "fill-available",
                "margin": 0,
                "width": shrinkWidth(winHt) + "px",
                "height": winHt + "px",
                "top": "0px"
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
function shrinkWidth(ht){
    return ((parseInt(ht) * 1280) / 800);
}
function shrinkHeight(wt){
    return ((parseInt(wt) * 800) / 1280);
}
