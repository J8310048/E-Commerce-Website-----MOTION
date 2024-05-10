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
                <p>${item.cameraName}</p>
                <p>${item.description}</p>
                <p>$ ${item.price}</p>
            </div>
            `;
        }
        document.getElementById("products").innerHTML = output;
    }
}
