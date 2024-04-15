const faqs=document.querySelectorAll('.faq');
faqs.forEach(faq =>{
  const icon=faq.querySelector('.icon');
  const answer=faq.querySelector('.answer');
  faq.addEventListener('click', () =>{
    if(icon.classList.toggle('active')){
      icon.classList.remove('active');
      answer.style.maxHeight=null;
    }else{
    
    answer.classList.toggle('active');
    answer.style.maxHeight = answer.scrollHeight+ 'px';
    }
  })
})
