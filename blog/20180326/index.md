## 快应用实现的微信Demo，欢迎大家一起学习快应用开发

[github地址，欢迎关注](https://github.com/yale8848/quickapp-wechat)

> 目前搭建了基本UI

![输入图片说明](https://static.oschina.net/uploads/img/201803/27155010_NvLB.png "在这里输入图片标题")
![输入图片说明](https://static.oschina.net/uploads/img/201803/27155021_hJhV.png "在这里输入图片标题")
![输入图片说明](https://static.oschina.net/uploads/img/201803/27155040_TpS3.png "在这里输入图片标题")
![输入图片说明](https://static.oschina.net/uploads/img/201803/27155059_KLnW.png "在这里输入图片标题")
![输入图片说明](https://static.oschina.net/uploads/img/201803/27155112_eTHn.png "在这里输入图片标题")
![输入图片说明](https://static.oschina.net/uploads/img/201803/27155138_QU06.png "在这里输入图片标题")
![输入图片说明](https://static.oschina.net/uploads/img/201803/27155154_ZoT3.png "在这里输入图片标题")

[快应用入门教程](https://juejin.im/post/5ab4d4c36fb9a028b92d149c) 

## 快应用开发中发现的问题：
### CSS问题

- 默认是flex布局，css就不用显示设置了；
- 一定要看文档提示，有些属性不支持，比如 `justify-content` 不支持 `space-around`

### 布局问题

- 自定义布局导入到父布局后默认宽高还是屏幕尺寸，并不是限制到父布局宽高

### 事件

- 没有touch事件

### DOM

- 不能操作document，比如所document.getElementById
- onReady后才能操作DOM
- $element(id) 不能直接修改style

### MVVM

- VM的属性值必须在onInit之前修改好，等onReady后再修改无效，view不能更新

## [github地址，欢迎关注](https://github.com/yale8848/quickapp-wechat)
## 欢迎大家关注`快应用栈`公众号

![输入图片说明](https://static.oschina.net/uploads/img/201803/27155338_kbfw.jpg "在这里输入图片标题")