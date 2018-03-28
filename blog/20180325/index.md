# 快应用学习教程-入门

> 官方文档地址：https://doc.quickapp.cn/

## 环境搭建

### 安装nodejs

官方建议不使用8.0.*版本．这个版本内部ZipStream实现与node-archive包不兼容，会引起报；

Windows用户我推荐下载[node v7.10.1-x86.msi](https://nodejs.org/download/release/v7.10.1/node-v7.10.1-x86.msi) 一路点next就ok；

对于Android开发者来说对node不是很熟悉，没有关系，推荐看看知乎这篇文章[Node.js是用来做什么的？](https://www.zhihu.com/question/33578075)先了解一下。这里用node是把它作为搭建开发工具环境用的，主要用于开发、debug、编译和打包。

`开发快应用真正用到的还是html(ux)、css和js的语法`

安装完node环境后建议安装cnpm，这样下载库时会走淘宝的node仓库，会更快：

```
npm install -g cnpm --registry=https://registry.npm.taobao.org
```

安装完cnpm后，所有使用npm的地方都可以换做cnpm


### 安装hap-toolkit

```
cnpm install -g hap-toolkit
```
-g 参数是全局安装在环境变量能访问的地方，这样直接在命令行中可以执行hap命令，查看版本

```
hap -V
```

hap 是官方给的辅助开发工具，主要功能是初始化工程模板，这样就省去了初始化繁琐的工作；

## 开发工具

开发工具有很多种选择，我个人很喜欢VsCode [VsCode 下载地址](https://code.visualstudio.com/),推荐用VsCode

温馨提示：VsCode 快捷键 `Ctrl+Shift+y`可以调出调试控制台、终端

## 创建项目

### 创建

```
hap init <ProjectName>
```

```
├── node_modules
├── sign                      rpk包签名模块
│   └── debug                 调试环境
│       ├── certificate.pem   证书文件
│       └── private.pem       私钥文件
├── src
│   ├── Common                公用的资源文件和组件文件
│   │   └── logo.png          manifest.json中配置的icon
│   ├── Demo                  页面目录
│   |   └── index.ux          页面文件，文件名不必与父文件夹相同
│   ├── app.ux                APP文件（用于包括公用资源）
│   └── manifest.json         项目配置文件（如：应用描述、接口申明、页面路由等）
└── package.json              定义项目需要的各种模块及配置信息，npm install根据这个配置文件，自动下载所需的运行和开发环境

```

目录的简要说明如下：

- src：项目源文件夹
- node_modules：项目的依赖类库
- sign：签名模块，当前仅有debug签名，如果内测上线，请添加release文件夹，增加线上签名；签名生成方法请参考文档：编译工具的openssl

Web前端同学可能不太了解sign，可以看看这篇文章[Android 你了解Android签名文件吗?](https://blog.csdn.net/u010316858/article/details/53159678)


### 编译

请先将命令行执行目录切换至你刚创建的目录下，后面所有命令都在这个目录下执行。

根据package.json [nodejs package.json详解](https://blog.csdn.net/hh12211221/article/details/77567627)安装库：

```
cnpm install
```

编译

```
npm run build
```

实际上是调用package.json中的scripts-->build命令,[npm scripts 使用指南](http://www.ruanyifeng.com/blog/2016/10/npm_scripts.html)

```
{
"scripts": {
    "build":   "cross-env NODE_PLATFORM=na NODE_PHASE=dv webpack --config ./node_modules/hap-tools/webpack.config.js"
}
}
```

编译打包成功后，项目根目录下会生成文件夹：build、dist

- build：临时产出，包含编译后的页面js，图片等
- dist：最终产出，包含rpk文件。其实是将build目录下的资源打包压缩为一个文件，后缀名为rpk，这个rpk文件就是项目编译后的最终产出


![](https://gitee.com/lefutong/assets/raw/master/quickcn/struct.png)

我们大概看看其主要文件是.ux，里面的结构分为template，style，script三大块，这个结构是典型的Web前端[MVVM](https://baike.baidu.com/item/MVVM/96310?fr=aladdin)结构，用到了CSS [Flex](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)看来一个.ux就是一个模块，类似一个Android中的Activity。manifest.json就类似Android中的AndroidManifest.xml


`rpk文件就是快应用安装包类似Android的APK包，它只能在支持快应用的Android操作系统或Android App里执行`

### 自动重新编译

如果希望每次修改源代码文件后，都自动重新编译项目，请使用如下命令：

```
npm run watch
```

`注意：`

如果报错遇到Cannot find module '.../webpack.config.js'，请重新执行一次hap update --force。这是由于高版本的npm在npm install时，会校验并删除了node_modules下部分文件夹，导致报错。而hap update --force会重新复制hap-tools文件夹到node_modules中

## 安装debug工具

### 安装debug APP

[Debug APP 下载](https://statres.quickapp.cn/quickapp/quickapp/201803/file/201803221213415527241.apk)

安装后截图如下：

![](https://doc.quickapp.cn/tutorial/getting-started/hello-world.1.png)

说明如下：

- 扫码安装：配置HTTP服务器地址，下载rpk包，并唤起平台运行rpk包
- 本地安装：选择手机文件系统中的rpk包，并唤起平台运行rpk包
- 在线更新：重新发送HTTP请求，更新rpk包，并唤起平台运行rpk包
- 开始调试：唤起平台运行rpk包，并启动远程调试工具

目前大部分手机系统还没有集成快应用的执行环境,所以还要安装运行环境APP，[运行环境APP下载](https://statres.quickapp.cn/quickapp/quickapp/201803/file/20180322121456491785.apk) 安装运行环境APP。然后再打开debug APP。

## 运行 rpk包

在调试器中唤起平台打开rpk包有多种途径，以下两者选其一即可，推荐第一种途径：

- HTTP请求：开发者启动HTTP服务器，打开调试器，点击扫码安装配置HTTP服务器地址，下载rpk包，并唤起平台运行rpk包
- 本地安装：开发者将rpk包拷贝到手机文件系统，打开调试器，点击本地安装选择rpk包，并唤起平台运行rpk包

1. 扫码安装

启动HTTP服务器

在终端中新建一个窗口，进入项目的根目录运行如下命令，启动本地服务器（默认端口为12306）

```
npm run server
```

自定义端口（如：8080）

```
npm run server -- --port 8080
```
在Debug APP上预览运行效果

配置HTTP服务器地址有两种方式，以下两者选其一即可：

- 打开调试器 --> 点击"扫码安装"，扫描终端窗口中的二维码即可完成配置（若扫描不成功，可在浏览器中打开页面：http://localhost:port，扫描页面中的二维码）

- 打开调试器 --> 点击右上角menu --> 设置，输入终端窗口中提示的HTTP服务器地址

配置完成后，若没有自动唤起平台运行rpk包，点击在线更新唤起平台运行rpk包，若提示安装失败，请检查执行npm run server的终端窗口是否正常运行

运行效果如下图：

![效果图](https://doc.quickapp.cn/tutorial/getting-started/hello-world.2.png)

2. 本地安装

复制rpk包到手机中

将<ProjectName>/dist目录下编译产出的rpk包通过USB数据线或其他方式，复制到手机文件系统中

本地安装rpk包

打开调试器 --> 点击"本地安装"，选择手机文件系统中的rpk包，并自动唤起平台运行rpk包，查看效果

## 调试

### 日志输出

1. 修改日志等级

打开工程根目录下的src文件夹的manifest.json，找到config配置，将logLevel修改为最低级别debug，即：允许所有级别的日志输出

修改后<ProjectName>/src/manifest.json中config配置代码如下：

```
{
　"config": {
  　　"logLevel": "debug"
  }
}
```

2. 在js中输出日志

当js代码未按需求正确运行，输出日志能帮助开发者快速定位问题；与传统前端开发一致，使用console对象输出日志，如下：

```
console.debug('debug')
console.log('log')
console.info('info')
console.warn('warn')
console.error('error')
```

3. 查看日志

开发者可以使用Android Studio的Android Monitor输出来查看日志。

先添加一段console.debug("hello quickapp")

![](https://gitee.com/lefutong/assets/raw/master/quickcn/add-log.png)

然后

```
npm run build
```

```
npm run server
```
终端出现如下：

![](https://gitee.com/lefutong/assets/raw/master/quickcn/run-server.png)


然后打开Android Monitor

![](https://gitee.com/lefutong/assets/raw/master/quickcn/Android-Monitor.png)

用Debug App 扫描二维码安装；

<img src="https://gitee.com/lefutong/assets/raw/master/quickcn/log1.png" style="zoom:30%"/>

### 远程调试

如果你没有安装Android-Monitor，就可以通过远程调试调试快应用，用hap-toolkit的远程调试命令 、chrome devtools调试界面，来调试手机app端的页面

- 开发者可以通过命令行终端或者调试服务器主页看到提供扫描的二维码
- 开发者通过快应用调试器扫码安装按钮，扫码安装待调试的rpk文件
- 开发者点击快应用调试器中的开始调试按钮，开始调试

用Debug App 扫描二维码安装后点击开始调试按钮：

![](https://gitee.com/lefutong/assets/raw/master/quickcn/debug.png)

如果安装了Chrome浏览器，debug程序会自动调起PC Chrome devtools：

![](https://gitee.com/lefutong/assets/raw/master/quickcn/debug2.png)


大家可以改一些代码自己跑起来看看效果

## 与小程序对比

通过打开Android开发者选项中的'显示布局界面边界'功能可以看出界面是否是Android原始控件：

<img src="https://gitee.com/lefutong/assets/raw/master/quickcn/quckapp.png" style="zoom:30%"/>

<img src="https://gitee.com/lefutong/assets/raw/master/quickcn/wechat.png" style="zoom:30%"/>

<img src="https://gitee.com/lefutong/assets/raw/master/quickcn/zhifubao.png" style="zoom:30%"/>


对比发现，快应用将html,js,css最终编译成Android原始控件了，这样快应用的体验最好


## 总结

总结一下前面都学到了什么：

- 搭建环境，安装Node，hap，VsCode，Debug App，运行环境APP
- 创建第一个项目，初识开发框架，开发语言
- 编译安装debug rpk包
- 和小程序对比，快应用编译程序为Android原始控件，这样体验最好


![](https://mmbiz.qpic.cn/mmbiz_png/YTPmnRDrr6Nw7FK5AVM0XvHOiclRvYgU04Egq5e31psT2FicDLjSgafvdCLPFibsg70Ck6ndLkGiaauYZxUv3h4CGA/0?wx_fmt=png)