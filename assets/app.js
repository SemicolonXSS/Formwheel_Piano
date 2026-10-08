window.__fwBooted=false;
setTimeout(function(){
  if(!window.__fwBooted){
    var el=document.getElementById("error");
    if(el){
      el.textContent="Firebase 라이브러리를 불러오지 못했습니다.\n인터넷 연결 또는 광고/보안 차단 프로그램을 확인한 뒤 새로고침해주세요.";
      el.style.display="block";
    }
  }
},5000);

window.openTutorial=openTutorial;
