export class Task {
   public title: string;
   public note: string;
   public time: string;
   public mode: string;

   constructor() {
       this.title = '';
       this.note = '';
       this.time = '';

       this.mode = 'show'; //'edit'
   }
}
