import { createPlugin, createRoutableExtension } from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const k8SgptPlugin = createPlugin({
  id: 'k8sgpt',
  routes: {
    root: rootRouteRef,
  },
});

export const K8sGPTPage = k8SgptPlugin.provide(
  createRoutableExtension({
    name: 'K8sGPTPage',
    component: () =>
      import('./components/K8sGPTComponent').then(m => m.K8sGPTComponent),
    mountPoint: rootRouteRef,
  }),
);
