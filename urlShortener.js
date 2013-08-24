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
		$.ajax({
			async:false,
			type: "POST",
			url: requestUrl,
			data: JSON.stringify(data),
			contentType:"application/json; charset=utf-8",
			dataType:"json",
		}).done(function( info ) {
			shortUrl=info.id;
		}).fail(function(jqXHR, textStatus, errorThrown){ 
		
		});
		return shortUrl;
	},
	
	urlInfo : function(requestUrl,projection){
		if(projection != undefined){
			requestUrl += "&projection="+projection;
		}
		var urlInfo =undefined;
		$.ajax({
			async:false,
			type: "GET",
			url: requestUrl,
			contentType:"application/json; charset=utf-8",
			dataType:"json",
		}).done(function( info ) {
			if(projection == undefined){
				urlInfo=info.longUrl; //return long URL;
			}else{
				urlInfo = info; //return full info;
			}
		}).fail(function(jqXHR, textStatus, errorThrown) { });
		return urlInfo;
	}
}
