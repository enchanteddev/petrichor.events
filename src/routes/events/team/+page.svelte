<script lang="ts">
	import { userEmail, registerData } from '$lib/stores';
	import { POST, API, readToken } from '$lib';
	import { onMount } from 'svelte';
	import Toast from '$lib/components/Toast.svelte';
	
	let eventData: any = null
	let min = 1;
	let max = 1;
	let fees = 0
	let emails = Array(max);
	POST(API.event, {id: $registerData.eventID}).then(e => e.json()).then(e => {
		eventData = e;		
		min = eventData.minMember
		max = eventData.maxMember
		fees = eventData.fees
		emails = Array(max);
	})
	

	emails[0] = $userEmail;

	onMount(() => {
	    if (!$userEmail){
	        location.replace('/login')
	    }
	})

	let successToast = false
	let failedToast = false
	async function handleSubmit() {
		let emails_filled = emails.filter((v) => v);
		console.log(emails_filled);
		if (emails_filled.length < min || emails_filled.length > max) {
			alert(`Please add ${min} - ${max} members in your team. Currently you have added ${emails_filled.length} team members`)
			return
		}
		
		if (fees == 0){
			const response = await POST(API.events_apply_free, {
				participants: $registerData.registeredEmails,
				eventId: $registerData.eventID,
				token: readToken()
			})
			if (response.status == 200){
				successToast = true;	
			} else {
				failedToast = true;
			}
		}
	}
</script>
<Toast message="Event Registered!" bind:show={successToast}/>
<Toast message="Event Registration Failed!" bind:show={failedToast}/>
<div class="main">
	{#if eventData}		
	<h1>Registering for Event Name {eventData.name}</h1>
	<h2>Please Add your team details</h2>
	<p>Email of Team Member 1 *</p>
	<input type="text" value={$userEmail} disabled />
	<form method="post" style="display: contents;" on:submit|preventDefault={handleSubmit}>
		{#each Array(max - 1) as e, index}
		<p>Email of Team Member {index + 2} {index < min - 1 ? '*' : ''}</p>
		<input
				type="text"
				on:change={(e) => {
					// @ts-ignore
					emails[index + 1] = e.target.value;
					console.log(emails);
				}}
			/>
			{/each}
			<button type="submit">Submit</button>
		</form>
	{/if}
</div>
<style>
	.main {
		margin: 3em;
		margin-top: 6em;
		display: flex;
		flex-direction: column;
		place-items: center;
	}
	input {
		color: inherit;
		font: inherit;
		background: transparent;
		outline: transparent;
		border: 1px solid white;
		padding: 0.5em;
		padding-inline: 1em;
		border-radius: 1em;
		width: 25em;
		text-align: center;
	}
	button {
		margin-top: 2em;
		border: 1px solid white;
		padding: 0.5em;
		padding-inline: 1em;
		border-radius: 1em;
		width: 10em;
		cursor: pointer;
	}
</style>
