// Android Pennymac components — Material 3 influence + Pennymac palette
// Import after React + android-frame.jsx.

const PMA = {
  blue900: '#0B3FA8', blue700: '#155BE0', blue500: '#3B82F6', blue100: '#DBE8FD', blue50: '#EDF3FE',
  gold600: '#D4A017', gold400: '#F0C14B', gold100: '#FBF3DA',
  slate950: '#0F1720', slate700: '#3A4656', slate500: '#6B7785',
  slate300: '#CBD2DB', slate200: '#DFE4EB', slate100: '#EEF1F5', slate50: '#F7F9FC',
  white: '#fff',
  success600: '#1F7A3C', success100: '#E1F3E7', success700: '#155F2D',
  warning600: '#B8791E', warning100: '#FBF0DB', warning700: '#8A5A14',
  error600: '#B3261E', error100: '#FBE3E1', error700: '#8C1D16',
};
const AFONT = {
  display: 'Montserrat, Roboto, system-ui, sans-serif',
  body: 'Roboto, system-ui, sans-serif',
};

// ─── Button (M3 filled/outlined/text) ─────────────────────────────────
function PMAButton({ label, variant = 'filled', size = 'md', full = false }) {
  const h = size === 'lg' ? 52 : size === 'sm' ? 36 : 44;
  const fs = size === 'lg' ? 16 : size === 'sm' ? 13 : 14;
  const base = {
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8,
    height: h, padding: `0 ${size === 'sm' ? 16 : 24}px`, borderRadius: 9999,
    fontFamily: AFONT.body, fontSize: fs, fontWeight: 500, letterSpacing: '0.1px',
    textTransform: 'none', width: full ? '100%' : undefined,
  };
  const styles = {
    filled:   { ...base, background: PMA.blue700, color: PMA.white },
    tonal:    { ...base, background: PMA.blue100, color: PMA.blue900 },
    outlined: { ...base, background: 'transparent', color: PMA.blue700, border: `1px solid ${PMA.slate300}` },
    text:     { ...base, background: 'transparent', color: PMA.blue700, padding: '0 12px' },
  };
  return <div style={styles[variant]}>{label}</div>;
}

// ─── Outlined text field (M3) ────────────────────────────────────────
function PMAField({ label, value, placeholder, supporting, error, prefix, focused = false }) {
  const border = error ? PMA.error600 : focused ? PMA.blue700 : PMA.slate300;
  const labelColor = error ? PMA.error600 : focused ? PMA.blue700 : PMA.slate500;
  return (
    <div style={{ fontFamily: AFONT.body, position: 'relative' }}>
      <div style={{
        height: 56, borderRadius: 4,
        border: `${focused || error ? '2px' : '1px'} solid ${border}`,
        display: 'flex', alignItems: 'center', padding: `0 ${focused || error ? 15 : 16}px`,
        background: 'transparent', position: 'relative',
      }}>
        {/* floating label */}
        <div style={{
          position: 'absolute', top: -8, left: 12,
          background: PMA.slate50, padding: '0 4px',
          fontSize: 12, color: labelColor, fontWeight: 400,
        }}>{label}</div>

        {prefix && <span style={{ color: PMA.slate500, marginRight: 4, fontSize: 16, fontVariantNumeric: 'tabular-nums' }}>{prefix}</span>}
        <span style={{
          flex: 1, fontSize: 16, color: value ? PMA.slate950 : PMA.slate500,
          fontVariantNumeric: prefix ? 'tabular-nums' : 'normal',
        }}>{value || placeholder}</span>
        {focused && <div style={{ width: 2, height: 22, background: PMA.blue700 }} />}
      </div>
      {(supporting || error) && (
        <div style={{
          fontSize: 12, color: error ? PMA.error600 : PMA.slate500,
          marginTop: 4, padding: '0 16px',
        }}>{error || supporting}</div>
      )}
    </div>
  );
}

// ─── Radio row ──────────────────────────────────────────────────────
function PMARadio({ label, meta, checked }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '12px 16px', fontFamily: AFONT.body }}>
      <div style={{
        width: 20, height: 20, borderRadius: '50%',
        border: `2px solid ${checked ? PMA.blue700 : PMA.slate500}`,
        display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
      }}>
        {checked && <div style={{ width: 10, height: 10, borderRadius: '50%', background: PMA.blue700 }} />}
      </div>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 16, color: PMA.slate950, lineHeight: '24px' }}>{label}</div>
        {meta && <div style={{ fontSize: 14, color: PMA.slate500, lineHeight: '20px' }}>{meta}</div>}
      </div>
    </div>
  );
}

// ─── Switch (M3) ────────────────────────────────────────────────────
function PMASwitch({ on }) {
  return (
    <div style={{
      width: 52, height: 32, borderRadius: 100,
      background: on ? PMA.blue700 : 'transparent',
      border: `2px solid ${on ? PMA.blue700 : PMA.slate500}`,
      display: 'flex', alignItems: 'center',
      justifyContent: on ? 'flex-end' : 'flex-start',
      padding: on ? 2 : 6, boxSizing: 'border-box', flexShrink: 0,
    }}>
      <div style={{
        width: on ? 24 : 16, height: on ? 24 : 16, borderRadius: '50%',
        background: on ? PMA.white : PMA.slate500,
      }} />
    </div>
  );
}

// ─── Chip (filter / assist) ─────────────────────────────────────────
function PMAChip({ label, selected }) {
  return (
    <div style={{
      display: 'inline-flex', alignItems: 'center', gap: 8,
      height: 32, padding: '0 16px', borderRadius: 8,
      background: selected ? PMA.blue100 : 'transparent',
      border: selected ? `1px solid ${PMA.blue100}` : `1px solid ${PMA.slate300}`,
      color: selected ? PMA.blue900 : PMA.slate700,
      fontFamily: AFONT.body, fontSize: 14, fontWeight: 500,
    }}>
      {selected && (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M3 8.5l3.5 3L13 5" stroke={PMA.blue900} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )}
      {label}
    </div>
  );
}

// ─── Card (M3 elevated) ─────────────────────────────────────────────
function PMAPaymentCard() {
  return (
    <div style={{
      background: PMA.white, borderRadius: 12, padding: 20,
      boxShadow: '0 1px 2px rgba(0,0,0,0.06), 0 2px 6px rgba(0,0,0,0.04)',
      fontFamily: AFONT.body,
    }}>
      <div style={{ fontSize: 12, fontWeight: 500, letterSpacing: '0.5px', color: PMA.slate500, textTransform: 'uppercase', marginBottom: 4 }}>Next payment</div>
      <div style={{ fontFamily: AFONT.display, fontSize: 36, fontWeight: 800, color: PMA.slate950, letterSpacing: '-0.02em', fontVariantNumeric: 'tabular-nums' }}>$2,147.82</div>
      <div style={{ fontSize: 14, color: PMA.slate700, marginTop: 4 }}>Due May 1 · Autopay from ••4421</div>

      <div style={{ margin: '16px 0', paddingTop: 12, borderTop: `1px solid ${PMA.slate200}`, display: 'flex', flexDirection: 'column', gap: 6 }}>
        {[['Principal & interest', '$1,482.17'], ['Escrow', '$615.65'], ['PMI', '$50.00']].map(([k, v]) => (
          <div key={k} style={{ display: 'flex', justifyContent: 'space-between', fontSize: 14, color: PMA.slate700 }}>
            <span>{k}</span>
            <span style={{ fontVariantNumeric: 'tabular-nums', fontWeight: 500, color: PMA.slate950 }}>{v}</span>
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', gap: 8 }}>
        <PMAButton label="Pay now" full />
      </div>
    </div>
  );
}

function PMARateCard() {
  return (
    <div style={{
      background: PMA.white, borderRadius: 12, padding: 20,
      boxShadow: '0 1px 2px rgba(0,0,0,0.06), 0 2px 6px rgba(0,0,0,0.04)',
      fontFamily: AFONT.body,
    }}>
      <div style={{ display: 'inline-block', padding: '4px 10px', borderRadius: 9999, background: PMA.blue100, color: PMA.blue900, fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 10 }}>30-year fixed</div>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 4 }}>
        <div style={{ fontFamily: AFONT.display, fontSize: 44, fontWeight: 800, color: PMA.slate950, letterSpacing: '-0.02em', fontVariantNumeric: 'tabular-nums', lineHeight: 1 }}>6.125</div>
        <div style={{ fontFamily: AFONT.display, fontSize: 22, fontWeight: 700, color: PMA.slate700 }}>%</div>
      </div>
      <div style={{ fontSize: 12, color: PMA.slate500, marginTop: 2 }}>6.248% APR</div>
      <div style={{ marginTop: 14, display: 'flex', flexDirection: 'column' }}>
        {[['Principal & interest', '$1,823 / mo'], ['Points', '0.875 ($2,625)']].map(([k, v], i) => (
          <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', fontSize: 14, color: PMA.slate700, borderTop: i > 0 ? `1px dashed ${PMA.slate200}` : 'none' }}>
            <span>{k}</span>
            <span style={{ fontVariantNumeric: 'tabular-nums', fontWeight: 500, color: PMA.slate950 }}>{v}</span>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 14, display: 'flex', gap: 8 }}>
        <PMAButton label="Lock rate" />
        <PMAButton label="Compare" variant="outlined" />
      </div>
    </div>
  );
}

// ─── List item (M3) ─────────────────────────────────────────────────
function PMAListItem({ leading, headline, supporting, trailing, noDivider }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 16,
      padding: '12px 16px', minHeight: 56, background: PMA.white,
      borderBottom: noDivider ? 'none' : `1px solid ${PMA.slate200}`,
      fontFamily: AFONT.body,
    }}>
      {leading && (
        <div style={{
          width: 40, height: 40, borderRadius: '50%',
          background: PMA.blue100, color: PMA.blue900,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 16, fontWeight: 600, flexShrink: 0,
        }}>{leading}</div>
      )}
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 16, color: PMA.slate950, lineHeight: '24px' }}>{headline}</div>
        {supporting && <div style={{ fontSize: 14, color: PMA.slate500, lineHeight: '20px' }}>{supporting}</div>}
      </div>
      {trailing}
    </div>
  );
}

// ─── Banner (M3) ────────────────────────────────────────────────────
function PMABanner({ title, body, tone = 'info', cta }) {
  const tones = {
    info: { bg: PMA.blue100, fg: PMA.blue900 },
    success: { bg: PMA.success100, fg: PMA.success700 },
    warning: { bg: PMA.warning100, fg: PMA.warning700 },
    error: { bg: PMA.error100, fg: PMA.error700 },
  };
  const t = tones[tone];
  return (
    <div style={{ background: t.bg, padding: 16, fontFamily: AFONT.body, color: t.fg }}>
      <div style={{ fontWeight: 600, fontSize: 14 }}>{title}</div>
      <div style={{ fontSize: 14, lineHeight: '20px', marginTop: 2 }}>{body}</div>
      {cta && <div style={{ marginTop: 12, display: 'flex', justifyContent: 'flex-end' }}><PMAButton label={cta} variant="text" /></div>}
    </div>
  );
}

// ─── FAB ────────────────────────────────────────────────────────────
function PMAFab({ label }) {
  return (
    <div style={{
      position: 'absolute', right: 16, bottom: 72,
      height: 56, padding: '0 20px', borderRadius: 16,
      background: PMA.blue700, color: PMA.white,
      display: 'flex', alignItems: 'center', gap: 12,
      boxShadow: '0 4px 12px rgba(0,0,0,0.18)',
      fontFamily: AFONT.body, fontSize: 14, fontWeight: 600, letterSpacing: '0.1px',
    }}>
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 3v14M3 10h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
      {label}
    </div>
  );
}

Object.assign(window, {
  PMAButton, PMAField, PMARadio, PMASwitch, PMAChip,
  PMAPaymentCard, PMARateCard, PMAListItem, PMABanner, PMAFab,
  PMA, AFONT,
});
