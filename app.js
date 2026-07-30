/* ===== Imagix — app.js (vanilla, no deps, pure client-side) ===== */
(function(){
'use strict';

/* ---------- i18n ---------- */
const DICT = {
  en:{
    tagline:"Free online image tools",
    "lang.btn":"中文",
    "theme.btn":"Dark",
    "hero.title":"Imagix — Free Online Image Tools",
    "hero.sub":"Resize, compress, convert, crop, rotate, watermark and filter images. 100% in your browser — no upload, no sign-up.",
    "hero.pill":"Free · No sign-up · <b>Private</b> (processed on your device)",
    "nav.resize":"Resize","nav.compress":"Compress","nav.convert":"Convert","nav.crop":"Crop",
    "nav.rotate":"Rotate","nav.watermark":"Watermark","nav.base64":"Base64","nav.filter":"Filter",
    "affil.title":"Recommended gear & tools",
    "disclose":"As an Amazon Associate, Imagix earns from qualifying purchases.",
    "privacy.link":"Privacy Policy",
    "footer.note":"Imagix is a free toolkit. Images are processed locally in your browser and are never uploaded to a server.",
    "out.title":"Result",
    "drop.hint":"Click to choose an image, or drag & drop here",
    "info.nofile":"Upload an image to get started.",
    "lbl.width":"Width (px)","lbl.height":"Height (px)","lbl.lock":"Lock aspect ratio",
    "lbl.scale":"Scale (%)","lbl.format":"Format","lbl.quality":"Quality","lbl.text":"Text",
    "lbl.position":"Position","lbl.size":"Font size (px)","lbl.color":"Color","lbl.opacity":"Opacity",
    "lbl.brightness":"Brightness","lbl.contrast":"Contrast","lbl.saturate":"Saturation",
    "lbl.grayscale":"Grayscale","lbl.sepia":"Sepia","lbl.invert":"Invert","lbl.blur":"Blur (px)",
    "opt.keep":"Keep original","opt.png":"PNG","opt.jpeg":"JPEG","opt.webp":"WebP",
    "pos.tl":"Top-left","pos.tc":"Top-center","pos.tr":"Top-right","pos.ml":"Middle-left",
    "pos.mc":"Center","pos.mr":"Middle-right","pos.bl":"Bottom-left","pos.bc":"Bottom-center","pos.br":"Bottom-right",
    "btn.apply":"Apply","btn.download":"Download","btn.reset":"Reset","btn.copy":"Copy","btn.decode":"Preview","btn.open":"Open tool",
    "t.resize":"Resize Image","t.resize.lead":"Scale your image to exact pixel dimensions or a percentage, with aspect-ratio lock.",
    "t.compress":"Compress Image","t.compress.lead":"Shrink file size while keeping quality. See before/after size and savings.",
    "t.convert":"Convert Image","t.convert.lead":"Switch between PNG, JPEG and WebP in one click.",
    "t.crop":"Crop Image","t.crop.lead":"Draw a selection on your image and cut out exactly what you need.",
    "t.rotate":"Rotate & Flip","t.rotate.lead":"Rotate 90° or flip horizontally / vertically. Undo any time with Reset.",
    "t.watermark":"Add Watermark","t.watermark.lead":"Stamp text onto your image with adjustable position, size, color and opacity.",
    "t.base64":"Image to Base64","t.base64.lead":"Turn an image into a Data URL, or decode a Data URL back into an image.",
    "t.filter":"Filters & Effects","t.filter.lead":"Apply brightness, contrast, saturation, grayscale, sepia, invert and blur live.",
    "info.resize":"New size <b>{w} × {h}</b> px (from {ow} × {oh}).",
    "info.compress":"Original <b>{o}</b> → <b>{n}</b> · saved <b class='ok'>{s}</b>",
    "info.convert":"Converted to <b>{f}</b> · <b>{n}</b>",
    "info.crop":"Cropped <b>{w} × {h}</b> px from source.",
    "info.rotate":"Dimensions <b>{w} × {h}</b> px.",
    "info.watermark":"Watermark applied · output <b>{w} × {h}</b> px.",
    "info.filter":"Effect applied · <b>{w} × {h}</b> px.",
    "info.base64":"Data URL ready · {len} characters.",
    "info.base64dec":"Preview loaded."
  },
  zh:{
    tagline:"免费在线图片工具",
    "lang.btn":"EN",
    "theme.btn":"深色",
    "hero.title":"Imagix — 免费在线图片工具",
    "hero.sub":"缩放、压缩、转换、裁剪、旋转、加水印、加滤镜。100% 在浏览器本地完成——无需上传，无需注册。",
    "hero.pill":"免费 · 免注册 · <b>隐私</b>（在本机处理，不上传）",
    "nav.resize":"缩放","nav.compress":"压缩","nav.convert":"转换","nav.crop":"裁剪",
    "nav.rotate":"旋转","nav.watermark":"水印","nav.base64":"Base64","nav.filter":"滤镜",
    "affil.title":"推荐器材与工具",
    "disclose":"作为 Amazon Associate，Imagix 可从符合条件的购买中获得收益。",
    "privacy.link":"隐私政策",
    "footer.note":"Imagix 是免费工具箱。图片在你的浏览器本地处理，绝不上传到服务器。",
    "out.title":"结果",
    "drop.hint":"点击选择图片，或将图片拖拽到此处",
    "info.nofile":"请先上传一张图片。",
    "lbl.width":"宽度（像素）","lbl.height":"高度（像素）","lbl.lock":"锁定宽高比",
    "lbl.scale":"缩放（%）","lbl.format":"格式","lbl.quality":"质量","lbl.text":"文字",
    "lbl.position":"位置","lbl.size":"字号（像素）","lbl.color":"颜色","lbl.opacity":"不透明度",
    "lbl.brightness":"亮度","lbl.contrast":"对比度","lbl.saturate":"饱和度",
    "lbl.grayscale":"灰度","lbl.sepia":"褐色","lbl.invert":"反色","lbl.blur":"模糊（像素）",
    "opt.keep":"保持原格式","opt.png":"PNG","opt.jpeg":"JPEG","opt.webp":"WebP",
    "pos.tl":"左上","pos.tc":"上中","pos.tr":"右上","pos.ml":"左中","pos.mc":"居中",
    "pos.mr":"右中","pos.bl":"左下","pos.bc":"下中","pos.br":"右下",
    "btn.apply":"应用","btn.download":"下载","btn.reset":"重置","btn.copy":"复制","btn.decode":"预览","btn.open":"打开工具",
    "t.resize":"图片缩放","t.resize.lead":"按精确像素或百分比缩放，支持锁定宽高比。",
    "t.compress":"图片压缩","t.compress.lead":"在保持画质的同时减小文件体积，显示压缩前后大小与节省量。",
    "t.convert":"图片格式转换","t.convert.lead":"一键在 PNG、JPEG、WebP 之间互转。",
    "t.crop":"图片裁剪","t.crop.lead":"在图片上框选区域，精确裁出你需要的部分。",
    "t.rotate":"旋转与翻转","t.rotate.lead":"旋转 90°，或水平/垂直翻转，随时可重置还原。",
    "t.watermark":"添加水印","t.watermark.lead":"在图片上叠加文字水印，位置、大小、颜色、透明度可调。",
    "t.base64":"图片转 Base64","t.base64.lead":"把图片转为 Data URL，或将 Data URL 还原为图片。",
    "t.filter":"滤镜与特效","t.filter.lead":"实时调整亮度、对比度、饱和度、灰度、褐色、反色与模糊。",
    "info.resize":"新尺寸 <b>{w} × {h}</b> 像素（原 {ow} × {oh}）。",
    "info.compress":"原图 <b>{o}</b> → <b>{n}</b> · 节省 <b class='ok'>{s}</b>",
    "info.convert":"已转为 <b>{f}</b> · <b>{n}</b>",
    "info.crop":"已从原图裁出 <b>{w} × {h}</b> 像素。",
    "info.rotate":"尺寸 <b>{w} × {h}</b> 像素。",
    "info.watermark":"水印已添加 · 输出 <b>{w} × {h}</b> 像素。",
    "info.filter":"特效已应用 · <b>{w} × {h}</b> 像素。",
    "info.base64":"Data URL 已生成 · {len} 个字符。",
    "info.base64dec":"预览已加载。"
  }
};
let lang = localStorage.getItem('imagix-lang') || 'en';
let theme = localStorage.getItem('imagix-theme') || 'light';

function t(k){ return (DICT[lang] && DICT[lang][k]!=null) ? DICT[lang][k] : (DICT.en[k]!=null?DICT.en[k]:k); }

function applyI18n(){
  document.documentElement.lang = (lang==='zh') ? 'zh-CN' : 'en';
  document.querySelectorAll('[data-i18n]').forEach(el=>{ el.textContent = t(el.getAttribute('data-i18n')); });
  document.querySelectorAll('[data-i18n-ph]').forEach(el=>{ el.placeholder = t(el.getAttribute('data-i18n-ph')); });
  document.querySelectorAll('[data-i18n-title]').forEach(el=>{ el.title = t(el.getAttribute('data-i18n-title')); });
  const lb = document.querySelector('[data-i18n="lang.btn"]'); if(lb) lb.textContent = t('lang.btn');
  const tb = document.querySelector('[data-i18n="theme.btn"]'); if(tb){ tb.textContent = (theme==='dark') ? (lang==='zh'?'浅色':'Light') : t('theme.btn'); }
  renderActiveInfo();
}
function renderActiveInfo(){
  const id = document.querySelector('.panel.active')?.id?.replace('tool-','');
  if(id && infoRenderers[id]) infoRenderers[id]();
}

/* ---------- helpers ---------- */
const $ = (s,r=document)=>r.querySelector(s);
const $$ = (s,r=document)=>[...r.querySelectorAll(s)];
function fmtBytes(n){
  if(n==null||isNaN(n)) return '—';
  if(n===0) return '0 B';
  const u=['B','KB','MB','GB']; let i=0; let x=n;
  while(x>=1024 && i<u.length-1){ x/=1024; i++; }
  return (i===0? x : x.toFixed(2))+' '+u[i];
}
function loadBitmap(file){
  if('createImageBitmap' in window){
    return createImageBitmap(file,{imageOrientation:'from-image'}).catch(()=>createImageBitmap(file));
  }
  return new Promise((res,rej)=>{ const img=new Image(); img.onload=()=>res(img); img.onerror=rej; img.src=URL.createObjectURL(file); });
}
function makeCanvas(w,h){ const c=document.createElement('canvas'); c.width=w; c.height=h; return c; }
function downloadCanvas(canvas, name, type, quality){
  return new Promise(res=>{
    canvas.toBlob(blob=>{
      if(!blob){ res(null); return; }
      const url=URL.createObjectURL(blob);
      const a=document.createElement('a'); a.href=url; a.download=name; document.body.appendChild(a); a.click(); a.remove();
      setTimeout(()=>URL.revokeObjectURL(url),3000);
      res(blob);
    }, type, quality);
  });
}
function fmtFromSel(v){ return v==='jpeg'?'image/jpeg':(v==='webp'?'image/webp':'image/png'); }
function extFromSel(v){ return v; }

const state = {};
const infoRenderers = {};

function bindFile(toolId, onLoad){
  state[toolId] = state[toolId] || {};
  const inp = $('#'+toolId+'-file');
  const drop = $('#'+toolId+'-drop');
  const setFile = (f)=>{
    if(!f || !f.type.startsWith('image/')) return;
    if(state[toolId].url) URL.revokeObjectURL(state[toolId].url);
    loadBitmap(f).then(bm=>{
      if(state[toolId].bitmap && state[toolId].bitmap.close) try{state[toolId].bitmap.close();}catch(e){}
      state[toolId].bitmap = bm;
      state[toolId].orig = bm;
      state[toolId].file = f;
      state[toolId].type = f.type || 'image/png';
      state[toolId].size = f.size || 0;
      state[toolId].url = URL.createObjectURL(f);
      state[toolId].ready = true;
      onLoad(bm,f);
    }).catch(err=>{ console.error('loadBitmap failed', err); });
  };
  if(inp){
    inp.addEventListener('change', e=>setFile(e.target.files[0]));
    ['dragover','dragenter'].forEach(ev=>inp.addEventListener(ev,e=>{e.preventDefault(); if(drop) drop.classList.add('drag');}));
    ['dragleave','dragleave','drop'].forEach(ev=>inp.addEventListener(ev,e=>{e.preventDefault(); if(drop) drop.classList.remove('drag');}));
    inp.addEventListener('drop', e=>setFile(e.dataTransfer.files[0]));
  }
}

/* ============================================================
   TOOL 1 — RESIZE
============================================================ */
function initResize(){
  const rt = {};
  infoRenderers.resize = ()=>{ $('#resize-info').innerHTML = t('info.nofile'); };
  bindFile('resize', bm=>{
    rt.ow=bm.width; rt.oh=bm.height;
    $('#resize-w').value=bm.width; $('#resize-h').value=bm.height; $('#resize-scale').value=100;
    draw();
  });
  function draw(){
    const w=parseInt($('#resize-w').value)||0, h=parseInt($('#resize-h').value)||0;
    const bm=state.resize.bitmap;
    if(!bm||!w||!h) return;
    const c=$('#resize-canvas'); c.width=w; c.height=h;
    c.getContext('2d').drawImage(bm,0,0,w,h);
    $('#resize-dl').disabled=false;
    infoRenderers.resize = ()=>{ $('#resize-info').innerHTML = t('info.resize').replace('{w}',w).replace('{h}',h).replace('{ow}',rt.ow).replace('{oh}',rt.oh); };
    renderActiveInfo();
  }
  $('#resize-w').addEventListener('input', ()=>{ if($('#resize-lock').checked && rt.ow){ const w=parseInt($('#resize-w').value)||0; $('#resize-h').value=Math.max(1,Math.round(w*rt.oh/rt.ow)); $('#resize-scale').value=Math.round(w/rt.ow*100); } draw(); });
  $('#resize-h').addEventListener('input', ()=>{ if($('#resize-lock').checked && rt.ow){ const h=parseInt($('#resize-h').value)||0; $('#resize-w').value=Math.max(1,Math.round(h*rt.ow/rt.oh)); $('#resize-scale').value=Math.round(h/rt.oh*100); } draw(); });
  $('#resize-scale').addEventListener('input', ()=>{ const s=parseInt($('#resize-scale').value)||100; $('#resize-w').value=Math.max(1,Math.round(rt.ow*s/100)); $('#resize-h').value=Math.max(1,Math.round(rt.oh*s/100)); draw(); });
  $('#resize-lock').addEventListener('change', ()=>{ const w=parseInt($('#resize-w').value)||0; if($('#resize-lock').checked && rt.ow) $('#resize-h').value=Math.max(1,Math.round(w*rt.oh/rt.ow)); draw(); });
  $('#resize-fmt').addEventListener('change', ()=>{ const f=$('#resize-fmt').value; $('#resize-q').disabled=(f==='png'); });
  $('#resize-q').disabled = ($('#resize-fmt').value==='png');
  $('#resize-dl').addEventListener('click', ()=>{
    const f=$('#resize-fmt').value, type=fmtFromSel(f), q=(f==='png')?undefined:($('#resize-q').value/100);
    downloadCanvas($('#resize-canvas'), 'imagix-resize.'+extFromSel(f), type, q);
  });
  $('#resize-dl').disabled=true;
}

/* ============================================================
   TOOL 2 — COMPRESS
============================================================ */
function initCompress(){
  infoRenderers.compress = ()=>{ $('#compress-info').innerHTML = t('info.nofile'); };
  bindFile('compress', bm=>{
    const c=$('#compress-canvas'); c.width=bm.width; c.height=bm.height; c.getContext('2d').drawImage(bm,0,0);
    $('#compress-dl').disabled=false;
  });
  $('#compress-fmt').addEventListener('change', ()=>{ const f=$('#compress-fmt').value; $('#compress-q').disabled=(f==='png'); });
  $('#compress-q').disabled = ($('#compress-fmt').value==='png');
  $('#compress-run').addEventListener('click', ()=>{
    const bm=state.compress.bitmap; if(!bm){ return; }
    const f=$('#compress-fmt').value, type=fmtFromSel(f), q=(f==='png')?undefined:($('#compress-q').value/100);
    const c=$('#compress-canvas'); c.width=bm.width; c.height=bm.height; const ctx=c.getContext('2d'); ctx.drawImage(bm,0,0);
    c.toBlob(blob=>{
      if(!blob) return;
      const n=blob.size, o=state.compress.size||0;
      let saved='—'; if(o>0 && n<o) saved=Math.round((1-n/o)*100)+'%'; else if(o>0) saved='0%';
      $('#compress-info').innerHTML = t('info.compress').replace('{o}',fmtBytes(o)).replace('{n}',fmtBytes(n)).replace('{s}',saved);
      $('#compress-dl').disabled=false;
    }, type, q);
  });
  $('#compress-dl').addEventListener('click', ()=>{
    const f=$('#compress-fmt').value, type=fmtFromSel(f), q=(f==='png')?undefined:($('#compress-q').value/100);
    downloadCanvas($('#compress-canvas'), 'imagix-compress.'+extFromSel(f), type, q);
  });
  $('#compress-dl').disabled=true;
}

/* ============================================================
   TOOL 3 — CONVERT
============================================================ */
function initConvert(){
  infoRenderers.convert = ()=>{ $('#convert-info').innerHTML = t('info.nofile'); };
  bindFile('convert', bm=>{
    const c=$('#convert-canvas'); c.width=bm.width; c.height=bm.height; c.getContext('2d').drawImage(bm,0,0);
    $('#convert-dl').disabled=false;
  });
  $('#convert-fmt').addEventListener('change', ()=>{ const f=$('#convert-fmt').value; $('#convert-q').disabled=(f==='png'); });
  $('#convert-run').addEventListener('click', ()=>{
    const bm=state.convert.bitmap; if(!bm){ return; }
    const f=$('#convert-fmt').value, type=fmtFromSel(f), q=(f==='png')?undefined:($('#convert-q').value/100);
    const c=$('#convert-canvas'); c.width=bm.width; c.height=bm.height; const ctx=c.getContext('2d'); ctx.drawImage(bm,0,0);
    c.toBlob(blob=>{
      if(!blob) return;
      $('#convert-info').innerHTML = t('info.convert').replace('{f}',f.toUpperCase()).replace('{n}',fmtBytes(blob.size));
      $('#convert-dl').disabled=false;
    }, type, q);
  });
  $('#convert-dl').addEventListener('click', ()=>{
    const f=$('#convert-fmt').value, type=fmtFromSel(f), q=(f==='png')?undefined:($('#convert-q').value/100);
    downloadCanvas($('#convert-canvas'), 'imagix-convert.'+extFromSel(f), type, q);
  });
  $('#convert-dl').disabled=true;
}

/* ============================================================
   TOOL 4 — CROP
============================================================ */
function initCrop(){
  const cv = {scale:1, sel:{x:0,y:0,w:0,h:0}, drag:null};
  infoRenderers.crop = ()=>{ $('#crop-info').innerHTML = t('info.nofile'); };
  bindFile('crop', bm=>{
    const maxW=640;
    const dw=Math.min(maxW, bm.width); const dh=Math.round(bm.height*dw/bm.width);
    cv.scale = bm.width/dw;
    const disp=$('#crop-display'); disp.width=dw; disp.height=dh; disp.getContext('2d').drawImage(bm,0,0,dw,dh);
    const wrap=$('#crop-wrap'); wrap.style.width=dw+'px'; wrap.style.height=dh+'px';
    cv.sel={x:0,y:0,w:dw,h:dh};
    positionSel();
    $('#crop-wrap').classList.remove('hidden');
    $('#crop-sel').classList.remove('hidden');
    $('#crop-dl').disabled=false;
    updateRead();
  });
  function positionSel(){
    const s=cv.sel, el=$('#crop-sel');
    el.style.left=s.x+'px'; el.style.top=s.y+'px'; el.style.width=s.w+'px'; el.style.height=s.h+'px';
  }
  function updateRead(){
    const s=cv.sel;
    $('#crop-read').textContent = 'x: '+Math.round(s.x*cv.scale)+'  y: '+Math.round(s.y*cv.scale)+'  w: '+Math.round(s.w*cv.scale)+'  h: '+Math.round(s.h*cv.scale)+'  (source px)';
  }
  const wrap=$('#crop-wrap'), sel=$('#crop-sel');
  function relPos(e){
    const r=wrap.getBoundingClientRect();
    return { x: Math.max(0, Math.min(r.width, e.clientX-r.left)), y: Math.max(0, Math.min(r.height, e.clientY-r.top)) };
  }
  function clamp(){
    const r=wrap.getBoundingClientRect();
    cv.sel.x=Math.max(0,Math.min(cv.sel.x, r.width-cv.sel.w));
    cv.sel.y=Math.max(0,Math.min(cv.sel.y, r.height-cv.sel.h));
    if(cv.sel.x+cv.sel.w>r.width) cv.sel.w=r.width-cv.sel.x;
    if(cv.sel.y+cv.sel.h>r.height) cv.sel.h=r.height-cv.sel.y;
  }
  wrap.addEventListener('pointerdown', e=>{
    if(!state.crop.bitmap) return;
    const p=relPos(e);
    const onHandle = e.target.classList.contains('h');
    if(e.target===sel && !onHandle){
      cv.drag={mode:'move', sx:e.clientX, sy:e.clientY, ox:cv.sel.x, oy:cv.sel.y};
    } else if(onHandle){
      cv.drag={mode:'resize', corner:e.target.classList[1], sx:e.clientX, sy:e.clientY, o:{...cv.sel}};
    } else {
      cv.drag={mode:'new', start:p}; cv.sel={x:p.x,y:p.y,w:0,h:0}; sel.classList.remove('hidden');
    }
    sel.setPointerCapture(e.pointerId);
    e.preventDefault();
  });
  wrap.addEventListener('pointermove', e=>{
    if(!cv.drag) return;
    const r=wrap.getBoundingClientRect();
    if(cv.drag.mode==='move'){
      cv.sel.x=cv.drag.ox+(e.clientX-cv.drag.sx);
      cv.sel.y=cv.drag.oy+(e.clientY-cv.drag.sy);
      clamp();
    } else if(cv.drag.mode==='new'){
      const p=relPos(e);
      cv.sel.x=Math.min(cv.drag.start.x,p.x); cv.sel.y=Math.min(cv.drag.start.y,p.y);
      cv.sel.w=Math.abs(p.x-cv.drag.start.x); cv.sel.h=Math.abs(p.y-cv.drag.start.y);
    } else if(cv.drag.mode==='resize'){
      const p=relPos(e); const o=cv.drag.o; const c=cv.drag.corner;
      if(c==='tl'){ const nx=Math.min(p.x,o.x+o.w-4); cv.sel={x:nx,y:Math.min(p.y,o.y+o.h-4),w:o.x+o.w-nx,h:o.y+o.h-Math.min(p.y,o.y+o.h-4)}; }
      else if(c==='tr'){ const ny=Math.min(p.y,o.y+o.h-4); cv.sel={x:o.x,y:ny,w:Math.max(4,p.x-o.x),h:o.y+o.h-ny}; }
      else if(c==='bl'){ const nx=Math.min(p.x,o.x+o.w-4); cv.sel={x:nx,y:o.y,w:o.x+o.w-nx,h:Math.max(4,p.y-o.y)}; }
      else if(c==='br'){ cv.sel={x:o.x,y:o.y,w:Math.max(4,p.x-o.x),h:Math.max(4,p.y-o.y)}; }
    }
    positionSel(); updateRead();
  });
  function endDrag(e){ if(cv.drag){ try{sel.releasePointerCapture(e.pointerId);}catch(_){} cv.drag=null; } }
  wrap.addEventListener('pointerup', endDrag);
  wrap.addEventListener('pointercancel', endDrag);
  $('#crop-run').addEventListener('click', ()=>{
    const bm=state.crop.bitmap; if(!bm) return;
    const s=cv.sel, sc=cv.scale;
    const sx=Math.round(s.x*sc), sy=Math.round(s.y*sc), sw=Math.max(1,Math.round(s.w*sc)), sh=Math.max(1,Math.round(s.h*sc));
    const c=$('#crop-canvas'); c.width=sw; c.height=sh; c.getContext('2d').drawImage(bm, sx,sy,sw,sh, 0,0,sw,sh);
    $('#crop-info').innerHTML = t('info.crop').replace('{w}',sw).replace('{h}',sh);
    $('#crop-dl').disabled=false;
  });
  $('#crop-dl').addEventListener('click', ()=>downloadCanvas($('#crop-canvas'),'imagix-crop.png','image/png'));
  $('#crop-dl').disabled=true;
}

/* ============================================================
   TOOL 5 — ROTATE & FLIP
============================================================ */
function initRotate(){
  let buf=null;
  infoRenderers.rotate = ()=>{ $('#rotate-info').innerHTML = t('info.nofile'); };
  bindFile('rotate', bm=>{
    buf=makeCanvas(bm.width,bm.height); buf.getContext('2d').drawImage(bm,0,0);
    render(); $('#rotate-dl').disabled=false;
  });
  function render(){
    const d=$('#rotate-canvas'); d.width=buf.width; d.height=buf.height; d.getContext('2d').drawImage(buf,0,0);
    $('#rotate-info').innerHTML = t('info.rotate').replace('{w}',buf.width).replace('{h}',buf.height);
  }
  function transform(fn){
    if(!buf) return; const n=makeCanvas(1,1); fn(n); buf=n; render();
  }
  $('#rotate-cw').addEventListener('click', ()=>transform(n=>{ n.width=buf.height; n.height=buf.width; const x=n.getContext('2d'); x.translate(n.width,0); x.rotate(Math.PI/2); x.drawImage(buf,0,0); }));
  $('#rotate-ccw').addEventListener('click', ()=>transform(n=>{ n.width=buf.height; n.height=buf.width; const x=n.getContext('2d'); x.translate(0,n.height); x.rotate(-Math.PI/2); x.drawImage(buf,0,0); }));
  $('#rotate-flipH').addEventListener('click', ()=>transform(n=>{ n.width=buf.width; n.height=buf.height; const x=n.getContext('2d'); x.translate(n.width,0); x.scale(-1,1); x.drawImage(buf,0,0); }));
  $('#rotate-flipV').addEventListener('click', ()=>transform(n=>{ n.width=buf.width; n.height=buf.height; const x=n.getContext('2d'); x.translate(0,n.height); x.scale(1,-1); x.drawImage(buf,0,0); }));
  $('#rotate-reset').addEventListener('click', ()=>{ if(!state.rotate.orig) return; const bm=state.rotate.orig; buf=makeCanvas(bm.width,bm.height); buf.getContext('2d').drawImage(bm,0,0); render(); });
  $('#rotate-dl').addEventListener('click', ()=>downloadCanvas($('#rotate-canvas'),'imagix-rotate.png','image/png'));
  $('#rotate-dl').disabled=true;
}

/* ============================================================
   TOOL 6 — WATERMARK
============================================================ */
function initWatermark(){
  infoRenderers.watermark = ()=>{ $('#wm-info').innerHTML = t('info.nofile'); };
  bindFile('watermark', bm=>{
    const c=$('#wm-canvas'); c.width=bm.width; c.height=bm.height; c.getContext('2d').drawImage(bm,0,0);
    apply(); $('#wm-dl').disabled=false;
  });
  function apply(){
    const bm=state.watermark.orig; if(!bm) return;
    const c=$('#wm-canvas'); const ctx=c.getContext('2d');
    ctx.clearRect(0,0,c.width,c.height); ctx.drawImage(bm,0,0);
    const text=$('#wm-text').value;
    if(!text) return;
    const size=parseInt($('#wm-size').value)||24;
    ctx.font='700 '+size+'px -apple-system,Segoe UI,Roboto,Arial,sans-serif';
    ctx.globalAlpha=parseInt($('#wm-opacity').value||100)/100;
    ctx.fillStyle=$('#wm-color').value;
    ctx.textBaseline='top';
    const pad=Math.round(size*0.5);
    const tw=ctx.measureText(text).width, th=size;
    const pos=$('#wm-pos').value;
    let x,y;
    if(pos.includes('l')) x=pad; else if(pos.includes('r')) x=c.width-pad-tw; else x=(c.width-tw)/2;
    if(pos.includes('t')) y=pad; else if(pos.includes('b')) y=c.height-pad-th; else y=(c.height-th)/2;
    ctx.fillText(text,x,y);
    ctx.globalAlpha=1;
    $('#wm-info').innerHTML = t('info.watermark').replace('{w}',c.width).replace('{h}',c.height);
  }
  ['wm-text','wm-pos','wm-size','wm-color','wm-opacity'].forEach(id=>$('#'+id).addEventListener('input',apply));
  $('#wm-dl').addEventListener('click', ()=>downloadCanvas($('#wm-canvas'),'imagix-watermark.png','image/png'));
  $('#wm-dl').disabled=true;
}

/* ============================================================
   TOOL 7 — BASE64
============================================================ */
function initBase64(){
  infoRenderers.base64 = ()=>{ $('#b64-info').innerHTML = t('info.nofile'); };
  bindFile('base64', (bm, f)=>{
    const r=new FileReader();
    r.onload=()=>{ const c=$('#b64-out'); c.value=r.result; c.dataset.len=r.result.length;
      $('#b64-info').innerHTML = t('info.base64').replace('{len}',r.result.length.toLocaleString()); };
    r.readAsDataURL(f);
  });
  $('#b64-copy').addEventListener('click', async ()=>{
    try{ await navigator.clipboard.writeText($('#b64-out').value); $('#b64-copy').textContent='✓'; setTimeout(()=>applyI18n(),1200); }catch(e){ $('#b64-out').select(); }
  });
  $('#b64-decode').addEventListener('click', ()=>{
    const v=$('#b64-in').value.trim();
    if(v.startsWith('data:image')){ $('#b64-img').src=v; $('#b64-img').classList.remove('hidden'); $('#b64-info').innerHTML=t('info.base64dec'); }
    else { $('#b64-info').innerHTML='Invalid Data URL (must start with data:image…).'; }
  });
}

/* ============================================================
   TOOL 8 — FILTER
============================================================ */
function initFilter(){
  infoRenderers.filter = ()=>{ $('#flt-info').innerHTML = t('info.nofile'); };
  bindFile('filter', bm=>{
    const c=$('#flt-canvas'); c.width=bm.width; c.height=bm.height; c.getContext('2d').drawImage(bm,0,0);
    apply(); $('#flt-dl').disabled=false;
  });
  function apply(){
    const bm=state.filter.orig; if(!bm) return;
    const c=$('#flt-canvas'); const ctx=c.getContext('2d');
    const b=$('#flt-brightness').value, co=$('#flt-contrast').value, sa=$('#flt-saturate').value,
          g=$('#flt-grayscale').value, se=$('#flt-sepia').value, iv=$('#flt-invert').value, bl=$('#flt-blur').value;
    ctx.filter=`brightness(${b}%) contrast(${co}%) saturate(${sa}%) grayscale(${g}%) sepia(${se}%) invert(${iv}%) blur(${bl}px)`;
    ctx.clearRect(0,0,c.width,c.height); ctx.drawImage(bm,0,0);
    ctx.filter='none';
    $('#flt-info').innerHTML = t('info.filter').replace('{w}',c.width).replace('{h}',c.height);
  }
  ['flt-brightness','flt-contrast','flt-saturate','flt-grayscale','flt-sepia','flt-invert','flt-blur'].forEach(id=>$('#'+id).addEventListener('input',apply));
  $('#flt-reset').addEventListener('click', ()=>{
    $('#flt-brightness').value=100; $('#flt-contrast').value=100; $('#flt-saturate').value=100;
    $('#flt-grayscale').value=0; $('#flt-sepia').value=0; $('#flt-invert').value=0; $('#flt-blur').value=0;
    apply();
  });
  $('#flt-dl').addEventListener('click', ()=>downloadCanvas($('#flt-canvas'),'imagix-filter.png','image/png'));
  $('#flt-dl').disabled=true;
}

/* ============================================================
   TABS / TOGGLES
============================================================ */
function initTabs(){
  $$('.tab').forEach(tab=>{
    tab.addEventListener('click', ()=>{
      const id=tab.getAttribute('data-tool');
      $$('.tab').forEach(t=>t.classList.remove('active')); tab.classList.add('active');
      $$('.panel').forEach(p=>p.classList.remove('active'));
      const panel=$('#tool-'+id); panel.classList.add('active');
      panel.scrollIntoView({behavior:'smooth',block:'start'});
      renderActiveInfo();
    });
  });
}
function initToggles(){
  const lb=$('[data-i18n="lang.btn"]');
  if(lb) lb.addEventListener('click', ()=>{ lang = (lang==='en')?'zh':'en'; localStorage.setItem('imagix-lang',lang); applyI18n(); });
  const tb=$('[data-i18n="theme.btn"]');
  if(tb) tb.addEventListener('click', ()=>{ theme=(theme==='dark')?'light':'dark'; localStorage.setItem('imagix-theme',theme); document.documentElement.setAttribute('data-theme',theme); applyI18n(); });
}

document.addEventListener('DOMContentLoaded', ()=>{
  document.documentElement.setAttribute('data-theme', theme);
  applyI18n();
  initTabs(); initToggles();
  initResize(); initCompress(); initConvert(); initCrop();
  initRotate(); initWatermark(); initBase64(); initFilter();
  // activate first tool by default
  const first=$$('.tab')[0]; if(first){ first.click(); }
});

})();
