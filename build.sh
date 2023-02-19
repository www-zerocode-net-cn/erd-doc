rm -rf docs.tar.gz
yarn build
cd build
tar -cvzf docs.tar.gz *
mv docs.tar.gz ..
