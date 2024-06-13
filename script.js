// Seleciona as divs correspondentes aos passos do processo
const primeiraDiv = document.querySelector('.primeiro-passo');
const segundaDiv = document.querySelector('.segundo-passo');
const terceiraDiv = document.querySelector('.terceiro-passo');

// Função responsável por alternar a visibilidade das divs
function go(passoAtual, proximoPasso) {
    // Aplica 'display: none' na div correspondente ao passo atual
    let dNone;
    if (passoAtual == 1) {
        dNone = primeiraDiv;
    } else if (passoAtual == 2) {
        dNone = segundaDiv;
    } else {
        dNone = terceiraDiv;
    }
    dNone.style.display = 'none';

    // Aplica 'display: block' na div correspondente ao próximo passo
    let dBlock;
    if (proximoPasso == 1) {
        dBlock = primeiraDiv;
    } else if (proximoPasso == 2) {
        dBlock = segundaDiv;
    } else {
        dBlock = terceiraDiv;
    }
    dBlock.style.display = 'block';
}

// Função responsável por verificar os valores de peso e altura
function verificar() {
    const peso = document.getElementById('num');  // Obtém o elemento de input do peso
    const altura = document.getElementById('alt');  // Obtém o elemento de input da altura

    // Remove as bordas vermelhas dos inputs
    peso.style.border = 'none';
    altura.style.border = 'none';

    // Verifica se os campos de peso e altura estão preenchidos
    if (!peso.value || !altura.value) {
        // Se ambos os campos estiverem vazios, aplica borda vermelha a ambos
        if (!peso.value && !altura.value) {
            peso.style.border = '1px solid red';
            altura.style.border = '1px solid red';
        // Se apenas o campo de peso estiver vazio, aplica borda vermelha ao peso
        } else if (!peso.value) {
            peso.style.border = '1px solid red';
        // Se apenas o campo de altura estiver vazio, aplica borda vermelha à altura
        } else {
            altura.style.border = '1px solid red';
        }
    } else {
        let imc = peso.value / (altura.value * altura.value);
        const res = document.getElementById('resultado');

        if (imc < 18.5) {
            res.innerHTML = 'Magreza | Obesidade 0';
            res.style.color = 'yellow';
        } else if (imc >= 18.5 && imc < 25) {
            res.innerHTML = 'Peso Normal | Obesidade 0';
            res.style.color = 'green';
        } else if (imc >= 25 && imc < 30) {
            res.innerHTML = 'Sobrepeso | Obesidade I';
            res.style.color = 'yellow';
        } else if (imc >= 30 && imc < 40) {
            res.innerHTML = 'Obesidade | Obesidade II';
            res.style.color = 'darkred';
        } else {
            res.innerHTML = 'Obesidade Grave | Obesidade III';
            res.style.color = 'black';
        }
        go(2, 3);
    }
}


