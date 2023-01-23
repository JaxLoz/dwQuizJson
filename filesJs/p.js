let array = [{
    nombre: "javier",
    edad: 212},
    {
        nombre: "jesu",
        edad: 18
    },
    {
        nombre: "mariana",
        edad: 17
    }
]

let ordenado = array.sort(function(a,b){
   return a.edad - b.edad;
})

console.log(ordenado)