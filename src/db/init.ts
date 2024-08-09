import task6 from './models/task6';
//import task6 from './models/task6';
//import patient from './models/task6';
async function init(){
    const isDev = true;

  
    await task6.sync({alter:isDev})
}


const dbInit =() => {
    init();
}

export default dbInit;