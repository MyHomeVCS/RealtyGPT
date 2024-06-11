import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

// @Todo should scale,
@Entity()
export class Chat {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({ unique: true })
  userId: string;

  @Column()
  text: string;

  @CreateDateColumn()
  createdAt: Date;
}
