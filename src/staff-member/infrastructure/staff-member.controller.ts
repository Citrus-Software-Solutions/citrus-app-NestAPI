import { Controller, Get, Inject, Param, ParseIntPipe } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { IStaffMemberService } from '../application/staff-member.service.interface';
import { ReadStaffMemberDto } from '../dtos/read-staff-member.dto';

@ApiTags('Staff Member')
@Controller('staff-member')
export class StaffMemberController {
  constructor(
    @Inject('StaffMemberService')
    private readonly _staffMemberService: IStaffMemberService,
  ) {}

  @Get()
  @ApiOperation({ summary: 'Get all staff members' })
  getAllStaffMember(): Promise<ReadStaffMemberDto[]> {
    return this._staffMemberService.getStaffMembers();
  }

  @Get('/:staffMemberId')
  @ApiOperation({ summary: 'Get staff member by its id' })
  getById(
    @Param('staffMemberId', ParseIntPipe) staffMemberId: number,
  ): Promise<ReadStaffMemberDto> {
    return this._staffMemberService.getStaffMemberById(staffMemberId);
  }
}
