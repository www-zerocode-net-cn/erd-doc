---
title: 兼容性列表

---

ERD Online 目前支持在多家公有云厂商的主机上安装，以下是兼容性列表，均已通过严格的安装使用测试，后续将添加更多的厂商以及基础设施版本的支持。
> 如果该列表尚未包含你所使用的版本，但 ERD Online 可以正常的安装使用，请将你的版本更新到列表中，欢迎提交 Pull Request。




## 云主机兼容性列表


| 云厂商 | 操作系统  | 配置        | 内核  | 测试结果 |
|-------|---------|-------------|------|----------|
| <img style={{width:"20px",height:"20px"}} src="/img/ali.svg"/> 阿里云 | Ubuntu 16.04 <br/> Ubuntu 18.04 <br/> Ubuntu 20.04 <br/> CentOS 7.4 <br/> CentOS 8.3 | 4 Cores<br/>8 GB | 4.4.0-210-generic  <br/> 4.15.0-143-generic  <br/> 5.4.0-73-generic  <br/> 3.10.0-693.2.2.el7.x86_64  <br/> 4.18.0-240.22.1.el8_3.x86_64  | <span style={{color:"green"}}>通过</span>  |
| <img style={{width:"20px",height:"20px"}} src="/img/tencent.svg"/> 腾讯云 | Ubuntu 16.04 <br/> Ubuntu 18.04 <br/> Ubuntu 20.04 <br/> CentOS 8.2 | 4 Cores<br/>8 GB | 4.15.0-142-generic <br/> 4.15.0-142-generic  <br/> 5.4.0-72-generic <br/> 4.18.0-193.28.1.el8_2.x86_64 | <span style={{color:"green"}}>通过</span>  |
| <img style={{width:"20px",height:"20px"}} src="/img/huawei.svg"/> 华为云 | Ubuntu 16.04 <br/> Ubuntu 18.04 <br/> Ubuntu 20.04 <br/> CentOS 7.6 <br/> CentOS 8.2 | 4 Cores<br/>8 GB | 4.4.0-201-generic  <br/> 4.15.0-136-generic  <br/> 5.4.0-66-generic <br/> 3.10.0-1160.15.2.el7.x86_64 <br/> 4.18.0-240.10.1.el8_3.x86_64  | <span style={{color:"green"}}>通过</span>  |


## 虚拟机兼容性列表

对于想通过虚拟机快速尝鲜 ERD Online 的用户，为避免因使用镜像版本的不可控、操作系统的组件存在些许差异，导致安装失败或者使用不正常。
我们推荐虚拟机用户采用以下系统作为基础操作系统进行安装尝试。

- [Ubuntu Server 20.04](https://releases.ubuntu.com/20.04)
- [CentOS 7.6](http://isoredirect.centos.org/centos/7/isos/x86_64/)

:::tip 提示
以上均为官方镜像版本，请点击进行下载安装
:::
