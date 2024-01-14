<script lang="ts">
    import { onMount } from 'svelte';
    import { fly } from 'svelte/transition';
  
    export let message = '';
    export let duration = 5000; // default duration in milliseconds
    export let show = false;
  
    let progress = 0;
    let timer: NodeJS.Timeout;
  
    onMount(() => {
      // Start the timeout and update progress
      timer = setInterval(() => {
        if (!show) return
        progress += (100 / duration) * 5;
        if (progress >= 100) {
          closeToast();
        }
      }, 5);
    });
  
    function closeToast() {
      // clearInterval(timer);
      show = false;
      progress = 0;
    }
  </script>
  
  <style>
    .toast-container {
      position: fixed;
      top: 0; /* Adjusted from top: 0; */
      left: 0; /* Adjusted from left: 0; */
      right: 0;
      padding: 15px;
      margin: 6em;
      margin-inline: 40%;
      background-color: #333;
      color: #fff;
      display: flex;
      justify-content: space-between;
      align-items: center;
      z-index: 9999;
    }
  
    .progress-bar {
      position: absolute;
      bottom: 0; /* Stick to the bottom of the .toast-container */
      left: 0;
      height: 5px;
      background-color: #555; /* slightly different shade */
      z-index: 9998;
    }
  
    .close-btn {
      cursor: pointer;
      font-size: 18px;
    }
  </style>
  
  {#if show}
    <div in:fly={{ y: -100, duration: 500 }} out:fly={{ y: -100, duration: 500 }} class="toast-container">
      {message}
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      <span on:click={closeToast} class="close-btn">×</span>
      <div class="progress-bar" style="width: {progress}%;"></div>
    </div>
  {/if}
  