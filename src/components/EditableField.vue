<template>
  <div>
    <p v-if="editable && mode === 'EDIT'">
      <label>{{ label }}: </label>
      <input type="text" :value="value" @input="$emit('input', $event.target.value)" />
    </p>
    <p v-else>
      {{ label }}: {{ value }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    mode: String,
    editable: Boolean,
    label: String,
    value: String
  }
}
</script>
