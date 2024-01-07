import UserRecord from './user-record';

export default class UserRecordMapper {

  static fromObjects(objects) {
    const results = [];

    for (let object of objects) {
      results.push(this.fromObject(object));
    }

    return results;
  }

  static fromObject(object) {
    return new UserRecord(
      object.id,
      object.firstName,
      object.lastName,
      object.age,
      object.weight,
      object.income,
      object.stateId
    );
  }

  static toObjects(users) {
    const objects = [];

    for (let user of users) {
      const object = this.toObject(user);

      objects.push(object);
    }

    return objects;
  }

  static toObject(user) {
    const object = {
      id: user.getId(),
      firstName: user.getFirstName(),
      lastName: user.getLastName(),
      age: user.getAge(),
      weight: user.getWeight(),
      income: user.getIncome(),
      stateId: user.getStateId()
    };

    return object;
  }
}
