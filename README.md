#Keystone-DustJs

This repository has been created as a fork to [keystone.js](http://keystonejs.com/) using the yeoman [keystone generator](https://github.com/JedWatson/generator-keystone).

The purpose to this fork is to show how to change the view engine to [dust.js](http://akdubya.github.io/dustjs/)

###Purpose

The purpose to this fork is to show how to change the view engine to [dust.js](http://akdubya.github.io/dustjs/)

A reason for swiching the view engine to dust is that it is a templating language that is easier to understange for modern html web programmers. Addtionally, dust.js is one of the top performing templating languages based on modern [benchmark testing.](http://jsperf.com/js-template-engines-performance/12) [*Additional Link](http://engineering.linkedin.com/frontend/client-side-templating-throwdown-mustache-handlebars-dustjs-and-more)


###Quick Start

To start you can simply clone to repository and start working. (*Note: Currently I removed the gallery option from keystone)

You can also just take a look at the dust files themselves in the templates folder. 

If you choose this route, you may want to check out the bit of code in the keystone.js file that allows you to use the dust.js view engine

In the top of the file

    var dust = require('dustjs-linkedin');
    var cons = require('consolidate');
  
And in the keystone.init

    'custom engine': cons.dust,
    'view engine': 'dust',
    
    
You will also have to add the dependencies needed in the package.json file

In devDependencies

    "dustjs-helpers": "~1.1.1",
    "dustjs-linkedin": "~2.0.3",
    "consolidate": "~0.10.0"
    
And after you have added that run the following command to install the denpendencies to the project

    npm install
    
