
function searchAnimal() {
    let value = document.getElementById("searchBox").value.toLowerCase();

    if (value === "wild-animals") {
        window.location.href = "wild.html";
    }
    else if (value === "birds") {
        window.location.href = "birds.html";
    }
    else {
        alert("Please select a proper option!");
    }
}