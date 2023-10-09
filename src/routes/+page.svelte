<script lang="ts">
	import { onMount } from "svelte";
	
	let plang: any = {
		english: 'PETRICHOR',
		hindi: 'पेट्रीकोर',
		tamil: 'பெட்ரிகோர்',
		gujrati: 'પેટ્રિકોર',
		malayalam: 'പെട്രിക്കോർ',
		bengali: 'পেট্রিকোর',
		telugu: 'పెట్రికోర్',
		punjabi: 'ਪੈਟ੍ਰਿਕੋਰ'
	};
	let langs = Object.keys(plang);
	let curr_lang_index = 0;
	let curr_petr_phrase = 'PETRICHOR';
	
	let isPhone = false
	let mouse: HTMLDivElement
	onMount(() => {
		window.location.replace('/events')
		isPhone = document.body.clientWidth < 500
		document.onmousemove = (e) => {
			mouse.style.left = `${e.clientX}px`
			mouse.style.top = `${e.clientY}px`
		}
		hovering = true
	})

	let tooltip_text = 'Petrichor in english';
	const setLang = () => {
		if (!hovering && !isPhone) {
			return;
		}
		curr_lang_index++;
		if (curr_lang_index >= langs.length) {
			curr_lang_index = 0;
		}
		ptext.style.filter = 'blur(2svw)';
		setTimeout(() => {
			curr_petr_phrase = plang[langs[curr_lang_index]];
			ptext.style.filter = '';
			tooltip_text = `Petrichor in ${langs[curr_lang_index]}`
		}, 300);
	};

	let tttf = tooltip_text

	const setTttf = () => {
		tttf = glitchify(tooltip_text, 10)
	}
	setInterval(setTttf, 100)
	

	const glitchify = (text: string, k: number) => {
		if (k < 1 || k > 100) {
			return 'k must be between 1 and 100';
		}

		// Calculate the number of characters to replace
		const numCharsToReplace = Math.floor((k / 100) * text.length);

		// Create an array of characters to choose from for replacement
		const charSet = '!@#$%^&*()1234567890-=`~[]{}"\';:,./<>?|\\';

		// Convert the input string to an array of characters for easier manipulation
		const stringArray = text.split('');

		// Replace random characters with random letters and numbers
		for (let i = 0; i < numCharsToReplace; i++) {
			const randomIndex = Math.floor(Math.random() * text.length);
			const randomChar = charSet[Math.floor(Math.random() * charSet.length)];
			stringArray[randomIndex] = randomChar;
		}

		// Join the modified array back into a string and return
		return stringArray.join('');
	};

	let hovering = false;
	let ptext: HTMLDivElement;
	setInterval(setLang, 2000);
</script>

<div class="main" style="--p: '{curr_petr_phrase}'">
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div
		bind:this={ptext}
		class="petr"
		
	>
		{curr_petr_phrase}
	</div>
	<span>{tttf}</span>
</div>

<div class="mouse" bind:this={mouse}>
	EXPLORE
</div>

<style>
	.main {
		width: 100svw;
		height: 100svh;
		background-color: black;
		display: grid;
		place-items: center;
	}
	.mouse{
		cursor: none;
		position: absolute;
		top: 0;
		left: 0;
		transform: translate(-50%, -50%);
		z-index: 100;
		background-color: white;
		height: 10em;
		aspect-ratio: 1;
		border-radius: 100vh;
		color: black;
		display: grid;
		place-items: center;
	}
	.petr {
		font-weight: 800;
		font-size: 12svw;
		font-family: var(--wfont);
		position: relative;
		z-index: 1;
		transition: 300ms linear;
		animation: glitch 400ms linear infinite;
	}
	.petr::after {
		content: var(--p);
		font: inherit;
		color: #df1f2d;
		position: absolute;
		top: 0;
		left: -0;
		z-index: -1;
		transition: 200ms ease-in-out;
		filter: blur(4px);
		top: 3%;
		left: -0.3%;
	}
	.petr::before {
		content: var(--p);
		font: inherit;
		color: #2b3784;
		position: absolute;
		top: 0;
		left: 0;
		z-index: -1;
		transition: 200ms ease-in-out;
		filter: blur(4px);
		top: -3%;
		left: 0.3%;
	}
	.petr:hover::after {
	}
	.petr:hover::before {
	}

	span {
		font-size: 30px;
		position: absolute;
		left: 50%;
		top: 75%;
		z-index: 2;
		font-family: monospace;
		transform: translate(-50%, -50%);
		background-color: black;
		padding: 0.5em;
		padding-inline: 1em;
		border-radius: 1em;
		opacity: 0.4;
		width: max-content;

	}

	@media(max-width: 500px){
		span{
			font-size: 15px;
		}
	}

	@keyframes glitch {
		2%,
		64% {
			transform: translate(.1%, 0) skew(0deg);
		}
		4%,
		60% {
			transform: translate(-.1%, 0) skew(0deg);
		}
		62% {
			transform: translate(0, 0) skew(10deg);
		}
	}
</style>
