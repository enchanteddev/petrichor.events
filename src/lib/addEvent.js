import { API, POST } from "$lib";
import data from "$lib/feesandmem.json"

data.cultural.forEach(event => {
    POST(API.addEvent,JSON.stringify(event))
});
data.technical.forEach(event => {
    POST(API.addEvent,JSON.stringify(event))
});
data.workshops.forEach(event => {
    POST(API.addEvent,JSON.stringify(event))
});