import { BadRequestException, Injectable } from '@nestjs/common';
import { EntityRepository, getRepository, Repository } from 'typeorm';
import { IStaffMemberPersistence } from '../application/staff-member.persistence.interface';
import { StaffMemberEntity } from '../entities/staff-member.entity';

@EntityRepository(StaffMemberEntity)
@Injectable()
export class StaffMemberPersistenceAdapter
  extends Repository<StaffMemberEntity>
  implements IStaffMemberPersistence
{
  async getStaffMembers(): Promise<StaffMemberEntity[]> {
    const staffMemberRepository = getRepository(StaffMemberEntity);
    const staffMembers: StaffMemberEntity[] =
      await staffMemberRepository.find();
    return staffMembers;
  }

  async getStaffMemberById(staffMemberId: number): Promise<StaffMemberEntity> {
    if (!staffMemberId) {
      throw new BadRequestException('id must be sent');
    }

    const staffMemberRepository = getRepository(StaffMemberEntity);
    const staffMember: StaffMemberEntity = await staffMemberRepository.findOne(
      staffMemberId,
    );

    return staffMember;
  }
}
