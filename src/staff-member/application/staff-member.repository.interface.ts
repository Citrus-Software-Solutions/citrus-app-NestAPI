import { StaffMember } from '../domain/staff-member.model';

export interface IStaffMemberRepository {
  getStaffMembers(): Promise<StaffMember[]>;
  getStaffMemberById(staffMemberId: number): Promise<StaffMember>;
}
