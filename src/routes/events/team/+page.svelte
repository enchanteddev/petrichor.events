<script lang="ts">
	import { page } from '$app/stores';
	import { userEmail, registerData, isLogin  } from '$lib/stores';
	import { POST, API, readToken } from '$lib';
	import { onMount } from 'svelte';
	import Toast from '$lib/components/Toast.svelte';
	import { goto } from '$app/navigation';
	import Loading from '$lib/components/Loading.svelte';
	
	let eventData: any = null
	let min = 1;
	let max = 1;
	let fees = 0
	let emails = Array(max);
	let loading = false
	loading = true
	POST(API.event, {id: $registerData.eventID}).then(e => e.json()).then(e => {
		loading = false
		eventData = e;		
		min = eventData.minMemeber
		max = eventData.maxMemeber
		fees = eventData.fee
		console.log(eventData, max)
		emails = Array(max);
		emails[0] = $userEmail;
	})
	


	
	onMount(() => {
		console.log($isLogin, $userEmail)
	    if (!$userEmail){
			loading = true
	        goto(`/login?nextpg=${$page.url.pathname + $page.url.search}`)
	    }
	})

	let successToast = false
	let failedToast = false
	async function handleSubmit() {
		let emails_filled = emails.filter((v) => v);
		$registerData.registeredEmails = emails_filled;
		console.log(emails_filled);
		if (emails_filled.length < min || emails_filled.length > max) {
			alert(`Please add ${min} - ${max} members in your team. Currently you have added ${emails_filled.length} team members`)
			return
		}
		console.log('fees', fees)
		if (fees == 0){
			loading = true
			const response = await POST(API.events_apply_free, {
				participants: $registerData.registeredEmails,
				eventId: $registerData.eventID,
				token: readToken()
			})
			loading = false
			if (response.status == 200){
				successToast = true;	
				setTimeout(() => {goto('/profile')}, 1000)
			} else {
				failedToast = true;
			}
		} else {
			loading = true
			if ($registerData.registeredEmails.map((e) => e.endsWith('smail.iitpkd.ac.in')).every((e) => e)){
				const response = await POST(API.events_apply_paid, {
							transactionID: '',
							CAcode: '',
							token: readToken(),
							eventId: $registerData.eventID,
							participants: $registerData.registeredEmails
						})

						const result = await response.json()
						if (result.status == 200){
							alert("Event applied, no need to pay as all participants from IIT Palakkad")
							goto('/profile')
						}
			} else {
				goto(`/payment?id=${$registerData.eventID}`)
			}
		}
	}
</script>
<Loading spinning = {loading}></Loading>
{#if successToast}
	<Toast message="Event Registered!" bind:show={successToast}/>
{/if}
{#if failedToast}
	<Toast message="Event Registration Failed!" bind:show={failedToast}/>
{/if}
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
				type="email"
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
