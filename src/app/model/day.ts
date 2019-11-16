import { Task } from "./task";

export class Day {
    public title = '';
    public style = '';
    public tasks : Task[];

    constructor() {
        this.tasks = [];
    }
}