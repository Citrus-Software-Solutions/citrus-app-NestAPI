import { AddressEntity } from '../../../shared/address/entities/address.entity';
import { Address } from '../../../shared/address/domain/address.model';
import { DataMapper } from '../data-mapper.interface';
import { StreetAddress } from '../../../shared/address/domain/value-objects/street-address.vo';
import { CityAddress } from '../../../shared/address/domain/value-objects/city-address.vo';
import { StateAddress } from '../../../shared/address/domain/value-objects/state-address.vo';
import { ZipCode } from '../../../shared/address/domain/value-objects/zip-code.vo';
import { ReadAddressDto } from 'src/shared/address/dtos/read-address.dto';

export class AddressDataMapper implements DataMapper<Address, AddressEntity> {
  public toDomain(entity: AddressEntity): Address {
    const address = new Address(
      StreetAddress.create(entity.street_one),
      StreetAddress.create(entity.street_two),
      CityAddress.create(entity.city),
      StateAddress.create(entity.state),
      ZipCode.create(entity.zip),
    );

    return address;
  }

  public toDalEntity(address: Address): AddressEntity {
    const addressEntity: AddressEntity = new AddressEntity();

    addressEntity.street_one = address.street1.value;
    addressEntity.street_two = address.street2.value;
    addressEntity.city = address.city.value;
    addressEntity.state = address.state.value;
    addressEntity.zip = address.zip.value;

    return addressEntity;
  }

  public toDomainFromReadDto(dto: ReadAddressDto): Address {
    const street1: StreetAddress = StreetAddress.create(dto.street1.toString());

    let street2: StreetAddress;
    if (dto.street2) {
      street2 = StreetAddress.create(dto.street2.toString());
    } else {
      street2 = StreetAddress.create(null);
    }

    const city: CityAddress = CityAddress.create(dto.city.toString());
    const state: StateAddress = StateAddress.create(dto.state.toString());
    const zip: ZipCode = ZipCode.create(dto.zip.toString());

    const address: Address = new Address(street1, street2, city, state, zip);

    return address;
  }
}
