/*
 * @name:
 * @author: wuxd
 * @Date: 2021-04-22 09:25:01
 * @LastEditTime: 2021-04-23 16:55:14
 */
const https = require('https');
const querystring = require('querystring');

var nowPageUrl = "";

// 主入口函数
function getCount(path) {
    nowPageUrl = path;
    return new Promise((resolve, reject) => {
        getBaidu().then(res => {
            resolve(res);
        }).catch(err => {
            reject(err);
        });
    });
}

// 使用Node.js原生https模块请求
function getBaidu() {
    return new Promise((resolve, reject) => {
        const params = {
            access_token: "121.16a7899c6cc97bbfd69e28e9b84b921d.YDjYnXCk5qOtuebqTtd6WMzcUHAbTAlFdB2Yhox.e3FJug",
            site_id: "21828663",
            method: "overview/getCommonTrackRpt",
            start_date: "20210401",
            end_date: "20310401",
            metrics: "pv_count"
        };

        const url = `https://openapi.baidu.com/rest/2.0/tongji/report/getData?${querystring.stringify(params)}`;

        https.get(url, (res) => {
            let data = '';

            res.on('data', (chunk) => {
                data += chunk;
            });

            res.on('end', () => {
                try {
                    const result = JSON.parse(data);
                    const num = visiteNum(result.result);
                    resolve(num);
                } catch (e) {
                    reject(e);
                }
            });
        }).on('error', (err) => {
            console.log("error======", err);
            reject(err);
        });
    });
}

// 计算浏览量（保持不变）
function visiteNum(data) {
    var visite = 0;
    if (data && data.visitPage) {
        if (nowPageUrl === "home") {
            const items = data.visitPage.items || [];
            const arrs = items.filter(
                (v) => v[0].indexOf('https://' + process.env.VUEPRESS_HOST || '') > -1
            );
            visite = arrs.reduce((pre, cur) => {
                pre += Number(cur[1]);
                return pre;
            }, 0);
        } else {
            const items = data.visitPage.items || [];
            const pathurl = (process.env.VUEPRESS_HOST || '') + nowPageUrl;
            for (let i = 0; i < items.length; i++) {
                if (items[i][0] === pathurl) {
                    visite = items[i][1];
                }
            }
        }
    }
    return visite;
}

module.exports = { getCount };