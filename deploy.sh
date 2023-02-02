echo 'deploying...'
yarn build
cp .htaccess build/
sudo service apache2 restart
echo 'server is updated'
