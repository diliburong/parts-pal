import { Entity, PrimaryGeneratedColumn, Column,EntitySchema, CreateDateColumn,BaseEntity } from 'typeorm';

// https://github.com/typeorm/typeorm/issues/2797#issuecomment-789019790
// export interface User {
//   id: number;
//   firstName: string;
//   lastName: string;
//   age: number;
// }

// export const User = new EntitySchema<User>({
//   name: 'user',
//   columns: {
//       id: {
//           type: Number,
//           primary: true,
//           generated: true
//       },
//       firstName: {
//           type: String
//       },
//       lastName: {
//           type: String
//       },
//       age: {
//           type: Number
//       }
//   }
// });


// 使用这种方法会让表格中的名字不一致，
// two you should set strictPropertyInitialization false in tsconfig
@Entity('user')
export class User {
  @PrimaryGeneratedColumn()
  id!: number

  @Column({ type: 'varchar' })
  name!: string

  @Column("text")
  email!: string;
  @Column("text")
  password!: string;
}