<script>
    import {schedule} from '$lib/sched.json'
	import {getEventDataJS} from '$lib/helper'
    import tangle from '$lib/assets/Sponsors/Tangle.jpg'
    import Schedule from '$lib/components/Schedule.svelte';


</script>

<div class="overlay">
    <div class="container">
        <h1 style="text-align: center;">View The Schedule on <span class="atmos">Tangle</span></h1>
        <img src={tangle} alt="">
        <a href='https://play.google.com/store/apps/details?id=com.tangleoffline.tangle&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'><img alt='Get it on Google Play' src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png'/></a>
        <a style="color: white;" href="https://apps.apple.com/in/app/tangle-university-social-app/id6446587394">
            <img class="trash" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvpnnext.com%2Fimages%2Fget-on-app-store.png&f=1&nofb=1&ipt=5c0569a4b79f39ce2a7b2b19ce204978d00265de8441509cf8237d62752164ba&ipo=images" alt="">
        </a>
    </div>
</div>

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
    .overlay{
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1;
        height: 100svh;
        width: 100svw;
        display: grid;
        place-items: center;
    }
    .container{
        display: flex;
        flex-direction: column;
        place-items: center;
    }
    .container > img{
        width: 20em;
        display: block;
    }
    a>img{
        width: 23em;
    }
    .trash{
        width: 28em;
    }
    .main{
        display: flex;
        flex-direction: column;
        place-items: center;
        margin-top: 7em;
        filter: blur(15px);
        height: 100svh;
        overflow: hidden;
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