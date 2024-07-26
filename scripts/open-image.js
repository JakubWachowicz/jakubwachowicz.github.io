export const openImageFunction = ()=>{
   var images = document.getElementsByTagName("img");
   var main = document.getElementsByTagName("main")[0];
   let isOpen = false;
   for (let i = 0;i<images.length;i++) {
      images[i].addEventListener("click",()=>{openImage(images[i])})
   }
   
   const openedImageWrapper = document.createElement("div");
   const closeImage = document.createElement("button");
   
   openedImageWrapper.classList.add("opened-image-container");
   
   const openedImage = document.createElement("img");
   openedImageWrapper.appendChild(openedImage)
   
   openedImageWrapper.addEventListener("click",close)
   function close(){
      main.removeChild(openedImageWrapper);
   }
   
   function openImage(image){
      openedImage.src = image.src;
      openedImage.classList.add("opened-image");
      main.appendChild(openedImageWrapper);
   }
}
