const http = new XMLHttpRequest(); // the object http allows for my website to communicate with a server 
http.open('GET', 'products.json', true); // In this line, the expression is simply saying that it's GET-ting a request from my json file while confirming (the boolean value true) that yes it will continue running even if other things are running in the background
http.send(); //this line is sending a request to the server
http.onload = function () { //whenever the lines above receive the reponse, this evenhandler Onload checks if the request is completed and if it is successul. Readystate checks for completion, while status confirms if it's successful
    if (this.readyState == 4 && this.status == 200) {
        let products = JSON.parse(this.responseText); //this line parses/converts the JSON response into a JavaScript Object this.responseText which allows the code below to work with that response and insert within the HTML a div for every object in my JSON file
        let output = "";
        for (let item of products) { //this for loop is simply saying, "for every item, this html code will generate to display the product information"
            output += `
            <div class="item">
                <img src="${item.image}" alt="${item.cameraName}">
                <p id="cameraName">${item.cameraName}</p>
                <p id="description">${item.description}</p>
                <p id="description2">${item.description2}</p>
                <p id="description3">${item.description3}</p>
                <p id="price">$ ${item.price}</p>
            </div>
            `;
        }
        document.getElementById("products").innerHTML = output;
    }
}