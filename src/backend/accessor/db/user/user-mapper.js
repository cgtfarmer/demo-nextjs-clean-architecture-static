import UserRecord from '@/backend/repository/user/user-record';
import User from '@/backend/model/user';

export default class UserMapper {

  static fromUserRecords(userRecords) {
    const results = [];

    for (let object of userRecords) {
      results.push(this.fromUserRecord(object));
    }

    return results;
  }

  static fromUserRecord(userRecord) {
    return new User(
      userRecord.getId(),
      userRecord.getFirstName(),
      userRecord.getLastName(),
      userRecord.getAge(),
      userRecord.getWeight(),
      userRecord.getIncome(),
      userRecord.getStateId()
    );
  }

  static toUserRecords(users) {
    const objects = [];

    for (let user of users) {
      const object = this.toUserRecord(user);

      objects.push(object);
    }

    return objects;
  }

  static toUserRecord(user) {
    return new UserRecord(
      user.getId(),
      user.getFirstName(),
      user.getLastName(),
      user.getAge(),
      user.getWeight(),
      user.getIncome(),
      user.getStateId()
    );
  }
}
