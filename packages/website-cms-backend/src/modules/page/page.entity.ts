import { Column, Model, Table, PrimaryKey, AutoIncrement, AllowNull } from 'sequelize-typescript'

@Table({
  tableName: 'pages',
  underscored: true,
  timestamps: false,
})
export class Page extends Model<Page> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number

  @AllowNull(false)
  @Column
  name: string

  @AllowNull(false)
  @Column
  title: string

  @AllowNull(false)
  @Column
  description: string

  @AllowNull(false)
  @Column
  keywords: string

  @AllowNull(false)
  @Column
  route: string

  @AllowNull(false)
  @Column
  metadata: string

  @Column
  createdTime: Date

  @Column
  updatedTime: Date

  @Column
  deletedTime: Date

  @Column
  createdBy: string

  @Column
  updatedBy: string

  @Column
  deletedBy: string
}
