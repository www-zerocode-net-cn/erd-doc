---
title: 第一个项目
---

ERD Online操作指引! 🔥🎶

### 登录ERD Online

- 老用户使用微信扫码登录，可自动关联原有全部模型
- 新用户可以使用微信扫码快捷登录，也可自行注册新账号

![登录页](img/operator/login.png)

### 首页工作台

扫码登录到系统之后，首页会显示ERD Online 统计信息、和一些快捷入口

![home页](img/operator/home.png)

### 新增项目

点击「个人项目」，这里展示了全部的历史个人项目

![个人页](img/operator/person.png)

点击「新建」，录入项目相关的信息，点击保存即可

![个人新增](img/operator/person-add.png)

### 新增模块

我们用上面新建的项目，演示新增模块，新增模块有两种方式：

- 1、手动增加模块
- 2、从数据库逆向解析生成模块

1、手动增加模块

「打开模型」之后,看到如下页面

![模型页](img/operator/module.png)

点击左侧「新增模块」，录入模块信息，模块名为业务中的英文名，中文名称为模块中文解释

![模型新增](img/operator/module-add.png)

点击「确定」，这样就建好了自己的第一个模块，新建的模块中还没有任何业务表，后面章节我们会讲如何新增表

2、从数据库逆向解析生成模块

我们接上一节，演示如何逆向解析

从数据库逆向解析需要配置数据库

点击上方「设置」，再选择「数据源设置」

![数据源设置](img/operator/database-set.png)

点击「新增」 配置一个数据库连接，目前为止，支持 MYSQL、ORACLE、SQLSERVER、DB2(需要开启 oracle 兼容模式)、POSTGRESQL

录入数据库配置信息

点击「测试」，提示：连接成功，说明该数据库连接配置正常

![连接数据库](img/operator/database-test.png)

点击上方「导入」，再选择「数据源逆向解析」

![逆向解析](img/operator/import-revert.png)

数据库选择刚才新增的数据库 mysql，逻辑名格式选择不处理，点击下一步

![解析表](img/operator/import-revert-table.png)

选中需要逆向解析的表，点「提交」

![逆向解析选中](img/operator/import-revert-table-select.png)

点击上方「模型」，数据库中的元数据就到了 ERD Online

![逆向解析成功](img/operator/import-revert-table-success.png)

### 新增表

在模块名称上右键，选择「新建表」

![新增表](img/operator/table-add.png)

![新增表](img/operator/table-add-1.png)

点击「确认」，在模块下就有了新增的表

左键单击右侧数据表，就可以开始设计表了

:::tip
试试在表名上右键吧
:::

![编辑表](img/operator/table-edit.png)

到这里，我们的第一个表就建好了

### 表设计

:::tip

- 表设计自动保存
- 表设计支持撤销、重做、开始插入、尾部插入、上方插入、下方插入、拖动排序
- 表设计可以像Excel一样，拖动选框右下角小黑点快速复制

:::

#### 字段信息

![字段信息](img/operator/table-edit.png)

#### 索引信息

![索引信息](img/operator/index.png)

#### 元数据应用

MYSQL

![MYSQL](img/operator/code-mysql.png)

ORACLE(DB2)

![ORACLE(DB2)](img/operator/code-oracle.png)

SQLSERVER

![SQLSERVER](img/operator/code-sqlserver.png)

POSTGRESQL

![POSTGRESQL](img/operator/code-postgresql.png)

JAVA

![JAVA](img/operator/code-java.png)

### 版本管理

:::tip

- ERD提供两种版本管理方案：重建表、字段增量。默认为字段增量。
- 在项目开始，就要考虑好用哪种方式，中途别随意更换，不然会出现版本信息对比不准确。
- 一般情况下，使用默认方式即可。
- 第一次管理版本时，需要初始化基线版本，才能新增版本。
- 可以重建基线，重建之后，历史版本信息将会消失，元数据不受影响。

:::

点击上方「版本」

![版本页](img/operator/version.png)

点击「初始化基线」

![初始化基线](img/operator/version-init.png)

录入版本信息，点击「确认」

![初始化基线](img/operator/version-init.png)

此时，就有了第一个版本。

:::tip

- 如果在这之前操作过数据库逆向解析，需要将逆向解析出来的元数据标记为已同步，操作步骤：
    - 逆向解析完之后，立即新增一个新版本
    - 点击该版本的「版本变更详情」
    - 点击右下角「标记为已同步」

:::

版本变更详情

![版本变更详情](img/operator/version-info.png)

任意版本比较

![任意版本比较](img/operator/version-compare.png)

编辑版本

![编辑版本](img/operator/version-edit.png)

删除版本

![删除版本](img/operator/version-delete.png)

同步到数据源

点击此按钮，会将版本变动详情的记录，往数据源执行

![同步到数据源](img/operator/version-init-1.png)

再看1.0.0版本，已经为已同步状态

![已同步](img/operator/version-synced.png)

### 导入

- 数据源逆向解析
- 导入PDman
- 导入ERD

### 导出

#### 普通导出

可以导出格式为：HTML\word\Markdown\DDL\ERD文件

- 导出word文档

![](img/operator/59.png)

![](img/operator/60.png)

- 导出 html

![](img/operator/58.png)

- 导出 md

![](img/operator/61.png)

- 导出 ERD 文件（加密导出erd上的元数据，导出之后，可以导入到任何erd系统中）

![](img/operator/75.png)

#### 高级导出

可以选择哪张表

![高级导出](img/operator/export-pro-select.png)

预览

![高级导出](img/operator/export-pro.png)

### 设置

#### 数据源设置

![数据源设置](img/operator/set-db.png)

#### 默认字段设置（每张表的公有字段）

![默认字段设置](img/operator/set-field.png)

#### 配置ERD的默认配置

![配置ERD的默认配置](img/operator/set-erd.png)

### 数据字典

这个功能可以帮你定义业务领域的数据词典

点击「模型」，点击数据域tab

![数据域](img/operator/domain.png)

设计表时可以选择这个业务领域的字段即可

![数据域选择](img/operator/domain-select.png)

```js
这样大家都遵照规范词典进行数据库设计;
```

