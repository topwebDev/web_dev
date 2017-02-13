# Company Website for LearnHop.com

## Installation

### template source:

* https://www.authenticpixels.com/product/startkit-responsive-startup-business-template

### Technology Used

* middleman static site generator
* node.js + ruby

### Setup

Pre-requisite:

* Install bower (npm -g bower)
* Install RVM and Bundler

Check out code:

```
git clone ...
```

Install dependencies

```
bower install && bundle install
```

### Preview

```
$ middleman server
```

Visit http://localhost:4567

### Deploy to staging server

Staging: http://dev.learnhop.com

```
$ curl -X POST -d '{}' https://api.netlify.com/build_hooks/58a12d0bc4d9cc1b57b8b723
```

### Deploy to production server

(Configured in config.rb file)

```
$ middleman rsync production
```

## Content Editing Tips

* See all data/ files for quick addition of repetitive text.
* Blog Image Size: 800x350
* Feature Image Size: 540x309 (1996x1144)
