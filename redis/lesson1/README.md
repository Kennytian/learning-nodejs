### redis 第一课

#### 运行 redis
0. 安装redis `brew install redis`
1. 前台运行 `redis-server /usr/local/etc/redis.conf`
2. 后台运行 `brew services start redis`
3. 重启服务 `brew services restart redis`
4. 删除 redis `brew uninstall --force redis`

#### 基本知识
1. redis 默认占用 6379 端口，修改 conf 文件 `vim /usr/local/etc/redis.conf`
2. 启动客户端，执行：`redis-cli`
3. 测试 `redis` 执行效果: `select 0`, `keys *`
4. 退出客户端，执行：`127.0.0.1:6379>shutdown` 

#### 基本命令
0. 连接 redis `redis-cli -h 127.0.0.1 -p 8085 -a abc123`  _注：-a 为 authentication_
1. 切换数据库：`select 0 / select 1 / select 2`  
2. 写入数据：`set mykey 'id123456'`
3. 查询数据: `get mykey`
4. 清除密码：`CONFIG SET requirepass ""`
5. 设置密码: `CONFIG SET requirepass "abc123"`
6. 有效期数据：`client.set('key10s', 'value!', 'EX', 10);`

### redis 第二课
#### 1 package.json
> `yarn add redis hiredis`