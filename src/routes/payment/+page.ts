import { API, POST } from '$lib';
import type { PageLoad } from './$types';
import feedetails from '$lib/feesandmem.json'

export const load: PageLoad = async ({ url }) => {
	const id = url.searchParams.get('id')
	console.log(id)
	// const eventResponse = await POST(API.event, {id: id});
	// let eventData = await eventResponse.json()
	// eventData.id = id;
	// console.log(eventData)
	let eventData;
	if(id?.slice(0,1) == 'T'){
		eventData = feedetails.technical.filter( (obj) => {
			return obj.id == id
		})
	}
	else if(id?.slice(0,1) == 'C'){
		eventData = feedetails.cultural.filter( (obj) => {
			return obj.id == id
		})
	}
	else{
		eventData = feedetails.workshops.filter( (obj) => {
			return obj.id == id
		})
	}

	return eventData[0];
};
