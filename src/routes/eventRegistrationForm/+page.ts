import type { PageLoad } from './$types';

export const load: PageLoad = ({ url }) => {
	return {
            name: url.searchParams.get('name')
		}
};
