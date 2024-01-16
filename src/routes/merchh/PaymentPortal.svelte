<script lang="ts">
	import QRCode from 'qrcode';
    
    export let amount: number;
    export let show: boolean;

    let imgurl: string;
    let dialog: HTMLDialogElement;

    
    $: if (dialog && show) {
        dialog.showModal()
        console.log("AWDAW")
    };
	let qrcodeurl = `upi://pay?pa=9493256601@ibl&pn=******6601&am=${amount}&mc=0000&mode=02&purpose=00`;
    QRCode?.toDataURL(`${qrcodeurl}`, function (err: any, url: string) {
		imgurl = url;
	});
</script>

<dialog bind:this={dialog} on:close={()=>{show=false;}}>
    <img src={imgurl}>
    <div class="pay">
        <p>Scan this to pay for Rs.{amount}</p>
        <p>Transaction Id</p>
        <input type="text">
        <button type="submit">Submit</button>
    </div>
</dialog>

<style>
    dialog[open]{
        display: flex;
        place-items: center;
        background-color: rgb(161, 125, 161);
    }
    img {
        margin-right: 1em;
    }
</style>