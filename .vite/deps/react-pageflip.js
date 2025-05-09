import {
  require_react
} from "./chunk-WNPTCGAH.js";
import {
  __commonJS,
  __toESM
} from "./chunk-5WRI5ZAA.js";

// node_modules/page-flip/dist/js/page-flip.browser.js
var require_page_flip_browser = __commonJS({
  "node_modules/page-flip/dist/js/page-flip.browser.js"(exports, module) {
    !function(t, e) {
      "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t = t || self).St = {});
    }(exports, function(t) {
      "use strict";
      class e {
        constructor(t2, e2) {
          this.state = { angle: 0, area: [], position: { x: 0, y: 0 }, hardAngle: 0, hardDrawingAngle: 0 }, this.createdDensity = e2, this.nowDrawingDensity = this.createdDensity, this.render = t2;
        }
        setDensity(t2) {
          this.createdDensity = t2, this.nowDrawingDensity = t2;
        }
        setDrawingDensity(t2) {
          this.nowDrawingDensity = t2;
        }
        setPosition(t2) {
          this.state.position = t2;
        }
        setAngle(t2) {
          this.state.angle = t2;
        }
        setArea(t2) {
          this.state.area = t2;
        }
        setHardDrawingAngle(t2) {
          this.state.hardDrawingAngle = t2;
        }
        setHardAngle(t2) {
          this.state.hardAngle = t2, this.state.hardDrawingAngle = t2;
        }
        setOrientation(t2) {
          this.orientation = t2;
        }
        getDrawingDensity() {
          return this.nowDrawingDensity;
        }
        getDensity() {
          return this.createdDensity;
        }
        getHardAngle() {
          return this.state.hardAngle;
        }
      }
      class i extends e {
        constructor(t2, e2, i2) {
          super(t2, i2), this.image = null, this.isLoad = false, this.loadingAngle = 0, this.image = new Image(), this.image.src = e2;
        }
        draw(t2) {
          const e2 = this.render.getContext(), i2 = this.render.convertToGlobal(this.state.position), s2 = this.render.getRect().pageWidth, n2 = this.render.getRect().height;
          e2.save(), e2.translate(i2.x, i2.y), e2.beginPath();
          for (let t3 of this.state.area) null !== t3 && (t3 = this.render.convertToGlobal(t3), e2.lineTo(t3.x - i2.x, t3.y - i2.y));
          e2.rotate(this.state.angle), e2.clip(), this.isLoad ? e2.drawImage(this.image, 0, 0, s2, n2) : this.drawLoader(e2, { x: 0, y: 0 }, s2, n2), e2.restore();
        }
        simpleDraw(t2) {
          const e2 = this.render.getRect(), i2 = this.render.getContext(), s2 = e2.pageWidth, n2 = e2.height, h2 = 1 === t2 ? e2.left + e2.pageWidth : e2.left, r2 = e2.top;
          this.isLoad ? i2.drawImage(this.image, h2, r2, s2, n2) : this.drawLoader(i2, { x: h2, y: r2 }, s2, n2);
        }
        drawLoader(t2, e2, i2, s2) {
          t2.beginPath(), t2.strokeStyle = "rgb(200, 200, 200)", t2.fillStyle = "rgb(255, 255, 255)", t2.lineWidth = 1, t2.rect(e2.x + 1, e2.y + 1, i2 - 1, s2 - 1), t2.stroke(), t2.fill();
          const n2 = { x: e2.x + i2 / 2, y: e2.y + s2 / 2 };
          t2.beginPath(), t2.lineWidth = 10, t2.arc(n2.x, n2.y, 20, this.loadingAngle, 3 * Math.PI / 2 + this.loadingAngle), t2.stroke(), t2.closePath(), this.loadingAngle += 0.07, this.loadingAngle >= 2 * Math.PI && (this.loadingAngle = 0);
        }
        load() {
          this.isLoad || (this.image.onload = () => {
            this.isLoad = true;
          });
        }
        newTemporaryCopy() {
          return this;
        }
        getTemporaryCopy() {
          return this;
        }
        hideTemporaryCopy() {
        }
      }
      class s {
        constructor(t2, e2) {
          this.pages = [], this.currentPageIndex = 0, this.currentSpreadIndex = 0, this.landscapeSpread = [], this.portraitSpread = [], this.render = e2, this.app = t2, this.currentPageIndex = 0, this.isShowCover = this.app.getSettings().showCover;
        }
        destroy() {
          this.pages = [];
        }
        createSpread() {
          this.landscapeSpread = [], this.portraitSpread = [];
          for (let t3 = 0; t3 < this.pages.length; t3++) this.portraitSpread.push([t3]);
          let t2 = 0;
          this.isShowCover && (this.pages[0].setDensity("hard"), this.landscapeSpread.push([t2]), t2++);
          for (let e2 = t2; e2 < this.pages.length; e2 += 2) e2 < this.pages.length - 1 ? this.landscapeSpread.push([e2, e2 + 1]) : (this.landscapeSpread.push([e2]), this.pages[e2].setDensity("hard"));
        }
        getSpread() {
          return "landscape" === this.render.getOrientation() ? this.landscapeSpread : this.portraitSpread;
        }
        getSpreadIndexByPage(t2) {
          const e2 = this.getSpread();
          for (let i2 = 0; i2 < e2.length; i2++) if (t2 === e2[i2][0] || t2 === e2[i2][1]) return i2;
          return null;
        }
        getPageCount() {
          return this.pages.length;
        }
        getPages() {
          return this.pages;
        }
        getPage(t2) {
          if (t2 >= 0 && t2 < this.pages.length) return this.pages[t2];
          throw new Error("Invalid page number");
        }
        nextBy(t2) {
          const e2 = this.pages.indexOf(t2);
          return e2 < this.pages.length - 1 ? this.pages[e2 + 1] : null;
        }
        prevBy(t2) {
          const e2 = this.pages.indexOf(t2);
          return e2 > 0 ? this.pages[e2 - 1] : null;
        }
        getFlippingPage(t2) {
          const e2 = this.currentSpreadIndex;
          if ("portrait" === this.render.getOrientation()) return 0 === t2 ? this.pages[e2].newTemporaryCopy() : this.pages[e2 - 1];
          {
            const i2 = 0 === t2 ? this.getSpread()[e2 + 1] : this.getSpread()[e2 - 1];
            return 1 === i2.length || 0 === t2 ? this.pages[i2[0]] : this.pages[i2[1]];
          }
        }
        getBottomPage(t2) {
          const e2 = this.currentSpreadIndex;
          if ("portrait" === this.render.getOrientation()) return 0 === t2 ? this.pages[e2 + 1] : this.pages[e2 - 1];
          {
            const i2 = 0 === t2 ? this.getSpread()[e2 + 1] : this.getSpread()[e2 - 1];
            return 1 === i2.length ? this.pages[i2[0]] : 0 === t2 ? this.pages[i2[1]] : this.pages[i2[0]];
          }
        }
        showNext() {
          this.currentSpreadIndex < this.getSpread().length && (this.currentSpreadIndex++, this.showSpread());
        }
        showPrev() {
          this.currentSpreadIndex > 0 && (this.currentSpreadIndex--, this.showSpread());
        }
        getCurrentPageIndex() {
          return this.currentPageIndex;
        }
        show(t2 = null) {
          if (null === t2 && (t2 = this.currentPageIndex), t2 < 0 || t2 >= this.pages.length) return;
          const e2 = this.getSpreadIndexByPage(t2);
          null !== e2 && (this.currentSpreadIndex = e2, this.showSpread());
        }
        getCurrentSpreadIndex() {
          return this.currentSpreadIndex;
        }
        setCurrentSpreadIndex(t2) {
          if (!(t2 >= 0 && t2 < this.getSpread().length)) throw new Error("Invalid page");
          this.currentSpreadIndex = t2;
        }
        showSpread() {
          const t2 = this.getSpread()[this.currentSpreadIndex];
          2 === t2.length ? (this.render.setLeftPage(this.pages[t2[0]]), this.render.setRightPage(this.pages[t2[1]])) : "landscape" === this.render.getOrientation() && t2[0] === this.pages.length - 1 ? (this.render.setLeftPage(this.pages[t2[0]]), this.render.setRightPage(null)) : (this.render.setLeftPage(null), this.render.setRightPage(this.pages[t2[0]])), this.currentPageIndex = t2[0], this.app.updatePageIndex(this.currentPageIndex);
        }
      }
      class n extends s {
        constructor(t2, e2, i2) {
          super(t2, e2), this.imagesHref = i2;
        }
        load() {
          for (const t2 of this.imagesHref) {
            const e2 = new i(this.render, t2, "soft");
            e2.load(), this.pages.push(e2);
          }
          this.createSpread();
        }
      }
      class h {
        static GetDistanceBetweenTwoPoint(t2, e2) {
          return null === t2 || null === e2 ? 1 / 0 : Math.sqrt(Math.pow(e2.x - t2.x, 2) + Math.pow(e2.y - t2.y, 2));
        }
        static GetSegmentLength(t2) {
          return h.GetDistanceBetweenTwoPoint(t2[0], t2[1]);
        }
        static GetAngleBetweenTwoLine(t2, e2) {
          const i2 = t2[0].y - t2[1].y, s2 = e2[0].y - e2[1].y, n2 = t2[1].x - t2[0].x, h2 = e2[1].x - e2[0].x;
          return Math.acos((i2 * s2 + n2 * h2) / (Math.sqrt(i2 * i2 + n2 * n2) * Math.sqrt(s2 * s2 + h2 * h2)));
        }
        static PointInRect(t2, e2) {
          return null === e2 ? null : e2.x >= t2.left && e2.x <= t2.width + t2.left && e2.y >= t2.top && e2.y <= t2.top + t2.height ? e2 : null;
        }
        static GetRotatedPoint(t2, e2, i2) {
          return { x: t2.x * Math.cos(i2) + t2.y * Math.sin(i2) + e2.x, y: t2.y * Math.cos(i2) - t2.x * Math.sin(i2) + e2.y };
        }
        static LimitPointToCircle(t2, e2, i2) {
          if (h.GetDistanceBetweenTwoPoint(t2, i2) <= e2) return i2;
          const s2 = t2.x, n2 = t2.y, r2 = i2.x, o2 = i2.y;
          let a2 = Math.sqrt(Math.pow(e2, 2) * Math.pow(s2 - r2, 2) / (Math.pow(s2 - r2, 2) + Math.pow(n2 - o2, 2))) + s2;
          i2.x < 0 && (a2 *= -1);
          let g2 = (a2 - s2) * (n2 - o2) / (s2 - r2) + n2;
          return s2 - r2 + n2 === 0 && (g2 = e2), { x: a2, y: g2 };
        }
        static GetIntersectBetweenTwoSegment(t2, e2, i2) {
          return h.PointInRect(t2, h.GetIntersectBeetwenTwoLine(e2, i2));
        }
        static GetIntersectBeetwenTwoLine(t2, e2) {
          const i2 = t2[0].y - t2[1].y, s2 = e2[0].y - e2[1].y, n2 = t2[1].x - t2[0].x, h2 = e2[1].x - e2[0].x, r2 = t2[0].x * t2[1].y - t2[1].x * t2[0].y, o2 = e2[0].x * e2[1].y - e2[1].x * e2[0].y, a2 = i2 * o2 - s2 * r2, g2 = n2 * o2 - h2 * r2, l2 = -(r2 * h2 - o2 * n2) / (i2 * h2 - s2 * n2), d2 = -(i2 * o2 - s2 * r2) / (i2 * h2 - s2 * n2);
          if (isFinite(l2) && isFinite(d2)) return { x: l2, y: d2 };
          if (Math.abs(a2 - g2) < 0.1) throw new Error("Segment included");
          return null;
        }
        static GetCordsFromTwoPoint(t2, e2) {
          const i2 = Math.abs(t2.x - e2.x), s2 = Math.abs(t2.y - e2.y), n2 = Math.max(i2, s2), h2 = [t2];
          function r2(t3, e3, i3, s3, n3) {
            return e3 > t3 ? t3 + n3 * (i3 / s3) : e3 < t3 ? t3 - n3 * (i3 / s3) : t3;
          }
          for (let o2 = 1; o2 <= n2; o2 += 1) h2.push({ x: r2(t2.x, e2.x, i2, n2, o2), y: r2(t2.y, e2.y, s2, n2, o2) });
          return h2;
        }
      }
      class r extends e {
        constructor(t2, e2, i2) {
          super(t2, i2), this.copiedElement = null, this.temporaryCopy = null, this.isLoad = false, this.element = e2, this.element.classList.add("stf__item"), this.element.classList.add("--" + i2);
        }
        newTemporaryCopy() {
          return "hard" === this.nowDrawingDensity ? this : (null === this.temporaryCopy && (this.copiedElement = this.element.cloneNode(true), this.element.parentElement.appendChild(this.copiedElement), this.temporaryCopy = new r(this.render, this.copiedElement, this.nowDrawingDensity)), this.getTemporaryCopy());
        }
        getTemporaryCopy() {
          return this.temporaryCopy;
        }
        hideTemporaryCopy() {
          null !== this.temporaryCopy && (this.copiedElement.remove(), this.copiedElement = null, this.temporaryCopy = null);
        }
        draw(t2) {
          const e2 = t2 || this.nowDrawingDensity, i2 = this.render.convertToGlobal(this.state.position), s2 = this.render.getRect().pageWidth, n2 = this.render.getRect().height;
          this.element.classList.remove("--simple");
          const h2 = `
            display: block;
            z-index: ${this.element.style.zIndex};
            left: 0;
            top: 0;
            width: ${s2}px;
            height: ${n2}px;
        `;
          "hard" === e2 ? this.drawHard(h2) : this.drawSoft(i2, h2);
        }
        drawHard(t2 = "") {
          const e2 = this.render.getRect().left + this.render.getRect().width / 2, i2 = this.state.hardDrawingAngle, s2 = t2 + "\n                backface-visibility: hidden;\n                -webkit-backface-visibility: hidden;\n                clip-path: none;\n                -webkit-clip-path: none;\n            " + (0 === this.orientation ? `transform-origin: ${this.render.getRect().pageWidth}px 0; 
                   transform: translate3d(0, 0, 0) rotateY(${i2}deg);` : `transform-origin: 0 0; 
                   transform: translate3d(${e2}px, 0, 0) rotateY(${i2}deg);`);
          this.element.style.cssText = s2;
        }
        drawSoft(t2, e2 = "") {
          let i2 = "polygon( ";
          for (const t3 of this.state.area) if (null !== t3) {
            let e3 = 1 === this.render.getDirection() ? { x: -t3.x + this.state.position.x, y: t3.y - this.state.position.y } : { x: t3.x - this.state.position.x, y: t3.y - this.state.position.y };
            e3 = h.GetRotatedPoint(e3, { x: 0, y: 0 }, this.state.angle), i2 += e3.x + "px " + e3.y + "px, ";
          }
          i2 = i2.slice(0, -2), i2 += ")";
          const s2 = e2 + `transform-origin: 0 0; clip-path: ${i2}; -webkit-clip-path: ${i2};` + (this.render.isSafari() && 0 === this.state.angle ? `transform: translate(${t2.x}px, ${t2.y}px);` : `transform: translate3d(${t2.x}px, ${t2.y}px, 0) rotate(${this.state.angle}rad);`);
          this.element.style.cssText = s2;
        }
        simpleDraw(t2) {
          const e2 = this.render.getRect(), i2 = e2.pageWidth, s2 = e2.height, n2 = 1 === t2 ? e2.left + e2.pageWidth : e2.left, h2 = e2.top;
          this.element.classList.add("--simple"), this.element.style.cssText = `
            position: absolute; 
            display: block; 
            height: ${s2}px; 
            left: ${n2}px; 
            top: ${h2}px; 
            width: ${i2}px; 
            z-index: ${this.render.getSettings().startZIndex + 1};`;
        }
        getElement() {
          return this.element;
        }
        load() {
          this.isLoad = true;
        }
        setOrientation(t2) {
          super.setOrientation(t2), this.element.classList.remove("--left", "--right"), this.element.classList.add(1 === t2 ? "--right" : "--left");
        }
        setDrawingDensity(t2) {
          this.element.classList.remove("--soft", "--hard"), this.element.classList.add("--" + t2), super.setDrawingDensity(t2);
        }
      }
      class o extends s {
        constructor(t2, e2, i2, s2) {
          super(t2, e2), this.element = i2, this.pagesElement = s2;
        }
        load() {
          for (const t2 of this.pagesElement) {
            const e2 = new r(this.render, t2, "hard" === t2.dataset.density ? "hard" : "soft");
            e2.load(), this.pages.push(e2);
          }
          this.createSpread();
        }
      }
      class a {
        constructor(t2, e2, i2, s2) {
          this.direction = t2, this.corner = e2, this.topIntersectPoint = null, this.sideIntersectPoint = null, this.bottomIntersectPoint = null, this.pageWidth = parseInt(i2, 10), this.pageHeight = parseInt(s2, 10);
        }
        calc(t2) {
          try {
            return this.position = this.calcAngleAndPosition(t2), this.calculateIntersectPoint(this.position), true;
          } catch (t3) {
            return false;
          }
        }
        getFlippingClipArea() {
          const t2 = [];
          let e2 = false;
          return t2.push(this.rect.topLeft), t2.push(this.topIntersectPoint), null === this.sideIntersectPoint ? e2 = true : (t2.push(this.sideIntersectPoint), null === this.bottomIntersectPoint && (e2 = false)), t2.push(this.bottomIntersectPoint), (e2 || "bottom" === this.corner) && t2.push(this.rect.bottomLeft), t2;
        }
        getBottomClipArea() {
          const t2 = [];
          return t2.push(this.topIntersectPoint), "top" === this.corner ? t2.push({ x: this.pageWidth, y: 0 }) : (null !== this.topIntersectPoint && t2.push({ x: this.pageWidth, y: 0 }), t2.push({ x: this.pageWidth, y: this.pageHeight })), null !== this.sideIntersectPoint ? h.GetDistanceBetweenTwoPoint(this.sideIntersectPoint, this.topIntersectPoint) >= 10 && t2.push(this.sideIntersectPoint) : "top" === this.corner && t2.push({ x: this.pageWidth, y: this.pageHeight }), t2.push(this.bottomIntersectPoint), t2.push(this.topIntersectPoint), t2;
        }
        getAngle() {
          return 0 === this.direction ? -this.angle : this.angle;
        }
        getRect() {
          return this.rect;
        }
        getPosition() {
          return this.position;
        }
        getActiveCorner() {
          return 0 === this.direction ? this.rect.topLeft : this.rect.topRight;
        }
        getDirection() {
          return this.direction;
        }
        getFlippingProgress() {
          return Math.abs((this.position.x - this.pageWidth) / (2 * this.pageWidth) * 100);
        }
        getCorner() {
          return this.corner;
        }
        getBottomPagePosition() {
          return 1 === this.direction ? { x: this.pageWidth, y: 0 } : { x: 0, y: 0 };
        }
        getShadowStartPoint() {
          return "top" === this.corner ? this.topIntersectPoint : null !== this.sideIntersectPoint ? this.sideIntersectPoint : this.topIntersectPoint;
        }
        getShadowAngle() {
          const t2 = h.GetAngleBetweenTwoLine(this.getSegmentToShadowLine(), [{ x: 0, y: 0 }, { x: this.pageWidth, y: 0 }]);
          return 0 === this.direction ? t2 : Math.PI - t2;
        }
        calcAngleAndPosition(t2) {
          let e2 = t2;
          if (this.updateAngleAndGeometry(e2), e2 = "top" === this.corner ? this.checkPositionAtCenterLine(e2, { x: 0, y: 0 }, { x: 0, y: this.pageHeight }) : this.checkPositionAtCenterLine(e2, { x: 0, y: this.pageHeight }, { x: 0, y: 0 }), Math.abs(e2.x - this.pageWidth) < 1 && Math.abs(e2.y) < 1) throw new Error("Point is too small");
          return e2;
        }
        updateAngleAndGeometry(t2) {
          this.angle = this.calculateAngle(t2), this.rect = this.getPageRect(t2);
        }
        calculateAngle(t2) {
          const e2 = this.pageWidth - t2.x + 1, i2 = "bottom" === this.corner ? this.pageHeight - t2.y : t2.y;
          let s2 = 2 * Math.acos(e2 / Math.sqrt(i2 * i2 + e2 * e2));
          i2 < 0 && (s2 = -s2);
          const n2 = Math.PI - s2;
          if (!isFinite(s2) || n2 >= 0 && n2 < 3e-3) throw new Error("The G point is too small");
          return "bottom" === this.corner && (s2 = -s2), s2;
        }
        getPageRect(t2) {
          return "top" === this.corner ? this.getRectFromBasePoint([{ x: 0, y: 0 }, { x: this.pageWidth, y: 0 }, { x: 0, y: this.pageHeight }, { x: this.pageWidth, y: this.pageHeight }], t2) : this.getRectFromBasePoint([{ x: 0, y: -this.pageHeight }, { x: this.pageWidth, y: -this.pageHeight }, { x: 0, y: 0 }, { x: this.pageWidth, y: 0 }], t2);
        }
        getRectFromBasePoint(t2, e2) {
          return { topLeft: this.getRotatedPoint(t2[0], e2), topRight: this.getRotatedPoint(t2[1], e2), bottomLeft: this.getRotatedPoint(t2[2], e2), bottomRight: this.getRotatedPoint(t2[3], e2) };
        }
        getRotatedPoint(t2, e2) {
          return { x: t2.x * Math.cos(this.angle) + t2.y * Math.sin(this.angle) + e2.x, y: t2.y * Math.cos(this.angle) - t2.x * Math.sin(this.angle) + e2.y };
        }
        calculateIntersectPoint(t2) {
          const e2 = { left: -1, top: -1, width: this.pageWidth + 2, height: this.pageHeight + 2 };
          "top" === this.corner ? (this.topIntersectPoint = h.GetIntersectBetweenTwoSegment(e2, [t2, this.rect.topRight], [{ x: 0, y: 0 }, { x: this.pageWidth, y: 0 }]), this.sideIntersectPoint = h.GetIntersectBetweenTwoSegment(e2, [t2, this.rect.bottomLeft], [{ x: this.pageWidth, y: 0 }, { x: this.pageWidth, y: this.pageHeight }]), this.bottomIntersectPoint = h.GetIntersectBetweenTwoSegment(e2, [this.rect.bottomLeft, this.rect.bottomRight], [{ x: 0, y: this.pageHeight }, { x: this.pageWidth, y: this.pageHeight }])) : (this.topIntersectPoint = h.GetIntersectBetweenTwoSegment(e2, [this.rect.topLeft, this.rect.topRight], [{ x: 0, y: 0 }, { x: this.pageWidth, y: 0 }]), this.sideIntersectPoint = h.GetIntersectBetweenTwoSegment(e2, [t2, this.rect.topLeft], [{ x: this.pageWidth, y: 0 }, { x: this.pageWidth, y: this.pageHeight }]), this.bottomIntersectPoint = h.GetIntersectBetweenTwoSegment(e2, [this.rect.bottomLeft, this.rect.bottomRight], [{ x: 0, y: this.pageHeight }, { x: this.pageWidth, y: this.pageHeight }]));
        }
        checkPositionAtCenterLine(t2, e2, i2) {
          let s2 = t2;
          const n2 = h.LimitPointToCircle(e2, this.pageWidth, s2);
          s2 !== n2 && (s2 = n2, this.updateAngleAndGeometry(s2));
          const r2 = Math.sqrt(Math.pow(this.pageWidth, 2) + Math.pow(this.pageHeight, 2));
          let o2 = this.rect.bottomRight, a2 = this.rect.topLeft;
          if ("bottom" === this.corner && (o2 = this.rect.topRight, a2 = this.rect.bottomLeft), o2.x <= 0) {
            const t3 = h.LimitPointToCircle(i2, r2, a2);
            t3 !== s2 && (s2 = t3, this.updateAngleAndGeometry(s2));
          }
          return s2;
        }
        getSegmentToShadowLine() {
          const t2 = this.getShadowStartPoint();
          return [t2, t2 !== this.sideIntersectPoint && null !== this.sideIntersectPoint ? this.sideIntersectPoint : this.bottomIntersectPoint];
        }
      }
      class g {
        constructor(t2, e2) {
          this.flippingPage = null, this.bottomPage = null, this.calc = null, this.state = "read", this.render = t2, this.app = e2;
        }
        fold(t2) {
          this.setState("user_fold"), null === this.calc && this.start(t2), this.do(this.render.convertToPage(t2));
        }
        flip(t2) {
          if (this.app.getSettings().disableFlipByClick && !this.isPointOnCorners(t2)) return;
          if (null !== this.calc && this.render.finishAnimation(), !this.start(t2)) return;
          const e2 = this.getBoundsRect();
          this.setState("flipping");
          const i2 = e2.height / 10, s2 = "bottom" === this.calc.getCorner() ? e2.height - i2 : i2, n2 = "bottom" === this.calc.getCorner() ? e2.height : 0;
          this.calc.calc({ x: e2.pageWidth - i2, y: s2 }), this.animateFlippingTo({ x: e2.pageWidth - i2, y: s2 }, { x: -e2.pageWidth, y: n2 }, true);
        }
        start(t2) {
          this.reset();
          const e2 = this.render.convertToBook(t2), i2 = this.getBoundsRect(), s2 = this.getDirectionByPoint(e2), n2 = e2.y >= i2.height / 2 ? "bottom" : "top";
          if (!this.checkDirection(s2)) return false;
          try {
            if (this.flippingPage = this.app.getPageCollection().getFlippingPage(s2), this.bottomPage = this.app.getPageCollection().getBottomPage(s2), "landscape" === this.render.getOrientation()) if (1 === s2) {
              const t3 = this.app.getPageCollection().nextBy(this.flippingPage);
              null !== t3 && this.flippingPage.getDensity() !== t3.getDensity() && (this.flippingPage.setDrawingDensity("hard"), t3.setDrawingDensity("hard"));
            } else {
              const t3 = this.app.getPageCollection().prevBy(this.flippingPage);
              null !== t3 && this.flippingPage.getDensity() !== t3.getDensity() && (this.flippingPage.setDrawingDensity("hard"), t3.setDrawingDensity("hard"));
            }
            return this.render.setDirection(s2), this.calc = new a(s2, n2, i2.pageWidth.toString(10), i2.height.toString(10)), true;
          } catch (t3) {
            return false;
          }
        }
        do(t2) {
          if (null !== this.calc && this.calc.calc(t2)) {
            const t3 = this.calc.getFlippingProgress();
            this.bottomPage.setArea(this.calc.getBottomClipArea()), this.bottomPage.setPosition(this.calc.getBottomPagePosition()), this.bottomPage.setAngle(0), this.bottomPage.setHardAngle(0), this.flippingPage.setArea(this.calc.getFlippingClipArea()), this.flippingPage.setPosition(this.calc.getActiveCorner()), this.flippingPage.setAngle(this.calc.getAngle()), 0 === this.calc.getDirection() ? this.flippingPage.setHardAngle(90 * (200 - 2 * t3) / 100) : this.flippingPage.setHardAngle(-90 * (200 - 2 * t3) / 100), this.render.setPageRect(this.calc.getRect()), this.render.setBottomPage(this.bottomPage), this.render.setFlippingPage(this.flippingPage), this.render.setShadowData(this.calc.getShadowStartPoint(), this.calc.getShadowAngle(), t3, this.calc.getDirection());
          }
        }
        flipToPage(t2, e2) {
          const i2 = this.app.getPageCollection().getCurrentSpreadIndex(), s2 = this.app.getPageCollection().getSpreadIndexByPage(t2);
          try {
            s2 > i2 && (this.app.getPageCollection().setCurrentSpreadIndex(s2 - 1), this.flipNext(e2)), s2 < i2 && (this.app.getPageCollection().setCurrentSpreadIndex(s2 + 1), this.flipPrev(e2));
          } catch (t3) {
          }
        }
        flipNext(t2) {
          this.flip({ x: this.render.getRect().left + 2 * this.render.getRect().pageWidth - 10, y: "top" === t2 ? 1 : this.render.getRect().height - 2 });
        }
        flipPrev(t2) {
          this.flip({ x: 10, y: "top" === t2 ? 1 : this.render.getRect().height - 2 });
        }
        stopMove() {
          if (null === this.calc) return;
          const t2 = this.calc.getPosition(), e2 = this.getBoundsRect(), i2 = "bottom" === this.calc.getCorner() ? e2.height : 0;
          t2.x <= 0 ? this.animateFlippingTo(t2, { x: -e2.pageWidth, y: i2 }, true) : this.animateFlippingTo(t2, { x: e2.pageWidth, y: i2 }, false);
        }
        showCorner(t2) {
          if (!this.checkState("read", "fold_corner")) return;
          const e2 = this.getBoundsRect(), i2 = e2.pageWidth;
          if (this.isPointOnCorners(t2)) if (null === this.calc) {
            if (!this.start(t2)) return;
            this.setState("fold_corner"), this.calc.calc({ x: i2 - 1, y: 1 });
            const s2 = 50, n2 = "bottom" === this.calc.getCorner() ? e2.height - 1 : 1, h2 = "bottom" === this.calc.getCorner() ? e2.height - s2 : s2;
            this.animateFlippingTo({ x: i2 - 1, y: n2 }, { x: i2 - s2, y: h2 }, false, false);
          } else this.do(this.render.convertToPage(t2));
          else this.setState("read"), this.render.finishAnimation(), this.stopMove();
        }
        animateFlippingTo(t2, e2, i2, s2 = true) {
          const n2 = h.GetCordsFromTwoPoint(t2, e2), r2 = [];
          for (const t3 of n2) r2.push(() => this.do(t3));
          const o2 = this.getAnimationDuration(n2.length);
          this.render.startAnimation(r2, o2, () => {
            this.calc && (i2 && (1 === this.calc.getDirection() ? this.app.turnToPrevPage() : this.app.turnToNextPage()), s2 && (this.render.setBottomPage(null), this.render.setFlippingPage(null), this.render.clearShadow(), this.setState("read"), this.reset()));
          });
        }
        getCalculation() {
          return this.calc;
        }
        getState() {
          return this.state;
        }
        setState(t2) {
          this.state !== t2 && (this.app.updateState(t2), this.state = t2);
        }
        getDirectionByPoint(t2) {
          const e2 = this.getBoundsRect();
          if ("portrait" === this.render.getOrientation()) {
            if (t2.x - e2.pageWidth <= e2.width / 5) return 1;
          } else if (t2.x < e2.width / 2) return 1;
          return 0;
        }
        getAnimationDuration(t2) {
          const e2 = this.app.getSettings().flippingTime;
          return t2 >= 1e3 ? e2 : t2 / 1e3 * e2;
        }
        checkDirection(t2) {
          return 0 === t2 ? this.app.getCurrentPageIndex() < this.app.getPageCount() - 1 : this.app.getCurrentPageIndex() >= 1;
        }
        reset() {
          this.calc = null, this.flippingPage = null, this.bottomPage = null;
        }
        getBoundsRect() {
          return this.render.getRect();
        }
        checkState(...t2) {
          for (const e2 of t2) if (this.state === e2) return true;
          return false;
        }
        isPointOnCorners(t2) {
          const e2 = this.getBoundsRect(), i2 = e2.pageWidth, s2 = Math.sqrt(Math.pow(i2, 2) + Math.pow(e2.height, 2)) / 5, n2 = this.render.convertToBook(t2);
          return n2.x > 0 && n2.y > 0 && n2.x < e2.width && n2.y < e2.height && (n2.x < s2 || n2.x > e2.width - s2) && (n2.y < s2 || n2.y > e2.height - s2);
        }
      }
      class l {
        constructor(t2, e2) {
          this.leftPage = null, this.rightPage = null, this.flippingPage = null, this.bottomPage = null, this.direction = null, this.orientation = null, this.shadow = null, this.animation = null, this.pageRect = null, this.boundsRect = null, this.timer = 0, this.safari = false, this.setting = e2, this.app = t2;
          const i2 = new RegExp("Version\\/[\\d\\.]+.*Safari/");
          this.safari = null !== i2.exec(window.navigator.userAgent);
        }
        render(t2) {
          if (null !== this.animation) {
            const e2 = Math.round((t2 - this.animation.startedAt) / this.animation.durationFrame);
            e2 < this.animation.frames.length ? this.animation.frames[e2]() : (this.animation.onAnimateEnd(), this.animation = null);
          }
          this.timer = t2, this.drawFrame();
        }
        start() {
          this.update();
          const t2 = (e2) => {
            this.render(e2), requestAnimationFrame(t2);
          };
          requestAnimationFrame(t2);
        }
        startAnimation(t2, e2, i2) {
          this.finishAnimation(), this.animation = { frames: t2, duration: e2, durationFrame: e2 / t2.length, onAnimateEnd: i2, startedAt: this.timer };
        }
        finishAnimation() {
          null !== this.animation && (this.animation.frames[this.animation.frames.length - 1](), null !== this.animation.onAnimateEnd && this.animation.onAnimateEnd()), this.animation = null;
        }
        update() {
          this.boundsRect = null;
          const t2 = this.calculateBoundsRect();
          this.orientation !== t2 && (this.orientation = t2, this.app.updateOrientation(t2));
        }
        calculateBoundsRect() {
          let t2 = "landscape";
          const e2 = this.getBlockWidth(), i2 = e2 / 2, s2 = this.getBlockHeight() / 2, n2 = this.setting.width / this.setting.height;
          let h2 = this.setting.width, r2 = this.setting.height, o2 = i2 - h2;
          return "stretch" === this.setting.size ? (e2 < 2 * this.setting.minWidth && this.app.getSettings().usePortrait && (t2 = "portrait"), h2 = "portrait" === t2 ? this.getBlockWidth() : this.getBlockWidth() / 2, h2 > this.setting.maxWidth && (h2 = this.setting.maxWidth), r2 = h2 / n2, r2 > this.getBlockHeight() && (r2 = this.getBlockHeight(), h2 = r2 * n2), o2 = "portrait" === t2 ? i2 - h2 / 2 - h2 : i2 - h2) : e2 < 2 * h2 && this.app.getSettings().usePortrait && (t2 = "portrait", o2 = i2 - h2 / 2 - h2), this.boundsRect = { left: o2, top: s2 - r2 / 2, width: 2 * h2, height: r2, pageWidth: h2 }, t2;
        }
        setShadowData(t2, e2, i2, s2) {
          if (!this.app.getSettings().drawShadow) return;
          const n2 = 100 * this.getSettings().maxShadowOpacity;
          this.shadow = { pos: t2, angle: e2, width: 3 * this.getRect().pageWidth / 4 * i2 / 100, opacity: (100 - i2) * n2 / 100 / 100, direction: s2, progress: 2 * i2 };
        }
        clearShadow() {
          this.shadow = null;
        }
        getBlockWidth() {
          return this.app.getUI().getDistElement().offsetWidth;
        }
        getBlockHeight() {
          return this.app.getUI().getDistElement().offsetHeight;
        }
        getDirection() {
          return this.direction;
        }
        getRect() {
          return null === this.boundsRect && this.calculateBoundsRect(), this.boundsRect;
        }
        getSettings() {
          return this.app.getSettings();
        }
        getOrientation() {
          return this.orientation;
        }
        setPageRect(t2) {
          this.pageRect = t2;
        }
        setDirection(t2) {
          this.direction = t2;
        }
        setRightPage(t2) {
          null !== t2 && t2.setOrientation(1), this.rightPage = t2;
        }
        setLeftPage(t2) {
          null !== t2 && t2.setOrientation(0), this.leftPage = t2;
        }
        setBottomPage(t2) {
          null !== t2 && t2.setOrientation(1 === this.direction ? 0 : 1), this.bottomPage = t2;
        }
        setFlippingPage(t2) {
          null !== t2 && t2.setOrientation(0 === this.direction && "portrait" !== this.orientation ? 0 : 1), this.flippingPage = t2;
        }
        convertToBook(t2) {
          const e2 = this.getRect();
          return { x: t2.x - e2.left, y: t2.y - e2.top };
        }
        isSafari() {
          return this.safari;
        }
        convertToPage(t2, e2) {
          e2 || (e2 = this.direction);
          const i2 = this.getRect();
          return { x: 0 === e2 ? t2.x - i2.left - i2.width / 2 : i2.width / 2 - t2.x + i2.left, y: t2.y - i2.top };
        }
        convertToGlobal(t2, e2) {
          if (e2 || (e2 = this.direction), null == t2) return null;
          const i2 = this.getRect();
          return { x: 0 === e2 ? t2.x + i2.left + i2.width / 2 : i2.width / 2 - t2.x + i2.left, y: t2.y + i2.top };
        }
        convertRectToGlobal(t2, e2) {
          return e2 || (e2 = this.direction), { topLeft: this.convertToGlobal(t2.topLeft, e2), topRight: this.convertToGlobal(t2.topRight, e2), bottomLeft: this.convertToGlobal(t2.bottomLeft, e2), bottomRight: this.convertToGlobal(t2.bottomRight, e2) };
        }
      }
      class d extends l {
        constructor(t2, e2, i2) {
          super(t2, e2), this.canvas = i2, this.ctx = i2.getContext("2d");
        }
        getContext() {
          return this.ctx;
        }
        reload() {
        }
        drawFrame() {
          this.clear(), "portrait" !== this.orientation && null != this.leftPage && this.leftPage.simpleDraw(0), null != this.rightPage && this.rightPage.simpleDraw(1), null != this.bottomPage && this.bottomPage.draw(), this.drawBookShadow(), null != this.flippingPage && this.flippingPage.draw(), null != this.shadow && (this.drawOuterShadow(), this.drawInnerShadow());
          const t2 = this.getRect();
          "portrait" === this.orientation && (this.ctx.beginPath(), this.ctx.rect(t2.left + t2.pageWidth, t2.top, t2.width, t2.height), this.ctx.clip());
        }
        drawBookShadow() {
          const t2 = this.getRect();
          this.ctx.save(), this.ctx.beginPath();
          const e2 = t2.width / 20;
          this.ctx.rect(t2.left, t2.top, t2.width, t2.height);
          const i2 = { x: t2.left + t2.width / 2 - e2 / 2, y: 0 };
          this.ctx.translate(i2.x, i2.y);
          const s2 = this.ctx.createLinearGradient(0, 0, e2, 0);
          s2.addColorStop(0, "rgba(0, 0, 0, 0)"), s2.addColorStop(0.4, "rgba(0, 0, 0, 0.2)"), s2.addColorStop(0.49, "rgba(0, 0, 0, 0.1)"), s2.addColorStop(0.5, "rgba(0, 0, 0, 0.5)"), s2.addColorStop(0.51, "rgba(0, 0, 0, 0.4)"), s2.addColorStop(1, "rgba(0, 0, 0, 0)"), this.ctx.clip(), this.ctx.fillStyle = s2, this.ctx.fillRect(0, 0, e2, 2 * t2.height), this.ctx.restore();
        }
        drawOuterShadow() {
          const t2 = this.getRect();
          this.ctx.save(), this.ctx.beginPath(), this.ctx.rect(t2.left, t2.top, t2.width, t2.height);
          const e2 = this.convertToGlobal({ x: this.shadow.pos.x, y: this.shadow.pos.y });
          this.ctx.translate(e2.x, e2.y), this.ctx.rotate(Math.PI + this.shadow.angle + Math.PI / 2);
          const i2 = this.ctx.createLinearGradient(0, 0, this.shadow.width, 0);
          0 === this.shadow.direction ? (this.ctx.translate(0, -100), i2.addColorStop(0, "rgba(0, 0, 0, " + this.shadow.opacity + ")"), i2.addColorStop(1, "rgba(0, 0, 0, 0)")) : (this.ctx.translate(-this.shadow.width, -100), i2.addColorStop(0, "rgba(0, 0, 0, 0)"), i2.addColorStop(1, "rgba(0, 0, 0, " + this.shadow.opacity + ")")), this.ctx.clip(), this.ctx.fillStyle = i2, this.ctx.fillRect(0, 0, this.shadow.width, 2 * t2.height), this.ctx.restore();
        }
        drawInnerShadow() {
          const t2 = this.getRect();
          this.ctx.save(), this.ctx.beginPath();
          const e2 = this.convertToGlobal({ x: this.shadow.pos.x, y: this.shadow.pos.y }), i2 = this.convertRectToGlobal(this.pageRect);
          this.ctx.moveTo(i2.topLeft.x, i2.topLeft.y), this.ctx.lineTo(i2.topRight.x, i2.topRight.y), this.ctx.lineTo(i2.bottomRight.x, i2.bottomRight.y), this.ctx.lineTo(i2.bottomLeft.x, i2.bottomLeft.y), this.ctx.translate(e2.x, e2.y), this.ctx.rotate(Math.PI + this.shadow.angle + Math.PI / 2);
          const s2 = 3 * this.shadow.width / 4, n2 = this.ctx.createLinearGradient(0, 0, s2, 0);
          0 === this.shadow.direction ? (this.ctx.translate(-s2, -100), n2.addColorStop(1, "rgba(0, 0, 0, " + this.shadow.opacity + ")"), n2.addColorStop(0.9, "rgba(0, 0, 0, 0.05)"), n2.addColorStop(0.7, "rgba(0, 0, 0, " + this.shadow.opacity + ")"), n2.addColorStop(0, "rgba(0, 0, 0, 0)")) : (this.ctx.translate(0, -100), n2.addColorStop(0, "rgba(0, 0, 0, " + this.shadow.opacity + ")"), n2.addColorStop(0.1, "rgba(0, 0, 0, 0.05)"), n2.addColorStop(0.3, "rgba(0, 0, 0, " + this.shadow.opacity + ")"), n2.addColorStop(1, "rgba(0, 0, 0, 0)")), this.ctx.clip(), this.ctx.fillStyle = n2, this.ctx.fillRect(0, 0, s2, 2 * t2.height), this.ctx.restore();
        }
        clear() {
          this.ctx.fillStyle = "white", this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        }
      }
      class p {
        constructor(t2, e2, i2) {
          this.touchPoint = null, this.swipeTimeout = 250, this.onResize = () => {
            this.update();
          }, this.onMouseDown = (t3) => {
            if (this.checkTarget(t3.target)) {
              const e3 = this.getMousePos(t3.clientX, t3.clientY);
              this.app.startUserTouch(e3), t3.preventDefault();
            }
          }, this.onTouchStart = (t3) => {
            if (this.checkTarget(t3.target) && t3.changedTouches.length > 0) {
              const e3 = t3.changedTouches[0], i3 = this.getMousePos(e3.clientX, e3.clientY);
              this.touchPoint = { point: i3, time: Date.now() }, setTimeout(() => {
                null !== this.touchPoint && this.app.startUserTouch(i3);
              }, this.swipeTimeout), this.app.getSettings().mobileScrollSupport || t3.preventDefault();
            }
          }, this.onMouseUp = (t3) => {
            const e3 = this.getMousePos(t3.clientX, t3.clientY);
            this.app.userStop(e3);
          }, this.onMouseMove = (t3) => {
            const e3 = this.getMousePos(t3.clientX, t3.clientY);
            this.app.userMove(e3, false);
          }, this.onTouchMove = (t3) => {
            if (t3.changedTouches.length > 0) {
              const e3 = t3.changedTouches[0], i3 = this.getMousePos(e3.clientX, e3.clientY);
              this.app.getSettings().mobileScrollSupport ? (null !== this.touchPoint && (Math.abs(this.touchPoint.point.x - i3.x) > 10 || "read" !== this.app.getState()) && t3.cancelable && this.app.userMove(i3, true), "read" !== this.app.getState() && t3.preventDefault()) : this.app.userMove(i3, true);
            }
          }, this.onTouchEnd = (t3) => {
            if (t3.changedTouches.length > 0) {
              const e3 = t3.changedTouches[0], i3 = this.getMousePos(e3.clientX, e3.clientY);
              let s3 = false;
              if (null !== this.touchPoint) {
                const t4 = i3.x - this.touchPoint.point.x, e4 = Math.abs(i3.y - this.touchPoint.point.y);
                Math.abs(t4) > this.swipeDistance && e4 < 2 * this.swipeDistance && Date.now() - this.touchPoint.time < this.swipeTimeout && (t4 > 0 ? this.app.flipPrev(this.touchPoint.point.y < this.app.getRender().getRect().height / 2 ? "top" : "bottom") : this.app.flipNext(this.touchPoint.point.y < this.app.getRender().getRect().height / 2 ? "top" : "bottom"), s3 = true), this.touchPoint = null;
              }
              this.app.userStop(i3, s3);
            }
          }, this.parentElement = t2, t2.classList.add("stf__parent"), t2.insertAdjacentHTML("afterbegin", '<div class="stf__wrapper"></div>'), this.wrapper = t2.querySelector(".stf__wrapper"), this.app = e2;
          const s2 = this.app.getSettings().usePortrait ? 1 : 2;
          t2.style.minWidth = i2.minWidth * s2 + "px", t2.style.minHeight = i2.minHeight + "px", "fixed" === i2.size && (t2.style.minWidth = i2.width * s2 + "px", t2.style.minHeight = i2.height + "px"), i2.autoSize && (t2.style.width = "100%", t2.style.maxWidth = 2 * i2.maxWidth + "px"), t2.style.display = "block", window.addEventListener("resize", this.onResize, false), this.swipeDistance = i2.swipeDistance;
        }
        destroy() {
          this.app.getSettings().useMouseEvents && this.removeHandlers(), this.distElement.remove(), this.wrapper.remove();
        }
        getDistElement() {
          return this.distElement;
        }
        getWrapper() {
          return this.wrapper;
        }
        setOrientationStyle(t2) {
          this.wrapper.classList.remove("--portrait", "--landscape"), "portrait" === t2 ? (this.app.getSettings().autoSize && (this.wrapper.style.paddingBottom = this.app.getSettings().height / this.app.getSettings().width * 100 + "%"), this.wrapper.classList.add("--portrait")) : (this.app.getSettings().autoSize && (this.wrapper.style.paddingBottom = this.app.getSettings().height / (2 * this.app.getSettings().width) * 100 + "%"), this.wrapper.classList.add("--landscape")), this.update();
        }
        removeHandlers() {
          window.removeEventListener("resize", this.onResize), this.distElement.removeEventListener("mousedown", this.onMouseDown), this.distElement.removeEventListener("touchstart", this.onTouchStart), window.removeEventListener("mousemove", this.onMouseMove), window.removeEventListener("touchmove", this.onTouchMove), window.removeEventListener("mouseup", this.onMouseUp), window.removeEventListener("touchend", this.onTouchEnd);
        }
        setHandlers() {
          window.addEventListener("resize", this.onResize, false), this.app.getSettings().useMouseEvents && (this.distElement.addEventListener("mousedown", this.onMouseDown), this.distElement.addEventListener("touchstart", this.onTouchStart), window.addEventListener("mousemove", this.onMouseMove), window.addEventListener("touchmove", this.onTouchMove, { passive: !this.app.getSettings().mobileScrollSupport }), window.addEventListener("mouseup", this.onMouseUp), window.addEventListener("touchend", this.onTouchEnd));
        }
        getMousePos(t2, e2) {
          const i2 = this.distElement.getBoundingClientRect();
          return { x: t2 - i2.left, y: e2 - i2.top };
        }
        checkTarget(t2) {
          return !this.app.getSettings().clickEventForward || !["a", "button"].includes(t2.tagName.toLowerCase());
        }
      }
      class c extends p {
        constructor(t2, e2, i2, s2) {
          super(t2, e2, i2), this.wrapper.insertAdjacentHTML("afterbegin", '<div class="stf__block"></div>'), this.distElement = t2.querySelector(".stf__block"), this.items = s2;
          for (const t3 of s2) this.distElement.appendChild(t3);
          this.setHandlers();
        }
        clear() {
          for (const t2 of this.items) this.parentElement.appendChild(t2);
        }
        updateItems(t2) {
          this.removeHandlers(), this.distElement.innerHTML = "";
          for (const e2 of t2) this.distElement.appendChild(e2);
          this.items = t2, this.setHandlers();
        }
        update() {
          this.app.getRender().update();
        }
      }
      class u extends p {
        constructor(t2, e2, i2) {
          super(t2, e2, i2), this.wrapper.innerHTML = '<canvas class="stf__canvas"></canvas>', this.canvas = t2.querySelectorAll("canvas")[0], this.distElement = this.canvas, this.resizeCanvas(), this.setHandlers();
        }
        resizeCanvas() {
          const t2 = getComputedStyle(this.canvas), e2 = parseInt(t2.getPropertyValue("width"), 10), i2 = parseInt(t2.getPropertyValue("height"), 10);
          this.canvas.width = e2, this.canvas.height = i2;
        }
        getCanvas() {
          return this.canvas;
        }
        update() {
          this.resizeCanvas(), this.app.getRender().update();
        }
      }
      class w extends l {
        constructor(t2, e2, i2) {
          super(t2, e2), this.outerShadow = null, this.innerShadow = null, this.hardShadow = null, this.hardInnerShadow = null, this.element = i2, this.createShadows();
        }
        createShadows() {
          this.element.insertAdjacentHTML("beforeend", '<div class="stf__outerShadow"></div>\n             <div class="stf__innerShadow"></div>\n             <div class="stf__hardShadow"></div>\n             <div class="stf__hardInnerShadow"></div>'), this.outerShadow = this.element.querySelector(".stf__outerShadow"), this.innerShadow = this.element.querySelector(".stf__innerShadow"), this.hardShadow = this.element.querySelector(".stf__hardShadow"), this.hardInnerShadow = this.element.querySelector(".stf__hardInnerShadow");
        }
        clearShadow() {
          super.clearShadow(), this.outerShadow.style.cssText = "display: none", this.innerShadow.style.cssText = "display: none", this.hardShadow.style.cssText = "display: none", this.hardInnerShadow.style.cssText = "display: none";
        }
        reload() {
          this.element.querySelector(".stf__outerShadow") || this.createShadows();
        }
        drawHardInnerShadow() {
          const t2 = this.getRect(), e2 = this.shadow.progress > 100 ? 200 - this.shadow.progress : this.shadow.progress;
          let i2 = (100 - e2) * (2.5 * t2.pageWidth) / 100 + 20;
          i2 > t2.pageWidth && (i2 = t2.pageWidth);
          let s2 = `
            display: block;
            z-index: ${(this.getSettings().startZIndex + 5).toString(10)};
            width: ${i2}px;
            height: ${t2.height}px;
            background: linear-gradient(to right,
                rgba(0, 0, 0, ${this.shadow.opacity * e2 / 100}) 5%,
                rgba(0, 0, 0, 0) 100%);
            left: ${t2.left + t2.width / 2}px;
            transform-origin: 0 0;
        `;
          s2 += 0 === this.getDirection() && this.shadow.progress > 100 || 1 === this.getDirection() && this.shadow.progress <= 100 ? "transform: translate3d(0, 0, 0);" : "transform: translate3d(0, 0, 0) rotateY(180deg);", this.hardInnerShadow.style.cssText = s2;
        }
        drawHardOuterShadow() {
          const t2 = this.getRect();
          let e2 = (100 - (this.shadow.progress > 100 ? 200 - this.shadow.progress : this.shadow.progress)) * (2.5 * t2.pageWidth) / 100 + 20;
          e2 > t2.pageWidth && (e2 = t2.pageWidth);
          let i2 = `
            display: block;
            z-index: ${(this.getSettings().startZIndex + 4).toString(10)};
            width: ${e2}px;
            height: ${t2.height}px;
            background: linear-gradient(to left, rgba(0, 0, 0, ${this.shadow.opacity}) 5%, rgba(0, 0, 0, 0) 100%);
            left: ${t2.left + t2.width / 2}px;
            transform-origin: 0 0;
        `;
          i2 += 0 === this.getDirection() && this.shadow.progress > 100 || 1 === this.getDirection() && this.shadow.progress <= 100 ? "transform: translate3d(0, 0, 0) rotateY(180deg);" : "transform: translate3d(0, 0, 0);", this.hardShadow.style.cssText = i2;
        }
        drawInnerShadow() {
          const t2 = this.getRect(), e2 = 3 * this.shadow.width / 4, i2 = 0 === this.getDirection() ? e2 : 0, s2 = 0 === this.getDirection() ? "to left" : "to right", n2 = this.convertToGlobal(this.shadow.pos), r2 = this.shadow.angle + 3 * Math.PI / 2, o2 = [this.pageRect.topLeft, this.pageRect.topRight, this.pageRect.bottomRight, this.pageRect.bottomLeft];
          let a2 = "polygon( ";
          for (const t3 of o2) {
            let e3 = 1 === this.getDirection() ? { x: -t3.x + this.shadow.pos.x, y: t3.y - this.shadow.pos.y } : { x: t3.x - this.shadow.pos.x, y: t3.y - this.shadow.pos.y };
            e3 = h.GetRotatedPoint(e3, { x: i2, y: 100 }, r2), a2 += e3.x + "px " + e3.y + "px, ";
          }
          a2 = a2.slice(0, -2), a2 += ")";
          const g2 = `
            display: block;
            z-index: ${(this.getSettings().startZIndex + 10).toString(10)};
            width: ${e2}px;
            height: ${2 * t2.height}px;
            background: linear-gradient(${s2},
                rgba(0, 0, 0, ${this.shadow.opacity}) 5%,
                rgba(0, 0, 0, 0.05) 15%,
                rgba(0, 0, 0, ${this.shadow.opacity}) 35%,
                rgba(0, 0, 0, 0) 100%);
            transform-origin: ${i2}px 100px;
            transform: translate3d(${n2.x - i2}px, ${n2.y - 100}px, 0) rotate(${r2}rad);
            clip-path: ${a2};
            -webkit-clip-path: ${a2};
        `;
          this.innerShadow.style.cssText = g2;
        }
        drawOuterShadow() {
          const t2 = this.getRect(), e2 = this.convertToGlobal({ x: this.shadow.pos.x, y: this.shadow.pos.y }), i2 = this.shadow.angle + 3 * Math.PI / 2, s2 = 1 === this.getDirection() ? this.shadow.width : 0, n2 = 0 === this.getDirection() ? "to right" : "to left", r2 = [{ x: 0, y: 0 }, { x: t2.pageWidth, y: 0 }, { x: t2.pageWidth, y: t2.height }, { x: 0, y: t2.height }];
          let o2 = "polygon( ";
          for (const t3 of r2) if (null !== t3) {
            let e3 = 1 === this.getDirection() ? { x: -t3.x + this.shadow.pos.x, y: t3.y - this.shadow.pos.y } : { x: t3.x - this.shadow.pos.x, y: t3.y - this.shadow.pos.y };
            e3 = h.GetRotatedPoint(e3, { x: s2, y: 100 }, i2), o2 += e3.x + "px " + e3.y + "px, ";
          }
          o2 = o2.slice(0, -2), o2 += ")";
          const a2 = `
            display: block;
            z-index: ${(this.getSettings().startZIndex + 10).toString(10)};
            width: ${this.shadow.width}px;
            height: ${2 * t2.height}px;
            background: linear-gradient(${n2}, rgba(0, 0, 0, ${this.shadow.opacity}), rgba(0, 0, 0, 0));
            transform-origin: ${s2}px 100px;
            transform: translate3d(${e2.x - s2}px, ${e2.y - 100}px, 0) rotate(${i2}rad);
            clip-path: ${o2};
            -webkit-clip-path: ${o2};
        `;
          this.outerShadow.style.cssText = a2;
        }
        drawLeftPage() {
          "portrait" !== this.orientation && null !== this.leftPage && (1 === this.direction && null !== this.flippingPage && "hard" === this.flippingPage.getDrawingDensity() ? (this.leftPage.getElement().style.zIndex = (this.getSettings().startZIndex + 5).toString(10), this.leftPage.setHardDrawingAngle(180 + this.flippingPage.getHardAngle()), this.leftPage.draw(this.flippingPage.getDrawingDensity())) : this.leftPage.simpleDraw(0));
        }
        drawRightPage() {
          null !== this.rightPage && (0 === this.direction && null !== this.flippingPage && "hard" === this.flippingPage.getDrawingDensity() ? (this.rightPage.getElement().style.zIndex = (this.getSettings().startZIndex + 5).toString(10), this.rightPage.setHardDrawingAngle(180 + this.flippingPage.getHardAngle()), this.rightPage.draw(this.flippingPage.getDrawingDensity())) : this.rightPage.simpleDraw(1));
        }
        drawBottomPage() {
          if (null === this.bottomPage) return;
          const t2 = null != this.flippingPage ? this.flippingPage.getDrawingDensity() : null;
          "portrait" === this.orientation && 1 === this.direction || (this.bottomPage.getElement().style.zIndex = (this.getSettings().startZIndex + 3).toString(10), this.bottomPage.draw(t2));
        }
        drawFrame() {
          this.clear(), this.drawLeftPage(), this.drawRightPage(), this.drawBottomPage(), null != this.flippingPage && (this.flippingPage.getElement().style.zIndex = (this.getSettings().startZIndex + 5).toString(10), this.flippingPage.draw()), null != this.shadow && null !== this.flippingPage && ("soft" === this.flippingPage.getDrawingDensity() ? (this.drawOuterShadow(), this.drawInnerShadow()) : (this.drawHardOuterShadow(), this.drawHardInnerShadow()));
        }
        clear() {
          for (const t2 of this.app.getPageCollection().getPages()) t2 !== this.leftPage && t2 !== this.rightPage && t2 !== this.flippingPage && t2 !== this.bottomPage && (t2.getElement().style.cssText = "display: none"), t2.getTemporaryCopy() !== this.flippingPage && t2.hideTemporaryCopy();
        }
        update() {
          super.update(), null !== this.rightPage && this.rightPage.setOrientation(1), null !== this.leftPage && this.leftPage.setOrientation(0);
        }
      }
      class x {
        constructor() {
          this._default = { startPage: 0, size: "fixed", width: 0, height: 0, minWidth: 0, maxWidth: 0, minHeight: 0, maxHeight: 0, drawShadow: true, flippingTime: 1e3, usePortrait: true, startZIndex: 0, autoSize: true, maxShadowOpacity: 1, showCover: false, mobileScrollSupport: true, swipeDistance: 30, clickEventForward: true, useMouseEvents: true, showPageCorners: true, disableFlipByClick: false };
        }
        getSettings(t2) {
          const e2 = this._default;
          if (Object.assign(e2, t2), "stretch" !== e2.size && "fixed" !== e2.size) throw new Error('Invalid size type. Available only "fixed" and "stretch" value');
          if (e2.width <= 0 || e2.height <= 0) throw new Error("Invalid width or height");
          if (e2.flippingTime <= 0) throw new Error("Invalid flipping time");
          return "stretch" === e2.size ? (e2.minWidth <= 0 && (e2.minWidth = 100), e2.maxWidth < e2.minWidth && (e2.maxWidth = 2e3), e2.minHeight <= 0 && (e2.minHeight = 100), e2.maxHeight < e2.minHeight && (e2.maxHeight = 2e3)) : (e2.minWidth = e2.width, e2.maxWidth = e2.width, e2.minHeight = e2.height, e2.maxHeight = e2.height), e2;
        }
      }
      !function(t2, e2) {
        void 0 === e2 && (e2 = {});
        var i2 = e2.insertAt;
        if (t2 && "undefined" != typeof document) {
          var s2 = document.head || document.getElementsByTagName("head")[0], n2 = document.createElement("style");
          n2.type = "text/css", "top" === i2 && s2.firstChild ? s2.insertBefore(n2, s2.firstChild) : s2.appendChild(n2), n2.styleSheet ? n2.styleSheet.cssText = t2 : n2.appendChild(document.createTextNode(t2));
        }
      }(".stf__parent {\n  position: relative;\n  display: block;\n  box-sizing: border-box;\n  transform: translateZ(0);\n\n  -ms-touch-action: pan-y;\n  touch-action: pan-y;\n}\n\n.sft__wrapper {\n  position: relative;\n  width: 100%;\n  box-sizing: border-box;\n}\n\n.stf__parent canvas {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n}\n\n.stf__block {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  perspective: 2000px;\n}\n\n.stf__item {\n  display: none;\n  position: absolute;\n  transform-style: preserve-3d;\n}\n\n.stf__outerShadow {\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n\n.stf__innerShadow {\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n\n.stf__hardShadow {\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n\n.stf__hardInnerShadow {\n  position: absolute;\n  left: 0;\n  top: 0;\n}");
      t.PageFlip = class extends class {
        constructor() {
          this.events = /* @__PURE__ */ new Map();
        }
        on(t2, e2) {
          return this.events.has(t2) ? this.events.get(t2).push(e2) : this.events.set(t2, [e2]), this;
        }
        off(t2) {
          this.events.delete(t2);
        }
        trigger(t2, e2, i2 = null) {
          if (this.events.has(t2)) for (const s2 of this.events.get(t2)) s2({ data: i2, object: e2 });
        }
      } {
        constructor(t2, e2) {
          super(), this.isUserTouch = false, this.isUserMove = false, this.setting = null, this.pages = null, this.setting = new x().getSettings(e2), this.block = t2;
        }
        destroy() {
          this.ui.destroy(), this.block.remove();
        }
        update() {
          this.render.update(), this.pages.show();
        }
        loadFromImages(t2) {
          this.ui = new u(this.block, this, this.setting);
          const e2 = this.ui.getCanvas();
          this.render = new d(this, this.setting, e2), this.flipController = new g(this.render, this), this.pages = new n(this, this.render, t2), this.pages.load(), this.render.start(), this.pages.show(this.setting.startPage), setTimeout(() => {
            this.ui.update(), this.trigger("init", this, { page: this.setting.startPage, mode: this.render.getOrientation() });
          }, 1);
        }
        loadFromHTML(t2) {
          this.ui = new c(this.block, this, this.setting, t2), this.render = new w(this, this.setting, this.ui.getDistElement()), this.flipController = new g(this.render, this), this.pages = new o(this, this.render, this.ui.getDistElement(), t2), this.pages.load(), this.render.start(), this.pages.show(this.setting.startPage), setTimeout(() => {
            this.ui.update(), this.trigger("init", this, { page: this.setting.startPage, mode: this.render.getOrientation() });
          }, 1);
        }
        updateFromImages(t2) {
          const e2 = this.pages.getCurrentPageIndex();
          this.pages.destroy(), this.pages = new n(this, this.render, t2), this.pages.load(), this.pages.show(e2), this.trigger("update", this, { page: e2, mode: this.render.getOrientation() });
        }
        updateFromHtml(t2) {
          const e2 = this.pages.getCurrentPageIndex();
          this.pages.destroy(), this.pages = new o(this, this.render, this.ui.getDistElement(), t2), this.pages.load(), this.ui.updateItems(t2), this.render.reload(), this.pages.show(e2), this.trigger("update", this, { page: e2, mode: this.render.getOrientation() });
        }
        clear() {
          this.pages.destroy(), this.ui.clear();
        }
        turnToPrevPage() {
          this.pages.showPrev();
        }
        turnToNextPage() {
          this.pages.showNext();
        }
        turnToPage(t2) {
          this.pages.show(t2);
        }
        flipNext(t2 = "top") {
          this.flipController.flipNext(t2);
        }
        flipPrev(t2 = "top") {
          this.flipController.flipPrev(t2);
        }
        flip(t2, e2 = "top") {
          this.flipController.flipToPage(t2, e2);
        }
        updateState(t2) {
          this.trigger("changeState", this, t2);
        }
        updatePageIndex(t2) {
          this.trigger("flip", this, t2);
        }
        updateOrientation(t2) {
          this.ui.setOrientationStyle(t2), this.update(), this.trigger("changeOrientation", this, t2);
        }
        getPageCount() {
          return this.pages.getPageCount();
        }
        getCurrentPageIndex() {
          return this.pages.getCurrentPageIndex();
        }
        getPage(t2) {
          return this.pages.getPage(t2);
        }
        getRender() {
          return this.render;
        }
        getFlipController() {
          return this.flipController;
        }
        getOrientation() {
          return this.render.getOrientation();
        }
        getBoundsRect() {
          return this.render.getRect();
        }
        getSettings() {
          return this.setting;
        }
        getUI() {
          return this.ui;
        }
        getState() {
          return this.flipController.getState();
        }
        getPageCollection() {
          return this.pages;
        }
        startUserTouch(t2) {
          this.mousePosition = t2, this.isUserTouch = true, this.isUserMove = false;
        }
        userMove(t2, e2) {
          this.isUserTouch || e2 || !this.setting.showPageCorners ? this.isUserTouch && h.GetDistanceBetweenTwoPoint(this.mousePosition, t2) > 5 && (this.isUserMove = true, this.flipController.fold(t2)) : this.flipController.showCorner(t2);
        }
        userStop(t2, e2 = false) {
          this.isUserTouch && (this.isUserTouch = false, e2 || (this.isUserMove ? this.flipController.stopMove() : this.flipController.flip(t2)));
        }
      }, Object.defineProperty(t, "__esModule", { value: true });
    });
  }
});

// node_modules/react-pageflip/build/index.es.js
var import_react = __toESM(require_react());
var import_page_flip = __toESM(require_page_flip_browser());
var HTMLFlipBookForward = import_react.default.forwardRef((props, ref) => {
  const htmlElementRef = (0, import_react.useRef)(null);
  const childRef = (0, import_react.useRef)([]);
  const pageFlip = (0, import_react.useRef)();
  const [pages, setPages] = (0, import_react.useState)([]);
  (0, import_react.useImperativeHandle)(ref, () => ({
    pageFlip: () => pageFlip.current
  }));
  const refreshOnPageDelete = (0, import_react.useCallback)(() => {
    if (pageFlip.current) {
      pageFlip.current.clear();
    }
  }, []);
  const removeHandlers = (0, import_react.useCallback)(() => {
    const flip = pageFlip.current;
    if (flip) {
      flip.off("flip");
      flip.off("changeOrientation");
      flip.off("changeState");
      flip.off("init");
      flip.off("update");
    }
  }, []);
  (0, import_react.useEffect)(() => {
    childRef.current = [];
    if (props.children) {
      const childList = import_react.default.Children.map(props.children, (child) => {
        return import_react.default.cloneElement(child, {
          ref: (dom) => {
            if (dom) {
              childRef.current.push(dom);
            }
          }
        });
      });
      if (!props.renderOnlyPageLengthChange || pages.length !== childList.length) {
        if (childList.length < pages.length) {
          refreshOnPageDelete();
        }
        setPages(childList);
      }
    }
  }, [props.children]);
  (0, import_react.useEffect)(() => {
    const setHandlers = () => {
      const flip = pageFlip.current;
      if (flip) {
        if (props.onFlip) {
          flip.on("flip", (e) => props.onFlip(e));
        }
        if (props.onChangeOrientation) {
          flip.on("changeOrientation", (e) => props.onChangeOrientation(e));
        }
        if (props.onChangeState) {
          flip.on("changeState", (e) => props.onChangeState(e));
        }
        if (props.onInit) {
          flip.on("init", (e) => props.onInit(e));
        }
        if (props.onUpdate) {
          flip.on("update", (e) => props.onUpdate(e));
        }
      }
    };
    if (pages.length > 0 && childRef.current.length > 0) {
      removeHandlers();
      if (htmlElementRef.current && !pageFlip.current) {
        pageFlip.current = new import_page_flip.PageFlip(htmlElementRef.current, props);
      }
      if (!pageFlip.current.getFlipController()) {
        pageFlip.current.loadFromHTML(childRef.current);
      } else {
        pageFlip.current.updateFromHtml(childRef.current);
      }
      setHandlers();
    }
  }, [pages]);
  return import_react.default.createElement("div", { ref: htmlElementRef, className: props.className, style: props.style }, pages);
});
var HTMLFlipBook = import_react.default.memo(HTMLFlipBookForward);
var index_es_default = HTMLFlipBook;
export {
  index_es_default as default
};
//# sourceMappingURL=react-pageflip.js.map
