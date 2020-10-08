<template>
  <div>
    <label :for="select">What {{ select }} do you want</label>
    <select :id="select" :name="select" @change="$emit('change',$event.target.value)">
      <option value="">
        Please select a {{ select }}
      </option>
      <option v-for="option in selectOptions" :key="option">
        {{ option }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    select: {
      type: String,
      default: 'cuisine'
    },
    selectOptions: {
      type: Array,
      default: () => ['taco', 'pizza', 'dim sum']
    }
  }
}
</script>

<style>

</style>
