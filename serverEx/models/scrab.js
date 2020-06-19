const pool = require('../modules/pool');
const table = 'scrab';

const scrabs = {
    getScrabContent : async() =>{
        const query = `SELECT scrab_image FROM ${table}`;
        try{
            const result = await pool.queryParam(query);
            return result;
        }catch(err){
            console.log('readScrabPost err' + err);
        }throw err;
    }
}

module.exports = scrabs;