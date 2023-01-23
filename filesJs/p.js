let array = [{
    nombre: "javier",
    apellidO: "montes"},
    {
        nombre: "jesu",
        apellido: "montes"
    },
    {
        nombre: "mariana",
        apellido: "montes"
    }
]



console.log(array.findIndex(x => x.nombre == "jorge"))
array.splice(-1,1)
console.log(array)