import { registerAs } from '@nestjs/config';
import * as process from 'process';

// @Todo need to understand implementation of multi database solution
export const databaseConfig = registerAs('database', () => ({
  host: process.env.POSTGRES_HOST,
  port: process.env.POSTGRES_PORT || 5432,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DATABASE,
  type: 'postgres',
}));
