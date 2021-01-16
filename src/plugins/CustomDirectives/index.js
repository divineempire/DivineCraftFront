export default {
  install (app) {
    const directives = require.context('@/directives', true, /\.js$/)

    directives.keys().forEach(function (key) {
      const directive = directives(key).default

      if (!app.directive(directive.name)) {
        app.directive(directive.name, directive.data)
      }
    })
  }
}
