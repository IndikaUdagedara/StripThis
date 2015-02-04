#!/bin/bash

if [ $# -ne 1 ] 
then
	echo "usage: $0 version|clean" 
	exit 1;
fi

dir=stripthis	
key=stripthis.pem

verRe='([0-9]+\.)'
opt=$1

if [[ $opt =~ $verRe ]]
then
	echo "ok"
else
	echo "nok"
fi

#
#if [ "$opt" == "clean" ] 
#then
#	 
#fi
#
#google-chrome --pack-extension=$dir --pack-extension-key=$key > /dev/null
#echo "for Chrome ==> $dir.crx"





