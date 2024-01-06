<script lang="ts">
	import type { workshop } from "$lib/types";
    export let data;
    let workshops: workshop[]
    $: workshops  = data.workshops
</script>

<div class="main">
    <div style="height: 5em;"></div>
    <div class="workshops">
        {#each workshops as ws}
            <div class="workshop" id="{ws.name}">
                <div class="about" >
                    <div class="banner">
                        <h1>{ws.name}</h1>
                        <hr>
                        <p style="font-style: italic;">By
                            {#each ws.speakers as spk, i}
                                <span><strong>{spk}</strong>  {i == ws.speakers.length - 1 ? "" : (
                                    i < ws.speakers.length - 2 ? "," : "and"
                                )} </span>
                            {/each}
                        </p>
                        <div class="chips">
                            {#each ws.topics as topic}
                                <span class="chip">{topic}</span>
                            {/each}
                        </div>
                        <p>Happening on <strong style="color:cyan">{ws.date}</strong> at <strong style="color:lightgreen">{ws.location}</strong></p>
                        <p>{ws.about}</p>
                        <a href="/payment?id={ws.id}" class="butt">Register Now for ₹{ws.fees}</a>
                        <p style="color: orange;">Some knowledge in
                            {#each ws.prereq as spk, i}
                                <span><strong>{spk}</strong>  {i == ws.prereq.length - 1 ? "" : (
                                    i < ws.prereq.length - 2 ? "," : "and "
                                )} </span>
                            {/each} is expected.
                        </p>
                    </div>
                </div>
                <div class="img" style="background-image: url('{ws.image}');"></div>
            </div>
        {/each}
    </div>
</div>

<style>
    .main{
        background-color: #242020;
    }
    .workshop .img{
        background-position: center;
        background-repeat: no-repeat;
    }
    .debug{
        border: 1px solid white;
    }
    .butt{
        display: block;
        width: fit-content;
        text-decoration: unset;
        padding: 0.8em;
        padding-inline: 1em;
        background-color: rgb(255, 255, 255);
        border-radius: 0.4em;
        border: unset;
        color:rgb(0, 0, 0);
        cursor: pointer;
        font-size: 15px;
        margin-top: 1em;
        margin-bottom: 0.5em;
        transition: 200ms ease-in-out;
    }
    .butt:hover{
        background-color: rgb(110, 255, 173);
        color: rgb(0, 0, 0)
    }
    .workshop{
        display: flex;
        height: 80vh;
    }
    
    .workshop > *{
        width: 50%;
    }
    .about{
        width: 60%;
    }
    .img{
        width: 40%;
    }
    .workshop:nth-child(even){
        display: flex;
        flex-direction: row-reverse;
        background-color: rgb(115, 76, 160);
        /* color: black */
    }
    .workshop:nth-child(odd){
        display: flex;
    }
    .banner{
        margin: 2em;
        background-color: rgba(0, 0, 0, 0.41);
        /* display: flex;
        flex-direction: column; */
        border-radius: 2em;
        padding: 1em;
        padding-inline: 2em;
        color: white;
    }
    .content{
        margin: 3em;
        text-align: justify;
    }
    .chip{
        padding: 0.2em;
        padding-inline: 1em;
        background-color: rgb(83, 83, 215);
        margin-right: 1em;
        border-radius: 1em;
        margin-bottom: .7em;
    }
    .chips{
        display: flex;
        flex-wrap: wrap;
    }
    .img{
        background-size: cover;
        background-position: 20%;
        margin: 2em;
        border-radius: 2em;
    }

    @media (max-width: 1000px){
        .banner{
            margin: 0em;
        }
        .img{
            margin: 2em 0.5em;
        }
        *{
            /* font-size: smaller;   // try this also*/ 
            font-size: small; 
        }
        .workshop{
            height: 50%;
        }
    }
</style>