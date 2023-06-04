import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { k8SgptPlugin, K8sGPTPage } from '../src/plugin';

createDevApp()
  .registerPlugin(k8SgptPlugin)
  .addPage({
    element: <K8sGPTPage />,
    title: 'Root Page',
    path: '/k8sgpt'
  })
  .render();
