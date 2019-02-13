export default {
  treeShaking: true,
  plugins: [
    [
      'umi-plugin-react',
      {
        dva: {
          immer: true,
        },
        antd: true,
        routes: {
          exclude: [
            /models\//,
            /services\//,
            /model\.(t|j)sx?$/,
            /service\.(t|j)sx?$/,
            /components\//,
          ],
        },
        locale: {
          baseNavigator: true,
          antd: true,
        },
        dynamicImport: {
          webpackChunkName: true,
        },
        dll: true,
        hardSource: false,
        pwa: false,
        hd: false,
        fastClick: false,
        title: 'umi-dnd-learn',
      },
    ],
  ],
  history: 'hash',
  targets: {
    ie: 9,
  },
};
