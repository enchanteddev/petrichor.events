<!-- svelte-ignore a11y-media-has-caption -->
<script lang="ts">
	import loading from "$lib/assets/loading.mp4"
	import loopv from "$lib/assets/loopv.mp4"
	import { workshops } from "$lib/data";
	let visible = false;
	let loaded = false;
	setTimeout(() => {visible = true;}, 10)
	setTimeout(() => {loaded = true;}, 8000)
</script>

<div class="main {visible ? "" : "none"}">
	<!-- <video src="https://petrichor.events/static/media/video.95406780.mp4" autoplay muted loop /> -->
	<video class={loaded ? "none" : ""} src={loading} autoplay muted />
	<video class={!loaded ? "none" : ""} src={loopv} autoplay muted loop/>
	<div class="title">
		<div class="imgparent" />
		<div class="tit">
			<h1>PETRICHOR</h1>
			<h1 class="date">2024</h1>
			<div class="bupal">
				<button class="cool">Explore Now</button>
				<button class="cool">Sign Up</button>
			</div>
		</div>
	</div>
	<div class="banner about">
		<h1>ABOUT PETRICHOR</h1>
		<p>
			Petrichor- the annual techno-cultural fest of IIT Palakkad is back again, and better than ever
			before. Also, yes, it's offline. We, the students of IIT Palakkad, conduct Petrichor every
			year, and made sure last year's online event was enthralling for all its participants. Now the
			wait is over; with just the perfect mix of cultural and technical events, we plan on making
			Petrichor'23 an unforgettable experience for you. Trust us when we say that you won't miss out
			on anything. Check out our website as it has answers to all the questions that you might have.
			Stay tuned and brace yourselves for the journey of a lifetime with Petrichor'23!
		</p>
	</div>
	<div class="banner events" id="events">
		<h1 style="margin-bottom: 0;">EVENTS</h1>
		<div class="sel">
			<a href="/events/cultural" class="event">CULTURAL</a>
			<a href="/events/technical" class="event">TECHNICAL</a>
		</div>
	</div>
	<div class="banner workshops">
		<h1>Workshops</h1>
		<div class="wscont">
			{#each workshops.workshops as w}
			<div class="ws" style="background-image: url('{w.image}');">
				<h2>{w.name}</h2>
				<p>{w.about}</p>
			</div>
			{/each}
		</div>
	</div>
	<div class="banner contactus">
		<h1>Contact Us</h1>
		<input type="text" placeholder="Name">
		<input type="text" placeholder="Email">
		<textarea placeholder="Feedback" cols="30"></textarea>
	</div>
</div>

<style>
	.wscont{
		display: flex;
	}
	.ws{
		width: 25em;
		background-color: rgba(128, 128, 128, 0.223);
		padding: 0.5em;
		margin: 1em;
		border-radius: 1em;
		background-position: center;
		background-size: cover;
		color: white;
		transition: 200ms ease;
	}
	input, textarea {
		padding: 1.5%;
		margin: .5%;
		font-size: 24px;
		border-radius: 10rem;
		width: 55%;
		background-color: #40413e;
		border: none;
		color: white;
	}
	textarea{
		height: 30em;
		border-radius: 1em;
		margin-bottom: 1em;
	}
	.ws:hover{
		transform: translateY(-1em);
	}
	.none{
		opacity: 0% !important;
	}
	.main{
		transition: 1000ms;
	}
	.bupal {
		display: flex;
	}
	.bupal > * {
		margin-inline: 10em;
	}
	.tit > h1 {
		margin: 0;
	}
	.tit{
		z-index: 2;

	}
	.title {
		height: 100vh;
		display: flex;
		place-items: center;
		position: relative;
		background-color: black;
	}
	.sel {
		display: flex;
	}
	.event {
		text-decoration: unset;
		text-align: center;
		background-image: url('https://petrichor.events/static/media/pic_2.5393c81e.jpg');
		height: 65vh;
		aspect-ratio: 0.95;
		margin-inline: 1em;
		background-size: cover;
		color: white;
		display: grid;
		place-items: center;
		font-size: 40px;
		filter: grayscale(100%);
		transition: 200ms ease-in;
		font-family: var(--wfont);
	}
	.event:hover {
		filter: grayscale(0%);
	}
	video {
		position: absolute;
		top: 0;
		left: -25vw;
		width: 100vw;
		height: 100vh;
		filter: grayscale(10%);
		/* opacity: 0.75; */
		z-index: 1;
	}
	.about {
		background-color: rgb(255, 255, 255);
		color: black;
	}
	.about > p {
		width: 70%;
		font-size: 20px;
	}
	.workshops {
		background-color: rgb(192, 235, 255);
        color: black;
	}
	.banner {
		z-index: 2;
		display: flex;
		justify-content: center;
		place-items: center;
		position: relative;
		/* height: calc(100vh - 4em); */
		height: 100vh;
		flex-direction: column;
		/* background: white; */
	}
	h1.date {
		font-weight: 100;
		/* text-align: right; */
	}
	.imgparent {
		width: 50vw;
		aspect-ratio: 0.5;
		/* background-image: url('https://petrichor.events/static/media/logo_red.7a86e334.png'); */
		background-size: 45%;
		background-repeat: no-repeat;
		background-position: center;
	}
	img {
		height: 80%;
	}
	h1 {
		font-family: var(--pfont);
		font-size: 100px;
		font-weight: 1000;
	}

	.cool {
		all: unset;
		margin-right: 1em;
		width: 100px;
		height: 30px;
		font-size: 16px;
		background: transparent;
		border: none;
		position: relative;
		color: #f0f0f0;
		cursor: pointer;
		z-index: 1;
		padding: 10px 20px;
		display: flex;
		align-items: center;
		justify-content: center;
		white-space: nowrap;
		user-select: none;
		-webkit-user-select: none;
		touch-action: manipulation;
	}

	.cool::after,
	.cool::before {
		content: '';
		position: absolute;
		bottom: 0;
		right: 0;
		z-index: -99999;
		transition: all 0.4s;
	}

	.cool::before {
		transform: translate(0%, 0%);
		width: 100%;
		height: 100%;
		background: #28282d;
		border-radius: 10px;
	}

	.cool::after {
		transform: translate(5px, 5px);
		width: 0px;
		height: 0px;
		background: #ffffff15;
		backdrop-filter: blur(5px);
		-webkit-backdrop-filter: blur(5px);
		border-radius: 50px;
	}

	.cool:hover::before {
		transform: translate(5%, 20%);
		width: 110%;
		height: 110%;
	}

	.cool:hover::after {
		border-radius: 10px;
		transform: translate(0, 0);
		width: 100%;
		height: 100%;
	}

	.cool:active::after {
		transition: 0s;
		transform: translate(0, 5%);
	}

	@media (max-width: 500px){
        .title, .banner{
            /* width: 100svh; */
			flex-direction: column;
        }
		h1{
			font-size: 35px;
			display: inline;
		}
		video{
			top: -10vh;
			left: 3vw;
			scale: 3;
		}
		.tit{
			width: 90%;
			padding-left: 20%;
		}
		.imgparent{
			aspect-ratio: 0.3;
		}
		p{
			text-align: justify;
		}
		.sel{
			flex-direction: column;
		}
		.event{
			height: 32vh;
			margin-bottom: 1em;
			filter: unset;
		}
    }
</style>
