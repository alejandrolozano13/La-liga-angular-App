export const managerList: IManager[] = [
    {
        id: 1,
        name: 'Hansi Flick',
        age: new Date(),
        squadId: 1
    }
]

export interface IManager{
    id: number | string;
    name: string;
    age: Date;
    squadId: number;
}