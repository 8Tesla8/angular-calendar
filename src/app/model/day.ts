import { Task } from "./task";

export class Day {
    public title : string;
    public style : string;
    public tasks : Task[];

    constructor() {
        this.tasks = [];
        this.title = '';
        this.style = '';
    }
}