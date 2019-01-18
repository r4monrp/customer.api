var request = require("request");

function initialize() {
    var options = {
        url: 'https://api.github.com/users/narenaryan',
        headers: {
            'User-Agent': 'request'
        }
    };
    return new Promise((resolve, reject) => {
        request.get(options, (err, resp, body) => {
            if (err) {
                reject(err);
            } else {
                resolve(JSON.parse(body));
            }
        })
    })
}

async function main2() {
    let obj1 = await initialize();
    let obj2 = await initialize();
    let obj3 = await initialize();
    let obj4 = await initialize();
}

function main() {
    initialize()
    .then((result) => {
        console.log(result);
        initialize()
        .then((result) => {
            console.log(result);
            initialize()
            .then((result) => {
                console.log(result)
            }, function(err) {
                console.log(err);
            });
        }, function(err) {
            console.log(err);
        });
    }, function(err) {
        console.log(err);
    });
}

main2();