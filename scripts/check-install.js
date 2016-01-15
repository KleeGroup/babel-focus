var infos = require('../package.json');
var isInstall = require('./is-install');
var uninstalled = [];
for(var devDependency in infos.devDependencies){
  if(!isInstall(devDependency)){
    uninstalled.push(devDependency);
  }
}
if(uninstalled.length > 0){
  console.log('########################################################################')
  console.log('####################    BABEL FOCUS   ##################################');
  console.log('####      please run this command to install your dependencies     ####');
  console.log('npm i -D '+ uninstalled.join(' '));
  console.log('####################  END BABEL FOCUS ##################################');
  console.log('########################################################################');
}
