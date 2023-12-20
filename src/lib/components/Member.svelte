<script lang="ts">
    import Icon from 'svelte-awesome/components/Icon.svelte';
    import {instagram, facebook, linkedin, twitter} from 'svelte-awesome/icons'
    export let name: string
    export let email: string
    export let imageurl: string


</script>

<div class="individualContainer" id="person1" >
    <picture class="picture fullwidth">
        <img class="image fullwidth" alt="" src="{imageurl}">
    </picture>
    <center><p class="personName basicgap" >{name}</p></center>
    <center><div class="socialLinks fullwidth basicgap" style="display: flex;align-items: center;">
        <a class="icon" href="insta"><Icon data={instagram} scale={1.3}/></a>
        <a class="icon" href="insta"><Icon data={facebook} scale={1.3}/></a>
        <a class="icon" href="insta"><Icon data={linkedin} scale={1.3}/></a>
        <a class="icon" href="insta"><Icon data={twitter} scale={1.3}/></a>
    </div></center>
    <center>
        <a href="//gmail.com" style="text-decoration: none;color: antiquewhite;">{email}</a>
    </center>
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

.fullwidth{
    width: 100%;
}

a{
        color: inherit;
        text-decoration: unset;
        text-align: center;
    }

.image{
    height:200px ;
    border-radius: 7px;
    border: 3px rgb(228, 222, 222);
}

.picture{
    overflow: hidden;
    align-items: center;
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
}

@media screen and (max-width: 700px) {
    .individualContainer {
      width: 100%;
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