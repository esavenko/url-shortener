<script setup lang="ts">
import { useThemes } from '@/composables/useThemes.ts'
import { IconMoon } from '@/components/shared/Icons/IconMoon'
import { IconSun } from '@/components/shared/Icons/IconSun'

const { isDark, toggleTheme } = useThemes()
</script>

<template>
  <button @click="toggleTheme()">
    <IconMoon width="40" v-if="isDark" />
    <IconSun width="40" v-else />
  </button>
</template>
