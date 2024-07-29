const navitha=new Map();
navitha.set('IN',"india")
navitha.set('USA',"united states of america")
navitha.set('FR',"france")
navitha.set('IN',"india")
console.log(navitha);

for (const [key,value] of navitha) {
    console.log(key,':',value);
}