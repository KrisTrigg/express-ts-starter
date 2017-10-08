export default class User {
    constructor(private data: { id: number, name: string }) { }
    public get name() {
        return this.data.name;
    }
}