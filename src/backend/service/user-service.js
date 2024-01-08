import UserAccessor from '@/backend/accessor/db/user/user-db-accessor';

export default class UserService {

  static async findAll() {
    console.log('[UserService#findAll]');

    const results = await UserAccessor.findAll();

    return results;
  }

  static async findById(id) {
    console.log(`[UserService#findById] ${id}`);

    const result = await UserAccessor.findById(id);

    return result;
  }

  static async create(user) {
    console.log(`[UserService#create] ${user}`);

    await UserAccessor.create(user);
  }

  static async update(user) {
    console.log(`[UserService#update] ${user}`);

    await UserAccessor.update(user);
  }

  static async destroy(id) {
    console.log(`[UserService#destroy] ${id}`);

    await UserAccessor.destroy(id);
  }
}
