<script lang="ts">
	import { goto } from '$app/navigation';
	import { deleteToken } from '$lib';
	import Event from '$lib/components/Event.svelte';
	import { isLogin, registerData, userEmail } from '$lib/stores.js';
	import { Icon } from "svelte-awesome";
	import { powerOff } from "svelte-awesome/icons";
	export let data;
	const { user } = data;
	console.log(user);

	const logout = async () => {
		isLogin.set(false);
		userEmail.set('');
		registerData.set({ eventID: '', registeredEmails: [] });
		deleteToken();
		goto('/');
	};
</script>

<div class="container">
	<div class="blocks details" style="">
		<div class="informations info">
			<!-- Name and Email -->
			<div class="n-email" style="padding-left: 20px; ">
				<div class="name-mail-cont">
					<h1 style="width: 100%; font-weight: bold; margin-bottom: 10px;">Hi, {user.username}</h1>
					<p style="font-size: smaller; width: 100%; margin-top: 5; margin-bottom: 0;">
						{user.email}
					</p>
				</div>
				<button
					class="logout"
					on:click={() => {
						logout();
					}}><Icon data={powerOff} scale={1.4} /></button
				>

			</div>

			<div
				class="user-details"
				style="padding-left: 30px; margin-top: 20px; display: flex; flex-direction: column;"
			>
				<p style="margin-bottom: 5px;">Phone Number</p>
				<h4 style="margin-top: 0; margin-bottom: 10px;">+91 {user.phone}</h4>
			</div>

			<div
				class="user-details"
				style="padding-left: 30px; margin-top: 20px; display: flex; flex-direction: column;"
			>
				<p style="margin-bottom: 5px;">College Name</p>
				<h4 style="margin-top: 0; margin-bottom: 10px;">{user.college}</h4>
			</div>

			<div
				class="user-details"
				style="padding-left: 30px; margin-top: 20px; display: flex; flex-direction: column;"
			>
				<p style="margin-bottom: 5px;">Graduation Year</p>
				<h4 style="margin-top: 0; margin-bottom: 10px;">{user.gradyear}</h4>
			</div>
		</div>
		<!-- <div class="informations" style="display: flex; ">
			<div class="accommodation" style="font-size: large">
				<h1>ACCOMMODATION</h1>
			</div> -->
		<!-- </div> -->
	</div>
	<div
		class="blocks"
		style="background-color: #242424; backdrop-filter: blur(100px); opacity: 1 !important;"
	>
		<div
			class="events_info"
			style="display: flex; width: 100%; justify-content: space-around; font-size: large; padding-left: 10px;"
		>
			<center><h1 class="hover-underline">EVENTS</h1></center>
		</div>
		<div class="cont" style=" overflow: scroll; height: 85%">
			<div class="events_info">
				{#each user.events as event}
				{#if event.eventId.startsWith('T') || event.eventId.startsWith('C')}
				<Event eventId={event.eventId} paymentStatus={event.status} />
				{/if}
				{/each}
			</div>
		</div>
	</div>

	<!-- <div class="blocks" style="background-color: #242424;">
		<div class="informations" style="display: flex; ">
			<div class="accommodation" style="font-size: large">
				<h1 class="hover-underline">MUSICAL NIGHTS</h1>
			</div>
		</div>
		<div class="events_info">
			{#each user.events as event}
				{#if event.eventId.startsWith('W') || event.eventId.startsWith('I')}
					<Event eventId={event.eventId} paymentStatus={event.status} />
				{/if}
			{/each}
		</div>
	</div> -->
</div>

<style>
	/* .events_infop{
		overflow: scroll
	} */
	html {
		zoom: 1 !important;
		transform: scale(1) !important;
	}
	.container {
		display: flex;
		margin-top: 100px;
		/* flex-direction: row;
		justify-content: space-around; */
		height: 100vh;
		width: 99vw;
		overflow: scroll;
	}
	.blocks {
		flex-grow: 1;
		margin: 10px;
		width: 100%;
		margin: 0 20px;
		border-radius: 5%;
		/* opacity: 0.6; */
		backdrop-filter: blur(40px);
	}
	.details {
		display: flex;
		flex-direction: column;
	}
	.info {
		height: 0;
		padding-bottom: 10rem;
	}
	.informations {
		flex-grow: 1;
		/* background-color: no; */
		margin: 10px;
		border-radius: 5%;
	}
	.n-email {
		display: flex;
		align-items: center;

		/* background-color: black; */
		border-radius: 20px;
		/* margin: 10px;
		padding-top: 10px; */
		line-height: 1em;
		height: auto;
		text-align: left;
		position: relative;
		place-items: center;
		padding-bottom: 15px;
	}
	.logout {
		position: absolute;
		text-decoration: none;
		border-radius: 100em;
		align-self: flex-start;
		font-size: smaller;
		margin-top: 10px;
		right: 1em;
		top: 50%;
		translate: 0 -75%;
		padding: 1.25em;
		background-color: #242424;
		border: 1px solid black;
		background-color: inherit;
		border: transparent;
		color: white;
		aspect-ratio: 1;
	}
	.logout:hover {
		cursor: pointer;
	}
	.accommodation {
		display: flex;
		width: 100%;
		justify-content: center;
	}
	.hover-underline {
		text-decoration: none; /* Set default text decoration to none */
	}

	.hover-underline:hover {
		text-decoration: underline;
		text-decoration-color: blue;
		text-decoration-thickness: 4px;
	}

	@media (max-width: 800px) {
		* {
			font-size: small;
		}
		.hover-underline {
			font-size: xx-small;
		}
		.accommodation {
			font-size: xx-small;
		}
		.blocks {
			margin: 5px 5px;
			border-radius: 5%/10%;
			width: 25rem;
		}
		.informations {
			margin: 0px;
			margin-bottom: 5px;
			/* height: 15rem; */
			flex-direction: column;
			border-radius: 5%/10%;
			width: 25rem;
		}
		.info {
			/* height: 15rem; */
		}
		.n-email {
			height: 5rem;
		}
		.container {
			display: flex;
			flex-direction: column;
			overflow: scroll;
			align-items: center;
		}
	}
	@media (max-width: 400px) {
		.blocks,
		.informations {
			width: 25rem;
		}
		.container {
			align-items: first baseline;
		}
	}
</style>
