<div class="container">
	<div class="blocks details">
		<div class="informations">
			<!-- Name and Email -->
			<div class="n-email">
				<h2>Hi, Dhruvadeep Malakar</h2>
				<h3 style="font-weight: lighter; ">contact@dhruvadeep.dev</h3>
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
					<h4 class="payments">Payment Verified</h4>
				</div>
				<div class="event-data" style="text-align: left; padding: 0 30px;">
					<h2>Event Name</h2>
					<h3>Event Description</h3>
				</div>
			</div>
			<div class="event-details">
				<div class="event-image">
					<!-- svelte-ignore a11y-img-redundant-alt -->
					<img
						src="https://picsum.photos/200/100"
						style="margin-top: 10px; border-radius: 10px;"
						alt="Image of something"
					/>
					<h4 class="payments">Payment Verified</h4>
				</div>
				<div class="event-data" style="text-align: left; padding: 0 30px;">
					<h2>Event Name</h2>
					<h3>Event Description</h3>
				</div>
			</div>
			<div class="event-details">
				<div class="event-image">
					<!-- svelte-ignore a11y-img-redundant-alt -->
					<img
						src="https://picsum.photos/200/100"
						style="margin-top: 10px; border-radius: 10px;"
						alt="Image of something"
					/>
					<h4 class="payments">Payment Verified</h4>
				</div>
				<div class="event-data" style="text-align: left; padding: 0 30px;">
					<h2>Event Name</h2>
					<h3>Event Description</h3>
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
		height: 100vh;
		width: 100vw;
	}
	.blocks {
		flex-grow: 1;
		margin: 10px;
		width: 100%;
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
		line-height: 0;
		height: 15%;
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
	}
	.event-details .payments {
		background-color: green;
		color: white;
		padding: 10px;
		border-radius: 5px;
		text-align: center;
		flex-grow: 1;
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
