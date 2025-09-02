// Dev-only helper: highlights layout shift elements and logs font loads
/* eslint-disable no-console */
if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
  // Highlight shifting nodes
  const overlay = document.createElement('style');
  overlay.textContent = `
    .__cls-shift { outline: 2px solid #ff4d4f !important; transition: outline-color .3s; }
  `;
  document.head.appendChild(overlay);

  const getSelector = (el) => {
    if (!el || !el.nodeType) return 'unknown';
    if (el.id) return `#${el.id}`;
    const name = el.tagName?.toLowerCase?.() || 'node';
    const cls = el.className && typeof el.className === 'string' ? `.${el.className.split(/\s+/).slice(0,2).join('.')}` : '';
    return `${name}${cls}`;
  };

  const po = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      // Ignore shifts triggered by user input
      if (entry.hadRecentInput) continue;
      const nodes = entry.sources?.map(s => s.node).filter(Boolean) || [];
      console.groupCollapsed(`CLS +${entry.value.toFixed(4)} at ${Math.round(entry.startTime)}ms`);
      nodes.forEach((n, i) => {
        try {
          n.classList.add('__cls-shift');
          setTimeout(() => n.classList.remove('__cls-shift'), 1200);
        } catch {}
        console.log(`${i+1}.`, getSelector(n), n);
      });
      console.groupEnd();
    }
  });
  try { po.observe({ type: 'layout-shift', buffered: true }); } catch {}

  // Log webfont loading milestones
  if (document.fonts && 'ready' in document.fonts) {
    document.fonts.ready.then(() => {
      console.info('[fonts] all font faces loaded');
    });
    if ('onloadingdone' in document.fonts) {
      document.fonts.onloadingdone = (e) => {
        const families = Array.from(e.fontfaces || []).map(f => `${f.family} ${f.weight || ''}`);
        console.info('[fonts] loaded:', families.join(', '));
      };
    }
  }
}
