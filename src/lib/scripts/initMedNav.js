import { navStore } from '$lib/stores/navStore.js';

export default function initMedNav(i) {
    if (i === 68) {
        navStore.set(2);
    }
    else if (i === 69) {
        navStore.set(3);
    }
    else if (i === 71) { 
        navStore.set(4);
    }
}
