import { StaffMemberEntity } from '../entities/staff-member.entity';

export interface IStaffMemberPersistence {
  getStaffMembers(): Promise<StaffMemberEntity[]>;
  getStaffMemberById(employerId: number): Promise<StaffMemberEntity>;
}
