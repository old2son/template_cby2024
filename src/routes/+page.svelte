<script>

</script>

<svelte:head>
	<title>导航</title>
</svelte:head>

<div class="loading">请稍后...</div>

<style lang="scss">
    .loading {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: #333;
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
            animation: spin 2s linear infinite;
        }
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
