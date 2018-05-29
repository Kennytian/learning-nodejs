## Docker 笔记

### 2018-05-25
安装MySQL

```
docker run -d -p 3306:3306 -e MYSQL_ALLOW_EMPTY_PASSWORD="yes" mysql:5.7
```

连接Docker里的MySQL
```
mysql -uroot -h127.0.0.1 -P3306
```

### 2017-07-19
1. `docker exec -it e983332 /bin/bash` 在运行的容器中执行命令
2. `docker exec -i -t  mynginx /bin/bash` 在运行的容器中执行命令

>-i :即使没有附加也保持STDIN 打开；  -t :分配一个伪终端
 
### 2017-07-17
1. `uname -a` 显示 Linux 当前操作系统名称，-a 表示all information
2. `ctrl+p ctrl+q` 退出容器
3. `docker ps` 查看容器运行列表, -a 表示历史运行 container
4. `docker rm xxxx` 删除一个容器，xxx 为 container id
5. `Docker Registry` 是用于打包、传输、存储和分发的工具
6. ==**部署 node 项目至 docker 服务器**==
```
├── Dockerfile
└── app.js

0 directories, 2 files
```
>app.js
```
console.log('你好 docker from node.js');
```
>Dockerfile
```
FROM daocloud.io/node:5

COPY . /src
WORKDIR /src

CMD ["node","/src/app.js"]
```
>Docker 命令
```
docker build -t hellodocker .
```

### 2017-07-16
1. WebStorm + Node.js + Docker
> https://blog.jetbrains.com/webstorm/2017/04/quick-tour-of-webstorm-and-docker/
> https://blog.jetbrains.com/webstorm/2016/09/webstorm-2016-3-eap-163-3512/

### 2017-07-15
1. create docker host on computer or cloud server
>docker-machine create --driver=virtualbox myhost

2. 运行一个 container 的本身就是开启一个具有独立 **namespace** 的进程

3. **docker 最佳实践**：一个 container 中只运行一种服务，如：web 服务运行在一个 container 实例中，数据库服务运行在另一个 container 实例

4. 删除一个 image，-f 为强制删除，数字为 image id。如：`docker rmi -f 1815c82652c0`

5. Dockerfile 内容示例：
```
FROM jboss/wildfly
ADD dockerjava.war /opt/jboss/wildfly/standalone/deployments/
```


### 学前
Mac docker 链接下载：https://download.docker.com/mac/stable/Docker.dmg

### 第一课
0. `sudo yum install docker` // 安装 docker
1. `docker info` // 显示 docker 安装信息
2. `docker run alpine echo hello world` // 显示hello world
3. `strace docker info` // 显示 docker 高级信息
4. `sudo chkconfig docker on` // 设置为开机启动
5. `service docker start` //
6. `service docker restart` 
7. `docker version` // 显示 docker 服务和客户端信息

### 第二课
#### 配置国内镜像仓库
* 修改配置文件 `vim /etc/default/docker`
* 重启 Daemon
* 使用公共仓库
* 使用私有仓库
* 配置环境 `--registry-mirror=http://mirrow.ghostcloud.cn --insecure-registry-hub.ghostclund.cn -H=unix:///var/run/docker.sock`
* 

### 第三课
1. `docker run hello-world` // 下载并运行一个image
2. `docker attach` 缺点是当多个窗口同时attach到同一个容器时，所有的窗口都会同步的显示，假如其中的一个窗口发生阻塞时，其它的窗口也会阻塞。docker exec命令是在docker 1.3之后增加的一个比docker attach命令更加方便的命令。和docker exec差不多方便的命令是nsenter工具。可用 `nsenter` 进入 `Docker` 容器调试。

### 第四课
进入 docker 系统 `sudo docker run -i -t node /bin/bash`

运行一个 container 的本身就是开启一个具有独立 namespace 的进程

一个 container 中只运行一种服务，如：web 服务运行在一个 container 实例中，数据库服务运行在另一个 container 实例

