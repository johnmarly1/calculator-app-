// Get elements from HTML

const calculationType = document.getElementById("calculationType");

const distanceGroup = document.getElementById("distanceGroup");
const speedGroup = document.getElementById("speedGroup");
const timeGroup = document.getElementById("timeGroup");

const distanceInput = document.getElementById("distance");
const speedInput = document.getElementById("speed");
const timeInput = document.getElementById("time");

const distanceUnit = document.getElementById("distanceUnit");
const timeUnit = document.getElementById("timeUnit");

const calculateBtn = document.getElementById("calculateBtn");
const resetBtn = document.getElementById("resetBtn");

const resultValue = document.getElementById("resultValue");
const resultUnit = document.getElementById("resultUnit");

const formulaText = document.getElementById("formulaText");

const errorMessage = document.getElementById("errorMessage");


// Change fields depending on calculation type

calculationType.addEventListener("change", function () {

    const type = calculationType.value;

    // Hide everything first

    distanceGroup.style.display = "none";
    speedGroup.style.display = "none";
    timeGroup.style.display = "none";


    // Calculate Distance

    if (type === "distance") {

        speedGroup.style.display = "block";
        timeGroup.style.display = "block";

        formulaText.textContent =
            "Distance = Speed × Time";
    }


    // Calculate Speed

    else if (type === "speed") {

        distanceGroup.style.display = "block";
        timeGroup.style.display = "block";

        formulaText.textContent =
            "Speed = Distance ÷ Time";
    }


    // Calculate Time

    else if (type === "time") {

        distanceGroup.style.display = "block";
        speedGroup.style.display = "block";

        formulaText.textContent =
            "Time = Distance ÷ Speed";
    }

});


// Calculate button

calculateBtn.addEventListener("click", function () {

    errorMessage.textContent = "";

    const type = calculationType.value;


    // -------------------------
    // DISTANCE
    // -------------------------

    if (type === "distance") {

        const speed = Number(speedInput.value);
        const time = Number(timeInput.value);

        if (speed <= 0 || time <= 0) {

            errorMessage.textContent =
                "Please enter valid speed and time.";

            return;
        }


        // Convert minutes to hours

        let timeInHours;

        if (timeUnit.value === "minutes") {

            timeInHours = time / 60;

        } else {

            timeInHours = time;

        }


        const distance = speed * timeInHours;


        resultValue.textContent =
            distance.toFixed(2);

        resultUnit.textContent =
            "kilometers";

    }


    // -------------------------
    // SPEED
    // -------------------------

    else if (type === "speed") {

        const distance = Number(distanceInput.value);
        const time = Number(timeInput.value);

        if (distance <= 0 || time <= 0) {

            errorMessage.textContent =
                "Please enter valid distance and time.";

            return;
        }


        // Convert distance to kilometers

        let distanceInKm;

        if (distanceUnit.value === "miles") {

            distanceInKm = distance * 1.60934;

        } else {

            distanceInKm = distance;

        }


        // Convert time to hours

        let timeInHours;

        if (timeUnit.value === "minutes") {

            timeInHours = time / 60;

        } else {

            timeInHours = time;

        }


        const speed = distanceInKm / timeInHours;


        resultValue.textContent =
            speed.toFixed(2);

        resultUnit.textContent =
            "km/h";

    }


    // -------------------------
    // TIME
    // -------------------------

    else if (type === "time") {

        const distance = Number(distanceInput.value);
        const speed = Number(speedInput.value);

        if (distance <= 0 || speed <= 0) {

            errorMessage.textContent =
                "Please enter valid distance and speed.";

            return;
        }


        // Convert distance to kilometers

        let distanceInKm;

        if (distanceUnit.value === "miles") {

            distanceInKm = distance * 1.60934;

        } else {

            distanceInKm = distance;

        }


        const time = distanceInKm / speed;


        resultValue.textContent =
            time.toFixed(2);

        resultUnit.textContent =
            "hours";

    }

});


// Reset button

resetBtn.addEventListener("click", function () {

    distanceInput.value = "";
    speedInput.value = "";
    timeInput.value = "";

    resultValue.textContent = "0";
    resultUnit.textContent = "";

    errorMessage.textContent = "";

    calculationType.value = "distance";


    distanceGroup.style.display = "none";
    speedGroup.style.display = "block";
    timeGroup.style.display = "block";

    formulaText.textContent =
        "Distance = Speed × Time";

});