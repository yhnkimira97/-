window.onload = function () {
    let oToolbar = document.querySelector(".toolbar");
    let oNav = document.querySelector(".nav");
    let oMenu = document.querySelector("#myMenu");
    let oMenuUp = document.querySelector(".menu-up");
    let oMenuDown = document.querySelector(".menu-down");
    let oTips = document.querySelector(".tips");
    new fullpage(`#fullpage`,{
        sectionsColor:[`#f00`,`#0f0`,`#00f`,`#ff00`,`#0ff`,`#f0f`,`#000`],
        verticalCentered:false,
        anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fifthPage', 'sixthPage'],
        menu: '#myMenu',
        onLeave:function(origin,destination,direction){
            if(destination.isFirst){
                oToolbar.style.display = "block";
                oNav.style.top = "42px";
                oMenu.style.display = "none";
            }else{
                oToolbar.style.display = "none";
                oNav.style.top = "0px";
                oMenu.style.display = "block";
            }
            if(destination.isLast){
                oTips.style.display = "none";
            }else{
                oTips.style.display = "block";
            }
        }
    })
    oMenuUp.onclick = function () {
        fullpage_api.moveSectionUp();
    }
    oMenuDown.onclick = function () {
        fullpage_api.moveSectionDown();
    }
    initSection4Animation();
}
    function initSection4Animation() {
        let oLis = document.querySelectorAll(".section-four>ul>li");
        let oImages = document.querySelectorAll(".section-four>ul>li>img");
        let oH3 = document.querySelectorAll(".section-four>ul>li>h3")
        for(let i = 0; i< oLis.length; i++){
            let item = oLis[i];
            item.onmouseenter = function () {
                oLis[0].style.width = "20%";
                oLis[1].style.width = "20%";
                oLis[2].style.width = "20%";
                oLis[i].style.width = "60%";
                oImages[i].style.opacity = "1";
                oH3[i].style.opacity = "0";
                if (i === 0 ){
                    oImages[0].style.left = "0";
                }else if(i === 2){
                    oImages[2].style.right = "0";
                }
            }
            item.onmouseleave = function () {
                oLis[0].style.width = "33%";
                oLis[1].style.width = "34%";
                oLis[2].style.width = "33%";
                oImages[i].style.opacity = "0.6";
                oH3[i].style.opacity = "1";
                if (i === 0 ){
                    oImages[0].style.left = "-180px";
                }else if(i === 2){
                    oImages[2].style.right = "-180px";
                }
            }
        }
    }