var slideshowimg = document.getElementsByClassName("img");
var counter = 1

console.log(slideshowimg)

for (i = 0; i < slideshowimg.length; i++){
    console.log(i)
    slideshowimg[i].classList.remove("hidden");
    console.log("remove Hidden")
    slideshowimg[i].classList.add("hidden");
    console.log("add Hidden")
    
}




function foward() {

}