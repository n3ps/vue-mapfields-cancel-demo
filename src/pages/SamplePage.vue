<template>
  <div>

    <ptm-business-details />

    <ptm-representatives />

  </div>
</template>

<script>
import PtmBusinessDetails from './components/BusinessDetails'
import PtmRepresentatives from './components/Representatives'

export default {
  components: {
    PtmBusinessDetails,
    PtmRepresentatives
  }
}
</script>
