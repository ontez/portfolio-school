var chevron = document.getElementById("chevron-icon");

var currentPage = 1

var pages = [
    document.getElementById("first-page"),
    document.getElementById("second-page"),
    document.getElementById("third-page"),
    document.getElementById("fourth-page")
]

function getY(el) {
    var position = el.getBoundingClientRect();
    var scrollPos = window.pageYOffset || document.documentElement.scrollTop

    return position.top + scrollPos
}

function closestPage(){
    var currentY = window.pageYOffset || document.documentElement.scrollTop

    var firstPageY = getY(pages[0])
    var secondPageY = getY(pages[1])
    var thirdPageY = getY(pages[2])
    var fourthPageY = getY(pages[3])

    console.log("First Page: " + firstPageY)
    console.log("Second Page: " + secondPageY)
    console.log("Third Page: " + thirdPageY)
    console.log("Fourth Page: " + fourthPageY)
    console.log("Current Y: " + currentY)

    if(currentY < secondPageY)
        return 1;
    else if(currentY < thirdPageY)
        return 2;
    else if(currentY < fourthPageY)
        return 3;
    else
        return 0;
}



chevron.addEventListener('click', function onClick() {
    pages[closestPage()].scrollIntoView({behavior:"smooth"})
    // console.log(window.pageYOffset || document.documentElement.scrollTop)
    // console.log(pages[1].getBoundingClientRect().y)
})




