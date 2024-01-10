<script lang="ts">
    
    export let options: string[] = [];
    export let onSelect = (selected: string) => {};

    let selIndex = -1;
  </script>
  
  <style>
    .options-container {
      display: flex;
      gap: 10px;
      overflow-x: auto; /* Enable horizontal scrolling if needed */
    }
  
    .option-button {
      padding: 10px;
      background-color: #4CAF5022;
      color: #fff;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }
  
    .option-button:hover {
      background-color: #FFFFFF44;
    }
  
    .selected {
      background-color: #57ca5d;
    }
    .selected:hover {
      background-color: #57ca5d;
    }
  </style>
  
  <div class="options-container">
    {#each options as option, index}
      <button
        class={`option-button ${index === selIndex ? 'selected' : ''}`}
        on:click={() => {
            selIndex = index;
            onSelect(option);
        }}
      >
        {option}
      </button>
    {/each}
  </div>
  