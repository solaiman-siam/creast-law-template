!(function (t) {
    function e() {
      var e,
        i,
        n = { height: a.innerHeight, width: a.innerWidth };
      return (
        n.height ||
          ((e = r.compatMode),
          (e || !t.support.boxModel) &&
            ((i = "CSS1Compat" === e ? f : r.body),
            (n = { height: i.clientHeight, width: i.clientWidth }))),
        n
      );
    }
    function i() {
      return {
        top: a.pageYOffset || f.scrollTop || r.body.scrollTop,
        left: a.pageXOffset || f.scrollLeft || r.body.scrollLeft,
      };
    }
    function n() {
      var n,
        l = t(),
        r = 0;
      if (
        (t.each(d, function (t, e) {
          var i = e.data.selector,
            n = e.$element;
          l = l.add(i ? n.find(i) : n);
        }),
        (n = l.length))
      )
        for (o = o || e(), h = h || i(); n > r; r++)
          if (t.contains(f, l[r])) {
            var a,
              c,
              p,
              s = t(l[r]),
              u = { height: s.height(), width: s.width() },
              g = s.offset(),
              v = s.data("inview");
            if (!h || !o) return;
            g.top + u.height > h.top &&
            g.top < h.top + o.height &&
            g.left + u.width > h.left &&
            g.left < h.left + o.width
              ? ((a =
                  h.left > g.left
                    ? "right"
                    : h.left + o.width < g.left + u.width
                    ? "left"
                    : "both"),
                (c =
                  h.top > g.top
                    ? "bottom"
                    : h.top + o.height < g.top + u.height
                    ? "top"
                    : "both"),
                (p = a + "-" + c),
                (v && v === p) ||
                  s.data("inview", p).trigger("inview", [!0, a, c]))
              : v && s.data("inview", !1).trigger("inview", [!1]);
          }
    }
    var o,
      h,
      l,
      d = {},
      r = document,
      a = window,
      f = r.documentElement,
      c = t.expando;
    (t.event.special.inview = {
      add: function (e) {
        (d[e.guid + "-" + this[c]] = { data: e, $element: t(this) }),
          l || t.isEmptyObject(d) || (l = setInterval(n, 250));
      },
      remove: function (e) {
        try {
          delete d[e.guid + "-" + this[c]];
        } catch (i) {}
        t.isEmptyObject(d) && (clearInterval(l), (l = null));
      },
    }),
      t(a).bind("scroll resize scrollstop", function () {
        o = h = null;
      }),
      !f.addEventListener &&
        f.attachEvent &&
        f.attachEvent("onfocusin", function () {
          h = null;
        });
  })(jQuery);








  // connect html file with this 


  $(".why-choose-us-counter-wrapper").each(function () {
    var $this = $(this);
    $this.on("inview", function (event, visible) {
      if (visible) {
        const smCounters = document.querySelectorAll('.sm-counter')
        const speed = 1000;
        
        
        smCounters?.forEach( counter => {
          const animate = () => {
             const value = +counter.getAttribute('limit');
             const data = +counter.innerText;
            
             const time = value / speed;
            if(data < value) {
                 counter.innerText = Math.ceil(data + time);
                 setTimeout(animate, 1);
               }else{
                 counter.innerText = value;
               }
            
          }
          animate();
        });
  
      }
    });
  });