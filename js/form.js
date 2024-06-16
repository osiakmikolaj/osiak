const form = document.getElementById("contactForm");
const responseMess = document.getElementById("response-message");

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    try {
        const response = await fetch("https://contact.mikolaj.workers.dev/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, email, message }),
        });

        if (response.ok) {
            responseMess.style.color = "#a5ffd6";
            responseMess.textContent = "The message has been sent!";
            form.reset();
        } else {
            responseMess.style.color = "#ffa69e";
            responseMess.textContent = "An error occurred while sending the message.";
        }
    } catch (error) {
        console.error("Błąd:", error);
        responseMess.style.color = "#ffa69e";
        responseMess.textContent = "An error occurred while sending the message.";
    }
});
