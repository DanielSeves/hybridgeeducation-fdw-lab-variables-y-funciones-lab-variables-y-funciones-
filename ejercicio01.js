// Ejercicio 1: Declaración de Función
// Modifica la siguiente función creando una nueva variable llamada nombre y asignándole tu nombre. La función debe retornar esta nueva variable que contiene tu nombre

// Elimina la variable global y define la variable dentro de la función
function obtenerNombre() {
    const nombre = "Pablo Daniel";
    return nombre;
}

// No modificar.
// Exporta la función para que pueda ser utilizada en otros archivos
module.exports = {
    obtenerNombre
};
