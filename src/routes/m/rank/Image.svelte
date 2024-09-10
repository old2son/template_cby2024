<script>
	export let imgSrc;
	export let name;
	import { onMount } from 'svelte';

	let imgElement = null;

	const handleError = (event) => {
		event.target.src = '/images/meds/img_miss.jpg';
	};

	const loadImage = (imgElement) => {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    imgElement.src = `/images/meds/${imgSrc}`;
                    observer.unobserve(entry.target);
                }
            });
        });
        observer.observe(imgElement);
	};

	onMount(() => {
		imgElement && loadImage(imgElement);
	});
</script>

<img alt="{name}" on:error={handleError} bind:this={imgElement} />
