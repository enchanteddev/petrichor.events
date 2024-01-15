<script lang="ts">
    import type {informal} from '$lib/types'
    export let data;
    let informals: informal[]
    $: informals  = data.inf
</script>

<div class="main">
    <div style="height: 5em;"></div>
    <div class="informals">
        {#each informals as ws}
            <div class="informal" id="{ws.name}">
                <div class="about" >
                    <div class="banner">
                        <h1 >{ws.name}</h1>
                        <hr>
                        <p class="happening">Happening on <strong class="happening" style="color:cyan">{ws.date}</strong> at <strong class ="happening" style="color:lightgreen">{ws.location}</strong></p>
                        <p class="abouttext">{ws.about}</p>
                        {#if ws.registerLink}
                            <a href={ws.registerLink} class="butt">Register Now</a>
                            <p class="happening"> Checkout the <strong><a href="https://docs.google.com/document/d/1adhrxokM3ZU9h4fu-wiLbPZTTJafiKyMfZaLR22pJps/edit?usp=sharing" style="color:cyan"> Rulebook </a></strong> for more details</p>
                        {/if}
                    </div>
                </div>
                <div class="img" style="background-image: url('{ws.image}');"></div>
            </div>
        {/each}
    </div>
</div>

<style>
    h1{
        font-size:5vw;
    }
    .main{
        background-color: #242020;
    }
    .informal .img{
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
    .informal{
        display: flex;
        height: 80vh;
    }
    
    .informal > *{
        width: 50%;
    }
    .about{
        width: 60%;
    }
    .img{
        width: 40%;
    }
    .informal:nth-child(even){
        display: flex;
        flex-direction: row-reverse;
        background-color: rgb(115, 76, 160);
        /* color: black */
    }
    .informal:nth-child(odd){
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

    @media (max-width:3000px){
        h1{
        font-size:10vw;
        }
        .abouttext{
            font-size: 45px;
        }
        .happening{
            font-size: 50px;
        }
        .butt{
            font-size: 40px;
        }
    }

    @media (max-width:2000px){
        h1{
        font-size:5vw;
        }
        .abouttext{
            font-size: 20px;
        }
        .happening{
            font-size: 20px;
        }
        .butt{
            font-size: 20px;
        }
    }


    @media (max-width:1800px){
        h1{
        font-size:5vw;
        }
    }

    @media (max-width:1500px){
        h1{
        font-size:4vw;
        }
        .abouttext{
            font-size: 20px;
        }
        .happening{
            font-size: 25px;
        }
        .butt{
            font-size: 20px;
        }
    }

    @media (max-width:1300px){
        h1{
        font-size:3vw;
        }
        .abouttext{
            font-size: 18px;
        }
        .happening{
            font-size: 23px;
        }
        .butt{
            font-size: 18px;
        }
    }

    @media (max-width: 1000px){
        h1{
        font-size:2vw;
        }
        .abouttext{
            font-size: small;
        }
        .happening{
            font-size: small;
        }
        .butt{
            font-size: small;
        }
        .banner{
            margin: 0em;
        }
        .img{
            margin: 2em 0.5em;
        }
        .informal{
            height: 50%;
        }
    }

    @media (max-width: 700px){
        h1{
        font-size:4vw;
        }
        .abouttext{
            font-size: 8px;
        }
        .happening{
            font-size: 8px;
        }
        .butt{
            font-size: 8px;
        }
    }
</style>