import StateAccessor from '@/backend/repository/state-accessor';

export default class StateService {

  static async findAll() {
    console.log('[StateService#findAll]');

    const results = await StateAccessor.findAll();

    return results;
  }

  static async findById(id) {
    console.log(`[StateService#findById] ${id}`);

    const result = await StateAccessor.findById(id);

    return result;
  }

  static async create(state) {
    console.log(`[StateService#create] ${state}`);

    await StateAccessor.create(state);
  }

  static async update(state) {
    console.log(`[StateService#update] ${state}`);

    await StateAccessor.update(state);
  }

  static async destroy(id) {
    console.log(`[StateService#destroy] ${id}`);

    await StateAccessor.destroy(id);
  }
}
