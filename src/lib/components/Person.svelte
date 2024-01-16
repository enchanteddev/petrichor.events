<script lang="ts">
	import type { person } from "$lib/types";

    export let personData: person
</script>

<div class="main">
    <div class="bg" style="background-image: url('{personData.image}');">
    </div>
    <h2>{personData.name}</h2>
    <p>{personData.phone}</p>
</div>


<style>
    .main{
        background-color: rgb(27, 27, 27, 0.5);
        backdrop-filter: blur(12px);
        font-family: var(--pfont);
        width: min-content;
        margin: 1em;
        border-radius: 1em;
        overflow: hidden;
        width: 14em;
    }
    div.bg{
        background-size: cover;
        background-position: center;
        position: relative;
        height: 12em;
        aspect-ratio: 1;
        border-radius: 0.4em;
        margin: 1rem;
        background-repeat: no-repeat;
    }
    h2{
        font-family: var(--pfont);
        margin-left: 1rem;
        width: max-content;
        /* color: black; */
    } 
    p{
        font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        letter-spacing: 0.05em;
        margin: 1rem;
        margin-top: -0.5rem;
        overflow: hidden;
        width: fit-content;
        text-align: center;
        border-radius: 0 0 0.4em 0.4em;
    }

    @media screen and (max-width:600px){
        div.main{
            position: relative;
            left: 20%;
			transform: translate(-50%);
        }
    }
</style>