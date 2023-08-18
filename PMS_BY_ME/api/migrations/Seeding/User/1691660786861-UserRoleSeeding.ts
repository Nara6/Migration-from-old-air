/* eslint-disable prettier/prettier */
import { MigrationInterface, QueryRunner } from "typeorm"

export class UserRoleSeeding1691660786861 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
               
        const usersRoleToSeed= [
            {kh_name: 'Management', en_name: 'Management'},
            {kh_name: 'Super Admin', en_name: 'Super Admin'},
            {kh_name: 'Project Admin', en_name: 'Project Admin'},
            {kh_name: 'Project Lead', en_name: 'Project Lead'},
            {kh_name: 'DevOps Head', en_name: 'DevOps Head'},
            {kh_name: 'Developer', en_name: 'Developer'},
        ];
            // Insert roles
        for (const role of usersRoleToSeed) {
            await queryRunner.query(
            `INSERT INTO "users_role"("kh_name", "en_name") VALUES ('${role.kh_name}', '${role.en_name}')`
            );
        }
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
