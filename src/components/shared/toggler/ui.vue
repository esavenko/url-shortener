<script setup lang="ts">
import { IconMoon } from '@/components/shared/Icons/IconMoon'
import { IconSun } from '@/components/shared/Icons/IconSun'
import { useThemes } from '@/composables/useThemes.ts'

const { isDark, toggleTheme } = useThemes()
</script>

<template>
  <button @click="toggleTheme()">
    <IconMoon v-if="isDark" width="40" />
    <IconSun v-else width="40" />
  </button>
</template>
