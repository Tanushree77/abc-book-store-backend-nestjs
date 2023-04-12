import { ApiProperty } from "@nestjs/swagger";
import { BaseEntity } from "src/Config/base.entity";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class LogTracker extends BaseEntity{
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
    action: string;

    @ApiProperty()
    @Column({
        nullable: false,
        default: " "
    })
    from_ip: string;

    @ApiProperty()
    @Column({
        nullable: false,
        default: " "
    })
    data_store: string;

    @ApiProperty()
    @Column({
        nullable: false,
        default: " "
    })
    endPoint: string;

    @ApiProperty()
    @Column({
        nullable: false,
        default: " "
    })
    method: string;

    @ApiProperty()
    @Column({
        nullable: false,
        default: " "
    })
    responseStatus: string;

    @ApiProperty()
    @Column({
        nullable: false,
        default: " "
    })
    user_name: string;

    @ApiProperty()
    @Column({
        nullable: false,
        default: " "
    })
    user_type: string;

    @ApiProperty()
    @Column({
        type: 'bigint'
    })
    deleted: number;

}