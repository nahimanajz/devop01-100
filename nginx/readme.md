## nginx
It is an open source web server software used for reverse proxy, load balancing and caching.
## work flow ex: airbnbcom
if browser makes request to airbnb.com this is what happens
 browser makes request to airbnb nginx server-> nginx makes request to actual airbnb server 

## installation
 brew install nginx
 cd /usr/local/etc/nginx
## configuring reverse proxy
- we use nginx.conf file
## starting nginx
* open /usr/local/etc/nginx
* in terminal just type `nginx` and hit Enter key
* open localhost:8080 in browser, we expect to see `welcome to ngix` page
## serving starting contents
**Configurations in nginx.conf**
``` 
http {
    server {
        listen 8081;
        root /Users/janvier/Desktop/Coding/devop01-100/nginx/myWebsite;

    }
}
events {}
```
Finally in terminal type ` nginx -s reload ` 

**listen** Specifies port
**Directory** specifies where that *.html files are kept 

## mimetypes 

