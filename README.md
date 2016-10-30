### learning node.js


#### Components:

`npm install -g supervisor`

supervisor 可以帮助你实现这个功能，它会监视你对代码的改动，并自动重启 Node.js。

`npm install mongoose`

Mongoose库简而言之就是在node环境中操作MongoDB数据库的一种便捷的封装，一种对象模型工具，类似ORM，Mongoose将数据库中的数据转换为JavaScript对象以供你在应用中使用。


#### ejs模板引擎语法
* <% %>： 用于js控制流，没有输出
* <%= %>： 输出转义的值到模板中
* <%- %>： 输出不转义的值到模板中
* <%# %>： 注释语句
* <%%： 输出’<%’的文本，相当于’<%’的转义形式
* <% -%>或<%= -%>或<%- -%>： 修剪掉换行符

#### mongodb
一、基本命令
* 创建数据库 `mongod --dbpath db`
* 连接数据库 `mongo`
* 切换数据 `use zhulux`
* 查看当前数据库 `db`
* 查看所有数据库 `show dbs`
* 插入数据才能创建数据库 `db.zhulux.insert({"name":"北京就是逐鹿科技有限公司"})`
* 删除数据库 `db.dropDatabase()`

####

###学习资料：
* http://mongodb-tools.com/  超多 mongodb 的工具
* http://www.nodeclass.com/api/mongoose.html
* https://cnodejs.org/topic/504b4924e2b84515770103dd
* http://www.cnblogs.com/aaronjs/p/4489354.html
* forever 可以管理后台进程。它可以在进程崩溃的时候重启进程，传递标准输出

