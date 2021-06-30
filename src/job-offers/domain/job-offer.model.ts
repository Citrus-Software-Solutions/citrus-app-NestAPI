export class JobOffer {
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public available_vacans: number,
    public date_begin: Date,
    public date_end: Date,
    public status: string,
    public gender: string,
    public salary: number,
    public min_age: number,
    public max_age: number,
  ) {}
}
