import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { StaffMember } from '../domain/staff-member.model';
import { ReadStaffMemberDto } from '../dtos/read-staff-member.dto';
import { IStaffMemberRepository } from './staff-member.repository.interface';
import { IStaffMemberService } from './staff-member.service.interface';
@Injectable()
export class StaffMemberService implements IStaffMemberService {
  constructor(
    @Inject('StaffMemberRepository')
    private readonly _staffMemberRepository: IStaffMemberRepository,
  ) {}

  async getStaffMembers(): Promise<ReadStaffMemberDto[]> {
    const staffMember: StaffMember[] =
      await this._staffMemberRepository.getStaffMembers();
    return staffMember.map((staff: StaffMember) =>
      plainToClass(ReadStaffMemberDto, staff),
    );
  }

  async getStaffMemberById(staffMemberId: number): Promise<ReadStaffMemberDto> {
    if (!staffMemberId) {
      throw new BadRequestException('id must be sent');
    }

    return plainToClass(
      ReadStaffMemberDto,
      this._staffMemberRepository.getStaffMemberById(staffMemberId),
    );
  }
}
