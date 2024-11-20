document.getElementById("generateSchedule").addEventListener("click", () => {
    const startDate = new Date(document.getElementById("startDate").value);
    const scheduleType = document.getElementById("scheduleType").value;

    if (isNaN(startDate)) {
        alert("Please select a valid start date!");
        return;
    }

    if (scheduleType === "normal") {
        generateNormalSchedule(startDate);
    } else if (scheduleType === "24hour") {
        generate24HourSchedule(startDate);
    }
});

function generateNormalSchedule(startDate) {
    const scheduleContainer = document.getElementById("schedule");
    scheduleContainer.innerHTML = ""; // Clear previous schedule

    const cycle = ["Serviço (Manhã)", "Serviço (Noite)", "Descanso", "Folga", "Folga"];
    const daysToShow = 30; // Show schedule for the next 30 days

    for (let i = 0; i < daysToShow; i++) {
        const currentDate = new Date(startDate);
        currentDate.setDate(startDate.getDate() + i);

        const dayType = cycle[i % cycle.length];
        const dayElement = createDayElement(currentDate, dayType);

        scheduleContainer.appendChild(dayElement);
    }
}

function generate24HourSchedule(startDate) {
    const scheduleContainer = document.getElementById("schedule");
    scheduleContainer.innerHTML = ""; // Clear previous schedule

    const cycle = ["Serviço (24h)", "Descanso", "Folga", "Folga", "Folga"];
    const daysToShow = 30; // Show schedule for the next 30 days

    for (let i = 0; i < daysToShow; i++) {
        const currentDate = new Date(startDate);
        currentDate.setDate(startDate.getDate() + i);

        const dayType = cycle[i % cycle.length];
        const dayElement = createDayElement(currentDate, dayType);

        scheduleContainer.appendChild(dayElement);
    }
}

function createDayElement(date, dayType) {
    const dayElement = document.createElement("div");
    dayElement.classList.add("day");

    if (dayType.includes("Serviço")) {
        dayElement.classList.add("work-day");
    } else if (dayType === "Descanso") {
        dayElement.classList.add("rest-day");
    } else if (dayType === "Folga") {
        dayElement.classList.add("free-day");
    }

    dayElement.textContent = `${date.toDateString()}: ${dayType}`;
    return dayElement;
}
