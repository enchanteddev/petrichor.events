<script lang="ts">
	import Person from "$lib/components/Person.svelte";
	import type { person } from "$lib/types";

    let p: person = {
        name: 'Kaushik Rawat',
        image: 'https://esolangs.org/w/images/6/63/Piet_Hello_World.gif',
        phone: 1234567890
    }
</script>

<div class="main">
    <Person personData={p}/>
</div>

<style>
    .main{
        margin: 10em;
    }
</style>
