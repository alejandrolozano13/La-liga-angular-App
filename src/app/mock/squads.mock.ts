import { Player } from "./players.mock";

export const squadsList: ISquads[] = [
    {
        id: 1,
        name: 'FC Barcelona',
        localShirt: 'assets/images/shirts/fc-barcelona-shirts.webp',
        visitantShirt: 'assets/images/shirts/fc-barcelona-white-shirt.jpeg',
        thirdShirt: 'assets/images/shirts/fc-barcelona-third-shirt.webp',
        image: 'assets/images/squads/fc_barcelona.png',
        stadiumId: 1,
        foundationYear: new Date("1899-11-29")
    },
    {
        id: 2,
        name: 'Real Madrid',
        localShirt: 'assets/images/shirts/real-madrid-shirt-1.webp',
        visitantShirt: 'assets/images/shirts/real-madrid-2-shirt.jpg',
        thirdShirt: 'assets/images/shirts/Real-Madrid-shirt-3.jpg',
        image: 'assets/images/squads/real_madrid.png',
        stadiumId: 1,
        foundationYear: new Date("1899-11-29")
    }
]

export interface ISquads{
    id: number | string;
    name: string;
    localShirt: string;
    visitantShirt: string;
    thirdShirt: string;
    image: string;
    stadiumId: number,
    foundationYear: Date,
    players?: Player[],
}