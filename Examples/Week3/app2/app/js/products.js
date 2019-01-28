function initializeProducts() {
    var data = getTestProducts();
    displayProducts(data.products);
}

function getTestProducts() {
    return JSON.parse(testProducts);
}

function displayProducts(products) {

    for(i = 0; i < products.length; i++) {

        console.log('name: ' + products[i].name);
        
        var name = products[i].name;
        var price = products[i].price;
        var available = products[i].available ? 'yes' : 'no';
        var markup = "<tr><td>" + name + "</td><td>$" + price + "</td><td>" + available + "</td></tr>";

        $("table tbody").append(markup);
    }
}

var testProducts = '{"products": [{"name": "television","price": 299.00,"available": true},{"name": "recliner","price": 199.00,"available": false}]}'