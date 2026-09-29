/* Learning transformations lead; existing project captures provide evidence. */
window.CASE_SCENE_SPECS=[[9, "FROM FRAMEWORK TO DESIGN", 5], [10, "從知道事件 → 看見歷史變化", 15], [11, "從知道答案 → 進入歷史處境", 12], [12, "從閱讀史料 → 建立歷史解釋", 12], [13, "NOT EVERYTHING NEEDS TO BE COMPLEX", 9], [14, "WHAT DOES AI ACTUALLY CHANGE?", 8], [15, "THREE DESIGN QUESTIONS", 5], [16, "FROM FIELDWORK TO FIELD INQUIRY", 10]];
window.CASE_LIBRARY={
  "10": {
    "key": "relationships",
    "category": "MAKE RELATIONSHIPS VISIBLE",
    "title": "晉朝的建立、滅亡與偏安",
    "problem": "從知道事件<br>到看見歷史變化。",
    "response": "把政局變化放回<br>時間與空間之中。",
    "screenshot": "jin.png",
    "url": "https://vincentttchan.github.io/JinDynasty/",
    "start": 11,
    "end": 12,
    "related": [
      {
        "title": "鄭和下西洋",
        "url": "https://thh-glitch.github.io/Zheng-He-s-Voyages/"
      },
      "二萬五千里長征",
      "中國外交關係"
    ]
  },
  "11": {
    "key": "choices",
    "category": "MAKE CHOICES MATTER",
    "title": "自強三十年・踏遍九州之旅",
    "problem": "歷史處境。<br>可行選擇。<br>限制與後果。",
    "response": "讓處境與限制，<br>成為思考的條件。",
    "screenshot": "choices.png",
    "url": "https://yangwu-research-simulation-app.vercel.app/",
    "start": 10,
    "end": 11,
    "related": [
      "自強之路",
      "DIPLOMAT",
      "秦漢風雲",
      "華夏治世",
      {
        "title": "北宋風雲：大宋開國實錄",
        "url": "https://thh-glitch.github.io/songdynasty/"
      },
      {
        "title": "阿明的歲月筆記：港城變遷",
        "url": "https://thh-glitch.github.io/The-Transformation-of-Hong-Kong-Since-1949-/"
      }
    ]
  },
  "12": {
    "key": "evidence",
    "category": "TURN SOURCES INTO INQUIRY",
    "title": "第二次鴉片戰爭｜歷史法庭",
    "problem": "持份者／證詞<br>↓<br>史料標記<br>↓<br>原因分析<br>↓<br>論證／PEEL 陳詞",
    "response": "",
    "screenshot": "evidence.png",
    "url": "https://vincentttchan.github.io/Opiumwar2L/",
    "start": 8,
    "end": 9,
    "related": [
      "1840：第一次鴉片戰爭｜互動歷史檔案",
      "1978：歷史偵探檔案｜改革開放",
      "三面紅旗運動：基層幹部檔案室"
    ]
  },
  "13": {
    "key": "practice",
    "category": "PRACTISE WITH PURPOSE",
    "title": "御史台・史料辨偽",
    "problem": "提取知識。<br>即時回饋。<br>再次嘗試。",
    "response": "Historyweeper／中史踩地雷",
    "screenshot": "practice.png",
    "url": "https://thh-glitch.github.io/Historyweeper/",
    "start": 3,
    "end": 3,
    "related": [
      "百萬富翁",
      "Typing of History",
      "MC Challenge"
    ]
  },
  "16": {
    "title": "中二級專題研習｜從中西區文物徑出發",
    "problem": "",
    "response": "",
    "screenshot": "fieldwork.png",
    "url": "https://vincentttchan.github.io/project-learning-final-two-pages/",
    "start": 1,
    "end": 2,
    "related": []
  }
};
document.querySelector("#stage footer").insertAdjacentHTML("beforebegin", `
<section class="scene case-scene narrative" id="scene-9" data-scene-id="9" aria-label="Scene 09：FROM FRAMEWORK TO DESIGN" hidden>
<div class="framework-echo"><span>SEE</span><b>→</b><span>QUESTION</span><b>→</b><span>EVIDENCE</span><b>→</b><span>INTERPRET</span></div><h1 class="case-statement framework-question" data-show="0" data-until="0">同樣是中史課堂，<br>為甚麼最後會長成<br>完全不同的學習體驗？</h1><h1 class="case-statement " data-show="1" data-until="1">因為我們要解決的，<br><span class="vermilion">不是同一種學習問題。</span></h1><div class="transformation-list"><div data-show="2"><span class="row-number">01</span><h2>從知道事件 <b>→</b> 看見歷史變化</h2></div><div data-show="3"><span class="row-number">02</span><h2>從知道答案 <b>→</b> 進入歷史處境</h2></div><div data-show="4"><span class="row-number">03</span><h2>從閱讀史料 <b>→</b> 建立歷史解釋</h2></div></div>
</section>
<section class="scene case-scene narrative" id="scene-10" data-scene-id="10" aria-label="Scene 10：從知道事件 → 看見歷史變化" hidden>
<div class="jin-events" data-show="0" data-until="8"><div class="jin-event" data-show="0"><span>西晉統一</span><i>↓</i></div><div class="jin-event" data-show="1"><span>八王之亂</span><i>↓</i></div><div class="jin-event" data-show="2"><span>五胡內遷</span><i>↓</i></div><div class="jin-event" data-show="3"><span>西晉滅亡</span><i>↓</i></div><div class="jin-event" data-show="4"><span>東晉偏安</span></div></div><h1 class="case-statement jin-question" data-show="5" data-until="5">都學過。</h1><h1 class="case-statement jin-question" data-show="6" data-until="6">但它們是一條<br>怎樣的歷史變化？</h1><h1 class="case-statement jin-problem" data-show="7" data-until="7">如果只逐件記，<br>每一件都可能「知道」，<br>卻未必知道它們怎樣連起來。</h1><h1 class="case-statement jin-problem" data-show="8" data-until="8">學生知道個別事件，<br>卻未必看見<br>時間、空間與政局如何<span class="vermilion">一起改變</span>。</h1><p class="case-category" data-show="9" data-until="10">DESIGN RESPONSE</p><h1 class="case-statement response-statement" data-show="9" data-until="10">把政局變化<br>放回時間與空間之中。</h1><div class="response-keywords" data-show="10" data-until="10">TIME <span>·</span> SPACE <span>·</span> POWER <span>·</span> CHANGE</div><p class="case-category" data-show="11" data-until="12">沉浸式互動地圖</p><section class="case-spotlight" data-show="11" data-until="12"><h2>晉朝的建立、滅亡與偏安</h2><figure class="spot-media"><img src="assets/cases/jin.png" alt="晉朝的建立、滅亡與偏安的實際專案畫面"></figure><div class="spot-logic "><p>從知道事件<br>到看見歷史變化。</p><p class="case-response">把政局變化放回<br>時間與空間之中。</p><button class="quick-trigger" data-preview="10">QUICK PREVIEW →</button></div></section><aside class="case-related" data-show="12" data-until="12"><p><a href="https://thh-glitch.github.io/Zheng-He-s-Voyages/" target="_blank" rel="noopener noreferrer">鄭和下西洋 <span aria-hidden="true">↗</span></a></p><p>二萬五千里長征</p><p>中國外交關係</p></aside><h1 class="case-statement conclusion-lead" data-show="13" data-until="14">不是讓學生看到更多資料，</h1><h1 class="case-statement conclusion-answer" data-show="14">而是讓他看到<br>資料之間的關係。</h1><p class="bottom-label" data-show="14">MAKE RELATIONSHIPS VISIBLE</p>
</section>
<section class="scene case-scene narrative" id="scene-11" data-scene-id="11" aria-label="Scene 11：從知道答案 → 進入歷史處境" hidden>
<h1 class="case-statement " data-show="0" data-until="1">洋務運動有哪些措施？</h1><p class="expected-answers" data-show="1" data-until="1">軍事工業　　民用企業　　新式教育</p><h1 class="case-statement context-lead" data-show="2" data-until="3">如果是你，</h1><h1 class="case-statement context-question" data-show="3" data-until="3">在那個歷史處境下，<br>你會先解決甚麼問題？</h1><div class="reasoning-chain " data-show="4" data-until="7"><div data-show="4" data-until="7"><strong>CONTEXT</strong></div><div data-show="5" data-until="7"><i>↓</i><strong>CONSTRAINT</strong></div><div data-show="6" data-until="7"><i>↓</i><strong>DECISION</strong></div><div data-show="7" data-until="7"><i>↓</i><strong>CONSEQUENCE</strong></div></div><h1 class="case-statement teaching-point" data-show="8" data-until="9">歷史選擇，<br>從來不是在真空中作出的。</h1><p class="teaching-support" data-show="9" data-until="9">讓歷史處境與限制，<br>成為學生思考的條件。</p><p class="case-category" data-show="10" data-until="11">從知道答案 → 進入歷史處境</p><section class="case-spotlight" data-show="10" data-until="11"><h2>自強三十年・踏遍九州之旅</h2><figure class="spot-media"><img src="assets/cases/choices.png" alt="自強三十年・踏遍九州之旅的實際專案畫面"></figure><div class="spot-logic "><p>歷史處境。<br>可行選擇。<br>限制與後果。</p><p class="case-response">讓處境與限制，<br>成為思考的條件。</p><button class="quick-trigger" data-preview="11">QUICK PREVIEW →</button></div></section><aside class="case-related" data-show="11" data-until="11"><p>自強之路</p><p>DIPLOMAT</p><p>秦漢風雲</p><p>華夏治世</p><p><a href="https://thh-glitch.github.io/songdynasty/" target="_blank" rel="noopener noreferrer">北宋風雲：大宋開國實錄 <span aria-hidden="true">↗</span></a></p><p><a href="https://thh-glitch.github.io/The-Transformation-of-Hong-Kong-Since-1949-/" target="_blank" rel="noopener noreferrer">阿明的歲月筆記：港城變遷 <span aria-hidden="true">↗</span></a></p></aside>
</section>
<section class="scene case-scene narrative" id="scene-12" data-scene-id="12" aria-label="Scene 12：從閱讀史料 → 建立歷史解釋" hidden>
<div class="neutral-sources" data-show="0" data-until="1"><section><h2>資料一</h2><i></i><p>[ VERIFIED HISTORICAL ASSET ]</p><small>待置入已核實史料</small></section><section><h2>資料二</h2><i></i><p>[ VERIFIED HISTORICAL ASSET ]</p><small>待置入已核實史料</small></section><section><h2>資料三</h2><i></i><p>[ VERIFIED HISTORICAL ASSET ]</p><small>待置入已核實史料</small></section></div><h1 class="case-statement source-finding" data-show="1" data-until="1">很多時候，<br>學生閱讀史料只是為了「找答案」。</h1><h1 class="case-statement conclusion-lead" data-show="2" data-until="3">但史料真正限制的是——</h1><h1 class="case-statement conclusion-answer" data-show="3" data-until="3">我們可以怎樣<br><span class="vermilion">解釋歷史。</span></h1><div class="reasoning-chain chinese-actions" data-show="4" data-until="7"><div data-show="4" data-until="7"><strong>找出證據</strong></div><div data-show="5" data-until="7"><i>↓</i><strong>比較說法</strong></div><div data-show="6" data-until="7"><i>↓</i><strong>建立立場</strong></div><div data-show="7" data-until="7"><i>↓</i><strong>為自己的解釋辯護</strong></div></div><p class="case-category" data-show="8" data-until="9">從閱讀史料 → 建立歷史解釋</p><section class="case-spotlight" data-show="8" data-until="9"><h2>第二次鴉片戰爭｜歷史法庭</h2><figure class="spot-media"><img src="assets/cases/evidence.png" alt="第二次鴉片戰爭｜歷史法庭的實際專案畫面"></figure><div class="spot-logic source-logic"><p>持份者／證詞<br>↓<br>史料標記<br>↓<br>原因分析<br>↓<br>論證／PEEL 陳詞</p><p class="case-response"></p><button class="quick-trigger" data-preview="12">QUICK PREVIEW →</button></div></section><aside class="case-related" data-show="9" data-until="9"><p>1840：第一次鴉片戰爭｜互動歷史檔案</p><p>1978：歷史偵探檔案｜改革開放</p><p>三面紅旗運動：基層幹部檔案室</p></aside><h1 class="case-statement conclusion-lead" data-show="10" data-until="11">史料不是拿來「搵答案」。</h1><h1 class="case-statement conclusion-answer" data-show="11">它是用來限制<br>我們可以怎樣解釋歷史。</h1>
</section>
<section class="scene case-scene narrative" id="scene-13" data-scene-id="13" aria-label="Scene 13：NOT EVERYTHING NEEDS TO BE COMPLEX" hidden>
<h1 class="case-statement sometimes" data-show="0" data-until="1">等等。</h1><h1 class="case-statement more-practice" data-show="1" data-until="1">是否每一堂中史課，<br>都需要做到這麼複雜？</h1><h1 class="case-statement centered" data-show="2" data-until="2">不需要。</h1><section class="case-spotlight" data-show="3" data-until="3"><h2>御史台・史料辨偽</h2><figure class="spot-media"><img src="assets/cases/practice.png" alt="御史台・史料辨偽的實際專案畫面"></figure><div class="spot-logic "><p>提取知識。<br>即時回饋。<br>再次嘗試。</p><p class="case-response">Historyweeper／中史踩地雷</p><button class="quick-trigger" data-preview="13">QUICK PREVIEW →</button></div><aside class="practice-related"><p>百萬富翁</p><p>Typing of History</p><p>MC Challenge</p></aside></section><h1 class="case-statement conclusion-lead" data-show="4" data-until="5">有些學習問題，</h1><h1 class="case-statement conclusion-answer" data-show="5" data-until="5">最好的設計，<br>就是讓學生願意再做一次。</h1><div class="practice-terms" data-show="6" data-until="6"><span>RETRIEVAL</span><span>FEEDBACK</span><span>FLUENCY</span><span>MOTIVATION</span></div><h1 class="case-statement conclusion-lead" data-show="7" data-until="8">複雜，不等於好。</h1><h1 class="case-statement conclusion-answer" data-show="8">對準需要，<br>才是設計。</h1>
</section>
<section class="scene case-scene narrative" id="scene-14" data-scene-id="14" aria-label="Scene 14：WHAT DOES AI ACTUALLY CHANGE?" hidden>
<div class="learning-echo" data-show="0" data-until="5"><span>看見關係</span><span>進入歷史處境</span><span>使用證據</span></div><h1 class="case-statement " data-show="1" data-until="1">那 AI 到底<br>改變了哪裏？</h1><div class="ai-roles"><section data-show="2" data-until="5"><h2>MAKE</h2><p>讓原本難以製作的<br>體驗變得可行</p></section><section data-show="3" data-until="5"><h2>ADAPT</h2><p>按學生需要<br>調整提示與支援</p></section><section data-show="4" data-until="5"><h2>FEEDBACK</h2><p>把回饋放進<br>學習過程</p></section><section data-show="5" data-until="5"><h2>ITERATE</h2><p>讓教師更快<br>試、改、再設計</p></section></div><h1 class="case-statement conclusion-lead" data-show="6" data-until="7">AI 不是另一種活動。</h1><h1 class="case-statement conclusion-answer" data-show="7">它改變的是<br>我們可以怎樣支援學習設計。</h1>
</section>
<section class="scene case-scene narrative" id="scene-15" data-scene-id="15" aria-label="Scene 15：THREE DESIGN QUESTIONS" hidden>
<div class="design-questions"><section data-show="0"><span class="row-number">01</span><h2>學生現在<br>「看不見」甚麼？</h2><p class="question-hints">關係 · 處境 · 證據</p></section><section data-show="1"><span class="row-number">02</span><h2>我希望他<br>親自做甚麼思考？</h2></section><section data-show="2"><span class="row-number">03</span><h2>哪一種設計，<br>最能令這個<br>思考發生？</h2></section></div><aside class="design-ai" data-show="3" data-until="3"><span>AI?</span><p>在哪裏可以降低成本、提供支援，<br>或創造原本難以實現的體驗？</p></aside>
</section>
<section class="scene case-scene narrative" id="scene-16" data-scene-id="16" aria-label="Scene 16：FROM FIELDWORK TO FIELD INQUIRY" hidden>
<h1 class="case-statement " data-show="0" data-until="0">我們其實已經<br>把數碼學習帶到考察之中。</h1><section class="case-spotlight field-spotlight" data-show="1" data-until="2"><h2>中二級專題研習<br><small>從中西區文物徑出發</small></h2><figure class="spot-media"><img src="assets/cases/fieldwork.png" alt="從中西區文物徑出發專題研習網站的實際畫面"></figure><div class="spot-logic"><p data-show="2" data-until="2">回顧實地經歷<br>整理研究流程<br>把介紹變成探究問題<br>反思研究成果</p><button class="quick-trigger" data-preview="16">QUICK PREVIEW →</button></div></section><h1 class="case-statement " data-show="3" data-until="3">但我開始再想<br>一個問題。</h1><h1 class="case-statement field-transition-question" data-show="4" data-until="4">數碼學習，<br>一定要等考察完結後<br>才出現嗎？</h1><h1 class="case-statement field-role-question" data-show="5" data-until="5">AI 可以在學生<br>真正走進歷史現場之前、<br>當下，以及之後，<br>扮演甚麼角色？</h1><div class="field-threshold" data-show="6" data-until="6"><p>13:30</p></div><div class="temple-threshold" data-show="7"><p>13:30 · FIELD INQUIRY</p><h1>文武廟</h1><p class="temple-subtitle" data-show="8">人工智能 × 人文學科考察的學習設計</p><h2 data-show="9">一座廟，<br>可以怎樣成為一個歷史問題？</h2></div>
</section>
`);
window.casePresentation = (() => {
  const stage=document.querySelector('#stage');
  stage.insertAdjacentHTML('beforeend',`<section id="quick-preview" role="dialog" aria-modal="true" aria-labelledby="preview-title" hidden><div class="preview-heading"><h2 id="preview-title"></h2><span>30–60 秒</span><button id="close-preview">Esc · 返回簡報</button></div><img id="preview-image" alt=""><a id="preview-project" target="_blank" rel="noopener noreferrer">開啟原專案 ↗</a></section>`);
  const dialog=document.querySelector('#quick-preview');
  let opener=null;
  function available(id,step){const c=CASE_LIBRARY[id];return c&&c.url&&step>=c.start&&step<=c.end?c:null;}
  function close(){if(dialog.hidden)return;dialog.hidden=true;stage.dataset.preview='false';stage.querySelector('.scene:not([hidden])').inert=false;stage.querySelector('nav').inert=false;if(opener&&opener.isConnected)opener.focus({preventScroll:true});else stage.focus({preventScroll:true});}
  function open(id,step){const c=available(id,step);if(!c)return false;opener=document.activeElement;document.querySelector('#preview-title').textContent=c.title;const img=document.querySelector('#preview-image');img.src='assets/cases/'+c.screenshot;img.alt=c.title+'的實際專案截圖';document.querySelector('#preview-project').href=c.url;dialog.hidden=false;stage.dataset.preview='true';stage.querySelector('.scene:not([hidden])').inert=true;stage.querySelector('nav').inert=true;document.querySelector('#close-preview').focus({preventScroll:true});return true;}
  function key(event){if(dialog.hidden)return false;if(event.key==='Escape'){event.preventDefault();close();}else if(event.key==='Tab'){event.preventDefault();const controls=[document.querySelector('#close-preview'),document.querySelector('#preview-project')];const i=controls.indexOf(document.activeElement);controls[(i+(event.shiftKey?-1:1)+2)%2].focus();}return true;}
  document.querySelector('#close-preview').addEventListener('click',close);
  function chrome(id,step){stage.dataset.archive=String(id===16&&step>=6);stage.dataset.thresholdUi=String(id===16&&step>=6);}
  return {open,close,key,available,chrome,get isOpen(){return !dialog.hidden;}};
})();
