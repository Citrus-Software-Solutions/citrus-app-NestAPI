import { AddressEntity } from '../../../shared/address/entities/address.entity';
import { Address } from '../../../shared/address/domain/address.model';
import { DataMapper } from '../data-mapper.interface';
import { StreetAddress } from '../../../shared/address/domain/value-objects/street-address.vo';
import { CityAddress } from '../../../shared/address/domain/value-objects/city-address.vo';
import { StateAddress } from '../../../shared/address/domain/value-objects/state-address.vo';
import { ZipCode } from '../../../shared/address/domain/value-objects/zip-code.vo';

export class AddressDataMapper implements DataMapper<Address, AddressEntity> {
  public toDomain(entity: AddressEntity): Address {
    const employer = new Address(
      StreetAddress.create(entity.street_one),
      StreetAddress.create(entity.street_two),
      CityAddress.create(entity.city),
      StateAddress.create(entity.state),
      ZipCode.create(entity.zip),
    );

    return employer;
  }

  public toDalEntity(address: Address): AddressEntity {
    const addressEntity = new AddressEntity();
    addressEntity.street_one = address.street1.value;
    addressEntity.street_two = address.street2.value;
    addressEntity.city = address.city.value;
    addressEntity.state = address.state.value;
    addressEntity.zip = address.zip.value;

    return addressEntity;
  }
}
