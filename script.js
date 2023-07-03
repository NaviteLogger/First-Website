console.log("Skrypt działa!");

let outputTekstowy = "To będzie \"tekst\" w cudzysłowie";

let input = prompt("Podaj swoje imię");

switch(input)
{
    case "Jan":
        {
            console.log("Witaj Janie!");
        }
        break;
    case "Anna":
        {
            console.log("Witaj Anno!");
        }
        break;
    default:
        {
            console.log("Witaj nieznajomy!");            
        }
}

function add(a, b)
{
    return a + b;
}

const textBox = document.querySelector("#textBox");
const output = document.querySelector("#output");

textBox.addEventListener("keydown", (event) => {
    output.textContent = `You pressed "${event.key}".`;
});
