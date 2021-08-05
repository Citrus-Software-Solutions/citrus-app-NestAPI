import { Inject, Injectable } from '@nestjs/common';
import { AddressDataMapper } from '../../mappers/address/address.data-mapper';
import { Address } from '../domain/address.model';
import { AddressEntity } from '../entities/address.entity';
import { IAddressPersistence } from './adress.persistence.interface';
import { IAddressRepository } from './adress.repository.interface';

@Injectable()
export class AddressRepository implements IAddressRepository {
  constructor(
    @Inject('AddressPersisteceAdapter')
    private readonly _employersPersistence: IAddressPersistence,
    private readonly _mapper: AddressDataMapper,
  ) {}

  async createAddress(address: Address): Promise<Address> {
    const createdAddress: AddressEntity =
      await this._employersPersistence.createAddress(
        this._mapper.toDalEntity(address),
      );

    return this._mapper.toDomain(createdAddress);
  }
}
