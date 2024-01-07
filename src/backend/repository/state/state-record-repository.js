import DbClient from '@/backend/config/db-client';
import StateRecordMapper from './state-record-mapper';

export default class StateRecordRepository {

  static async findAll() {
    console.log('[StateRecordRepository#findAll]');

    const results = await DbClient.executeStatement(`
      SELECT *
      FROM states
    `);

    const stateData = results[0];

    const stateRecords = StateRecordMapper.fromObjectCollection(stateData);

    return stateRecords;
  }

  static async findById(id) {
    console.log(`[StateRecordRepository#findById] ${id}`);

    const sql = `
      SELECT *
      FROM states
      WHERE id = ?
    `

    const values = [id];

    const results = await DbClient.executeStatementWithParams(sql, values);

    const stateRecordDatum = results[0][0];

    const stateRecord = StateRecordMapper.fromObject(stateRecordDatum);

    return stateRecord;
  }

  static async create(stateRecord) {
    console.log(`[StateRecordRepository#create] ${stateRecord}`);

    const sql = `
      INSERT INTO states (name, symbol)
      VALUES (?, ?)
    `;

    const values = [
      stateRecord.getName(),
      stateRecord.getSymbol(),
    ];

    await DbClient.executeStatementWithParams(sql, values);
  }

  static async update(stateRecord) {
    console.log(`[StateRecordRepository#update] ${stateRecord}`);

    const sql = `
      UPDATE states
      SET name = ?,
          symbol = ?,
      WHERE id = ?
    `;

    const values = [
      stateRecord.getName(),
      stateRecord.getSymbol(),
      stateRecord.getId()
    ];

    await DbClient.executeStatementWithParams(sql, values);
  }

  static async destroy(id) {
    console.log(`[StateRecordRepository#destroy] ${id}`);

    const sql = `
      DELETE FROM states
      WHERE id = ?
    `;

    const values = [id];

    await DbClient.executeStatementWithParams(sql, values);
  }
}
