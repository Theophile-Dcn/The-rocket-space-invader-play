const app = {
    gridSizeValue: 64,
    containerGrid: null,
    pixelSizeValue: 25,
    cellElem : null,
    selectedColor: 'plain',


    init: function () {
        this.containerGrid = document.createElement("div");
        this.containerGrid.setAttribute("id", "containerGrid");
        this.containerGrid.classList.add("containerGrid");

        // Appel de la fonction gridBase 
        this.gridBase(this.gridSizeValue);
        // Appel de la fonction containerColor
        this.Colorcontainer();
        
        this.setupForm();
        // Ajout de la grille 
        const invaderDiv = document.getElementById("invader");
        invaderDiv.insertAdjacentElement("afterend", this.containerGrid);
        this.gridSizeValue= "";
    
    },

    Colorcontainer: function () {
        const colorDiv = document.createElement("div");
        colorDiv.classList.add('colorDiv');
        const targetToInsert = document.querySelector('.container-page');
        targetToInsert.append(colorDiv);
        const colors = ['plain', 'empty', 'light', 'highlight'];
        
        for (let index = 0; index < colors.length; index++) {
        const chooseColor = document.createElement('button');
        chooseColor.classList.add('button-color');
        chooseColor.style.backgroundColor = colors[index];
        chooseColor.addEventListener("click", () => {
        console.log('Bouton de couleur cliqué:', colors[index]);
        this.handleClickColor(colors[index]);
        
    });
    colorDiv.appendChild(chooseColor);
}

    },

    gridBase: function (nombre) {
        for (let i = 0; i < nombre; i++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            cell.addEventListener("click", this.handleClick);
            this.containerGrid.appendChild(cell);
        }
    },

    setupForm: function () {
        // Création des éléments
        const inputGridSize = document.createElement("input");
        const labelGridSize = document.createElement("label");

        const inputPixelSize = document.createElement("input");
        const labelPixelSize = document.createElement("label");

        const btn = document.createElement("button");

        // Ajout d'id pour les cibler
        inputGridSize.setAttribute("id", "gridSize");
        inputGridSize.setAttribute("type", "text");
        inputGridSize.setAttribute("name", "gridSize");
        inputGridSize.setAttribute("placeholder", "Taille de la grille");
        labelGridSize.setAttribute("for", "gridSize");

        inputPixelSize.setAttribute("id", "pixelSize");
        inputPixelSize.setAttribute("type", "text");
        inputPixelSize.setAttribute("name", "pixelSize");
        inputPixelSize.setAttribute("placeholder", "Taille des pixels");
        labelPixelSize.setAttribute("for", "pixelSize");

        btn.setAttribute("id", "button");
        btn.textContent = "Valider";

        btn.addEventListener("click", this.getValue.bind(this));
        btn.addEventListener("click", this.handleButtonClick.bind(this));

        // Ajout à l'HTML
        const form = document.querySelector(".configuration");
        form.appendChild(inputGridSize);
        form.appendChild(inputPixelSize);
        inputGridSize.insertAdjacentElement("afterend", labelGridSize);
        form.appendChild(labelPixelSize);
        form.appendChild(btn);
    },

    getValue: function (event) {
        event.preventDefault();
        this.gridSizeValue = document.getElementById("gridSize").value;
        this.pixelSizeValue = document.getElementById("pixelSize").value;
        console.log("hello getvalue" + this.gridSizeValue);

        this.updateGrid();
    },
    
    updateGrid: function () {
        this.containerGrid.innerHTML = "";
        document.querySelector('.containerGrid').style.gridTemplateColumns = `repeat(${this.gridSizeValue}, 1fr)`;
        const cellSize = `${this.pixelSizeValue}px`;
        for (let i = 0; i < (this.gridSizeValue*this.gridSizeValue); i++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            cell.addEventListener("click", this.handleClick);
            cell.style.width = cellSize;
            cell.style.height = cellSize;
            this.containerGrid.appendChild(cell);
        } 
    },

    moveRocket: function () {
        const rocket = document.querySelector('.fusee');
    
        
        rocket.classList.add('move-rocket-animation');
    
        
        setTimeout(() => {
            rocket.classList.remove('move-rocket-animation');
        }, 2000);
    
        
        setTimeout(() => {
            rocket.style.transform = 'rotate(0deg)'; 
        }, 2200); 
    },
    
    handleClickColor: function (selectedColor) {
    
    this.selectedColor = selectedColor;
    console.log('this.selectedColor:', this.selectedColor); 
    },

    
    handleClick: function (event) {
        const cellElem = event.target;
        console.log(event.target);
        cellElem.className = "cell " + app.selectedColor;  
        console.log('Salut');
    },
    
    handleButtonClick: function () {
        console.log("Le bouton a été cliqué !");
        
        
        this.moveRocket(); 
    },
    
};

app.init()

