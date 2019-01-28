function getTestProducts() {
    return JSON.parse(testProducts);
}

function displayProducts() {

    var data = getTestProducts();

    for(i = 0; i < data.products.length; i++) {

        console.log('name: ' + data.products[i].name);
        
        var name = data.products[i].name;
        var price = data.products[i].price;
        var available = data.products[i].available ? 'yes' : 'no';
        var markup = "<tr><td>" + name + "</td><td>$" + price + "</td><td>" + available + "</td></tr>";

        $("table tbody").append(markup);
    }
}

var testProducts = '{"products": [{"name": "television","price": 299.00,"available": true},{"name": "recliner","price": 199.00,"available": false}]}'