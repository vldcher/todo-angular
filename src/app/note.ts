export class Note {
    constructor (
    public title: string,
    public text: string,
    public isChecked: boolean,
    public isArchived: boolean,
    public id?: number,
) {}
}
