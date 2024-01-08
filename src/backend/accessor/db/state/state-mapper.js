import StateRecord from '@/backend/repository/state/state-record';
import State from '@/backend/model/state';

export default class StateMapper {

  static fromStateRecords(stateRecords) {
    const results = [];

    for (let object of stateRecords) {
      results.push(this.fromStateRecord(object));
    }

    return results;
  }

  static fromStateRecord(stateRecord) {
    console.log(`[StateMapper#fromStateRecord] ${JSON.stringify(stateRecord)}`);

    return new State(
      stateRecord.getId(),
      stateRecord.getName(),
      stateRecord.getSymbol()
    );
  }

  static toStateRecords(states) {
    const objects = [];

    for (let state of states) {
      const object = this.toStateRecord(state);

      objects.push(object);
    }

    return objects;
  }

  static toStateRecord(state) {
    return new StateRecord(
      state.getId(),
      state.getName(),
      state.getSymbol()
    );
  }
}
