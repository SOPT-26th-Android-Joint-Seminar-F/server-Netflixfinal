const pool = require('../modules/pool');
const table = 'current';

const currents = {
    getCurrentContent : async() =>{
        const query = `SELECT current_image, current_season, current_contents_per FROM ${table}`;
        try{
            const result = await pool.queryParam(query);
            return result;
        }catch(err){
            console.log('readCurrentPost err' + err);
        }throw err;
    }
}

module.exports = currents;