function calculate(event) {
    const pi = 3.1415926
    event.preventDefault()
    const form = document.forms["MyForm"]
    const fields = form.getElementsByTagName("input")
    const radius = fields[0].value
    const volume = 4 * pi * radius * radius * radius / 3
    fields[1].value = volume
    console.log(fields)
}