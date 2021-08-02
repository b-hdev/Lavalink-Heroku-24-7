
const fs = require('fs')
const http = require('http')
const fetch = require('node-fetch')
let application = fs.readFileSync('./application.yml', 'utf8')

if (process.env.PORT) {
    application = application.replace('DYNAMICPORT', process.env.PORT)
}

if (process.env.PASS) {
    application = application.replace('youshallnotpass', process.env.PASS)
}
setInterval(() => fetch('process.env.URL'), 5 * 60 * 1000);

fs.writeFileSync('./application.yml', application)

const download = function (url, dest, cb) { 
    const file = fs.createWriteStream(dest);
    http.get(url, function (response) {
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

    child.stdout.setEncoding('utf8')
    child.stderr.setEncoding('utf8')

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
        console.log(`Lavalink encerrado devido ao erro: ${code}`);
    });
}

const cdn = 'https://cdn.glitch.com/96fd362d-e92b-4d84-b58e-da33e2956d72%2FLavalink.jar?v=1627883381993'
download(cdn, './96fd362d-e92b-4d84-b58e-da33e2956d72_Lavalink.jar' ,startLavalink)
