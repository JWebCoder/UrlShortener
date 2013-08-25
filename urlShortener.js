//	Author: João Moura
//	Author blog: http://JWebCoder.wordpress.com
//	GitHub: https://github.com/JWebCoder/UrlShortener
//
//	urlShortener v0.1
//
//	JavaScript plugin to create shortLinks using google API


var urlShortener = {
	settings:{
		apiKey : '',
		requestUrl : 'https://www.googleapis.com/urlshortener/v1/url?'
	},
	
	getLink : function(options){
		var requestUrl = this.settings.requestUrl;
		if(this.settings.apiKey.length > 1){
			requestUrl += "key="+this.settings.apiKey;
		}else{
			return undefined;
		}
		
		if(options.longUrl != undefined){
			return this.shortUrl(requestUrl,options.longUrl);
		}
		else if(options.shortUrl != undefined){
			requestUrl += "&shortUrl="+options.shortUrl;
			return this.urlInfo(requestUrl,options.projection);
		}
	},
	
	shortUrl : function(requestUrl, url){
		
		var data = {longUrl: url};
		var shortUrl =undefined;
		ajax = new XMLHttpRequest();
		ajax.open("POST",requestUrl,false);
		ajax.setRequestHeader("Content-type","application/json; charset=utf-8");
		ajax.send(JSON.stringify(data));
		shortUrl = JSON.parse(ajax.responseText);
		return shortUrl.id;
	},
	
	urlInfo : function(requestUrl,projection){
		if(projection != undefined){
			requestUrl += "&projection="+projection;
		}
		var urlInfo =undefined;
		ajax = new XMLHttpRequest();
		ajax.open("GET",requestUrl,false);
		ajax.setRequestHeader("Content-type","application/json; charset=utf-8");
		ajax.send();
		info = JSON.parse(ajax.responseText);
		if(projection == undefined){
			urlInfo=info.longUrl; //return long URL;
		}else{
			urlInfo = info; //return full info;
		}
		return urlInfo;
	}
}
