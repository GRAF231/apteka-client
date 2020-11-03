<template>
   <div id='Panel'>
       <div id='Main'>
           <div class='inputs'>
               <span class='h'>Type your login here</span>
               <input type="text">
           </div>
           <div class='inputs'>
               <span class='h'>Type your login here</span>
               <input type="password">
           </div>
            <div class='moves'>
                <div class='linkButton'>
                    <input type="button" value='Log in'>
                </div>
                <div class='linkButton'>
                    <input type="button" value='Sign in'>
                </div>
            </div>
       </div>
   </div>
</template>

<script>
export default {
  name: 'Login' 
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #Panel{
        display: flex;
        justify-content: center;
        width: 100%;
        height: 600px;
    }
    #Main{
        position: absolute;
        width: 400px;
        height: 500px;
        border: 5px solid rgb(83, 50, 10);
        border-radius: 5px;
        margin: 20px;
    }
    .inputs{
        margin-top: 30px;
    }
    input[type=text], input[type=password]{
        width: 80%;
        margin: 10px 5px;
        padding: 10px 20px;
        border: none;
        border-bottom: 4px solid black;
        border-top: 4px solid black;
        -webkit-transition: width 0.5s ease-in-out;
        transition: width 0.5s ease-in-out;
    }
    input:focus{
        border: 4px solid #4CAF50;
    }
    .moves{
        display: flex;
        flex-flow: row;
        justify-content: center;
        margin-top: 50px;
    }
    input[type=button]{
        width: 100px;
        height: 70px;
        background-color: #4CAF50;
        border: none;
        color: white;
        padding: 16px 32px;
        text-decoration: none;
        margin: 4px 2px;
        cursor: pointer;
    }
    .linkButton{
        margin: 20px;
    }
    .h{
        font-size: 25px;
        color: #4CAF50;
    }
</style>