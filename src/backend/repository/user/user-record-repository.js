import DbClient from '@/backend/config/db-client';
import UserRecordMapper from './user-record-mapper';

export default class UserRecordRepository {

  static async findAll() {
    console.log('[UserRecordRepository#findAll]');

    const results = await DbClient.executeStatement(`
      SELECT *
      FROM users
    `);

    const userData = results[0];

    const userRecords = UserRecordMapper.fromObjects(userData);

    return userRecords;
  }

  static async findById(id) {
    console.log(`[UserRecordRepository#findById] ${id}`);

    const sql = `
      SELECT *
      FROM users
      WHERE id = ?
    `

    const values = [id];

    const results = await DbClient.executeStatementWithParams(sql, values);

    const userRecordDatum = results[0][0];

    const userRecord = UserRecordMapper.fromObject(userRecordDatum);

    return userRecord;
  }

  static async create(userRecord) {
    console.log(`[UserRecordRepository#create] ${userRecord}`);

    const sql = `
      INSERT INTO users (firstName, lastName, age, weight, income, stateId)
      VALUES (?, ?, ?, ?, ?, ?)
    `;

    const values = [
      userRecord.getFirstName(),
      userRecord.getLastName(),
      userRecord.getAge(),
      userRecord.getWeight(),
      userRecord.getIncome(),
      userRecord.getStateId()
    ];

    await DbClient.executeStatementWithParams(sql, values);
  }

  static async update(userRecord) {
    console.log(`[UserRecordRepository#update] ${userRecord}`);

    const sql = `
      UPDATE users
      SET firstName = ?,
          lastName = ?,
          age = ?,
          weight = ?,
          income = ?,
          stateId = ?
      WHERE id = ?
    `;

    const values = [
      userRecord.getFirstName(),
      userRecord.getLastName(),
      userRecord.getAge(),
      userRecord.getWeight(),
      userRecord.getIncome(),
      userRecord.getStateId(),
      userRecord.getId()
    ];

    await DbClient.executeStatementWithParams(sql, values);
  }

  static async destroy(id) {
    console.log(`[UserRecordRepository#destroy] ${id}`);

    const sql = `
      DELETE FROM users
      WHERE id = ?
    `;

    const values = [id];

    await DbClient.executeStatementWithParams(sql, values);
  }
}
