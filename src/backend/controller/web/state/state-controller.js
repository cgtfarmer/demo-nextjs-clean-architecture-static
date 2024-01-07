import StateService from '@/backend/repository/state/state-service';
import StateDtoMapper from '@/backend/mapper/state-dto-mapper';

export default class StateController {

  static async index(req, res) {
    console.log('[StateController#index]');

    const states = await StateService.findAll();

    const response = StateDtoMapper.fromStates(states);

    console.log(`Response: ${JSON.stringify(response)}`);
    res.status(200).json(response);
  }

  static async show(req, res) {
    const { id } = req.query;
    console.log(`[StateController#show] ${id}`);

    const state = await StateService.findById(id);

    const response = StateDtoMapper.fromState(state);

    console.log(`Response: ${JSON.stringify(response)}`);
    res.status(200).json(response);
  }

  static async create(req, res) {
    const data = req.body;
    console.log(`[StateController#create] ${JSON.stringify(data)}`);

    const state = StateDtoMapper.toState(data);

    await StateService.create(state);

    const response = { msg: 'Created successfully' };

    console.log(`Response: ${JSON.stringify(response)}`);
    res.status(200).json(response);
  }

  static async update(req, res) {
    const { id } = req.query;
    const data = req.body;
    console.log(`[StateController#update] ${id}, ${JSON.stringify(data)}`);

    const state = StateDtoMapper.toState(data);
    state.setId(id);

    await StateService.update(state);

    const response = { msg: 'Updated successfully' };

    console.log(`Response: ${JSON.stringify(response)}`);
    res.status(200).json(response);
  }

  static async destroy(req, res) {
    const { id } = req.query;
    console.log(`[StateController#destroy] ${id}`);

    await StateService.destroy(id);

    const response = { msg: 'Deleted successfully' };

    console.log(`Response: ${JSON.stringify(response)}`);
    res.status(200).json(response);
  }
}
