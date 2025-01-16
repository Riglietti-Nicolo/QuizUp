<script>

    // import firebase from 'firebase/app';
    // import 'firebase/database';

    // const firebaseConfig = {
    //   apiKey: "AIzaSyAwXhLd1wvRLobJ05MIdRdjAW9613XUCFI",
    //   authDomain: "YOUR_AUTH_DOMAIN",
    //   databaseURL: "YOUR_DATABASE_URL",
    //   projectId: "quizup-af4b3",
    //   storageBucket: "YOUR_STORAGE_BUCKET",
    //   messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    //   appId: "YOUR_APP_ID"
    // };

    // firebase.initializeApp(firebaseConfig);



    
    let change = false;

    function showLogin() {
        change = true;
    }

    function showSignUp() {
        change = false;
    }

    function start() {
        
    }
    
    
</script>

<main>

    <div id="container">
        <h1 id="title">QuizUP!</h1>

        {#if !change}
            <div id="sign_up">
            
                <input type="text" placeholder="Nickname">
                <input type="password" placeholder="Password">
                <input type="password" placeholder="Confirm password">
            
                <div id="btn">
                    <button on:click={showLogin}>Log in</button>
                    <button id="start_btn" on:click={start}>Start</button>
                </div>
                
            </div>
        {/if}

        {#if change}
            <div id="login">

                <input type="text" placeholder="Nickname">
                <input type="password" placeholder="Password">

                <div id="btn">
                    <button on:click={showSignUp}>Sign up</button>
                    <button id="start_btn">Start</button>
                </div>

            </div>
        {/if}


    </div>

</main>

<style>

    :global(body) {
      background-color: lightblue;
      margin: 0;
      font-family: Arial, sans-serif;
    }

    #container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }

    #title {
        font-size: 8vw;
        margin-bottom: 30px;
        text-align: center;
    }

    #sign_up, #login {
        display: flex;
        flex-direction: column;
        row-gap: 15px;
        justify-content: center;
        align-items: center;
        width: 80%;
        max-width: 400px;
        background: rgba(255, 255, 255, 0.7);
        padding: 20px;
        border-radius: 15px;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
    }

    input {
        width: 100%;
        border-radius: 5px;
        box-shadow: 4px 4px rgba(0, 0, 0, 0.1);
        height: 40px;
        padding: 0 10px;
        font-size: 16px;
        margin: 5px 0;
        text-align: center;
    }

    input:focus {
        border-color: #007bff;
        box-shadow: 4px 4px blue;
        outline: none;
    }

    ::placeholder {
        text-align: center;
    }

    #btn {
        display: flex;
        justify-content: space-between;
        gap: 10px; 
        width: 100%;
        margin-top: 15px;
    }

    button {
        width: 100%;
        height: 40px;
        margin-top: 15px;
        box-shadow: 4px 4px ;
        border-radius: 5px;
        font-size: 16px;
        background-color: #007bff;
        color: white;
        cursor: pointer;
        transition: transform 0.2s; 
    }

    button:active {
        transform: translate(4px, 4px);
        box-shadow: none;
    }

    #start_btn {
        background-color: #28a745;
        
    }

    button:hover {
        background-color: #0056b3;
    }

    #start_btn:hover {
        background-color: #218838;
    }

    #btn{
        display: flex;
    }

</style>