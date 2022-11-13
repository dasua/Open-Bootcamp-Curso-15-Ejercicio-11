/**
 * Crea un nuevo fichero JS que contenga las siguientes líneas
 *
 * - [X] Una clase llamada "Estudiante" que tenga:
 * - [X] Una variable llamada nombre
 * - [X] Otra variable lista llamada asignaturas con 3 asignaturas: Javascript, HTML, CSS
 * - [X] Un método "obtenDatos" que devuelva un objeto con las propiedades nombre y asignaturas
 * - [X] Crea una nueva instancia de "Estudiante"
 * - [X] Haz la llamada al método obtenDatos
 */
class Estudiante {
    nombre
    listaAsignaturas = ['Javascript', 'HTML', 'CSS']

    constructor (nombre, listaAsignaturas = []) {
        this.nombre = nombre
        if (listaAsignaturas.length) {
            this.listaAsignaturas = listaAsignaturas
        }
    }

    obtenDatos () {
        return { nombre: this.nombre, asignaturas: this.listaAsignaturas }
    }
}

const est1 = new Estudiante('Pedrito')
const est2 = new Estudiante('María',['Java','C#'])
const datosEst1 = est1.obtenDatos()
const datosEst2 = est2.obtenDatos()

console.log(est1)
console.log(datosEst1)

console.log(est2)
console.log(datosEst2)
