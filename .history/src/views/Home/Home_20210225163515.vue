<template>
  <article class="home">
    <h1>home</h1>
    <p>
      
STM32四轴飞控程序
07-23
编译,下载,运行,连接飞控串口和FTDI串口,串口波特率500K,上位机打开高级收码,在上位机飞控状态标签可以看到变化的传感器数据,3D显示可以跟随roll和pitch的变化而变化,因为没有写yaw的
vue使用keep-alive实现组件切换时保存原组件数据
m0_46627730的博客
 183
前言 最近在做一个精品课程后台管理系统，其中涉及文件上传和文件列表展示，我不想将他们写入一个组件，故分开两个组件实现。 问题：但由于上传文件需要时间，这时要是用户切换别的组件查看时，上传文件组件就销毁了，导致文件上传失败。 追求效果：想利用keep-alive实现上传组件切换时仍继续上传文件，而其他组件则不会存活。 使用keep-alive的过程 普通方法：直接使用keep-alive <keep-alive> <router-view /> </keep-alive&gt

优质评论可以帮助作者获得更高权重
表情包
weixin_43893306
weixin_43893306:求问多级路由缓存怎么办2 天前回复
点赞
qq_45032714
长沙彭小黑:gitee 4036 天前回复
点赞
junjiahuang
JDwd回复:不好意思，私有了，现在改公开了。2 天前回复
点赞
weixin_42905479
住口:怎么删掉了 哭了4 月前回复
点赞
junjiahuang
JDwd回复:什么删掉了？2 天前回复
点赞
aipig09
xiaohui0929:<router-view> can no longer be used directly inside <transition> or <keep-alive> 这个应该怎么解决5 月前回复
点赞
    </p>
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
