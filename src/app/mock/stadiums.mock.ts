export const stadiumsList: Stadium[] = [
    {
        id: 1,
        name: 'Camp Nou',
        squadId: 1,
        image: ['assets/images/squads/camp-nou.jpg', 'assets/images/squads/camp-nou-interior.avif', 'assets/images/squads/campnou-3.jpeg'],
        capacity: 99354,
        constructionYear: new Date('1957-09-24')
    }
]

export interface Stadium{
    id: number | string;
    name: string;
    squadId: number
    image: string[],
    capacity: number,
    constructionYear: Date
}