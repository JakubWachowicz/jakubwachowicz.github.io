import { Page } from "./dom-utils.js";
const mainWrapper = document.querySelector('.main-wrapper');
const fileInput = document.getElementById('file-input')

export let numberOfPages = 0;

export var pageList =[];

fileInput.addEventListener('change', function() {
    // Check if a file has been selected
    if (fileInput.files.length > 0) {
      // Get the selected file
      const selectedFile = fileInput.files[0];
      // Create a URL for the selected image
      const imageUrl = URL.createObjectURL(selectedFile);
      let page =new Page(imageUrl);
      page.render();
      pageList.push(page);
      numberOfPages++;
      updateMainWrapper();

    } else {
      // Clear the image if no file is selected
      selectedImage.src = '';
    }
  });


  var updateMainWrapper = function(){
    if(numberOfPages>0){
        mainWrapper.classList.add('main-wrapper-more');
    }
    else{
        mainWrapper.classList.remove('main-wrapper-more')
    }
  }
  
function createPopUpMenu(options) {
  // Create the overlay element to cover the entire screen
  const overlay = document.createElement('div');
  overlay.classList.add('overlay');
  
  // Create the pop-up menu element
  const popup = document.createElement('div');
  popup.classList.add('popup');

  // Create and add content to the pop-up menu
  const content = document.createElement('div');
  content.classList.add('popup-content');
  content.textContent = options;

  // Create a close button for the pop-up menu
  const closeButton = document.createElement('button');
  closeButton.classList.add('close-button');
  closeButton.textContent = 'Close';

  // Function to close the pop-up menu
  function closePopUpMenu() {
    document.body.removeChild(overlay);
  }

  // Add an event listener to the close button
  closeButton.addEventListener('click', closePopUpMenu);

  // Add the content and close button to the pop-up menu
  popup.appendChild(content);
  popup.appendChild(closeButton);

  // Add the pop-up menu to the overlay
  overlay.appendChild(popup);

  // Add the overlay to the document body
  document.body.appendChild(overlay);
}

var generate = function(){
  const container = document.createElement('div')
  const gazetka = document.createElement('div')
  gazetka.classList.add("gazetka")

  let pageCounter = 1;
  pageList.forEach((page)=>{
    const strona = document.createElement('figure');
    strona.setAttribute('id',"strona" + pageCounter)
    pageCounter++;
    strona.classList.add('strona');
    page.mapList.forEach((map)=>{
      console.log("hi I am here!");
     
      const element = document.createElement('a');
      element.classList.add('element')
      console.log("hi I am not here");
      let data = map.getData()

      element.style.left = `calc(100% * (${parseInt(data.left,10)} / var(--width1)))`;
      element.style.top = `calc(100% * (${parseInt(data.top,10)} / var(--height1)))`;
      element.style.width = `calc(100% * (${parseInt(data.width,10)} / var(--width1)))`;
      element.style.height = `calc(100% * (${parseInt(data.height,10)} / var(--height1)))`;
      element.href = data.href;
      strona.appendChild(element);
    })

    const image = document.createElement('img');
    image.src = page.imageUrl.value;
    strona.appendChild(image);

    gazetka.appendChild(strona);
  })

  container.appendChild(gazetka)
  console.log(container.innerHTML)
 return container.innerHTML

}

// Example usage:
const popupOptions = {
  content: 'This is the content of the pop-up menu.',
};

const generateTemplateButton = document.getElementById('showTemplate');
generateTemplateButton.addEventListener('click',()=>{
  createPopUpMenu(generate());
})

generate();