import { writable, type Writable } from 'svelte/store';
import type { RegisterData } from './types';

export const isLogin    = writable(false)
export const userEvents = writable(["events",]);
export const userEmail  = writable("");


export const registerData: Writable<RegisterData> = writable({
    eventID: "",
    registeredEmails: [],
    proshowIncluded: false
})