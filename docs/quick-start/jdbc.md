---
title: JDBC驱动版本
description: ⚡ 内置的各数据源JDBC版本.
---

:::tip
ERD Online 内置了常用的几个JDBC数据源，分别是Mysql、Oracle、Sqlserver、Postgresql、DB2。<br/>
内置的JDBC驱动版本，均为各数据源使用量最大的版本，如果和你们现有的数据源版本不一致，可以走[VIP通道](https://portal.zerocode.net.cn/docs/benefit-profit#vip-%E9%80%9A%E9%81%93%E5%BE%AE%E4%BF%A1%E6%89%AB%E6%8F%8F%E4%B8%8B%E6%96%B9%E4%BA%8C%E7%BB%B4%E7%A0%81)定制，请备注（定制）。
:::



## Mysql

```java
<dependency>
    <groupId>mysql</groupId>
    <artifactId>mysql-connector-java</artifactId>
    <version>8.0.13</version>
</dependency>
```

## Oracle

```java
<dependency>
    <groupId>com.oracle.database.jdbc</groupId>
    <artifactId>ojdbc8</artifactId>
    <version>21.1.0.0</version>
</dependency>
```


## Sqlserver

```java
<dependency>
    <groupId>com.microsoft.sqlserver</groupId>
    <artifactId>mssql-jdbc</artifactId>
    <version>7.4.0.jre12</version>
</dependency>

```


## Postgresql

```java
<dependency>
    <groupId>org.postgresql</groupId>
    <artifactId>postgresql</artifactId>
    <version>42.2.5</version>
</dependency>
```

## DB2

```java
<dependency>
    <groupId>com.ibm.db2</groupId>
    <artifactId>jcc</artifactId>
    <version>11.5.0.0</version>
</dependency>

```


