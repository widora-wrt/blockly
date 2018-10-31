var MSG = {
  title: "波狸 (v00.01.03)",
  blocks: "块",
  debug: "调试",
  code: "代码",
  fail: "失败",
  start: ":启动\r\n",
  reallyrun: "是否运行?",
  stop: "\r\n:停止",
  copyright:"Copyright © 叁百教育科技  www.trtos.com",
  likeTooltip: "保存为样本。",
  likeinputtitle:"新样本名字:",
  runTooltip: "于目标板运行工作区的程序。",
  badCode: "程序错误：\n%1",
  timeout: "超过最大执行行数。",
  trashTooltip: "放弃所有块。",
  catGpio:"输入/输出",
  catIot:"物联网",
  catPwm:"脉冲输出",
  catAnalog:"模拟输入",
  catI2c:"I2C总线",
  catSpi:"SPI通信",
  catSerial:"串口",
  catFile:"文件",
  catSound:"声音",
  catTcpip:"网络通信",
  catTime:"时间",
  catLcd:"显示屏",
  catPrint:"打印",
  catLogic: "逻辑",
  catLoops: "循环",
  catMath: "数学",
  catText: "文本",
  catLists: "列表",
  catColour: "颜色",
  catVariables: "变量",
  catFunctions: "函数",
  listVariable: "列表",
  textVariable: "文本",
  deletethiscontext:"删除 %1 所有 %2 个块吗？",
  httpRequestError: "请求存在问题。",
  linkAlert: "通过这个链接分享您的模块：\n\n%1",
  hashError: "对不起，没有任何已保存的程序对应'%1' 。",
  xmlError: "无法载入您保存的文件。您是否使用其他版本的Blockly创建该文件的？",
  badXml: "XML解析错误：\n%1\n\n选择“确定”以取消您对XML的修改，或选择“取消”以继续编辑XML。",
  catGpio_write_title:"写端口 %1 为 %2",
  catGpio_read_title:"读端口 %1",
  catGpio_mode_title:"设置端口 %1 为 %2",
  catGpio_value_high:"高",
  catGpio_value_low:"低",
  catGpio_mode_out:"输出",
  catGpio_mode_in:"输入",
  catGPio_interrupt_title:"设置中断 %1 %2",
  catPwm_period_ms_title:"设置 %1 脉冲周期 %2 毫秒",
  catPwm_cycle_title:"写入 %1 占空比 %2 /1",
  catPwm_enable_title:"设置 %1 %2 ",
  catPwm_value_enable:"允许",
  catPwm_value_disenable:"禁止",
  catSound_play_title:"播放 %1",
  catI2c_address_title:"创建设备 %1 地址 %2",
  catI2c_readreg_title:"读取 %1 寄存器 %2",
  catSpi_readwrite_title:"读 %1 写 %2",
  catSerial_write_title:"发送 %1 内容 %2",
  catSerial_write_array_title:"发送 %1 数组 %2",
  catSerial_writeline_title:"发送 %1 一行 %2 ",
  catSerial_set_baudrate_title:"设置 %1 波特率 %2",
  catSerial_readstr_title:"读取 %1 字符串 %2 字节",
  catSound_piano_title:"钢琴 %1 节拍 %2",
  catSound_melody_title:"旋律 %1",
  catSound_effect_title:"音效 %1",
  catSound_dance_title:"舞蹈 %1",
  catAnalog_read_int_title:"读取 %1 模拟量",
  catAnalog_read_float_title:"读取 %1 电压",
  catEthernet_ipaddress_title: "地址 %1 端口 %2",
  catEthernet_connect_title: "连接服务器 %1",
  catEthernet_send_title: "发送 %1 内容 %2",
  catEthernet_revice_title: "接收 %1 长度 %2",
  catPrint_to_title: "打印 %1 到 %2",
  catPrint_console_title: "控制台",
  catPrint_lcd_title: "屏幕",
  catIot_send_title:"发送 %1 到 %2 标识 %3",
  catLcd_writeline_title:"写字符 %1 到屏幕",
  catLcd_drawdot_title:"画点  坐标 (x%1y%2) 颜色:%3",
  catLcd_drawrect_title:"画矩形 左上角 (x1%1y1%2)右下角 (x2%3y2%4)颜色%5",
  catLcd_drawline_title:"画线 起点 (x1%1y1%2)终点 (x2%3y2%4)颜色%5",
  catLcd_drawrectfill_title:"填充矩形 左上角 (x1%1y1%2)右下角 (x2%3y2%4)颜色%5",
  catLcd_drawcircle_title:"画圆 坐标 (x%1y%2)半径%3颜色%4",
  catLcd_drawcirclefill_title:"填充圆 坐标 (x%1y%2)半径%3颜色%4",
  catLcd_drawclear_title:"清除 屏幕 %1",
  catLcd_writestring_title:"写 字符串 %1 字体%2位置(x%3y%4)字体颜色%5 背景颜色%6 透明颜色%7",
  catTime_timeoption_year:"年",
  catTime_timeoption_month:"月",
  catTime_timeoption_day:"日",
  catTime_timeoption_hour:"时",
  catTime_timeoption_minute:"分",
  catTime_timeoption_second:"秒",
  catTime_getnow_title:"现在 %1",
  catTime_sleep_title:"睡眠 %1 秒",
  catTime_nowdate_title:"现在日期",
  catTime_nowtime_title:"现在时间",
  catTime_timer_title:"定时器%1 定时(秒)%2执行  %3",
  catTime_timerstart_title:"定时器%1 启动",
  catTime_thread_title:"线程%1 %2",
  catFile_write_title: "写 %1 到 %2",
  catFile_create_title: "写 %1 创建 %2",
  catFile_writeline_title: "写行 %1 到 %2",
  catFile_read_title: "读 %1",
  catFile_readlines_title: "读取所有行 %1",
};
