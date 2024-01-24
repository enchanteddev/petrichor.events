<script>
    import { onMount } from 'svelte';
  
    let isZoomed = false;
      export let src;
      let alt = "wd"
  
    // Function to toggle zoom
    function toggleZoom() {
      isZoomed = !isZoomed;
    }
  
    // Close the zoom on Escape key press
    function handleKeyPress(event) {
      if (event.key === 'Escape') {
        isZoomed = false;
      }
    }
  
    onMount(() => {
      // Add event listener for Escape key press
      window.addEventListener('keydown', handleKeyPress);
  
      // Cleanup event listener on component destroy
      return () => {
        window.removeEventListener('keydown', handleKeyPress);
      };
    });
  </script>
  
  <style>
    .zoomed {
      cursor: zoom-out;
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  
    .zoom-overlay {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      height: 90%;
      /* background: rgba(0, 0, 0, 0.7); */
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 999;
    }
    img{
        width: inherit;
        height: inherit;
    }
  </style>
  
  {#if isZoomed}
    <div class="zoom-overlay" on:click={toggleZoom}>
      <img src="{src}" alt="{alt}" class="zoomed" on:click|stopPropagation={toggleZoom}>
    </div>
  {:else}
    <img src="{src}" alt="{alt}" on:click={toggleZoom}>
  {/if}