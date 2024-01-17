<script lang="ts">
	import orma from '$lib/assets/accomodation/Orma.png';
</script>

<div class="flex justify-center items-center h-screen bg-blue-lightest ayush-acc-whole">
	<div class="det">
		<div class="je_acco_banger_title_contaier">
			<h1 class="merch-head atmos">Accomodations</h1>
		</div>
		<div class="mpcst">
			<a style="text-decoration: none; color: white;" href="https://www.google.com/maps/place/Orma+Tourist+Home/@10.7986016,76.6353658,17z/data=!3m1!4b1!4m9!3m8!1s0x3ba871dd92f93f9d:0x5e27e3e37d1d2570!5m2!4m1!1i2!8m2!3d10.7985963!4d76.6379461!16s%2Fg%2F11bzt6stl_?hl=en&entry=ttu" class="orma">
				<div class="ormamap" style="background-image: url({orma});" />
				<p class="ormahead">Orma Tourist Home</p>
			</a>
			<div class="cost">
				<h2>Cost of stay per head:</h2>
				<ul>
					<li style="font-size: large;font-weight:600;">320 for one day</li>
					<li style="font-size: larger;font-weight:600;">610 for two days</li>
					<li style="font-size: x-large;font-weight:600;">900 for three days</li>
				</ul>
			</div>
		</div>
		<div class="book button-85">
			<a class="jj_clean_a" href="https://forms.gle/e3ugEtTcvLsp7dqq7" target="_blank">
				{' '}
				Book Now{' '}
			</a>
		</div>
		<div style="margin-top: 3em;"></div>
		<strong style="margin-left: 2em;">NOTE:</strong>
		<ul>
			<li>Rooms will be on <strong>sharing basis </strong>with other participants of the fest.</li>
			<li>
				If you are travelling in a group, <strong>fill names and make payment together</strong> in one
				single form for allocating rooms together.
			</li>
			<li>Seperate forms to be filled for group of boys & girls.</li>
			<li>
				<strong>Check-In</strong> time will be <strong>2000 hrs</strong> and
				<strong>check-out</strong>
				time be <strong>2000 hrs</strong> the next day. We can adjust the timings according to the rooms
				alloted to different groups. If staying for more than 24 hrs or alloted time then you will have
				to pay for one more day.
			</li>
			<li>
				Food stalls will be available in campus, participants can purchase food of their choice.
			</li>
		</ul>
		<strong style="margin-left: 2em;">TERMS AND CONDITIONS:</strong>
		<ul style="margin-left: -2.5em;">
			<ol>
				<li>Accommodation once booked cannot be cancelled & the amount will NOT be refunded.</li>
				<li>
					ONLY the participants whose names are registered in this form will be allowed into the
					rooms. There will be an allocation list at the hotel for verifying the same.
				</li>
				<li>
					Participants MUST carry a valid govt. ID card (aadhar card/ driving licence/ Ration card/
					Voter Id etc... Pancard not accepted) for verification at the hotel.
				</li>
				<li>
					If the room is not vacated before the corresponding check-out time, an additional amount
					for the next day has to be paid by the participants according to the hotel policies.
				</li>
				<li>
					While checking out, your luggage should also be carried with you and the key must be
					handed over at the reception. Luggages should not be left at the hotel, and failing to
					submit the keys will lead to additional payment.
				</li>
				<li>
					We do not recommend carrying anything expensive. Safety of your belongings is the
					responsibility of the participant.
				</li>
				<li>
					The amount collected in this form is ONLY for accommodation. This rate does not include
					transportation.
				</li>
				<li>The form will be closed if either all the rooms are filled or by 24-01-2024.</li>
			</ol>
			<ul>
				<li>
					Timings of all the events and workshops will be shared by respective organizers before the
					fest. Participants are expected to reach the campus on their own before the event timings
				</li>
			</ul>
		</ul>
	</div>
	</div>


<style>
	.mpcst {
		display: flex;
		flex-direction: row;
	}
	.cost {
		margin-left: 5em;
		height: 20em;
		text-indent: 1em;
		display: inline-block;
		/* background-color: #bdbdbd; */
		background-color: #a492b5;
		width: 18em;
		color: black;
		border-radius: 15%/10%;
		font-family: 'Segoe UI', Arial, sans-serif;
	}
	.cost > h2 {
		margin-top: 3.5em;
	}
	.cost > ul {
		list-style: none;
		margin-left: -1.25em;
	}
	.ormamap {
		width: 40em;
		height: 20em;
		background-size: cover;
		background-repeat: no-repeat;
		border-radius: 5%/10%;
		background-image: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.9));
	}
	.ormahead {
		display: flex;
		align-items: center;
		width: 20em;
		height: 3.5em;
		text-indent: 1em;
		font-weight: 700;
		/* font-family: 'Raleway Bold', Helvetica, Arial, sans; */
		font-size: xx-large;
		z-index: 1000;
		margin-top: -3em;
		text-shadow: 1px 1px 4px black;
		/* background-color: rgba(0, 0, 0, 0.3); */
		background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));
	}
	.ayush-acc-whole {
		line-height: 30px;
		margin-top: 7rem;
		color: white;
	}
	.merch-head {
		text-align: center;
		color: rgb(216, 191, 238);
		font-size: 60px;
	}
	.book {
		background-color: #28282d6c;
		position: relative;
		width: 8rem;
		height: 3rem;
		display: flex;
		align-items: center;
		justify-content: center;
		left: 50%;
		transform: translate(-50%);
		/* margin-bottom: 2rem; */
		border-radius: 15%/40%;
		/* margin-top: -8rem; */
	}
	.book > a {
		text-decoration: none;
		color: white;
	}
	@media (min-width: 600px) {
		.det {
			position: relative;
			left: 50%;
			transform: translate(-50%);
			margin-bottom: 5rem;
			background-color: rgba(0, 0, 0, 0.442);
			width: 70rem;
			padding: 2rem;
			border-radius: 5%/15%;
			opacity: 0.85;
		}
	}

	@media (max-width: 600px) {
		.det {
			margin: 2rem;
		}
		.merch-head {
			font-size: 30px;
			margin-left: -1em;
		}
	}
</style>
