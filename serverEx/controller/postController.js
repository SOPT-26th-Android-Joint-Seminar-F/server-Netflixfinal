const util = require('../modules/util');
const resMessage = require('../modules/responseMessage');
const statusCode = require('../modules/statusCode');
const pool = require('../modules/pool');
const contents = require('../models/content');
const currents = require('../models/current');
const scrabs = require('../models/scrab');
const playlists = require('../models/playlist');

module.exports = {
    readMainPost: async(req, res) =>{
        const data = await contents.getMainContent();
        return res.status(statusCode.OK).send(util.success(statusCode.OK, "메인 포스트 불러오기 성공", data));
    },

    readCurrentPost: async(req, res) =>{
        const data = await currents.getCurrentContent();
        return res.status(statusCode.OK).send(util.success(statusCode.OK, "시청중인 포스트 불러오기 성공", data));
    },

    readScrabPost: async(req, res) =>{
        const data = await scrabs.getScrabContent();
        return res.status(statusCode.OK).send(util.success(statusCode.OK, "내가 찜한 포스트 불러오기 성공", data));
    },

    readTastePost: async(req, res) =>{
        const data = await contents.getTasteContent();
        return res.status(statusCode.OK).send(util.success(statusCode.OK, "내 취향과 비슷한 포스트 불러오기 성공", data));
    },

    readPlaylistPost: async(req, res) =>{
        const data = await playlists.getPlaylistContent();
        return res.status(statusCode.OK).send(util.success(statusCode.OK, "플레이리스트 불러오기 성공", data));
    },
    readDetailPost: async(req, res) =>{
        const data = await contents.getDetailContent();
        return res.status(statusCode.OK).send(util.success(statusCode.OK, "상세정보 불러오기 성공", data));
    }
}