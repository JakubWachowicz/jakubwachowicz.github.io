import {openImageFunction} from "./open-image.js";

class Project{
    constructor(imageUrl,description){
        this.imageUrl = imageUrl;
        this.description = description;
    }
}

var programmingProjects = [
    new Project("assets/bloom!.png","description"),
    new Project("assets/challenger.png","description"),
    new Project("assets/reactivities.png","description"),
    new Project("assets/LSB+Key.png","description"),
    new Project("assets/mapmaker.png","description"),
];

openImageFunction(); 