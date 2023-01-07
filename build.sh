yarn build
rm -rf docs.tar.gz
cd build
tar -cvzf docs.tar.gz *
mv docs.tar.gz ..
