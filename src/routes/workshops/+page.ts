import type { workshop } from '$lib/types';
import { workshops } from '$lib/data';
import type { PageLoad } from './$types';


export const load: PageLoad = (): {[key: string]: workshop[]} => {
	return workshops;
};