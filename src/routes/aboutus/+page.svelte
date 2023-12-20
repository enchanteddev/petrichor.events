<script>
    import Member from '$lib/components/Member.svelte';
import Icon from 'svelte-awesome/components/Icon.svelte';
    import {instagram, facebook, linkedin, twitter, exclamation} from 'svelte-awesome/icons'
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


        <center>
            <div class="fullwidth basicgap AboutUs" title="Category2" >
                <h2 class="headings basicgap" style="display: block;color: rgb(255, 180, 180);"><b>Coordinators</b></h2>
                <div class="InfoContainer fullwidth" >
                    <div class="individualContainer" id="person2" >
                        <picture class="picture fullwidth">
                            <img class="image fullwidth" src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Virat_Kohli_during_the_India_vs_Aus_4th_Test_match_at_Narendra_Modi_Stadium_on_09_March_2023.jpg">
                        </picture>
                        <center><p class="personName  basicgap">Virat Kohli</p></center>
                        <center><div class="socialLinks fullwidth basicgap" style="display: flex;align-items: center;">
                            <a class="icon" href="insta"><Icon data={instagram} scale={1.3}/></a>
                            <a class="icon" href="insta"><Icon data={facebook} scale={1.3}/></a>
                            <a class="icon" href="insta"><Icon data={linkedin} scale={1.3}/></a>
                            <a class="icon" href="insta"><Icon data={twitter} scale={1.3}/></a>
                        </div></center>
                        <center>
                            <a href="//gmail.com" style="text-decoration: none;color: antiquewhite;">davidwilley@gmail.com</a>
                        </center>
                    </div>
                    <div class="individualContainer" id="person3" >
                        <picture class="picture fullwidth">
                            <img class="image fullwidth" src="https://lh3.google.com/u/0/d/1tw0kCm4e1l_79Aa1S6ClRV6vSDzk3Ew7=w2000-h3556-iv1">
                        </picture>
                        <center><p class="personName basicgap">K Willianson</p></center>
                        <center><div class="socialLinks fullwidth basicgap" style="display: flex;align-items: center;">
                            <a class="icon" href="insta"><Icon data={instagram} scale={1.3}/></a>
                            <a class="icon" href="insta"><Icon data={facebook} scale={1.3}/></a>
                            <a class="icon" href="insta"><Icon data={linkedin} scale={1.3}/></a>
                            <a class="icon" href="insta"><Icon data={twitter} scale={1.3}/></a>
                        </div></center>
                        <center>
                            <a href="//gmail.com" style="text-decoration: none;color: antiquewhite;">davidwilley@gmail.com</a>
                        </center>
                    </div>
                    <div class="individualContainer" id="person4" >
                        <picture class="picture fullwidth">
                            <img class="image fullwidth" src="https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcS83tZYEdeHMxH4o-5ZOlqdLjMNFJSksfs_CgkCNVWn3xV2HaPV8qFChwRGXcalgAnQyTHE74L1OXpeiUw">
                        </picture>
                        <center><p class="personName basicgap">Joe Root</p></center>
                        <center><div class="socialLinks fullwidth basicgap" style="display: flex;align-items: center;">
                            <a class="icon" href="insta"><Icon data={instagram} scale={1.3}/></a>
                            <a class="icon" href="insta"><Icon data={facebook} scale={1.3}/></a>
                            <a class="icon" href="insta"><Icon data={linkedin} scale={1.3}/></a>
                            <a class="icon" href="insta"><Icon data={twitter} scale={1.3}/></a>
                        </div></center>
                        <center>
                            <a href="//gmail.com" style="text-decoration: none;color: antiquewhite;">davidwilley@gmail.com</a>
                        </center>
                    </div>
                </div>
            </div>
        </center>


        <center>
            <div class="fullwidth basicgap AboutUs" title="Category3" >
                <h2 class="headings basicgap" style="display: block;color: rgb(255, 180, 180);"><b>Technical</b></h2>
                <div class="InfoContainer fullwidth" >
                    <div class="individualContainer" id="person3" >
                        <picture class="picture fullwidth">
                            <img class="image fullwidth" src="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRurHmXFUc7OJk4FHEGvTfMIl5zSv2iLMomatM81XiQLG1dKClENwmsPD0J-FL9teaL3DosRXW1Fu38CWQ">
                        </picture>
                        <center><p class="personName basicgap">K Willianson</p></center>
                        <center><div class="socialLinks fullwidth basicgap" style="display: flex;align-items: center;">
                            <a class="icon" href="insta"><Icon data={instagram} scale={1.3}/></a>
                            <a class="icon" href="insta"><Icon data={facebook} scale={1.3}/></a>
                            <a class="icon" href="insta"><Icon data={linkedin} scale={1.3}/></a>
                            <a class="icon" href="insta"><Icon data={twitter} scale={1.3}/></a>
                        </div></center>
                        <center>
                            <a href="//gmail.com" style="text-decoration: none;color: antiquewhite;">davidwilley@gmail.com</a>
                        </center>
                    </div>
                    <div class="individualContainer" id="person4" >
                        <picture class="picture fullwidth">
                            <img class="image fullwidth" src="https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcS83tZYEdeHMxH4o-5ZOlqdLjMNFJSksfs_CgkCNVWn3xV2HaPV8qFChwRGXcalgAnQyTHE74L1OXpeiUw">
                        </picture>
                        <center><p class="personName basicgap">Joe Root</p></center>
                        <center><div class="socialLinks fullwidth basicgap" style="display: flex;align-items: center;">
                            <a class="icon" href="insta"><Icon data={instagram} scale={1.3}/></a>
                            <a class="icon" href="insta"><Icon data={facebook} scale={1.3}/></a>
                            <a class="icon" href="insta"><Icon data={linkedin} scale={1.3}/></a>
                            <a class="icon" href="insta"><Icon data={twitter} scale={1.3}/></a>
                        </div></center>
                        <center>
                            <a href="//gmail.com" style="text-decoration: none;color: antiquewhite;">davidwilley@gmail.com</a>
                        </center>
                    </div>
                </div>
            </div>
        </center>


        <center>
            <div class="fullwidth basicgap AboutUs" title="Category4" >
                <h2 class="headings basicgap" style="display: block;color: rgb(255, 180, 180);"><b>Cultural</b></h2>
                <div class="InfoContainer fullwidth" >
                    <div class="individualContainer" id="person1" >
                        <picture class="picture fullwidth">
                            <img class="image fullwidth" src="https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcSyuKnVg-YzO3Jdg9I1r1dj5fg3lBvG2P5o8pEuGVo3YqxP1aq9tcxaZAvCe2UbRhd-mnwKV4nsTiFJ-Us">
                        </picture>
                        <center><p class="personName basicgap" >David Willey</p></center>
                        <center><div class="socialLinks fullwidth basicgap" style="display: flex;align-items: center;">
                            <a class="icon" href="insta"><Icon data={instagram} scale={1.3}/></a>
                            <a class="icon" href="insta"><Icon data={facebook} scale={1.3}/></a>
                            <a class="icon" href="insta"><Icon data={linkedin} scale={1.3}/></a>
                            <a class="icon" href="insta"><Icon data={twitter} scale={1.3}/></a>
                        </div></center>
                        <center>
                            <a href="//gmail.com" style="text-decoration: none;color: antiquewhite;">davidwilley@gmail.com</a>
                        </center>
                    </div>
                </div>
            </div>
        </center>


        <center>
            <div class="fullwidth basicgap AboutUs" title="Category4" >
                <h2 class="headings basicgap" style="display: block;color: rgb(255, 180, 180);"><b>Informals</b></h2>
                <div class="InfoContainer fullwidth" >
                    <Member name="David Willey" email="david@yahoo.com" imageurl="https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcSyuKnVg-YzO3Jdg9I1r1dj5fg3lBvG2P5o8pEuGVo3YqxP1aq9tcxaZAvCe2UbRhd-mnwKV4nsTiFJ-Us"  />
                    <div class="individualContainer" id="person2" >
                        <picture class="picture fullwidth">
                            <img class="image fullwidth" src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Virat_Kohli_during_the_India_vs_Aus_4th_Test_match_at_Narendra_Modi_Stadium_on_09_March_2023.jpg">
                        </picture>
                        <center><p class="personName  basicgap">Virat Kohli</p></center>
                        <center><div class="socialLinks fullwidth basicgap" style="display: flex;align-items: center;">
                            <a class="icon" href="insta"><Icon data={instagram} scale={1.3}/></a>
                            <a class="icon" href="insta"><Icon data={facebook} scale={1.3}/></a>
                            <a class="icon" href="insta"><Icon data={linkedin} scale={1.3}/></a>
                            <a class="icon" href="insta"><Icon data={twitter} scale={1.3}/></a>
                        </div></center>
                        <center>
                            <a href="//gmail.com" style="text-decoration: none;color: antiquewhite;">davidwilley@gmail.com</a>
                        </center>
                    </div>
                    <div class="individualContainer" id="person3" >
                        <picture class="picture fullwidth">
                            <img class="image fullwidth" src="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRurHmXFUc7OJk4FHEGvTfMIl5zSv2iLMomatM81XiQLG1dKClENwmsPD0J-FL9teaL3DosRXW1Fu38CWQ">
                        </picture>
                        <center><p class="personName basicgap">K Willianson</p></center>
                        <center><div class="socialLinks fullwidth basicgap" style="display: flex;align-items: center;">
                            <a class="icon" href="insta"><Icon data={instagram} scale={1.3}/></a>
                            <a class="icon" href="insta"><Icon data={facebook} scale={1.3}/></a>
                            <a class="icon" href="insta"><Icon data={linkedin} scale={1.3}/></a>
                            <a class="icon" href="insta"><Icon data={twitter} scale={1.3}/></a>
                        </div></center>
                        <center>
                            <a class="basicgap" href="//gmail.com" style="color: antiquewhite;">davidwilley@gmail.com</a>
                        </center>
                    </div>
                    <div class="individualContainer" id="person4" >
                        <picture class="picture fullwidth">
                            <img class="image fullwidth" src="https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcS83tZYEdeHMxH4o-5ZOlqdLjMNFJSksfs_CgkCNVWn3xV2HaPV8qFChwRGXcalgAnQyTHE74L1OXpeiUw">
                        </picture>
                        <center><p class="personName basicgap">Joe Root</p></center>
                        <center><div class="socialLinks fullwidth basicgap" style="display: flex;align-items: center;">
                            <a class="icon" href="insta"><Icon data={instagram} scale={1.3}/></a>
                            <a class="icon" href="insta"><Icon data={facebook} scale={1.3}/></a>
                            <a class="icon" href="insta"><Icon data={linkedin} scale={1.3}/></a>
                            <a class="icon" href="insta"><Icon data={twitter} scale={1.3}/></a>
                        </div></center>
                        <center>
                            <a href="//gmail.com" style="text-decoration: none;color: antiquewhite;">davidwilley@gmail.com</a>
                        </center>
                    </div>
                </div>
            </div>
        </center>

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

a{
        color: inherit;
        text-decoration: unset;
        text-align: center;
    }

.headings{
    /* font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif; */
}

.image{
    height:200px ;
    border-radius: 7px;
    border: 3px rgb(228, 222, 222);
}

.slink{
    height: 30px;
    width: 30px;
}

.picture{
    overflow: hidden;
    align-items: center;
}

.InfoContainer{
    content: "";
  clear: both;
  display: table;
  row-gap: 5px;
}
.basicgap{
    padding: 7px 0px;
}

.individualContainer{
    float: left;
  width: 33.33%;
  padding: 50px;
  padding-right: 60px;
  padding-left: 60px;
}
.para{
    padding-top: 10em;
}
.socialLinks{
    width: 70%;
    display: flex;
    align-items: center;
    padding: 3px 0px;   
}

.icon{
    width: 25%;
}


@media screen and (max-width:1000px)  {
    .individualContainer {
        width: 50%;
      align-self: center;
    }
    .aboutus_para{
    padding: 2.5%;
    margin-inline: 5em;
}
}

@media screen and (max-width: 700px) {
    .individualContainer {
      width: 100%;
    }
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
        font-size: medium;
    }
    .basicgap{
        padding: 3% 0px;
    }
    .individualContainer{
        padding: 5% 8%;
    }
  }

  .personName{
    color: #F9A825;
    /* font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif; */
    font-style: italic;
    font-weight: 600;
}

</style>