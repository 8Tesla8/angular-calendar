import { Week } from "./week";

export class Month {
    public weeks: Week[];

    public title: string;
    public monthIndex: number;
    public year: number;
    public days: number;

    constructor() {
        this.title = '';

        this.weeks = [];
    }
}