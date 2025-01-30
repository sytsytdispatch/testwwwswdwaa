function copyURL() {
    const urlField = document.getElementById("webhook-url");
    urlField.select();
    document.execCommand("copy");
    alert("Webhook URL copied!");
}

// Simulated webhook event reception (for testing)
function addEvent(data) {
    const eventList = document.getElementById("event-list");
    const listItem = document.createElement("li");
    listItem.className = "event-item";
    listItem.innerHTML = `
        <p><strong>Event:</strong> ${data.event}</p>
        <p><strong>Sender:</strong> ${data.sender}</p>
        <img src="${data.avatar}" alt="Avatar" width="50">
    `;
    eventList.prepend(listItem);
}

// Example test data (normally, real data would come from GitHub webhooks)
setTimeout(() => {
    addEvent({
        event: "push",
        sender: "octocat",
        avatar: "https://github.com/images/error/octocat_happy.gif"
    });
}, 2000);
