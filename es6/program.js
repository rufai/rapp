let variables = process.argv.slice(2)


// html`<p title="${title}"<p title="${you}!</p>`
// ['<p title="', '<p title="', '!</p>'], title, you
// console.log(variables)

// username == domenic
// comment == "<dl> is a fun tag"

// result ===  <b>domenic says</b>: "&lt;dl&gt; is a fun tag"

//`<b>username says</b>: &lt;dl&gt; is a fun tag`
let convert = {
    "'" : "&apos;",
    "\"" : "&quot;",
    "<" : "&lt;",
    ">" : "&gt;",
    "&" : "&amp;"
}
function escape (str) {
    return str
            .replace(/&/g, convert['&'])
            .replace(/'/g, convert["'"])
            .replace(/"/g, convert['"'])
            .replace(/</g, convert['<'])
            .replace(/>/g, convert['>'])
           
}
function html(arr,username, comment){
    return `<b>${escape(username)} says</b>: "${escape(comment)}"`
}

console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);