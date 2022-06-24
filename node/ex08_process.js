function temparam(param){
  return process.argv.indexOf(param) !== -1;
}

if(temparam('--producao')){
  console.log('Atenção total!');
} else {
  console.log('Tranquilo')
}
