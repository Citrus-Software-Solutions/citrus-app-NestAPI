import { AddressEntity } from '../entities/address.entity';

export interface IAddressPersistence {
  createAddress(address: AddressEntity): Promise<AddressEntity>;
}
