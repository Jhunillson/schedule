document.getElementById("generateSchedule").addEventListener("click", () => {
    const startDate = new Date(document.getElementById("startDate").value);
    if (isNaN(startDate)) {
        alert("Please select a valid start date!");
        return;
    }
    generateSchedule(startDate);
});

function generateSchedule(startDate) {
    const scheduleContainer = document.getElementById("schedule");
    scheduleContainer.innerHTML = ""; // Clear previous schedule

    const cycle = ["Work (Day)", "Work (Night)", "Rest", "Free", "Free"];
    const daysToShow = 30; // Show schedule for the next 30 days

    for (let i = 0; i < daysToShow; i++) {
        const currentDate = new Date(startDate);
        currentDate.setDate(startDate.getDate() + i);

        const dayType = cycle[i % cycle.length];
        const dayElement = document.createElement("div");
        dayElement.classList.add("day");

        if (dayType.includes("Work")) {
            dayElement.classList.add("work-day");
        } else if (dayType === "Rest") {
            dayElement.classList.add("rest-day");
        } else if (dayType === "Free") {
            dayElement.classList.add("free-day");
        }

        dayElement.textContent = `${currentDate.toDateString()}: ${dayType}`;
        scheduleContainer.appendChild(dayElement);
    }
}
