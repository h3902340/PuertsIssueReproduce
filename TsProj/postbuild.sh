rm -r ../Assets/Scripts/Resources/*
cp -r output/* ../Assets/Scripts/Resources
find ../Assets/Scripts/Resources -name "*.js" -exec rename 's/\.js$/.js.txt/' '{}' +