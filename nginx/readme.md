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
mimetypes means extensions like `css`, `html`, ....
1. first method 

 this is for configuring specific mimetipes but include helps in embeding file of mimes into this configuration
    types {
        text/css      css;
        text/html     html;
    }
    */
2. Second method
when you have a file you can include id just like this 
http {
    include mime.types 
    
}
```  
 mime.types is a file located in /nginx directory
```
## location context
at location context we specify route path which will be written in browser and direct path of file we need to server a

```
 location /PATH {
           root PATH_TO_PROJECT_DIRECTORY;
            try_files  FILE/ FILE_TO_APPEAR_WHEN_PREVIOUS_FILE_IS_ABSENT =404;
        }

```
## Redirects and Rewrites
- This is for redircting whenever user writes localhost:8081/number/2 
it will open file saved in location specified path below 

```
rewrite ^/number/(\w+) /count/$1;

        location ~* /count/[0-9] {
            root /Users/janvier/Desktop/Coding/devop01-100/nginx/myWebsite;
            try_files /index.html =404;
        }
``` 
## Load Balancer
- created backend server
- dockerized it
- started server on different local ports
```
docker run -p <LOCALPORT>:<IMAGE_PORT> IMAGE_NAME  
docker run -p 1111:7777 myserver  
docker run -p 2222:7777 myserver  
docker run -p 3333:7777 myserver  
docker run -p 4444:7777 myserver  
 
```
THEN in nginx.conf
http {
   
    include mime.types;
    // added this part to configure load balancer
    upstream backendserver {
        server 127.0.0.1:1111;
        server 127.0.0.1:2222;
        server 127.0.0.1:3333;
        server 127.0.0.1:4444;

    }
    server {
        listen 8081;
        root /Users/janvier/Desktop/Coding/devop01-100/nginx/myWebsite;

        rewrite ^/number/(\w+) /count/$1;
        location / {
            proxy_pass http://backendserver/;  // added this part to configure load balancer
        }

    }
}
```

## This is complete file of config.conf 

```
http {
   
    include mime.types;
    
    upstream backendserver {
        server 127.0.0.1:1111;
        server 127.0.0.1:2222;
        server 127.0.0.1:3333;
        server 127.0.0.1:4444;

    }
    server {
        listen 8081;
        root /Users/janvier/Desktop/Coding/devop01-100/nginx/myWebsite;

        rewrite ^/number/(\w+) /count/$1;
        location / {
            proxy_pass http://backendserver/; 
        }

        location ~* /count/[0-9] {
            root /Users/janvier/Desktop/Coding/devop01-100/nginx/myWebsite;
            try_files /index.html =404;
        }
        
        location /fruits {
            root /Users/janvier/Desktop/Coding/devop01-100/nginx/myWebsite;
        }
       
        location /carbs {
            alias /Users/janvier/Desktop/Coding/devop01-100/nginx/myWebsite/fruits;
        }
        location /vegetables {
            root /Users/janvier/Desktop/Coding/devop01-100/nginx/myWebsite;
            try_files /vegetables/veggies.html /index.html =404;
        }

        location /crops {
            return 307 /fruits;
        }

    }
}
events {}

```