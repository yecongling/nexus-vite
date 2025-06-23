import React from 'react';

/**
 * 路由懒加载
 * @param param0 模块名
 * @returns
 */

export const LazyLoad = (moduleName: string) => {
  const viteModule = import.meta.glob('../**/*.tsx');
  //组件地址
  let URL = '';
  if (moduleName === 'layouts') {
    URL = `../layouts/index.tsx`;
  } else if (moduleName.endsWith('.tsx')) {
    URL = `../pages/${moduleName}`;
  } else {
    URL = `../pages/${moduleName}/index.tsx`;
  }
  const Module = React.lazy(
    (viteModule[`${URL}`] as any) ?? (() => import('@/pages/error/404'))
  );
  return <Module />;
};
