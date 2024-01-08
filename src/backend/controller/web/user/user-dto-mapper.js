import UserDto from './user-dto';
import User from '@/backend/model/user';

export default class UserDtoMapper {

  static fromObjects(objects) {
    const results = [];

    for (let object of objects) {
      results.push(this.fromUser(object));
    }

    return results;
  }

  static fromObject(object) {
    return new UserDto(
      object.id,
      object.firstName,
      object.lastName,
      object.age,
      object.weight,
      object.income,
      object.stateId
    );
  }

  static fromUsers(users) {
    const results = [];

    for (let object of users) {
      results.push(this.fromUser(object));
    }

    return results;
  }

  static fromUser(user) {
    return new UserDto(
      user.getId(),
      user.getFirstName(),
      user.getLastName(),
      user.getAge(),
      user.getWeight(),
      user.getIncome(),
      user.getStateId()
    );
  }

  static toUsers(userDtos) {
    const objects = [];

    for (let user of userDtos) {
      const object = this.toUser(user);

      objects.push(object);
    }

    return objects;
  }

  static toUser(userDto) {
    return new User(
      userDto.getId(),
      userDto.getFirstName(),
      userDto.getLastName(),
      userDto.getAge(),
      userDto.getWeight(),
      userDto.getIncome(),
      userDto.getStateId()
    );
  }
}
