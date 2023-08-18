/* eslint-disable prettier/prettier */
import { 
    Column, 
    CreateDateColumn, 
    Entity, 
    PrimaryGeneratedColumn, 
    UpdateDateColumn
    } 
from "typeorm";
// import { ProjectsApp } from "./projects_app.entity";

@Entity()
export class ProjectsAppType {
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
    //  // Inverse 1:M
    //  @OneToMany( ()=> ProjectsApp, (projects_app)=> projects_app.ProjectsAppType )
    //  ProjectsAppType: ProjectsApp
    // TimeStamp
    @CreateDateColumn()
    created_at?: Date; //Create Date
    @UpdateDateColumn()
    updated_at?: Date; //Updated date
}
