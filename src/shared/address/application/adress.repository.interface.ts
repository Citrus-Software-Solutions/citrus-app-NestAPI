import { Address } from '../domain/address.model';

export interface IAddressRepository {
  createAddress(employer: Address): Promise<Address>;
}
