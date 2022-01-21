#!/bin/bash
if [ -z "$1" ]
then
	echo "No arguments supplied"
fi
i=0
for arg in "$@"
do
	if [ "$i" -ge 3 ]
	then
		exit 0
	fi
	echo $arg
	let "i+=1"
done
