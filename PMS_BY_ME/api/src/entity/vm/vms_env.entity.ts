/* eslint-disable prettier/prettier */
import { 
    Column, 
    CreateDateColumn, 
    Entity, 
    PrimaryGeneratedColumn, 
    UpdateDateColumn
    } 
from "typeorm";
// import { ProjectsAppEnv } from "../project/projects_app_env.entity";
// import { VMs } from "./vms.entity";

@Entity()
export class VMsEnv {
    @PrimaryGeneratedColumn()
    id: number
    // Column name
    @Column({
        type:'varchar',
        length : 100,
        nullable : true
    })
    name: string
    // // Inverse 1:M 
    // @OneToMany( () => VMs ,(vms)=> vms.env )
    // vm: VMs
    //  // Inverse 1:M
    //  @OneToMany( ()=> ProjectsAppEnv, (projects_app_env)=> projects_app_env.VMsEnv )
    //  VMsEnv: ProjectsAppEnv
    // TimeStamp
    @CreateDateColumn()
    created_at?: Date; //Create Date
    @UpdateDateColumn()
    updated_at?: Date; //Updated date
}
