fetch('yellow.json')
        .then(response => response.json())
        .then(data => {
            console.log(data[0], data[1])
        })

console.log("tite");