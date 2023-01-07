---
title: 快速安装
description: ⚡ 一键免费私有部署ERD Online指引.
---




<iframe src="//player.bilibili.com/player.html?aid=775486562&bvid=BV1S14y1J7hH&cid=900784074&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" width="800" height="500"> </iframe>

:::tip
ERD Online的服务理念：能喂到嘴里，绝不递到手里
:::



## 前置条件

一台至少配置为 **4核** **8G** **可联网** 的Linux 主机。


## 一键安装

:::tip
- 你可以使用[**手动安装**](try-manual-install.md)，也可以完成ERD Online的安装过程
:::

:::tip
下面两种方式任选其一，不要同时设置
:::

以 **root** 用户登录 Linux 主机执行以下命令：

### 方式一：用 IP+PORT 访问

- 指定 **IP**（将 &lt;IP&gt; 换成该机器的 IP 地址，此IP用于访问 ERD Online），比如：127.0.0.1

``` bash
export IP=<IP>
```

- 指定 **PORT**（将 &lt;PORT&gt; 换成该机器上一个可用的端口），比如：9669

``` bash
export PORT=<PORT>
```

- 一键安装（复制下面命令执行，即可一键安装）
``` bash
curl -SsL https://www.zerocode.net.cn/install | bash
```

安装完毕后，通过 **http://127.0.0.1:9669** 即可访问 ERD Online 系统。

:::tip
请确保设置的 IP 和 PORT是可用的，避免访问不到 ERD Online
:::

### 方式二：用 DOMAIN（域名） 访问

- 指定 **DOMAIN**（将 &lt;DOMAIN&gt; 换成可以访问到该机器的 DOMAIN（域名），此 DOMAIN 用于访问 ERD Online），比如：www.zerocode.net.cn

``` bash
export DOMAIN=<DOMAIN>
```

- 一键安装（复制下面命令执行，即可一键安装）
``` bash
curl -SsL https://www.zerocode.net.cn/install | bash
```

安装完毕后，通过 ** http://www.zerocode.net.cn ** 即可访问 ERD Online 系统。

:::tip
请确保设置的 DOMAIN 是可用的，避免访问不到 ERD Online
:::