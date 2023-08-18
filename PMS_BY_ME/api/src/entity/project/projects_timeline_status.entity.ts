/* eslint-disable prettier/prettier */
import { 
    Column, 
    CreateDateColumn, 
    Entity,  
    PrimaryGeneratedColumn, 
    UpdateDateColumn
    } 
from "typeorm";
// import { ProjectsTimeLine } from "./projects_timeline.entity";

@Entity()
export class ProjectsTimeLineStat {
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
    // @OneToMany( ()=> ProjectsTimeLine, (projects_timeline)=> projects_timeline.ProjectsTimeLineStat )
    // ProjectsTimeLine: ProjectsTimeLine
    // TimeStamp
    @CreateDateColumn()
    created_at?: Date; //Create Date
    @UpdateDateColumn()
    updated_at?: Date; //Updated date
}
