import { ApiProperty } from "@nestjs/swagger";
import { BaseEntity } from "src/Config/base.entity";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Country extends BaseEntity{
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
    country_origin: string;

    @ApiProperty()
    @Column({
        type: 'bigint'
    })
    deleted: number;

}