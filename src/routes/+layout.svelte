<script>
	import Icon from 'svelte-awesome/components/Icon.svelte';
	import {
		user,
		shoppingCart,
		mapMarker,
		calendar,
		instagram,
		facebook,
		linkedin,
		twitter,
		youtube,
		alignJustify,
		remove,
	} from 'svelte-awesome/icons';
	import bg from '$lib/assets/dark.jpg';
	import pet from '$lib/assets/pet.png';
	import { isLogin } from '$lib/stores';
	import Loading from '$lib/components/Loading.svelte';

	export let data;
	let hover = false;
	let loading = false;

	import { onMount } from 'svelte';

	let winsize = 3000;
	onMount(() => {
		winsize = window.innerWidth;
	});

	let isVisN = false;
</script>

<Loading spinning={loading} />

<div class="bg">
	{#if data.path != '/' && winsize > 600}
		<div class="nav">
			<nav class="nnav">
				<a class="petimg2" href="/home" style="background-image: url('{pet}');" />
				<div>
					<a
						href="/aboutus"
						on:mouseenter={() => {
							hover = true;
						}}
						on:mouseleave={() => {
							setTimeout(() => {
								hover = false;
							}, 3000);
						}}>AboutUs</a
					>
					{#if hover}
						<div
							class="more"
							on:mouseenter={() => {
								hover = true;
							}}
							on:mouseleave={() => {
								hover = false;
							}}
						>
							<a href="/home#contact">Contact Us</a>
							<a href="https://www.google.com/maps/place/IIT+Palakkad,+Nila+Campus/@10.8077887,76.725758,17z/data=!3m1!4b1!4m6!3m5!1s0x3ba86f48a12144bf:0x4047c5d94954718a!8m2!3d10.8077887!4d76.725758!16s%2Fg%2F11s5xlpyg0?hl=en&entry=ttu">Reach Us</a>
						</div>
					{/if}
				</div>
				<a href="/home#events">Events</a>
				<a href="/workshops">Workshops</a>
				<!-- <a href="/proshows">Proshows</a> -->
				<a href="/sponsors">Sponsors</a>
				<a href="/accomodation">Accomodation</a>
				<a href="/schedule">Schedule</a>
				<a href="/merch">Merch</a>
				<a href={$isLogin ? '/profile' : '/login'} class="login"><Icon data={user} scale={1.6} /></a
				>
			</nav>
		</div>
	{/if}
	{#if data.path != '/' && winsize < 600}
		<nav class="navbar">
			<button
				class="ham"
				on:click={() => {
					isVisN = !isVisN;
				}}><Icon data={isVisN ? remove : alignJustify} scale={isVisN ? 2 : 1.5} /></button
			>
			<ul class="menu-items {isVisN ? 'vis' : ''}">
				<li
					on:click={() => {
						isVisN = false;
					}}
				>
					<a href="/aboutus">About Us</a>
				</li>
				<li
					on:click={() => {
						isVisN = false;
					}}
				>
					<a href="/home"> Home </a>
				</li>
				<li
					on:click={() => {
						isVisN = false;
					}}
				>
					<a href={$isLogin ? '/profile' : '/login'} class="login">{$isLogin ? 'Profile' : 'Login'}</a>
				</li>
				<li
					on:click={() => {
						isVisN = false;
					}}
				>
					<a href="/home#events">Events</a>
				</li>
				<li
					on:click={() => {
						isVisN = false;
					}}
				>
					<a href="/workshops">Workshops</a>
				</li>
				<li
					on:click={() => {
						isVisN = false;
					}}
				>
					<a href="/sponsors">Sponsors</a>
				</li>
				<li
					on:click={() => {
						isVisN = false;
					}}
				>
					<a href="/accomodation">Accomodation</a>
				</li>
				<li
					on:click={() => {
						isVisN = false;
					}}
				>
					<a href="/schedule">Schedule</a>
				</li>
				<li
					on:click={() => {
						isVisN = false;
					}}
				>
					<a href="/merch">Merch</a>
				</li>
				<li
					on:click={() => {
						isVisN = false;
					}}
				>
					<a href="/home#contact">Contact Us</a>
				</li>
				<!-- <li
					on:click={() => {
						isVisN = false;
					}}
				>
					<a href="/reachus">Reach Us</a>
				</li> -->
			</ul>
		</nav>
	{/if}
	<div class="parent">
		<!-- <div class="sidebar">
			<div class="sb-content">
				<div class="up">
					<p>LOGIN</p>
					<a href="/merch"><Icon data={shoppingCart} scale={1.6} /></a>
					<p>MERCH</p>
					<a href="/reachus"><Icon data={mapMarker} scale={1.6} /></a>
					<p>WHERE</p>
					<a href="/reachus"><Icon data={calendar} scale={1.6} /></a>
					<p>WHEN</p>
				</div>
				<div class="dn">
					<a href="insta"><Icon data={instagram} scale={1.6} /></a>
					<a href="insta"><Icon data={facebook} scale={1.6} /></a>
					<a href="insta"><Icon data={linkedin} scale={1.6} /></a>
					<a href="insta"><Icon data={twitter} scale={1.6} /></a>
				</div>
			</div>
		</div> -->
		<div class="main">
			<slot />
			{#if data.path != '/' && data.path != '/events/technical' && data.path != '/events/cultural' && winsize > 600}
				<footer style="padding-top:4em;">
					<div class="address">
						<a
							href="https://www.google.com/maps/place/IIT+Palakkad,+Nila+Campus/@10.8077887,76.725758,17z/data=!3m1!4b1!4m6!3m5!1s0x3ba86f48a12144bf:0x4047c5d94954718a!8m2!3d10.8077887!4d76.725758!16s%2Fg%2F11s5xlpyg0?hl=en&entry=ttu"
							target="_blank">
						<Icon data={mapMarker} scale={1.8} style="display:block;margin-left:0.5em;" class="ic"/>
						<p style="width: 14em;display:block;margin-left: 3em;margin-top:-2em;line-height:.1.3em;text-align:left"
						>
							IIT PALAKKAD, Nila campus, Kanjikode, Kerala 678623
							</p></a
						>
					</div>
						<div class="socials">
							<a href="https://instagram.com/petrichor.iitpkd" target="_blank" class="icon"
								><Icon data={instagram} scale={1.6} class="ico"/></a
							>
							<a href="https://www.linkedin.com/company/petrichor-iitpkd" target="_blank" class="icon"
								><Icon data={linkedin} scale={1.6} /></a
							>
							<a href="https://x.com/Petrichor_IIT" target="_blank" class="icon"
								><Icon data={twitter} scale={1.6} /></a
							>
							<a
								href="https://youtube.com/@petrichoriitpalakkad173?si=hn8YHyfXVcJ_KZUr"
								target="_blank" class="icon"><Icon data={youtube} scale={1.6} class="ico"/></a
							>
						</div>
					<div class="email">
					<a href="mailto:events.petrichor@iitpkd.ac.in">
						<div style="display:inline;margin-left:-2.5em"><i class="fa-solid fa-envelope fa-lg icon"></i></div>
						<a href="mailto:events.petrichor@iitpkd.ac.in" style="margin-left: 0.5em;font-size:large">events.petrichor@iitpkd.ac.in</a></a>
					</div>
				</footer>
			{/if}
			{#if data.path != '/' && data.path != '/events/technical' && data.path != '/events/cultural' && winsize < 600}
				<footer>
					<div class="address">
						<a
							href="https://www.google.com/maps/place/IIT+Palakkad,+Nila+Campus/@10.8077887,76.725758,17z/data=!3m1!4b1!4m6!3m5!1s0x3ba86f48a12144bf:0x4047c5d94954718a!8m2!3d10.8077887!4d76.725758!16s%2Fg%2F11s5xlpyg0?hl=en&entry=ttu"
							target="_blank"
						>Reach Us</a
						>
					</div>
					<div class="address">
						<a href="mailto:events.petrichor@iitpkd.ac.in">Email Us</a>
					</div>
					<div class="address">
						<div class="socials">
							<a href="https://instagram.com/petrichor.iitpkd" target="_blank"
								class="ic"><Icon data={instagram} scale={1.2} /></a
							>
							<a href="https://www.linkedin.com/company/petrichor-iitpkd" target="_blank"
								class="ic"><Icon data={linkedin} scale={1.2} /></a
							>
							<a href="https://x.com/Petrichor_IIT" target="_blank"
								class="ic"><Icon data={twitter} scale={1.2} /></a
							>
							<a
								href="https://youtube.com/@petrichoriitpalakkad173?si=hn8YHyfXVcJ_KZUr"
								target="_blank" class="ic"><Icon data={youtube} scale={1.2} /></a
							>
						</div>
					</div>
				</footer>
			{/if}
		</div>
	</div>
</div>

<style>
	.email{
		margin-left: 10em;
	}
	.ic{
		margin: 0.2em;
	}
	.ic:hover,.icon:hover{
		position: relative;
		scale: 1.4;
		transition: ease 500ms;
	}
	.ham {
		background-color: transparent;
		outline: none;
		border: none;
		color: rgb(144, 144, 144);
		margin-top: 1em;
		margin-left: 0.5em;
	}
	nav {
		position: fixed;
		top: 0;
		z-index: 1000000000000000000;
	}
	.button {
		z-index: 1;
	}
	.menu-items {
		height: 100svh;
		width: 60svw;
		position: absolute;
		top: -1em;
		left: calc(-60svw - 10em);
		background-color: rgba(49, 49, 49, 0.718);
		backdrop-filter: blur(12px);
		z-index: -1;
		list-style: none;
		padding-top: 20svh;
		transition: 200ms ease-in-out;
	}
	.menu-items > li {
		padding-bottom: 1em;
		margin-left: -1em;
		font-size: 25px;
		text-align: center;
	}
	.vis {
		left: 0;
	}
	.bg:after {
		content: '';
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background: rgba(0, 0, 0, 0.1);
		pointer-events: none;
	}
	.bg {
		width: 100vw !important;
		overflow: hidden;
		background-position: center;
		background-size: contain;
	}
	.socials {
		margin-left: 20%;
		width: 60%;
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr;
	}
	footer {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		padding: 2em;
		background-color: rgb(16, 16, 16);
		margin-top: 3em;
	}
	.address > h1,
	p {
		text-align: center;
	}
	.address {
		margin-inline: 1em;
	}
	nav > div {
		position: relative;
	}
	.more {
		position: absolute;
		background-color: rgba(79, 79, 79, 0.454);
		backdrop-filter: blur(12px);
		top: 3em;
		width: 6em;
		padding: 1em;
		padding-top: 0;
		left: -1em;
		border-radius: 1em;
	}
	.more > a {
		display: block;
		margin-top: 1em;
		text-align: left;
	}
	.up > p {
		all: unset;
		margin-bottom: 3em;
		margin-top: 0.2em;
		font-size: 0.6rem;
	}
	.dn > a {
		margin-bottom: 1em;
	}
	.up {
		padding-top: 2em;
	}
	.nnav {
		display: flex;
		justify-content: center;
		height: 4em;
		place-items: center;
		background-color: rgba(79, 79, 79, 0.454);
		backdrop-filter: blur(12px);
		position: fixed;
		top: 0;
		z-index: 4;
		left: 50%;
		transform: translate(-50%, 0);
		border-radius: 100vh;
		margin-top: 1em;
	}
	a {
		color: inherit;
		text-decoration: unset;
		text-align: center;
	}
	a.login {
		width: 4em;
	}
	nav > a {
		width: 7rem;
	}
	.sidebar {
		width: 4em;
		background-color: rgb(21, 21, 21, 0.25);
		backdrop-filter: blur(12px);
		height: 100%;
		position: fixed;
		top: 0;
		/* display: flex; */
		display: none;
		flex-direction: column;
		z-index: 4;
	}
	.petimg {
		height: 4em;
		aspect-ratio: 0.55;
		background-image: url('https://petrichor.events/static/media/logo_red.7a86e334.png');
		background-position: center;
		background-size: 50%;
		background-repeat: no-repeat;
	}
	.petimg2 {
		aspect-ratio: 0.55;
		/* background-image: url("https://petrichor.events/static/media/logo_red.7a86e334.png"); */
		background-position: center;
		background-size: contain;
		background-repeat: no-repeat;
		width: 4em;
	}
	.sb-content {
		flex: 1;
	}
	.up,
	.dn {
		display: flex;
		flex-direction: column;
		text-align: center;
		/* opacity: 0.5; */
	}
	.dn {
		position: fixed;
		bottom: 1em;
		width: 100%;
	}
	.up > a,
	.dn > a {
		opacity: 0.5;
	}
	.up > a:hover,
	.dn > a:hover {
		opacity: 1;
	}
	.parent {
		width: 100vw;
	}
	.main {
		/* margin-left: 4em; */
		z-index: 2;
		width: 100vw;
	}
	.parent {
		background-image: url();
	}
	/* @media (max-width: 600px) {
    nav {
        display: block;
      align-items: center;
      height: auto;
      overflow: hidden;
    }

    nav > a {
      width: auto;
      margin-bottom: 0.5em;
    }

    nav > div {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .more {
      position: static;
      background-color: transparent;
      backdrop-filter: none;
      width: auto;
      padding: 0;
      border-radius: 0;
    }

    .more > a {
      display: block;
      margin-top: 0.5em;
      text-align: center;
    }
  } */
  @media (max-width: 600px){
	.address{
		margin-left: 0em;
	}
	.socials{
		margin-left: 0em;
		margin-top: -0.2em;
	}
	.ic{
		margin: 0.5em;
	}
  }
</style>
