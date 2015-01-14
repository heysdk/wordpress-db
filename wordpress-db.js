/**
 * Created by zhs007 on 2015/1/14.
 */

var mysql = require('mysql');

// config is {prefix: 'wp_', orderby: 'post_date', order: 'desc', limit_begin: '0', limit_nums: '30'}
function getArticleList(dbconn, config, callback) {
    var prefix = 'wp_';
    var orderby = 'post_date';
    var order = 'desc';
    var limit_begin = 0;
    var limit_nums = 30;

    if (config) {
        if (config.hasOwnProperty('prefix')) {
            prefix = config.prefix;
        }

        if (config.hasOwnProperty('orderby')) {
            orderby = config.orderby;
        }

        if (config.hasOwnProperty('order')) {
            order = config.order;
        }

        if (config.hasOwnProperty('limit_begin')) {
            limit_begin = config.limit_begin;
        }

        if (config.hasOwnProperty('limit_nums')) {
            limit_nums = config.limit_nums;
        }
    }

    var sql = 'select * from ' + prefix + "posts where post_status = 'publish' and post_type = 'post' order by " + orderby + ' ' + order + ' limit ' + limit_begin + ',' + limit_nums;
    dbconn.query(sql, callback);
}

exports.getArticleList = getArticleList;