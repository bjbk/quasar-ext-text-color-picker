import { QBadge } from 'quasar'

export default {
  name: 'QTextColorPicker',

  render (h) {
    return h(QBadge, {
      staticClass: 'QTextColorPicker',
      props: {
        label: 'QTextColorPicker'
      }
    })
  }
}
