import { Address } from '../../../shared/address/domain/address.model';
import { CityAddress } from '../../../shared/address/domain/value-objects/city-address.vo';
import { StateAddress } from '../../../shared/address/domain/value-objects/state-address.vo';
import { StreetAddress } from '../../../shared/address/domain/value-objects/street-address.vo';
import { ZipCode } from '../../../shared/address/domain/value-objects/zip-code.vo';
import { WriteAddressDto } from '../../../shared/address/dtos/write-address.dto';
import { AddressEntity } from '../../../shared/address/entities/address.entity';
import { DataMapper } from '../data-mapper.interface';

export class AddressDataMapper implements DataMapper<Address, AddressEntity> {
  public toDomain(entity: AddressEntity): Address {
    const street_one = StreetAddress.create(entity.street_one);
    const street_two = StreetAddress.create(entity.street_two);
    const city = CityAddress.create(entity.city);
    const state = StateAddress.create(entity.state);
    const zip = ZipCode.create(entity.zip);
    const address = new Address(street_one, street_two, city, state, zip);

    return address;
  }

  public toDalEntity(address: Address): AddressEntity {
    const addressEntity: AddressEntity = new AddressEntity();

    if (addressEntity.street_one) {
      addressEntity.street_one = address.street1.value;
    }
    if (addressEntity.street_two) {
      addressEntity.street_two = address.street2.value;
    }
    if (addressEntity.city) {
      addressEntity.city = address.city.value;
    }
    if (addressEntity.state) {
      addressEntity.state = address.state.value;
    }
    if (addressEntity.zip) {
      addressEntity.zip = address.zip.value;
    }

    return addressEntity;
  }

  public toDomainFromShowDto(dto: WriteAddressDto): Address {
    const street1: StreetAddress = StreetAddress.create(dto.street1);

    let street2: StreetAddress;
    if (dto.street2) {
      street2 = StreetAddress.create(dto.street2);
    } else {
      street2 = StreetAddress.create(null);
    }

    const city: CityAddress = CityAddress.create(dto.city);
    const state: StateAddress = StateAddress.create(dto.state);
    const zip: ZipCode = ZipCode.create(dto.zip);

    const address: Address = new Address(street1, street2, city, state, zip);

    return address;
  }
}
