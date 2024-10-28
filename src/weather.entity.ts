import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'users'})
export class WeatherEntity {
    @PrimaryGeneratedColumn()
    users_id : number;
    
    @Column({
        type: 'datetime',
        default : () => 'CURRENT_TIMESTAMP'
    })
    insert_date: Date;

    @Column()
    name: string;

    @Column()
    surname: string;
}
