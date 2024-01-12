import { API, POST } from '$lib';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ url }) => {
	const id = url.searchParams.get('id')
	console.log(id)
	const eventResponse = await POST(API.event, {id: id});
	let eventData = await eventResponse.json()
	eventData.id = id;
	console.log(eventData)
	return eventData;
};
