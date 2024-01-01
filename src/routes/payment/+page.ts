import { API, POST } from '$lib';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ url }) => {
	const id = url.searchParams.get('id')
	const eventResponse = await POST(API.event, {id: id});
	const eventData = await eventResponse.json()
	console.log(eventData)
	return eventData;
};
