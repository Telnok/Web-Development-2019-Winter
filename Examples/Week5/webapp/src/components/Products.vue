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
                <tr v-for="product in products" :key="product.id">
                    <td>{{ product.name }}</td>
                    <td>${{ product.price }}</td>
                    <td>{{ product.available ? 'Yes' : 'No' }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import Vue from 'vue';

    export default {
        name: 'Products',
        
        data () {
            return {
                products: []
            }
        },

        methods: {
            getProducts: function() {
                // let productsApi = process.env.ROOT_API;
                let productsApi = 'http://localhost:5000/api/product';

                Vue.axios.get(productsApi).then(
                    (response) => {
                        console.log(response)
                        this.products = response.data;
                    },
                    (error) => {
                        console.log(error)
                    }
                );  
            }
        },

        mounted() {
            this.getProducts();
        },
    }

    function getProducts() {
        return JSON.parse(testProducts).products;
    }

    var testProducts = '{"products": [{"name": "television","price": 299.00,"available": true},{"name": "recliner","price": 199.00,"available": false}]}'
</script>

<style scoped>

    table {
        border-collapse: collapse;
    }

    table, th, td {
        border: 1px solid black;
        padding: 10px;
    }

</style>