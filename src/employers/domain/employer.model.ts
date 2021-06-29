import { EmployerStatus } from './employer-status.model';

export class Employer {
  constructor(public companyName: string, public status: EmployerStatus) {}
}
