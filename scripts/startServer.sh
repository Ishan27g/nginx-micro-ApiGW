#!/bin/sh
#stop any running services
./stopServer.sh
sleep 1
#start services
cd ../register 
node server_reg.js &
cd ../write
node server_write.js &
cd ../sync
node server_sync.js &
