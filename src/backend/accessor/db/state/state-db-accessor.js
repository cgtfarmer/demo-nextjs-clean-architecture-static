import StateRecordRepository from '@/backend/repository/state-record-repository';
import StateMapper from './state-mapper';

export default class StateDbAccessor {

  static async findAll() {
    console.log('[StateDbAccessor#findAll]');

    const results = await StateRecordRepository.findAll();

    const states = StateMapper.fromStateRecords(results);

    return states;
  }

  static async findById(id) {
    console.log(`[StateDbAccessor#findById] ${id}`);

    const results = await StateRecordRepository.findById(id);

    const states = StateMapper.fromStateRecords(results);

    return states;
  }

  static async create(state) {
    console.log(`[StateDbAccessor#create] ${state}`);

    const stateRecord = StateMapper.fromState(state);

    await StateRecordRepository.create(stateRecord);
  }

  static async update(state) {
    console.log(`[StateDbAccessor#update] ${state}`);

    const stateRecord = StateMapper.fromState(state);

    await StateRecordRepository.update(stateRecord);
  }

  static async destroy(id) {
    console.log(`[StateDbAccessor#destroy] ${id}`);

    await StateRecordRepository.destroy(id);
  }
}
