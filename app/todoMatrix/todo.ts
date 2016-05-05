export class Todo {
  constructor(
    public id: number,
    public task: string,
    public date: string,
    public time: string,

    public important: boolean,
    public urgent: boolean,
    public category: string,
    public completed: boolean,
    
    public detail?: string

  ) {  }
}