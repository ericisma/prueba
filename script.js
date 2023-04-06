const nombre = document.getElementById("nombre")
const apellido = document.getElementById("apellido")
const email = document.getElementById("email")
const pass = document.getElementById("pass")
const password = document.getElementById("password")
const form = document.getElementById("form")
const parrafo = document.getElementById("warning")



form.addEventListener("submit", e=>{
    e.preventDefault()
    if (nombre.value.length < 6){
        alert("Nombre muy corto")
    }
})