#! /bin/bash

echo "clean ./pack/"
rm -rf pack/ || true
mkdir pack/

echo "creating zip"
zip -r pack/unpassword-chrome-publish.zip unpassword/ -x "*.pem" ".DS_Store"

echo "creating xpi"
cd unpassword && zip -r ../pack/unpassword-firefox-publish.xpi * -x "*.pem" "*.DS_Store" && cd ..

echo "creating crx"
/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --pack-extension=unpassword --pack-extension-key=data/key.pem
mv unpassword.crx pack/unpassword-chrome-signed.crx

echo "done"
ls ./pack/
