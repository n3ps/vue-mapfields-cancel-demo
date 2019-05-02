import Vue from 'vue'
import Vuex from 'vuex'
import { updateField, getField } from 'vuex-map-fields'

const state = {
  businessDetails: {
    businessType: 'initial',
    businessName: 'initial',
    phone: 'initial',
    email: 'initial'
  },
  representatives: {
    firstName: 'initial',
    lastName: 'initial',
    jobTitle: 'initial'
  },
  editableFieldSet: [
    'businessDetails-phone',
    'representatives-firstName'
  ]
}

const store = {
  state,
  actions: {
    updateLead ({ state }, sectionName) {
      const data = JSON.stringify(state[sectionName])
      console.log(`Updating ${sectionName} with ${data}`) // eslint-disable-line
    }
  },
  mutations: {
    updateField
  },
  getters: {
    getField,
    editableFields (state) {
      return state.editableFieldSet
        .reduce((result, field) => {
          const [section, prop] = field.split('-')
          if (!result[section]) result[section] = []
          if (prop) result[section].push(prop)
          return result
        }, {})
    }
  }
}

Vue.use(Vuex)

export default new Vuex.Store(store)
