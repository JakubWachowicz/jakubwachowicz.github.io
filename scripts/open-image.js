var images = document.getElementsByTagName("img");

let isOpen = false;
for (let i = 0;i<images.length;i++) {
   images[i].addEventListener("click",()=>{openImage(images[i])})
}

function openImage(image){
    
}