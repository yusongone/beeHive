/*
 *端口定义:
 */
const portMap ={
  0x80:"请求数据端口",
  0x81:"数据传入端口",
  0x82:"命令广播端口",
  0x83:"命令传入端口",
  0x84:"信息端口"
}


/*
 *公有命令ID定义:
  command ID
 */

const commandId={
  0x01:"寻找设备",
  0x02:"返回寻找的设备ID",
}


/*
 * 数据使用设备
 * */

const dataUser={
  air:{//空气净化器
    receiveData1:[
       [0x01],// 操作类型 更改PWM,
       [0x01,0x02]
    ],
    receiveData2:[
       [0x02],// 操作类型 控制档位,
       [0x01] // 1-10
    ]
  }
}
