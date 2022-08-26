import { DataSource, DataSourceOptions } from 'typeorm';
import * as dotenv from 'dotenv';

dotenv.config();

const ENV = process.env;
const source = new DataSource({
    type: ENV.DATABASE_TYPE,
    host:ENV.DATABASE_HOST,
    port:ENV.DATABASE_PORT,
    username: ENV.DATABASE_USERNAME,
    password:ENV.DATABASE_PASSWORD,
    database: ENV.DATABASE_NAME,
    migrations: ['src/database/migrations/**/*{.ts,.js}'],
    entities: ["src/**/*.model.ts"],
} as DataSourceOptions);

export default source; 