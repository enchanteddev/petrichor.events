<script lang="ts">
	import { API, POST, readToken } from '$lib';
    import QRCode from 'qrcode';
	import { onMount } from 'svelte';
    
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

    let progress = 0;

    onMount(async() => {
        const res = await POST(API.hasAddress, {token: readToken()});
        const hasAddressJson = await res.json()
        if (hasAddressJson.status == 500){
            alert(hasAddressJson.message)
            return
        }
        const hasAddress = hasAddressJson.hasaddress;
        if (hasAddress){
            progress = 1;
            address = hasAddressJson.address
            pincode = hasAddressJson.pincode
        } else {
            progress = 0
        }
    })

    let address = '';
    let pincode: number = 0;
</script>

<dialog bind:this={dialog} on:close={()=>{show=false;}}>
    {#if progress == 0}
    <form class="address">
        <h1>Add your Address ({progress + 1}/3)</h1>
        <strong>Address</strong>
        <textarea cols="50" rows="10" bind:value={address}/>
        <strong>PIN Code</strong>
        <input type="text" pattern="[0-9]{6}" bind:value={pincode}>
        <button class="button-85" type="submit" on:submit={async () => {
            if (address && (100000 <= pincode && pincode <= 999999)){
                const response = await POST(API.addAddress, {
                    address: address,
                    pincode: pincode,
                    token: readToken()
                });
                const result = await response.json()
                if (result.status == 200){
                    progress = 1;
                } else {
                    alert(result.message);
                }
            }
        }}>Next</button>
        <button class="button-85" type="submit" on:submit={async () => {
            
        }}>Collect from IIT Palakkad (Nila Campus)</button>
    </form>
    {/if}

    {#if progress == 1}
        <h1>Confirm your address</h1>
        <p>{address}</p>
        <p>{pincode}</p>
        <button class="button-85" on:click={() => {progress = 2}}>Confirm</button>
    {/if}
    
    {#if progress == 2}
        <img src={imgurl} alt="QR">
        <div class="pay">
            <p>Scan this to pay for Rs.{amount}</p>
            <p>Transaction Id</p>
            <input type="text">
            <button type="submit">Submit</button>
        </div>
    {/if}
</dialog>

<style>
    .address{
        display: flex;
        flex-direction: column;
    }
    textarea, .address > input{
        background-color: transparent;
        color: white;
        border: 1px solid white;
        outline: transparent;
        border-radius: 1em;
    }
    textarea{
        resize: none;
        font: inherit;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        margin-bottom: 1em;
        padding: 1em;
    }
    .address > input{
        padding: 0.5em;
        margin-bottom: 3em;
        padding-inline: 1em;
        border-radius: 0.5em;
    }
    
    dialog[open]{
        display: flex;
        flex-direction: column;
        place-items: center;
        background-color: rgba(64, 64, 64, 0.337);
        color: white;
        border-radius: 1em;
        padding: 2em;
        backdrop-filter: blur(12px);
    }
    img {
        margin-right: 1em;
    }
</style>