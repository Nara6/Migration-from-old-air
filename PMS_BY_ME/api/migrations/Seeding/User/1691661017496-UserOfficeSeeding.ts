/* eslint-disable prettier/prettier */
import { MigrationInterface, QueryRunner } from "typeorm"

export class UserOfficeSeeding1691661017496 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        const usersOfficeToSeed= [
            {department_id: 1,kh_name: 'Office1', en_name: 'Office1'},
        ];
            // Insert offices
        for (const office of usersOfficeToSeed) {
            await queryRunner.query(
            `INSERT INTO "users_office"("department_id", "kh_name", "en_name") VALUES (${office.department_id}, '${office.kh_name}', '${office.en_name}')`
            );
        }
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
