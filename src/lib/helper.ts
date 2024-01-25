import {technical, workshops, cultural, informals} from '$lib/data'

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
    const Iresult = informals.filter((e) => e.id == eventID)
    if (Iresult.length > 0){
        return Iresult[0]
    }
}