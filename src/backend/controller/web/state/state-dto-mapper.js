import StateDto from './state-dto';
import State from '@/model/state';

export default class StateDtoMapper {

  static fromStates(states) {
    const results = [];

    for (let object of states) {
      results.push(this.fromState(object));
    }

    return results;
  }

  static fromState(state) {
    return new StateDto(
      state.getId(),
      state.getName(),
      state.getSymbol()
    );
  }

  static toStates(stateDtos) {
    const objects = [];

    for (let state of stateDtos) {
      const object = this.toState(state);

      objects.push(object);
    }

    return objects;
  }

  static toState(stateDto) {
    return new State(
      stateDto.getId(),
      stateDto.getName(),
      stateDto.getSymbol()
    );
  }
}
