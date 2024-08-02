import Customer from '../db/models/task4';

async function init(){
    const isDev = true;

  
    await Customer.sync({alter:isDev})
    
}
const dbInit =() => {
    init();
}

export default dbInit;