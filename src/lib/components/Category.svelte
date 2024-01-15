<script lang="ts">
    import Icon from 'svelte-awesome/components/Icon.svelte';
    import {instagram, facebook, linkedin, twitter} from 'svelte-awesome/icons'


    export let categoryName : string
    export let members : Array<Array<string>>
</script>

<center>
    <div class="fullwidth basicgap AboutUs" title="Category2" >
        <h2 class="headings basicgap" style="display: block;color: rgb(255, 180, 180);"><b>{categoryName}</b></h2>
        <div class="InfoContainer {((members.length)==2) ? 'widthcond2' : ((members.length)==1) ? 'widthcond1' : 'fullwidth'}" >
            {#each members as member}
                <div class="individualContainer {((members.length)==2) ? 'halfwidth' : ((members.length)==1) ? 'fullswidth' : 'thirdswidth'}" >
                    <picture class="picture fullwidth">
                        <img class="image fullwidth" alt="" src="{member[2]}">
                    </picture>
                    <center><p class="personName basicgap" >{member[0]}</p></center>
                    <center>
                        <a href="{'https://mail.google.com/mail/?view=cm&to=' + member[1] + '&su=Inquiry%20about%20Petrichor%2024&body=Dear%20' + categoryName + '%2C%0A&cc=petrichor@iitpkd.ac.in'}" style="text-decoration: none;color: antiquewhite;">{member[1]}</a>
                    </center>
                </div>
            {/each}
        </div>
    </div>
</center>


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
h2{
    font-size: xx-large;
}
 
 .fullwidth{
     width: 100%;
 }

 .fullswidth{
     width: 100%;
 }
 
 .widthcond2{
     width: 66.66%;
 }

 .widthcond1{
     width: 33.33%;
 }

.halfwidth{
    width: 50%;
}

.thirdswidth{
    width: 33.33%;
}

 a{
         color: inherit;
         text-decoration: unset;
         text-align: center;
     }
 
 .image{
<<<<<<< HEAD
=======
     height:400px ;
>>>>>>> upstream/main
     border-radius: 7px;
     border: 3px rgb(228, 222, 222);
     object-fit: cover;
     object-position: 50% 10%;
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
   padding: 50px;
   padding-right: 60px;
   padding-left: 60px;
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


 
 @media screen and (max-width:1100px)  {
    .widthcond2{
        width: 80%;
    }
    .halfwidth{
        padding-right: 5%;
        padding-left: 5%;
    }
    .fullswidth{
        padding-right:15%;
        padding-left:15%;
    }
    .widthcond1{
        width: 50%;
    }
    .image{}


}
 
@media screen and (max-width: 700px) {
    .individualContainer {
      width: 100%;
      padding: 5% 8%;
    }
    .headings{
        font-size: large;
    }
    .basicgap{
        padding: 3% 0px;
    }
    .widthcond1,.widthcond2{
        width: 70%;
    }
    .image{
        height:400px ;
    }
  }
 
   .personName{
     color: #F9A825;
     /* font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif; */
     font-style: italic;
     font-weight: 600;
 }
 
 
 </style>
