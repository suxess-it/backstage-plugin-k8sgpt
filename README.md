# k8sgpt

Welcome to the k8sgpt plugin!

_This plugin was created through the Backstage CLI_

## Getting started

K8sGPT installation:

You need to install [K8sGPT via the operator](https://github.com/k8sgpt-ai/k8sgpt-operator/). You need the operator installation because the operator also triggers k8sgpt analyzes and saves the results in result CRs which get display in this backstage plugin. You will need at least v0.0.17 which has [backstage-support](https://github.com/k8sgpt-ai/k8sgpt-operator/pull/127) included.

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

## What you will see

plugin-k8sgpt shows you the k8sgpt Results for the corresponding entity in a table like this:

![image](https://github.com/suxess-it/backstage-plugin-k8sgpt/assets/11465610/24591cc2-1290-4a3b-bf91-4d6e5b1a89cf)


