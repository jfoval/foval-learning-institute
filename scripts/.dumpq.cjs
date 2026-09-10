const fs=require("fs"),yaml=require("js-yaml");const L="ABCD";
for(const f of process.argv.slice(2)){
const d=yaml.load(fs.readFileSync(f,"utf8").match(/^---\n([\s\S]*?)\n---/)[1]);
const q=d.quiz||d.questions;
console.log("\n######## "+f);
q.forEach((it,i)=>{
 console.log(`\n--- item ${i+1}  key=${L[it.answer]} ---`);
 console.log("Q: "+String(it.q).replace(/\s+/g," "));
 it.options.forEach((o,j)=>console.log(`  ${L[j]} (${String(o).length}) ${o}`));
});}
