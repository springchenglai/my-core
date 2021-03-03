export default function(babel) {
  return {
    pre(state) {
      console.log('babel调用前')
    },
    post(state) {
      console.log('babel调用后')
    },
    // 访问者
    visitor: {
      BinaryExpression(path, state) {
        console.log('state.opts:', state.opts)
        if (path.node.operator !== '==') {
          return
        }
        path.node.operator = '==='
      }
    }
  }
}