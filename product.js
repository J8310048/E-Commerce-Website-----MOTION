const http = new XMLHttpRequest();
http.open('GET', 'products.json', true);
http.send();
http.onload = function () {
    if (this.readyState == 4 && this.status == 200) {
        let products = JSON.parse(this.responseText);
        let output = "";
        for (let item of products) {
            output += `
            <div>
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
