<script>
	import { userEmail } from '$lib/stores';
	import { onMount } from 'svelte';
	let min = 4;
	let max = 6;

	let emails = Array(max);
	emails[0] = $userEmail;

	onMount(() => {
	    if (!$userEmail){
	        location.replace('/login')
	    }
	})

	function handleSubmit() {
		let emails_filled = emails.filter((v) => v);
		console.log(emails_filled);
		if (emails_filled.length < min) {
			if (
				!confirm(
					'You have not entered the minimum amount of members, do you want to continue with randomly allotted teammates for the slots you have left empty?'
				)
			) {
				return;
			}
		}
		// TODO fetch request
		else {
			let count = 0;
			for (let idx in emails_filled) {
				let email = emails_filled[idx];
				fetch('https://testpetri.onrender.com/api/events/verify', {
					method: 'POST',
					body: JSON.stringify({
						email: email,
						message: 'Verify Email'
					}),
					headers: {
						'Content-type': 'application/json; charset=UTF-8'
					}
				})
					.then((response) => response.json())
					.then((data) => {
						let verified = data.verified;
						if (verified) {
							count += 1;
						} else {
							fetch('https://testpetri.onrender.com/api/events/verify', {
								method: 'POST',
								body: JSON.stringify({
									email: email,
									message: 'Unverified Email'
								}),
								headers: {
									'Content-type': 'application/json; charset=UTF-8'
								}
							});
						}
					});
			}
			if (count == emails_filled.length) {
                //continue to next page
			}
            else{
                location.reload()
            }
		}
	}
</script>

<div class="main">
	<h1>Registering for Event Name [Team Event]</h1>
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
