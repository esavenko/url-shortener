<script setup lang="ts">
import { Page } from '@/components/layout/page'
import { MainLogo } from '@/components/shared/Icons/logo'
import { ThemeToggler } from '@/components/shared/toggler'
</script>

<template>
  <header
    id="header"
    class="sticky h-20 w-full flex justify-between items-center top-0 left-0 dark:bg-zinc-600 shadow-lg"
  >
    <Page>
      <div class="flex justify-between items-center">
        <div>
          <MainLogo width="266" height="35" />
        </div>
        <ThemeToggler />
      </div>
    </Page>
  </header>
</template>
