import { informals } from '$lib/data';
import type { PageLoad } from './$types';


export const load: PageLoad = () => {
	return informals;
};