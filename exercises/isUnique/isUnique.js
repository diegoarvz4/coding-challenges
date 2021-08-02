/*
    1.1 IsUnique
    Implement an algorithm to determine if a string
    has all unique characters.
    What if you cannot use additional data structures?
*/


const isUnique = (str) => {
  // Convierte el string a 
  // un array de caracteres y después usa sort
  // Tiempo: n (split) + n log n (lo que toma sort)
  // Espacio: n (alojas un array de n caracters) 
  const sortedStr = str.split("").sort()

  // Tiempo: n - en el peor de los casos recorres todo el array
  // Espacio: no se utiliza espacio extra
  for(let i = 0; i < sortedStr.length - 1; i ++ ) {
    if(sortedStr[i] === sortedStr[i + 1]) {
      return false
    }
  }

  return true
}

// Tiempo: O(n) + O(n log n) + O(n) = O(n log n)
// Espacio: O(n)

module.exports = isUnique