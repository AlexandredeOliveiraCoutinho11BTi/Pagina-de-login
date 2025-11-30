function init() {
    const navul = document.querySelector(" nav ul")


    // pegar usuario do ssession storage e transformar em objeto
    const user = JSON.parse(sessionStorage.getItem("user"))


    // user.id recupera o id do usuario, user.name recupera o nome do usuario
    if (user) {
        navul.innerHTML +=`
        <li>
         <a href="./pages/jogar.html">Jogar</a>
         </li>
         <li><h2>Usuário: ${user.name}</h2></li>
         <li><button>Sair</button></li>
         
        `

        const logoutButton = document.querySelector("logout")
        logoutButton.addEventListener("click", logout)

        return
    }

    navul.innerHTML += `
    <li>
        <a href="./pages/login.html">login</a>
    </li>
            `
}

function logout() {
    sessionStorage = removeItem("user")
    window.location.reload()
}

init()