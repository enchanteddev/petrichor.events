<script lang="ts">
	import Person from "$lib/components/Person.svelte";
    import type { event } from "$lib/types";
    import { isLogin } from "$lib/stores";
    
	import { onMount } from "svelte";
	import { API } from "$lib";

    export let data: {[key: string]: event[]};
    let events = data['events'];

    let bg: HTMLDivElement
    let currentEvent: event = events[0];
    onMount(() => {
        bg.style.backgroundImage = `url("${currentEvent.image}")`;
    })

    const setEvent = (event: event) => {
                bg.style.backgroundImage = `url("${event.image}")`;
                currentEvent = event;
                console.log(event.image)
            }

    const clicked = async () => {
        let isLogged= $isLogin; 
        if (!isLogged){
            location.replace('/login')
        } else{
            let ans
            await fetch(API.event,{
                method:'POST',
                headers:{
                    'Accept':'application/json',
                    'Content-type':'application/json',
                },credentials: 'include'
                }).then(res => res.json())
                .then(res => {
                    ans=res
                })
                // @ts-ignore
            if (ans.fee != undefined){
                // @ts-ignore
                if (ans.fee == 0){
                    // Dialog
                    // Apply free event
                    // Show some progress bar till request is finished
                    // Change the status to registered
                }else{
                    // redirect to payment page
                    // once verified , change status of button to registered
                }
            }else{
                alert("Something went wrong! Please try again.");
                setEvent(currentEvent)
            }
        }
    }

</script>

<div class="bg" bind:this={bg}></div>
<div class="parent">
    <div class="sbcont">
    </div>

        <div class="sidebar">
            {#each events as event}   
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <div class="card" style="background-image: url('{event.image}');" on:mouseenter={()=>{setEvent(event)}} on:mousedown={()=>{setEvent(event)}}>
                <p>
                    {event.name}
                </p>
            </div>
            {/each}
        </div>
    <div class="content">
        <div class="banner">
            <h1 style="height: {currentEvent.name.length > 25 ? '15rem' : '10rem'};">{currentEvent && currentEvent.name}</h1>
            <span>{currentEvent.date}</span>
            <p>{currentEvent && currentEvent.about}</p>
            <div class="buttons">
                <a href="#rules" class="a-unset register">LEARN MORE</a>
                <a href="#register" class="a-unset register">REGISTER NOW</a>
            </div>
        </div>
        <div class="rulebook" id="rules">
            <div class="structure">
                <!-- {#each Object.keys(currentEvent.rulebook.structure) as struct}
                    <h2>{struct}</h2>
                    {#each currentEvent.rulebook.structure[struct] as point}
                        <li>{point}</li>
                    {/each}
                {/each} -->
                {#if currentEvent.rulebook.structure.length > 0}
                    <h2>Structure</h2>
                {/if}
                {#each currentEvent.rulebook.structure as struct}
                    <li class="nodot">{struct}</li>
                {/each}
            </div>
            <div class="rules">
                <h2>Rules</h2>
                {#each currentEvent.rulebook.rules as struct}
                    <li class="nodot">{struct}</li>
                {/each}
            </div>
            <div class="judging">
                <h2>Judging Criteria</h2>
                {#each currentEvent.rulebook.judging as struct}
                    <li class="nodot">{struct}</li>
                {/each}
            </div>
            <div class="prizes">
                <h2>Prizes</h2>
                {#each currentEvent.rulebook.prizes as struct}
                    <li>₹{struct}</li>
                {/each}
            </div>
        </div>
        <div id="register">
            <h2>Organisers</h2>
            <div class="orgcont">
                {#each currentEvent.organisers as p}
                    <Person personData={p}/>
                {/each}
            </div>
            <div class="button-cont">
                <button class="register" on:click={clicked}>Register for {currentEvent.name}</button>
            </div>
        </div>
    </div>
</div>


<style>
    .button-cont{
        width: 100%;
        display: grid;
        place-items: center;
    }
    .orgcont{
        display: flex;
    }
    #register > h2{
        text-align: center;
    }
    .nodot{
        list-style-type: none;
    }

    .card{
        width: 90%;
        aspect-ratio: 2;
        background-position: center;
        background-size: cover;
        position: relative;
        cursor: pointer;
        margin: 1em;
        border-radius: 0.4em;
        transition: 200ms ease-in-out;
        overflow: hidden;
    }
    .card::before{
        background: rgb(0,0,0);
        background: -moz-linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%);
        background: -webkit-linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%);
        background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%);
        content: "";
        position: absolute;
        height: 100%;
        width: 100%;
        transition: 100ms;
    }
    .card:hover{
        transform: scale(1.08) translateX(0px);
        z-index: 100000;
    }
    .card > p{
        position: absolute;
        font-size: 20px;
        bottom: 0;
        left: 1em;
    }
    .register{
        padding: 0.8em;
        padding-inline: 1em;
        background-color: rgba(237, 237, 237, 0.137);
        border-radius: 0.4em;
        border: unset;
        color:white;
        font-size: 20px;
        transition: 200ms ease-in-out;
    }
    .register:hover{
        background-color: rgb(255, 255, 255);
        color: black
    }
    .bg{
        position: fixed;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100vw;
        background-position: center;
        background-size: cover;
        transition: background-image 2s;
        filter: blur(5px)
    }
    .sidebar{
        overflow-y: scroll;
        height: 100vh;
        width: 25%;
        background-color: #28282d98;
        backdrop-filter: blur(40px);
    }
    .parent{
        display: flex;
        width: 100%;
        /* font-size: 20px; */
    }
    .content{
        z-index: 1;
        padding-top: 5.5em;
        padding-left: 1em;
        position: relative;
        width: 100%;
        display: flex;
        flex-direction: column;
        place-items: center;
        height: 90vh;
        overflow-y: scroll;
    }
    .buttons{
        margin-top: 2rem;
        margin-bottom: 2rem;
    }
    .buttons > a{
        margin-left: 0.75em;
        margin-right: 0.75em;
    }
    .banner > h1{
        font-size: 4.5vw;
        /* position: absolute;   */
        right: 5vw;
        margin-bottom: -2.33rem;
        margin-top: 1.33rem;
        text-align: center;
    }
    .banner > p{
        margin-top: 2em;
        font-size: 23px;
        width: 90%;
    }
    .banner > span{
        font-size: 20px;
    }
    .rulebook{
        margin-top: 2rem;
        width: 85%;
        font-size: 22px;
    }

    @keyframes banneranim{
        0%{
            background-position: 0 0;
        }
        50%{
            background-position: 100% 100%;
        }
        100%{
            background-position: 0 0;
        }
    }
    .banner{
        display: flex;
        flex-direction: column;
        width: 85%;
        place-items: center;
        background-color: rgba(0, 0, 0, 0.459);
        /*
* Created with https://www.css-gradient.com
* Gradient link: https://www.css-gradient.com/?c1=ab84d1&c2=1422c1&gt=l&gd=dtl
*/
        background: #ab84d14b;
        background: linear-gradient(135deg, #ab84d134, #1422c139);
        backdrop-filter: blur(100px);
        background-size: 150% 150%;
        padding: 1rem;
        border-radius: 12px;
        margin-top: 1em;
        animation: banneranim 5s linear infinite;
    }
    @media (max-width: 600px){
        .sidebar{
            height: 20vh;
            width: max-content;
            display: flex;
            overflow: scroll;
        }
        .parent{
            flex-direction: column-reverse;
            /* width: 100vw; */
        }
        .content{
            height: 70vh;
        }
        .card{
            all: unset;
            width:30vw;
            background-position: center;
            background-size: cover;
            position: relative;
            cursor: pointer;
        }
        .sbcont{
            overflow: scroll;
        }
        .banner{
            margin: 1em;
            width: 90%;
        }
        .content{
            margin: 0;
            padding-left: 0;;
        }
        .register{
            display: block;
            margin-bottom: 1em;
        }
        .orgcont{
            display: block;
            padding-left: 25%;
        }
    }
</style>