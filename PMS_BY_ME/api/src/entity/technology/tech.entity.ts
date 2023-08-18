/* eslint-disable prettier/prettier */
import { 
    Column, 
    CreateDateColumn, 
    Entity, 
    PrimaryGeneratedColumn, 
    UpdateDateColumn
    } 
from "typeorm";
// import { ProjectsApp } from "../project/projects_app.entity";
// import { TechLibraries } from "./tech_libraries.entity";

@Entity()
export class Tech {
    @PrimaryGeneratedColumn()
    id: number
    // Column name
    @Column({
        type:'varchar',
        length : 100,
        nullable : true
    })
    name: string
    // Column language
    @Column({
        type: 'varchar',
        length: 100,
    })
    language: string
    // Column icon
    @Column({
        type: 'varchar2',
        nullable: true
    })
    icon: string
    // Column description
    @Column({
        type: 'varchar',
        nullable: true
    })
    description: string
    // // Inverse 1:M
    // @OneToMany( ()=> TechLibraries, (techlibraries)=> techlibraries.tech )
    // TechLibraries: TechLibraries
    //  // Inverse 1:M
    //  @OneToMany( ()=> ProjectsApp, (projects_app)=> projects_app.Tech )
    //  Tech: ProjectsApp
    // TimeStamp
    @CreateDateColumn()
    created_at?: Date; //Create Date
    @UpdateDateColumn()
    updated_at?: Date; //Updated date
}
