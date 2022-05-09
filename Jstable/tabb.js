let employee = [{ id: 233, name: "sandy", mobile: 99999999 },
    { id: 234, name: "nandhu", mobile: 88888888 },
    { id: 235, name: "dhulasi", mobile: 77777777 },
    { id: 236, name: "keethu", mobile: 66666666 },
    { id: 234, name: "nandhu", mobile: 88888888 },
    { id: 235, name: "dhulasi", mobile: 77777777 },
    { id: 236, name: "keethu", mobile: 66666666 },
    { id: 236, name: "keethu", mobile: 66666666 },
    { id: 234, name: "nandhu", mobile: 88888888 },
    { id: 235, name: "dhulasi", mobile: 77777777 },
    { id: 236, name: "keethu", mobile: 66666666 },
    { id: 236, name: "keethu", mobile: 66666666 },
    { id: 234, name: "nandhu", mobile: 88888888 },
    { id: 235, name: "dhulasi", mobile: 77777777 },
    { id: 236, name: "keethu", mobile: 66666666 },
    { id: 236, name: "keethu", mobile: 66666666 },
    { id: 234, name: "nandhu", mobile: 88888888 },
    { id: 235, name: "dhulasi", mobile: 77777777 },
    { id: 236, name: "keethu", mobile: 66666666 },
    { id: 236, name: "keethu", mobile: 66666666 },
    { id: 234, name: "nandhu", mobile: 88888888 },
    { id: 235, name: "dhulasi", mobile: 77777777 },
    { id: 236, name: "keethu", mobile: 66666666 },
    { id: 236, name: "keethu", mobile: 66666666 },
    { id: 234, name: "nandhu", mobile: 88888888 },
    { id: 235, name: "dhulasi", mobile: 77777777 },
    { id: 236, name: "keethu", mobile: 66666666 },
    { id: 236, name: "keethu", mobile: 66666666 },
    { id: 234, name: "nandhu", mobile: 88888888 },
    { id: 235, name: "dhulasi", mobile: 77777777 },
    { id: 236, name: "keethu", mobile: 66666666 },
    { id: 236, name: "keethu", mobile: 66666666 },
    { id: 234, name: "nandhu", mobile: 88888888 },
    { id: 235, name: "dhulasi", mobile: 77777777 },
    { id: 236, name: "keethu", mobile: 66666666 },
    { id: 236, name: "keethu", mobile: 66666666 },
    { id: 234, name: "nandhu", mobile: 88888888 },
    { id: 235, name: "dhulasi", mobile: 77777777 },
    { id: 236, name: "keethu", mobile: 66666666 },
]

function displaydata() {
    let find = document.getElementById("search").value.toLowecase()
    console.log("find")
    var x = employee.filter(function(item) {
        employee.name.includes(find)
    })
}

function display() {
    let row = ""
    for (emp of employee) {
        row = row + `<tr>
                        <td>${emp.id}</td>
                        <td>${emp.name}</td>
                        <td>${emp.mobile}</td>
                        </tr>`
    }
    document.getElementById("data").innerHTML = row
}