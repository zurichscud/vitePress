# Quartz

| 表名                   | 作用           |
| ---------------------- | -------------- |
| `qrtz_job_details`     | Job定义        |
| `qrtz_triggers`        | Trigger定义    |
| `qrtz_cron_triggers`   | cron表达式     |
| `qrtz_simple_triggers` | 简单重复任务   |
| `qrtz_fired_triggers`  | 正在执行的任务 |
| `qrtz_scheduler_state` | 集群节点状态   |
| `qrtz_locks`           | 分布式锁       |



```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-quartz</artifactId>
</dependency>
```



```java
Job（做什么）
↓
Trigger（什么时候做）
↓
Scheduler（谁来调度）
```



```sql
create table qrtz_job_details
(
    sched_name        varchar(120) not null comment '调度名称',
    job_name          varchar(200) not null comment '任务名称',
    job_group         varchar(200) not null comment '任务组名',
    description       varchar(250) null comment '相关介绍',
    job_class_name    varchar(250) not null comment '执行任务类名称',
    is_durable        varchar(1)   not null comment '是否持久化',
    is_nonconcurrent  varchar(1)   not null comment '是否并发',
    is_update_data    varchar(1)   not null comment '是否更新数据',
    requests_recovery varchar(1)   not null comment '是否接受恢复执行',
    job_data          blob         null comment '存放持久化job对象',
    primary key (sched_name, job_name, job_group)
)
    comment '任务详细信息表';
```



## qrtz_job_details

### job_name

任务唯一标识之一

### job_class_name

真正执行的 Job 类全类名。例如`com.demo.job.EmailJob`

```java
Class.forName(JOB_CLASS_NAME)
```

```java
public class EmailJob implements Job {

    @Override
    public void execute(JobExecutionContext context) {
        System.out.println("发送邮件");
    }
}
```

`@DisallowConcurrentExecution` 是 Quartz 提供的一个注解，禁止同一个 Job 并发执行。

### description

任务说明。纯备注字段。
