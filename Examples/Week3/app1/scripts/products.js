function getTestProducts() {
    return JSON.parse(testProducts);
}

function displayProducts() {
    var data = getTestProducts();
    for(i = 0; i < data.products.length; i++) {
        console.log('name: ' + data.products[i].name);
    }
}

var testProducts = `{
    "products": [
        {
            "name": "television",
            "price": 299.00,
            "available": true
        },
        {
            "name": "recliner",
            "price": 199.00,
            "available": false
        }
    ]
}`