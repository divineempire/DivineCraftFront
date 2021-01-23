import { toRefs } from 'vue'
import depthCoefficient from '@/constants/TermsOfUse/DepthCoefficient'

export default function (props) {
  const { index, parentIndex } = toRefs(props)
  const isParagraph = item => typeof item !== 'string'
  const realIndex = (parentIndex.value === -1 ? index.value : parentIndex.value)

  return {
    realIndex,
    depthCoefficient,
    isParagraph
  }
}
