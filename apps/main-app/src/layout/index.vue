<script lang="ts" setup>
import type { LayoutMode } from '@/types/setting'
import { useAsideNav } from '@/composables/useAsideNav'
import { useHeaderNav } from '@/composables/useHeaderNav'
import CdAsideNav from '@/layout/aside/CdAsideNav.vue'
import CdAsideSubNav from '@/layout/aside/CdAsideSubNav.vue'
import { handleNav } from '@/layout/handleNav'
import CdHeader from '@/layout/header/CdHeader.vue'

interface LayoutProps {
  mode: LayoutMode
}

defineProps<LayoutProps>()

const { leftNavList, rightNavList } = useHeaderNav()
const { topNavList, bottomNavList } = useAsideNav()
</script>

<template>
  <!-- 1-column -->
  <el-container v-if="mode === '1-column'">
    <el-header>
      <CdHeader :left-nav-list="leftNavList" :right-nav-list="rightNavList" @nav="handleNav" />
    </el-header>
    <el-main>Main</el-main>
    <el-footer>Footer</el-footer>
  </el-container>

  <!-- 2-column -->
  <el-container v-else-if="mode === '2-column'">
    <el-header>
      <CdHeader :left-nav-list="leftNavList" :right-nav-list="rightNavList" @nav="handleNav" />
    </el-header>
    <el-container>
      <el-aside width="64px">
        <CdAsideNav :top-nav-list="topNavList" :bottom-nav-list="bottomNavList" />
      </el-aside>
      <el-aside width="177px">
        <CdAsideSubNav />
      </el-aside>
      <el-container>
        <el-main>Main</el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </el-container>

  <!-- 3-column -->
  <el-container v-else>
    <el-header>
      <CdHeader :left-nav-list="leftNavList" :right-nav-list="rightNavList" @nav="handleNav" />
    </el-header>
    <el-container>
      <el-aside width="200px">
        Aside
      </el-aside>
      <el-main>Main</el-main>
      <el-aside width="200px">
        Aside
      </el-aside>
    </el-container>
  </el-container>
</template>
