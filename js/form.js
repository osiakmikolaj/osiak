const form = document.getElementById("contactForm");

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = "contact@osiak.dev";
    const userEmail = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    try {
        const response = await fetch("https://contact.mikolaj.workers.dev/", {
            method: "POST",
            headers: {
                'Access-Control-Allow-Origin': '*',
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, email, userEmail, message }),
        });

        if (response.ok) {
            alert("Wiadomość została wysłana!");
            form.reset();
        } else {
            alert("Wystąpił błąd podczas wysyłania wiadomości.");
        }
    } catch (error) {
        console.error("Błąd:", error);
        alert("Wystąpił błąd podczas wysyłania wiadomości.");
    }
});
