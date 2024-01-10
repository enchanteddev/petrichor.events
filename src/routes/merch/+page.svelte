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
    }
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
</div>
<style>
    .items{
        display: flex;
    }
</style>