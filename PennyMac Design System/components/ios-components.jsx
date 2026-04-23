// iOS Pennymac components — buttons, fields, cards, rows, badges, alerts
// Uses CSS variables from tokens.css. Import after React + ios-frame.jsx.

const PM = {
  blue900: '#0B3FA8', blue700: '#155BE0', blue500: '#3B82F6', blue100: '#DBE8FD', blue50: '#EDF3FE',
  gold600: '#D4A017', gold400: '#F0C14B', gold100: '#FBF3DA',
  slate950: '#0F1720', slate700: '#3A4656', slate500: '#6B7785',
  slate300: '#CBD2DB', slate200: '#DFE4EB', slate100: '#EEF1F5', slate50: '#F7F9FC',
  white: '#fff',
  success600: '#1F7A3C', success100: '#E1F3E7', success700: '#155F2D',
  warning600: '#B8791E', warning100: '#FBF0DB', warning700: '#8A5A14',
  error600: '#B3261E', error100: '#FBE3E1', error700: '#8C1D16',
};
const FONT = {
  display: 'Montserrat, -apple-system, "SF Pro Display", system-ui, sans-serif',
  body:    'Roboto, -apple-system, "SF Pro Text", system-ui, sans-serif',
};

// ─── Button ─────────────────────────────────────────────────────────────
function PMIOSButton({ label, variant = 'primary', size = 'md', leading, trailing, full = false, disabled = false }) {
  const h = size === 'lg' ? 52 : size === 'sm' ? 36 : 48;
  const fs = size === 'lg' ? 17 : size === 'sm' ? 14 : 16;
  const base = {
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8,
    height: h, padding: `0 ${size === 'sm' ? 16 : 22}px`, borderRadius: 14,
    fontFamily: FONT.body, fontSize: fs, fontWeight: 600, lineHeight: 1,
    border: '1px solid transparent', width: full ? '100%' : undefined,
    opacity: disabled ? 0.45 : 1,
  };
  const styles = {
    primary:   { ...base, background: PM.blue700, color: PM.white },
    secondary: { ...base, background: PM.white, color: PM.blue700, border: `1px solid ${PM.slate300}` },
    tertiary:  { ...base, background: 'transparent', color: PM.blue700 },
    destructive: { ...base, background: PM.error600, color: PM.white },
  };
  return <div style={styles[variant]}>{leading}{label}{trailing}</div>;
}

// ─── Text field ─────────────────────────────────────────────────────────
function PMIOSField({ label, value, placeholder, hint, error, prefix, focused = false }) {
  return (
    <div style={{ fontFamily: FONT.body }}>
      <div style={{ fontSize: 13, fontWeight: 600, color: PM.slate950, marginBottom: 6 }}>{label}</div>
      <div style={{
        height: 48, borderRadius: 12, background: PM.white,
        border: `1.5px solid ${error ? PM.error600 : focused ? PM.blue500 : PM.slate300}`,
        boxShadow: focused ? `0 0 0 4px ${PM.blue500}22` : 'none',
        display: 'flex', alignItems: 'center', padding: '0 14px',
      }}>
        {prefix && <span style={{ color: PM.slate500, marginRight: 4, fontSize: 16, fontVariantNumeric: 'tabular-nums' }}>{prefix}</span>}
        <span style={{
          flex: 1, fontSize: 16, color: value ? PM.slate950 : PM.slate500,
          fontVariantNumeric: prefix ? 'tabular-nums' : 'normal',
        }}>{value || placeholder}</span>
        {focused && <div style={{ width: 2, height: 20, background: PM.blue700, marginLeft: 2 }} />}
      </div>
      {error ? (
        <div style={{ fontSize: 12, color: PM.error600, marginTop: 6, fontWeight: 500 }}>{error}</div>
      ) : hint ? (
        <div style={{ fontSize: 12, color: PM.slate500, marginTop: 6 }}>{hint}</div>
      ) : null}
    </div>
  );
}

// ─── Radio row (iOS grouped-list style) ────────────────────────────────
function PMIOSRadio({ label, meta, checked }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '14px 0', fontFamily: FONT.body }}>
      <div style={{
        width: 22, height: 22, borderRadius: '50%',
        border: `2px solid ${checked ? PM.blue700 : PM.slate300}`,
        background: checked ? PM.blue700 : PM.white,
        display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
      }}>
        {checked && <div style={{ width: 8, height: 8, borderRadius: '50%', background: PM.white }} />}
      </div>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 16, fontWeight: 600, color: PM.slate950, lineHeight: '22px' }}>{label}</div>
        {meta && <div style={{ fontSize: 13, color: PM.slate500, lineHeight: '18px', marginTop: 1 }}>{meta}</div>}
      </div>
    </div>
  );
}

// ─── Toggle ────────────────────────────────────────────────────────────
function PMIOSToggle({ on }) {
  return (
    <div style={{
      width: 51, height: 31, borderRadius: 16,
      background: on ? PM.success600 : PM.slate300,
      display: 'flex', alignItems: 'center',
      justifyContent: on ? 'flex-end' : 'flex-start',
      padding: 2, boxSizing: 'border-box', flexShrink: 0,
    }}>
      <div style={{ width: 27, height: 27, borderRadius: '50%', background: PM.white, boxShadow: '0 2px 4px rgba(0,0,0,0.15)' }} />
    </div>
  );
}

// ─── Badge ─────────────────────────────────────────────────────────────
function PMIOSBadge({ label, tone = 'info' }) {
  const tones = {
    success: { bg: PM.success100, fg: PM.success700, dot: PM.success600 },
    warning: { bg: PM.warning100, fg: PM.warning700, dot: PM.warning600 },
    error:   { bg: PM.error100, fg: PM.error700, dot: PM.error600 },
    info:    { bg: PM.blue100, fg: PM.blue900, dot: PM.blue700 },
    neutral: { bg: PM.slate100, fg: PM.slate700, dot: PM.slate500 },
  };
  const t = tones[tone];
  return (
    <div style={{
      display: 'inline-flex', alignItems: 'center', gap: 6,
      padding: '4px 10px', borderRadius: 9999,
      background: t.bg, color: t.fg,
      fontFamily: FONT.body, fontSize: 12, fontWeight: 700, lineHeight: '16px',
    }}>
      <div style={{ width: 6, height: 6, borderRadius: '50%', background: t.dot }} />
      {label}
    </div>
  );
}

// ─── Payment card ──────────────────────────────────────────────────────
function PMIOSPaymentCard() {
  return (
    <div style={{
      background: PM.white, borderRadius: 20, padding: 20,
      boxShadow: '0 1px 2px rgba(15,23,32,0.06), 0 4px 12px rgba(15,23,32,0.04)',
      fontFamily: FONT.body,
    }}>
      <div style={{ fontFamily: FONT.display, fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: PM.slate500, marginBottom: 6 }}>
        Next payment
      </div>
      <div style={{ fontFamily: FONT.display, fontSize: 38, fontWeight: 800, color: PM.slate950, letterSpacing: '-0.02em', fontVariantNumeric: 'tabular-nums' }}>
        $2,147.82
      </div>
      <div style={{ fontSize: 14, color: PM.slate700, marginTop: 2 }}>
        Due May 1 · Autopay from ••4421
      </div>
      <div style={{ margin: '16px 0', paddingTop: 14, borderTop: `1px solid ${PM.slate200}`, display: 'flex', flexDirection: 'column', gap: 6 }}>
        {[['Principal & interest', '$1,482.17'], ['Escrow', '$615.65'], ['PMI', '$50.00']].map(([k, v]) => (
          <div key={k} style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, color: PM.slate700 }}>
            <span>{k}</span>
            <span style={{ fontVariantNumeric: 'tabular-nums', fontWeight: 500, color: PM.slate950 }}>{v}</span>
          </div>
        ))}
      </div>
      <PMIOSButton label="Pay now" full />
    </div>
  );
}

// ─── Rate card ─────────────────────────────────────────────────────────
function PMIOSRateCard() {
  return (
    <div style={{
      background: PM.white, borderRadius: 20, padding: 20,
      boxShadow: '0 1px 2px rgba(15,23,32,0.06), 0 4px 12px rgba(15,23,32,0.04)',
      fontFamily: FONT.body,
    }}>
      <div style={{
        display: 'inline-block', padding: '4px 10px', borderRadius: 9999,
        background: PM.blue100, color: PM.blue900,
        fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 12,
      }}>30-year fixed</div>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 4 }}>
        <div style={{ fontFamily: FONT.display, fontSize: 44, fontWeight: 800, color: PM.slate950, letterSpacing: '-0.02em', fontVariantNumeric: 'tabular-nums', lineHeight: 1 }}>6.125</div>
        <div style={{ fontFamily: FONT.display, fontSize: 22, fontWeight: 700, color: PM.slate700 }}>%</div>
      </div>
      <div style={{ fontSize: 12, color: PM.slate500, marginTop: 4 }}>6.248% APR</div>
      <div style={{ marginTop: 16, display: 'flex', flexDirection: 'column' }}>
        {[['Principal & interest', '$1,823 / mo'], ['Points', '0.875 ($2,625)']].map(([k, v], i) => (
          <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', fontSize: 13, color: PM.slate700, borderTop: i > 0 ? `1px dashed ${PM.slate200}` : 'none' }}>
            <span>{k}</span>
            <span style={{ fontVariantNumeric: 'tabular-nums', fontWeight: 500, color: PM.slate950 }}>{v}</span>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 16 }}><PMIOSButton label="Lock this rate" full /></div>
    </div>
  );
}

// ─── List row with accessory ───────────────────────────────────────────
function PMIOSListRow({ title, detail, badge, isLast }) {
  return (
    <div style={{
      padding: '14px 16px', display: 'flex', alignItems: 'center', gap: 12,
      borderBottom: isLast ? 'none' : `0.5px solid ${PM.slate200}`,
      fontFamily: FONT.body,
    }}>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 16, fontWeight: 500, color: PM.slate950 }}>{title}</div>
        {detail && <div style={{ fontSize: 13, color: PM.slate500, marginTop: 1 }}>{detail}</div>}
      </div>
      {badge}
      <svg width="7" height="12" viewBox="0 0 7 12"><path d="M1 1l5 5-5 5" stroke={PM.slate300} strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
    </div>
  );
}

// ─── Alert (sheet-style banner) ────────────────────────────────────────
function PMIOSAlert({ title, body, tone = 'info' }) {
  const tones = {
    info:    { bg: PM.blue100, fg: PM.blue900, dot: PM.blue700 },
    success: { bg: PM.success100, fg: PM.success700, dot: PM.success600 },
    warning: { bg: PM.warning100, fg: PM.warning700, dot: PM.warning600 },
    error:   { bg: PM.error100, fg: PM.error700, dot: PM.error600 },
  };
  const t = tones[tone];
  return (
    <div style={{
      background: t.bg, borderRadius: 14, padding: 14,
      display: 'flex', gap: 12, fontFamily: FONT.body,
    }}>
      <div style={{ width: 8, height: 8, borderRadius: '50%', background: t.dot, marginTop: 7, flexShrink: 0 }} />
      <div style={{ flex: 1, color: t.fg }}>
        <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 2 }}>{title}</div>
        <div style={{ fontSize: 13, lineHeight: '18px' }}>{body}</div>
      </div>
    </div>
  );
}

Object.assign(window, {
  PMIOSButton, PMIOSField, PMIOSRadio, PMIOSToggle, PMIOSBadge,
  PMIOSPaymentCard, PMIOSRateCard, PMIOSListRow, PMIOSAlert, PM, FONT,
});
