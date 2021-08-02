import { JobTitle } from 'src/shared/domain/job-title.vo';
import { StaffMember } from 'src/staff-member/domain/staff-member.model';
import { StaffMemberEntity } from 'src/staff-member/entities/staff-member.entity';
import { ID } from '../../../shared/domain/id.vo';
import { Name } from '../../domain/name.vo';
import { DataMapper } from '../data-mapper.interface';

export class StaffMemberDataMapper
  implements DataMapper<StaffMember, StaffMemberEntity>
{
  public toDomain(entity: StaffMemberEntity): StaffMember {
    const staffMember = new StaffMember();
    staffMember.id = ID.create(entity.id);
    staffMember.first_name = Name.create(entity.first_name);
    staffMember.middle_name = Name.create(entity.middle_name);
    staffMember.last_name = Name.create(entity.last_name);
    staffMember.title = JobTitle.create(entity.title);
    return staffMember;
  }

  public toDalEntity(staffMember: StaffMember): StaffMemberEntity {
    const staffMemberEntity = new StaffMemberEntity();
    staffMemberEntity.id = staffMember.id.value;
    staffMemberEntity.first_name = staffMember.first_name.value;
    staffMemberEntity.middle_name = staffMember.middle_name.value;
    staffMemberEntity.last_name = staffMember.last_name.value;
    staffMemberEntity.title = staffMember.title.value;
    return staffMemberEntity;
  }
}
