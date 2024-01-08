import StateRecord from './state-record';

export default class StateRecordMapper {

  static fromObjects(objects) {
    const results = [];

    for (let object of objects) {
      results.push(this.fromObject(object));
    }

    return results;
  }

  static fromObject(object) {
    console.log(`[StateRecordMapper#fromObject] ${JSON.stringify(object)}`);

    return new StateRecord(object.id, object.name, object.symbol);
  }

  static toObjects(states) {
    const objects = [];

    for (let state of states) {
      const object = this.toObject(state);

      objects.push(object);
    }

    return objects;
  }

  static toObject(state) {
    const object = {
      id: state.getId(),
      name: state.getName(),
      symbol: state.getSymbol(),
    };

    return object;
  }
}
