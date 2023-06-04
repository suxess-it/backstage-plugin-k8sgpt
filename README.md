# k8sgpt

Welcome to the k8sgpt plugin!

_This plugin was created through the Backstage CLI_

## Getting started

Install plugin:
```
yarn add --cwd packages/app @suxess-it/backstage-plugin-k8sgpt
```

Import plugin and embed in the entities page:

```
// packages/app/src/components/catalog/EntityPage.tsx

import { K8sGPTPage } from '@suxess-it/backstage-plugin-k8sgpt';

// ...

// add this section to the place where the serviceEntityPage gets defined
// const serviceEntityPage = (
// ...
    <EntityLayout.Route path="/k8sgpt" title="K8sGPT">
      <K8sGPTPage />
    </EntityLayout.Route>
```
    
## Backstage dependencies and configuration

This plugin depends on the kubernetes-common and kubernetes-backend plugin. If you haven't already installed and configured the kubernetes plugin, please follow the instructions on https://backstage.io/docs/features/kubernetes/ .

Please be aware the the used ClusterRole as described in https://backstage.io/docs/features/kubernetes/configuration#role-based-access-control also needs this permissions to read the k8sgpt results:

```
- apiGroups:
  - core.k8sgpt.ai
  resources:
  - results
  verbs:
  - get
  - list
```


