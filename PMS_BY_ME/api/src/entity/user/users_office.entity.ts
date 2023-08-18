/* eslint-disable prettier/prettier */
import { 
    Column,
    Entity, 
    PrimaryGeneratedColumn,
    OneToOne, 
    JoinColumn, 
    CreateDateColumn, 
    UpdateDateColumn, 
    } 
from "typeorm";

// import { Users } from "./users.entity";
import { UsersDepartment } from "./users_department.entity";

@Entity()
export class UsersOffice {
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
    // Column department_id 1:1
    @OneToOne(()=> UsersDepartment,{
        onDelete:"CASCADE",
    } )
    @JoinColumn(
        {
            name :"department_id"
        }
    )
    department_id: UsersDepartment
    // // Column Inverse 1:M
    // @OneToMany( ()=> Users, (users)=> users.office )
    // user: Users
    //TimeStamp
    @CreateDateColumn()
    created_at?: Date; //Create Date
    @UpdateDateColumn()
    updated_at?: Date; //Updated date
}
