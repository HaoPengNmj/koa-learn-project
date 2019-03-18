## PM2

1. 服务器用这个启动node，node的进程管理工具 

2. 能管理多个，动态监控，零秒热启

3. 负载cpu

4. 内存过高，自动重启

5. 可直接 ```pm2 start app.js``` 启动，

   ```pm2 start app.js --wacth -i max``` 

   ```pm2 restart app.js``` 重启

   ```pm2 stop all ``` 或 ```pm2 stop appname```    停止

   ```pm2 list ```  查看

   ``` pm2 monit```  监控

6. 也可以在项目内建一个pm2.json

7. 例子

   ``` json
   {
       "name": "koa-project",
       "script": "app.js",
       "watch": true,
       //"error_file": "./logs/app-err.log",
       "out_file": "./logs/app-out.log",
       "env": {
           "NODE_ENV": "production"
       },
        instances: "max" //占满多核
   	exec_mode: "cluster"//fork（默认） 或 cluster 多进程？？？
   }
   ```

8. 线上监控

9. 把项目通过scp 上传，解压，```npm install --production``` 安装依赖，最后就可用pm2启动。

10. 其他辅助

   * 命令  ps aux | grep node  查看运行的node 服务
   * lsof -i tcp:8081   ？？



> https://www.cnblogs.com/chyingp/p/pm2-documentation.html
>
> http://pm2.keymetrics.io/
>
> https://pm2.io/doc/en/runtime/overview/