<script lang="ts">
    import type { MerchItem } from "$lib/types";
	import  Icon  from "svelte-awesome/components/Icon.svelte";
	import { cartPlus } from "svelte-awesome/icons";
	import OptionSelector from "./OptionSelector.svelte";
    
    type CartSizeUpdate = (size: string) => void
    type CartRemove = () => void

    export let name: string;
    export let price: number;
    export let imgs: string[];
    export let sizesAvailable = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
    export let updateCart: CartSizeUpdate;
    export let removeCart: CartRemove;

    let inCart = false
    let size: string = '';
    let hovering = false;
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="main" on:mouseenter={() => {hovering = true}} on:mouseleave={() => {hovering=false}}>
    <div class="imgholder">
        <img src={imgs[0]} alt="Image of {name}">
        <span class="cart-marker {inCart ? "" : "invis"}"><Icon data={cartPlus} scale={1.4}/></span>
    </div>
    <h2>{name}</h2>
    <p>Rs. {price}</p>
    <div class="more {hovering ? "vis" : ""}">
        <OptionSelector options={sizesAvailable} onSelect={(s) => {
            if (inCart) updateCart(s);
            size = s;
            console.log(s)
        }}/>

        {#if inCart}
            <button on:click={() => {
                removeCart()
                inCart = false
            }}>Remove from Cart</button>
        {:else}
        {#if size}
            <button class="addtocart" on:click={() => {
                updateCart(size);
                inCart = true;
            }}>Add To Cart</button>
        {:else}
        <button class="addtocart" disabled>Add To Cart</button>
        {/if}
        {/if}
    </div>
</div>

<style>
    .main{
        position: relative;
        width: fit-content;
        margin: 1em;
        transition: 200ms;
    }
    .main:hover{
        scale: 1.2;
    }
    .imgholder{
        width: fit-content;
        position: relative;
    }
    .imgholder::after{
        position: absolute;
        background: linear-gradient(rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.468));
        content: "";
        display: block;
        bottom: 0;
        left: 0;
        height: 10em;
        width: 100%;
    }
    .cart-marker{
        position: absolute;
        bottom: 0.9em;
        left: .5em;
        z-index: 2;
        /* background-color: black; */
    }
    .invis{
        display: none;
    }
    img{
        height: 20em;
        border-radius: 1em;
    }
    .more{
        display: none;
    }
    .vis{
        display: unset;
    }
</style>