<script lang="ts">
	import { goto } from "$app/navigation";
	import { API } from "$lib";
	import { redirect } from "@sveltejs/kit";
	import { onMount } from "svelte";
	import type { key } from "svelte-awesome/icons";

	let user:{[key:string]:any}={}
	
	const authenticate =async () => {
		console.log("Hekk")
		await fetch(API.user,{
		method:'POST',
		headers:{
			'Accept':'application/json',
			'Content-type':'application/json',
		},credentials: 'include'
		}).then(res => res.json())
		.then(res => {
			console.log(res)
			if(res.status == 404){
				goto('/login')
			}
			else{
				user=res.response
			}
		})

	}
	console.log("pp")

	onMount(async () => {
		
		authenticate()})
</script>
<div class="container">
	<div class="blocks details">
		<div class="informations" style="height: 0; padding-bottom: 10px;">
			<!-- Name and Email -->
			<div class="n-email" style="padding-left: 20px;">
				<h1 style="width: 100%; font-weight: bold; margin-bottom: 10px;">Hi, {user.username}</h1>
				<p style="font-size: smaller; width: 100%; margin-top: 5; margin-bottom: 0;">
					{user.email}
				</p>
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
		<div class="informations" style="display: flex; ">
			<div class="accommodation" style="font-size: large">
				<h1>ACCOMMODATION</h1>
			</div>
		</div>
	</div>
	<div class="blocks" style="background-color: #242424;">
		<div
			class="events_info"
			style="display: flex; width: 100%; justify-content: space-around; font-size: large; padding-left: 10px;"
		>
			<h1 class="hover-underline">EVENTS</h1>
			<h1 class="hover-underline">WORKSHOPS</h1>
		</div>

		<div class="events_info">
			<div class="event-details">
				<div class="event-image">
					<!-- svelte-ignore a11y-img-redundant-alt -->
					<img
						src="https://picsum.photos/200/100"
						style="margin-top: 10px; border-radius: 10px;"
						alt="Image of something"
					/>
					<h4 class="payments" style="background-color: green;">Payment Verified</h4>
				</div>
				<div class="event-data" style="text-align: left; padding: 0 30px;">
					<div>
						<h4>Labyrinth</h4>
						<p>Technical</p>
					</div>
					<div>
						<h4>Sat, 20 Jan, 2024 | 10:00 AM</h4>
						<p>Nila Campus</p>
					</div>
					<div class="contact-info" style="padding-top: 20px; width:100%; text-align:right;">
						<a href="/contacts" style=" text-decoration: none;">Contact US</a>
					</div>
				</div>
			</div>
			<div class="event-details">
				<div class="event-image">
					<!-- svelte-ignore a11y-img-redundant-alt -->
					<img
						src="https://picsum.photos/200/102"
						style="margin-top: 10px; border-radius: 10px;"
						alt="Image of something"
					/>
					<h4 class="payments" style="background-color: red;">Payment Failed</h4>
				</div>
				<div class="event-data" style="text-align: left; padding: 0 30px;">
					<div>
						<h4>Tessaract</h4>
						<p>Technical</p>
					</div>
					<div>
						<h4>Sat, 20 Jan, 2024 | 1:00 PM</h4>
						<p>Nila Campus</p>
					</div>
					<div class="contact-info" style="padding-top: 20px; width:100%; text-align:right;">
						<a href="/contacts" style=" text-decoration: none;">Contact US</a>
					</div>
				</div>
			</div>
			<div class="event-details">
				<div class="event-image">
					<!-- svelte-ignore a11y-img-redundant-alt -->
					<img
						src="https://picsum.photos/200/101"
						style="margin-top: 10px; border-radius: 10px;"
						alt="Image of something"
					/>
					<h4 class="payments" style="background-color: orange;">Payment Pending</h4>
				</div>
				<div class="event-data" style="text-align: left; padding: 0 30px;">
					<div>
						<h4>Studying</h4>
						<p>Padhai Karo</p>
					</div>
					<div>
						<h4>Sat, 20 Jan, 2024 | 3:00 PM</h4>
						<p>Nila Campus</p>
					</div>
					<div class="contact-info" style="padding-top: 20px; width:100%; text-align:right;">
						<a href="/contacts" style=" text-decoration: none;">Contact US</a>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="blocks" style="background-color: #242424;">
		<div class="informations" style="display: flex; ">
			<div class="accommodation" style="font-size: large">
				<h1>PROSHOWS</h1>
			</div>
		</div>
	</div>
</div>

<style>
	.container {
		display: flex;
		margin-top: 100px;
		/* flex-direction: row;
		justify-content: space-around; */
		height: 100vh;
		width: 99vw;
	}
	.blocks {
		flex-grow: 1;
		margin: 10px;
		width: 100%;
		margin: 0 20px;
		border-radius: 5%;
	}
	.details {
		display: flex;
		flex-direction: column;
	}
	.informations {
		flex-grow: 1;
		background-color: #242424;
		margin: 10px;
		border-radius: 5%;
	}
	.n-email {
		display: flex;
		flex-direction: column;

		align-items: center;

		background-color: #333232;
		border-radius: 20px;
		margin: 10px;
		padding-top: 10px;
		line-height: 0;
		height: 80px;
		text-align: left;
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
