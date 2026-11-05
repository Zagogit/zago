(function(){
  document.getElementById('yr').textContent=new Date().getFullYear();

  // mobile menu
  var menu=document.querySelector('.menu'),links=document.getElementById('links');
  menu.addEventListener('click',function(){var o=links.classList.toggle('open');menu.setAttribute('aria-expanded',o)});
  links.addEventListener('click',function(){links.classList.remove('open');menu.setAttribute('aria-expanded',false)});

  // hero typing (shows full text at once if reduced motion is on)
  var pre=document.getElementById('typed'),text=pre.dataset.text,i=0;
  if(window.matchMedia('(prefers-reduced-motion: reduce)').matches){pre.textContent=text}
  else{(function t(){pre.textContent=text.slice(0,++i);if(i<text.length)setTimeout(t,28)})()}

  // contact form: opens WhatsApp or the email app with the message filled in
  var WA='2349032623112',MAIL='zagosaleesu@gmail.com';
  var form=document.getElementById('form'),status=document.getElementById('status');
  form.addEventListener('submit',function(e){e.preventDefault()});
  form.querySelectorAll('button[data-via]').forEach(function(b){
    b.addEventListener('click',function(e){
      e.preventDefault();
      var f=form.elements,ok=true;
      ['name','contact','message'].forEach(function(n){
        var bad=!f[n].value.trim();f[n].classList.toggle('err',bad);if(bad)ok=false;
      });
      status.className='';
      if(!ok){status.textContent='Please fill in your name, contact and message.';return}
      var body='Hello Salisu, my name is '+f.name.value.trim()+'.\nInterested in: '+f.topic.value+'\n\n'+f.message.value.trim()+'\n\nReach me on: '+f.contact.value.trim();
      if(b.dataset.via==='wa'){window.open('https://wa.me/'+WA+'?text='+encodeURIComponent(body),'_blank','noopener')}
      else{location.href='mailto:'+MAIL+'?subject='+encodeURIComponent('Enquiry: '+f.topic.value)+'&body='+encodeURIComponent(body)}
      status.className='ok';status.textContent='Almost done. Press send in the app that just opened.';
    });
  });
})();
