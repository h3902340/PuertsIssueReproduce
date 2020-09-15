rm -r ../Assets/Scripts/JavaScripts/*
cp -r output/* ../Assets/Scripts/JavaScripts
find ../Assets/Scripts/JavaScripts -name "*.js" -exec rename 's/\.js$/.js.txt/' '{}' +