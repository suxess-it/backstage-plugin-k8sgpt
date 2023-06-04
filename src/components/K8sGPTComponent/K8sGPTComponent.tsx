import React from 'react';
import { Grid } from '@material-ui/core';
import {
  Page,
  Content,
  ContentHeader,
  SupportButton,
} from '@backstage/core-components';
import { K8sGPTFetchResults } from '../K8sGPTFetchResults';

export const K8sGPTComponent = () => (
  <Page themeId="tool">
    <Content>
      <ContentHeader title="K8sGPT - gives Kubernetes Superpowers to everyone">
        <SupportButton>Here are all K8sGPT analyzes related to your K8s service</SupportButton>
      </ContentHeader>
      <Grid container spacing={3} direction="column">
        <Grid item>
          <K8sGPTFetchResults />
        </Grid>
      </Grid>
    </Content>
  </Page>
);
