# 地牢探险：网页客户端

这是与 [Dungeon-Adventure-Server](../Dungeon-Adventure-Server/README.md) Go 服务端配套的概念验证网页游戏客户端。

客户端负责显示游戏画面、接收玩家操作，并与 Go 服务端通信；游戏规则的判断与状态计算由服务端完成。它与 `Dungeon-Adventure-Server` 是同一个游戏的前后端，需要配合运行。

本地运行记录存放在两个仓库之外的 `C:\Dev\GoGameServer\地牢探险\run-records`，其中记录了本机端口、启动命令与验收结果。代码中的标识符、协议字段、命令及资源路径保留原文，以维持程序兼容。

![游戏预览](./preview-01.jpg)
