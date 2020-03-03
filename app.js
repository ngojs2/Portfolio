/*****************************************************************************
** Program name: Project
** Author: Jeffrey Ngo
** Date: 3/2/2020
** Description: Create an image carousel with automatic and manual functions
** 
** Source cited: Followed the resources to create the carousel from
** https://www.w3schools.com/w3css/w3css_slideshow.asp
**
** Images used were free stock photos from pexel.com. Also cited in alt""
when used. But could not find a way to cite for the images i used for the
background used in CSS
https://www.pexels.com/
*****************************************************************************/

var index = 0;
var time;
automatic();

/*Function for the automatic scroll */
function automatic(n){
    var i;
    var img;
    img = document.getElementsByClassName("image");
    for (i = 0; i < img.length; i++){
        img[i].style.display = "none";

    }
    index++;

    if (index > img.length){
        index = 1;
    }
    img[index - 1].style.display = "block";
    time = setTimeout(automatic, 5000);

}

/*Function for the manual scroll*/
function manual(n){
    clearTimeout(time);
    currIndex = index + n;
    automatic(currIndex);
    
}
