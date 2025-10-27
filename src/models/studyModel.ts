import { Entity, ObjectIdColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { ObjectId } from 'mongodb'; 

@Entity('studies') 
export class Study {

  @ObjectIdColumn() 
  id: ObjectId; 

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  subject: string; 

  @Column({ default: 0 })
  durationMinutes: number; 

  @Column({ default: false })
  completed: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}