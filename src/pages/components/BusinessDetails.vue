<template>
  <fieldset>
    <h2>{{ sectionName }}</h2>
    <button @click="toggle">Toggle Mode</button>

    <ptm-editable-field
      :mode="mode"
      :editable="isEditable('businessType')"
      v-model="businessType"
      label="Business type"
    />

    <ptm-editable-field
      :mode="mode"
      :editable="isEditable('businessName')"
      v-model="businessName"
      label="Business name"
    />

    <ptm-editable-field
      :mode="mode"
      :editable="isEditable('phone')"
      v-model="phone"
      label="Business phone"
    />

    <ptm-editable-field
      :mode="mode"
      :editable="isEditable('email')"
      v-model="email"
      label="Business e-mail"
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
      sectionName: 'businessDetails',
    }
  },
  computed: {
    ...mapFields([
      'businessDetails.businessType',
      'businessDetails.businessName',
      'businessDetails.phone',
      'businessDetails.email',
    ])
  }
}
</script>

