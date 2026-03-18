function calculateTotal() {
    let adult = document.getElementById("adult").value;
    let child = document.getElementById("child").value;
    let senior = document.getElementById("senior").value;

    let total = (adult * 200) + (child * 100) + (senior * 150);

    document.getElementById("total").innerText = total;
}

function bookNow() {
    let date = document.getElementById("date").value;
    let adult = +document.getElementById("adult").value;
    let child = +document.getElementById("child").value;
    let senior = +document.getElementById("senior").value;
    let total = +document.getElementById("total").i

    if (!date) {
        alert("Please select a date");
        return;
    }
     if (total == 0) {
        alert("Please select at least 1 ticket");
        return;
    }
    
    let booking = {
        date: date,
        adult: adult,
        child: child,
        senior: senior,
        total: total
    };

    // Save to localStorage
    localStorage.setItem("zooBooking", JSON.stringify(booking));



    alert("Booking Successful!");
}