export default {
  props: {
    value: {
      type: [Number, String],
      require: true,
      default: ''
    },
    type: {
      type: String,
      require: false,
      default: 'text'
    },
    disabled: {
      type: Boolean,
      require: false,
      default: false
    }
  },
  emits: {
    'update:value': payload => !!payload
  },
  data () {
    return {
      focused: false
    }
  },
  mounted () {
    window.addEventListener('click', this.inputClickHandler)
  },
  unmounted () {
    window.removeEventListener('click', this.inputClickHandler)
  },
  methods: {
    disableInput () {
      this.focused = false
    },
    inputClickHandler (evt) {
      if (!this.focused && evt.target === this.$refs.input) {
        this.focused = true

        return
      }

      if (this.focused && evt.target !== this.$refs.input) {
        this.focused = false
        this.$refs.input.blur()
      }
    }
  }
}
