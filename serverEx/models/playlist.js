const pool = require('../modules/pool');
const table = 'playlist';

const playlists = {
    getPlaylistContent : async() =>{
        const query = `SELECT folderName, count, date FROM ${table}`;
        try{
            const result = await pool.queryParam(query);
            return result;
        }catch(err){
            console.log('readPlaylistPost err' + err);
        }throw err;
    }
}

module.exports = playlists;