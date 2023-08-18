/* eslint-disable prettier/prettier */
import { MigrationInterface, QueryRunner } from "typeorm"

export class UserDepartmentSeeding1691660921863 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        const usersDepartmentToSeed= [
            {kh_name: 'Department of Administration and Public Relation', en_name: 'Department of Administration and Public Relation'},
            {kh_name: 'Department of Technology', en_name: 'Department of Technology'},
            {kh_name: 'Department of Infrastructure and Cyber Security', en_name: 'Department of Infrastructure and Cyber Security'},
        ];
        // Insert departments
        for (const department of usersDepartmentToSeed) {
            await queryRunner.query(
            `INSERT INTO "users_department"("kh_name", "en_name") VALUES ('${department.kh_name}', '${department.en_name}')`
            );
        }
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
