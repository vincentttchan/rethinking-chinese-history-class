'use strict';
(() => {
  const stage=document.querySelector('#stage');
  const status=document.querySelector('#status');
  const prev=document.querySelector('#prev'),next=document.querySelector('#next');
  const scenePicker=document.querySelector('#scene-picker'),stepPicker=document.querySelector('#step-picker');
  const fullButton=document.querySelector('#full');
  const reduced=matchMedia('(prefers-reduced-motion: reduce)');
  const reducedOverride=new URLSearchParams(location.search).get('motion')==='reduce';
  const reduceMotion=()=>reduced.matches||reducedOverride;
  stage.classList.toggle('reduced-motion',reducedOverride);
  const css=getComputedStyle(stage);
  const value=name=>parseFloat(css.getPropertyValue(name));
  const motion={reveal:value('--duration-reveal'),morph:value('--duration-morph'),line:value('--duration-line'),beat:value('--duration-beat'),scene:value('--duration-scene')};
  const wait=ms=>new Promise(resolve=>setTimeout(resolve,reduceMotion()?0:ms));
  const scene08=createScene08(document.querySelector('#scene-8'),stage,motion);
  // Explicit scene definitions; no unfinished student-experience or Explore entries.
  const specs=[
    [0,'ARRIVAL',1],[1,"WHAT’S LEFT?",8],[2,'TODAY',2],[3,'ONE YEAR AGO',4],
    [4,'OLD QUESTIONS',6],[5,'MORE AI ≠ MORE LEARNING',4],[6,'SHIFT THE CAMERA',14],
    [7,'THE REAL QUESTION',3],[8,'DESIGN FRAMEWORK',6],...CASE_SCENE_SPECS,...PART_TWO_SPECS
  ];
  specs.forEach(([id,title])=>scenePicker.add(new Option(`${String(id).padStart(2,'0')} — ${title}`,String(id))));
  const openingOrder=specs.map(([id])=>id);
  const scenes=new Map(specs.map(([id,title,states])=>{
    const root=document.querySelector(`#scene-${id}`);
    return [id,{
      id,title,states,root,
      enter(){root.hidden=false;root.inert=false;root.setAttribute('aria-hidden','false');},
      exit(){root.hidden=true;root.inert=true;root.setAttribute('aria-hidden','true');root.getAnimations().forEach(a=>a.cancel());},
      lock(step){if(id>=17)return motion.morph;if(id===16&&step===6)return motion.scene;if((id===6&&step>=11)||(id===9&&step>=2)||(id===10&&(step===7||step===12))||(id===11&&step===11)||(id===12&&step===9)||id===14||id===15)return motion.morph;return motion.reveal;},
      async render(step,context){
        if(id===8)return scene08.render(step,context);
        root.querySelectorAll('[data-show]').forEach(el=>{
          const visible=step>=Number(el.dataset.show)&&(el.dataset.until===undefined||step<=Number(el.dataset.until));
          el.classList.toggle('revealed',visible);el.setAttribute('aria-hidden',String(!visible));
        });
        if(id===4){root.classList.toggle('settled',step>=4);root.querySelectorAll('.concern').forEach((el,i)=>el.classList.toggle('past',i<step));}
        if(id===6)root.classList.toggle('shifted',step>=11);
        await context.wait(this.lock(step));
      }
    }];
  }));
  let scene=0,step=0,busy=false,epoch=0,initialized=false,pickerScene=null;
  function syncPickers(){
    scenePicker.value=String(scene);
    if(pickerScene!==scene){
      const total=scenes.get(scene).states;
      stepPicker.replaceChildren(...Array.from({length:total},(_,i)=>new Option(`步驟 ${i+1} / ${total}`,String(i))));
      pickerScene=scene;
    }
    stepPicker.value=String(step);
  }
  function fit(){stage.style.setProperty('--stage-scale',Math.min(innerWidth/value('--stage-width'),innerHeight/value('--stage-height')));}
  function position(){return openingOrder.indexOf(scene);}
  function canNext(){return step<scenes.get(scene).states-1||(position()>=0&&position()<openingOrder.length-1);}
  function canPrevious(){return step>0||position()>0;}
  async function move(targetScene,targetStep,{force=false,reset=false,auto=false}={}){
    if(busy&&!force)return;
    const definition=scenes.get(targetScene);
    if(!definition||targetStep<0||targetStep>=definition.states)return;
    const token=++epoch,current=()=>token===epoch;
    const switching=!initialized||targetScene!==scene;
    const oldStep=switching?-1:step;
    if(force&&busy&&!switching)definition.root.getAnimations().forEach(a=>a.cancel());
    busy=true;stage.dataset.busy='true';
    if(switching){scenes.forEach(s=>s.exit());definition.enter();}
    scene=targetScene;step=targetStep;
    stage.dataset.scene=String(scene);stage.dataset.step=String(step);
    syncPickers();
    definition.root.dataset.step=String(step);
    casePresentation.chrome(scene,step);
    partTwo.render(scene,step,{auto,reduceMotion:reduceMotion()});
    const url=new URL(location.href);url.searchParams.set("scene",scene);url.searchParams.set("step",step);history.replaceState(null,"",url);
    document.querySelector('#section-marker').textContent=scene===0?'EDUHK · 30 SEP 2026':scene>=26?'04 / REFLECTION':scene>=8?(scene>=16?'03 / FIELD INQUIRY':'02 / DESIGN'):'01 / RETHINK';
    stage.setAttribute('aria-label',`Scene ${String(scene).padStart(2,'0')}：${definition.title}`);
    let transition=Promise.resolve();
    if(switching&&initialized&&!reduceMotion()){
      const animation=definition.root.animate([{opacity:0},{opacity:1}],{duration:motion.scene,easing:'ease'});
      transition=animation.finished.catch(()=>{});
    }
    initialized=true;
    await Promise.all([definition.render(step,{previous:oldStep,reset,wait,current}),transition]);
    if(!current())return;
    stage.classList.remove('booting');
    busy=false;stage.dataset.busy='false';
    prev.disabled=!canPrevious();next.disabled=!canNext();
    status.textContent=`Scene ${String(scene).padStart(2,'0')} · ${definition.title} · ${step+1} / ${definition.states}`;
  }
  function advance(){
    if(busy)return;
    if(step<scenes.get(scene).states-1)move(scene,step+1);
    else if(position()>=0&&position()<openingOrder.length-1)move(openingOrder[position()+1],0);
  }
  function retreat(){
    if(busy)return;
    if(step>0)move(scene,step-1);
    else if(position()>0){const id=openingOrder[position()-1];move(id,scenes.get(id).states-1);}
  }
  function syncFullscreenButton(){
    const active=!!document.fullscreenElement;
    stage.dataset.fullscreen=String(active);
    fullButton.querySelector('span').textContent=active?'退出全螢幕':'全螢幕';
    fullButton.title=active?'退出全螢幕（F / Esc）':'全螢幕（F）';
    fullButton.setAttribute('aria-label',active?'退出全螢幕':'進入全螢幕');
    fullButton.setAttribute('aria-pressed',String(active));
  }
  async function fullscreen(){
    try{if(document.fullscreenElement)await document.exitFullscreen();else await document.documentElement.requestFullscreen();}
    catch{status.textContent='此瀏覽器未能進入全螢幕，請使用瀏覽器的全螢幕功能。';}
    syncFullscreenButton();
  }
  document.addEventListener('keydown',e=>{
    if(e.repeat||e.metaKey||e.ctrlKey||e.altKey)return;
    if(casePresentation.key(e))return;
    // Escape belongs to preview/fullscreen dismissal; it never changes a slide.
    if(e.key==='Escape')return;
    if((e.target.closest('button')&&['Enter',' '].includes(e.key))||e.target.closest('a')||e.target.closest('select')||(e.target.closest('nav')&&['Enter',' '].includes(e.key)))return;
    if(e.key==='Enter'&&!busy&&casePresentation.available(scene,step)){e.preventDefault();casePresentation.open(scene,step);return;}
    if(['ArrowRight','ArrowLeft',' ','r','R','f','F'].includes(e.key))e.preventDefault();
    if(e.key==='ArrowRight'||e.key===' ')advance();
    if(e.key==='ArrowLeft')retreat();
    if(e.key.toLowerCase()==='r')move(scene,0,{force:true,reset:true});
    if(e.key.toLowerCase()==='f')fullscreen();
  });
  scenePicker.addEventListener('change',()=>move(Number(scenePicker.value),0,{force:true}));
  stepPicker.addEventListener('change',()=>move(scene,Number(stepPicker.value),{force:true}));
  prev.addEventListener('click',retreat);next.addEventListener('click',advance);
  fullButton.addEventListener('click',fullscreen);
  stage.addEventListener('click',e=>{if(casePresentation.isOpen)return;if(e.target.closest('[data-preview]')){if(!busy)casePresentation.open(scene,step);return;}if(e.target.closest('nav,button,a'))return;const rect=stage.getBoundingClientRect();if(e.clientX<rect.left+rect.width*.2)retreat();else advance();});
  addEventListener('resize',fit);document.addEventListener('fullscreenchange',()=>{fit();syncFullscreenButton();});
  partTwo.init(move);
  fit();
  syncFullscreenButton();
  // Optional scene/step URLs use the same official 00–28 registry as navigation.
  const query=new URLSearchParams(location.search);
  const requested=Number(query.get('scene')||0);
  const start=scenes.has(requested)?requested:0;
  const requestedStep=Number(query.get('step')||0);
  const startStep=Number.isInteger(requestedStep)?Math.min(Math.max(requestedStep,0),scenes.get(start).states-1):0;
  move(start,startStep,{force:true,reset:true});
})();
