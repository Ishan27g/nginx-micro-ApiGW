1.  Clone this repo and cd into it
2.  Generate ssl certificate in repo root                 -> openssl req -nodes -new -x509 -keyout server.key -out server.cert
3.  Follow Nginx/nginx.txt to install and setup nginx
4.  Copy generated ssl certs to                           -> /etc/nignx/ssl/ (or reconfigure path in nginx configuration file)
5.  Copy Nginx/nginx-configuration file. Restart nginx    -> /etc/nginx/sites-available/ , rename as 'default' ; 
6.  Once nginx is running, go to machines IP and verify   -> https://server-IP should show unsafe warning but can proceed to nginx welcome page
    (as server used self signed ssl)
7.  Install micro-services from scripts/ dir              -> ./installServer.sh
8.  Start node-express microservices                      -> ./startServer.sh
9.  Following endpoints should now be accessible          -> https://server-IP
                                                                    |-> /write/user
                                                                    |-> /sync/user
                                                                    |-> /register/user
                                                                   
                                                                   
