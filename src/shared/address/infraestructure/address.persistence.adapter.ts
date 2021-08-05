import { BadRequestException, Injectable } from '@nestjs/common';
import { EntityRepository, getRepository, Repository } from 'typeorm';
import { IAddressPersistence } from '../application/adress.persistence.interface';
import { AddressEntity } from '../entities/address.entity';

@EntityRepository(AddressEntity)
@Injectable()
export class AddressPersistenceAdapter
  extends Repository<AddressEntity>
  implements IAddressPersistence
{
  constructor() {
    super();
  }

  async createAddress(address: AddressEntity): Promise<AddressEntity> {
    const addressRepository = getRepository(AddressEntity);
    const savedAddress: AddressEntity = await addressRepository.save(address);

    if (!savedAddress) {
      throw new BadRequestException('Address could not be created');
    }

    return savedAddress;
  }
}
