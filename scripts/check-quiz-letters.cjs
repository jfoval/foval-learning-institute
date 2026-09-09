const fs=require("fs"),yaml=require("js-yaml"),path=require("path");
const L="ABCD";const files=[];
for(const s of fs.readdirSync("courses")) for(const c of fs.readdirSync("courses/"+s)) for(const d of ["lessons","assessments"]){const p=`courses/${s}/${c}/${d}`; if(fs.existsSync(p)) for(const f of fs.readdirSync(p)) if(f.endsWith(".md")) files.push(`${p}/${f}`);}
for(const f of files){
 const m=fs.readFileSync(f,"utf8").match(/^---\n([\s\S]*?)\n---/); if(!m)continue;
 let d; try{d=yaml.load(m[1])}catch(e){continue}
 const q=d.quiz||d.questions; if(!Array.isArray(q))continue;
 q.forEach((it,i)=>{
  const key=L[it.answer], ex=String(it.explain||"");
  const named=[...ex.matchAll(/\b(?:So|That is|That's|Hence|Therefore|so|that is)\s+([A-D])\b/g)].map(x=>x[1]);
  const opts=[...ex.matchAll(/Options? ([A-D])(?: and ([A-D]))?/g)].flatMap(x=>[x[1],x[2]]).filter(Boolean);
  const verdictWrong=named.length&&!named.includes(key);
  const keyAsDistractor=opts.includes(key);
  if(verdictWrong||keyAsDistractor){
    console.log(`\n${f} item ${i+1}  key=${key}${verdictWrong?"  VERDICT names "+[...new Set(named)]:""}${keyAsDistractor?"  KEY discussed as an option":""}`);
    console.log("   "+ex.replace(/\s+/g," ").slice(0,300));
  }
 });}
