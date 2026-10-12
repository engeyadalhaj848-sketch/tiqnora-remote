#!/usr/bin/env node
// Pre-release, guarded metadata-only patch for verified upstream RustDesk 1.4.9.
// No binary repackaging, no removal of attribution, no final application release.
import {readFileSync,writeFileSync,existsSync,copyFileSync} from 'node:fs';
import {resolve,join,extname} from 'node:path';
function fail(reason){ console.error('Branding aborted: '+reason); process.exit(1); }
const root=process.argv[2]&&resolve(process.argv[2]);
const iconFlag=process.argv.indexOf('--icon');
const iconFile=iconFlag>=0?process.argv[iconFlag+1]:null;
if(!root||!existsSync(root))fail('Expected existing RustDesk source folder');
const lock=JSON.parse(readFileSync(new URL('../upstream.lock.json',import.meta.url),'utf8'));
const rcPath=join(root,'flutter/windows/runner/Runner.rc');
if(!existsSync(rcPath))fail('Missing upstream Windows Runner.rc');
const src=readFileSync(rcPath,'utf8');
if(!src.includes('VALUE "ProductName", "RustDesk"')||!src.includes('VALUE "FileDescription", "RustDesk Remote Desktop"'))fail('Unknown or already patched upstream resource');
if(!src.includes('VALUE "LegalCopyright", "Copyright © 2026 Purslane Tech Pte. Ltd. All rights reserved."'))fail('Upstream copyright differs from verified release');
let next=src.replace('VALUE "ProductName", "RustDesk"','VALUE "ProductName", "Tiqnora Remote"')
  .replace('VALUE "FileDescription", "RustDesk Remote Desktop"','VALUE "FileDescription", "Tiqnora Remote — built on RustDesk"')
  .replace('VALUE "CompanyName", "Purslane Tech Pte. Ltd."','VALUE "CompanyName", "Tiqnora AI"');
if(iconFile){
  if(extname(iconFile).toLowerCase()!=='.ico'||!existsSync(iconFile))fail('Expected an existing Tiqnora-owned .ico');
  const buf=readFileSync(iconFile);
  if(buf.length<512||buf.readUInt16LE(0)!==0||buf.readUInt16LE(2)!==1||buf.readUInt16LE(4)<1)fail('Invalid Windows ICO');
  copyFileSync(iconFile,join(root,'flutter/windows/runner/resources/app_icon.ico'));
}else{
  console.warn('NO OWNED ICON: upstream icon remains. NOT DISTRIBUTABLE AS TIQNORA REMOTE');
}
writeFileSync(rcPath,next);
console.log('PASS: source Windows metadata prepared against RustDesk '+lock.version+'; original copyright retained.');
console.warn('Only metadata changed. App UI, executable identity, services, installer, security and licensing require review.');
