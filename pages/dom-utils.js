import { pageList } from "./app.js";
import { DraggableMap } from "./map.js";

const content = document.getElementById('pages-container');
const uploadButton = document.getElementById('upload-button');
export class Page {
  constructor(imageUrl) {
    this.mapList = [];
    this.contentDiv = document.createElement("div");
    this.contentDiv.classList.add("content");

    this.optionsContainer = document.createElement('div');
    this.optionsContainer.classList.add("column");

    this.imageContainer = document.createElement('div');
    this.imageContainer.classList.add('image-content');

    this.imageUrl = document.createElement('input');
    this.imageUrl.setAttribute("type", "text");

    this.addMapButton = document.createElement('button');
    this.addMapButton.textContent = "Add new Map";

    this.deleteButton = document.createElement('button');
    this.deleteButton.textContent = "Delete Page";

    this.deleteButton.addEventListener('click', this.deletePage.bind(this));

    this.addMapButton.addEventListener('click', () => {
      this.createPageOptions(this.selectedImage, this.imageContainer, this.deleteMap.bind(this));
    });
    
    this.selectedImage = document.createElement('img');
    this.selectedImage.src = imageUrl;
    this.contentDiv.style.marginBottom = "50px";
    this.label = document.createElement('p');
    this.label.style.color = "white";
    this.label.style.fontWeight ="bold";
    this.label.style.fontSize = "18px"
    this.label.innerHTML = "Image Url";
    this.optionsContainer.appendChild(this.label);
    this.optionsContainer.appendChild(this.imageUrl);
    this.optionsContainer.appendChild(this.addMapButton);
    this.optionsContainer.appendChild(this.deleteButton);
    this.imageContainer.appendChild(this.selectedImage);

    this.contentDiv.appendChild(this.optionsContainer);
    this.contentDiv.appendChild(this.imageContainer);
  }
  deleteMap(map) {
    const mapIndex = this.mapList.indexOf(map);
    console.log(mapIndex)
    if (mapIndex !== -1) {
      // Remove the map from the mapList array
      this.mapList.splice(mapIndex, 1);
    }
  }
  

  createPageOptions(image, container, deleteMap) {
    let map = new DraggableMap(image, container, deleteMap);
    this.mapList.push(map);
  }

  createTemplate() {
    this.mapList.forEach(
        (map)=>{
            console.log(map);
        }
    )
  }


  deletePage() {
    while (this.contentDiv.firstChild) {
      this.contentDiv.removeChild(this.contentDiv.firstChild);
    }

    const pageIndex = pageList.indexOf(this);
    console.log(pageIndex)
    if (pageIndex !== -1) {
      // Remove the map from the mapList array
      pageList.splice(pageIndex, 1);
    }
    content.removeChild(this.contentDiv);
  }

  render() {
    content.appendChild(this.contentDiv);
  }
}







  