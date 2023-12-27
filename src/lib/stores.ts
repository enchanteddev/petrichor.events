import { writable } from 'svelte/store';

export const isLogin    = writable(true)
export const userEvents = writable(["events",]);
export const userEmail  = writable("");
