<script>
    import {schedule} from '$lib/sched.json'
	import {getEventDataJS} from '$lib/helper'

    import Schedule from '$lib/components/Schedule.svelte';


</script>

<div class="main">

    <h1 class="atmos">Schedule</h1>
    <div class="grid">
    {#each schedule as event}
        <Schedule 
            name={event.name} 
            date={event.date}
            timing={event.timing}
            venue={event.venue}
            img={getEventDataJS(event.id)?.image || ""}/>
    {/each}
    </div>

</div>

<style>
    .main{
        display: flex;
        flex-direction: column;
        place-items: center;
        margin-top: 7em;
    }
    .grid{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }
    
    @media (max-width: 1400px){
        .grid{
            grid-template-columns: 1fr 1fr 1fr;
        }

    }
    
    @media (max-width: 1000px){
        .grid{
            grid-template-columns: 1fr 1fr;
        }

    }
    
    @media (max-width: 700px){
        .grid{
            grid-template-columns: 1fr;
        }

    }
</style>