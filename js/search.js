var e=function(e,t,r){$.ajax({url:e,dataType:"xml",success:function(e){var n=$("entry",e).map((function(){return{title:$("title",this).text(),content:$("content",this).text(),url:$("link",this).attr("href")}})).get(),i=document.getElementById(t);if(i){var l=document.getElementById(r);i.addEventListener("input",(function(){var e=[],t=function(e){var t,r,n=[];for(t=0;t<e.length;t++)for(r=t+1;r<e.length+1;r++)n.push(e.slice(t,r).join(" "));return n}(this.value.trim().toLowerCase().split(" ")).sort((function(e,t){return t.split(" ").length-e.split(" ").length}));if(l.innerHTML="",!(this.value.trim().length<=0)&&(n.forEach((function(r){var n=0;r.title&&""!==r.title.trim()||(r.title="Untitled");var i=r.title.trim().toLowerCase(),l=i.toLowerCase(),s=r.content.trim().replace(/<style([\s\S]*?)<\/style>/gi,"").replace(/<script([\s\S]*?)<\/script>/gi,"").replace(/<figure([\s\S]*?)<\/figure>/gi,"").replace(/<\/div>/gi,"\n").replace(/<\/li>/gi,"\n").replace(/<li>/gi,"  *  ").replace(/<\/ul>/gi,"\n").replace(/<\/p>/gi,"\n").replace(/<br\s*[\/]?>/gi,"\n").replace(/<[^>]+>/gi,""),a=s.toLowerCase(),c=r.url,u=-1,o=-1,g=-1;if(""!==s&&t.forEach((function(e){u=l.indexOf(e),o=a.indexOf(e),(u>=0||o>=0)&&(n+=1,o<0&&(o=0),g<0&&(g=o))})),n>0){var f={};if(f.rank=n,f.str="<li><a href='"+c+"' class='search-result-title'>"+i+"</a>",g>=0){var p=g-20,h=g+80;p<0&&(p=0),0==p&&(h=100),h>s.length&&(h=s.length);var v=s.substring(p,h),m=new RegExp(t.join("|"),"gi");v=v.replace(m,(function(e){return'<em class="search-keyword">'+e+"</em>"})),f.str+='<p class="search-result">'+v+"...</p>"}f.str+="</li>",e.push(f)}})),e.length)){e.sort((function(e,t){return t.rank-e.rank}));for(var r='<ul class="search-result-list">',i=0;i<e.length;i++)r+=e[i].str;r+="</ul>",l.innerHTML=r}}))}}})};