/* eslint-disable prettier/prettier */
import { 
    Column, 
    CreateDateColumn, 
    Entity, 
    PrimaryGeneratedColumn, 
    UpdateDateColumn
    } 
from "typeorm";

// import { Users } from "./users.entity";
@Entity()
export class UsersRole {
    @PrimaryGeneratedColumn()
    id: number
    // Column kh_name
    @Column({
        type:'varchar',
        length : 100,
        nullable : true
    })
    kh_name: string
    // Column en_name
    @Column({
        type:'varchar',
        length : 100,
        nullable : true
    })
    en_name:string
    // // Column Inverse 1:M
    // @OneToMany( ()=> Users, (users)=> users.role )
    // user: Users
    // Timestamp
    @CreateDateColumn()
    created_at?: Date; //Create Date
    @UpdateDateColumn()
    updated_at?: Date; //Updated date
}
