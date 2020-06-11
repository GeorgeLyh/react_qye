## 1、安装插件 json-server

    cnpm i json-server -g

## 2、切换到本地数据文件夹位置 cd mock 文件夹

    cd src/mock

## 3、启动服务
    端口 可以5位也可以4位
    json-server data.json --port 2001 
    10001：端口号
    data.json：mock文件夹里面的数据json文件

## 结果

    E:\React_project\react_qye_peoject\src\mock>json-server data.json --port 2001

    \{^\_^}/ hi!

    Loading data.json
    Done

    Resources
    http://localhost:2001/list

    Home
    http://localhost:2001

    Type s + enter at any time to create a snapshot of the database
    GET /list 200 17.052 ms - 356
