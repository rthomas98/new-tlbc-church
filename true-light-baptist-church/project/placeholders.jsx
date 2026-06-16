/* global React */
/* SVG photo placeholders — warm-toned, worship-themed.
   Designed to read as intentional brand-illustrations
   under the red overlay treatment. Each component fills
   100% of its container. */

function PhotoCongregation() {
  return (
    <svg viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id="pc-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#E8B98A"/>
          <stop offset="0.45" stopColor="#C8723D"/>
          <stop offset="1" stopColor="#5C120F"/>
        </linearGradient>
        <radialGradient id="pc-light" cx="0.55" cy="0.18" r="0.7">
          <stop offset="0" stopColor="#FFE6B8" stopOpacity="0.85"/>
          <stop offset="0.5" stopColor="#FFCC7A" stopOpacity="0.25"/>
          <stop offset="1" stopColor="#7A1A16" stopOpacity="0"/>
        </radialGradient>
      </defs>
      <rect width="1200" height="800" fill="url(#pc-sky)"/>
      <rect width="1200" height="800" fill="url(#pc-light)"/>
      {/* arched windows */}
      <g opacity="0.35" fill="#FFE6B8">
        <path d="M180 80 Q180 30 230 30 Q280 30 280 80 L280 280 L180 280 Z"/>
        <path d="M340 80 Q340 30 390 30 Q440 30 440 80 L440 280 L340 280 Z"/>
        <path d="M760 80 Q760 30 810 30 Q860 30 860 80 L860 280 L760 280 Z"/>
        <path d="M920 80 Q920 30 970 30 Q1020 30 1020 80 L1020 280 L920 280 Z"/>
      </g>
      {/* central cross silhouette */}
      <g opacity="0.55" fill="#1E0F0C">
        <rect x="585" y="120" width="30" height="200"/>
        <rect x="540" y="170" width="120" height="26"/>
      </g>
      {/* congregation silhouettes */}
      <g fill="#1E0F0C" opacity="0.92">
        <ellipse cx="120" cy="640" rx="70" ry="90"/>
        <ellipse cx="120" cy="540" rx="38" ry="42"/>
        <ellipse cx="240" cy="660" rx="80" ry="100"/>
        <ellipse cx="240" cy="555" rx="44" ry="46"/>
        <ellipse cx="380" cy="650" rx="74" ry="92"/>
        <ellipse cx="380" cy="548" rx="40" ry="44"/>
        <ellipse cx="520" cy="660" rx="80" ry="100"/>
        <ellipse cx="520" cy="552" rx="44" ry="48"/>
        <ellipse cx="660" cy="650" rx="74" ry="94"/>
        <ellipse cx="660" cy="548" rx="40" ry="44"/>
        <ellipse cx="800" cy="660" rx="82" ry="100"/>
        <ellipse cx="800" cy="552" rx="46" ry="48"/>
        <ellipse cx="940" cy="650" rx="74" ry="92"/>
        <ellipse cx="940" cy="548" rx="40" ry="44"/>
        <ellipse cx="1080" cy="660" rx="80" ry="100"/>
        <ellipse cx="1080" cy="555" rx="44" ry="46"/>
      </g>
      {/* raised hands */}
      <g fill="#3A1A12" opacity="0.85">
        <path d="M380 540 Q378 480 372 430 Q368 410 380 408 Q392 410 388 432 L386 540 Z"/>
        <path d="M520 535 Q518 470 512 415 Q508 395 520 393 Q532 395 528 418 L526 535 Z"/>
        <path d="M800 540 Q798 475 792 420 Q788 400 800 398 Q812 400 808 422 L806 540 Z"/>
      </g>
    </svg>
  );
}

function PhotoPastor() {
  return (
    <svg viewBox="0 0 800 1000" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id="pp-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#5C120F"/>
          <stop offset="0.5" stopColor="#7A1A16"/>
          <stop offset="1" stopColor="#3A0E0B"/>
        </linearGradient>
        <radialGradient id="pp-rim" cx="0.65" cy="0.25" r="0.55">
          <stop offset="0" stopColor="#FFD9A3" stopOpacity="0.5"/>
          <stop offset="1" stopColor="#7A1A16" stopOpacity="0"/>
        </radialGradient>
      </defs>
      <rect width="800" height="1000" fill="url(#pp-bg)"/>
      <rect width="800" height="1000" fill="url(#pp-rim)"/>
      {/* shoulders / suit */}
      <path d="M120 1000 L160 720 Q200 660 280 640 L520 640 Q600 660 640 720 L680 1000 Z" fill="#1E0F0C"/>
      {/* tie hint */}
      <path d="M380 660 L420 660 L415 820 L385 820 Z" fill="#A02319" opacity="0.72"/>
      {/* head */}
      <ellipse cx="400" cy="430" rx="160" ry="190" fill="#6B3520"/>
      {/* hair */}
      <path d="M250 380 Q260 270 400 250 Q540 270 550 380 Q540 320 400 320 Q260 320 250 380 Z" fill="#1E0F0C"/>
      {/* warm light on cheek */}
      <ellipse cx="490" cy="450" rx="60" ry="80" fill="#E8B98A" opacity="0.30"/>
      {/* glasses suggestion */}
      <g fill="none" stroke="#1E0F0C" strokeWidth="6" opacity="0.55">
        <circle cx="346" cy="425" r="32"/>
        <circle cx="454" cy="425" r="32"/>
        <line x1="378" y1="425" x2="422" y2="425"/>
      </g>
      {/* open Bible in hands */}
      <g transform="translate(260 800)">
        <path d="M0 60 L140 30 L280 60 L280 110 L140 80 L0 110 Z" fill="#F4F1EC"/>
        <path d="M140 30 L140 80" stroke="#A02319" strokeWidth="3"/>
        <path d="M20 70 L120 50 M160 50 L260 70" stroke="#1E1E1E" strokeWidth="1" opacity="0.4"/>
      </g>
    </svg>
  );
}

function PhotoWorship() {
  return (
    <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id="pw-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#7A1A16"/>
          <stop offset="1" stopColor="#3A0E0B"/>
        </linearGradient>
        <radialGradient id="pw-glow" cx="0.5" cy="0.2" r="0.55">
          <stop offset="0" stopColor="#FFE0A8" stopOpacity="0.7"/>
          <stop offset="1" stopColor="#7A1A16" stopOpacity="0"/>
        </radialGradient>
      </defs>
      <rect width="800" height="600" fill="url(#pw-bg)"/>
      <rect width="800" height="600" fill="url(#pw-glow)"/>
      {/* arches */}
      <g opacity="0.30" fill="#FFD9A3">
        <path d="M100 240 Q100 180 160 180 Q220 180 220 240 L220 380 L100 380 Z"/>
        <path d="M580 240 Q580 180 640 180 Q700 180 700 240 L700 380 L580 380 Z"/>
      </g>
      {/* raised hands */}
      <g fill="#1E0F0C" opacity="0.92">
        <path d="M260 560 Q255 380 240 260 Q235 230 260 228 Q285 232 280 262 L278 560 Z"/>
        <path d="M340 560 Q335 360 320 240 Q315 210 340 208 Q365 212 360 242 L358 560 Z"/>
        <path d="M420 560 Q415 340 400 220 Q395 190 420 188 Q445 192 440 222 L438 560 Z"/>
        <path d="M500 560 Q495 360 480 240 Q475 210 500 208 Q525 212 520 242 L518 560 Z"/>
        <path d="M580 560 Q575 380 560 260 Q555 230 580 228 Q605 232 600 262 L598 560 Z"/>
      </g>
    </svg>
  );
}

function PhotoBible() {
  return (
    <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id="pb-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#3A0E0B"/>
          <stop offset="1" stopColor="#18130F"/>
        </linearGradient>
        <radialGradient id="pb-spot" cx="0.5" cy="0.5" r="0.55">
          <stop offset="0" stopColor="#FFE0A8" stopOpacity="0.7"/>
          <stop offset="1" stopColor="#18130F" stopOpacity="0"/>
        </radialGradient>
      </defs>
      <rect width="800" height="600" fill="url(#pb-bg)"/>
      <rect width="800" height="600" fill="url(#pb-spot)"/>
      {/* open bible */}
      <g transform="translate(400 320)">
        <path d="M-280 60 Q-280 -40 -10 -50 L-10 80 Q-280 90 -280 60 Z" fill="#F4F1EC"/>
        <path d="M280 60 Q280 -40 10 -50 L10 80 Q280 90 280 60 Z" fill="#F4F1EC"/>
        <path d="M-260 30 L-30 20 M-260 50 L-30 40 M-260 70 L-30 60" stroke="#1E1E1E" strokeWidth="2" opacity="0.45"/>
        <path d="M260 30 L30 20 M260 50 L30 40 M260 70 L30 60" stroke="#1E1E1E" strokeWidth="2" opacity="0.45"/>
        <line x1="0" y1="-50" x2="0" y2="80" stroke="#A02319" strokeWidth="3"/>
        {/* ribbon */}
        <path d="M-120 -45 L-110 100 L-115 90 L-105 100 L-100 -45 Z" fill="#A02319"/>
      </g>
    </svg>
  );
}

function PhotoChildren() {
  return (
    <svg viewBox="0 0 600 800" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id="pch-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#E8B98A"/>
          <stop offset="1" stopColor="#7A1A16"/>
        </linearGradient>
      </defs>
      <rect width="600" height="800" fill="url(#pch-bg)"/>
      <circle cx="300" cy="180" r="120" fill="#FFE0A8" opacity="0.25"/>
      {/* children silhouettes */}
      <g fill="#1E0F0C" opacity="0.92">
        <ellipse cx="160" cy="700" rx="60" ry="100"/>
        <circle cx="160" cy="560" r="42"/>
        <ellipse cx="300" cy="710" rx="68" ry="110"/>
        <circle cx="300" cy="558" r="48"/>
        <ellipse cx="440" cy="700" rx="60" ry="100"/>
        <circle cx="440" cy="560" r="42"/>
      </g>
      {/* raised arms (joy) */}
      <g fill="#3A1A12" opacity="0.9">
        <path d="M300 558 L260 380 Q258 360 270 358 Q282 360 280 380 L300 558 Z"/>
        <path d="M300 558 L340 380 Q342 360 330 358 Q318 360 320 380 L300 558 Z"/>
      </g>
    </svg>
  );
}

function PhotoYouth() {
  return (
    <svg viewBox="0 0 600 800" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id="py-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#5C120F"/>
          <stop offset="1" stopColor="#1E0F0C"/>
        </linearGradient>
      </defs>
      <rect width="600" height="800" fill="url(#py-bg)"/>
      <radialGradient id="py-spot" cx="0.5" cy="0.3" r="0.6">
        <stop offset="0" stopColor="#FFCC7A" stopOpacity="0.55"/>
        <stop offset="1" stopColor="#5C120F" stopOpacity="0"/>
      </radialGradient>
      <rect width="600" height="800" fill="url(#py-spot)"/>
      {/* group of 4 youth */}
      <g fill="#1E0F0C" opacity="0.95">
        <ellipse cx="120" cy="700" rx="65" ry="105"/>
        <circle cx="120" cy="555" r="44"/>
        <ellipse cx="260" cy="710" rx="72" ry="115"/>
        <circle cx="260" cy="552" r="50"/>
        <ellipse cx="400" cy="710" rx="72" ry="115"/>
        <circle cx="400" cy="552" r="50"/>
        <ellipse cx="540" cy="700" rx="65" ry="105"/>
        <circle cx="540" cy="555" r="44"/>
      </g>
    </svg>
  );
}

function PhotoWomen() {
  return (
    <svg viewBox="0 0 600 800" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id="pw2-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#A02319"/>
          <stop offset="1" stopColor="#5C120F"/>
        </linearGradient>
      </defs>
      <rect width="600" height="800" fill="url(#pw2-bg)"/>
      <radialGradient id="pw2-spot" cx="0.5" cy="0.25" r="0.55">
        <stop offset="0" stopColor="#FFE0A8" stopOpacity="0.55"/>
        <stop offset="1" stopColor="#A02319" stopOpacity="0"/>
      </radialGradient>
      <rect width="600" height="800" fill="url(#pw2-spot)"/>
      {/* clasped hands praying */}
      <g fill="#1E0F0C" opacity="0.95">
        <path d="M180 800 L220 480 Q240 440 300 440 Q360 440 380 480 L420 800 Z"/>
      </g>
      <g fill="#3A1A12" opacity="0.95">
        <path d="M260 460 L240 310 Q238 285 260 282 Q282 285 280 310 L295 462 Z"/>
        <path d="M340 460 L360 310 Q362 285 340 282 Q318 285 320 310 L305 462 Z"/>
      </g>
      {/* head with covering */}
      <g fill="#1E0F0C" opacity="0.95">
        <path d="M200 440 Q200 280 300 270 Q400 280 400 440 Z"/>
      </g>
      <ellipse cx="300" cy="380" rx="70" ry="80" fill="#6B3520" opacity="0.85"/>
    </svg>
  );
}

function PhotoMen() {
  return (
    <svg viewBox="0 0 600 800" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id="pm-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#7A1A16"/>
          <stop offset="1" stopColor="#3A0E0B"/>
        </linearGradient>
      </defs>
      <rect width="600" height="800" fill="url(#pm-bg)"/>
      <radialGradient id="pm-spot" cx="0.5" cy="0.3" r="0.6">
        <stop offset="0" stopColor="#FFCC7A" stopOpacity="0.50"/>
        <stop offset="1" stopColor="#7A1A16" stopOpacity="0"/>
      </radialGradient>
      <rect width="600" height="800" fill="url(#pm-spot)"/>
      {/* table silhouette with 3 men */}
      <rect x="60" y="600" width="480" height="20" fill="#1E0F0C" opacity="0.6"/>
      <g fill="#1E0F0C" opacity="0.92">
        <ellipse cx="160" cy="520" rx="80" ry="120"/>
        <circle cx="160" cy="370" r="50"/>
        <ellipse cx="300" cy="500" rx="85" ry="130"/>
        <circle cx="300" cy="350" r="55"/>
        <ellipse cx="440" cy="520" rx="80" ry="120"/>
        <circle cx="440" cy="370" r="50"/>
      </g>
    </svg>
  );
}

function PhotoOutreach() {
  return (
    <svg viewBox="0 0 600 800" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id="po-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#C8723D"/>
          <stop offset="1" stopColor="#5C120F"/>
        </linearGradient>
      </defs>
      <rect width="600" height="800" fill="url(#po-bg)"/>
      <radialGradient id="po-spot" cx="0.5" cy="0.4" r="0.55">
        <stop offset="0" stopColor="#FFE0A8" stopOpacity="0.45"/>
        <stop offset="1" stopColor="#5C120F" stopOpacity="0"/>
      </radialGradient>
      <rect width="600" height="800" fill="url(#po-spot)"/>
      {/* hands giving / receiving */}
      <g fill="#1E0F0C" opacity="0.95">
        <path d="M80 800 L100 480 Q140 440 220 460 L300 500 L300 540 L220 520 Q200 700 200 800 Z"/>
        <path d="M520 800 L500 480 Q460 440 380 460 L300 500 L300 540 L380 520 Q400 700 400 800 Z"/>
      </g>
      {/* heart */}
      <path d="M300 420 Q260 360 230 400 Q210 440 300 510 Q390 440 370 400 Q340 360 300 420 Z" fill="#A02319"/>
    </svg>
  );
}

function PhotoMusic() {
  return (
    <svg viewBox="0 0 600 800" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id="pmu-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#3F8FB3"/>
          <stop offset="0.6" stopColor="#5C120F"/>
          <stop offset="1" stopColor="#1E0F0C"/>
        </linearGradient>
      </defs>
      <rect width="600" height="800" fill="url(#pmu-bg)"/>
      <radialGradient id="pmu-spot" cx="0.5" cy="0.25" r="0.55">
        <stop offset="0" stopColor="#B6D8E6" stopOpacity="0.4"/>
        <stop offset="1" stopColor="#5C120F" stopOpacity="0"/>
      </radialGradient>
      <rect width="600" height="800" fill="url(#pmu-spot)"/>
      {/* choir robes */}
      <g fill="#1E0F0C" opacity="0.95">
        <path d="M80 800 L100 600 Q120 540 180 540 Q240 540 260 600 L260 800 Z"/>
        <circle cx="170" cy="500" r="42"/>
        <path d="M260 800 L280 580 Q300 520 360 520 Q420 520 440 580 L440 800 Z"/>
        <circle cx="360" cy="475" r="48"/>
        <path d="M440 800 L460 600 Q480 540 540 540 Q600 540 620 600 L620 800 Z"/>
        <circle cx="540" cy="500" r="42"/>
      </g>
      {/* music notes */}
      <g fill="#FFE0A8" opacity="0.8">
        <circle cx="200" cy="280" r="10"/>
        <rect x="208" y="220" width="3" height="65"/>
        <circle cx="380" cy="220" r="10"/>
        <rect x="388" y="160" width="3" height="65"/>
        <circle cx="460" cy="320" r="10"/>
        <rect x="468" y="260" width="3" height="65"/>
      </g>
    </svg>
  );
}

function PhotoPrayer() {
  return (
    <svg viewBox="0 0 600 800" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id="ppr-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#5C120F"/>
          <stop offset="1" stopColor="#1E0F0C"/>
        </linearGradient>
      </defs>
      <rect width="600" height="800" fill="url(#ppr-bg)"/>
      <radialGradient id="ppr-spot" cx="0.5" cy="0.3" r="0.55">
        <stop offset="0" stopColor="#FFE0A8" stopOpacity="0.55"/>
        <stop offset="1" stopColor="#5C120F" stopOpacity="0"/>
      </radialGradient>
      <rect width="600" height="800" fill="url(#ppr-spot)"/>
      {/* praying hands clasped */}
      <g fill="#3A1A12" opacity="0.95">
        <path d="M220 800 L250 380 Q270 320 300 320 Q330 320 350 380 L380 800 Z"/>
      </g>
      <g fill="#1E0F0C" opacity="0.92">
        <path d="M250 340 Q235 200 270 180 Q300 180 295 240 L295 380 Z"/>
        <path d="M350 340 Q365 200 330 180 Q300 180 305 240 L305 380 Z"/>
      </g>
    </svg>
  );
}

function PhotoSenior() {
  return (
    <svg viewBox="0 0 600 800" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id="psr-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#A02319"/>
          <stop offset="1" stopColor="#3A0E0B"/>
        </linearGradient>
      </defs>
      <rect width="600" height="800" fill="url(#psr-bg)"/>
      <radialGradient id="psr-spot" cx="0.5" cy="0.3" r="0.6">
        <stop offset="0" stopColor="#FFCC7A" stopOpacity="0.40"/>
        <stop offset="1" stopColor="#A02319" stopOpacity="0"/>
      </radialGradient>
      <rect width="600" height="800" fill="url(#psr-spot)"/>
      <g fill="#1E0F0C" opacity="0.95">
        <ellipse cx="220" cy="700" rx="80" ry="120"/>
        <circle cx="220" cy="540" r="55"/>
        <ellipse cx="380" cy="700" rx="80" ry="120"/>
        <circle cx="380" cy="540" r="55"/>
      </g>
      {/* hair white to suggest seniors */}
      <g fill="#F4F1EC" opacity="0.85">
        <path d="M170 530 Q170 480 220 478 Q270 480 270 530 Q260 510 220 510 Q180 510 170 530 Z"/>
        <path d="M330 530 Q330 480 380 478 Q430 480 430 530 Q420 510 380 510 Q340 510 330 530 Z"/>
      </g>
    </svg>
  );
}

function PhotoSermon() {
  return (
    <svg viewBox="0 0 800 1000" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id="ps-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#7A1A16"/>
          <stop offset="0.6" stopColor="#3A0E0B"/>
          <stop offset="1" stopColor="#18130F"/>
        </linearGradient>
      </defs>
      <rect width="800" height="1000" fill="url(#ps-bg)"/>
      <radialGradient id="ps-spot" cx="0.5" cy="0.35" r="0.6">
        <stop offset="0" stopColor="#FFE0A8" stopOpacity="0.55"/>
        <stop offset="1" stopColor="#7A1A16" stopOpacity="0"/>
      </radialGradient>
      <rect width="800" height="1000" fill="url(#ps-spot)"/>
      {/* pulpit */}
      <path d="M280 700 L520 700 L540 1000 L260 1000 Z" fill="#1E0F0C"/>
      <rect x="300" y="680" width="200" height="40" fill="#3A1A12"/>
      {/* preacher silhouette */}
      <g fill="#1E0F0C" opacity="0.95">
        <ellipse cx="400" cy="540" rx="120" ry="160"/>
        <circle cx="400" cy="370" r="70"/>
      </g>
      {/* raised hand */}
      <path d="M520 480 L600 320 Q610 290 590 290 Q570 295 565 320 L500 470 Z" fill="#3A1A12" opacity="0.92"/>
      {/* light rays */}
      <g opacity="0.18" stroke="#FFE0A8" strokeWidth="2" fill="none">
        <line x1="400" y1="0" x2="200" y2="400"/>
        <line x1="400" y1="0" x2="400" y2="400"/>
        <line x1="400" y1="0" x2="600" y2="400"/>
      </g>
    </svg>
  );
}

function PhotoEvent({ tone = 'maroon' }) {
  const grads = {
    maroon: ['#7A1A16', '#3A0E0B'],
    amber: ['#C8723D', '#5C120F'],
    blue: ['#3F8FB3', '#1E0F0C'],
    dark: ['#3A0E0B', '#18130F'],
  };
  const id = `pe-${tone}`;
  const [a, b] = grads[tone];
  return (
    <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={a}/>
          <stop offset="1" stopColor={b}/>
        </linearGradient>
      </defs>
      <rect width="800" height="600" fill={`url(#${id})`}/>
      <g opacity="0.20" fill="#FFE0A8">
        <circle cx="650" cy="120" r="80"/>
      </g>
      <g fill="#1E0F0C" opacity="0.85">
        <ellipse cx="200" cy="540" rx="60" ry="80"/>
        <circle cx="200" cy="420" r="36"/>
        <ellipse cx="320" cy="550" rx="68" ry="90"/>
        <circle cx="320" cy="420" r="40"/>
        <ellipse cx="450" cy="540" rx="60" ry="80"/>
        <circle cx="450" cy="420" r="36"/>
        <ellipse cx="570" cy="550" rx="68" ry="90"/>
        <circle cx="570" cy="420" r="40"/>
      </g>
    </svg>
  );
}

Object.assign(window, {
  PhotoCongregation, PhotoPastor, PhotoWorship, PhotoBible,
  PhotoChildren, PhotoYouth, PhotoWomen, PhotoMen, PhotoOutreach,
  PhotoMusic, PhotoPrayer, PhotoSenior, PhotoSermon, PhotoEvent,
});
