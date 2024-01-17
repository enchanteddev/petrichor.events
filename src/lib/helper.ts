import {technical, workshops, cultural} from '$lib/data'

export function getEventDataJS(eventID: string){
    const Tresult = technical.events.filter((e) => e.id == eventID)
    if (Tresult.length > 0){
        return Tresult[0]
    }
    const Cresult = cultural.events.filter((e) => e.id == eventID)
    if (Cresult.length > 0){
        return Cresult[0]
    }
    const Wresult = workshops.workshops.filter((e) => e.id == eventID)
    if (Wresult.length > 0){
        return Wresult[0]
    }
}