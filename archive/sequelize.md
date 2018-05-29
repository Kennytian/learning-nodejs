# Sequelize 学习

## Getting started 入门指南

## Basic usage 基础用法

## Model Definition 定义模型
### Configuration 配置

- timestamps
```javascript
const Bar = sequelize.define('bar', { /* bla */ }, {
  // don't add the timestamp attributes (updatedAt, createdAt)
  timestamps: false,
}
```

`timestamps: false` 表示不添加 updatedAt, createdAt 字段到数据库中

- freezeTableName

freezeTableName 值默认是false。但当我们想创建一个 `wbUser` 表时，Sequelize会自动帮我们改为wbUsers；创建 user 表，就会自动改为 users 表，为了避免这种情况。

我们需要在定义时，设置为`freezeTableName: true`

```javascript
const Bar = sequelize.define('bar', { /* bla */ }, {
  freezeTableName: true,
  tableName: 'my_very_custom_table_name',
})
```

参考文档：https://stackoverflow.com/questions/21114499/how-to-make-sequelize-use-singular-table-names

## Model usage 使用模型

## Querying 查询

## Instances 实例

## Associations 联合（查询）

## Transactions 事务

## Scopes 范围
对数据库进行范围操作，比如 where, include, limit 等

## Hooks 勾子（监听）
### Order of Operations 操作顺序
```
(1)
  beforeBulkCreate(instances, options)
  beforeBulkDestroy(options)
  beforeBulkUpdate(options)
(2)
  beforeValidate(instance, options)
(-)
  validate
(3)
  afterValidate(instance, options)
  - or -
  validationFailed(instance, options, error)
(4)
  beforeCreate(instance, options)
  beforeDestroy(instance, options)
  beforeUpdate(instance, options)
  beforeSave(instance, options)
  beforeUpsert(values, options)
(-)
  create
  destroy
  update
(5)
  afterCreate(instance, options)
  afterDestroy(instance, options)
  afterUpdate(instance, options)
  afterSave(instance, options)
  afterUpsert(created, options)
(6)
  afterBulkCreate(instances, options)
  afterBulkDestroy(options)
  afterBulkUpdate(options)
```

## Raw queries 原始查询

## Migrations 迁移

## Working with legacy tables 使用已有数据表
### Tables 表
```javascript
sequelize.define('user', {

}, {
  tableName: 'users'
});
```

### Fields 字段
```javascript
sequelize.define('modelName', {
  userId: {
    type: Sequelize.INTEGER,
    field: 'user_id'
  }
});
```

### Primary keys 主键

Sequelize will assume your table has a id primary key property by default.

To define your own primary key:
```javascript
sequelize.define('collection', {
  uid: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true // Automatically gets converted to SERIAL for postgres
  }
});

sequelize.define('collection', {
  uuid: {
    type: Sequelize.UUID,
    primaryKey: true
  }
});
```

And if your model has no primary key at all you can use Model.removeAttribute('id');

### Foreign keys 外键

```javascript
// 1:1
Organization.belongsTo(User, {foreignKey: 'owner_id'});
User.hasOne(Organization, {foreignKey: 'owner_id'});

// 1:M
Project.hasMany(Task, {foreignKey: 'tasks_pk'});
Task.belongsTo(Project, {foreignKey: 'tasks_pk'});

// N:M
User.hasMany(Role, {through: 'user_has_roles', foreignKey: 'user_role_user_id'});
Role.hasMany(User, {through: 'user_has_roles', foreignKey: 'roles_identifier'});
```
