<script>
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import initMedNav from '@src/lib/scripts/initMedNav.js';
	import NoResult from '@src/lib/components/NoResult.svelte';

	initMedNav();
</script>
