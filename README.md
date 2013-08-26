UrlShortener
============
Short urls using google api



UrlShortener 0.1 javascript plugin
-----
In our days, sometimes it's easier to have a short link for your page, that you can share with your friends.

With this in mind, i've created a small plugin in JavaScript to handle this problem.

Plugin Functionalities
-----
* Create a short url
* Retrieve long url
* Get url analytics

This is how it works
=====

First of all, In order to use a Google service in your website, you need to get a Google API Key.

For that, follow this steps:
* Visit the [Google APIs console](http://code.google.com/apis/console/).
* Create a project.
* Activate the URL Shortener API.
* Click Keys in the left navigation. You can then copy and paste the key from this page.

Setting the key
-----

    urlShortener.settings.apiKey = "Your API Key";
    

Generate a short url
-----

    var shortLink = urlShortener.getLink({ "longUrl" : "http://jwebcoder.wordpress.com" });

Remake the long url
-----

    var longLink = urlShortener.getLink({ "shortUrl" : "http://goo.gl/hmL34J" });
    

Get Url Analytics
-----

    var analytics = JSON.stringify(urlShortener.getLink({ "shotUrl" : "http://goo.gl/hmL34J" , "projection" : "FULL" }));
    
Projection parameter values
-----

* FULL - returns the full info about the link
* ANALYTICS_TOP_STRINGS - country, browser specific data
* ANALYTICS_CLICKS - clicks statistics

If you have any doubt, you can find me in [facebook](https://www.facebook.com/JWebCoder) or [Twitter](https://twitter.com/JWebCoder)
