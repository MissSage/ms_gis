import"./vendor.ad8aa1ba.js";function w(c,e,n,t){const o=c.clone(),r=1<<o.level,l=o.col+e,a=o.row+n;return t&&l<0?(o.col=l+r,o.world-=1):l>=r?(o.col=l-r,o.world+=1):o.col=l,o.row=a,o}export{w as l};
