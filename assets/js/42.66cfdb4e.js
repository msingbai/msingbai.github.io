(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{379:function(t,e,n){},646:function(t,e,n){"use strict";n(379)},673:function(t,e,n){"use strict";n.r(e);n(25);var o={mounted(){setTimeout(()=>{this.mounteElement(),this.canvasBubble()},200)},methods:{canvasBubble(){let t=document.getElementById("canvas");t.width=window.innerWidth,t.height=window.innerHeight,t.style.position="fixed";let e=t.getContext("2d"),[n,o]=[t.width,t.height],a=[];for(let t=0;t<200;t++){let t=l();a.push(t)}function l(){let t=Math.random()*n,e=5*Math.random()+5;return{x:t,y:o+2*e+10*Math.random(),r:e,s:1*Math.random()+1}}!function n(){window.requestAnimationFrame(n),e.fillStyle="rgba(0, 0, 0, .5)",e.rect(0,0,t.width,t.height),e.fill(),a.forEach(({x:t,y:n,r:o,s:i},d)=>{(n-=i)<=-o-10||Math.random()>.995?a[d]=l():a[d]={x:t,y:n,r:o,s:i},function(t,n,o){e.beginPath();var a=e.createRadialGradient(t+o/3,n+o/3,.2*o,t+o/3,n+o/3,.8*o);a.addColorStop(0,"#333"),a.addColorStop(.6,"#ccc"),a.addColorStop(.8,"#efefef"),a.addColorStop(1,"#fff"),e.fillStyle=a,e.globalAlpha=.5,e.arc(t,n,o,0,2*Math.PI),e.fill(),e.closePath()}(t,n,o)})}()},mounteElement(){let t=document.getElementsByClassName("theme-container")[0],e=document.getElementById("bubble");t.append(e)}}},a=(n(646),n(0)),l=Object(a.a)(o,(function(){return(0,this._self._c)("canvas",{attrs:{id:"bubble"}})}),[],!1,null,null,null);e.default=l.exports}}]);