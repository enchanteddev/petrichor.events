<script lang="ts">
    // @ts-nocheck
    import { workshops } from '$lib/data';
    import { cultural } from '$lib/data';
    import { technical } from '$lib/data';

    export let eventId : string
    export let paymentStatus: string
    console.log(eventId)
    let Eventtype=""
    let events=[]
    switch (eventId.charAt(0)) {
        case 'T':
            events=technical.events
            Eventtype="Technical"
            break;
        case 'C':
            events=cultural.events
            Eventtype="Cultural"
            break;
        default:
            events=workshops.workshops
            Eventtype="Workshop"
            break;
    }
    const event = events.find((e) => e.id == eventId);
    console.log(events)
</script>

{#if event}
<div class="event-details" style="padding: 10px 15px;">
    <div class="event-image">
        <!-- svelte-ignore a11y-img-redundant-alt -->
        <img
            src={event["image"]}
            style="margin-top: 10px; border-radius: 10px; height:150px;width:200px"
            alt="Image of something"/>
            
        <h4 class="payments" style="background-color: {(paymentStatus == "Payment Verified")? "green":"red"};">{paymentStatus ? "Verified" : "Verification in progress"}</h4>
    </div>
    <div class="event-data" style="text-align: left; padding: 0 30px;">
        <div>
            <h4 style="line-height: 20px;text-align:center">{event["name"]}</h4>
            <p style="text-align:center">{Eventtype}</p>
        </div>
        <div>
            <h4 style="line-height: 20px;text-align:center">{event["date"]}</h4>
            {#if event["location"] != undefined}
                <p>{event["location"]}</p>
            {/if}
        </div>
        <div class="contact-info" style="padding-top: 20px; width:100%; text-align:right;">
            <a href="/home/#contact" style=" text-decoration: none;text-align:center">Contact US</a>
        </div>
    </div>
</div>
{/if}
<style>


.event-details {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
		background-color: #333232;
		border-radius: 20px;
		margin: 10px 10px;
		line-height: 0;
		height: 15%;
		text-align: center;
		padding: 0 15px;
		padding-right: 10px;
		margin-bottom: 20px;
	}
	.event-details .payments {
		color: white;
		padding: 10px;
		border-radius: 5px;
		text-align: center;
		flex-grow: 1;
		display: flex;
		align-items: center;
		justify-content: center;
		height: 3px;
	}
	.event-data {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: flex-start;
		flex-grow: 3;
		margin-top: -40px;
	}
	.event-data .contact-info a {
		text-decoration: none;
		color: rgb(110, 109, 109);
		font-weight: bold;   
    }

</style>