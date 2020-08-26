#!/bin/bash

PID=`ps -eaf | grep server_reg.js | grep -v grep | awk '{print $2}'`
if [[ "" !=  "$PID" ]]; then
  echo "killing server_reg - $PID"
  kill -9 $PID
fi
PID=`ps -eaf | grep server_write.js | grep -v grep | awk '{print $2}'`
if [[ "" !=  "$PID" ]]; then
  echo "killing server_write - $PID"
  kill -9 $PID
fi
PID=`ps -eaf | grep server_sync.js | grep -v grep | awk '{print $2}'`
if [[ "" !=  "$PID" ]]; then
  echo "killing server_sync - $PID"
  kill -9 $PID
fi
