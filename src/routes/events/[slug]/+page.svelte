<script lang="ts">
	import { page } from '$app/stores';
	import Loading from '$lib/components/Loading.svelte';
	import Person from '$lib/components/Person.svelte';
	import { closedRegistrations } from '$lib/data'
	import type { event } from '$lib/types';
	import { isLogin, registerData, userEmail } from '$lib/stores';
	import { readToken, readID, POST, titleCase } from '$lib/index';

	import { onMount } from 'svelte';
	import { API } from '$lib';
	import { goto } from '$app/navigation';

	export let data: any;
	let events = data['nofee']['events'];
	let events1 = data['withfee']
	let loading = false
	let registeredEvents:Array<string>

	
	$: {
		console.log('$isLogin:', $isLogin, $userEmail);
	}
	
	let bg: HTMLDivElement;
	let currentEvent: event = events[data.eventID];
	let registered = false;
	onMount(() => {
		bg.style.backgroundImage = `url("${currentEvent.image}")`;
		setEvent(currentEvent)
		let local=window.localStorage.getItem("registeredEvents")?.split(",")
		if (local){
			registeredEvents = local;
		}
	});

	let registering = false;

	let currEveFee = events1[parseInt(currentEvent.id.slice(2))].fees
	let content: HTMLDivElement;
	const setEvent = (event: event) => {
		registering = false;
		bg.style.backgroundImage = `url("${event.image}")`;
		currentEvent = event;
		let eventId = currentEvent.id.slice(2)
		currEveFee = events1[parseInt(eventId)].fees
		registered=false	
		if(registeredEvents?.includes(event.id)){
			registered=true
		}
		// registeredEvents.forEach(element =>{
		// 	if(element == event.id){
		// 		registered=true
		// 	}
		// })
		console.log(eventId)
		if (content){
			content.scrollTo(0, 0)
		}
	};

	const clicked = async () => {
		if (!$isLogin) {
			loading = true
			goto(`/login?nextpg=${$page.url.pathname + $page.url.search}`);
		} else {
			$registerData.eventID = currentEvent.id;
			$registerData.registeredEmails = [$userEmail];
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
								// userEvents.update(value => [...value, currentEvent.id])
								alert('Registration successfull');
								registeredEvents.push(currentEvent.id)
								window.localStorage.setItem("registeredEvents",(registeredEvents).toString())
								registered = true;
							} else {
								alert('Registration Unsuccessfull! Please try Again');
							}
						});
					setEvent(currentEvent);
				} else {
					loading = true
					if ($userEmail.endsWith('smail.iitpkd.ac.in')){
						const response = await POST(API.events_apply_paid, {
							transactionID: '',
							CAcode: '',
							token: readToken(),
							eventId: currentEvent.id,
							participants: [$userEmail]
						})

						const result = await response.json()
						if (result.status == 200){
							alert("Event applied, no need to pay as all participants from IIT Palakkad")
							goto('/profile')
						}
					} else {
						goto(`/payment?id=${currentEvent.id}`);
					}
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
		{#each events as event, index}
			<!-- svelte-ignore a11y-no-static-element-interactions -->
			<div
				class="card"
				style="background-image: url('{event.image}');"
				on:mouseenter={() => {
					setEvent(event);
					let query = new URLSearchParams($page.url.searchParams.toString());
					query.set('id', index.toString());
					goto(`?${query.toString()}`);

				}}
				on:mousedown={() => {
					setEvent(event);
					let query = new URLSearchParams($page.url.searchParams.toString());
					query.set('id', index.toString());
					goto(`?${query.toString()}`);

				}}
			>
				<p class="atmos"> 
					{event.name}
				</p>
			</div>
		{/each}
	</div>
	<div class="content" bind:this={content}>
		<div class="banner">
			<h1 class="atmos" style="height: {currentEvent.name.length > 18 ? '14rem' : '10rem'};">
				{currentEvent && currentEvent.name}
			</h1>
			<span class="date">{currentEvent.date}</span>
			{#if currentEvent.theme}
			<h2>THEME</h2>
			<p style="margin-top: -1rem;">{currentEvent.theme}</p>
			{/if}
			<p>{currentEvent && currentEvent.about}</p>
			<div class="buttons">
				<a href="#rules" class="a-unset register">LEARN MORE</a>
				{#if closedRegistrations.includes(currentEvent.id)}
					<!-- svelte-ignore a11y-missing-attribute -->
					<a class="a-unset register">Registrations Closed</a>
				{:else}
					<a href="#register" class="a-unset register">REGISTER NOW FOR {currEveFee==0?'FREE':`₹${currEveFee}`}</a>
				{/if}
			</div>
		</div>
		<div class="rulebook" id="rules">
			<div class="structure">
				<!-- {#each Object.keys(currentEvent.rulebook.structure) as struct}
                    <h2>{titleCase(struct)}</h2>
                    {#each currentEvent.rulebook.structure[struct] as point}
                        <li>{point}</li>
                    {/each}
                {/each} -->
				{#if currentEvent.rulebook.structure.length > 0}
					<h2>STRUCTURE</h2>
				{/if}
				{#if currentEvent.rulebook.structure}
				{#each currentEvent.rulebook.structure as struct}
					<li class="nodot">{titleCase(struct)}</li>
				{/each}
				{/if}
			</div>
			<div class="rules">
				<h2>RULES</h2>
				{#if currentEvent.rulebook.rules}
				{#each currentEvent.rulebook.rules as struct}
					<li class="nodot">{titleCase(struct)}</li>
				{/each}
				{/if}
			</div>
			<div class="judging">
				<h2>JUDGING CRITERIA</h2>
				{#if currentEvent.rulebook.judging}
				{#each currentEvent.rulebook.judging as struct}
					<li class="nodot">{titleCase(struct)}</li>
				{/each}
				{/if}
			</div>
			<div class="prizes">
				<h2>PRIZES WORTH</h2>
				{#if currentEvent.rulebook.prizes}
				{#if currentEvent.id.slice(0,1)=='T'}
				{#each currentEvent.rulebook.prizes as struct}
					<li style="list-style: none;">{titleCase(struct)}</li>
				{/each}
				{/if}
				{#if currentEvent.id.slice(0,1)=='C'}
				{#each currentEvent.rulebook.prizes as struct, index}
					<li style="font-size: 22px; list-style: none; font-weight: 400">Prize for position {index + 1} : {titleCase(struct)}</li>
				{/each}
				{/if}
				{/if}
			</div>
		</div>
		<div id="register">
			<h2 >ORGANISERS</h2>
			<div class="orgcont">
				{#each currentEvent.organisers as p}
					<Person personData={p} />
				{/each}
			</div>
			{#if closedRegistrations.includes(currentEvent.id)}
				<div class="button-cont">
					<button class="register">Registrations Closed</button>
				</div>
			{:else}
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
			{/if}
		</div>
	</div>
</div>

<style>
	.banner > h1{
		font: var(--sfont);
	}
	.button-cont {
		width: 100%;
		display: grid;
		place-items: center;
		margin-bottom: 3em;
		margin-top: 1em;
	}
	.orgcont {
		display: flex;
		justify-content: center;
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
		filter: blur(5px) brightness(50%);
	}
	.sidebar {
		scrollbar-width: none;  /* Firefox */
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
		background-color: rgba(0, 0, 0, 0.146);
		/*
		* Created with https://www.css-gradient.com
		* Gradient link: https://www.css-gradient.com/?c1=ab84d1&c2=1422c1&gt=l&gd=dtl
		*/
		/* background: #ab84d14b; */
		/* background: linear-gradient(135deg, #ab84d134, #1422c139); */
		backdrop-filter: blur(100px);
		background-size: 150% 150%;
		padding: 1rem;
		border-radius: 12px;
		margin-top: 1em;
		/* animation: banneranim 5s linear infinite; */
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
		.banner > h1{
			font-size: 28px;
		}
		.date{
			margin-top: -3em;
		}
		.content {
			z-index: 1;
			padding-top: 2em;
		}
		.sidebar {
			height: 17svh;
			display: flex;
			overflow-x: auto; /* Use overflow-x for horizontal scroll */
			width: 97%; /* Set the sidebar width to 100% of its parent */
			margin: 0 0.5em;
		}

		.card {
			all: unset;
			width: 12rem;
			background-position: center;
			background-size: cover;
			position: relative;
			cursor: pointer;
			flex: 0 0 auto; /* Prevent cards from stretching to fill available space */
			margin-right: 10px; /* Add some spacing between cards if needed */
		}
		.card > p {
			font-size: 17px;
		}

		.parent {
			flex-direction: column-reverse;
			/* width: 100vw; */
		}
		.content {
			height: 79svh;
			overflow-x: hidden;
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
			text-align: center;
		}
		.orgcont {
			display: block;
			padding-left: 25%;
		}
	}
</style>
