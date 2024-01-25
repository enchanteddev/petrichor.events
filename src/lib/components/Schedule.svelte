<script lang="ts">
    export let name: string;
    export let img: string;
    export let date: number;
    export let timing: string;
    export let venue: string;
</script>

<div class="main">
    <div class="img" style="background-image: url('{img}');">
        <h3 class="atmos">{name}</h3>
    </div>
    <p>On {date}th January, {timing}</p>
    <p>At {venue}</p>
</div>


<style>
    .img{
        height: 20em;
        aspect-ratio: 1;
        background-position: center;
        background-size: cover;
        position: relative;
    }
    .img > h3{
        background-image: linear-gradient(to bottom, transparent, black);
        position: absolute;
        bottom: 0;
        margin: 0;
        width: calc(100% - 1em);
        padding: 0.5em;
    }
    .main > p{
        margin: 0.1em;
        margin-left: 0.5em;
    }
    .main{
        padding-bottom: 2em;
        background-color: rgb(15, 15, 15);
        width: min-content;
        border-radius: 1em;
        overflow: hidden;
        margin: 1em;
    }
</style>