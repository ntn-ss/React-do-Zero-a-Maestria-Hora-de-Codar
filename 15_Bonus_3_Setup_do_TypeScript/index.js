var firstName = "Nathan";
var anotherName = 1;
var x = true;
function greeting(name) {
    console.log("Ol\u00E1, ".concat(name, "."));
}
greeting(firstName);
// As linhas abaixo configuram erro. O parâmetro da função "greeting" está explicitamente definido como string.
// greeting(anotherName)
// greeting(x)
