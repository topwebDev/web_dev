# Company Website for LearnHop.com

## template source:

* https://www.authenticpixels.com/product/startkit-responsive-startup-business-template

## Technology Used

* middleman static site generator
* node.js + ruby

## Setup

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

## Preview

```
$ middleman server
```

Visit http://localhost:4567

## Deploy to production server

(Configured in config.rb file)

```
$ middleman rsync production
```
