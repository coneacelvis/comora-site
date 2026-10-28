const menuToggle=document.getElementById('menuToggle');
const mainNav=document.querySelector('.main-nav');
if(menuToggle&&mainNav){menuToggle.addEventListener('click',()=>mainNav.classList.toggle('open'));}
const searchForm=document.getElementById('searchForm');
if(searchForm){searchForm.addEventListener('submit',e=>{e.preventDefault();const q=(document.getElementById('searchInput').value||'').trim();if(!q){document.getElementById('searchInput').focus();return;}window.location.href='licitatii.html?q='+encodeURIComponent(q);});}
