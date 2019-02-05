<template>
    <div>
        <h2 class='section-heading'>Products</h2>
        <table>
            <thead>
                <tr>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Available</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="product in products">
                    <td>{{ product.name }}</td>
                    <td>{{ product.price }}</td>
                    <td>{{ product.available }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: 'Products',
        mounted() {
            this.products = getProducts();
        },
        data () {
            return {
                products: []
            }
        }
    }

    function getProducts() {
        return JSON.parse(testProducts).products;
    }

    var testProducts = '{"products": [{"name": "television","price": 299.00,"available": true},{"name": "recliner","price": 199.00,"available": false}]}'
</script>

<style scoped>
</style>