A)First execute

"npm start"

it will execute
1)npm install
2)bower install
3)grunt (default task)

B)To compile development(build) and production(dist) frontend run

"grunt" (or "./node_modules/.bin/grunt" if grunt-cli is not set globally)


C)To develop and watch file changes and enable live realoding build folder

"grunt development" (or "./node_modules/.bin/grunt development" if grunt-cli is not set globally)
NB it will erase dist folder

D)To compile production execute
"grunt compile" (or "./node_modules/.bin/grunt compile" if grunt-cli is not set globally)
