<script lang="ts">
	import Bharat from '$lib/assets/Sponsors/Bharat.png';
	import Canara from '$lib/assets/Sponsors/Canara.jpg';
	import Hp from '$lib/assets/Sponsors/Hp.jpg';
	import Pnb from '$lib/assets/Sponsors/Pnb.jpg';
	import Sbi from '$lib/assets/Sponsors/SBI.jpeg';
	import Vasantha from '$lib/assets/Sponsors/Vasantha.jpg';
	import Cazzkaro from '$lib/assets/Sponsors/Cazz_Karo_Logo.png';
	import Chess from '$lib/assets/Sponsors/chess.webp';
	import Abroad from '$lib/assets/Sponsors/abroad.png';
	import Gift from '$lib/assets/Sponsors/Gift.png';
	import ICICI from '$lib/assets/Sponsors/ICICI.jpg';
	import Instrument from '$lib/assets/Sponsors/INSTRUMENT.jpg';
	import NMR from '$lib/assets/Sponsors/NMR.png';
	import Tangle from '$lib/assets/Sponsors/Tangle.jpg';
	import Sponsor from './Sponsor.svelte';
</script>

<h1 id="heading1">
	<span class="atmos" style="color:blueviolet">PETRICHOR'24</span> IS SPONSORED BY
</h1>

<div class="main">
	<Sponsor name="BharatVersity" img={Bharat} title="Title Sponsor" />
	<Sponsor name="Tangle" img={Tangle} title="Powered By" />
</div>

<div id="all">
	<Sponsor name="State Bank of India" img={Sbi} title="Associate Sponsor" />
	<Sponsor name="NMR Uptown" img={NMR} title="Food Partner" />
	<Sponsor name="Punjab National Bank" img={Pnb} title="Associate Sponsor" />
	<Sponsor name="Honeywell Systems" img={Hp} title="Digital Partner" />
	<Sponsor name="Canara Bank" img={Canara} title="Event Sponsor" />
	<Sponsor name="Vasantha" img={Vasantha} title="Event Sponser" />
	<Sponsor name="AECC" img={Abroad} title="Study Abroad Partner" />
	<Sponsor name="ICICI Bank" img={ICICI} title="Event Sponsor" />
	<Sponsor name="Chess.com" img={Chess} title="Event Sponsor" />
	<Sponsor name="Innovative Instruments" img={Instrument} title="Event Sponsor" />
</div>

<h2 id="heading2" class="atmos" style="color:rgb(216, 191, 238)">In Partnership with</h2>

<div id="all1">
	<Sponsor name="Caazkaro" img={Cazzkaro} title="Merch Partner" />
	<Sponsor name="Make Your Own Perfume" img={Gift} title="Gift Partner" />
</div>
<div style="height: 5rem;" />

<style>
	.main {
		width: 100%;
		display: flex;
		justify-content: center;
		gap: 10em;
		margin-bottom: 8em;
	}
	* {
		box-sizing: border-box;
		margin: 0.2rem 0rem;
	}
	#all,
	#all1 {
		display: grid;
		grid-row-gap: 5rem;
		grid-column-gap: 10rem;
		align-items: center;
		justify-content: center;
		grid-template-columns: auto auto auto;
	}
	#all1 {
		grid-template-columns: auto auto;
	}

	#heading1 {
		margin-top: 8rem;
		margin-bottom: 4rem;
		text-align: center;
	}
	#heading2 {
		margin: 4rem;
		text-align: center;
	}
	/* Mobile Version */
	@media screen and (max-width: 960px) and (min-width: 600px) {
		#all,
		.main {
			display: grid;
			grid-template-columns: auto auto;
		}
		#all1 {
			grid-template-columns: auto auto;
		}
	}
	@media screen and (max-width: 600px) {
		#all,
		.main {
			display: grid;
			grid-template-columns: auto;
		}
		#all1 {
			grid-template-columns: auto;
		}
	}
</style>