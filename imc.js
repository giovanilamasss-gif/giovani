

```javascript
let peso = Number(prompt("Digite o peso (kg):"));
let altura = Number(prompt("Digite a altura (m):"));

let imc = peso / (altura * altura);

if (imc < 18.5) {
    console.log("Baixo peso");
} else if (imc < 25) {
    console.log("Peso normal");
} else if (imc < 30) {
    console.log("Sobrepeso");
} else {
    console.log("Obesidade");
}
```