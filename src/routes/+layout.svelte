<script>
    import Icon from 'svelte-awesome/components/Icon.svelte';
    import {user, shoppingCart, mapMarker, calendar, instagram, facebook, linkedin, twitter} from 'svelte-awesome/icons'
    export let data;
</script>

{#if data.path != '/'}    
    <nav>
        <a class="petimg2" href="/home"> </a>
        <a href="/aboutus">About Us</a>
        <a href="/home#events">Events</a>
        <a href="/workshops">Workshops</a>
        <a href="/proshows">Proshows</a>
        <a href="/merch">Merch</a>
        <a href="/sponsors">Sponsors</a>
        <a href="/login" class="login"><Icon data={user} scale={1.6}/></a>
    </nav>
{/if}

<div class="parent">
    <div class="sidebar">
        <div class="sb-content">
            <div class="up">
                <p>LOGIN</p>
                <a href="/merch"><Icon data={shoppingCart} scale={1.6}/></a>
                <p>MERCH</p>
                <a href="/reachus"><Icon data={mapMarker} scale={1.6}/></a>
                <p>WHERE</p>
                <a href="/reachus"><Icon data={calendar} scale={1.6}/></a>
                <p>WHEN</p>
            </div>
            <div class="dn">
                <a href="insta"><Icon data={instagram} scale={1.6}/></a>
                <a href="insta"><Icon data={facebook} scale={1.6}/></a>
                <a href="insta"><Icon data={linkedin} scale={1.6}/></a>
                <a href="insta"><Icon data={twitter} scale={1.6}/></a>
            </div>
        </div>
    </div>
    <div class="main">
        <slot></slot>
    </div>
</div>

<style>
    .up >p{
        all:unset;
        margin-bottom: 3em;
        margin-top: .2em;
        font-size: 0.6rem;
    }
    .dn >a{
        margin-bottom: 1em;
    }
    .up{
        padding-top: 2em;
    }
    nav{
        display: flex;
        justify-content: center;
        height: 4em;
        place-items: center;
        background-color: rgba(79, 79, 79, 0.454);
        backdrop-filter: blur(12px);
        position: fixed;
        top: 0;
        z-index: 4;
        left:50%;
        transform: translate(-50%, 0);
        border-radius: 100vh;
        margin-top: 1em;
    }
    a{
        color: inherit;
        text-decoration: unset;
        text-align: center;
    }
    a.login{
        width: 4em;
    }
    nav > a{
        width: 7rem;
    }
    .sidebar{
        width: 4em;
        background-color: rgb(21, 21, 21, 0.25);
        backdrop-filter: blur(12px);
        height: 100%;
        position: fixed;
        top:0;
        /* display: flex; */
        display: none;
        flex-direction: column;
        z-index: 4;

    }
    .petimg{
        height: 4em;
        aspect-ratio: 0.55;
        background-image: url("https://petrichor.events/static/media/logo_red.7a86e334.png");
        background-position: center;
        background-size: 50%;
        background-repeat: no-repeat;
    }
    .petimg2{
        aspect-ratio: 0.55;
        background-image: url("https://petrichor.events/static/media/logo_red.7a86e334.png");
        background-position: center;
        background-size: 30%;
        background-repeat: no-repeat;
        width: 4em;
    }
    .sb-content{
        flex: 1;
    }
    .up, .dn{
        display: flex;
        flex-direction: column;
        text-align: center;
        /* opacity: 0.5; */
    }
    .dn{
        position: fixed;
        bottom: 1em;
        width: 100%;
    }
    .up > a, .dn > a{
        opacity: 0.5;
    }
    .up > a:hover, .dn > a:hover{
        opacity: 1;
    }
    .main{
        /* margin-left: 4em; */
        z-index: 2;
    }
</style>