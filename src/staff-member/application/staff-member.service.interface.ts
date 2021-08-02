import { ReadStaffMemberDto } from '../dtos/read-staff-member.dto';

export interface IStaffMemberService {
  getStaffMembers(): Promise<ReadStaffMemberDto[]>;
  getStaffMemberById(staffMemberId: number): Promise<ReadStaffMemberDto>;
}
