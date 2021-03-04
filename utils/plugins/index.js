module.exports = function(babel) {
  return {
    // 访问者
    visitor: {
      // 把'import a from "frompath"'转化为'import a from "topath"'
      ImportDeclaration(path, state) {
        const { from, to } = state.opts
        if (path.node.source.value !== from) {
          return
        }
        path.node.source = babel.types.StringLiteral(to)
      },
      // 把'require("frompath")'转化为'require("topath")'
      CallExpression(path, state) {
        const { from, to } = state.opts
        if (path.node.callee.name === 'require' && path.node.arguments[0].value === from) {
          path.node.arguments[0] = babel.types.StringLiteral(to)
        }
      }
    }
  }
}