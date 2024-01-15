import { informals } from '$lib/data';
import type { informal } from '$lib/types';
import type { PageLoad } from './$types';


export const load: PageLoad = (): {[key: string]: informal[]} => {
	return {inf: informals};
};