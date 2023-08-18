/* eslint-disable prettier/prettier */
import { 
    Column, 
    CreateDateColumn, 
    Entity, 
    PrimaryGeneratedColumn, 
    UpdateDateColumn
    } 
from "typeorm";
// import { Projects } from "./projects.entity";

@Entity()
export class ProjectsStatus {
    @PrimaryGeneratedColumn()
    id: number
    // Column name
    @Column({
        type:'varchar',
        length : 100,
        nullable : true
    })
    name: string
    // Column color
    @Column({
        type:'varchar',
        length : 50,
        nullable : true
    })
    color: string
    // // Inverse 1:M
    // @OneToMany( ()=> Projects, (projects)=> projects.ProjectsStatus )
    // ProjectsStatus: Projects
    // TimeStamp
    @CreateDateColumn()
    created_at?: Date; //Create Date
    @UpdateDateColumn()
    updated_at?: Date; //Updated date
}
