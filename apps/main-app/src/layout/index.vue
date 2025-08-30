<script lang="ts" setup>
import type { LayoutMode } from '@/types/setting'
import { HEADER_LEFT_NAV_LIST, HEADER_RIGHT_NAV_LIST } from '@/config/nav'
import CdHeader from '@/layout/header/CdHeader.vue'

interface LayoutProps {
  mode: LayoutMode
}

defineProps<LayoutProps>()
</script>

<template>
  <!-- 1-column -->
  <el-container v-if="mode === '1-column'">
    <el-header>
      <CdHeader :left-nav-list="HEADER_LEFT_NAV_LIST" :right-nav-list="HEADER_RIGHT_NAV_LIST" />
    </el-header>
    <el-main>Main</el-main>
    <el-footer>Footer</el-footer>
  </el-container>

  <!-- 2-column -->
  <el-container v-else-if="mode === '2-column'">
    <el-header>
      <CdHeader :left-nav-list="HEADER_LEFT_NAV_LIST" :right-nav-list="HEADER_RIGHT_NAV_LIST" />
    </el-header>
    <el-container>
      <el-aside width="200px">
        Aside
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
      <CdHeader :left-nav-list="HEADER_LEFT_NAV_LIST" :right-nav-list="HEADER_RIGHT_NAV_LIST" />
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
