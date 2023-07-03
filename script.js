console.log("Skrypt działa!");

let output = "To będzie \"tekst\" w cudzysłowie";

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