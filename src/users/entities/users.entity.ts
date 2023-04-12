/* eslint-disable prettier/prettier */
import { ApiProperty } from "@nestjs/swagger";
import { BaseEntity } from "src/Config/base.entity";
import { Roles } from "src/roles/entities/roles.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity()
@Unique(['email'])
export class Users extends BaseEntity{
    @ApiProperty()
    @PrimaryGeneratedColumn({
        type: 'bigint'
    })
    id: number;

    @ApiProperty()
    @Column({
        nullable: false,
        default: " "
    })
    username: string;

    @ApiProperty()
    @Column({
        nullable: false,
        default: " "
    })
    email: string;

    @ApiProperty()
    @Column({
        nullable: false,
        default: " "
    })
    password: string;


    
    @ApiProperty()
    @Column({
        type: 'bigint'
    })
    role: number;
    @ManyToOne(type => Roles, roles => roles.id)
    @JoinColumn({ name: 'role'})
    roles : Roles;

    @ApiProperty()
    @Column({
        nullable: false,
        default: " "
    })
    mobile: string;

    @ApiProperty()
    @Column({
        nullable: false,
        default: " "
    })
    address: string;

    @ApiProperty()
    @Column({
        nullable: false,
        default: " "
    })
    country: string;

    @ApiProperty()
    @Column({
        nullable: false,
        default: " "
    })
    city: string;

    @ApiProperty()
    @Column({
        type: 'bigint'
    })
    deleted: number;

}