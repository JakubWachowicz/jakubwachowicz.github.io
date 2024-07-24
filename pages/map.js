var mapWidth = 50;
var mapHeight = 50;

export class DraggableMap {
    constructor(image, container,deleteFunction) {
        console.log("Draggable map created");
        this.container = container;
        this.map = document.createElement("div");
        this.map.classList.add("map");

        this.map.style.height = mapHeight + "px";
        this.map.style.width = mapWidth + "px";

        this.resizer = document.createElement("div");
        this.resizer.classList.add("resizer");

        this.deleteFunction = deleteFunction
        this.deleteMapButton = document.createElement("button")
        this.deleteMapButton.classList.add("delete-map");
        this.deleteMapButton.textContent = "Delete"
        
        this.map.appendChild(this.resizer);

        this.input = document.createElement("INPUT");
        this.input.setAttribute("type", "text");

        // Set the container's width and height to match the image dimensions
        container.style.width = image.width + 'px';
        container.style.height = image.height + 'px';

        // Update the maximum draggable boundaries for the map
        const maxX = image.width - this.map.offsetWidth;
        const maxY = image.height - this.map.offsetHeight;

        let isDragging = false;
        this.isResizing = false;
        this.offsetX = 0;
        this.offsetY = 0;

        this.resizer.addEventListener('mousedown', (e) => {
            this.isResizing = true;
            this.map.style.cursor = 'nw-resize';
            // Calculate the initial mouse position relative to the resizer
            this.offsetX = e.clientX - this.resizer.getBoundingClientRect().left;
            this.offsetY = e.clientY - this.resizer.getBoundingClientRect().top;
        });
        this.deleteMapButton.addEventListener('mousedown',(e)=>{
            this.deletePage();
        })
        document.addEventListener('mousemove', (e) => {
            if (this.isResizing) {
                console.log("Am resizing!");
                const newWidth = e.clientX - this.map.getBoundingClientRect().left - this.offsetX;
                const newHeight = e.clientY - this.map.getBoundingClientRect().top - this.offsetY;

                // Ensure minimum width and height
                if (newWidth > 10 && newHeight > 10) {
                    console.log("Am 11 resizing!");
                    this.map.style.width = newWidth + 'px';
                    this.map.style.height = newHeight + 'px';
                }
            }
        });

        document.addEventListener("mouseup", () => {
            if (!this.isResizing) return;
            mapHeight = parseInt(this.map.style.height, 10);
            mapWidth = parseInt(this.map.style.width, 10);

            this.isResizing = false;
            this.map.style.cursor = 'grab';
        });

        this.map.addEventListener('mousedown', (e) => {
            isDragging = true;
            this.map.style.transition = 'none'; // Disable transition during dragging
        });

        document.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            if (this.isResizing) return;

            // Calculate new map position within the container
            const mouseX = e.clientX - image.getBoundingClientRect().left;
            const mouseY = e.clientY - image.getBoundingClientRect().top;

            // Ensure the map stays within the container
            const x = Math.min(Math.max(mouseX, 0), maxX);
            const y = Math.min(Math.max(mouseY, 0), maxY);

            this.map.style.left = x + 'px';
            this.map.style.top = y + 'px';
        });

        document.addEventListener('mouseup', () => {
            isDragging = false;
            this.map.style.transition = 'transform 0.2s'; // Re-enable transition
        });

        this.map.appendChild(this.input);
        this.map.appendChild(this.deleteMapButton)
        container.appendChild(this.map);
    }

    getData() {
        const width = this.map.style.width;
        const height = this.map.style.height;
        const left = this.map.style.left;
        const top = this.map.style.top;
        const href = this.input.value;

        return new MyMapData(width, height, left, top, href);
    }

    deletePage(){
        while(this.map.firstChild){
            this.map.removeChild(this.map.firstChild);
        }   
        this.container.removeChild(this.map)
        this.deleteFunction(this);   
    }
}

export class MyMapData {
    constructor(width, height, left, top, href) {
        this.width = width;
        this.height = height;
        this.left = left;
        this.top = top;
        this.href = href;
    }
}
