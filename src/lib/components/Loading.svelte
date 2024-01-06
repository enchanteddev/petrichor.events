<script lang="ts">
  export let spinning: boolean;
</script>

{#if spinning}
<div class="main">
  <div class="spinner" />
</div>
{/if}
<style>
  .main{
    height: 100vh;
    width: 100vw;
    position: absolute;
    top:0;
    left:0;
    height: 100vw;
    z-index: 5;
    opacity: 100%;
    background-color: rgba(0, 0, 0,0.8);
  }
	.spinner {
    margin: 25% 50%;
		border: 8px solid #f3f3f3;
		border-top: 8px solid #3498db;
		border-radius: 50%;
		width: 50px;
		height: 50px;
		animation: spin 1s linear infinite;
	}

	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
</style>
