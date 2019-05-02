export default {
  data () {
    return {
      prevState: {},
      mode: 'VIEW'
    }
  },
  methods: {
    isEditable (fieldName) {
      const editableFields = this.$store.getters.editableFields
      return editableFields[this.sectionName].indexOf(fieldName) >= 0
    },
    toggle () {
      this.mode = this.mode === 'VIEW' ? 'EDIT' : 'VIEW'

      if (this.mode === 'EDIT') {
        this.prevState = JSON.parse(JSON.stringify(this.$store.state[this.sectionName]))
      }
    },
    save () {
      this.$store.dispatch('updateLead', this.sectionName)
      this.toggle()
    },
    cancel () {
      const previous = {
        ...this.$store.state,
        [this.sectionName]: {
          ...this.prevState
        }
      }
      this.$store.replaceState(previous)
      this.toggle()
    }
  }
}
