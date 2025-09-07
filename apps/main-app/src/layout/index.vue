<script lang="ts" setup>
import { useAsideNav } from '@/composables/useAsideNav'
import { useAsideSubNav } from '@/composables/useAsideSubNav'
import { useHeaderNav } from '@/composables/useHeaderNav'
import { ROUTER_VIEW } from '@/constants/route'
import { handleNav } from '@/layout/handleNav'
import { useSettingStore } from '@/store/setting'

const settingStore = useSettingStore()
const { leftNavList, rightNavList } = useHeaderNav()
const { topNavList, bottomNavList } = useAsideNav()
const { topNavList: subTopNavList, bottomNavList: subBottomNavList } = useAsideSubNav()
</script>

<template>
  <!-- 1-column -->
  <el-container v-if="settingStore.layoutMode === '1-column'">
    <el-header>
      Header
    </el-header>
    <el-main>Main</el-main>
    <el-footer>Footer</el-footer>
  </el-container>

  <!-- 2-column -->
  <el-container v-else-if="settingStore.layoutMode === '2-column'">
    <el-header>
      <router-view
        :name="ROUTER_VIEW.HEADER"
        :left-nav-list="leftNavList"
        :right-nav-list="rightNavList"
        @nav="handleNav"
      />
    </el-header>
    <el-container>
      <el-aside width="64px">
        <router-view :name="ROUTER_VIEW.ASIDE_NAV" :top-nav-list="topNavList" :bottom-nav-list="bottomNavList" />
      </el-aside>
      <el-aside width="177px">
        <router-view :name="ROUTER_VIEW.ASIDE_SUN_NAV" :top-nav-list="subTopNavList" :bottom-nav-list="subBottomNavList" />
      </el-aside>
      <el-container>
        <el-main>
          <router-view :name="ROUTER_VIEW.CONTENT" />
        </el-main>
        <el-footer>
          <router-view :name="ROUTER_VIEW.FOOTER" />
        </el-footer>
      </el-container>
      <el-aside width="177px">
        <router-view :name="ROUTER_VIEW.RIGHT_ASIDE_CONTENT" />
      </el-aside>
    </el-container>
  </el-container>

  <!-- 3-column -->
  <el-container v-else>
    <el-header>
      Header
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
