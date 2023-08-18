/* eslint-disable prettier/prettier */
import { MigrationInterface, QueryRunner } from "typeorm";

export class User1691640332563 implements MigrationInterface {
    name = 'User1691640332563'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users_department" ("id" number GENERATED BY DEFAULT AS IDENTITY, "kh_name" varchar2(100), "en_name" varchar2(100), "created_at" timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL, "updated_at" timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL, CONSTRAINT "PK_0921d1972cf861d568f5271cd85" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users_office" ("id" number GENERATED BY DEFAULT AS IDENTITY, "kh_name" varchar2(100), "en_name" varchar2(100), "created_at" timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL, "updated_at" timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL, "department_id" number, CONSTRAINT "REL_232bb31e9895aadc4a044b9a55" UNIQUE ("department_id"), CONSTRAINT "PK_6b31546fc92b0d7344f032d0447" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users_position" ("id" number GENERATED BY DEFAULT AS IDENTITY, "kh_name" varchar2(100), "en_name" varchar2(100), "created_at" timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL, "updated_at" timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL, CONSTRAINT "PK_8e29a9d2f1fa57ebf1a4ce17353" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users_role" ("id" number GENERATED BY DEFAULT AS IDENTITY, "kh_name" varchar2(100), "en_name" varchar2(100), "created_at" timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL, "updated_at" timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL, CONSTRAINT "PK_a2cecd1a3531c0b041e29ba46e1" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users_title" ("id" number GENERATED BY DEFAULT AS IDENTITY, "kh_name" varchar2(100), "en_name" varchar2(100), "created_at" timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL, "updated_at" timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL, CONSTRAINT "PK_4ce68a5a8f867dfff4114951c15" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" number GENERATED BY DEFAULT AS IDENTITY, "vpn_account" varchar2(100), "avatar" varchar2(100), "kh_name" varchar2(100), "en_name" varchar2(100), "username" varchar2(100) NOT NULL, "email" varchar2(100) NOT NULL, "phone" varchar2(100), "tg_username" varchar2(100), "password" varchar2(255) NOT NULL, "about" varchar2(255) NOT NULL, "created_at" timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL, "updated_at" timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL, "deleted_at" timestamp, "department_id" number, "office_id" number, "position_id" number, "title_id" number, "role_id" number, CONSTRAINT "UQ_fe0bb3f6520ee0469504521e710" UNIQUE ("username"), CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users_log" ("id" number GENERATED BY DEFAULT AS IDENTITY, "ip" varchar2(20) NOT NULL, "os" varchar2(100) NOT NULL, "agent" varchar2(100), "created_at" timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL, "user_id" number, CONSTRAINT "PK_97f34e82aaed57b121805dd6aa9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "users_office" ADD CONSTRAINT "FK_232bb31e9895aadc4a044b9a559" FOREIGN KEY ("department_id") REFERENCES "users_department" ("id") ON DELETE CASCADE`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_0921d1972cf861d568f5271cd85" FOREIGN KEY ("department_id") REFERENCES "users_department" ("id") ON DELETE CASCADE`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_6b31546fc92b0d7344f032d0447" FOREIGN KEY ("office_id") REFERENCES "users_office" ("id") ON DELETE CASCADE`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_8e29a9d2f1fa57ebf1a4ce17353" FOREIGN KEY ("position_id") REFERENCES "users_position" ("id") ON DELETE CASCADE`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_4ce68a5a8f867dfff4114951c15" FOREIGN KEY ("title_id") REFERENCES "users_title" ("id") ON DELETE CASCADE`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_a2cecd1a3531c0b041e29ba46e1" FOREIGN KEY ("role_id") REFERENCES "users_role" ("id") ON DELETE CASCADE`);
        await queryRunner.query(`ALTER TABLE "users_log" ADD CONSTRAINT "FK_2409f7ea0bd5874c358ab3e3087" FOREIGN KEY ("user_id") REFERENCES "users" ("id") ON DELETE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users_log" DROP CONSTRAINT "FK_2409f7ea0bd5874c358ab3e3087"`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_a2cecd1a3531c0b041e29ba46e1"`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_4ce68a5a8f867dfff4114951c15"`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_8e29a9d2f1fa57ebf1a4ce17353"`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_6b31546fc92b0d7344f032d0447"`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_0921d1972cf861d568f5271cd85"`);
        await queryRunner.query(`ALTER TABLE "users_office" DROP CONSTRAINT "FK_232bb31e9895aadc4a044b9a559"`);
        await queryRunner.query(`DROP TABLE "users_log"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "users_title"`);
        await queryRunner.query(`DROP TABLE "users_role"`);
        await queryRunner.query(`DROP TABLE "users_position"`);
        await queryRunner.query(`DROP TABLE "users_office"`);
        await queryRunner.query(`DROP TABLE "users_department"`);
    }

}
