import{w as ln,c as W}from"./path-53f90ab3.js";import{aS as an,aT as $,aU as S,aV as rn,aW as y,V as on,aX as z,aY as _,aZ as un,a_ as t,a$ as sn,b0 as tn,b1 as fn}from"./mermaid.core-7b112407.js";function cn(l){return l.innerRadius}function yn(l){return l.outerRadius}function gn(l){return l.startAngle}function mn(l){return l.endAngle}function pn(l){return l&&l.padAngle}function dn(l,h,D,V,v,A,X,a){var E=D-l,i=V-h,n=X-v,m=a-A,r=m*E-n*i;if(!(r*r<y))return r=(n*(h-A)-m*(l-v))/r,[l+r*E,h+r*i]}function J(l,h,D,V,v,A,X){var a=l-D,E=h-V,i=(X?A:-A)/z(a*a+E*E),n=i*E,m=-i*a,r=l+n,s=h+m,f=D+n,c=V+m,Y=(r+f)/2,o=(s+c)/2,p=f-r,g=c-s,R=p*p+g*g,T=v-A,P=r*c-f*s,I=(g<0?-1:1)*z(fn(0,T*T*R-P*P)),O=(P*g-p*I)/R,U=(-P*p-g*I)/R,w=(P*g+p*I)/R,d=(-P*p+g*I)/R,x=O-Y,e=U-o,u=w-Y,Z=d-o;return x*x+e*e>u*u+Z*Z&&(O=w,U=d),{cx:O,cy:U,x01:-n,y01:-m,x11:O*(v/T-1),y11:U*(v/T-1)}}function vn(){var l=cn,h=yn,D=W(0),V=null,v=gn,A=mn,X=pn,a=null,E=ln(i);function i(){var n,m,r=+l.apply(this,arguments),s=+h.apply(this,arguments),f=v.apply(this,arguments)-rn,c=A.apply(this,arguments)-rn,Y=un(c-f),o=c>f;if(a||(a=n=E()),s<r&&(m=s,s=r,r=m),!(s>y))a.moveTo(0,0);else if(Y>on-y)a.moveTo(s*$(f),s*S(f)),a.arc(0,0,s,f,c,!o),r>y&&(a.moveTo(r*$(c),r*S(c)),a.arc(0,0,r,c,f,o));else{var p=f,g=c,R=f,T=c,P=Y,I=Y,O=X.apply(this,arguments)/2,U=O>y&&(V?+V.apply(this,arguments):z(r*r+s*s)),w=_(un(s-r)/2,+D.apply(this,arguments)),d=w,x=w,e,u;if(U>y){var Z=sn(U/r*S(O)),B=sn(U/s*S(O));(P-=Z*2)>y?(Z*=o?1:-1,R+=Z,T-=Z):(P=0,R=T=(f+c)/2),(I-=B*2)>y?(B*=o?1:-1,p+=B,g-=B):(I=0,p=g=(f+c)/2)}var b=s*$(p),j=s*S(p),C=r*$(T),F=r*S(T);if(w>y){var G=s*$(g),H=s*S(g),K=r*$(R),L=r*S(R),q;if(Y<an)if(q=dn(b,j,K,L,G,H,C,F)){var M=b-q[0],N=j-q[1],Q=G-q[0],k=H-q[1],nn=1/S(tn((M*Q+N*k)/(z(M*M+N*N)*z(Q*Q+k*k)))/2),en=z(q[0]*q[0]+q[1]*q[1]);d=_(w,(r-en)/(nn-1)),x=_(w,(s-en)/(nn+1))}else d=x=0}I>y?x>y?(e=J(K,L,b,j,s,x,o),u=J(G,H,C,F,s,x,o),a.moveTo(e.cx+e.x01,e.cy+e.y01),x<w?a.arc(e.cx,e.cy,x,t(e.y01,e.x01),t(u.y01,u.x01),!o):(a.arc(e.cx,e.cy,x,t(e.y01,e.x01),t(e.y11,e.x11),!o),a.arc(0,0,s,t(e.cy+e.y11,e.cx+e.x11),t(u.cy+u.y11,u.cx+u.x11),!o),a.arc(u.cx,u.cy,x,t(u.y11,u.x11),t(u.y01,u.x01),!o))):(a.moveTo(b,j),a.arc(0,0,s,p,g,!o)):a.moveTo(b,j),!(r>y)||!(P>y)?a.lineTo(C,F):d>y?(e=J(C,F,G,H,r,-d,o),u=J(b,j,K,L,r,-d,o),a.lineTo(e.cx+e.x01,e.cy+e.y01),d<w?a.arc(e.cx,e.cy,d,t(e.y01,e.x01),t(u.y01,u.x01),!o):(a.arc(e.cx,e.cy,d,t(e.y01,e.x01),t(e.y11,e.x11),!o),a.arc(0,0,r,t(e.cy+e.y11,e.cx+e.x11),t(u.cy+u.y11,u.cx+u.x11),o),a.arc(u.cx,u.cy,d,t(u.y11,u.x11),t(u.y01,u.x01),!o))):a.arc(0,0,r,T,R,o)}if(a.closePath(),n)return a=null,n+""||null}return i.centroid=function(){var n=(+l.apply(this,arguments)+ +h.apply(this,arguments))/2,m=(+v.apply(this,arguments)+ +A.apply(this,arguments))/2-an/2;return[$(m)*n,S(m)*n]},i.innerRadius=function(n){return arguments.length?(l=typeof n=="function"?n:W(+n),i):l},i.outerRadius=function(n){return arguments.length?(h=typeof n=="function"?n:W(+n),i):h},i.cornerRadius=function(n){return arguments.length?(D=typeof n=="function"?n:W(+n),i):D},i.padRadius=function(n){return arguments.length?(V=n==null?null:typeof n=="function"?n:W(+n),i):V},i.startAngle=function(n){return arguments.length?(v=typeof n=="function"?n:W(+n),i):v},i.endAngle=function(n){return arguments.length?(A=typeof n=="function"?n:W(+n),i):A},i.padAngle=function(n){return arguments.length?(X=typeof n=="function"?n:W(+n),i):X},i.context=function(n){return arguments.length?(a=n??null,i):a},i}export{vn as a};
