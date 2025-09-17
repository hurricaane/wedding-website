<script setup lang="ts">
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

defineProps<{
  label: string
  color: string
}>()
</script>

<template>
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger as-child>
        <span class="underline cursor-pointer text-gold-600 hover:text-gold-700">{{ label }}</span>
      </TooltipTrigger>
      <TooltipContent side="bottom">
        <div
          class="w-10 h-10 rounded border"
          :style="{ backgroundColor: color }"
        />
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
</template>
