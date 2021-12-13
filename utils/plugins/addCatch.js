const nestedVisitor = {
  CallExpression(path) {
    // new Promise()里面有reject才加catch
    if (path.get('callee').isIdentifier({ name: 'reject' })) {
      this.callExpressionPath.replaceWith(this.callExpressionWithCatch)
    }
  }
}
export default function({ types }) {
  return {
    visitor: {
      NewExpression(path) {
        // 筛选出new Promise()
        if (!types.isIdentifier(path.node.callee, { name: 'Promise' })) {
          return
        }
        // property为then的MemberExpression path
        const memberExpressionWithThen = path.findParent(ppath => 
          ppath.isMemberExpression() && types.isIdentifier(ppath.node.property, { name: 'then' })
        )
        // property为catch的MemberExpression
        const memberExpressionWithCatch = path.findParent(ppath => 
          ppath.isMemberExpression() && types.isIdentifier(ppath.node.property, { name: 'catch' })
        )
        // 存在.then且不存在.catch
        if (memberExpressionWithThen && !memberExpressionWithCatch) {
          // 顶级CallExpression
          const callExpressionPath = path.findParent(ppath => {
            const isCallExpression = ppath.isCallExpression()
            const pCallExpression = ppath.findParent(pppath => pppath.isCallExpression())
            return isCallExpression && !pCallExpression
          })
          const member = types.memberExpression(callExpressionPath.node, types.identifier('catch'))
          const arrowFunc = types.arrowFunctionExpression(
            [types.identifier('error')],
            types.callExpression(
              types.memberExpression(types.identifier('console'), types.identifier('log')), 
              [types.identifier('error')]
            )
          )
          const callExpressionWithCatch = types.callExpression(member, [
            arrowFunc
          ])
          path.traverse(nestedVisitor, { callExpressionPath, callExpressionWithCatch })
          // callExpressionPath.replaceWith(callExpressionWithCatch)
        }
      }
    }
  }
}