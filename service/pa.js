const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

(async () => {
  let data = [];
  let housekeeperData;
  const total = 100;
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  let now = 0;
  let old = 0;
  console.log('列表页开始');
  for (let i = 0; i < total; i++) {
    if (i === 0) now = +new Date();
    if (i + 1 === total) old = +new Date();
    let url = `http://www.51baomu.cn/baomusousuo${i}-0-0-0-0-0-0-0-0-1-1-0-0-%E6%9C%88%E5%AB%82`;
    let result = await search(page, url, gotoList, i + 1);
    let re = [];
    for (let i = 0, len = result.length; i < len; i++) {
      let obj = {};
      obj.href = result[i];
      re.push(obj);
    }
    data = data.concat(re);
  }
  console.log(`时间： ${time(old, now)}s`);
  console.log(`总计： ${data.length}张`);
  save(data, 'list');
  console.log('列表页结束');


  console.log('----------------------------------------')
  console.log('详情页开始');
  housekeeperData = await housekeeper(page, data);
  save(housekeeperData, 'detail')
  console.log('详情页结束');
  console.log('结束');
  await browser.close();
})();

const listToString = function (data) {
  var str = '[';
  for (let i = 0, len = data.length; i < len; i++) {
    let end = ',';
    if (i+1 == len) end = ''

    str += `{"href": "${data[i].href}"}${end}`
  }
  str += ']'
  return str;
}
// 详情页数据格式化
const getInfo = function (doms) {
  return Array.prototype.map.call(base1, (doms, index) => {
    let obj = {};
    let first = item.firstElementChild;
     let last = item.lastElementChild.childElementCount > 0 ?
      item.lastElementChild.firstElementChild : item.lastElementChild;
    obj.name = first.innerText;
    obj.information = last.innerText;
    return obj;
  });
}

const search = async function (page, url, goto, i) {
    await page.goto(url);
    await console.log('跳转至' + i);
    await page.setViewport({
      width: 1980,
      height: 10000
    });
    let result = await goto(page);
    return result;
}
// 获取列表页href地址
const gotoList = async function (page) {
  console.log('数据收集中...');
  const srcs = await page.evaluate(() => {
    const links = document.querySelectorAll('#DataList1 td .newLieBiao a.list-ayi-img');
    return Array.prototype.map.call(links, item => item.href);
  });
  return srcs;
}
// 生成文件
const save = function (data, name) {
  fs.writeFile(`./json/${name}.json`, JSON.stringify(data), (err) => {
    if (err) throw err;
      console.log('文件保存成功');
  });
}
// 时间格式化
const time = function (old, now) {
  let time = Math.ceil((old - now) / 1000);
  let s = 0;
  let m = 0;
  let h = 0;
  s = Math.floor(time % 60);
  m = Math.floor((time / 60) % 60);
  h = Math.floor((time / 60 / 60) % 60);
  const str = (h < 10 ? '0' + h : h) + '时' + (m < 10 ? '0' + m : m) + '分' + (s < 10 ? '0' + s : s)

+ '秒';
  return str;
}
// 获取详情页单页信息
const gotoDetail = async function (page) {
  console.log('数据收集中...');
  const data = await page.evaluate(() => {
    const base1 = document.querySelectorAll('.baseHeight1 .base-info-item');
    const base2 = document.querySelectorAll('.baseHeight2 .base-info-item');

    let data1 = Array.prototype.map.call(base1, (item, index) => {
      let obj = {};
      let first = item.firstElementChild;
       let last = item.lastElementChild.childElementCount > 0 ?
        item.lastElementChild.firstElementChild : item.lastElementChild;
      obj.name = first.innerText;
      obj.information = last.innerText;
      return obj;
    });
    let data2 = Array.prototype.map.call(base2, (item, index) => {
      let obj = {};
      let first = item.firstElementChild;
      let last = item.lastElementChild.childElementCount > 0 ?
        item.lastElementChild.firstElementChild : item.lastElementChild;
      obj.name = first.innerText;
      obj.information = last.innerText;
      return obj;
    });
    let data3 = {
      name: '姓名',
      information: document.querySelectorAll('#lblBiaoti')[0].innerText.slice(0, 3)
    };
    return data1.concat(data2, data3);
  });
  return data;
}

// 获取保姆详情信息
const housekeeper = async function (page, data) {
  let now = 0;
  let old = 0;
  let curData = [];
  for (let i = 0, len = data.length; i < len; i++) {
    if (i === 0) now = +new Date();
    if (i + 1 === len) old = +new Date();
    let href = data[i].href;
    let result = await search(page, href, gotoDetail, i + 1);
    curData.push(result);
  }
  console.log(`时间： ${time(old, now)}s`);
  return curData;
}

