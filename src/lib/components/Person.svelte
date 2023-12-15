<script lang="ts">
	import type { person } from "$lib/types";

    export let personData: person
</script>

<div style="background-image: url('{personData.image}');">
    <h2>{personData.name}</h2>
    <p>📞 {personData.phone}</p>
</div>


<style>
    div{
        background-size: cover;
        background-position: center;
        position: relative;
        height: 12em;
        aspect-ratio: 1;
        border-radius: 0.4em;
    }
    h2{
        position: absolute;
        bottom: 1em;
        margin: 0;
        /* color: black; */
    } 
    p{
        position: absolute;
        height: 0;
        overflow: hidden;
        width: 100%;
        margin: 0;
        bottom: -0em;
        background-color: rgb(186, 22, 198);
        text-align: center;
        border-radius: 0 0 0.4em 0.4em;
    }
    div:hover p{
        /* z-index: -1; */
        height: 1.25em;
    }
</style>