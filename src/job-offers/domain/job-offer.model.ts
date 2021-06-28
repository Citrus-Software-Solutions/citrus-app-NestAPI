export class JobOffer {
  constructor(
    public id: number,
    public title: string,
    public description: string,
    public duration: number,
    public status: number,
  ) {}
}
