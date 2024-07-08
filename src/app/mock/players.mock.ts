export const playersList: Player[] = [
    {
        id: 1,
        name: 'Ter Stegen',
        price: 28000000,
        description: 'Chegou no clube em 2014, e conquistou diversos títulos, como o famoso campeonato Champions League.',
        foot: 1,
        image: "assets/images/players/ter-stegen.webp",
        squadId: 1,
        position: 0
    },
    {
        id: 2,
        name: 'Jules Koundé',
        price: 45000000,
        description: 'Chegou no clube em 2022, é um jogador versátil que atua tanto de zagueiro central como de lateral direito,',
        foot: 1,
        image: "assets/images/players/jules-kounde.webp",
        squadId: 1,
        position: 1
    },
    {
        id: 3,
        name: 'João Cancelo',
        price: 25000000,
        description: 'Chegou no clube em 2023, em formato de empréstimo pelo Manchester City, porém deixou uma linda história pelo clube',
        foot: 1,
        image: "assets/images/players/cancelo.webp",
        squadId: 1,
        position: 2
    },
    {
        id: 4,
        name: 'Ronald Araújo',
        price: 70000000,
        description: 'Chegou no clube em 2020, vindo do Uruguai como uma jovem promessa, atualmente é um dos melhores na sua posição',
        foot: 1,
        image: "assets/images/players/araujo.png",
        squadId: 1,
        position: 1
    },
    {
        id: 4,
        name: 'Alejandro Balde',
        price: 70000000,
        description: 'Jogador formado na La Masía, joga atualmente de lateral esquerdo e tem 20 anos.',
        foot: 1,
        image: "assets/images/players/balde.webp",
        squadId: 1,
        position: 1
    },
    {
        id: 4,
        name: 'Gavi',
        price: 70000000,
        description: 'Jogador formado na La Masía, joga atualmente de meio campo e tem 20 anos.',
        foot: 1,
        image: "assets/images/players/gavi.webp",
        squadId: 1,
        position: 1
    },
    {
        id: 4,
        name: 'Pedri',
        price: 70000000,
        description: 'Chegou no clube em 2020, vindo do Las Palmas como uma jovem promessa, atualmente é um dos melhores na sua posição',
        foot: 1,
        image: "assets/images/players/pedri.webp",
        squadId: 1,
        position: 1
    },
    {
        id: 4,
        name: 'Ronald Araújo',
        price: 70000000,
        description: 'Chegou no clube em 2020, vindo do Uruguai como uma jovem promessa, atualmente é um dos melhores na sua posição',
        foot: 1,
        image: "assets/images/players/araujo.png",
        squadId: 1,
        position: 1
    },
    {
        id: 4,
        name: 'Ronald Araújo',
        price: 70000000,
        description: 'Chegou no clube em 2020, vindo do Uruguai como uma jovem promessa, atualmente é um dos melhores na sua posição',
        foot: 1,
        image: "assets/images/players/araujo.png",
        squadId: 1,
        position: 1
    },
    {
        id: 4,
        name: 'Ronald Araújo',
        price: 70000000,
        description: 'Chegou no clube em 2020, vindo do Uruguai como uma jovem promessa, atualmente é um dos melhores na sua posição',
        foot: 1,
        image: "assets/images/players/araujo.png",
        squadId: 1,
        position: 1
    },
    {
        id: 4,
        name: 'Ronald Araújo',
        price: 70000000,
        description: 'Chegou no clube em 2020, vindo do Uruguai como uma jovem promessa, atualmente é um dos melhores na sua posição',
        foot: 1,
        image: "assets/images/players/araujo.png",
        squadId: 1,
        position: 1
    },
    {
        id: 4,
        name: 'Ronald Araújo',
        price: 70000000,
        description: 'Chegou no clube em 2020, vindo do Uruguai como uma jovem promessa, atualmente é um dos melhores na sua posição',
        foot: 1,
        image: "assets/images/players/araujo.png",
        squadId: 1,
        position: 1
    },
]

export interface Player{
    id: number| string;
    name: string;
    price: number;
    description: string;
    foot: FootPlayer;
    image: string;
    squadId: number;
    position: PositionPlayer;
}

enum FootPlayer{
    Direita = 0,
    Esquerda = 1
}

enum PositionPlayer{
    Goleiro = 0,
    Zagueiro = 1,
    LateralDireito = 2,
    LateralEsquerdo = 3
}