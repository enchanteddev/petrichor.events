<script lang="ts">
	import type { event } from "$lib/types";
	import { onMount } from "svelte";

    export let data: {[key: string]: event[]};
    let events = data['events'];

    let bg: HTMLDivElement
    let currentEvent: event = events[0];
    onMount(() => {
        bg.style.backgroundImage = `url("${currentEvent.image}")`;
    })

</script>

<div class="bg" bind:this={bg}></div>
<div class="parent">
    <div class="sidebar">
        {#each events as event}   
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <div class="card" style="background-image: url('{event.image}');" on:mouseenter={() => {
            bg.style.backgroundImage = `url("${event.image}")`;
            currentEvent = event;
            console.log(event.image)
        }}>
            <p>
                {event.name}
            </p>
        </div>
        {/each}
    </div>
    <div class="content">
        <div class="banner">
            <h1>{currentEvent && currentEvent.name}</h1>
            <span>{currentEvent.date}</span>
            <p>{currentEvent && currentEvent.about}</p>
            <div class="buttons">
                <a href="#rules" class="a-unset register">LEARN MORE</a>
                <a href="#register" class="a-unset register">REGISTER NOW</a>
            </div>
        </div>
        <div class="rulebook" id="rules">
            <div class="structure">
                {#each Object.keys(currentEvent.rulebook.structure) as struct}
                    <h2>{struct}</h2>
                    {#each currentEvent.rulebook.structure[struct] as point}
                        <li>{point}</li>
                    {/each}
                {/each}
            </div>
            <div class="rules">
                <h2>Rules</h2>
                {#each currentEvent.rulebook.rules as struct}
                    <li>{struct}</li>
                {/each}
            </div>
            <div class="judging">
                <h2>Judging</h2>
                {#each currentEvent.rulebook.judging as struct}
                    <li>{struct}</li>
                {/each}
            </div>
            <div class="prizes">
                <h2>Prizes</h2>
                {#each currentEvent.rulebook.prizes as struct}
                    <li>{struct}</li>
                {/each}
            </div>
        </div>
        <div id="register">
            <h2>Organisers</h2>
            <p>[insert organiser names here]</p>
            <button class="register">Register for {currentEvent.name}</button>
        </div>
    </div>
</div>


<style>
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
    }
    .card::before{
        content: "";
        position: absolute;
        height: 100%;
        width: 0;
        background-color: rgb(255, 151, 255);
        transition: 100ms;
    }
    .card:hover::before{
        width: 0.3em;
    }
    .card > p{
        position: absolute;
        bottom: 0;
        left: 1em;
    }
    .card:hover{
        /* transform: scale(1.2); */
    }
    .register{
        padding: 0.8em;
        padding-inline: 1em;
        background-color: rgba(237, 237, 237, 0.137);
        border-radius: 0.4em;
        border: unset;
        color:white;
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
        height: 90vh;
        width: 20%;
    }
    .parent{
        display: flex;
        width: 100%;
    }
    .content{
        z-index: 100;
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
        font-size: 7em;
        /* position: absolute;   */
        right: 5vw;
        height: 10rem;
        margin-bottom: 0;
        margin-top: 1rem;
    }
    .banner > p{
        margin-top: 2rem;
        font-size: 18px;
        width: 90%;
    }
    .rulebook{
        margin-top: 2rem;
        width: 85%;
        font-size: 20px;
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
</style>