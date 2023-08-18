/* eslint-disable prettier/prettier */
import { 
    Column, 
    CreateDateColumn, 
    Entity, 
    PrimaryGeneratedColumn, 
    UpdateDateColumn
    } 
from "typeorm";
// import { VMs } from "./vms.entity";

@Entity()
export class VMsOS {
    @PrimaryGeneratedColumn()
    id: number
    // Column name
    @Column({
        type:'varchar',
        length : 100,
        nullable : true
    })
    name: string
    // Column icon
    @Column({
        type: 'varchar2',
        nullable : true
    })
    icon:string
    // // Inverse 1:M 
    // @OneToMany( () => VMs ,(vms)=> vms.os )
    // vm: VMs
    // TimeStamp
    @CreateDateColumn()
    created_at?: Date; //Create Date
    @UpdateDateColumn()
    updated_at?: Date; //Updated date
}
