import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { cultural, technical } from '$lib/data';
import json from '$lib/feesandmem.json';


export const load: PageLoad = ({ params, url }) => {
    let eventID = Number(url.searchParams.get('id'))
    if (!eventID){
        eventID = 0;
    }
    if (params.slug == 'technical'){
        return {'nofee':technical,'withfee':json.technical, 'eventID': eventID}
    } else if (params.slug == 'cultural'){
        // console.log(cultural)
        return {'nofee':cultural,'withfee':json.cultural, 'eventID': eventID}
    }

    throw error(404)
    
};