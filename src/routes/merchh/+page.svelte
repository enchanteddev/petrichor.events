<script lang="ts">
    import Toast from "$lib/components/Toast.svelte";
	import type { MerchItem } from "$lib/types";
    import {merch} from '$lib/data'
	import Item from "./Item.svelte";
	import PaymentPortal from "./PaymentPortal.svelte";

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
        show=true;
        shoppingCart[id].size = size;
    }

    function removeItem(id: string){
        delete shoppingCart[id]
        shoppingCart = shoppingCart;
    }

    $: console.log(shoppingCart)
    let show = false;
    let startPayment = false;
</script>
<Toast message={"Size Updated"} bind:show duration={1000}/>
<div class="main">
    <div class="items">

        {#each merch as m}
        <Item 
        name={m.name}
        price={m.price}
        imgs={m.imgs}
        sizesAvailable={m.sizes}
        updateCart={(size) => {updateItemSize(m.id, size)}}
        removeCart={() => {removeItem(m.id)}}
        />
        {/each}
    </div>
    <div class="bottom">

        {#if true || Object.keys(shoppingCart).length !== 0 && shoppingCart.constructor === Object}
            <button class="button-85 checkout" on:click={() => {startPayment=true; console.log("PRESSED")}}>Proceed To Checkout</button>
        {/if}
    </div>
    <PaymentPortal amount={100} bind:show={startPayment}/>
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