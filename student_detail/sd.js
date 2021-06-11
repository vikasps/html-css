console.log(6+20);
cosnt form = document.getElementById("student data");
const tbody = document.getElementById("mymarks")
const submit = document.getElementById("submit")

submit.addEventListener('click',save data)
form.addEventListener("submit")

const name = document.getElementById("name")

const reg.no = document.getElementById("reg.no")

const email = document.getElementById("email")

function addSubject(e) {

    const subject = document.getElementById('subject').value
    const maxMark = document.getElementById('maxMark').value
    const markScored = document.getElementById('markScored').value

    const tr = document.createElement('tr')
    let slno = countOfRows() + 1

    const data = `<td>${slno}</td><td>${subject}</td><td id="mmark">${maxMark}</td><td id="smark">${markScored}</td><td>${markScored}</td>`
    tr.innerHTML = data
    tBody.appendChild(tr)

    // readmarks()

    e.preventDefault()
}
function countOfRows(){
    const rowCount = tBody.childElementCount
    return rowCount
}








