/**
 * 自动生成文件的相关配置信息
 * @param parentFolderPath 父文件地址，相对于根路径
 * @param routerPath 路由文件地址
 * @param breadPath 面包屑导航地址
 * @param parentName 父菜单名字
 * @param leftMenuPath 左侧菜单文件路径
 * @param author 当前文件的创建者
 * @param title 文件标题，与增删改的提示信息相关
 * @param isDrawer 是否有抽屉，默认为true，表示增删改功能皆有
 * @param getUrl 列表请求接口地址
 * @param addUrl 新增接口地址
 * @param editUrl 编辑接口地址
 * @param deleteUrl 删除接口地址
 * @param childrenValues 子页面的模块名称
 * @param childrenNames 子页面的标题
 * @author joykit
 * @createtime new Date()
 */
exports.conf = {
  parentFolderPath: "src/views",
  routerPath: "src/router/routes.js",
  //   breadPath: "src/components/BreadLink/config.js",
  //   parentName: "网络服务",
  //   leftMenuPath: "src/views/Home/LeftMenu/LeftMenu.config.js",
  //   author: "joykit",
  //   title: "测试一",
  isDrawer: true,
  getUrl: "",
  addUrl: "",
  editUrl: "",
  deleteUrl: "",
  // 下面针对是多页面的配置
  childrenValues: ["child1", "child2", "child3", "child4"],
  childrenNames: ["子页面1", "子页面2", "子页面3", "子页面4"],
};
