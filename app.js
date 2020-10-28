// const argv = require('yargs').argv;

const argv = require('./config/yargs').argv;

const porHacer = require('./por-hacer/por-hacer');

console.log(argv);

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        let listado = porHacer.getListado();
        for (let tarea of listado) {
            console.log('======== Por Hacer ========\n'.green);
            console.log(tarea.descripcion + "\n");
            console.log("Estado: ", tarea.completado);
            console.log('===========================\n'.green);
        }
        break;
    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;

    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
        break;
    default:
        console.log('Comando incorrecto');
}