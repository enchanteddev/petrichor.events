<script lang="ts">
	import Canara from '$lib/assets/Sponsors/Canara.jpg'
	import Hp from '$lib/assets/Sponsors/Hp.jpg'
	import Pnb from '$lib/assets/Sponsors/Pnb.jpg'
	import Sbi from '$lib/assets/Sponsors/Sbi.jpg'
	import Vasantha from '$lib/assets/Sponsors/Vasantha.jpg'
	import Cazzkaro from '$lib/assets/Sponsors/Cazzkaro.jpeg'
</script>

<h1 id="heading1"><span style="color:blueviolet">PETRICHOR'24</span> IS SPONSORED BY</h1>

<div id="all">
	<div id="pnbSponsor" class="sponsor">
		<div class="title">Associate Sponsor</div>
		<div class="img" style="background-image:url({Pnb})"/>
		<div class="name">Punjab National Bank</div>
	</div>
	<div id="vasanthaSponsor" class="sponsor">
		<div class="title">Event Sponsor</div>
		<div class="img" style="background-image:url({Vasantha})"/>
		<div class="name">Vasantha</div>
	</div>
	<div id="sbiSponsor" class="sponsor">
		<div class="title">Associate Sponsor</div>
		<div class="img" style="background-image:url({Sbi})"/>
		<div class="name">State Bank of India</div>
	</div>
	<div id="canaraSponsor" class="sponsor">
		<div class="title">Event Sponsor</div>
		<div class="img" style="background-image:url({Canara})"/>
		<div class="name">Canara Bank</div>
	</div>
	<div id="honeywellSponsor" class="sponsor">
		<div class="title">Digital Partner</div>
		<div class="img" style="background-image:url({Hp})"/>
		<div class="name">Honeywell Systems</div>
	</div>
</div>

<h2 id="heading2" style="color: aqua;">In Partnership with</h2>

<div id="all1">
	<div id="cazzkaro" class="sponsor">
		<div class="title">Only Partner</div>
		<div class="img" style="background-image:url({Cazzkaro})"/>
		<div class="name">Cazzkaro</div>
	</div>
</div>
<div style="height: 5rem;" />

<style>
	#pnbSponsor {
		grid-area: pnb;
	}
	#vasanthaSponsor {
		grid-area: vasantha;
	}
	#sbiSponsor {
		grid-area: sbi;
	}
	#canaraSponsor {
		grid-area: canara;
	}
	#honeywellSponsor {
		grid-area: honeywell;
	}
	#cazzkaro{
		grid-area: cazzkaro;
	}

	* {
		box-sizing: border-box;
		margin: 0.2rem 0rem;
	}
	#all,#all1 {
		display: grid;
		grid-row-gap: 5rem;
		grid-column-gap: 10rem;
		align-items: center;
		justify-content: center;
	}
	#all{
		grid-template-areas:
			'pnb vasantha sbi'
			'canara honeywell honeywell';
	}
	#all1{
		grid-template-areas: 
		'cazzkaro';
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

	.sponsor > .title {
		width: 200px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.sponsor > .name {
		width: 200px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.sponsor > .img {
		display: flex;
		justify-content: center;
		align-items: center;
		background-repeat: no-repeat;
		background-size: contain;
		background-position: center;
		height: 200px;
		width: 200px;
	}

	/* Mobile Version */
	@media screen and (max-width: 960px) and (min-width: 600px) {
		#all{
			grid-template-areas:
				'pnb vasantha'
				'sbi canara'
				'honeywell honeywell';
		}
		#all1{
			grid-template-areas: 'cazzkaro';
		}
	}
	@media screen and (max-width: 600px) {
		#all{
			grid-template-areas:
				'pnb'
				'vasantha'
				'sbi'
				'canara'
				'honeywell';
		}
		#all1{
			grid-template-areas: 'cazzkaro';
		}
	}
</style>
