"use strict";var randomNum=function(t){return Math.ceil(Math.random()*t)},randomStr=function(){return Math.random().toString(36).substr(2)},getNodeDom=function(t){return'<span class="tree-switcher tree-switcher_close tree-node">'+t.text+"</span>"},getChildDom=function t(e){if(0===e.length)return"";var n='<ul class="tree-child-tree">';return e.map(function(e){return n+="<li>",n+=getNodeDom(e.data),0===e.children.length?n+="</li>":n+=t(e.children),null}),n+="</ul>"},randomData=function t(e,n){var r=[];if(0===e||0===n)return r;for(var o=0;o<e;o+=1){var a={data:{id:randomStr(),text:randomStr()},children:[]};a.children=t(randomNum(5),n-1),r.push(a)}return r},setTreeContent=function(){var t=document.getElementById("tree"),e={root:{data:{id:"d9f0899f4fdf",text:"根节点"},children:randomData(randomNum(2),3)}};t.innerHTML=getNodeDom(e.root.data)+getChildDom(e.root.children)};setTreeContent();var randomBtn=document.getElementById("random");randomBtn.addEventListener("click",function(){setTreeContent()});