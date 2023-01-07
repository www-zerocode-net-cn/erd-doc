---
title: 手动安装
description: ⚡ 手动免费私有部署ERD Online指引.
---


:::tip
- 在每月流量包充足的情况下，ERD Online会为大家免费打开一键安装通道；
- 当流量包（100g）被消耗完了，请参考手动安装教程进行安装
:::



## 前置条件

- 一台至少配置为 **4核** **8G** **可联网** 的Linux 主机。
- 安装好 [docker](https://www.runoob.com/docker/centos-docker-install.html) 环境
- 安装好 [docker-compose](https://www.runoob.com/docker/docker-compose.html) 工具
- 安装好 [git](https://www.runoob.com/git/git-install-setup.html) 工具



## 手动安装

以 **root** 用户登录 Linux 主机执行以下命令：

- 任意目录新建一个空目录
``` bash
mkdir erd && cd erd
```

- 拉取安装代码
``` bash
git clone https://gitee.com/MARTIN-88/erd-online.git -b 4.0.5 .
```

- 修改ERD Online访问地址，比如 127.0.0.1:9669
``` bash
vi env/ui.env
```
:::tip
请确保设置的 IP 和 PORT是可用的，避免访问不到 ERD Online
:::

- 启动项目
``` bash
docker-compose up -d
```

安装完毕后，通过 **http://127.0.0.1:9669** 即可访问 ERD Online 系统。

:::tip
docker-compose 启动过程：
- 拉去ERD Online相关镜像
- 启动
- 整个启动过程受自己机器的cpu、内存、网络影响，理论上这三个越大越快
:::
