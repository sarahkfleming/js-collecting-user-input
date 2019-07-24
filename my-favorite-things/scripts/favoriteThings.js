const printFavoriteThings = document.querySelector("#favoriteThingsList")

document.querySelector("#savetoWishlist").addEventListener("click", event => {
    const favoriteThingInput = document.querySelector("#favoriteThing").value
    const purchaseLocationInput = document.querySelector("#purchaseLocation").value
//     When you click the button check if both input fields have a value that is not empty string (""). If it is that, then you did not type anything into that input field.

//      If either input field is blank, do not add anything to the DOM and alert the user that they need to enter in all information.
    if(favoriteThingInput !== "" && purchaseLocationInput !== "") {
        printFavoriteThings.innerHTML += `
        <section>
            <h2>${favoriteThingInput}</h2>
            <h3>${purchaseLocationInput}</h3>
        </section>
        `
    } else {
        window.alert("Please enter the requested information")
    }
    
    // When you click the button and the new favorite thing is added to the DOM, clear out the value of both input fields. Then set the focus to the firsrt input field.
    document.querySelector("#favoriteThing").value = ""
    document.querySelector("#purchaseLocation").value = ""
    document.querySelector("#favoriteThing").focus()
})