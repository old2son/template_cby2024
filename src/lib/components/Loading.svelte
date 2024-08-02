<script>
	import { fade } from 'svelte/transition';
    import { elastic } from 'svelte/easing';
    
	export let message = '';
	export let visible = false;
</script>

{#if visible}
	<div class="loading" transition:fade={{ delay: 100, duration: 250, easing: elastic }}>
		{message}
	</div>
	<div class="mask"></div>
{/if}

<style lang="scss">
	.loading {
		position: fixed;
		top: 50%;
		left: 50%;
        z-index: 1;
		transform: translate(-50%, -50%);
		color: #fff;
		font-size: 20px;

		&::after {
			position: absolute;
			left: -20px;
			top: 50%;
			content: '';
			width: 12px;
			height: 12px;
			border: 2px solid #ddd;
			border-top: 2px solid #3498db;
			border-radius: 50%;
			animation: spin 1.5s linear infinite;
		}
	}

	.mask {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.8);
	}

	@keyframes spin {
		0% {
			transform: translateY(-50%) rotate(0deg);
		}
		100% {
			transform: translateY(-50%) rotate(360deg);
		}
	}
</style>
