import { writable, readonly } from 'svelte/store';

const isVote = writable(true);
export const voteStore = readonly(isVote);