let nome, xp, nivel;

do {
    nome = prompt("Digite o nome do usuário:");
} while (!nome); // Garante que o nome não seja vazio ou nulo

do {
    xp = parseInt(prompt("Digite a quantidade de experiência adquirida:"));
} while (isNaN(xp) || xp < 0); // Garante que a experiência seja um número não negativo

switch (true) {
    case xp < 1000:
        nivel = "Ferro";
        break;
    case xp < 2000:
        nivel = "Bronze";
        break;
    case xp < 5000:
        nivel = "Prata";
        break;
    case xp < 7000:
        nivel = "Ouro";
        break;
    case xp < 8000:
        nivel = "Platina";
        break;
    case xp < 9000:
        nivel = "Ascendente";
        break;
    case xp < 10000:
        nivel = "Imortal";
        break;
    default:
        nivel = "Radiante";
}

console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);
