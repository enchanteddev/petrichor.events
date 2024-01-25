<script lang="ts">
	import { onMount } from 'svelte';
	import VanillaTilt from 'vanilla-tilt';
    
	export let name: string;
	export let img: string;
	export let title: string;

    let sponsorDiv: HTMLDivElement
    onMount(() => {
        VanillaTilt.init(sponsorDiv);
    })
</script>

<div bind:this={sponsorDiv} class="sponsor">
	<div class="title">{title}</div>
	<div class="img" style="background-image:url({img})" />
	<div class="name">{name}</div>
</div>

<style>
	.sponsor {
		background-color: rgba(104, 104, 104, 0.253);
		padding: 1em;
		border-radius: 1em;
		backdrop-filter: blur(23px);
        transition: 200ms ease;
	}

    .sponsor:hover{
        scale: 1.05;
    }

	.title {
		width: 200px;
		display: flex;
		justify-content: center;
		align-items: center;
        font-weight: 1000;
	}
	.name {
		width: 200px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.img {
		display: flex;
		justify-content: center;
		align-items: center;
		background-repeat: no-repeat;
		background-size: contain;
		background-position: center;
		height: 200px;
		width: 200px;
	}
	.title,
	.name {
		font-size: larger;
		text-align: center;
	}
</style>