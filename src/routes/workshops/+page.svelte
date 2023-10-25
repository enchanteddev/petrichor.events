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
            <div class="workshop">
                <div class="about">
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
                            <span class="chip" style="background-color: red;">{ws.date}</span>
                            <span class="chip" style="background-color: black;">{ws.location}</span>
                            <span class="chip" style="background-color: purple;">Register on {ws.regdate}</span>
                            <span class="chip" style="background-color: green;">₹{ws.fees}</span>
                        </div>
                        <button class="butt">Register Now</button>
                    </div>
                    <div class="content">
                        <p>{ws.about}</p>
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
    .debug{
        border: 1px solid white;
    }
    .butt{
        padding: 0.8em;
        padding-inline: 1em;
        background-color: rgba(237, 237, 237, 0.137);
        border-radius: 0.4em;
        border: unset;
        color:white;
        cursor: pointer;
        font-size: 15px;
        margin-top: 1em;
        margin-bottom: 0.5em;
        transition: 200ms ease-in-out;
    }
    .butt:hover{
        background-color: rgb(255, 255, 255);
        color: black
    }
    .workshop{
        display: flex;
        height: 100vh;
    }
    
    .workshop > *{
        width: 50%;
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
        background-color: rgb(118, 118, 255);
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
        margin: 2em;
        border-radius: 2em;
    }
</style>