const form = document.querySelector("#cadastroForm");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    sendUser();
});

async function sendUser() {
    const name = document.querySelector("#nome").value;
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#senha").value;

    const user = { name, email, password };

    try {
        const response = await fetch("https://backend02mb-phi.vercel.app/cadastrar", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user)
        });

        const data = await response.json();
        alert(data.message);

        window.location.href = "../index.html";
    } catch (error) {
        alert("Erro ao cadastrar.");
        console.error(error);
    }
}
