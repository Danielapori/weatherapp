
    function handleFullname (event) {
        setFullname (event.target.value)
    }

    function handleDateofbirth (event) {
        setDateofbirth (event.target.value)
    }

    function handleEmail (event) {
        setEmail (event.target.value)
    }

    function handlePassword (event) {
        setPassword (event.target.value)
    }

    function handleConfirmpassword (event) {
        setConfirmpassword (event.target.value)
    }

    function handleSignUp (event) {
        event.preventDefault();


}






onChange={handleFullname}

onChange={handleDateofbirth}
onChange={handleEmail}
onChange={handlePassword}
onChange={handleConfirmpassword}
onClick={handleSignUp} 

<div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" 
                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                 Search

               </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="#">Lagos, NG</a>
                <a class="dropdown-item" href="#">Accra, GH</a>
                <a class="dropdown-item" href="#">Johansberg, ZA</a>
        </div>
        </div>