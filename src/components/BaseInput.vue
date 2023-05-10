<template>
    <label for="">
        {{ label }}
    </label>
    <input  
        :placeholder="label"
        :value="modelValue" 
        @input="handleInput"
        class="field">
</template>

<script setup lang="ts">
    defineProps<{
        label?: string
        type?: string
        modelValue?: string | number
    }>()

    const emit = defineEmits<{
        (e: 'makeInput', value: number):void
    }>()

    const handleInput = (event:Event) =>{
        //value absolutely exists on event.target
        // the TS compiler lies
        console.log((event.target as HTMLButtonElement).value);
        
    }
    
</script>

