<template>
  <article class="home">
    <h1>home</h1>
    <pre>
      CSDN首页
首页
博客
程序员学院
下载
论坛
问答
代码
直播
电子书
网络工程师和网络运维工程师的区别
 

会员中心
收藏
动态
消息2
创作中心
vue3.0 vue-router4.0 keep-alive保存当前页面数据的正确写法

JDwd 2020-08-27 01:35:45  2161  收藏 2
分类专栏： vue vue-router
版权
版本1
@vue/cli 4.4.1
“vue”: “^2.6.11”,
“vue-router”: “^3.2.0”,

<keep-alive>
   <router-view v-if="$route.meta.alive"></router-view>
 </keep-alive>
1
2
3
版本2
@vue/cli 4.2.0
“vue”: “^2.6.11”
“vue-router”: “^3.1.5”

<template v-if="$route.meta.alive">
          <router-view keep-alive />
        </template>
        <template v-else>
          <router-view />
        </template>
1
2
3
4
5
6
版本3
@vue/cli 4.5.4
“vue”: “^3.0.0-0”
“vue-router”: “^4.0.0-0”
上面的写法会报错：
<router-view> can no longer be used directly inside <transition> or <keep-alive>


<router-view v-slot="{ Component }">
    <keep-alive include="Home,News">
      <component class="view" :is="Component" />
    </keep-alive>
  </router-view>
1
2
3
4
5
6
附上demo


点赞
2

评论
9

分享

收藏
2

打赏

举报
关注
一键三连

junjiahuang
JDwd回复QAQLP:登录你的gitee账号就可以查看啊，没有就注册一个5 月前回复
点赞
QAQLP
QAQLP回复JDwd:demo 跳转过不去,没有权限5 月前回复
点赞
junjiahuang
JDwd回复:我上面博客的最后一种写法就可以解决。把router-view放到keep-alive和transition标签的外面。5 月前回复
点赞
vue-router4.0.0 beforeRouterEnter不支持！
junjiahuang的博客
 182
不看更新，掉大坑了。
vue中router使用keep-alive缓存页面的注意事项
weixin_33758863的博客
 446
<keep-alive exclude="QRCode"> <router-view></router-view> </keep-alive> exclude表示不缓存这个界面，注意 QRCode是组件的名字 export default { name:"QRCode", component...
vue使用keep-alive缓存指定页面_weixin_44759404的博客
2-14
解决方案: 使用keep-alive的include属性选择性保存,结合vuex,直接上代码, 简单修改即可使用 1.此vuex中保存需要保存的页面值 2include的值是一个数组,数组里的值...
vue keep-alive缓存当前页面_狗狗狗亮的博客
1-12
如果想保存A页面跳转之前的页面状态,我开始的做法是将需要的数据保存到storage里,返回的时候再取出数据去请求一次,但是这样做总觉得不太好,于是采用了keep-alive ...
vue中 keep-alive 结合 transition 使用（已解决）
a13706935773的专栏

vue自动缓存keep-alive当前页面数据，包括选择框里面选择的内容或者搜索框选好的内容、选择的页数 当前的动作：想要修改信息，保存后还返回到之前点击修改的页面，例如：编辑完信息我保存后还返回之前这个页面， 之前我想的是用router路由当前需要保存的数据进去，然后再返回的时候传回去请求接口：在路由后面加上参数 { path: '/premisesEdit/:id/:n...
Vue使用keep-alive，调用 $destory() ，页面不再被缓存的解决方法
浩哥
 3万+
需求：项目中需要开发一个导航栏，类似浏览器的导航，没有关闭的时候页面缓存，关掉之后，页面随之销毁。（如图） 项目是使用Vue + Vue-Router + Vuex 刚开始使用的方法是：关闭导航标签，直接调用对应的页面的$destory()方法，OK，可以实现关闭页面（下次再打开该页面，将初始化）的功能，但是遇到个问题： 该页面将不再被缓存，也就是说切换导航tab时，页面将不断的被初始化...
vue-router中keep-alive的使用以及注意情况_qq71975614...
2-21
所用版本:vue:2.6.10vue-router:3.0.6问题描述:项目中使用vue,并且使用vue router做路由。在需要缓存时引入标签 keep-alive,此时组件仍然不会进行缓存。分析解决...
Vue中keep-alive的深入理解与使用(配合router-view缓存整个路由...
2-3
在搭建 vue 项目时,有某些组件没必要多次渲染,所以需要将组件在内存中进行‘持久化’,此时 便可以派上用场了。 可以使被包含的组件状态维持不变,即便是组件切换...
【vue】使用vue-cli4.0快速搭建一个项目
hello world_
 6万+
前言 最近公司的项目终于到了空闲期，而闲不住的我终于把目标放到了项目的迁移上面 因为公司的项目比较早的原因（虽然当时vue-cli也出来了一段时间，但是不敢轻易尝试啊！） 所以使用的环境还是 vue2.x版本的，而又因为公司的前端项目都是我来搭建的原因（并不是技术大佬，入职早！） 所以所有项目开发的时候一直在用的 vue-cli2.0，后来项目多了也没时间就没往 vue-cli3.0 迁...
vue单页 使用keep-alive页面返回不刷新
leileibrother的博客
 2万+
使用vue单页开发项目时遇到一个很恶心的问题：在列表页点击一条数据进入详情页，按返回键返回列表页时页面刷新了，用户体验非常差啊！！！查阅了一下相关问题，使用解决这个问题，下面是我的使用心得。 是Vue的内置组件，能在组件切换过程中将状态保留在内存中，防止重复渲染DOM。 首先在App.vue页面上有下面一段代码，我们都知道这是页面渲染的地方 把这段代码改成如下：
Vue中使用router.meta.keepAlive对页面进行缓存
qq_42127308的博客
 9050
需求：1. 从stockList页面到stockInfo页面，从stockInfo页面返回stockList，缓存stockList页面 2. 从其他页面进入到stockList页面，则不缓存stockList页面 路由配置文件中： { path: '/stockSelectionAndDiagnosticStocks', name: 'stockSelecti...
Linux内核之数据结构--队列
Linux_先生的博客
 2844
前言Linux内核实现了以下常用的内建数据结构，主要有： 　　链表 　　队列 　　映射 　　二叉树 今天详细学习一下队列的知识，内核中的队列是以字节形式保存数据的，所以获取数据的时候，需要知道数据的大小。Linux内核通用队列实现称为kfifo。kfifo提供了两个主要操作：enqueue（入队列）和dequeue（出队列）。kfifo对象维护两个偏移量：入口偏移和出口偏移。、
vue-router 之 keep-alive
Winne_Shen的专栏
 394
本文基于 Vue2.0keep-alive 简介keep-alive 是 Vue 内置的一个组件，可以使被包含的组件保留状态，或避免重新渲染。用法也很简单：&lt;keep-alive&gt; &lt;component&gt; &lt;!-- 该组件将被缓存！ --&gt; &lt;/component&gt; &lt;/keep-alive&gt; propsinclude -...
©️2020 CSDN 皮肤主题: 大白 设计师:CSDN官方博客 返回首页
关于我们
招贤纳士
广告服务
开发助手

400-660-0108

kefu@csdn.net

在线客服
工作时间 8:30-22:00
公安备案号11010502030143
京ICP备19004658号
京网文〔2020〕1039-165号
经营性网站备案信息
北京互联网违法和不良信息举报中心
网络110报警服务
中国互联网举报中心
家长监护
Chrome商店下载
©1999-2021北京创新乐知网络技术有限公司
版权与免责声明
版权申诉

JDwd
码龄5年
 暂无认证
85
原创
1万+
周排名
8万+
总排名
11万+
访问

等级
1352
积分
10
粉丝
15
获赞
20
评论
27
收藏
持之以恒
勤写标兵Lv4
私信
关注
搜博主文章

最新评论
vue3.0 vue-router4.0 keep-alive保存当前页面数据的正确写法
weixin_43893306: 求问多级路由缓存怎么办

vue3.0 vue-router4.0 keep-alive保存当前页面数据的正确写法
JDwd: 什么删掉了？

vue3.0 vue-router4.0 keep-alive保存当前页面数据的正确写法
JDwd: 不好意思，私有了，现在改公开了。

vue3.0 vue-router4.0 keep-alive保存当前页面数据的正确写法
长沙彭小黑: gitee 403

element-ui el-image 以及背景图片地址正确写法
Paralu36: 感谢！！！！

最新文章
mescroll做首页的下拉fixed效果思路分析，项目中已实现。
纯CSS实现各种不规则图形
小程序分享朋友以及朋友圈
2020年82篇2018年5篇

分类专栏

uni
10篇

小程序
5篇

css
2篇

前端原理
17篇

前端功能实现
7篇

工具
14篇

vue
9篇

vue-router
2篇

angular9
8篇

21世纪的ftp坑
1篇

react
6篇

antd design
3篇

element-ui
1篇

umi
1篇

typescript
2篇

视频
1篇

php框架
1篇

前端构建工具
3篇

node
1篇

es6
9篇


举报
    </pre>
  </article>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.home {
  height: 60vh;
  overflow: scroll;
  scroll-behavior: smooth;
}
h1 {
}
</style>
