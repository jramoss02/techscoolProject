document.getElementById("userForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const formData = new FormData(this);
    const userData = {};

    formData.forEach((value, key) => {
        userData[key] = value;
    });

    fetch("https://6503279ca0f2c1f3faeb8a10.mockapi.io/Alunos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
    })
    .then(response => response.json())
    .then(data => {
        console.log("Dados enviados com sucesso:", data);
    })
    .catch(error => {
        console.error("Erro ao enviar dados:", error);
    });
});
