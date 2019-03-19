const mongoose = require('mongoose');

const config = require('./config');

const Content = require('./models/Content');


mongoose.set('useCreateIndex', true);
mongoose.connect(config.db.url + '/' + config.db.name, {useNewUrlParser: true });

const db = mongoose.connection;

db.once('open', async () => {

    try{
        await db.dropCollection('contents');

    }
    catch (e) {
        console.log('Collection Content where not present, skipping drop...');
    }

    console.log('All collections is dropped');

    await Content.create({
        title: 'About page',
        content: 'This page about us!',
        page:'About'
    },{
        title: 'FAQ',
        content: 'Frequently asked questions',
        page:'Faq'
    },{
        title: 'Contact page',
        content: 'This is Contact page',
        page:'Contact'
    },{
        title: 'Home page',
        content: 'This is main page of our site!',
        page:'Home'
    });
    console.log('Content created');

    db.close();


});