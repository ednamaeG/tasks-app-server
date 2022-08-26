import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1661490364579 implements MigrationInterface {
    name = 'InitialMigration1661490364579'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`task\` CHANGE \`date_created\` \`date_created\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`date_created\` \`date_created\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`date_created\` \`date_created\` datetime(0) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`task\` CHANGE \`date_created\` \`date_created\` datetime(0) NOT NULL`);
    }

}
