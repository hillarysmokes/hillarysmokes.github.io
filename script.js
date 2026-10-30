 :root {
     --bg: #07111d;
     --bg-strong: #0b1424;
     --surface: rgba(16, 26, 45, 0.88);
     --surface-strong: #111d31;
     --surface-soft: rgba(255, 255, 255, 0.03);
     --card-border: rgba(148, 163, 184, 0.18);
     --text: #e5edf8;
     --muted: #9fb2c8;
     --green: #68f0c0;
     --green-strong: #8af8d6;
     --blue: #68b5ff;
     --purple: #b296ff;
     --shadow: rgba(2, 6, 23, 0.55);
     --container: 1140px;
 }

 * {
     box-sizing: border-box;
     margin: 0;
     padding: 0;
 }

 html {
     scroll-behavior: smooth;
     scroll-padding-top: 90px;
 }

 body {
     font-family: "Segoe UI", Arial, sans-serif;
     line-height: 1.7;
     background:
         radial-gradient(circle at top, rgba(104, 181, 255, 0.12), transparent 30%),
         radial-gradient(circle at bottom right, rgba(104, 240, 192, 0.08), transparent 35%),
         var(--bg);
     color: var(--text);
     overflow-x: hidden;
 }

 a {
     color: inherit;
     text-decoration: none;
 }

 img {
     max-width: 100%;
     display: block;
 }

 button,
 input {
     font: inherit;
 }

 .container {
     width: min(var(--container), calc(100% - 32px));
     margin: 0 auto;
 }

 .accent {
     color: var(--green);
 }

 .gradient-text {
     color: transparent;
     background: linear-gradient(90deg, var(--green), var(--blue));
     -webkit-background-clip: text;
     background-clip: text;
 }

 .muted {
     color: var(--muted);
 }

 h1,
 h2,
 h3,
 h4 {
     line-height: 1.15;
     letter-spacing: -0.04em;
 }

 .eyebrow {
     margin-bottom: 14px;
     font-size: 11px;
     font-weight: 700;
     letter-spacing: 2px;
     color: var(--green);
 }

 .site-header {
     position: sticky;
     top: 0;
     z-index: 100;
     backdrop-filter: blur(12px);
     background: rgba(7, 17, 29, 0.8);
     border-bottom: 1px solid rgba(148, 163, 184, 0.12);
 }

 .nav-wrap {
     display: flex;
     align-items: center;
     justify-content: space-between;
     min-height: 78px;
     gap: 16px;
 }

 .logo {
     display: inline-flex;
     align-items: center;
     gap: 12px;
     font-weight: 800;
     letter-spacing: -0.8px;
     font-size: 1.25rem;
 }

 .logo-icon {
     width: 38px;
     height: 38px;
     display: grid;
     place-items: center;
     border-radius: 12px;
     border: 1px solid rgba(104, 240, 192, 0.3);
     background: rgba(104, 240, 192, 0.08);
     color: var(--green);
     font-size: 0.72rem;
 }

 .nav-links {
     display: flex;
     align-items: center;
     gap: 28px;
 }

 .nav-links a {
     color: var(--muted);
     font-size: 0.78rem;
     transition: color 0.2s ease;
 }

 .nav-links a:hover,
 .nav-links a:focus-visible {
     color: var(--green);
 }

 .nav-links .nav-cta {
     padding: 10px 14px;
     border: 1px solid var(--card-border);
     border-radius: 10px;
     color: var(--text);
     background: rgba(255, 255, 255, 0.015);
 }

 .nav-cta span {
     margin-left: 4px;
     color: var(--green);
 }

 .menu-toggle {
     display: none;
     width: 44px;
     height: 44px;
     flex-direction: column;
     justify-content: center;
     align-items: center;
     gap: 5px;
     border: 1px solid var(--card-border);
     border-radius: 10px;
     background: transparent;
     cursor: pointer;
 }

 .menu-toggle span {
     display: block;
     width: 18px;
     height: 2px;
     border-radius: 999px;
     background: var(--text);
 }

 .hero {
     display: grid;
     grid-template-columns: 1.08fr 0.92fr;
     align-items: center;
     gap: 56px;
     min-height: 670px;
     padding-top: 78px;
     padding-bottom: 88px;
 }

 .hero-copy {
     min-width: 0;
 }

 .status-pill {
     display: inline-flex;
     align-items: center;
     gap: 9px;
     margin-bottom: 28px;
     padding: 8px 12px;
     border: 1px solid var(--card-border);
     border-radius: 999px;
     background: rgba(255, 255, 255, 0.025);
     color: #d9e6f7;
     font-size: 11px;
 }

 .status-dot {
     width: 8px;
     height: 8px;
     border-radius: 50%;
     background: var(--green);
     box-shadow: 0 0 12px rgba(104, 240, 192, 0.7);
 }

 .hero h1 {
     max-width: 640px;
     font-size: clamp(2.7rem, 5vw, 4.1rem);
     font-weight: 800;
     letter-spacing: -0.06em;
 }

 .hero-description {
     max-width: 560px;
     margin-top: 22px;
     color: var(--muted);
     font-size: 1rem;
     line-height: 1.9;
 }

 .hero-actions {
     display: flex;
     flex-wrap: wrap;
     gap: 14px;
     margin-top: 32px;
 }

 .button {
     display: inline-flex;
     justify-content: center;
     align-items: center;
     gap: 10px;
     min-height: 48px;
     padding: 12px 18px;
     border-radius: 10px;
     font-size: 0.76rem;
     font-weight: 700;
     letter-spacing: 0.01em;
     transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
 }

 .button:hover,
 .button:focus-visible {
     transform: translateY(-2px);
 }

 .button-primary {
     background: linear-gradient(135deg, var(--green), var(--green-strong));
     color: #08151a;
     box-shadow: 0 18px 30px rgba(104, 240, 192, 0.16);
 }

 .button-secondary {
     border: 1px solid var(--card-border);
     background: rgba(255, 255, 255, 0.02);
     color: var(--text);
 }

 .social-links {
     display: flex;
     align-items: center;
     gap: 16px;
     margin-top: 30px;
     color: var(--muted);
     font-size: 0.74rem;
 }

 .social-links a:hover,
 .social-links a:focus-visible {
     color: var(--green);
 }

 .separator {
     width: 5px;
     height: 5px;
     border-radius: 50%;
     background: rgba(148, 163, 184, 0.7);
 }

 .hero-visual {
     position: relative;
     display: grid;
     place-items: center;
     min-height: 430px;
 }

 .code-card {
     position: relative;
     z-index: 2;
     width: min(430px, 100%);
     border: 1px solid rgba(148, 163, 184, 0.2);
     border-radius: 18px;
     background: linear-gradient(145deg, #12213a, #0d1628);
     box-shadow: 0 28px 80px rgba(0, 0, 0, 0.28);
     overflow: hidden;
 }

 .code-header {
     display: flex;
     justify-content: space-between;
     align-items: center;
     min-height: 52px;
     padding: 0 20px;
     border-bottom: 1px solid var(--card-border);
 }

 .window-dots {
     display: flex;
     gap: 7px;
 }

 .window-dots span {
     width: 8px;
     height: 8px;
     border-radius: 50%;
     background: #475569;
 }

 .window-dots span:first-child {
     background: #fb7185;
 }

 .window-dots span:nth-child(2) {
     background: #fbbf24;
 }

 .window-dots span:nth-child(3) {
     background: var(--green);
 }

 .code-label {
     color: #7e93af;
     font-size: 9px;
     letter-spacing: 1.5px;
 }

 .code-body {
     padding: 26px 22px 27px;
     color: #dfeaf9;
     font-family: Consolas, Monaco, monospace;
     font-size: 11px;
     line-height: 2.2;
 }

 .code-body p {
     white-space: nowrap;
 }

 .indent {
     padding-left: 20px;
 }

 .indent-more {
     padding-left: 40px;
 }

 .purple {
     color: #d1b5ff;
 }

 .green {
     color: var(--green);
 }

 .code-footer {
     display: flex;
     align-items: center;
     gap: 12px;
     padding: 16px 20px;
     border-top: 1px solid var(--card-border);
     background: rgba(255, 255, 255, 0.025);
 }

 .footer-symbol {
     display: grid;
     place-items: center;
     width: 36px;
     height: 36px;
     border-radius: 9px;
     background: rgba(104, 240, 192, 0.1);
     color: var(--green);
     font-size: 1.15rem;
 }

 .code-footer strong {
     font-size: 11px;
 }

 .code-footer p {
     margin-top: 3px;
     color: var(--muted);
     font-size: 10px;
 }

 .floating-card {
     position: absolute;
     z-index: 3;
     display: flex;
     align-items: center;
     gap: 10px;
     padding: 12px 14px;
     border: 1px solid rgba(148, 163, 184, 0.24);
     border-radius: 12px;
     background: rgba(17, 29, 49, 0.96);
     box-shadow: 0 18px 35px rgba(0, 0, 0, 0.22);
 }

 .floating-top {
     top: 22px;
     right: -10px;
 }

 .floating-bottom {
     bottom: 18px;
     left: -18px;
 }

 .floating-icon {
     display: grid;
     place-items: center;
     width: 34px;
     height: 34px;
     border-radius: 9px;
     background: rgba(104, 181, 255, 0.12);
     color: var(--blue);
     font-size: 1.1rem;
 }

 .green-icon {
     background: rgba(104, 240, 192, 0.12);
     color: var(--green);
 }

 .floating-card strong,
 .floating-card small {
     display: block;
 }

 .floating-card strong {
     font-size: 10px;
 }

 .floating-card small {
     margin-top: 2px;
     color: var(--muted);
     font-size: 9px;
 }

 .focus-strip {
     border-top: 1px solid var(--card-border);
     border-bottom: 1px solid var(--card-border);
     background: rgba(255, 255, 255, 0.015);
 }

 .focus-content {
     display: flex;
     flex-wrap: wrap;
     align-items: center;
     justify-content: space-between;
     min-height: 82px;
     gap: 18px;
     color: #dfeaf9;
 }

 .focus-label {
     color: #7a8ea6;
     font-size: 10px;
     font-weight: 700;
     letter-spacing: 1.3px;
 }

 .focus-content > span:not(.focus-label) {
     font-size: 12px;
 }

 .section {
     padding-top: 110px;
     padding-bottom: 110px;
 }

 .section-heading {
     margin-bottom: 38px;
 }

 .section-heading h2,
 .contact-box h2 {
     font-size: clamp(2rem, 3vw, 3rem);
     font-weight: 700;
     letter-spacing: -0.06em;
 }

 .section-description {
     max-width: 560px;
     margin-top: 16px;
     color: var(--muted);
     line-height: 1.9;
 }

 .section-dark {
     border-top: 1px solid rgba(148, 163, 184, 0.08);
     border-bottom: 1px solid rgba(148, 163, 184, 0.08);
     background: rgba(255, 255, 255, 0.015);
 }

 .about-grid {
     display: grid;
     grid-template-columns: 1.15fr 0.85fr;
     gap: 56px;
     align-items: start;
 }

 .about-copy p {
     margin-bottom: 18px;
     color: var(--muted);
     line-height: 1.95;
 }

 .text-link {
     display: inline-block;
     margin-top: 8px;
     color: var(--green);
     font-size: 0.76rem;
     font-weight: 700;
 }

 .about-details {
     display: grid;
     gap: 14px;
 }

 .detail-card {
     display: flex;
     gap: 18px;
     padding: 22px 20px;
     border: 1px solid var(--card-border);
     border-radius: 14px;
     background: rgba(255, 255, 255, 0.02);
 }

 .detail-number {
     color: var(--green);
     font-size: 12px;
     font-weight: 700;
 }

 .detail-card h3 {
     margin-bottom: 6px;
     font-size: 1rem;
 }

 .detail-card p {
     color: var(--muted);
     font-size: 0.76rem;
     line-height: 1.8;
 }

 .expertise-grid {
     display: grid;
     grid-template-columns: repeat(4, minmax(0, 1fr));
     gap: 18px;
 }

 .expertise-card {
     position: relative;
     min-width: 0;
     padding: 22px 20px;
     border: 1px solid var(--card-border);
     border-radius: 14px;
     background: rgba(12, 21, 37, 0.7);
     transition: transform 0.2s ease, border-color 0.2s ease;
 }

 .expertise-card:hover {
     transform: translateY(-4px);
     border-color: rgba(104, 240, 192, 0.35);
 }

 .expertise-icon {
     display: grid;
     place-items: center;
     width: 44px;
     height: 44px;
     margin-bottom: 20px;
     border: 1px solid rgba(104, 240, 192, 0.2);
     border-radius: 12px;
     background: rgba(104, 240, 192, 0.08);
     color: var(--green);
     font-size: 1.1rem;
 }

 .code-icon {
     font-family: monospace;
     font-size: 0.9rem;
 }

 .card-number {
     position: absolute;
     top: 22px;
     right: 18px;
     color: #64748b;
     font-size: 10px;
 }

 .expertise-card h3 {
     margin-bottom: 10px;
     font-size: 1.02rem;
 }

 .expertise-card > p {
     min-height: 88px;
     color: var(--muted);
     font-size: 0.76rem;
     line-height: 1.85;
 }

 .tags {
     display: flex;
     flex-wrap: wrap;
     gap: 6px;
 }

 .tags span {
     padding: 5px 8px;
     border: 1px solid rgba(148, 163, 184, 0.15);
     border-radius: 7px;
     background: rgba(255, 255, 255, 0.02);
     color: #aed0ef;
     font-size: 9px;
 }

 .expertise-card .tags {
     margin-top: 18px;
 }

 .heading-row {
     display: flex;
     align-items: end;
     justify-content: space-between;
     gap: 18px;
 }

 .projects-grid {
     display: grid;
     grid-template-columns: repeat(2, minmax(0, 1fr));
     gap: 22px;
 }

 .project-card {
     min-width: 0;
     border: 1px solid var(--card-border);
     border-radius: 16px;
     overflow: hidden;
     background: rgba(255, 255, 255, 0.02);
     transition: transform 0.2s ease, border-color 0.2s ease;
 }

 .project-card:hover {
     transform: translateY(-5px);
     border-color: rgba(104, 240, 192, 0.35);
 }

 .project-featured {
     grid-column: 1 / -1;
 }

 .project-top {
     display: flex;
     justify-content: space-between;
     align-items: center;
     padding: 18px 20px 12px;
 }

 .project-type {
     color: #8193aa;
     font-size: 9px;
     font-weight: 700;
     letter-spacing: 1.5px;
 }

 .project-arrow {
     color: var(--green);
 }

 .project-art {
     position: relative;
     display: grid;
     place-items: center;
     min-height: 210px;
     overflow: hidden;
 }

 .project-featured .project-art {
     min-height: 235px;
 }

 .clyix-art {
     background:
         radial-gradient(circle, rgba(104, 240, 192, 0.12), transparent 55%),
         linear-gradient(135deg, #102438, #0e1729);
 }

 .art-orbit {
     position: absolute;
     border: 1px solid rgba(104, 240, 192, 0.14);
     border-radius: 50%;
 }

 .orbit-one {
     width: 230px;
     height: 230px;
 }

 .orbit-two {
     width: 182px;
     height: 182px;
     border-color: rgba(104, 181, 255, 0.14);
 }

 .brand-art {
     position: relative;
     z-index: 1;
     display: grid;
     justify-items: center;
     gap: 6px;
 }

 .brand-mark {
     display: grid;
     place-items: center;
     width: 58px;
     height: 58px;
     border-radius: 16px;
     border: 1px solid rgba(104, 240, 192, 0.38);
     background: rgba(104, 240, 192, 0.08);
     color: var(--green);
     font-size: 1.8rem;
     font-weight: 700;
 }

 .brand-art h3 {
     font-size: 1.5rem;
     letter-spacing: 4px;
 }

 .brand-art p {
     color: #8ea5b8;
     font-size: 10px;
     letter-spacing: 1px;
 }

 .tools-art {
     background:
         radial-gradient(circle, rgba(104, 181, 255, 0.12), transparent 60%),
         #111b2e;
 }

 .tool-shape {
     position: absolute;
     display: grid;
     place-items: center;
     width: 76px;
     height: 76px;
     border-radius: 18px;
     border: 1px solid rgba(104, 181, 255, 0.28);
     background: rgba(104, 181, 255, 0.08);
     color: var(--blue);
     font-family: monospace;
     font-size: 1.5rem;
 }

 .tool-one {
     transform: translate(-42px, 0) rotate(-12deg);
 }

 .tool-two {
     transform: translate(42px, -18px) rotate(12deg);
     color: var(--green);
 }

 .tool-three {
     transform: translate(48px, 44px) rotate(-8deg);
     color: var(--purple);
 }

 .zibnb-art {
     background:
         radial-gradient(circle, rgba(167, 139, 250, 0.18), transparent 60%),
         #151a32;
 }

 .platform-window {
     width: 190px;
     padding: 14px;
     border-radius: 10px;
     border: 1px solid rgba(167, 139, 250, 0.25);
     background: rgba(15, 23, 42, 0.9);
     box-shadow: 0 22px 46px rgba(0, 0, 0, 0.2);
 }

 .platform-dots {
     display: flex;
     gap: 5px;
 }

 .platform-dots span {
     width: 6px;
     height: 6px;
     border-radius: 50%;
     background: #8b80c5;
 }

 .platform-line {
     height: 7px;
     margin-top: 16px;
     border-radius: 4px;
     background: rgba(167, 139, 250, 0.32);
 }

 .short-line {
     width: 65%;
     margin-top: 8px;
     background: rgba(148, 163, 184, 0.18);
 }

 .platform-blocks {
     display: flex;
     gap: 7px;
     margin-top: 16px;
 }

 .platform-blocks span {
     flex: 1;
     height: 34px;
     border: 1px solid rgba(167, 139, 250, 0.2);
     border-radius: 5px;
     background: rgba(167, 139, 250, 0.08);
 }

 .project-info {
     padding: 22px 20px 20px;
 }

 .project-info h3 {
     margin-bottom: 10px;
     font-size: 1.2rem;
 }

 .project-info > p {
     color: var(--muted);
     font-size: 0.76rem;
     line-height: 1.9;
 }

 .project-bottom {
     display: flex;
     justify-content: space-between;
     align-items: center;
     gap: 12px;
     margin-top: 18px;
 }

 .project-bottom > a {
     flex-shrink: 0;
     color: var(--green);
     font-size: 10px;
     font-weight: 700;
 }

 .project-note {
     margin-top: 20px;
     color: #778aa1;
     font-size: 11px;
 }

 .timeline {
     max-width: 860px;
     margin-inline: auto;
 }

 .timeline-item {
     position: relative;
     display: grid;
     grid-template-columns: 150px 1fr;
     gap: 34px;
     padding: 0 0 42px 24px;
     border-left: 1px solid rgba(104, 240, 192, 0.2);
 }

 .timeline-item:last-child {
     padding-bottom: 0;
     border-left-color: transparent;
 }

 .timeline-item::before {
     content: "";
     position: absolute;
     left: -5px;
     top: 4px;
     width: 9px;
     height: 9px;
     border-radius: 50%;
     background: var(--bg);
     border: 2px solid var(--green);
 }

 .timeline-date {
     color: var(--green);
     font-size: 10px;
     font-weight: 700;
 }

 .timeline-label {
     display: inline-block;
     color: #71839b;
     font-size: 9px;
     letter-spacing: 1.5px;
 }

 .timeline-content h3 {
     margin-top: 8px;
     font-size: 1.2rem;
 }

 .timeline-content h4 {
     margin-top: 6px;
     color: #c0cfdf;
     font-size: 0.8rem;
     font-weight: 500;
 }

 .timeline-content p {
     margin-top: 12px;
     color: var(--muted);
     line-height: 1.9;
 }

 .contact-section {
     padding-top: 90px;
     padding-bottom: 110px;
 }

 .contact-box {
     position: relative;
     display: grid;
     justify-items: center;
     gap: 18px;
     padding: 52px 22px 40px;
     text-align: center;
     border: 1px solid var(--card-border);
     border-radius: 24px;
     background: radial-gradient(circle at center, rgba(104, 181, 255, 0.08), transparent 40%), rgba(17, 29, 49, 0.78);
 }

 .contact-orbit {
     position: absolute;
     inset: 15% 18%;
     border: 1px solid rgba(104, 240, 192, 0.12);
     border-radius: 50%;
 }

 .contact-box > * {
     position: relative;
     z-index: 1;
 }

 .contact-description {
     max-width: 620px;
     color: var(--muted);
     line-height: 1.9;
 }

 .contact-email {
     margin-top: 2px;
     color: var(--green);
     font-size: 0.78rem;
 }

 .site-footer {
     border-top: 1px solid rgba(148, 163, 184, 0.09);
     background: rgba(8, 15, 26, 0.9);
 }

 .footer-content {
     display: grid;
     justify-items: center;
     gap: 16px;
     padding: 28px 0 36px;
     text-align: center;
 }

 .footer-tagline {
     color: var(--muted);
     font-size: 0.78rem;
 }

 .footer-links {
     display: flex;
     align-items: center;
     gap: 18px;
     color: var(--muted);
     font-size: 0.75rem;
 }

 .copyright {
     color: #7d8ea6;
     font-size: 0.72rem;
 }

 @media (max-width: 920px) {
     .hero {
         grid-template-columns: 1fr;
         padding-top: 58px;
         padding-bottom: 54px;
     }

     .hero-copy,
     .hero-visual {
         max-width: 640px;
         width: 100%;
         margin: 0 auto;
     }

     .about-grid,
     .expertise-grid,
     .projects-grid {
         grid-template-columns: 1fr 1fr;
     }
 }

 @media (max-width: 700px) {
     .menu-toggle {
         display: inline-flex;
     }

     .nav-links {
         position: absolute;
         top: 78px;
         left: 16px;
         right: 16px;
         display: none;
         flex-direction: column;
         align-items: flex-start;
         gap: 14px;
         padding: 18px 16px;
         border: 1px solid var(--card-border);
         border-radius: 14px;
         background: rgba(11, 20, 35, 0.98);
         box-shadow: 0 18px 35px rgba(0, 0, 0, 0.2);
     }

     .nav-links.is-open {
         display: flex;
     }

     .nav-links a {
         width: 100%;
         font-size: 0.8rem;
     }

     .about-grid,
     .expertise-grid,
     .projects-grid,
     .timeline-item {
         grid-template-columns: 1fr;
     }

     .heading-row {
         flex-direction: column;
         align-items: flex-start;
     }

     .timeline-item {
         gap: 18px;
         padding-left: 18px;
     }
 }

 @media (max-width: 480px) {
     .hero h1 {
         font-size: 2.5rem;
     }

     .status-pill {
         font-size: 10px;
     }

     .button,
     .nav-cta {
         width: 100%;
     }

     .hero-actions {
         flex-direction: column;
     }

     .social-links {
         flex-wrap: wrap;
         gap: 10px 16px;
     }
 }

 a:focus-visible,
 button:focus-visible {
     outline: 2px solid var(--green);
     outline-offset: 3px;
 }
