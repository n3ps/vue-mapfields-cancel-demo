<template>
  <fieldset>
    <h2>{{ sectionName }}</h2>
    <button @click="toggle">Toggle Mode</button>

    <ptm-editable-field
      :mode="mode"
      :editable="isEditable('firstName')"
      v-model="firstName"
      label="First name"
    />

    <ptm-editable-field
      :mode="mode"
      :editable="isEditable('lastName')"
      v-model="lastName"
      label="Last name"
    />

    <ptm-editable-field
      :mode="mode"
      :editable="isEditable('jobTitle')"
      v-model="jobTitle"
      label="Job title"
    />

    <div v-if="mode === 'EDIT'">
      <button @click="save">Save</button>
      <button @click="cancel">Cancel</button>
    </div>

  </fieldset>
</template>

<script>
import { mapFields } from 'vuex-map-fields'
import PtmEditableField from '../../components/EditableField'
import Editable from '../../mixin'

export default {
  components: {
    PtmEditableField
  },
  mixins: [
    Editable
  ],
  data () {
    return {
      sectionName: 'representatives',
    }
  },
  computed: {
    ...mapFields([
      'representatives.firstName',
      'representatives.lastName',
      'representatives.jobTitle'
    ])
  }
}
</script>

