const firstName = "Nathan"
const anotherName = 1
const x = true

function greeting(name: string) {
    console.log(`Olá, ${name}.`);
}

greeting(firstName)

// As linhas abaixo configuram erro. O parâmetro da função "greeting" está explicitamente definido como string.

// greeting(anotherName)
// greeting(x)