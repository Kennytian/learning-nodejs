### Node 相关知识笔记

### 2017-07-23
#### JS 压缩与混淆
>JavaScript parser / mangler / compressor / beautifier toolkit http://lisperator.net/uglifyjs/

#### 安装：
> `yarn global add uglify-js` / `npm install -g uglify-js`

##### 用法：
最简单用法：
> `uglifyjs index.js -m -c -o index.min.js`
* -m 打乱命名
* -c 压缩文件
* -o 指定输出文件名

### 2017-07-22
#### 运行Nginx
0. 安装nginx `brew install nginx`
1. 启动服务 `brew services start nginx`
2. 停止服务 `brew services stop nginx`
3. 查看安装效果 `localhost:8080`
4. 默认安装目录 `/usr/local/Cellar/nginx`
5. 修改默认配置 `/usr/local/etc/nginx/nginx.conf`
6. 修改根目录
```
location / {
    root   /Users/kenny/projects/work/ubitraq;
    index  index.html index.htm;
}
```
7. 常用命令 `nginx -s reload/reopen/stop/quit`
8. 检查 conf 文件 `nginx -t/T`
9. 更多命令 `nginx -h`

### 2017-07-20
#### 运行 redis
0. 安装redis `brew install redis`
1. 前台运行 `redis-server /usr/local/etc/redis.conf`
2. 后台运行 `brew services start redis`
3. 删除 redis `brew uninstall --force redis`

#### 基本知识
1. redis 默认占用 6379 端口
2. 启动客户端，执行：`redis-cli`
3. 测试 `redis` 执行效果: `select 0`, `keys *` 


### 2017-07-10
1. 在 `WebStorm + nodemon` 调试，需配置为：`/usr/local/bin/nodemon --exec /usr/local/bin/node`


