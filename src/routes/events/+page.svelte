<script lang="ts">
	import type { event } from "$lib/types";

    export let data: {[key: string]: event[]};
    let events = data['events'];

    let bg: HTMLDivElement

</script>

<div class="bg" bind:this={bg}></div>
<div class="sidebar">
    {#each events as event}   
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div class="card" style="background-image: url('{event.image}');" on:mouseenter={() => {
        bg.style.backgroundImage = `url("${event.image}")`;
        console.log(event.image)
    }}>
        <p>
            {event.name}
        </p>
    </div>
    {/each}
</div>


<style>
    .card{
        width: 15%;
        aspect-ratio: 2;
        background-position: center;
        background-size: cover;
        position: relative;
        cursor: pointer;
        margin: 1em;
    }
    .card::before{
        content: "";
        position: absolute;
        height: 100%;
        width: 0;
        background-color: rgb(255, 151, 255);
        transition: 100ms;
    }
    .card:hover::before{
        width: 0.3em;
    }
    .card > p{
        position: absolute;
        bottom: 0;
        left: 1em;
    }
    .bg{
        position: absolute;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100vw;
        background-position: center;
        background-size: cover;
    }
    .sidebar{
        overflow: scroll;
        height: 90vh;
    }
</style>