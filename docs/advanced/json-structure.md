---
title: 数据结构 

description: ⚡ 元数据组成结构.
---

:::tip
ERD Online 全部元数据都存储在一个大JSON里面，所有操作都是围绕这个大JSON进行，大JSON包括模块、表、字典、数据源、默认项。<br/>
了解这个大JSON结构，对自定义功能、了解ERD Online设计原理有很大帮助！
:::

## 元数据JSON结构

```json
{
  "modules": [-- 模块
    {
      "entities": {-- 表
        "title": "lowcode_apimanager",-- 表英文名
        "chnname": "核心模型",-- 表中文名
        "fields": [ -- 表字段
          {
            "name": "id",
            "type": "BIGINT_19",
            "chnname": "Id",
            "remark": "",
            "pk": true,
            "notNull": true,
            "autoIncrement": true,
            "defaultValue": "",
            "typeName": "BIGINT_19",
            "dataType": "BIGINT(19)"
          }
        ]
      },
      "chnname": "低代码模型",-- 模块中文名
      "name": "LOCO-LOWCODE"  -- 模块英文名
    }
  ],
  "profile": {
    "defaultFields": [-- 表默认字段
      {
        "chnname": "主键",
        "name": "id",
        "typeName": "标识号",
        "type": "IdOrKey",
        "dataType": "VARCHAR(32)",
        "remark": "",
        "pk": true,
        "notNull": true,
        "autoIncrement": false,
        "relationNoShow": false,
        "defaultValue": "",
        "uiHint": ""
      }
    ]
  },
  "dataTypeDomains": {
    "datatype": [-- 数据字典
      {
        "name": "默认字串",
        "code": "DefaultString",
        "apply": {
          "JAVA": {
            "type": "String"
          },
          "MYSQL": {
            "type": "VARCHAR(32)"
          },
          "ORACLE": {
            "type": "NVARCHAR2(32)"
          },
          "SQLServer": {
            "type": "NVARCHAR(32)"
          },
          "PostgreSQL": {
            "type": "VARCHAR(32)"
          }
        }
      }
    ],
    "database": [-- 数据模板
      {
        "code": "MYSQL",
        "template": "DROP TABLE `{{=it.entity.title}}`;\n$blankline\nCREATE TABLE `{{=it.entity.title}}`(\n{{ pkList = [] ; }}\n{{~it.entity.fields:field:index}}\n    {{? field.pk }}{{ pkList.push(field.name) }}{{?}}\n    `{{=field.name}}` {{=field.type}} {{= field.pk ? 'NOT NULL' : '' }} COMMENT '{{=it.func.join(field.chnname,field.remark,';')}}' {{= index < it.entity.fields.length-1 ? ',' : ( pkList.length>0 ? ',' :'' ) }}\n{{~}}\n{{? pkList.length >0 }}\n    PRIMARY KEY ({{~pkList:pkName:i}}{{= pkName }}{{= i<pkList.length-1 ? ',' : '' }}{{~}})\n{{?}}\n) COMMENT = '{{=it.func.join(it.entity.chnname,it.entity.remark,';') }}'",
        "fileShow": true,
        "defaultDatabase": true,
        "createTableTemplate": "CREATE TABLE `{{=it.entity.title}}`(\n{{ pkList = [] ; }}\n{{~it.entity.fields:field:index}}\n    {{? field.pk }}{{ pkList.push(field.name) }}{{?}}\n    `{{=field.name}}` {{=field.type}} {{= field.notNull ? 'NOT NULL' : '' }} {{= field.autoIncrement ? 'AUTO_INCREMENT' : '' }} {{= field.defaultValue ? it.func.join('DEFAULT',field.defaultValue,' ') : '' }} COMMENT '{{=it.func.join(field.chnname,field.remark,' ')}}' {{= index < it.entity.fields.length-1 ? ',' : ( pkList.length>0 ? ',' :'' ) }}\n{{~}}\n{{? pkList.length >0 }}\n    PRIMARY KEY ({{~pkList:pkName:i}}{{= pkName }}{{= i<pkList.length-1 ? ',' : '' }}{{~}})\n{{?}}\n) COMMENT = '{{=it.func.join(it.entity.chnname,it.entity.remark,' ') }}';{{=it.separator}}\n$blankline\n",
        "deleteTableTemplate": "DROP TABLE `{{=it.entity.title}}`;{{=it.separator}}",
        "rebuildTableTemplate": "create table ERD_UP_{{=it.oldEntity.title}}\nas select * from {{=it.oldEntity.title}};{{=it.separator}}\n$blankline\n\ndrop table {{=it.oldEntity.title}};{{=it.separator}}\n$blankline\n\nCREATE TABLE {{=it.newEntity.title}}(\n{{ pkList = [] ; }}\n{{~it.newEntity.fields:field:index}}\n    {{? field.pk }}{{ pkList.push(field.name) }}{{?}}\n    `{{=field.name}}` {{=field.type}} {{= field.notNull ? 'NOT NULL' : '' }} COMMENT '{{=it.func.join(field.chnname,field.remark,';')}}' {{= index < it.newEntity.fields.length-1 ? ',' : ( pkList.length>0 ? ',' :'' ) }}\n{{~}}\n{{? pkList.length >0 }}\n    PRIMARY KEY ({{~pkList:pkName:i}}{{= pkName }}{{= i<pkList.length-1 ? ',' : '' }}{{~}})\n{{?}}\n) COMMENT = '{{=it.func.join(it.newEntity.chnname,it.newEntity.remark,';') }}';{{=it.separator}}\n$blankline\n\n{{ sameCols = it.func.intersect(it.newEntity.fields,it.oldEntity.fields) ;}}\ninsert into {{=it.newEntity.title}}(\n{{~sameCols:field:index}}\n    `{{=field.name}}`{{? index<sameCols.length-1}},{{?}}\n{{~}}\n) \nselect \n{{~sameCols:field:index}}\n    `{{=field.name}}`{{? index<sameCols.length-1}},{{?}}\n{{~}}\nfrom ERD_UP_{{=it.oldEntity.title}};{{=it.separator}}\n$blankline\n\ndrop table ERD_UP_{{=it.oldEntity.title}};{{=it.separator}}\n$blankline\n{{~it.newEntity.indexs:index}}\nALTER TABLE {{=it.newEntity.title}} ADD {{? index.isUnique}}UNIQUE{{??}}INDEX{{?}} {{=index.name}}({{=it.func.join(...index.fields,',')}});{{=it.separator}}\n{{~}}",
        "createFieldTemplate": "ALTER TABLE `{{=it.entity.title}}` ADD COLUMN `{{=it.field.name}}` {{=it.field.type}} {{? it.field.notNull}}NOT NULL{{?}} {{? it.field.defaultValue}}DEFAULT {{? null==it.field.defaultValue}}NULL{{??}}{{=it.field.defaultValue}}{{?}}{{?}} {{? it.field.autoIncrement}}AUTO_INCREMENT{{?}} {{? it.field.pk}}PRIMARY KEY{{?}} {{? it.field.chnname}}COMMENT '{{=it.field.chnname}}'{{?}} {{? it.field.addAfter}}AFTER {{=it.field.addAfter}}{{?}};{{=it.separator}}",
        "updateFieldTemplate": "ALTER TABLE `{{=it.entity.title}}` MODIFY COLUMN `{{=it.field.name}}` {{=it.field.type}} {{? it.field.notNull}}NOT NULL{{?}} {{? it.field.defaultValue}}DEFAULT {{? null==it.field.defaultValue}}NULL{{?? 'CURRENT_TIMESTAMP' == it.field.defaultValue}}CURRENT_TIMESTAMP{{??}}{{=it.field.defaultValue}}{{?}} {{?}} {{? it.field.autoIncrement}}AUTO_INCREMENT{{?}} {{? it.field.chnname}}COMMENT '{{=it.field.chnname}}'{{?}};{{=it.separator}}",
        "deleteFieldTemplate": "ALTER TABLE `{{=it.entity.title}}` DROP `{{=it.field.name}}`;{{=it.separator}}",
        "deleteIndexTemplate": "ALTER TABLE `{{=it.entity.title}}` DROP INDEX `{{=it.index.name}}`;{{=it.separator}}",
        "createIndexTemplate": "ALTER TABLE `{{=it.entity.title}}` ADD {{? it.index.isUnique}}UNIQUE{{??}}INDEX{{?}} `{{=it.index.name}}`({{=it.func.join(...it.index.fields,',')}});{{=it.separator}}",
        "updateTableComment": "ALTER TABLE `{{=it.entity.title}}` COMMENT '{{=it.entity.chnname}}';{{=it.separator}}"
      }
    ]
  }
}

```

## 元数据JSON存储形式
- 保存数据的大JSON是以blob形式存储到数据库，在存储过程的时候会进行压缩，节省存储空间。
- 保存时，会把前端页面传输的json数据转为byte[]
- 前端获取时，会读取数据库中的byte[],转为json数据，传给前端



