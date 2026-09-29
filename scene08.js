/* Approved Scene 08 behavior, mounted by the shared navigation controller. */
window.createScene08 = function(root,stage,motion) {
  const concepts=[...root.querySelectorAll('.concept')];
  const questions=[...root.querySelectorAll('.question')];
  const arrows=[...root.querySelectorAll('.arrow')];
  const support=root.querySelector('#support');
  const conclusion=root.querySelector('#conclusion');
  function show(el,visible){el.classList.toggle('visible',visible);el.setAttribute('aria-hidden',String(!visible));}
  function layout(step){
    const css=getComputedStyle(stage);
    const ratio=parseFloat(css.getPropertyValue('--type-framework'))/parseFloat(css.getPropertyValue('--type-xl'));
    concepts.forEach((el,i)=>{
      const active=step<4&&i===step;
      const labelWidth=el.querySelector('h2').offsetWidth*ratio;
      const x=active?160+i*420:[260,680,1100,1640][i]-labelWidth/2;
      el.style.setProperty('--x',`${x}px`);
      el.style.setProperty('--y',`${active?300:(step===5?170:220)}px`);
      el.style.setProperty('--size',active?(i===0?'1.6':'1'):String(ratio));
      el.classList.toggle('active',active);
    });
    arrows.forEach((el,i)=>el.classList.toggle('visible',i<Math.min(step,3)));
  }
  return {
    async render(next,{previous=-1,reset=false,wait,current}) {
      questions.forEach(el=>show(el,false));
      conclusion.classList.remove('first','second');show(conclusion,false);
      if(next<4){support.classList.remove('label-visible');show(support,false);}
      concepts.forEach((el,i)=>{if(i>next)show(el,false);});
      layout(next);
      const introducing=next>previous&&next>0&&next<5&&!reset;
      if(introducing){await wait(motion.morph);if(!current())return;}
      concepts.forEach((el,i)=>show(el,i<=Math.min(next,3)));
      if(next<4){show(questions[next],true);}
      if(next>=4){show(support,true);await wait(previous>=4?motion.morph:motion.line);if(!current())return;support.classList.add('label-visible');}
      if(next===5){show(conclusion,true);conclusion.classList.add('first');await wait(motion.beat);if(!current())return;conclusion.classList.add('second');}
      await wait(motion.reveal);
    }
  };
};
