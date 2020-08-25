// from data.js
const tableData = data

// YOUR CODE HERE!

const $datetime = document.getElementById('datetime')
const $city = document.getElementById('city')
const $state = document.getElementById('state')
const $country = document.getElementById('country')
const $shape = document.getElementById('shape')

const $ufoTableBody = document.getElementById('ufo-table-body')

const $filterBtn = document.getElementById('filter-btn')

// Initialization page
initPage()

// Bind query event
$filterBtn.onclick = function() {

    // Get filter array
    const arr = query()

    // Processing array as string
    let res = ''
    arr.forEach(item => {
        res += `
        <tr>
            <td>${item.datetime}</td>
            <td>${item.city}</td>
            <td>${item.state}</td>
            <td>${item.country}</td>
            <td>${item.shape}</td>
            <td>${item.durationMinutes}</td>
            <td>${item.comments}</td>
        </tr>`
    })

    $ufoTableBody.innerHTML = res
}

// Initialize page function
function initPage() {

    // Initialization options
    $city.innerHTML = getOptions('city')
    $state.innerHTML = getOptions('state')
    $country.innerHTML = getOptions('country')
    $shape.innerHTML = getOptions('shape')
}

// Query event function
function query() {
    const res = []
    tableData.forEach(item => {
        if ((item.datetime.includes($datetime.value)) &&
            (item.city.includes($city.value)) &&
            (item.state.includes($state.value)) &&
            (item.country.includes($country.value)) &&
            (item.shape.includes($shape.value))) {
            res.push(item)
        }
    })

    return res
}

// Gets the drop-down option string
function getOptions(name) {

    // Get target array
    const arr = tableData.map(item => item[name])

    // Array de duplication
    const res = []
    arr.forEach(item => {
        if (!res.includes(item)) {
            res.push(item)
        }
    })

    // Sort array
    res.sort()

    // Processing array as string
    let str = '<option value="">all</option>'
    res.forEach(item => {
        str += `<option value="${item}">${item}</option>`
    })

    return str
}