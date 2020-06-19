const pool = require('../modules/pool');
const table = 'content';

const contents = {
    getMainContent : async() =>{
        const query = `SELECT poster_image, keyword1, keyword2, keyword3, keyword4 FROM ${table}`;
        try{
            const result = await pool.queryParam(query);
            return result;
        }catch(err){
            console.log('readMainPost err' + err);
        }throw err;
    },

    getTasteContent : async() =>{
        const query = `SELECT poster_image FROM ${table}`;
        try{
            const result = await pool.queryParam(query);
            return result;
        }catch(err){
            console.log('readTastePost err' + err);
        }throw err;
    },
    getDetailContent : async() =>{
        const query = `SELECT poster_image,keyword1, keyword2, keyword3, keyword4, season, per FROM ${table}`;
        try{
            const result = await pool.queryParam(query);
            return result;
        }catch(err){
            console.log('readDetailPost err' + err);
        }throw err;
    }
}

module.exports = contents;