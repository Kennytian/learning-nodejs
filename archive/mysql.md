## MySQL 笔记

### 2018-04-21
#### Mac上安装MySQL后，无法登录
1、关闭MySQL服务；

`
sudo /usr/local/mysql/support-files/mysql.server stop
`

2.进入安全模式

```
cd /usr/local/mysql/bin/
sudo su
./mysqld_safe --skip-grant-tables &
```

3.新建一个终端，输入

```
mysql -u root -p
```

4.修改root用户密码

```
UPDATE mysql.user SET authentication_string=PASSWORD('root') where User='root';
```

5.刷新权限，使配置生效

```
flush privileges;
```

6.重启Mysql服务

```
sudo /usr/local/mysql/support-files/mysql.server start
```

7.再登录

```
mysql -u root -proot
```

8.重新设置密码。

```
SET PASSWORD = PASSWORD('root');
```

### 2017-07-24
#### 导入数据库
>mysql -hlocalhost -uroot -pa22222 **basic_db** < /Users/kenny/Downloads/dump/basic.dump

>导入同事Z导出的数据库 sql 脚本时，报如下错误：
_[HY000][1031] Table storage engine for 'anchor' doesn't have this option_

>部分表能导入，部分表无法正常导入，经查阅国外资料，得出简单粗暴的解决方法：

>例如： ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8 ROW_FORMAT=FIXED; 只需删除语句中的**ROW_FORMAT=FIXED**即可(Removing ROW_FORMAT=FIXED option)。

参考文档：
* https://magento.stackexchange.com/questions/94325/how-to-fix-mysql-error-1031
* https://dba.stackexchange.com/questions/133026/error-1031-hy000-at-line-x-table-storage-engine-for-tbl-doesnt-have-this-o



### 2017-07-18
#### 配置 MySql 环境
```
sudo vim ~/.bash_profile
export PATH=${PATH}:/usr/local/mysql/bin
source ~/.bash_profile
```

#### 在命令行登录 MySql
>mysql -uroot -pa22222

#### Mac 卸载MySQL
>通过下面命令删除干净MySQL，同时在进入 系统偏好设置 里面删除 MySQL 的图标的设置项，点击右键会弹出 移除MySQL偏好设置面板

```
sudo rm -rf /usr/local/mysql*
sudo rm -rf /Library/StartupItems/MySQLCOM
sudo rm -rf /Library/PreferencePanes/My*
sudo rm -rf /Library/Receipts/mysql*
sudo rm -rf /Library/Receipts/MySQL*
sudo rm -rf /var/db/receipts/com.mysql.*
vi /Library/Receipts/InstallHistory.plist # 进入搜素 mysql , “shif+:” 输入mysql

find / -name mysql -print 2> /dev/null
sudo find / | grep -i mysql

```

#### 表名设置为大写
>将表名设置为大写，要重启服务器才生效。lower_case_table_names=0

### 2014/04/13 16:51
使用整数数据的精确数字数据类型。
##### bigint
>从 -2^63 (-9223372036854775808) 到 2^63-1 (9223372036854775807) 的整型数据（所有数字）。存储大小为 8 个字节。
P.S. bigint已经有长度了，在mysql建表中的length，只是用于显示的位数
##### int
>从 -2^31 (-2,147,483,648) 到 2^31 – 1 (2,147,483,647) 的整型数据（所有数字）。存储大小为 4 个字节。int 的 SQL-92 同义字为 integer。
##### smallint
>从 -2^15 (-32,768) 到 2^15 – 1 (32,767) 的整型数据。存储大小为 2 个字节。
##### tinyint
>从 0 到 255 的整型数据。存储大小为 1 字节。

>mysql alter 语句用法,添加、修改、删除字段等

##### 主键
>alter table tabelname add new_field_id int(5) unsigned default 0 not null auto_increment ,add primary key (new_field_id);

##### 增加一个新列
1. alter table t2 add d timestamp;
2. alter table infos add ex tinyint not null default '0';

##### 删除列
> alter table t2 drop column c;

##### 重命名列
> alter table t1 change a b integer;

##### 改变列的类型
alter table t1 change b b bigint not null;
alter table infos change list list tinyint not null default '0';

##### 重命名表
> alter table t1 rename t2;

##### 加索引
1. mysql> alter table tablename change depno depno int(5) not null;
2. mysql> alter table tablename add index 索引名 (字段名1[，字段名2 …]);
3. mysql> alter table tablename add index emp_name (name);

##### 加主关键字的索引
1. mysql> alter table tablename add primary key(id);

##### 加唯一限制条件的索引
1. mysql> alter table tablename add unique emp_name2(cardnumber);

##### 删除某个索引
mysql>alter table tablename drop index emp_name;

##### 修改表：
##### 增加字段：
1. mysql> ALTER TABLE table_name ADD field_name field_type;

##### 修改原字段名称及类型：
1. mysql> ALTER TABLE table_name CHANGE old_field_name new_field_name field_type;

##### 删除字段：
1. mysql> ALTER TABLE table_name DROP field_name; 
