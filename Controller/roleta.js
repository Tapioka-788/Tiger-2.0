const valores = [
    { opcao: "rgb(0, 0, 255)" },
    { opcao: "rgb(255, 0, 0)" },
    { opcao: "rgb(255, 255, 0)" },
    { opcao: "rgb(255, 255, 255)" },
    { opcao: "rgb(0, 255, 0)" },
];

export function sorteador() {
    let coluna1 = document.getElementById('coluna1');
    let coluna2 = document.getElementById('coluna2');
    let coluna3 = document.getElementById('coluna3');

    const valorAleatorio1 = Math.floor(Math.random() * valores.length);
    const valorAleatorio2 = Math.floor(Math.random() * valores.length);
    const valorAleatorio3 = Math.floor(Math.random() * valores.length);

    const sorteado1 = valores[valorAleatorio1].opcao;
    const sorteado2 = valores[valorAleatorio2].opcao;
    const sorteado3 = valores[valorAleatorio3].opcao;

    coluna1.style.backgroundColor = sorteado1;
    coluna2.style.backgroundColor = sorteado2;
    coluna3.style.backgroundColor = sorteado3;

    console.log("Coluna 1:", sorteado1);
    console.log("Coluna 2:", sorteado2);
    console.log("Coluna 3:", sorteado3);
}

