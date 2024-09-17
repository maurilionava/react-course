const TemplateExpressions = () => {
    const name = 'Maurilio'
    const objectLiteral = {
        val01 : 'Hello',
        val02 : 'World'
    }
    return (
        <div>
            <h1>Hello { name }</h1>
            <h2>This is a {objectLiteral.val01} {objectLiteral.val02} message.</h2>
            <h3>{ 1 + 1 }</h3>
            <h4>{console.log}</h4>
        </div>
    )
}

export default TemplateExpressions