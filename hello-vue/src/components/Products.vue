<template>
    <div>
        <div class="shopping-cart">
            <font-awesome-icon :icon="['fas', 'shopping-cart']" />
            {{ cart.length }}
        </div>
        <label class="font-weight-bold">
            Maximum price:
            <input v-model="maximum" />
        </label>
        <div>
            <input
                class="input-range"
                type="range"
                name="range "
                :min="0"
                :max="getHighestPrice"
                v-model="maximum"
            />
        </div>
        <div v-for="product in products" :key="product.id">
            <div v-if="product.price <= Number(maximum)" class="product">
                <div class="hero">
                    <!-- <img class="img-fluid" :src="product.image" :alt="product.name" /> -->
                </div>
                <div class="info">
                    <h3 class="name">{{ product.name }}</h3>
                    <div class="description text-body">
                        {{ product.description }}
                    </div>
                    <div class="price-cart-button">
                        <h3 class="price">${{ product.price }}</h3>
                        <button class="add-to-cart" @click="addItem(product)">
                            Add to cart
                            <font-awesome-icon :icon="['fas', 'cart-plus']" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { productsData } from "../data/products.js";

export default {
    props: {
        max: {
            type: Number
        }
    },
    data() {
        return {
            products: null,
            maximum: this.getHighestPrice(),
            cart: []
        };
    },
    methods: {
        getHighestPrice: function() {
            return Math.max.apply(
                null,
                productsData.map(item => {
                    return item.price;
                })
            );
        },
        addItem: function(item) {
            this.cart.push(item);
        }
    },
    computed: {
        getLowestPrice: function() {
            return Math.min.apply(
                null,
                productsData.map(item => {
                    return item.price;
                })
            );
        }
    },
    mounted: function() {
        this.products = productsData;
    }
};
</script>

<style lang="sass">
.shopping-cart
    text-align: right
    margin-right: 5vw
    font-size: 25px
label
    font-size: 2vw
.price-lablel
    width: 2vw
.input-range
    width: 50vw
.product, .hero, .info
    display: flex
.hero, .info
    flex-direction: column
.hero
    flex: 0 0 40%
.info
    margin: 5vw
.description
    font-size: 20px
    text-align: justify
.price-cart-button
    display: flex
    justify-content: space-between
    margin-top: 2vw
    .add-to-cart
        text-transform: uppercase
        font-weight: 700
</style>
