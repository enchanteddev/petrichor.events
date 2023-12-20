<script lang="ts">
    import Category from '$lib/components/Category.svelte';
    import Ajay from "$lib/assets/CoreTeam/Ajay.jpg"
    import ANJI from "$lib/assets/CoreTeam/ANJI.jpeg"
    import Aryan from "$lib/assets/CoreTeam/Aryan.jpg"  
    import Aswhin from "$lib/assets/CoreTeam/Aswhin.jpeg"
    import Manish from "$lib/assets/CoreTeam/Manish.jpeg"
    import Nadhana from "$lib/assets/CoreTeam/Nadhana.jpg"
    import Netra from "$lib/assets/CoreTeam/Netra.jpeg"
    import Pawan from "$lib/assets/CoreTeam/Pawan.jpeg"
    import Priyanshu from "$lib/assets/CoreTeam/Priyanshu.jpg"
    import Rushikesh from "$lib/assets/CoreTeam/Rushikesh.jpg"
    import Sarath_A from "$lib/assets/CoreTeam/Sarath_A.jpg"
    import Sarthak from "$lib/assets/CoreTeam/Sarthak Garg.jpeg"
    import Shubham from "$lib/assets/CoreTeam/Shubham.jpg"
    import Sidharth from "$lib/assets/CoreTeam/Sidharth.jpg"
    import Siva from "$lib/assets/CoreTeam/Siva.jpg"
    import Sujit from "$lib/assets/CoreTeam/Sujit.jpg"
    import Utsav  from "$lib/assets/CoreTeam/Utsav Patel.jpeg"
    import Vijay from "$lib/assets/CoreTeam/Vijay.jpg"
    import Vishnu from "$lib/assets/CoreTeam/Vishnu.jpg"

    let teams : {[key:string]:any} = {}
    teams["Coordinator"]=[["Sarthak","sarthak@gmail.com",Sarthak]]

    teams["Assistance Coordinators"]=[["Netra","netra@gmail.com",Netra],
                                    ["Aryan Mathur","aryan@gmail.com",Aryan]]

    teams["Technical Heads"]=[["Shubham","shubham@gmail.com",Shubham],
                            ["Manish","manish@gmail.com",Manish]]

    teams["Cultural Heads"]=[["Nadhana","nadhana@gmail.com",Nadhana],
                            ["Eshwar","eshwar@gmail.com","https://records.iitpkd.ac.in/uploads/students/1618/photos/112101016%20-%20ESHWAR%20PRASAD.jpg?20220124050150"]]

    teams["Web Dev Head"]=[["Kaushik Rawat","kaushik@gmail.com","https://records.iitpkd.ac.in/uploads/students/2122/photos/112201015.JPG?20221026051057"]]

    teams["Informals"]=[["Lion","lion@gmail.com","https://th.bing.com/th?id=OSK.HERO8XH_s8vodPa3VIQliZrFNwgvD9pQ3xob2vslQY6YQrM&w=312&h=200&c=15&rs=2&o=6&dpr=1.3&pid=SANGAM"]]

    teams["Tech Summit"]=[["Tiger",'tiger@gmail.com',"https://www.bing.com/th?id=OIP.q8OkSHaCFDGhb7m5AjIdPgHaFd&w=157&h=200&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"]]
</script>

<div class="MainContainer fullwidth">
    <div class="AboutUs para fullwidth">
        <div>
            <h1 class="headings" style="display: block;color: rgb(234, 202, 245);"><b>About Us</b></h1>
        </div>
        <div>
            <p class="aboutus_para">
                Welcome to Petrichor, where dreams take flight and moments become memories. Petrichor is not just an event; it's an experience that celebrates the convergence of passion, creativity, and community. As the orchestrators of this unique gathering, we are dedicated to curating an atmosphere where every detail is meticulously crafted to transport you to a realm of inspiration and joy. Whether you are an artist seeking a platform to showcase your talent, a participant eager to immerse yourself in the magic, or a sponsor looking to be part of something extraordinary, Petrichor invites you to join us on this enchanting journey. Together, let's create an event that echoes with the essence of Petrichor, where every drop tells a story and every moment leaves an indelible mark. Welcome to Petrichor – where the spirit of connection and creativity converges in a symphony of experiences.
            </p>
        </div>
    </div>

    <div class="teamContainer AboutUs fullwidth" style="display: block;">
        <div>
            <center><h1 class="headings" style="display: block;color: rgb(255, 255, 255);"><b>Our Team</b></h1></center>
        </div>
        <!-- <center><p class="basicgap" style="line-break: normal;">Meet the passionate minds behind Petrichor—an eclectic team fueled by creativity and dedication. Together, we weave the threads of inspiration to craft an event that transcends expectations.</p></center> -->

        
        {#each Object.keys(teams) as teamName}
            <Category categoryName={teamName} members={teams[(teamName)]} />
        {/each}

    </div>
</div>


<style>
    *{
    box-sizing: border-box;
    left: 0;
    /* font-family: Georgia, 'Times New Roman', Times, serif; */
    /* font-family: Anonymous Pro,monospace; */
    margin:0;
    /* padding: 0; */
}

.AboutUs{
    padding: 5px 5%;
}
h1{
    text-align: center;
    font-size: 64px;
}
.fullwidth{
    width: 100%;
}

.aboutus_para{
    padding: 5%;
    margin-inline: 8em;
    font-size: large;
    text-align: justify;
    overflow-x: auto;
    line-break: normal;
    color: rgb(201, 140, 255);
}


.para{
    padding-top: 10em;
}


@media screen and (max-width:1000px)  {
    .aboutus_para{
    padding: 2.5%;
    margin-inline: 5em;
}
}

@media screen and (max-width: 700px) {
    .aboutus_para{
        margin-inline: 0em;
        font-size: smaller;
        text-align: justify;
        align-items: center;
    }
    .para{
        padding-top: 7em;
    }
    .headings{
        font-size: x-large;
    }
  }

</style>