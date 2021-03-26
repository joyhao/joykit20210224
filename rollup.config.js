// 处理import 无法使用变量拼接字符
import dynamicImportVars from '@rollup/plugin-dynamic-import-vars';

export default {
  plugins: [
    dynamicImportVars({
      // options
    }),
  ],
};
