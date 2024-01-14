<script lang="ts">
    import Category from '$lib/components/Category.svelte';
    import Ajay from "$lib/assets/CoreTeam/Ajay.png"
    import ANJI from "$lib/assets/CoreTeam/Anjitha.png"
    import Aryan from "$lib/assets/CoreTeam/Aryan.png"  
    import Aswhin from "$lib/assets/CoreTeam/Ashwin.png"
    import Manish from "$lib/assets/CoreTeam/Manish.png"
    import Nadhana from "$lib/assets/CoreTeam/Nandhana.png"
    import Netra from "$lib/assets/CoreTeam/Netra.png"
    import Pawan from "$lib/assets/CoreTeam/Pawan.png"
    import Priyanshu from "$lib/assets/CoreTeam/Priyanshu.png"
    import Rushikesh from "$lib/assets/CoreTeam/Rushikesh.png"
    import Sarath_A from "$lib/assets/CoreTeam/Sarath.png"
    import Sarthak from "$lib/assets/CoreTeam/Sarthak.png"
    import Shubham from "$lib/assets/CoreTeam/Shubhan.png"
    import Sidharth from "$lib/assets/CoreTeam/Sidarth.png"
    import Siva from "$lib/assets/CoreTeam/Siva.png"
    import Sujit from "$lib/assets/CoreTeam/Sujit.png"
    import Utsav  from "$lib/assets/CoreTeam/Utsav.png"
    import Vijay from "$lib/assets/CoreTeam/Vijay.png"
    import Vishnu from "$lib/assets/CoreTeam/Vishnu.png"
    import Kaushik from "$lib/assets/CoreTeam/Kaushik.png"
    import Eshwar from "$lib/assets/CoreTeam/Eshwar.png"
    import Kishore from "$lib/assets/CoreTeam/Kishore.png"
    import Gayathri from "$lib/assets/CoreTeam/Gayathri.png"
    import Nakul from "$lib/assets/CoreTeam/Nakul.png"
    import Azim from "$lib/assets/CoreTeam/Azim.png"
    import Aleena from "$lib/assets/CoreTeam/Aleena.png"
    import Vinay from "$lib/assets/CoreTeam/Vinay.png"
    import Sai_Kumar from "$lib/assets/CoreTeam/Sai Kumar.png"

    let teams : {[key:string]:any} = {}
    teams["Coordinator"]=[["Sarthak","122101035@smail.iitpkd.ac.in",Sarthak]]

    teams["Assistant Coordinators"]=[["Netra","132201017@smail.iitpkd.ac.in",Netra],
                                    ["Aryan Mathur","122201017@smail.iitpkd.ac.in",Aryan]]
    teams["Fest Mentor"]=[["Aleena","122201004@smail.iitpkd.ac.in",Aleena]]

    teams["Technical Heads"]=[["Shubhan","122101037@smail.iitpkd.ac.in",Shubham],
                            ["Manish","122101023@smail.iitpkd.ac.in",Manish]]

    teams["Cultural Heads"]=[["Nandhana","1122201008@smail.iitpkd.ac.in",Nadhana],
                            ["Eshwar","112101016@smail.iitpkd.ac.in",Eshwar]]

    teams["Web Dev Head"]=[["Kaushik Rawat","112201015@smail.iitpkd.ac.in",Kaushik]]

    teams["Creative Head"]=[["Gayathri","122201002@smail.iitpkd.ac.in",Gayathri],
                            ["Nakul","122101024@smail.iitpkd.ac.in",Nakul]]
    teams["Decoration Head"]=[["Anjitha","132201001@smail.iitpkd.ac.in",ANJI]]
    teams["Film and Videography Head"]=[["Utsav","112201050@smail.iitpkd.ac.in",Utsav]]
    teams["Content Creation Head"]=[["Sarath","122101034@smail.iitpkd.ac.in",Sarath_A]]
    teams["Media and Publicity Head"]=[["Ashwin","122101004@smail.iitpkd.ac.in",Aswhin],["Kishore","122201019@smail.iitpkd.ac.in",Kishore]]
    teams["Social Media Head"]=[["Pavan","122201022@smail.iitpkd.ac.in",Pawan]]
    teams["Tech-Summit Head"]=[["Vijay","112101060@smail.iitpkd.ac.in",Vijay]]
    teams["Workshop Head"]=[["Siva","122101038@smail.iitpkd.ac.in",Siva]]
    teams["Hospitality Head"]=[["Priyanshu","112101039@smail.iitpkd.ac.in",Priyanshu],["Azim","122201042@smail.iitpkd.ac.in",Azim]]
    teams["Proshow Head"]=[["Sujit","112001043@smail.iitpkd.ac.in",Sujit]]
    teams["Informals Head"]=[["Vishnu","112101053@smail.iitpkd.ac.in",Vishnu]]
    teams["Finance Head"]=[["Ajay","122001017@smail.iitpkd.ac.in",Ajay]]
    teams["Marketing Head"]=[["Rushikesh","132101027@smail.iitpkd.ac.in",Rushikesh],["Vinay","132201016@smail.iitpkd.ac.in",Vinay],["Sai Kumar","132101035@smail.iitpkd.ac.in",Sai_Kumar]]
    teams["Open House Coordinator"]=[["Sidarth","112201048@smail.iitpkd.ac.in",Sidharth]]
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
    color: white;
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