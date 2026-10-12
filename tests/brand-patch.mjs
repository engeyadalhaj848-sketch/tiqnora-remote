import {mkdtempSync,mkdirSync,writeFileSync,readFileSync,rmSync} from 'node:fs';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
import {spawnSync} from 'node:child_process';
import {strict as assert} from 'node:assert';
const r=mkdtempSync(join(tmpdir(),'tiqnora-brand-'));
try{
  const loc=join(r,'flutter/windows/runner');mkdirSync(loc,{recursive:true});
  const path=join(loc,'Runner.rc');
  const origin='VALUE "CompanyName", "Purslane Tech Pte. Ltd."\nVALUE "FileDescription", "RustDesk Remote Desktop"\nVALUE "LegalCopyright", "Copyright © 2026 Purslane Tech Pte. Ltd. All rights reserved."\nVALUE "ProductName", "RustDesk"\n';
  writeFileSync(path,origin);
  let x=spawnSync(process.execPath,['scripts/apply-client-branding.mjs',r],{encoding:'utf8'});
  assert.equal(x.status,0,x.stderr);
  const next=readFileSync(path,'utf8');
  assert.match(next,/Tiqnora Remote/);
  assert.match(next,/LegalCopyright.*Purslane Tech/);
  x=spawnSync(process.execPath,['scripts/apply-client-branding.mjs',r],{encoding:'utf8'});
  assert.notEqual(x.status,0,'Reapplying the patch must fail');
  assert.equal(readFileSync(path,'utf8'),next,'Failed patch must not rewrite');
  console.log('PASS: guarded branding, attribution, idempotence protection');
} finally{rmSync(r,{recursive:true,force:true});}
