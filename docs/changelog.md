---
title: 变更日志
---

## 4.0.5
:::tip
增加数据库数据查询功能，支持多数据源切换查询，查看sql执行计划
:::

- fix(erd): 增加数据库数据查询功能，支持多数据源切换查询，查看sql执行计划
- fix(erd): 数据查询功能，保留历史查询记录，格式化sql，多级树结构保存历史查询
- fix(erd): 依赖ERD加密手段，导出保留数据库信息（密文）
- fix(erd): 解析PDman，ERD，bug修复
- fix(erd): 导出不再删除数据库连接信息
- fix(erd): 去除未使用引用
- fix(erd): 多数据源查询功能开发
- fix(erd): 查询功能关联项目
- fix(erd): 增加自动保存编辑的sql语句
- fix(erd): 调整最短字符显示个数为14个
- fix(erd): 调整查询页树结构图标
- fix(erd): 增加数据查询功能
- fix(erd): 调整发送请求方式
- fix(erd): 调整ACE主题为白底
- fix(erd): 调整数据查询功能、模型功能易用性
- fix(erd): 增加数据查询功能
- fix(erd): 增加字符超量组件
- fix(erd): 解决首页无限刷新bug
- fix(erd): 为string添加模板渲染方法
- fix(erd): 修复不同项目间切换，tab缓存问题
- fix(erd): 表设计增加快捷操作说明
- fix(erd): 完善默认字段
- fix(erd): 修复差异化脚本为空bug
- fix(erd): 支持Mysql时间类型字段设置默认值
- fix(erd): 修复重建基线版本同步数据源之后状态不会更新
- fix(erd): 修复sql执行失败没有回滚
- fix(erd): 升级message.warn用法

## 4.0.3
:::tip
全新改版，更美更好用、团队协作、权限控制
:::
- fix(erd): 调整关系图表颜色
- fix(erd): 修复关系图shift不生效
- fix(erd): 修复数据域混乱问题
- fix(erd): 增加同步提示
- fix(erd): 调整数据应用tab顺序
- fix(erd): 修复同步数据源之后，页面不刷新
- fix(erd): 修复不同数据库模板渲染不变
- fix(erd): 缩短code框高度
- fix(erd): 修复版本详情bug
- fix(erd): 修复逆向解析bug
- fix(erd): 去除使用说明按钮
- fix(erd): 修复列表页同步数据库bug
- fix(erd): 修复个人授权问题
- fix(erd): 修复已同步未同步bug
- fix(erd): 配置全部路由权限
- fix(erd): 项目权限组ui权限配置
- fix(erd): 项目基本设置权限配置
- fix(erd): 准备配置权限码
- fix(erd): 完善404、403页面
- fix(erd): 打开布局权限控制
- fix(erd): 统计全部要权限控制的菜单
- fix(erd): 团队项目列表去掉修改、删除功能
- fix(erd): 团队设置增加创建时间和最后修改时间
- fix(erd): 修改"搜索表"为"搜索元数据"
- fix(erd): 修改"字段类型"为"字段字典"
- fix(erd): 修改"代码信息"为"元数据应用"
- fix(erd): 修改"代码信息"为"数据应用"
- fix(erd): 最近项目只能打开模型
- fix(erd): 调整索引页面字段宽度，占满页面
- fix(erd): 重新设计团队设置
- fix(erd): 优化关系图样式
- add(erd): 增加团队项目布局
- fix(erd): 修复数据域编辑bug
- fix(erd): 处理未导入包
- fix(erd): 修复version不选中默认行
- fix(erd): 用户设置默认头像
- fix(erd): 模型设计页面正常跳转
- fix(erd): 修复进入设计页面左侧菜单不显示
- add(erd): 增加退出登录功能
- fix(erd): 代码格式化、调整我的功能
- add(erd): 增加二维码
- fixed(erd): 调整整体图标
- fixed(erd): 修改网格样式
- add(erd): 常用参数提取公共变量
- feat(erd): 增加权限页面
- fix(erd): 个人、最近项目功能完善
- feat(erd): 项目新增功能增加项目标签
- feat(erd): 增加项目修改、删除、打开模型service
- feat(erd): 增加项目修改、删除、打开模型
- fix(erd): 增加灵台生态产品介绍
- fix(erd): 最近、个人、团队项目页面增加最后修改时间
- fix(erd): 最近、个人、团队项目续改
- fix(erd): 项目页布局
- fix(erd): 系统默认项设置
- fix(erd): 公用模型字段
- fix(erd): 默认字段设置
- fix(erd): 数据源设置
- feat(erd): 高级导出
- feat(erd): 普通导出功能
- fix(erd): 导入页改造
- fix(erd): 修改逆向解析表颜色和表每页行数
- fix(erd): 完善路由信息
- fix(erd): 版本页面设计
- fix(erd): 替换版本页面操作按钮样式
- add(erd): 将弹窗改成页面
- add(erd): 配置功能路由
- fix(erd): 修改空图标从本地加载
- add(erd): 增加空图标
- fix(erd): 设计页面初次进入中间不空白
- fix(erd): 修改左上角导航
- fix(erd): 左侧增加表搜索选项、顶部去除搜索框
- fix(erd): 修改关系图字体颜色为红色
- fix(erd): 保存实体和模块之后关闭弹窗
- fix(erd): 适配右键会触发选中
- fix(erd): 新增完成后关闭弹窗
- fix(erd): 表设计tab增加右键
- fix(erd): 重构模块增删改组件
- fix(erd): 重构表增删改组件
- fix(erd): 完善tab交互逻辑
- fix(erd): 缩小代码框高度，避免出现下拉框
- fix(erd): 隐藏新增tab图标
- fix(erd): 重新设计索引、代码部分组件及命名
- fix(erd): 替换表设计页tab组件
- fix(erd): 修改页面头title增加跳转
- fix(erd): 修改根路径跳转页面
- fix(erd): 修改模型设计url
- fix(erd): 避免多次请求服务器，修复进入设计页没有选中模型tab
- feat(erd): 一级功能点重新设计
- feat(erd): 实现menu点击出发全局跳转
- fix(erd): 解决左侧树收缩溢出问题
- fix(erd): 左侧增加树结构
- fix(erd): 修改表搜索提示语
- feat(erd): 完善搜索功能
- feat(erd): 增加搜索功能
- refactor(erd): 增加关系图功能
- refactor(erd): 调整关系图引用，处理修复erd-ui修改url之后，浏览器中地址不变
- refactor(erd): 增加关系图入口
- refactor(erd): 重构默认字段、表设计页面，统一调用方法
- fix(erd): 防止保存空表结构
- fix(erd): 去掉对象页"设计表"功能
- feat(erd): 增加主键变化生成DDL
- fix(erd): 修复版本比对版本数据readonly的bug
- refactor(erd): 重构设计页面布局
- fix(erd): 重构版本比较代码
- fix(erd): 重构版本比较代码，修复无法生成新版本bug
- fix(erd): 修复生成差量文件bug
- feat(erd): 恢复团队功能入口

## 4.0.2
:::tip
增加关系图功能
:::
- refactor(erd): 增加关系图功能
- refactor(erd): 调整关系图引用
- refactor(erd): 增加关系图入口
- refactor(erd): 重构默认字段、表设计页面，统一调用方法 
- fix(erd): 防止保存空表结构
- fix(erd): 去掉对象页"设计表"功能
- feat(erd): 增加主键变化生成DDL
- fix(erd): 修复版本比对版本数据readonly的bug
- refactor(erd): 重构设计页面布局
- fix(erd): 重构版本比较代码 
- fix(erd): 重构版本比较代码，修复无法生成新版本bug
- fix(erd): 修复生成差量文件bug

## 4.0.1
:::tip
增加Oracle、Sqlserver、Postgresql、DB2驱动
:::
- 数据源管理
    - Oracle
    - Sqlserver
    - Postgresql
    - DB2

## 4.0.0-beta
:::tip
4.0.0-beta完成以下功能，并且优化页面样式，以及元数据结构维护便捷性
:::
- 数据源管理
    - Mysql
- 版本管理
    - 初始化版本
    - 重建版本
    - 新增版本
    - 删除版本
    - 同步
    - 标记同步
- 导入
    - 数据库逆向解析
    - pdman解析
    - ERD解析
- 导出
    - word
    - pdf
    - html
    - markdown
    - 全量数据结构
