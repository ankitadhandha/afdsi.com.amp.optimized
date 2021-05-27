const express = require('express');
const router = express.Router();
const AmpOptimizer = require('@ampproject/toolbox-optimizer');

const ampOptimizer = AmpOptimizer.create();
const path = require('path');

router.get('/', (req, res) => {
//  const locals = {title: 'Express with AMP Optimizer'};
//  res.render('index', locals, async (err, html) => {
//    const optimizedHtml = await ampOptimizer.transformHtml(html);
//    res.send(optimizedHtml);

    //res.render('index', async (err, html) => {

    //console.log("dirname" + path.join(__dirname));

    //const optimizedHtml = await ampOptimizer.transformHtml(path.join(__dirname, '/index.html'));
    //res.sendFile(optimizedHtml);

    //res.sendFile(path.join(__dirname));

  //});
   //res.render(path.join(__dirname,'/index.html'));
   //res.sendFile('/e/aws/amp_optimizer/express/views/index.html');

    //res.render('index'); //, (err, html) => {
	//const optimizedHtml = await ampOptimizer.transformHtml(html);
	//console.log(html);
	//res.sendFile('index'); //(optimizedHtml);ṣ
   //});

    //this is ok res.render('index');

    res.render('index', async(err, html) => {
	const oHtml = await ampOptimizer.transformHtml(html);
	res.send(oHtml);
    });
});

module.exports = router;
