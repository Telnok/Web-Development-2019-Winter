<template>
    <div>
        <h1>Registration</h1>
        <form>
            <div class='form-entry'>
                First Name: <input type='text'/>
            </div>

            <div class='form-entry'>
                Last Name: <input type='text'/>
            </div>

            <div class='form-entry'>
                <input type='button' value='Submit'/>
            </div>
        </form>

        <!-- <div id='error'></div>

        <div class="menu-bar">
            <span class="menu-item"><a href="index.html">Home</a></span>
            <span class="menu-item"><a href="products.html">Products</a></span>
        </div> -->
    </div>
</template>

<script>
    export default {
        name: 'Registration',
        data () {
            return {
            }
        }
    }
</script>

<style scoped>
</style>