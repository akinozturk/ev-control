const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
function closeMenu() { navigation.classList.remove('open'); menuButton.setAttribute('aria-expanded', 'false'); }
menuButton.addEventListener('click', () => { const open = menuButton.getAttribute('aria-expanded') !== 'true'; menuButton.setAttribute('aria-expanded', String(open)); navigation.classList.toggle('open', open); });
navigation.addEventListener('click', (event) => { if (event.target.closest('a')) closeMenu(); });
document.addEventListener('keydown', (event) => { if (event.key === 'Escape' && navigation.classList.contains('open')) { closeMenu(); menuButton.focus(); } });
document.querySelector('#download-brief').addEventListener('click', () => {
  const brief = `EV SOFTWARE PROJECT BRIEF\n\nCompany:\nContact:\n\n1. Engineering challenge\nDescribe the function, issue, or integration need.\n\n2. Domain\nVCU / BMS / Motor control / On-board charger (OBC)\n\n3. Target environment\nECU or microcontroller:\nSoftware stack and toolchain:\nInterfaces and communication protocols:\n\n4. Scope and deliverables\nRequired implementation, calibration, or verification work:\nAcceptance criteria:\n\n5. Available inputs\nRequirements and interface documents:\nRepresentative datasets:\nHardware and laboratory access:\n\n6. Program needs\nTarget timeline:\nRequired safety and cybersecurity work products:\nPreferred engagement model:\n\nUse an agreed secure channel for confidential program information.\n`;
  const url = URL.createObjectURL(new Blob([brief], {type:'text/plain;charset=utf-8'}));
  const anchor = document.createElement('a'); anchor.href=url; anchor.download='ev-software-project-brief.txt'; document.body.append(anchor); anchor.click(); anchor.remove(); setTimeout(() => URL.revokeObjectURL(url), 1000);
  document.querySelector('#announcement').textContent='Project brief downloaded.';
});
