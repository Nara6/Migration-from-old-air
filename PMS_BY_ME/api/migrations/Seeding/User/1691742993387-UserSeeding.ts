/* eslint-disable prettier/prettier */
import { MigrationInterface, QueryRunner } from "typeorm"
import { UsersRole } from "src/entity/user/users_role.entity"
import * as bcrypt from 'bcrypt';
import * as dotenv from 'dotenv';
const path = `${__dirname}/../../.env`;
dotenv.config({ path: path });

export class UserSeeding1691742993387 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        const saltRounds = parseInt(process.env.BCRYPT_SALT_ROUNDS || '10', 10);
        
        const usersToSeed= [
            {
                department_id: 1,
                office_id: 1,
                position_id: 1,
                title_id: 1,
                role_id: 1,
                vpn_account: 1,
                avatar: 'https://static-00.iconduck.com/assets.00/user-avatar-icon-512x512-vufpcmdn.png',
                kh_name: 'Nara',
                en_name: 'Nara',
                username: 'nara',
                email: 'nara@gmail.com',
                phone: '016838248',
                tg_username: 'moo_raaa',
                password: '123456',
                about: 'Nothing'
            },

        ];

        // Insert users
        for (const user of usersToSeed) {
            const hashedPassword = await bcrypt.hash(user.password, saltRounds);
            await queryRunner.query(
            `INSERT INTO "users"("department_id", "office_id", "position_id", "title_id", "role_id", "vpn_account", "avatar", "kh_name", "en_name", "username", "email", "phone", "tg_username", "password", "about") VALUES (${user.department_id}, ${user.office_id}, ${user.position_id}, ${user.title_id}, ${user.role_id}, ${user.vpn_account}, '${user.avatar}', '${user.kh_name}', '${user.en_name}', '${user.username}', '${user.email}', '${user.phone}', '${user.tg_username}', '${hashedPassword}', '${user.about}')`
            );
        }

        
    }

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "users_role"`);
    }

}
