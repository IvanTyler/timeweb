import { IFetchData } from "../Interfaces/interface";
import { data } from "./mock";

describe('data', () => {
    let dataMock: IFetchData;
    beforeEach(() => {
        dataMock = data;
    });
    test('data availability', () => {
        expect(dataMock.hasOwnProperty('navigation')).toEqual(true)
        expect(dataMock.hasOwnProperty('mainFrame')).toEqual(true)
        expect(dataMock.hasOwnProperty('info')).toEqual(true)
        expect(dataMock.hasOwnProperty('labels')).toEqual(true)
        expect(dataMock.hasOwnProperty('comments')).toEqual(true)
    })
})