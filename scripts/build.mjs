import {cp,mkdir,readFile,readdir} from 'node:fs/promises';
import {spawnSync} from 'node:child_process';
import path from 'node:path';
async function check(dir){for(const e of await readdir(dir,{withFileTypes:true})){const p=path.join(dir,e.name);if(e.isDirectory())await check(p);else if(p.endsWith('.js')){const r=spawnSync(process.execPath,['--check',p],{encoding:'utf8'});if(r.status)throw new Error(r.stderr);}}}
await check('src');await mkdir('dist',{recursive:true});await cp('src','dist',{recursive:true});
console.log('Produktionsbuild erstellt: dist/ (vollständig lokal, ohne Abhängigkeiten)');
