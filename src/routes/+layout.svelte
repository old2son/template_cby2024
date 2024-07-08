<script>
    import { onMount } from 'svelte';

    onMount(() => {
        const isMobile = /iPhone|iPod|Android|ios|symbian|rv:1.2.3.4|ucweb|Windows Phone/i.test(navigator.userAgent);
        const hasDesktop = window.location.pathname.includes('/desktop');
        const hasM = window.location.pathname.includes('/m');

        if (isMobile && hasDesktop) {
            window.location.href = window.location.href.replace('/desktop', '/m');  
        }
        else if (isMobile && !hasM) {
            window.location.href += 'm';
        }
        else if (window.location.pathname === '/') {
            window.location.href += 'desktop';
        }
    });
</script>

<slot />