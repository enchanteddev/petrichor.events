<script lang="ts">
	import Loading from '$lib/components/Loading.svelte';
	import Person from '$lib/components/Person.svelte';
	import type { event } from '$lib/types';
	import { isLogin, registerData, userEvents, userEmail } from '$lib/stores';
	import { readToken, readID, POST } from '$lib/index';

	import { onMount } from 'svelte';
	import { API } from '$lib';
	import { goto } from '$app/navigation';

	export let data: any;
	let events = data['nofee']['events'];
	let events1 = data['withfee']
	let loading = false

	
	$: {
		console.log('$isLogin:', $isLogin, $userEmail);
	}
	
	let bg: HTMLDivElement;
	let currentEvent: event = events[0];
	let registered = false;
	let registering = false;
	if ($isLogin) {
		// @ts-ignore
		// console.log($userEvents);
		// console.log(currentEvent.id)
		// console.log(currentEvent.id in $userEvents)
		// console.log('p');
		if (currentEvent.id in $userEvents) {
			registered = true;
		}
	}

	let currEveFee = events1[parseInt(currentEvent.id.slice(2))].fees

	onMount(() => {
		bg.style.backgroundImage = `url("${currentEvent.image}")`;
	});

	const setEvent = (event: event) => {
		registering = false;
		bg.style.backgroundImage = `url("${event.image}")`;
		currentEvent = event;
		currEveFee = events1[parseInt(currentEvent.id.slice(2))].fees
		// console.log(event.image);
		// console.log($userEvents);
		// console.log(currentEvent.id)
		registered=false	
		// console.log('p');
		if ($isLogin) {
			// @ts-ignore
			$userEvents.forEach(element => {
				if (element == currentEvent.id){
					registered=true
				}
			});
		}
	};

	const clicked = async () => {
		if (!$isLogin) {
			loading = true
			goto('/login');
		} else {
			$registerData.eventID = currentEvent.id;
			$registerData.registeredEmails.push($userEmail);
			// $registerData.proshowIncluded = confirm("Do you want ProShow tickets to be included with the purchase? (200Rs. extra)")

			loading = true 
			const eventDataResponse = await POST(API.event, { id: currentEvent.id });
			const eventData = await eventDataResponse.json();
			loading = false

			if (eventData.minMemeber == 1 && eventData.maxMemeber == 1) {
				if (eventData.fee == 0) {
					registering = true;
					loading = true
					await POST(API.events_apply_free, {
						participants: [$userEmail],
						// @ts-ignore
						eventId: currentEvent.id,
						token: readToken()
					})
						.then((res) => res.json())
						.then((res) => {
							loading = false
							console.log(res);
							if (res.status == 200) {
								userEvents.update((value) => [...value, currentEvent.id]);
								// userEvents.update(value => [...value, currentEvent.id])
								alert('Registration successfull');
								registered = true;
							} else {
								alert('Registration Unsuccessfull! Please try Again');
							}
						});
					setEvent(currentEvent);
				} else {
					loading = true
					goto(`/payment?id=${currentEvent.id}`);
				}
			} else {
				loading = true
				goto('/events/team');
			}
		}
	};
</script>

<Loading spinning = {loading}></Loading>

<div class="bg" bind:this={bg} />
<div class="parent">
	<div class="sbcont" />

	<div class="sidebar">
		{#each events as event}
			<!-- svelte-ignore a11y-no-static-element-interactions -->
			<div
				class="card"
				style="background-image: url('{event.image}');"
				on:mouseenter={() => {
					setEvent(event);
				}}
				on:mousedown={() => {
					setEvent(event);
				}}
			>
				<p>
					{event.name}
				</p>
			</div>
		{/each}
	</div>
	<div class="content">
		<div class="banner">
			<h1 style="height: {currentEvent.name.length > 25 ? '15rem' : '10rem'};">
				{currentEvent && currentEvent.name}
			</h1>
			<span>{currentEvent.date}</span>
			<p>{currentEvent && currentEvent.about}</p>
			<div class="buttons">
				<a href="#rules" class="a-unset register">LEARN MORE</a>
				<a href="#register" class="a-unset register">REGISTER NOW FOR {currEveFee==0?'FREE':`₹${currEveFee}`}</a>
			</div>
		</div>
		<div class="rulebook" id="rules">
			<div class="structure">
				<!-- {#each Object.keys(currentEvent.rulebook.structure) as struct}
                    <h2>{struct}</h2>
                    {#each currentEvent.rulebook.structure[struct] as point}
                        <li>{point}</li>
                    {/each}
                {/each} -->
				{#if currentEvent.rulebook.structure.length > 0}
					<h2>Structure</h2>
				{/if}
				{#if currentEvent.rulebook.structure}
				{#each currentEvent.rulebook.structure as struct}
					<li class="nodot">{struct}</li>
				{/each}
				{/if}
			</div>
			<div class="rules">
				<h2>Rules</h2>
				{#if currentEvent.rulebook.rules}
				{#each currentEvent.rulebook.rules as struct}
					<li class="nodot">{struct}</li>
				{/each}
				{/if}
			</div>
			<div class="judging">
				<h2>Judging Criteria</h2>
				{#if currentEvent.rulebook.judging}
				{#each currentEvent.rulebook.judging as struct}
					<li class="nodot">{struct}</li>
				{/each}
				{/if}
			</div>
			<div class="prizes">
				<h2>Prizes Worth:</h2>
				{#if currentEvent.rulebook.prizes}
				{#if currentEvent.id.slice(0,1)=='T'}
				{#each currentEvent.rulebook.prizes as struct}
					<li style="list-style: none;">{struct}</li>
				{/each}
				{/if}
				{#if currentEvent.id.slice(0,1)=='C'}
				{#each currentEvent.rulebook.prizes as struct}
					<li>{struct}</li>
				{/each}
				{/if}
				{/if}
			</div>
		</div>
		<div id="register">
			<h2>Organisers</h2>
			<div class="orgcont">
				{#each currentEvent.organisers as p}
					<Person personData={p} />
				{/each}
			</div>
			<div class="button-cont">
				{#if registering || registered}
					<button
						id="regbtn"
						class="register"
						disabled
						style="background-color: aqua;opacity:40%"
						on:click={() => clicked()}
						>{registered ? 'Registered' : 'Register for' + currentEvent.name}</button
					>
				{/if}
				{#if !registering && !registered}
					<button
						id="regbtn"
						class="register"
						on:click={() => {
							clicked();
						}}>{registered ? 'Registered ' : 'Register for ' + currentEvent.name}</button
					>
				{/if}
			</div>
		</div>
	</div>
</div>

<style>
	.button-cont {
		width: 100%;
		display: grid;
		place-items: center;
	}
	.orgcont {
		display: flex;
	}
	#register > h2 {
		text-align: center;
	}
	.nodot {
		list-style-type: none;
	}

	.card {
		width: 90%;
		aspect-ratio: 2;
		background-position: center;
		background-size: cover;
		position: relative;
		cursor: pointer;
		margin: 1em;
		border-radius: 0.4em;
		transition: 200ms ease-in-out;
		overflow: hidden;
	}
	.card::before {
		background: rgb(0, 0, 0);
		background: -moz-linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%);
		background: -webkit-linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%);
		background: linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%);
		content: '';
		position: absolute;
		height: 100%;
		width: 100%;
		transition: 100ms;
	}
	.card:hover {
		transform: scale(1.08) translateX(0px);
		z-index: 100000;
	}
	.card > p {
		position: absolute;
		font-size: 20px;
		bottom: 0;
		left: 1em;
	}
	.register {
		padding: 0.8em;
		padding-inline: 1em;
		background-color: rgba(237, 237, 237, 0.137);
		border-radius: 0.4em;
		border: unset;
		color: white;
		font-size: 20px;
		transition: 200ms ease-in-out;
	}
	.register:hover {
		background-color: rgb(255, 255, 255);
		color: black;
	}
	.bg {
		position: fixed;
		top: 0;
		left: 0;
		height: 100vh;
		width: 100vw;
		background-position: center;
		background-size: cover;
		transition: background-image 2s;
		filter: blur(5px);
	}
	.sidebar {
		overflow-y: scroll;
		height: 100vh;
		width: 25%;
		background-color: #28282d98;
		backdrop-filter: blur(40px);
	}
	.parent {
		display: flex;
		width: 100%;
		/* font-size: 20px; */
	}
	.content {
		z-index: 1;
		padding-top: 5.5em;
		padding-left: 1em;
		position: relative;
		width: 100%;
		display: flex;
		flex-direction: column;
		place-items: center;
		height: 90vh;
		overflow-y: scroll;
	}
	.buttons {
		margin-top: 2rem;
		margin-bottom: 2rem;
	}
	.buttons > a {
		margin-left: 0.75em;
		margin-right: 0.75em;
	}
	.banner > h1 {
		font-size: 4.5vw;
		/* position: absolute;   */
		right: 5vw;
		margin-bottom: -2.33rem;
		margin-top: 1.33rem;
		text-align: center;
	}
	.banner > p {
		margin-top: 2em;
		font-size: 23px;
		width: 90%;
	}
	.banner > span {
		font-size: 20px;
	}
	.rulebook {
		margin-top: 2rem;
		width: 85%;
		font-size: 22px;
	}

	@keyframes banneranim {
		0% {
			background-position: 0 0;
		}
		50% {
			background-position: 100% 100%;
		}
		100% {
			background-position: 0 0;
		}
	}
	.banner {
		display: flex;
		flex-direction: column;
		width: 85%;
		place-items: center;
		background-color: rgba(0, 0, 0, 0.459);
		/*
* Created with https://www.css-gradient.com
* Gradient link: https://www.css-gradient.com/?c1=ab84d1&c2=1422c1&gt=l&gd=dtl
*/
		background: #ab84d14b;
		background: linear-gradient(135deg, #ab84d134, #1422c139);
		backdrop-filter: blur(100px);
		background-size: 150% 150%;
		padding: 1rem;
		border-radius: 12px;
		margin-top: 1em;
		animation: banneranim 5s linear infinite;
	}
	@media (max-width: 600px) {
		/* .sidebar {
			height: 20vh;
			display: flex;
			overflow: auto;
			width: initial;
		}
		.card {
			all: unset;
			width: 30vw;
			background-position: center;
			background-size: cover;
			position: relative;
			cursor: pointer;
		} */
		.sidebar {
			height: 15vh;
			display: flex;
			overflow-x: auto; /* Use overflow-x for horizontal scroll */
			width: 100%; /* Set the sidebar width to 100% of its parent */
		}

		.card {
			all: unset;
			width: 30vw;
			background-position: center;
			background-size: cover;
			position: relative;
			cursor: pointer;
			flex: 0 0 auto; /* Prevent cards from stretching to fill available space */
			margin-right: 10px; /* Add some spacing between cards if needed */
		}

		.parent {
			flex-direction: column-reverse;
			/* width: 100vw; */
		}
		.content {
			height: 75vh;
		}
		.sbcont {
			overflow: scroll;
		}
		.banner {
			margin: 1em;
			width: 90%;
		}
		.content {
			margin: 0;
			padding-left: 0;
		}
		.register {
			display: block;
			margin-bottom: 1em;
		}
		.orgcont {
			display: block;
			padding-left: 25%;
		}
	}
</style>
