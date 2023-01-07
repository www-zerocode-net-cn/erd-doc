---
title: 环境变量

description: ⚡ 自定义mysql、redis、微信登录等参数.
---

:::tip
ERD Online 将所有可能会变的参数都抽成了环境变量，方便自有定制修改，这样就可以用自己的mysql、redis等。<br/>
:::

## 全部可用环境变量
[私有化部署](/docs/quick-start/try-out-install) ERD Online 后，在安装目录下，有个`env`文件夹，里面包含了全部可用环境变量

- erd.env
```properties
# Mysql地址
ERD_MYSQL=erd-mysql
# Mysql端口
ERD_MYSQL_PORT=3306
# martin数据库
ERD_MYSQL_MARTIN_DB=martin
ERD_MYSQL_MARTIN_USER=martin
ERD_MYSQL_MARTIN_PASSWORD=~!LCmartin
# erd数据库
ERD_MYSQL_ERD_DB=erd
ERD_MYSQL_ERD_USER=erd
ERD_MYSQL_ERD_PASSWORD=~!LCerd
ERD_ADMIN_MONITOR=http://erd-monitor:9601

ERD_AUTH_SERVER=http://martin-cloud-gateway:9502/auth

# ERD 访问地址，开启三方登录的时候需要配置，不然无法跳转
ERD_UI_URL=1

# GITHUB登录:可替换成自己的，实现GITHUB登录
ERD_SOCIAL_GITHUB_CLIENT_ID=1
ERD_SOCIAL_GITHUB_CLIENT_SECRET=1
ERD_SOCIAL_GITHUB_REDIRECT_URI=1

# QQ登录:可替换成自己的，实现QQ登录
ERD_SOCIAL_QQ_CLIENT_ID=1
ERD_SOCIAL_QQ_CLIENT_SECRET=1
ERD_SOCIAL_QQ_REDIRECT_URI=1

# 微信登录:可替换成自己的，实现微信登录
ERD_SOCIAL_WECHAT_CLIENT_ID=1
ERD_SOCIAL_WECHAT_CLIENT_SECRET=1
ERD_SOCIAL_WECHAT_REDIRECT_URI=1

ERD_OSS_ENDPOINT=http://erd-minio:9000/

# nacos用户
NACOS_USER=nacos
# nacos密码
NACOS_PASSWORD=LCerdonline
```
- ui.env
```properties
#  访问ERD Online的地址
API_URL=http://101.42.173.101:9669 
```

