/*!
 * @pixi-essentials/bounds - v2.0.0
 * Compiled Wed, 19 Aug 2020 15:26:43 UTC
 *
 * @pixi-essentials/bounds is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 * 
 * Copyright 2019-2020, Shukant K. Pal, All Rights Reserved
 */
this.PIXI=this.PIXI||{};var _pixi_essentials_bounds=function(t,i){"use strict";class h{constructor(t=0,h=0,s=0,e=0){this._x=Number(t),this._y=Number(h),this._width=Number(s),this._height=Number(e),this._hull=[new i.Point,new i.Point,new i.Point,new i.Point],this.currentID=-1,this.dirtyID=0}get x(){return this._x}set x(t){this._x=t,this.dirtyID++}get y(){return this._y}set y(t){this._y=t,this.dirtyID++}get width(){return this._width}set width(t){this._width=t,this.dirtyID++}get height(){return this._height}set height(t){this._height=t,this.dirtyID++}get hull(){return this.isDirty()&&this.update(),this._hull}get topLeft(){return this.isDirty()&&this.update(),this._hull[0]}get topRight(){return this.isDirty()&&this.update(),this._hull[1]}get bottomRight(){return this.isDirty()&&this.update(),this._hull[2]}get bottomLeft(){return this.isDirty()&&this.update(),this._hull[3]}isDirty(){return this.currentID!==this.dirtyID}update(){const[t,i,h,s]=this._hull;t.set(this._x,this._y),i.set(this._x+this._width,this._y),h.set(this._x+this._width,this._y+this._height),s.set(this._x,this._y+this._height)}get left(){return this.x}get right(){return this.x+this.width}get top(){return this.y}get bottom(){return this.y+this.height}clone(){return new h(this.x,this.y,this.width,this.height)}copyFrom(t){return this.x=t.x,this.y=t.y,this.width=t.width,this.height=t.height,this}copyTo(t){return t.x=this.x,t.y=this.y,t.width=this.width,t.height=this.height,t}contains(t,i){return!(this.width<=0||this.height<=0)&&(t>=this.x&&t<this.x+this.width&&i>=this.y&&i<this.y+this.height)}equals(t){return!!t&&(t.x===this.x&&t.y===this.y&&t.width===this.width&&t.height===this.height)}pad(t=0,i=t){return this.x-=t,this.y-=i,this.width+=2*t,this.height+=2*i,this}fit(t){const i=Math.max(this.x,t.x),h=Math.min(this.x+this.width,t.x+t.width),s=Math.max(this.y,t.y),e=Math.min(this.y+this.height,t.y+t.height);return this.x=i,this.width=Math.max(h-i,0),this.y=s,this.height=Math.max(e-s,0),this}ceil(t=1,i=.001){const h=Math.ceil((this.x+this.width-i)*t)/t,s=Math.ceil((this.y+this.height-i)*t)/t;return this.x=Math.floor((this.x+i)*t)/t,this.y=Math.floor((this.y+i)*t)/t,this.width=h-this.x,this.height=s-this.y,this}enlarge(t){const i=Math.min(this.x,t.x),h=Math.max(this.x+this.width,t.x+t.width),s=Math.min(this.y,t.y),e=Math.max(this.y+this.height,t.y+t.height);return this.x=i,this.width=h-i,this.y=s,this.height=e-s,this}}return t.AxisAlignedBounds=h,t.OrientedBounds=class{constructor(t=0,s=0,e=0,r=0,n=0){t instanceof h&&(n=s||0,s=t.y,e=t.width,r=t.height,t=t.x),this.innerBounds=new h(t,s,e,r),this._rotation=n,this._center=new i.ObservablePoint(this.updateCenter,this),this._hull=[new i.Point,new i.Point,new i.Point,new i.Point],this._matrix=new i.Matrix,this.currentID=-1,this.dirtyID=0}get rotation(){return this._rotation}set rotation(t){this._rotation=t,this.dirtyID++}get center(){return this.isDirty()&&this.update(),this._center}set center(t){this.center.copyFrom(t)}get hull(){return this.isDirty()&&this.update(),this._hull}get topLeft(){return this.isDirty()&&this.update(),this._hull[0]}get topRight(){return this.isDirty()&&this.update(),this._hull[1]}get bottomRight(){return this.isDirty()&&this.update(),this._hull[2]}get bottomLeft(){return this.isDirty()&&this.update(),this._hull[3]}equals(t){return!!t&&(this.innerBounds.equals(t.innerBounds)&&this.rotation===t.rotation)}copyFrom(t){return this.innerBounds.copyFrom(t.innerBounds),this.rotation=t.rotation,this.dirtyID++,this}isDirty(){return this.currentID!==this.dirtyID+this.innerBounds.dirtyID}update(){const t=this.innerBounds,i=this._rotation,h=this._center,[s,e,r,n]=this._hull,u=this._matrix;h._x=t.x+t.width/2,h._y=t.y+t.height/2,u.identity().translate(-h.x,-h.y).rotate(i).translate(h.x,h.y),u.apply(t.topLeft,s),u.apply(t.topRight,e),u.apply(t.bottomRight,r),u.apply(t.bottomLeft,n),this.currentID=this.dirtyID+this.innerBounds.dirtyID}updateCenter(){const t=this.center,i=this.innerBounds;i.x=t.x-i.width/2,i.y=t.y-i.height/2}},t}({},PIXI);Object.assign(this.PIXI,_pixi_essentials_bounds);
//# sourceMappingURL=bounds.js.map
