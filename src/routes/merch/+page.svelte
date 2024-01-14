<script lang="ts">
	import type { MerchItem } from "$lib/types";
    import {merch} from '$lib/data'
	import Item from "./Item.svelte";

    let shoppingCart: {[key: string]: MerchItem} = {}
    function updateItemSize(id: string, size: string){
        if (!shoppingCart[id]){
            let theone = merch.find((v) => v.id == id)
            if (theone == undefined){
                alert("Unexpected Error")
                return
            }
            shoppingCart[id] = {
                name: theone.name,
                price: theone.price,
                size: size
            }
            return
        }
        shoppingCart[id].size = size;
    }

    function removeItem(id: string){
        delete shoppingCart[id]
        shoppingCart = shoppingCart;
    }

    $: console.log(shoppingCart)
</script>

<div class="main">
    <div class="items">

        {#each merch as m}
        <Item 
        name={m.name}
        price={m.price}
        imgs={m.imgs}
        updateCart={(size) => {updateItemSize(m.id, size)}}
        removeCart={() => {removeItem(m.id)}}
        />
        {/each}
    </div>
    <div class="bottom">

        {#if Object.keys(shoppingCart).length !== 0 && shoppingCart.constructor === Object}
        {/if}
        <button class="button-85 checkout">Proceed To Checkout</button>
    </div>
</div>
<style>
    .bottom{
        width: 100%;
        display: flex;
        justify-content: center;
    }
    .checkout{
        font-size: 24px;
        padding: 0.75em;
        margin-bottom: 2em;
        background-color: rgb(47, 47, 47);
    }
    .items{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        place-items: center;
        margin-top: 10em;
        margin-bottom: 5em;
    }
    @media (max-width: 1300px){
        .items{
            grid-template-columns: 1fr 1fr 1fr;
        }
    }
    @media (max-width: 1000px){
        .items{
            grid-template-columns: 1fr 1fr;
        }
    }
    @media (max-width: 600px){
        .items{
            grid-template-columns: 1fr;
        }
    }
</style>