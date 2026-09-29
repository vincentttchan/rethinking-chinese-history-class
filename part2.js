/* Part II frames the case study. The Living Archive remains a separate website. */
'use strict';
window.PART_TWO_SPECS = [
  [17,'FROM FRAMEWORK TO EXPERIENCE',4], [18,'SEE ≠ UNDERSTAND',6],
  [19,'IDENTITY SHIFT',3], [20,'SEE → QUESTION',6], [21,'EVIDENCE',8],
  [22,'INTERPRET',4], [23,'OBJECT → PLACE → COMMUNITY',3],
  [24,'DIGITAL → PHYSICAL',7], [25,'DESIGN THE THINKING',5]
];
window.partTwo = (() => {
  const base='assets/part2/';
  const demo='https://vincentttchan.github.io/man-mo-temple-living-archive/';
  const photoSource='https://commons.wikimedia.org/wiki/File:Man_Mo_Temple,_Hollywood_Road,_Hong_Kong_-_20151206-14.jpg';
  const range=(from,to)=>`data-show="${from}"${to===undefined?'':` data-until="${to}"`}`;
  const block=(text,from,to,cls='')=>`<div class="p2-copy ${cls}" ${range(from,to)}>${text}</div>`;
  const words=(cls='')=>`<div class="p2-framework ${cls}" aria-label="SEE → QUESTION → EVIDENCE → INTERPRET">${['SEE','QUESTION','EVIDENCE','INTERPRET'].map((w,i)=>`<span><small>0${i+1}</small>${w}</span>`).join('<b aria-hidden="true">⟶</b>')}</div>`;
  const image=(file,alt,from,to,cls='')=>`<img class="p2-image ${cls}" src="${base+file}" alt="${alt}" ${range(from,to)} decoding="async">`;
  const note=(text,from,to)=>`<p class="p2-credit" ${range(from,to)}>${text}</p>`;
  const realCredit=(from,to)=>note(`<a href="${photoSource}" target="_blank" rel="noopener">實景攝影：Smuconlaw · CC BY-SA 4.0</a> · 畫面裁切／暗化`,from,to);
  const link=(label,from,to,url=demo)=>`<a class="p2-demo" href="${url}" target="_blank" rel="noopener" ${range(from,to)}>${label}<span aria-hidden="true"> ↗</span></a>`;
  const plates=[
    ['historic-photo.jpg','歷史照片','約 1868 年 · Government Records Service · 01-08-205'],
    ['architecture.jpg','建築組群','情境插畫 · 非測繪圖'],
    ['roof.jpg','屋脊細節','古物古蹟辦事處 · 2018 年實物照片'],
    ['lion.png','石獅','現代研究表現 · 依現存石獅照片製作'],
    ['plaque.jpg','神威普佑','匾額意象插畫 · 非實物照片'],
    ['map.jpg','平面圖與檔案','東華三院 · 文武廟平面圖原件（調色）'],
    ['room.png','修復室','Living Archive · 情境重建']
  ];
  const html={
    17: `${words('p2-opening-framework')}${block('<h1>如果把這四個歷史思考動作，<br>真正放進一次考察之中呢？</h1>',1,1)}${image('temple-real.jpg','上環荷李活道文武廟實景',2,3,'p2-full p2-temple')}<div class="p2-wash" ${range(2,3)}></div>${block('<p class="p2-label">MAN MO TEMPLE · SHEUNG WAN</p>',2,2,'p2-place-name')}${block('<h1>學生走進了文武廟，<br>就代表他正在進行<br>歷史探究嗎？</h1>',3,3)}${realCredit(2,3)}`,
    18: `<div class="p2-noticed" ${range(0,3)}><span ${range(0,3)}>香火</span><span ${range(0,3)}>神像</span><span ${range(1,3)}>牌匾</span><span ${range(1,3)}>屋頂</span><span ${range(2,3)}>石獅</span><span ${range(2,3)}>建築</span></div>${block('<h1 class="p2-thesis">看見 <em>≠</em> 看懂</h1><p class="p2-support">他看見很多東西，<br>但他知道自己正在看甚麼嗎？</p>',3,3)}${block('<p class="p2-lead">不是讓學生在考察前知道更多。</p><h1 '+range(5,5)+'>而是讓他到達現場時，<br><strong>看得更多。</strong></h1><p class="p2-label p2-hinge-note" '+range(5,5)+'>DESIGN FOR ATTENTION · QUESTION · EVIDENCE · INTERPRETATION</p>',4,5,'p2-hinge')}`,
    19: `${image('hero.webp','Living Archive 的廟宇情境插畫',0,0,'p2-full')}${image('room.png','Living Archive 修復室情境插畫',1,1,'p2-full')}<div class="p2-wash" ${range(0,1)}></div>${block('<h1>走進文武廟，<br>再走到它的背後。</h1>',0,0)}${block('<h1>有些歷史，<br>已經變得難以閱讀。</h1>',1,1)}${link('開啟 Living Archive',0,1)}${note('Living Archive · 情境重建',0,1)}${block('<p class="p2-visitor">VISITOR</p><span class="p2-down" aria-hidden="true">↓</span><h1 class="p2-restorer">HISTORICAL<br>RESTORER</h1>',2,2,'p2-identity')}`,
    20: `${image('painting.webp','褪色的文武畫像：Living Archive 情境畫作',0,2,'p2-painting')}${block('<h1>哪裏已經<br>看不清楚？</h1><p class="p2-action" '+range(1,2)+'>SEE</p>',0,2,'p2-observe')}${link('繼續畫作示範',2,2)}${note('Living Archive · 情境畫作',0,2)}<div class="p2-see-question" ${range(3,5)}><span>SEE</span><b aria-hidden="true">↓</b><strong>QUESTION</strong></div>${block('<h1>他們是誰？</h1>',3,3,'p2-question')}${block('<h1>為甚麼會被<br>放在一起？</h1>',4,4,'p2-question')}${block('<h1>為甚麼這座廟<br>同時供奉<br>「文」與「武」？</h1>',5,5,'p2-question')}`,
    21: `<p class="p2-evidence-anchor" ${range(0,6)}>EVIDENCE</p>${plates.map(([file,title,credit],i)=>`${image(file,title,i,i,'p2-evidence-image')}${note(title+' · '+credit,i,i)}`).join('')}<button class="p2-play" type="button" ${range(0,6)} aria-pressed="false">播放影像序列</button>${block('<h1>歷史不是只有<br><strong>課本文字。</strong></h1>',7,7)}`,
    22: `${image('history.webp','十九世紀上環社區的情境重建插畫，並非歷史照片',0,2,'p2-full')}<div class="p2-wash p2-history-wash" ${range(0,2)}></div>${block('<p class="p2-label">HISTORY FILE 01</p><h1>一個正在形成的社區</h1>',0,0,'p2-history-title')}${block('<p class="p2-label">初步推論</p><h1>不同的需要，<br>似乎正在指向<br>同一個地方。</h1><p class="p2-provisional" '+range(2,2)+'>尚待史料驗證</p>',1,2)}${note('概念示意 · 情境重建',0,2)}<div ${range(3,3)}>${words('p2-reconnect')}<h1 class="p2-interpret">INTERPRET</h1></div>`,
    23: `<div class="p2-scale"><div class="p2-object"><h1>OBJECT</h1><p>畫作 · 牌匾 · 石獅 · 屋脊</p><small>SEE AN OBJECT</small></div><div class="p2-place" ${range(1,2)}><h1>PLACE</h1><p>文武廟 · 列聖宮 · 公所</p><small>READ A PLACE</small></div><div class="p2-community" ${range(2,2)}><h1>COMMUNITY</h1><p>19TH-CENTURY SHEUNG WAN</p><small>INTERPRET A COMMUNITY</small></div></div>`,
    24: `${image('room.png','Living Archive 修復室情境',0,1,'p2-full p2-departure')}${image('temple-real.jpg','真實的上環文武廟',2,6,'p2-full p2-temple')}<div class="p2-wash" ${range(0,6)}></div>${block('<h1>帶着資料，<br>走進現場。</h1>',0,0)}${block('<h1>離開修復室。<br>學習如何尊重地走進現場。</h1>',1,1,'p2-etiquette')}${link('開啟入廟禮儀演練',1,1,demo+'docs/architectural-calibration/experience/')}${block('<h1 class="p2-screen">THE SCREEN<br>STOPS HERE.</h1>',2,2)}${block('<h1 class="p2-screen">THE INQUIRY<br>DOESN’T.</h1>',3,3)}${block('<h1>數碼體驗在這裏停止。<br>歷史探究才真正開始。</h1>',4,4)}${block('<h1>帶着問題，<br>走進文武廟。</h1>',5,6,'p2-final-field')}${note('Living Archive · 情境重建',0,1)}${realCredit(2,6)}`,
    25: `${words('p2-closing-framework')}${block('<h1 class="p2-design">DESIGN<br>THE THINKING.</h1><p class="p2-support">設計學生如何思考。</p>',1,1)}${block('<h1>AI 支援學習設計，<br><strong>不取代</strong>學習設計。</h1>',2,2)}${block('<h1>我們不是把文武廟<br>搬進螢幕。</h1>',3,3)}${block('<p class="p2-lead">我們是在學生真正走進文武廟之前，</p><h1>先幫他準備一雙<br><strong>會看歷史的眼睛。</strong></h1>',4,4,'p2-closing')}`
  };
  const fragment=document.createDocumentFragment();
  PART_TWO_SPECS.forEach(([id,title])=>{
    const section=document.createElement('section');
    section.id=`scene-${id}`;section.className='scene part-two';section.dataset.sceneId=id;
    section.hidden=true;section.inert=true;section.setAttribute('aria-label',`Scene ${id}：${title}`);
    section.innerHTML=html[id];fragment.append(section);
  });
  const stage=document.querySelector('#stage');stage.insertBefore(fragment,stage.querySelector('footer'));
  let timer,playing=false,navigate;
  // Retain the same case-study tab between the entrance and painting demonstrations.
  let archiveWindow;
  document.querySelectorAll('#scene-19 .p2-demo,#scene-20 .p2-demo').forEach(link=>link.addEventListener('click',event=>{
    if(event.metaKey||event.ctrlKey||event.shiftKey||event.altKey)return;
    if(archiveWindow&&!archiveWindow.closed){event.preventDefault();archiveWindow.focus();return;}
    const opened=window.open(link.href,'manmo-living-archive-demo');
    if(opened){event.preventDefault();opened.opener=null;archiveWindow=opened;}
  }));
  const play=document.querySelector('.p2-play');
  function stop(){clearTimeout(timer);playing=false;play.textContent='播放影像序列';play.setAttribute('aria-pressed','false');}
  play.addEventListener('click',()=>{
    if(playing){stop();return;}
    playing=true;navigate(21,Number(stage.dataset.step),{force:true,auto:true});
  });
  return {
    init(move){navigate=move;},
    render(id,step,{auto=false,reduceMotion=false}={}){
      clearTimeout(timer);if(!auto)stop();
      const dark=id===17||(id===19&&step<2)||(id===21&&step<7)||(id===22&&step<3)||id===24;
      stage.dataset.partTwoDark=String(dark);
      if(id>=17)stage.dataset.thresholdUi='false';
      // Hidden reveal states cannot retain keyboard focus or interactive links.
      if(id>=17)document.querySelector(`#scene-${id}`).querySelectorAll('[data-show]').forEach(el=>{
        el.inert=step<Number(el.dataset.show)||(el.dataset.until!==undefined&&step>Number(el.dataset.until));
      });
      if(id===21&&auto&&playing&&step<7&&!reduceMotion){
        play.textContent='暫停影像序列';play.setAttribute('aria-pressed','true');
        timer=setTimeout(()=>navigate(21,step+1,{force:true,auto:true}),2400);
      }else stop();
    }
  };
})();
