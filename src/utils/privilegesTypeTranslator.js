import privilegesDictionary from '@/constants/privileges/privilegesDictionary'
import { TYPES } from '@/constants/privileges/privilegesTypes'

export default function privilegesTypeTranslator (type) {
  if (!TYPES.has(type)) {
    console.warn(`No such type - ${type} in privileges dictionary!`)

    return ''
  }

  return privilegesDictionary[type]
}
