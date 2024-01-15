<script lang="ts">
  import { onMount } from 'svelte';

  export let images: string[] = [];
  let currentIndex: number = 0;

  let container: HTMLDivElement;

  function handleWheel(event: any) {
    event.preventDefault();
  }

  function goToImage(index: number) {
    currentIndex = index;
    updateCarousel();
  }

  function scrollLeft() {
    currentIndex--;
    updateCarousel();
  }

  function scrollRight() {
    currentIndex++;
    updateCarousel();
  }

  function updateCarousel() {
    const newPosition = Math.abs(currentIndex % images.length) * 1000;
    console.log(newPosition);
    container.scrollTo({
      left: newPosition,
      behavior: 'smooth'
    });
    console.log("S", container.scrollLeft);
  }
</script>

<style>
  #carousel-container {
    position: relative;
    display: flex;
    overflow-x: scroll;
    /* scroll-snap-type: x mandatory; */
    white-space: nowrap;
    padding: 10px;
  }

  .carousel-item {
    flex: 0 0 100%;
    margin-right: 10px;
    /* scroll-snap-align: start; */
    border-radius: 8px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 20em;
  }

  .carousel-item img {
    max-width: 100%;
    max-height: 100%;
    border-radius: 8px;
    object-fit: contain; /* Adjust based on your preference */
  }

  .indicators {
    display: flex;
    justify-content: center;
    margin-top: 10px;
  }

  .indicator {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #ccc;
    margin: 0 5px;
    cursor: pointer;
  }

  .indicator.active {
    background-color: #333;
  }

  .scroll-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    font-size: 18px;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  .scroll-left {
    left: -0.8em;
  }

  .scroll-right {
    right: -0.2em;
  }

  ::-webkit-scrollbar {
        width: 0px;
        background: transparent; /* make scrollbar transparent */
    }
  
</style>
{#if images.length > 1}
<div class="scroll-button scroll-left" on:click={scrollLeft}>&#8249;</div>
{/if}
<div id="carousel-container" bind:this={container} on:scroll={handleWheel}>
  {#each images as img, index (img)}
  <div class="carousel-item">
    <img src={img} alt={`Image ${index + 1}`} />
  </div>
  {/each}
</div>
{#if images.length > 1}
<div class="scroll-button scroll-right" on:click={scrollRight}>&#8250;</div>
{/if}

{#if images.length > 1}
  <div class="indicators">
    {#each images as _, index}
      <div
        class={`indicator ${index === Math.abs(currentIndex % images.length) ? 'active' : ''}`}
        on:click={() => goToImage(index)}
      ></div>
    {/each}
  </div>
{/if}
