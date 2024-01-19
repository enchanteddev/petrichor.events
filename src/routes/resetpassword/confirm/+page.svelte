<script lang="ts">


</script>

<main>
    <h1>RESET YOUR PASSWORD</h1>
    <div class="container">
        <form class="passwordform">
            <div class="newpassword">
                <input name="password" placeholder="New Password" type="password" maxlength="25" >
                <ul>
                    <li>Enter your new password</li>
                </ul>
            </div>
            <div class="confirmpassword">
                <input name="confirmpassword" placeholder="Confirm Password" type="password" maxlength="25">
            </div>
            <center><button type="submit">Submit</button></center>
            
        </form>
    </div>
</main>

<style>
    *{
        background-color: white;
        color: black;
    }
    main{
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        place-content: center;
    }
    .container{
        width: 250px;
        padding: 20px;
    }
    h1{
        margin-bottom: 1.5em;
    }
    input{
        border-radius: 5px;
        width: 200px;
        height: 30px;
        padding: 5px;
    }
    button{
        margin: 20px 0;
        cursor: pointer;
    }
    button:hover{
        cursor: pointer;
    }
</style>