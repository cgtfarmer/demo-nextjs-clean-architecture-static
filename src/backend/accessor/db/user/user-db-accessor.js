import UserRecordRepository from '@/backend/repository/user/user-record-repository';
import UserMapper from './user-mapper';

export default class UserDbAccessor {

  static async findAll(stateId) {
    console.log(`[UserDbAccessor#findAll] stateId=${stateId}`);

    const results = await UserRecordRepository.findAll(stateId);

    const users = UserMapper.fromUserRecords(results);

    return users;
  }

  static async findById(id) {
    console.log(`[UserDbAccessor#findById] ${id}`);

    const results = await UserRecordRepository.findById(id);

    const users = UserMapper.fromUserRecords(results);

    return users;
  }

  static async create(user) {
    console.log(`[UserDbAccessor#create] ${user}`);

    const userRecord = UserMapper.toUserRecord(user);

    await UserRecordRepository.create(userRecord);
  }

  static async update(user) {
    console.log(`[UserDbAccessor#update] ${user}`);

    const userRecord = UserMapper.toUserRecord(user);

    await UserRecordRepository.update(userRecord);
  }

  static async destroy(id) {
    console.log(`[UserDbAccessor#destroy] ${id}`);

    await UserRecordRepository.destroy(id);
  }
}
