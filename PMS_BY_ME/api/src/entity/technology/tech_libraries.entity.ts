/* eslint-disable prettier/prettier */
import { 
    Column, 
    CreateDateColumn, 
    Entity, 
    JoinColumn, 
    ManyToOne, 
    OneToMany, 
    PrimaryGeneratedColumn, 
    UpdateDateColumn
    } 
from "typeorm";
import { Tech } from "./tech.entity";
import { TechLibsType } from "./tech_libs_type.entity";

@Entity()
export class TechLibraries {
    @PrimaryGeneratedColumn()
    id: number
    // Column tech_id M:1
    @ManyToOne( ()=> Tech ,{
        onDelete:"CASCADE"
    })
    @JoinColumn(
        {
            name: 'tech_id',
            referencedColumnName: 'id'
        }
    )
    tech: Tech
    // Column type_id M:1
    @ManyToOne( ()=> TechLibsType, {
        onDelete: 'CASCADE'
    })
    @JoinColumn(
        {
            name: 'type_id',
            referencedColumnName: 'id'
        }
    )
    type_id: TechLibsType
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
        nullable: true
    })
    icon: string

    
    // TimeStamp
    @CreateDateColumn()
    created_at?: Date; //Create Date
    @UpdateDateColumn()
    updated_at?: Date; //Updated date
}
