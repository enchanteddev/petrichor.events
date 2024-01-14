<script lang="ts">
	import  Icon  from "svelte-awesome/components/Icon.svelte";
	import { cartPlus } from "svelte-awesome/icons";
	import OptionSelector from "./OptionSelector.svelte";
	import Imgs from "./ImgCaraousel.svelte";
    
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
        <!-- <img src={imgs[0]} alt="Image of {name}"> -->
        <Imgs images={imgs} />
        <span class="cart-marker {inCart ? "" : "invis"}"><Icon data={cartPlus} scale={1.4}/></span>
    </div>
    <h2>{name}</h2>
    <p>Rs. {price}</p>
    <div class="more vis">
        <OptionSelector options={sizesAvailable} onSelect={(s) => {
            if (inCart) updateCart(s);
            size = s;
            console.log(s)
        }}/>

        {#if inCart}
            <button class="button-28 addtocart" on:click={() => {
                removeCart()
                inCart = false
            }}>Remove from Cart</button>
        {:else}
        {#if size}
            <button class="button-28 addtocart" on:click={() => {
                updateCart(size);
                inCart = true;
            }}>Add To Cart</button>
        {:else}
        <button class="button-28 addtocart" disabled>Add To Cart</button>
        {/if}
        {/if}
    </div>
</div>

<style>
    .main{
        position: relative;
        width: 20em;
        margin: 1em;
        transition: 200ms;
        background-color: rgb(130, 101, 143);
        width: repeat(3, minmax(0, 1fr));
        padding:1em;
        border-radius: 2em;
    }
    .main:hover{
        scale: 1.1;
    }
    .imgholder{
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
        border-radius: 0 0 1em 1em;
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
        opacity: 0;
    }
    .vis{
        opacity: 1;
    }
    .addtocart{
        padding: 0.25em !important;
        padding-inline: 2em !important;
        margin-top: 0.75em;
    }
</style>