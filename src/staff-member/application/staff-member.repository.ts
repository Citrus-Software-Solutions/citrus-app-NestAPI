import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { StaffMemberDataMapper } from 'src/shared/mappers/staff-member/staff-member.mapper';
import { StaffMember } from '../domain/staff-member.model';
import { StaffMemberEntity } from '../entities/staff-member.entity';
import { IStaffMemberPersistence } from './staff-member.persistence.interface';
import { IStaffMemberRepository } from './staff-member.repository.interface';

@Injectable()
export class StaffMemberRepository implements IStaffMemberRepository {
  constructor(
    @Inject('StaffMemberPersistenceAdapter')
    private readonly _staffMemberPersistence: IStaffMemberPersistence,
    private readonly _mapper: StaffMemberDataMapper,
  ) {}

  async getStaffMembers(): Promise<StaffMember[]> {
    const staffMemberEntity =
      await this._staffMemberPersistence.getStaffMembers();
    return staffMemberEntity.map((staffMember: StaffMemberEntity) =>
      this._mapper.toDomain(staffMember),
    );
  }

  async getStaffMemberById(staffMemberId: number): Promise<StaffMember> {
    const staffMemberEntity =
      await this._staffMemberPersistence.getStaffMemberById(staffMemberId);

    if (staffMemberEntity == undefined) {
      throw new NotFoundException("id doesn't exist");
    }
    return this._mapper.toDomain(staffMemberEntity);
  }
}
