const Controller = require('./Controller');
const args = process.argv.slice(2)
const command = args[0]

switch (command) {
    default:
        console.log('input true command');
        break;
    case 'show':
        Controller.show()
        break;
    case 'create':
        Controller.create(args[1],args[2],args[3])
        break;
    case 'delete':
        Controller.delete(args[1])
        break;
    case 'update':
        Controller.update(args[1],args[2],args[3],args[4])
        break;
}