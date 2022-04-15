const https = require('https')
const fs = require('fs')

let application = fs.readFileSync('./application.yml', 'utf8');

if (process.env.PORT) {
    application = application.replace('DYNAMICPORT', process.env.PORT)
}

if (process.env.PASSWD) {
    application = application.replace('youshallnotpass', process.env.PASSW)
}

fs.writeFileSync('./application.yml', application);

const download = function (url, dest, cb) { 
    const file = fs.createWriteStream(dest);
    https.get(url, function (response) {
        response.pipe(file);
        console.log('Downloading Lavalink.jar')
        file.on('finish', function () {
            console.log('Downloaded Lavalink.jar')
            file.close(cb);
        });
    }).on('error', function (err) {
        fs.unlinkSync(dest);
        console.error(err)
    });
};

function startLavalink() {
    const spawn = require('child_process').spawn;
    const child = spawn('java', ['-jar', 'Lavalink.jar'])

    child.stdout.setEncoding("utf8")
    child.stderr.setEncoding("utf8")

    child.stdout.on('data', (data) => {
        console.log(data);
    });

    child.stderr.on('data', (data) => {
        console.error(data);
    });

    child.on('error', (error) => {
        console.error(error);
    });

    child.on('close', (code) => {
        console.log(`Lavalink exited with code ${code}`);
    });
    
    if (process.env.APP_NAME)
        keepAlive();
}

const cdn = 'https://ci.fredboat.com/repository/download/Lavalink_Build/.lastSuccessful/Lavalink.jar?guest=1&branch=refs/heads/dev'
download(cdn, './Lavalink.jar', startLavalink);

function keepAlive() {
    console.log('Keeping alive.');

    const fetch = require('node-fetch');

    let count = 0;
    setInterval(() =>
        fetch(`http://${process.env.APP_NAME}/`, { headers: { Authorization: process.env.PASSW } })
            .then(() => console.log(`[${++count}] Kept server alive.`))
            .catch(() => console.log(`Failed to keep server alive.`))
        , 20 * 60 * 1000);
}
