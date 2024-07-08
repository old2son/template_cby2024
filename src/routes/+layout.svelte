<script>
    import { onMount } from 'svelte';

    onMount(() => {
        const isMobile = navigator.userAgent.match(/(iPhone|iPod|Android|ios|SymbianOS|Windows Phone|BlackBerry|Windows Phone OS 7)/i)
        const hasDesktop = window.location.pathname.match(/\/desktop/);
        const hasM = window.location.pathname.match(/\/m/);

        if (isMobile && hasDesktop) {
            window.location.href = window.location.href.replace('/desktop', '/m');  
        }
        else if (isMobile && !hasM) {
            window.location.href += 'm';
        }
        else if (!isMobile && !hasDesktop) {
            window.location.href += 'desktop';
        }
    });
</script>

<slot />