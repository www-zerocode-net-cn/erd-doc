---
title: 自定义发布

description: ⚡ 发布改造完的ERD Online.
---
:::tip
按照上面方法，改造完ERD Online 之后，那么该如何发布呢？<br/>
私有化部署ERD Online之后，有一个容器叫做`erd-ui`，里面放着编译后的ERD Online前端代码，只需要将其替换即可
:::

## 前提

已经完成 [私有化部署](/docs/quick-start/try-out-install)

## 发布
- 编译,在根目录下有一个文件叫`build.sh`，执行下面命令，
```shell
sh build.sh
```  

- 完事之后，会在根目录生成一个压缩包`erd.tar.gz`

- 将此包上传至部署ERD Online的服务器上，解压到指定目录，比如：
```shell
mkdir -p /opt/erd/ui 
mv erd.ta.gz /opt/erd/ui/ 
cd /opt/erd/ui/ 
tar -xvzf erd.ta.gz 
```

- 修改此服务器上，修改启动ERD Online时用的docker-compose.yml
```yml
  erd-ui:
    image: erdonline/erd-ui:latest
    container_name: erd-ui
    restart: on-failure
    env_file:
      - ./ui/.env
    ports:
      - "9669:9669"
    networks:
      - martin
```
- 增加
```yaml
    volumes:
      - /opt/erd/ui:/usr/share/nginx/html
```
- 最终
```yaml
  erd-ui:
    image: erdonline/erd-ui:latest
    container_name: erd-ui
    restart: on-failure
    volumes:
      - /opt/erd/ui:/usr/share/nginx/html
    env_file:
      - ./ui/.env
    ports:
      - "9669:9669"

```

- 重启`erd-ui`容器
```shell
docker-compose restart  erd-ui
```