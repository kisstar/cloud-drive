<script lang="ts" setup>
import type { LayoutMode } from '@/types/setting'
import { Aside, Content, Footer, Header, Layout } from 'tdesign-vue-next'

interface LayoutProps {
  mode: LayoutMode
}

defineProps<LayoutProps>()
</script>

<template>
  <!-- Vertical layout, top navigation -->
  <Layout v-if="mode === 'TopNav'">
    <Header>Header</Header>
    <Content>Content</Content>
    <Footer>Footer</Footer>
  </Layout>

  <!-- Left and right layout, side navigation -->
  <Layout v-if="mode === 'SideNav'">
    <Aside>Aside</Aside>
    <Layout>
      <!-- <Header>Header</Header> -->
      <Content>Content</Content>
      <Footer>Footer</Footer>
    </Layout>
  </Layout>

  <!-- Combined navigation layout -->
  <Layout v-else>
    <Header>
      <Header />
    </Header>
    <Layout>
      <Aside>Aside</Aside>
      <Content>Content</Content>
    </Layout>
    <Footer>Footer</Footer>
  </Layout>
</template>
