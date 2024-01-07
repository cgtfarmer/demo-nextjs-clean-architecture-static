import UserService from '@/backend/repository/user/user-service';
import UserDtoMapper from '@/backend/mapper/user-dto-mapper';

export default class UserController {

  static async index(req, res) {
    console.log('[UserController#index]');

    const users = await UserService.findAll();

    const response = UserDtoMapper.fromUsers(users);

    console.log(`Response: ${JSON.stringify(response)}`);
    res.status(200).json(response);
  }

  static async show(req, res) {
    const { id } = req.query;
    console.log(`[UserController#show] ${id}`);

    const user = await UserService.findById(id);

    const response = UserDtoMapper.fromUser(user);

    console.log(`Response: ${JSON.stringify(response)}`);
    res.status(200).json(response);
  }

  static async create(req, res) {
    const data = req.body;
    console.log(`[UserController#create] ${JSON.stringify(data)}`);

    const user = UserDtoMapper.toUser(data);

    await UserService.create(user);

    const response = { msg: 'Created successfully' };

    console.log(`Response: ${JSON.stringify(response)}`);
    res.status(200).json(response);
  }

  static async update(req, res) {
    const { id } = req.query;
    const data = req.body;
    console.log(`[UserController#update] ${id}, ${JSON.stringify(data)}`);

    const user = UserDtoMapper.toUser(data);
    user.setId(id);

    await UserService.update(user);

    const response = { msg: 'Updated successfully' };

    console.log(`Response: ${JSON.stringify(response)}`);
    res.status(200).json(response);
  }

  static async destroy(req, res) {
    const { id } = req.query;
    console.log(`[UserController#destroy] ${id}`);

    await UserService.destroy(id);

    const response = { msg: 'Deleted successfully' };

    console.log(`Response: ${JSON.stringify(response)}`);
    res.status(200).json(response);
  }
}
