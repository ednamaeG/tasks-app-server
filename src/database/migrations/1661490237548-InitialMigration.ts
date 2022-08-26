import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1661490237548 implements MigrationInterface {
    name = 'InitialMigration1661490237548'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`task\` (\`id\` varchar(36) NOT NULL, \`note\` varchar(255) NOT NULL, \`user_id\` varchar(255) NOT NULL, \`date_created\` datetime NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`user\` (\`id\` varchar(36) NOT NULL, \`first_name\` varchar(255) NOT NULL, \`last_name\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, \`date_created\` datetime NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`user\``);
        await queryRunner.query(`DROP TABLE \`task\``);
    }

}
