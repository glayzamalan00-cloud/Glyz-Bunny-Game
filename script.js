(() => {
  // ================= SETTINGS (easy to edit) =================
  const AUTHOR = 'Glayza D. Malan';
  const MAX_LIVES = 3;
  const MAX_HINTS = 3;
  const GROW_SPEED = 3.0;   // how fast the cable stretches
  const WALK_SPEED = 3.0;   // how fast the bunny hops along
  const JUMP_V = 11;        // jump strength
  const GRAV = 0.65;        // gravity
  const STAGE_LEN = 5;      // servers per stage (the last one is the GOAL)

  // ================= QUESTIONS =================
  // First answer in each "a" list is the correct one (they get shuffled when shown).
  const TOPICS = {
    all: 'All topics',
    net: 'Networking',
    web: 'Web & Programming',
    db:  'Databases',
    sec: 'Security',
    hw:  'Hardware & OS'
  };

  const QUESTIONS = [
    // ---- Networking ----
    { t:'net', q:'Which device connects different networks and forwards data using IP addresses?',
      a:['Router','Hub','Repeater','Network cable'],
      e:'A router connects networks (like your home LAN to the internet) and forwards packets using IP addresses.' },
    { t:'net', q:'What does DNS do?',
      a:['Turns domain names into IP addresses','Encrypts web traffic','Gives IP addresses automatically','Blocks hackers'],
      e:'DNS works like a phonebook: it converts names like google.com into IP addresses.' },
    { t:'net', q:'Which service automatically gives IP addresses to devices on a network?',
      a:['DHCP','DNS','FTP','SMTP'],
      e:'DHCP assigns IP address, subnet mask, gateway and DNS to devices automatically.' },
    { t:'net', q:'In the client-server model, what does the server do?',
      a:['Provides data or services when a client asks','Only shows web pages to the user','Sends requests to the client','Only stores the user\'s passwords'],
      e:'Clients send requests; the server processes them and sends back a response.' },
    { t:'net', q:'What is the default port number of HTTPS?',
      a:['443','80','21','25'],
      e:'HTTPS uses port 443. Plain HTTP uses port 80.' },
    { t:'net', q:'A switch uses what to forward data inside a LAN?',
      a:['MAC addresses','Domain names','Email addresses','Passwords'],
      e:'Switches learn MAC addresses and send frames only to the correct port.' },
    { t:'net', q:'Which command checks if another computer is reachable on the network?',
      a:['ping','dir','cls','format'],
      e:'ping sends small ICMP messages and shows if the other device replies.' },
    { t:'net', q:'How many bits are in an IPv4 address?',
      a:['32','16','64','128'],
      e:'IPv4 has 32 bits (like 192.168.1.1). IPv6 has 128 bits.' },
    { t:'net', q:'Which cable is commonly used for wired LAN connections (RJ45)?',
      a:['UTP / Ethernet cable','HDMI cable','USB-A to micro-USB cable','Power cord'],
      e:'UTP cables (Cat5e, Cat6) with RJ45 connectors are the standard for wired LAN.' },
    { t:'net', q:'What does LAN stand for?',
      a:['Local Area Network','Large Area Network','Linked Access Network','Local Application Node'],
      e:'A LAN connects devices in a small area like a room, home, school or office.' },
    { t:'net', q:'What does ISP stand for?',
      a:['Internet Service Provider','Internal Server Protocol','Integrated Signal Port','Internet Speed Program'],
      e:'An ISP is the company that gives you access to the internet, like PLDT, Globe or Converge.' },

    // ---- Web & Programming ----
    { t:'web', q:'What does HTML stand for?',
      a:['HyperText Markup Language','Home Tool Markup Language','HyperTransfer Markup Logic','High Text Machine Language'],
      e:'HTML is the markup language that gives a web page its structure.' },
    { t:'web', q:'Which language is used to style web pages (colors, fonts, layout)?',
      a:['CSS','SQL','Python','Git'],
      e:'CSS (Cascading Style Sheets) controls how HTML elements look.' },
    { t:'web', q:'What kind of website can GitHub Pages host?',
      a:['Static sites (HTML, CSS, JavaScript)','Only PHP and MySQL sites','Only mobile apps','Only databases'],
      e:'GitHub Pages serves static files. It cannot run server-side code like PHP.' },
    { t:'web', q:'Which Git command uploads your commits to GitHub?',
      a:['git push','git pull','git clone','git init'],
      e:'git push sends your local commits to the remote repository. git pull downloads changes.' },
    { t:'web', q:'Which HTML tag creates the biggest heading?',
      a:['<h1>','<h6>','<head>','<p>'],
      e:'<h1> is the largest heading and <h6> is the smallest.' },
    { t:'web', q:'Which symbol starts a single-line comment in JavaScript?',
      a:['//','#','<!--','**'],
      e:'In JavaScript, // starts a one-line comment. # is used in Python.' },
    { t:'web', q:'In JavaScript, which keyword declares a constant that cannot be reassigned?',
      a:['const','let','var','new'],
      e:'const creates a variable whose value cannot be reassigned.' },
    { t:'web', q:'Which HTML tag creates a clickable link?',
      a:['<a>','<link>','<img>','<br>'],
      e:'The <a> (anchor) tag makes links, like <a href="page.html">.' },

    // ---- Databases ----
    { t:'db', q:'What does SQL stand for?',
      a:['Structured Query Language','Simple Question Language','Standard Query Logic','Sequential Query Line'],
      e:'SQL is the language used to talk to relational databases.' },
    { t:'db', q:'Which SQL command retrieves data from a table?',
      a:['SELECT','INSERT','UPDATE','CREATE'],
      e:'SELECT reads data. Example: SELECT * FROM students;' },
    { t:'db', q:'What is a primary key?',
      a:['A field that uniquely identifies each record','A password for the database','The first column in every table','A backup copy of the table'],
      e:'A primary key (like student_id) is unique for every row and cannot be empty.' },
    { t:'db', q:'Which command adds a new row to a table?',
      a:['INSERT INTO','SELECT','DELETE','DROP TABLE'],
      e:'INSERT INTO adds new records to a table.' },
    { t:'db', q:'Which of these is a relational database system?',
      a:['MySQL','Notepad','VLC','Zoom'],
      e:'MySQL stores data in related tables. Others: PostgreSQL, SQL Server, Oracle.' },
    { t:'db', q:'What does a foreign key do?',
      a:['Links a record to a row in another table','Encrypts the table','Deletes duplicate rows','Makes the table load faster'],
      e:'A foreign key connects two tables, for example orders.customer_id points to customers.id.' },
    { t:'db', q:'Which SQL command removes rows from a table?',
      a:['DELETE','SELECT','INSERT','ALTER'],
      e:'DELETE removes records. Example: DELETE FROM students WHERE id = 5;' },

    // ---- Security ----
    { t:'sec', q:'What is phishing?',
      a:['Tricking people into giving private info using fake messages or sites','A hardware failure','A way to speed up the internet','Backing up files to the cloud'],
      e:'Phishing uses fake emails, messages or websites to steal passwords and personal data.' },
    { t:'sec', q:'What does a firewall do?',
      a:['Filters network traffic based on rules','Cools down the server','Stores passwords','Makes the internet faster'],
      e:'A firewall allows or blocks traffic based on security rules.' },
    { t:'sec', q:'Which password is the strongest?',
      a:['Tr@in-Blue9-Lamp!','qwerty123','12345678','password'],
      e:'Long passwords with mixed letters, numbers and symbols are the hardest to guess.' },
    { t:'sec', q:'What is two-factor authentication (2FA)?',
      a:['Using two different proofs of identity to log in','Logging in on two devices at once','Having two passwords of the same type','Using two antivirus programs'],
      e:'2FA combines something you know (password) with something you have (like a phone code).' },
    { t:'sec', q:'What does encryption do?',
      a:['Scrambles data so only authorized people can read it','Deletes data permanently','Compresses files to save space','Hides your IP address only'],
      e:'Encryption turns readable data into unreadable code that needs a key to unlock.' },
    { t:'sec', q:'What does a VPN mainly create?',
      a:['An encrypted tunnel for your internet traffic','A faster processor','A new Wi-Fi password','A backup server'],
      e:'A VPN encrypts your traffic and sends it through a secure tunnel.' },
    { t:'sec', q:'What is malware?',
      a:['Software made to harm or spy on a computer','A type of keyboard','A fast internet plan','A free photo editor'],
      e:'Malware (malicious software) includes viruses, worms, ransomware and spyware.' },

    // ---- Hardware & OS ----
    { t:'hw', q:'Which part is called the "brain" of the computer?',
      a:['CPU','RAM','PSU','GPU'],
      e:'The CPU (Central Processing Unit) runs instructions and does the calculations.' },
    { t:'hw', q:'Which memory loses its data when the power is turned off?',
      a:['RAM','SSD','HDD','USB flash drive'],
      e:'RAM is volatile (temporary) memory. SSD, HDD and flash drives keep data without power.' },
    { t:'hw', q:'How many bits are in 1 byte?',
      a:['8','4','16','10'],
      e:'1 byte = 8 bits.' },
    { t:'hw', q:'Which of these is an open-source operating system?',
      a:['Linux','Windows','macOS','iOS'],
      e:'Linux is open source. Many servers and network devices run on Linux.' },
    { t:'hw', q:'Which Windows command shows your IP configuration?',
      a:['ipconfig','dir','chkdsk','format'],
      e:'ipconfig shows your IP address, subnet mask and default gateway.' },
    { t:'hw', q:'What is the main job of an operating system?',
      a:['Manage hardware and software resources','Only protect against viruses','Only browse the internet','Only store files'],
      e:'The OS manages memory, CPU time, files and devices so programs can run.' },
    { t:'hw', q:'Which unit measures CPU clock speed?',
      a:['GHz','GB','dpi','Mbps'],
      e:'Clock speed is measured in hertz, usually GHz (billions of cycles per second).' },
    { t:'hw', q:'Which of these is an input device?',
      a:['Keyboard','Monitor','Speaker','Printer'],
      e:'Input devices send data into the computer. Monitors, speakers and printers are output devices.' },
    { t:'hw', q:'What does SSD stand for?',
      a:['Solid State Drive','Super Speed Disk','Secure Storage Device','System Software Driver'],
      e:'An SSD stores data on flash chips with no moving parts, so it is much faster than an HDD.' }
  ];

  // ================= BASIC SETUP =================
  const $ = id => document.getElementById(id);
  const canvas = $('game'), ctx = canvas.getContext('2d');
  const H = 400;                   // height of the game scene (the ground is always at the same spot)
  let W = 640, EXTRA = 0, SC = 1;  // W = view width, EXTRA = extra sky on tall screens, SC = picture sharpness
  const DPR = Math.min(2, window.devicePixelRatio || 1);

  let START_RIGHT = 120;           // where the bunny stands on screen (smaller on narrow phones)

  // Make the game fill the whole stage area: the stage takes all the free space on the screen.
  function resize() {
    const stage = $('stage');
    const availW = Math.max(200, stage.clientWidth);
    const availH = Math.max(200, stage.clientHeight);
    const A = availW / availH;
    if (A >= 1.6) { W = Math.min(800, Math.round(H * A)); EXTRA = 0; }          // wide screen: see more ahead
    else { W = A < 0.8 ? 340 : A < 1.1 ? 520 : 640; EXTRA = Math.max(0, Math.round(W / A - H)); } // tall screen: more sky
    START_RIGHT = W < 450 ? 70 : 120;
    const ar = W / (H + EXTRA);
    const cssW = Math.min(availW, availH * ar);
    canvas.style.width = Math.floor(cssW) + 'px';
    canvas.style.height = Math.floor(cssW / ar) + 'px';
    SC = Math.min(DPR * cssW / W, 3);
    canvas.width = Math.round(W * SC);
    canvas.height = Math.round((H + EXTRA) * SC);
  }
  window.addEventListener('resize', resize);
  window.addEventListener('orientationchange', resize);
  window.addEventListener('load', resize);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(resize);
  if (window.ResizeObserver) new ResizeObserver(resize).observe($('stage'));
  resize();
  canvas.addEventListener('contextmenu', e => e.preventDefault());

  const FONT = '"Baloo 2", "Trebuchet MS", Arial, sans-serif';
  const GROUND_Y = 290;
  const HERO_W = 26, HERO_H = 30;
  const MAX_STICK = 400;
  const OUTLINE = '#5b2a9e';
  // Each server name belongs to a topic: landing on it asks a question about that topic.
  const LABEL_TOPIC = {
    DNS: 'net', FTP: 'net', DHCP: 'net', LAN: 'net', MAIL: 'net',
    WEB: 'web', API: 'web',
    DB: 'db', SQL: 'db',
    VPN: 'sec', SSH: 'sec', FW: 'sec',
    NAS: 'hw', CPU: 'hw', RAM: 'hw'
  };
  function pickLabel() {
    const pool = Object.keys(LABEL_TOPIC).filter(l => topic === 'all' || LABEL_TOPIC[l] === topic);
    return pool[Math.floor(Math.random() * pool.length)];
  }
  const CONFETTI = ['#ff8fd0', '#b794ff', '#ffd86b', '#8fe3ff', '#ffffff'];

  const menuModal = $('menuModal'), quizModal = $('quizModal'), overModal = $('overModal'), stageModal = $('stageModal'), winModal = $('winModal');
  const modalOpen = () => !menuModal.hidden || !quizModal.hidden || !overModal.hidden || !stageModal.hidden || !winModal.hidden;

  $('author').textContent = AUTHOR;

  // ================= SOUND (made with the browser, no files needed) =================
  let audioCtx = null, muted = false, musicGain = null, musicVol = 60;
  try { const mv = parseInt(localStorage.getItem('glyzBunnyMusic')); if (mv >= 0 && mv <= 100) musicVol = mv; } catch (e) {}
  function ensureAudio() {
    if (!audioCtx) {
      try { audioCtx = new (window.AudioContext || window.webkitAudioContext)(); } catch (e) {}
    }
    if (audioCtx && !musicGain) {
      musicGain = audioCtx.createGain();
      musicGain.gain.value = musicVol / 100 * 0.9;
      musicGain.connect(audioCtx.destination);
    }
    if (audioCtx && audioCtx.state === 'suspended') audioCtx.resume();
    startMusic();
  }
  function tone(freq, dur, type, vol, slideTo, delay, bus) {
    if (muted || !audioCtx) return;
    const t0 = audioCtx.currentTime + (delay || 0);
    const o = audioCtx.createOscillator();
    const g = audioCtx.createGain();
    o.type = type || 'sine';
    o.frequency.setValueAtTime(freq, t0);
    if (slideTo) o.frequency.exponentialRampToValueAtTime(slideTo, t0 + dur);
    g.gain.setValueAtTime(vol || 0.06, t0);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    o.connect(g); g.connect(bus || audioCtx.destination);
    o.start(t0); o.stop(t0 + dur + 0.03);
  }
  const SFX = {
    jump:   () => tone(420, 0.18, 'sine', 0.08, 900),
    gem:    () => { tone(988, 0.1, 'triangle', 0.07); tone(1480, 0.14, 'triangle', 0.07, null, 0.07); },
    power:  () => [523, 784, 1047, 1568].forEach((f, i) => tone(f, 0.12, 'triangle', 0.07, null, i * 0.06)),
    shield: () => tone(300, 0.25, 'triangle', 0.08, 900),
    land:   () => tone(200, 0.12, 'sine', 0.1, 100),
    drop:   () => tone(340, 0.2, 'sine', 0.06, 120),
    perfect:() => [660, 880, 1100, 1320].forEach((f, i) => tone(f, 0.14, 'triangle', 0.07, null, i * 0.07)),
    hit:    () => tone(260, 0.3, 'triangle', 0.1, 70),
    fall:   () => tone(620, 0.6, 'sine', 0.07, 70),
    good:   () => { tone(523, 0.12, 'triangle', 0.08); tone(784, 0.22, 'triangle', 0.08, null, 0.1); },
    bad:    () => tone(230, 0.35, 'triangle', 0.08, 110),
    level:  () => [523, 659, 784, 1047, 1319].forEach((f, i) => tone(f, 0.16, 'triangle', 0.07, null, i * 0.08)),
    hint:   () => { tone(700, 0.1, 'sine', 0.07); tone(1050, 0.16, 'sine', 0.07, null, 0.08); },
    over:   () => [440, 370, 311, 220].forEach((f, i) => tone(f, 0.25, 'triangle', 0.07, null, i * 0.15))
  };
  // ---- background music: 4 original songs to choose from (made with the browser, no files needed) ----
  const TRACKS = [
    { name: '🐰 Bouncy', bpm: 132, drums: 'full', bass: 'bounce', pad: false, lead: 'triangle', leadVol: 0.06, leadDur: 0.22, sparkle: true, echo: false,
      chords: [                                   // C - G - Am - F
        { root: 130.81, fifth: 196.00 }, { root: 98.00, fifth: 146.83 },
        { root: 110.00, fifth: 164.81 }, { root: 87.31, fifth: 130.81 }],
      melody: [
        659.25, 0, 783.99, 659.25, 523.25, 0, 659.25, 0,
        587.33, 0, 783.99, 587.33, 493.88, 0, 587.33, 0,
        523.25, 0, 659.25, 523.25, 440.00, 0, 523.25, 659.25,
        440.00, 523.25, 698.46, 523.25, 440.00, 0, 587.33, 783.99] },
    { name: '🌙 Dreamy', bpm: 74, drums: 'none', bass: 'long', pad: true, lead: 'triangle', leadVol: 0.05, leadDur: 0.6, sparkle: false, echo: true,
      chords: [                                   // Cmaj7 - Am7 - Fmaj7 - G6
        { root: 130.81, fifth: 196.00, pad: [329.63, 392.00, 493.88] }, { root: 110.00, fifth: 164.81, pad: [261.63, 329.63, 392.00] },
        { root: 87.31, fifth: 130.81, pad: [220.00, 261.63, 329.63] }, { root: 98.00, fifth: 146.83, pad: [246.94, 293.66, 329.63] }],
      melody: [
        261.63, 0, 329.63, 0, 392.00, 0, 493.88, 392.00,
        261.63, 0, 329.63, 0, 392.00, 0, 440.00, 392.00,
        349.23, 0, 440.00, 0, 523.25, 0, 659.25, 523.25,
        392.00, 0, 493.88, 0, 587.33, 0, 659.25, 587.33] },
    { name: '🚀 Adventure', bpm: 150, drums: 'full', bass: 'bounce', pad: false, lead: 'square', leadVol: 0.028, leadDur: 0.15, sparkle: false, echo: false,
      chords: [                                   // G - D - Em - C
        { root: 98.00, fifth: 146.83 }, { root: 146.83, fifth: 110.00 },
        { root: 164.81, fifth: 123.47 }, { root: 130.81, fifth: 98.00 }],
      melody: [
        587.33, 587.33, 783.99, 0, 880.00, 783.99, 587.33, 0,
        739.99, 739.99, 880.00, 0, 987.77, 880.00, 739.99, 0,
        659.25, 659.25, 783.99, 0, 987.77, 783.99, 659.25, 783.99,
        523.25, 659.25, 783.99, 659.25, 1046.50, 0, 783.99, 0] },
    { name: '☁️ Chill', bpm: 92, drums: 'soft', bass: 'long', pad: true, lead: 'sine', leadVol: 0.06, leadDur: 0.5, sparkle: false, echo: true,
      chords: [                                   // Fmaj7 - Em7 - Dm7 - Cmaj7
        { root: 174.61, fifth: 130.81, pad: [220.00, 261.63, 329.63] }, { root: 164.81, fifth: 123.47, pad: [196.00, 246.94, 293.66] },
        { root: 146.83, fifth: 110.00, pad: [174.61, 220.00, 261.63] }, { root: 130.81, fifth: 98.00, pad: [246.94, 329.63, 392.00] }],
      melody: [
        0, 0, 659.25, 0, 523.25, 0, 440.00, 0,
        0, 0, 587.33, 0, 493.88, 0, 659.25, 0,
        0, 0, 523.25, 0, 440.00, 0, 349.23, 0,
        0, 0, 659.25, 0, 783.99, 0, 659.25, 523.25] }
  ];
  let curTrack = 0;
  try { const ct = parseInt(localStorage.getItem('glyzBunnyTrack')); if (ct >= 0 && ct < TRACKS.length) curTrack = ct; } catch (e) {}
  let musicTimer = null, musicNext = 0, musicStep = 0, noiseBuf = null;
  function setTrack(i) {
    curTrack = i; musicStep = 0; musicNext = 0;
    try { localStorage.setItem('glyzBunnyTrack', i); } catch (e) {}
  }
  function noiseHit(d, dur, vol, ftype, ffreq) {
    if (muted || !audioCtx || !musicGain) return;
    if (!noiseBuf) {
      noiseBuf = audioCtx.createBuffer(1, audioCtx.sampleRate * 0.3, audioCtx.sampleRate);
      const data = noiseBuf.getChannelData(0);
      for (let i = 0; i < data.length; i++) data[i] = Math.random() * 2 - 1;
    }
    const t0 = audioCtx.currentTime + d;
    const src = audioCtx.createBufferSource();
    const f = audioCtx.createBiquadFilter();
    const g = audioCtx.createGain();
    src.buffer = noiseBuf;
    f.type = ftype; f.frequency.value = ffreq;
    g.gain.setValueAtTime(vol, t0);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    src.connect(f); f.connect(g); g.connect(musicGain);
    src.start(t0); src.stop(t0 + dur + 0.02);
  }
  function musicTick() {
    if (!audioCtx || !musicGain || audioCtx.state !== 'running') return;
    const T = TRACKS[curTrack], step = 60 / T.bpm / 2;
    const now = audioCtx.currentTime;
    if (musicNext < now) musicNext = now + 0.05;
    while (musicNext < now + 0.6) {
      const pos = musicStep % 32;
      const ch = T.chords[Math.floor(pos / 8)];
      const st = pos % 8;
      const d = musicNext - audioCtx.currentTime;
      // drums
      if (T.drums !== 'none') {
        const full = T.drums === 'full';
        if (st === 0 || st === 4) tone(150, 0.14, 'sine', full ? 0.11 : 0.06, 45, d, musicGain);
        if (st === 2 || st === 6) noiseHit(d, 0.09, full ? 0.05 : 0.022, 'bandpass', 1800);
        if (st % 2 === 1) noiseHit(d, 0.04, full ? 0.03 : 0.015, 'highpass', 7000);
      }
      // bass
      if (T.bass === 'bounce') {
        if (st === 0) tone(ch.root, 0.2, 'triangle', 0.07, null, d, musicGain);
        if (st === 2 || st === 6) tone(ch.root * 2, 0.15, 'triangle', 0.05, null, d, musicGain);
        if (st === 4) tone(ch.fifth, 0.2, 'triangle', 0.07, null, d, musicGain);
      } else if (st === 0) {
        tone(ch.root, step * 7, 'sine', 0.07, null, d, musicGain);
      }
      // soft pad
      if (T.pad && st === 0) ch.pad.forEach(f => tone(f, step * 8, 'sine', 0.014, null, d, musicGain));
      // melody
      const m = T.melody[pos];
      if (m) {
        tone(m, T.leadDur, T.lead, T.leadVol, null, d, musicGain);
        if (T.sparkle) tone(m * 2, 0.12, 'sine', 0.014, null, d, musicGain);
        if (T.echo) tone(m, 0.6, 'sine', T.leadVol * 0.4, null, d + step * 2, musicGain);
      }
      musicNext += step;
      musicStep++;
    }
  }
  function startMusic() {
    if (!musicTimer && audioCtx) musicTimer = setInterval(musicTick, 200);
  }
  document.addEventListener('visibilitychange', () => {
    if (!audioCtx) return;
    if (document.hidden) audioCtx.suspend(); else audioCtx.resume();
  });

  window.addEventListener('pointerdown', ensureAudio, { passive: true });
  window.addEventListener('keydown', ensureAudio);
  $('muteBtn').addEventListener('click', () => {
    muted = !muted;
    $('muteBtn').innerHTML = muted ? '&#128263;' : '&#128266;';
    $('muteBtn').blur();
  });

  // ---- music volume slider ----
  const volBtn = $('volBtn'), volPanel = $('volPanel'), volRange = $('musicVol'), volVal = $('musicVolVal');
  volRange.value = musicVol;
  volVal.textContent = musicVol;
  volBtn.addEventListener('click', () => { volPanel.hidden = !volPanel.hidden; volBtn.blur(); });
  volRange.addEventListener('input', () => {
    musicVol = parseInt(volRange.value) || 0;
    volVal.textContent = musicVol;
    if (musicGain) musicGain.gain.setTargetAtTime(musicVol / 100 * 0.9, audioCtx.currentTime, 0.02);
    try { localStorage.setItem('glyzBunnyMusic', musicVol); } catch (e) {}
  });
  const trackList = $('trackList');
  function buildTracks() {
    trackList.innerHTML = '';
    TRACKS.forEach((t, i) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'trk' + (i === curTrack ? ' active' : '');
      b.textContent = t.name;
      b.addEventListener('click', () => { setTrack(i); buildTracks(); });
      trackList.appendChild(b);
    });
  }
  buildTracks();
  window.addEventListener('pointerdown', e => {
    if (!volPanel.hidden && !volPanel.contains(e.target) && e.target !== volBtn) volPanel.hidden = true;
  });

  // ================= STATE =================
  let state = 'idle';
  let platforms = [], cur = 0, camX = 0, camTarget = 0;
  let heroX = 0, heroY = 0, heroVY = 0, stick;
  let inAir = false, jumpVY = 0, invuln = 0, squash = 1, shield = false;
  let score = 0, best = 0, lives = MAX_LIVES, streak = 0, correctCount = 0, totalQ = 0, packets = 0, missed = [];
  let hints = 0, hintUsed = false, chain = 0, topicStats = {}, decks = {}, stageStars = 0, stagePerfect = 0, stageRight = 0, stageQ = 0, livesLost = 0, endless = false;
  let level = 1, levelText = null, jumpTip = false, flyTip = false;
  let hit = false, perfect = false, walkTarget = 0, perfectText = null;
  let particles = [], popups = [], trail = [], shoot = null;
  let gameT = 0, shake = 0, flash = 0, growTick = 0, mood = 0;
  let topic = 'all', menuMode = 'start';
  let deck = [], deckIdx = 0, curQ = null, qOpts = [], answered = false, qTime = 0, qTimeMax = 15, lastTick = -1;

  try { best = parseInt(localStorage.getItem('glyzBunnyBest')) || 0; } catch (e) {}

  // ================= HELPERS =================
  const rand = (a, b) => a + Math.random() * (b - a);
  const vposX = v => v.base + Math.sin(gameT * v.spd + v.ph) * v.amp;
  const vposY = v => v.fly ? GROUND_Y - 66 + Math.sin(gameT * 0.06 + v.ph) * 18 : GROUND_Y - 13;

  function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }
  function rr(x, y, w, h, r) {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.arcTo(x + w, y, x + w, y + h, r);
    ctx.arcTo(x + w, y + h, x, y + h, r);
    ctx.arcTo(x, y + h, x, y, r);
    ctx.arcTo(x, y, x + w, y, r);
    ctx.closePath();
  }
  function starPath(x, y, r, rot) {
    ctx.beginPath();
    for (let i = 0; i < 10; i++) {
      const a = rot + i * Math.PI / 5 - Math.PI / 2;
      const rad = i % 2 ? r * 0.5 : r;
      if (i) ctx.lineTo(x + Math.cos(a) * rad, y + Math.sin(a) * rad);
      else ctx.moveTo(x + Math.cos(a) * rad, y + Math.sin(a) * rad);
    }
    ctx.closePath();
  }
  function sparklePath(x, y, r) {
    ctx.beginPath();
    ctx.moveTo(x, y - r);
    ctx.quadraticCurveTo(x, y, x + r, y);
    ctx.quadraticCurveTo(x, y, x, y + r);
    ctx.quadraticCurveTo(x, y, x - r, y);
    ctx.quadraticCurveTo(x, y, x, y - r);
    ctx.closePath();
  }
  function heartPath(x, y, s) {
    ctx.beginPath();
    ctx.moveTo(x, y + s * 0.9);
    ctx.bezierCurveTo(x - s * 1.8, y - s * 0.2, x - s * 0.8, y - s * 1.4, x, y - s * 0.5);
    ctx.bezierCurveTo(x + s * 0.8, y - s * 1.4, x + s * 1.8, y - s * 0.2, x, y + s * 0.9);
    ctx.closePath();
  }
  let toastTimer;
  function toast(msg) {
    const el = $('toast');
    el.textContent = msg;
    el.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove('show'), 2400);
  }
  function burst(x, y, n, bad) {
    for (let i = 0; i < n; i++) {
      particles.push({
        x, y, vx: rand(-2.5, 2.5), vy: rand(-3.5, -0.5),
        life: rand(25, 45), max: 45, s: 3, c: bad ? '#ff8fb8' : '#ffffff'
      });
    }
  }
  function confetti(x, y, n, spread) {
    for (let i = 0; i < n; i++) {
      particles.push({
        x: x + rand(-spread, spread), y, vx: rand(-3, 3), vy: rand(-7, -2),
        life: rand(45, 80), max: 80, s: rand(4, 7), c: CONFETTI[Math.floor(Math.random() * CONFETTI.length)]
      });
    }
  }
  function addPopup(x, y, txt, col) {
    popups.push({ x, y, txt, col, life: 60, max: 60 });
  }

  function updateHUD() {
    $('sScore').textContent = score;
    $('sStreak').textContent = streak;
    $('sPackets').textContent = packets;
    $('sHints').textContent = hints;
    $('sBest').textContent = best;
    $('sShield').hidden = !shield;
    $('sCombo').hidden = chain < 2;
    $('sComboN').textContent = 'x' + chain;
    const box = $('sLives');
    box.innerHTML = '';
    for (let i = 0; i < MAX_LIVES; i++) {
      const s = document.createElement('span');
      s.className = 'heart' + (i < lives ? (lives === 1 ? ' last' : '') : ' lost');
      s.textContent = i < lives ? '\u2665' : '\u2661';
      box.appendChild(s);
    }
  }
  function gainHint() {
    if (hints < MAX_HINTS) {
      hints++;
      toast('\uD83D\uDCA1 +1 Hint! Use it in the quiz');
    }
  }

  // ================= SKY THEMES (all soft purple / pink) =================
  const WORLDS = [
    { name: 'Lilac Meadow', emoji: '🌸', desc: 'Calm and cozy. No bugs yet!',
      top: '#b79cff', mid: '#e2cbff', bot: '#ffd8f0', h1: '#d9bdff', h2: '#c4a0ff',
      body: { x: 520, y: 78, r: 34, color: '#fff3b8', edge: '#ffe07a', glow: 'rgba(255,248,200,' }, clouds: 5, sparks: 18 },
    { name: 'Sunset Valley', emoji: '🌅', desc: 'Crawling bugs appear. Time to jump!',
      top: '#ff9ccf', mid: '#ffc4e4', bot: '#ffe6c8', h1: '#f3b6ea', h2: '#dd98e8',
      body: { x: 500, y: 128, r: 46, color: '#ffd9b8', edge: '#ffb98a', glow: 'rgba(255,200,170,' }, clouds: 6, sparks: 14 },
    { name: 'Twilight Dreamland', emoji: '🌙', desc: 'Bugs start moving around!',
      top: '#6f52c9', mid: '#a587ea', bot: '#f4b8e8', h1: '#9a7ae0', h2: '#8160d0',
      body: { x: 520, y: 70, r: 32, color: '#f6efff', edge: '#d9c2ff', glow: 'rgba(230,210,255,', sleepy: true }, clouds: 3, sparks: 28 },
    { name: 'Cotton Candy Sky', emoji: '☁️', desc: 'Flying bugs! Stay low and let them pass.',
      top: '#c9b3ff', mid: '#f2c9ff', bot: '#ffe0f3', h1: '#f7b9e8', h2: '#e79cd9',
      body: { x: 515, y: 82, r: 34, color: '#ffe3f4', edge: '#ffb3e1', glow: 'rgba(255,200,240,' }, clouds: 7, sparks: 20 },
    { name: 'Starry Space', emoji: '🚀', desc: 'Everything at once. Good luck!',
      top: '#2e1a6b', mid: '#5b3aa8', bot: '#a87be0', h1: '#6a4bb8', h2: '#523a9a',
      body: { x: 510, y: 80, r: 28, color: '#ffc6ee', edge: '#ff8fd0', glow: 'rgba(255,170,230,', ring: true }, clouds: 1, sparks: 28 }
  ];
  const KEYS = ['top', 'mid', 'bot', 'h1', 'h2'];
  const hex2rgb = h => [1, 3, 5].map(i => parseInt(h.substr(i, 2), 16));
  const theme = {};
  function snapTheme() { KEYS.forEach(k => { theme[k] = hex2rgb(WORLDS[(level - 1) % WORLDS.length][k]); }); }
  function stepTheme(dt) {
    const T = WORLDS[(level - 1) % WORLDS.length];
    KEYS.forEach(k => {
      const tg = hex2rgb(T[k]);
      for (let i = 0; i < 3; i++) theme[k][i] += (tg[i] - theme[k][i]) * 0.04 * dt;
    });
  }
  const col = k => 'rgb(' + theme[k].map(Math.round).join(',') + ')';
  snapTheme();

  // ================= BACKGROUND DATA =================
  const CLOUDS = [];
  for (let i = 0; i < 7; i++) CLOUDS.push({ x: i * 135 + rand(0, 60), y: rand(25, 130), s: rand(0.7, 1.3), e: Math.random() });
  const SPARKS = [];
  for (let i = 0; i < 28; i++) SPARKS.push({ x: rand(0, 900), y: rand(10, 200), r: rand(2, 4.5), p: rand(0, 6), e: Math.random() });
  const BUBBLES = [];
  for (let i = 0; i < 16; i++) BUBBLES.push({ x: rand(0, 900), y: rand(0, H), r: rand(3, 9), v: rand(0.2, 0.7) });

  // ================= QUESTION DECK =================
  function buildDeck() {
    decks = {};
    Object.keys(TOPICS).filter(k => k !== 'all').forEach(k => {
      decks[k] = { list: shuffle(QUESTIONS.filter(q => q.t === k)), i: 0 };
    });
  }
  // question about the topic of the server you just connected to
  function nextQuestion(t) {
    const d = decks[t];
    if (!d || !d.list.length) return QUESTIONS[Math.floor(Math.random() * QUESTIONS.length)];
    if (d.i >= d.list.length) { shuffle(d.list); d.i = 0; }
    return d.list[d.i++];
  }

  // ================= GAME SETUP =================
  // idx = which crossing this platform is (1, 2, 3 ...)
  function makePlatform(prev, idx) {
    const lvl = 1 + Math.floor((idx - 1) / STAGE_LEN);
    const finish = idx % STAGE_LEN === 0;
    const gap = rand(50, Math.min(140 + idx * 6, 235));
    const w = finish ? 140 : rand(Math.max(46, 62 - (lvl - 1) * 4), Math.max(70, 110 - (lvl - 1) * 10));
    const gapStart = prev.x + prev.w;
    const x = gapStart + gap;

    // bug on the cable (from level 2 crawling, from level 3 moving, from level 4 some fly)
    let virus = null;
    const chance = lvl >= 2 ? Math.min(0.3 + 0.12 * (lvl - 1), 0.85) : 0;
    if (!finish && gap >= 70 && Math.random() < chance) {
      const fly = lvl >= 4 && Math.random() < 0.45;
      virus = {
        base: rand(gapStart + 35, x - 35),
        amp: fly ? rand(6, 14) : (lvl >= 3 ? rand(8, 18) : 0),
        spd: rand(0.04, 0.07),
        ph: rand(0, 6.28),
        fly
      };
    }

    // stars floating over the gap
    const gems = [];
    if (virus && !virus.fly) {
      [-30, 0, 30].forEach((dx, k) => gems.push({ x: virus.base + dx, y: GROUND_Y - (k === 1 ? 74 : 56), taken: false }));
    }
    const n = Math.floor(gap / 50);
    for (let i = 0; i < n; i++) {
      const gx = gapStart + gap * (i + 0.5) / n;
      if (virus && Math.abs(gx - virus.base) < 55) continue;
      const high = !(virus && virus.fly) && Math.random() < 0.35;
      if (Math.random() < 0.7) gems.push({ x: gx, y: high ? GROUND_Y - 70 : GROUND_Y - 18, taken: false });
    }
    // rare shield power-up
    if (lvl >= 2 && gap >= 80 && Math.random() < 0.22) {
      const sx = gapStart + gap / 2;
      if (!virus || Math.abs(sx - virus.base) > 60) gems.push({ type: 'shield', x: sx, y: GROUND_Y - 22, taken: false });
    }

    if (finish) {
      for (let i = 1; i <= 4; i++) gems.push({ x: x + w * i / 5, y: GROUND_Y - 18, taken: false });
    }

    return {
      x, w,
      label: finish ? 'GOAL' : pickLabel(),
      seed: finish ? 1 : Math.random() * 10,
      virus, gems, finish,
      qtopic: finish ? (topic === 'all' ? ['net', 'web', 'db', 'sec', 'hw'][Math.floor(Math.random() * 5)] : topic) : null
    };
  }
  function newStick() { stick = { x: heroX, len: 0, angle: 0, av: 0.02 }; growTick = 0; }

  function resetGame() {
    score = 0; lives = MAX_LIVES; streak = 0; correctCount = 0; totalQ = 0; packets = 0; missed = [];
    hints = 1; hintUsed = false; chain = 0; mood = 0; topicStats = {}; livesLost = 0; endless = false; stageStars = 0; stagePerfect = 0; stageRight = 0; stageQ = 0;
    level = 1; levelText = null; jumpTip = false; flyTip = false; shield = false;
    snapTheme();
    platforms = [{ x: START_RIGHT - 110, w: 110, label: 'PC', seed: 1, virus: null, gems: [] }];
    platforms.push(makePlatform(platforms[0], 1));
    cur = 0; camX = 0; camTarget = 0;
    heroX = platforms[0].x + platforms[0].w;
    heroY = 0; heroVY = 0; inAir = false; jumpVY = 0; invuln = 0; squash = 1;
    particles = []; popups = []; trail = []; shoot = null;
    shake = 0; flash = 0;
    newStick();
    perfectText = null;
    state = 'idle';
    updateHUD();
  }

  // ================= INPUT =================
  function press() {
    if (modalOpen()) return;
    if (state === 'idle') {
      state = 'growing';
    } else if (state === 'walking' && !inAir) {
      inAir = true;
      jumpVY = -JUMP_V;
      squash = 1.25;
      SFX.jump();
    }
  }
  function release() {
    if (state === 'growing') {
      state = 'falling';
      stick.av = 0.02;
      SFX.drop();
    }
  }
  canvas.addEventListener('pointerdown', e => { e.preventDefault(); press(); });
  window.addEventListener('pointerup', release);
  window.addEventListener('pointercancel', release);

  window.addEventListener('keydown', e => {
    if (!quizModal.hidden) {
      if (['1', '2', '3', '4'].includes(e.key)) answer(parseInt(e.key) - 1);
      if (e.key === 'h' || e.key === 'H') useHint();
      return;
    }
    if (e.key === 'Escape' && !menuModal.hidden && menuMode === 'help') { menuModal.hidden = true; return; }
    if (modalOpen()) return;
    if (e.code === 'Space' || e.code === 'ArrowUp') {
      e.preventDefault();
      if (!e.repeat) press();
    }
  });
  window.addEventListener('keyup', e => {
    if (e.code === 'Space' || e.code === 'ArrowUp') release();
  });

  // ================= MENU =================
  function buildChips() {
    const box = $('chips');
    box.innerHTML = '';
    Object.keys(TOPICS).forEach(key => {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'chip' + (key === topic ? ' active' : '');
      b.textContent = TOPICS[key];
      b.addEventListener('click', () => {
        topic = key;
        [...box.children].forEach(c => c.classList.remove('active'));
        b.classList.add('active');
      });
      box.appendChild(b);
    });
  }
  function openMenu(mode) {
    menuMode = mode;
    $('topicBox').hidden = (mode !== 'start');
    $('startBtn').textContent = mode === 'start' ? 'Start Game' : 'Resume';
    menuModal.hidden = false;
    $('startBtn').focus();
  }
  $('startBtn').addEventListener('click', () => {
    if (menuMode === 'start') { buildDeck(); resetGame(); }
    menuModal.hidden = true;
    $('startBtn').blur();
  });
  $('helpBtn').addEventListener('click', () => { if (!modalOpen()) openMenu('help'); });

  // ================= FULLSCREEN BUTTON =================
  const fsBtn = $('fsBtn'), rootEl = document.documentElement;
  if (!(rootEl.requestFullscreen || rootEl.webkitRequestFullscreen)) fsBtn.hidden = true;
  fsBtn.addEventListener('click', () => {
    const on = document.fullscreenElement || document.webkitFullscreenElement;
    if (on) (document.exitFullscreen || document.webkitExitFullscreen).call(document);
    else (rootEl.requestFullscreen || rootEl.webkitRequestFullscreen).call(rootEl);
    fsBtn.blur();
  });

  // ================= QUIZ =================
  function openQuiz() {
    const srv = platforms[cur];
    curQ = nextQuestion(srv.finish ? srv.qtopic : (LABEL_TOPIC[srv.label] || 'net'));
    totalQ++;
    answered = false;
    hintUsed = false;
    qTimeMax = Math.max(8, 16 - (level - 1));
    qTime = qTimeMax;
    lastTick = -1;
    $('qTimerFill').style.width = '100%';
    $('qTimerFill').classList.remove('low');
    $('qTopic').textContent = srv.finish ? '\uD83C\uDFC1 GOAL \u2022 Bonus x2 \u2022 ' + TOPICS[curQ.t] : '\uD83D\uDDA5 ' + srv.label + ' server \u2022 ' + TOPICS[curQ.t];
    $('qText').textContent = curQ.q;
    qOpts = shuffle(curQ.a.slice());
    const box = $('qOpts');
    box.innerHTML = '';
    qOpts.forEach((o, i) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'opt';
      b.textContent = (i + 1) + '.  ' + o;
      b.addEventListener('click', () => answer(i));
      box.appendChild(b);
    });
    $('qFeedback').hidden = true;
    $('qContinue').hidden = true;
    refreshHintBtn();
    quizModal.hidden = false;
  }
  function refreshHintBtn() {
    $('hintN').textContent = hints;
    $('hintBtn').disabled = answered || hintUsed || hints <= 0;
  }
  function useHint() {
    if (answered || hintUsed || hints <= 0 || quizModal.hidden) return;
    hintUsed = true;
    hints--;
    const wrong = [];
    qOpts.forEach((o, j) => { if (o !== curQ.a[0]) wrong.push(j); });
    shuffle(wrong).slice(0, 2).forEach(j => {
      const b = $('qOpts').children[j];
      b.disabled = true;
      b.classList.add('gone');
    });
    SFX.hint();
    refreshHintBtn();
    updateHUD();
  }
  $('hintBtn').addEventListener('click', () => { useHint(); $('hintBtn').blur(); });

  // i = chosen option index, or -1 when time runs out
  function answer(i) {
    if (answered || i >= qOpts.length) return;
    if (i >= 0 && $('qOpts').children[i].classList.contains('gone')) return;
    answered = true;
    const right = i >= 0 && qOpts[i] === curQ.a[0];
    const ts = topicStats[curQ.t] || (topicStats[curQ.t] = { r: 0, t: 0 });
    ts.t++; if (right) ts.r++;
    stageQ++; if (right) stageRight++;
    [...$('qOpts').children].forEach((b, j) => {
      b.disabled = true;
      if (qOpts[j] === curQ.a[0]) b.classList.add('correct');
      else if (j === i) b.classList.add('wrong');
    });

    let head;
    if (right) {
      const mult = Math.min(4, 1 + Math.floor(streak / 3));
      const quick = qTime / qTimeMax > 0.6;
      const boss = platforms[cur].finish;
      const pts = (2 * mult + (quick ? 1 : 0)) * (boss ? 2 : 1);
      correctCount++; streak++; score += pts;
      const extra = [];
      if (mult > 1) extra.push('Combo x' + mult);
      if (quick) extra.push('Quick answer bonus');
      if (boss) extra.push('Goal bonus x2');
      if (streak % 3 === 0 && lives < MAX_LIVES) { lives++; extra.push('Bonus life \u2665'); }
      head = '\u2714 Correct! +' + pts + ' points' + (extra.length ? '  \u2022  ' + extra.join('  \u2022  ') : '');
      SFX.good();
    } else {
      streak = 0; lives--; livesLost++;
      head = (i < 0 ? '\u23F0 Time\'s up! ' : '\u2718 Oops! ') + 'Correct answer: ' + curQ.a[0];
      missed.push({ q: curQ.q, a: curQ.a[0] });
      SFX.bad();
    }
    const fb = $('qFeedback');
    fb.className = right ? 'good' : 'bad';
    fb.innerHTML = '';
    const b = document.createElement('b'); b.textContent = head;
    const p = document.createElement('span'); p.textContent = curQ.e;
    fb.appendChild(b); fb.appendChild(p);
    fb.hidden = false;

    const cont = $('qContinue');
    cont.textContent = lives <= 0 ? 'See results' : 'Continue';
    cont.hidden = false;
    cont.focus();
    refreshHintBtn();
    updateHUD();
  }

  $('qContinue').addEventListener('click', () => {
    quizModal.hidden = true;
    if (lives <= 0) { gameOver(); return; }
    if (platforms[cur].finish) { openStageClear(); return; }
    newStick();
    state = 'idle';
    if (streak >= 3) toast('\uD83D\uDD25 Streak ' + streak + '!');
  });

  // ================= STAGE CLEAR =================
  function openStageClear() {
    if (level >= WORLDS.length && !endless) { openWin(); return; }
    state = 'stageclear';
    const bonus = 5 + level * 2;
    score += bonus;
    let lifeTxt = '';
    if (lives < MAX_LIVES) { lives++; lifeTxt = '  \u2022  +1 life \u2665'; }
    const nw = WORLDS[level % WORLDS.length];
    $('stTitle').textContent = 'Stage ' + level + ' Clear!';
    $('stStars').textContent = stageStars;
    $('stPerfect').textContent = stagePerfect;
    $('stQuiz').textContent = stageRight + '/' + stageQ;
    $('stBonus').textContent = '+' + bonus;
    $('stNext').textContent = 'Next: ' + nw.emoji + ' ' + nw.name + ' \u2014 ' + nw.desc + lifeTxt;
    updateHUD();
    SFX.level();
    stageModal.hidden = false;
    $('nextStageBtn').focus();
  }
  function startNextStage() {
    stageModal.hidden = true; winModal.hidden = true;
    level++;
    stageStars = 0; stagePerfect = 0; stageRight = 0; stageQ = 0;
    newStick();
    state = 'idle';
    levelText = { t: 150 };
    SFX.level();
    confetti(camX + W / 2, 60, 40, 200);
    toast(WORLDS[(level - 1) % WORLDS.length].desc);
    updateHUD();
  }
  $('nextStageBtn').addEventListener('click', startNextStage);

  function fillSummary(sum) {
    sum.innerHTML = '';
    let worst = null, worstPct = 2;
    Object.keys(topicStats).forEach(k => {
      const s = topicStats[k], pct = s.r / s.t;
      if (pct < worstPct) { worstPct = pct; worst = k; }
      const row = document.createElement('div'); row.className = 'trow';
      const nm = document.createElement('span'); nm.className = 'tname'; nm.textContent = TOPICS[k];
      const bar = document.createElement('div'); bar.className = 'tbar';
      const fill = document.createElement('i'); fill.style.width = Math.round(pct * 100) + '%';
      bar.appendChild(fill);
      const sc = document.createElement('span'); sc.className = 'tscore'; sc.textContent = s.r + '/' + s.t;
      row.appendChild(nm); row.appendChild(bar); row.appendChild(sc);
      sum.appendChild(row);
    });
    if (worst && worstPct < 1) {
      const tip = document.createElement('p');
      tip.textContent = 'Practice more: ' + TOPICS[worst] + ' 💪';
      sum.appendChild(tip);
    } else if (worst) {
      const tip = document.createElement('p');
      tip.textContent = 'Perfect in every topic! 🎉';
      sum.appendChild(tip);
    }
    return !!worst;
  }

  // ================= YOU WIN =================
  function openWin() {
    state = 'won';
    score += 10 + level * 2;
    if (score > best) {
      best = score;
      try { localStorage.setItem('glyzBunnyBest', best); } catch (e) {}
    }
    updateHUD();
    $('winScore').textContent = score;
    $('winBest').textContent = best;
    $('winQuiz').textContent = correctCount + '/' + totalQ;
    $('winStars').textContent = packets;
    $('winBadge').textContent = livesLost === 0
      ? '\uD83C\uDFC6 PERFECT RUN! No mistakes!'
      : '\u2B50 Server Superstar! All worlds cleared!';
    fillSummary($('winSummary'));
    SFX.level();
    setTimeout(SFX.perfect, 500);
    winModal.hidden = false;
    $('winEndless').focus();
  }
  $('winEndless').addEventListener('click', () => { endless = true; startNextStage(); });
  $('winAgain').addEventListener('click', () => { winModal.hidden = true; resetGame(); });
  $('winMenu').addEventListener('click', () => { winModal.hidden = true; resetGame(); openMenu('start'); });

  // ================= GAME OVER =================
  function gameOver() {
    state = 'over';
    SFX.over();
    if (score > best) {
      best = score;
      try { localStorage.setItem('glyzBunnyBest', best); } catch (e) {}
    }
    updateHUD();
    const rank = score < 10 ? 'Sleepy Bunny'
               : score < 25 ? 'Little Hopper'
               : score < 45 ? 'Network Buddy'
               : score < 80 ? 'Cable Champion'
               : 'Server Superstar';
    $('goRank').textContent = 'Rank: ' + rank + ' \u2022 Stage ' + level;
    $('goScore').textContent = score;
    $('goBest').textContent = best;
    $('goQuiz').textContent = correctCount + '/' + totalQ;
    $('goPackets').textContent = packets;
    $('goServers').textContent = cur;

    $('summaryBox').hidden = !fillSummary($('topicSummary'));

    const list = $('missedList');
    list.innerHTML = '';
    missed.slice(0, 6).forEach(m => {
      const li = document.createElement('li');
      const s = document.createElement('strong'); s.textContent = m.q;
      const em = document.createElement('em'); em.textContent = m.a;
      li.appendChild(s);
      li.appendChild(document.createTextNode(' \u2192 '));
      li.appendChild(em);
      list.appendChild(li);
    });
    $('missedBox').hidden = missed.length === 0;
    overModal.hidden = false;
    $('againBtn').focus();
  }
  $('againBtn').addEventListener('click', () => { overModal.hidden = true; resetGame(); });
  $('menuBtn').addEventListener('click', () => { overModal.hidden = true; resetGame(); openMenu('start'); });

  // ================= UPDATE =================
  function hitVirus(p, vx, vy) {
    burst(vx, vy, 16, true);
    p.virus = null;
    if (shield) {
      shield = false;
      invuln = 30;
      addPopup(vx, vy - 30, 'BLOCKED!', '#c2358f');
      SFX.shield();
      updateHUD();
      return;
    }
    lives--; livesLost++; streak = 0; chain = 0;
    invuln = 90; mood = 60;
    shake = 9; flash = 0.35;
    SFX.hit();
    addPopup(vx, vy - 30, '-1 \u2665', '#ff5c8a');
    updateHUD();
    if (lives <= 0) gameOver();
    else toast('Bug bite! -1 life');
  }

  function update(dt) {
    gameT += dt;
    stepTheme(dt);
    if (invuln > 0) invuln -= dt;
    if (mood > 0) mood -= dt;
    if (shake > 0) { shake *= Math.pow(0.88, dt); if (shake < 0.2) shake = 0; }
    if (flash > 0) flash = Math.max(0, flash - 0.03 * dt);
    const sqTarget = state === 'growing' ? 0.88 : 1;
    squash += (sqTarget - squash) * 0.2 * dt;

    // jump physics
    if (inAir && state !== 'dropping') {
      jumpVY += GRAV * dt;
      heroY += jumpVY * dt;
      if (heroY >= 0) {
        heroY = 0; inAir = false; jumpVY = 0;
        squash = 0.78;
        burst(heroX - HERO_W / 2, GROUND_Y - 2, 5, false);
        SFX.land();
      }
    }

    // sparkle trail
    if (state === 'walking' || inAir) trail.push({ x: heroX, y: heroY, a: 0.6 });
    trail.forEach(tr => { tr.a -= 0.04 * dt; });
    trail = trail.filter(tr => tr.a > 0);

    // shooting star
    if (!shoot && Math.random() < 0.003 * dt) shoot = { x: rand(80, 500), y: rand(10, 80), life: 40 };
    if (shoot) {
      shoot.x += 7 * dt; shoot.y += 3 * dt; shoot.life -= dt;
      if (shoot.life <= 0) shoot = null;
    }

    // particles + popups
    particles.forEach(p => { p.x += p.vx * dt; p.y += p.vy * dt; p.vy += 0.18 * dt; p.life -= dt; });
    particles = particles.filter(p => p.life > 0);
    popups.forEach(p => { p.y -= 0.7 * dt; p.life -= dt; });
    popups = popups.filter(p => p.life > 0);

    const next = platforms[cur + 1];

    if (state === 'growing') {
      stick.len = Math.min(MAX_STICK, stick.len + GROW_SPEED * dt);
      if (stick.len - growTick > 10) {
        growTick = stick.len;
        tone(220 + stick.len * 0.9, 0.04, 'sine', 0.04);
      }
      if (Math.random() < 0.3) {
        particles.push({ x: stick.x + rand(-3, 3), y: GROUND_Y - stick.len, vx: rand(-1, 1), vy: rand(-1.5, -0.2), life: 20, max: 20, s: 3, c: '#ffffff' });
      }
    }
    else if (state === 'falling') {
      stick.av = Math.min(stick.av * 1.07, 0.25);
      stick.angle += stick.av * dt;
      if (stick.angle >= Math.PI / 2) {
        stick.angle = Math.PI / 2;
        const end = stick.x + stick.len;
        hit = end >= next.x && end <= next.x + next.w;
        perfect = hit && Math.abs(end - (next.x + next.w / 2)) <= 6;
        walkTarget = hit ? next.x + next.w : end + HERO_W / 2;
        shake = 3;
        burst(end, GROUND_Y - 2, 8, false);
        if (hit) SFX.land(); else SFX.drop();
        if (hit && next.virus && !jumpTip && !next.virus.fly) {
          jumpTip = true;
          toast('Bug on the cable! Tap or press SPACE to JUMP!');
        }
        if (hit && next.virus && next.virus.fly && !flyTip) {
          flyTip = true;
          toast('Flying bug! Stay low and let it pass.');
        }
        state = 'walking';
      }
    }
    else if (state === 'walking') {
      heroX += WALK_SPEED * dt;
      const cx = heroX - HERO_W / 2;
      const cy = GROUND_Y - 16 + heroY;

      // bug collision (only when the cable reached the server)
      if (hit && next.virus && invuln <= 0) {
        const v = next.virus, vx = vposX(v), vy = vposY(v);
        let touching;
        if (v.fly) touching = Math.hypot(cx - vx, cy - vy) < 24;
        else touching = Math.abs(cx - vx) < 20 && heroY > -20;
        if (touching) {
          hitVirus(next, vx, vy);
          if (state === 'over') return;
        }
      }
      // collect stars / power-ups
      next.gems.forEach(g => {
        if (!g.taken && Math.hypot(cx - g.x, (GROUND_Y - 18 + heroY) - g.y) < 22) {
          g.taken = true;
          if (g.type === 'shield') {
            shield = true;
            addPopup(g.x, g.y - 14, 'SHIELD!', '#c2358f');
            SFX.power();
          } else {
            score += 1; packets += 1; stageStars++;
            addPopup(g.x, g.y - 14, '+1', '#e0a400');
            SFX.gem();
            if (packets % 8 === 0) gainHint();
          }
          burst(g.x, g.y, 7, false);
          updateHUD();
        }
      });

      if (heroX >= walkTarget) {
        heroX = walkTarget;
        if (hit) {
          score += 1;
          addPopup(next.x + next.w / 2, GROUND_Y - 50, '+1', '#8b5cf6');
          if (perfect) {
            chain++; stagePerfect++;
            const bonus = Math.min(chain, 4);
            score += bonus;
            mood = 70;
            perfectText = { t: 80, x: next.x + next.w / 2, n: chain, b: bonus };
            confetti(next.x + next.w / 2, GROUND_Y - 10, 18, 20);
            SFX.perfect();
            if (chain % 3 === 0) gainHint();
          } else {
            chain = 0;
          }
          cur++;
          if (platforms[cur].finish) {
            confetti(platforms[cur].x + platforms[cur].w / 2, GROUND_Y - 20, 60, 60);
            toast('\uD83C\uDFC1 GOAL reached!');
          }
          platforms.push(makePlatform(platforms[platforms.length - 1], platforms.length));
          camTarget = platforms[cur].x + platforms[cur].w - START_RIGHT;
          state = 'scrolling';
          updateHUD();
        } else {
          heroY = 0; heroVY = 0; inAir = false; jumpVY = 0;
          SFX.fall();
          state = 'dropping';
        }
      }
    }
    else if (state === 'scrolling') {
      camX += (camTarget - camX) * 0.12 * dt;
      if (Math.abs(camTarget - camX) < 0.5) {
        camX = camTarget;
        state = 'quiz';
        openQuiz();
      }
    }
    else if (state === 'dropping') {
      heroVY += 0.6 * dt;
      heroY += heroVY * dt;
      stick.angle = Math.min(Math.PI, stick.angle + 0.08 * dt);
      if (heroY > H) {
        lives--; livesLost++;
        streak = 0; chain = 0;
        shake = 6; flash = 0.3;
        updateHUD();
        if (lives <= 0) {
          gameOver();
        } else {
          toast('Oops, missed the server! Lives left: ' + lives);
          heroY = 0; heroVY = 0;
          heroX = platforms[cur].x + platforms[cur].w;
          newStick();
          state = 'idle';
        }
      }
    }

    if (perfectText) {
      perfectText.t -= dt;
      if (perfectText.t <= 0) perfectText = null;
    }
    if (levelText) {
      levelText.t -= dt;
      if (levelText.t <= 0) levelText = null;
    }
  }

  // ================= DRAWING =================
  function drawCloud(x, y, s) {
    ctx.save();
    ctx.translate(x, y);
    ctx.scale(s, s);
    ctx.fillStyle = 'rgba(255,255,255,0.85)';
    ctx.beginPath();
    ctx.arc(0, 0, 16, 0, Math.PI * 2);
    ctx.arc(20, -8, 20, 0, Math.PI * 2);
    ctx.arc(44, 0, 15, 0, Math.PI * 2);
    ctx.rect(0, -2, 44, 16);
    ctx.fill();
    ctx.restore();
  }
  function hills(par, base, amp, f, color, phase) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(0, GROUND_Y + 2);
    for (let x = 0; x <= W; x += 8) {
      const wx = x + camX * par;
      const y = base - (Math.sin(wx * f + phase) * amp + Math.sin(wx * f * 2.3 + phase * 2) * amp * 0.4);
      ctx.lineTo(x, y);
    }
    ctx.lineTo(W, GROUND_Y + 2);
    ctx.closePath();
    ctx.fill();
  }

  function drawBody(wd, t) {
    const b = wd.body, mx = W - (640 - b.x), my = b.y - EXTRA * 0.3;
    const mg = ctx.createRadialGradient(mx, my, b.r * 0.5, mx, my, b.r * 3);
    mg.addColorStop(0, b.glow + '0.7)');
    mg.addColorStop(1, b.glow + '0)');
    ctx.fillStyle = mg;
    ctx.fillRect(mx - b.r * 3, my - b.r * 3, b.r * 6, b.r * 6);
    if (b.ring) {
      ctx.strokeStyle = '#ffd0f0'; ctx.lineWidth = 5;
      ctx.beginPath(); ctx.ellipse(mx, my, b.r * 1.8, b.r * 0.42, -0.35, Math.PI, Math.PI * 2); ctx.stroke();
    }
    ctx.fillStyle = b.color;
    ctx.beginPath(); ctx.arc(mx, my, b.r, 0, Math.PI * 2); ctx.fill();
    ctx.strokeStyle = b.edge; ctx.lineWidth = 3; ctx.stroke();
    if (b.ring) {
      ctx.strokeStyle = '#ffd0f0'; ctx.lineWidth = 5;
      ctx.beginPath(); ctx.ellipse(mx, my, b.r * 1.8, b.r * 0.42, -0.35, 0, Math.PI); ctx.stroke();
    }
    const k = b.r / 34;
    ctx.fillStyle = '#5b2a9e'; ctx.strokeStyle = '#5b2a9e'; ctx.lineWidth = 2;
    if (b.sleepy) {
      [-11, 11].forEach(d => { ctx.beginPath(); ctx.arc(mx + d * k, my - 2 * k, 3.2 * k, 0.1 * Math.PI, 0.9 * Math.PI); ctx.stroke(); });
    } else {
      ctx.beginPath(); ctx.arc(mx - 11 * k, my - 3 * k, 3 * k, 0, Math.PI * 2); ctx.arc(mx + 11 * k, my - 3 * k, 3 * k, 0, Math.PI * 2); ctx.fill();
    }
    ctx.fillStyle = 'rgba(255,143,208,0.7)';
    ctx.beginPath(); ctx.ellipse(mx - 19 * k, my + 7 * k, 5 * k, 3 * k, 0, 0, Math.PI * 2); ctx.ellipse(mx + 19 * k, my + 7 * k, 5 * k, 3 * k, 0, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.arc(mx, my + 4 * k, 6 * k, 0.2 * Math.PI, 0.8 * Math.PI); ctx.stroke();
  }

  function drawBackground(t) {
    const wd = WORLDS[(level - 1) % WORLDS.length];
    // soft pastel sky
    const g = ctx.createLinearGradient(0, -EXTRA, 0, GROUND_Y);
    g.addColorStop(0, col('top'));
    g.addColorStop(0.6, col('mid'));
    g.addColorStop(1, col('bot'));
    ctx.fillStyle = g;
    ctx.fillRect(-20, -EXTRA - 20, W + 40, H + EXTRA + 40);

    // twinkly sparkles
    SPARKS.slice(0, wd.sparks).forEach(s => {
      const x = (((s.x - camX * 0.06) % 900) + 900) % 900;
      const a = 0.35 + 0.65 * Math.abs(Math.sin(t / 700 + s.p));
      ctx.fillStyle = 'rgba(255,255,255,' + a.toFixed(2) + ')';
      sparklePath(x, s.y - s.e * EXTRA, s.r * (0.6 + 0.4 * a));
      ctx.fill();
    });

    // shooting star
    if (shoot) {
      const a = Math.max(0, shoot.life / 40);
      const sg = ctx.createLinearGradient(shoot.x, shoot.y, shoot.x - 40, shoot.y - 17);
      sg.addColorStop(0, 'rgba(255,255,255,' + a.toFixed(2) + ')');
      sg.addColorStop(1, 'rgba(255,255,255,0)');
      ctx.strokeStyle = sg;
      ctx.lineWidth = 3;
      ctx.lineCap = 'round';
      ctx.beginPath(); ctx.moveTo(shoot.x, shoot.y); ctx.lineTo(shoot.x - 40, shoot.y - 17); ctx.stroke();
    }

    drawBody(wd, t);

    // fluffy clouds
    CLOUDS.slice(0, wd.clouds).forEach(c => {
      const x = (((c.x - camX * 0.1 + t * 0.006) % 900) + 900) % 900 - 130;
      drawCloud(x, c.y - c.e * EXTRA, c.s);
    });

    // rolling hills
    hills(0.15, GROUND_Y - 55, 26, 0.012, col('h1'), 1);
    hills(0.3, GROUND_Y - 22, 18, 0.018, col('h2'), 4);

    // the pit (soft purple, rising bubbles)
    const pg = ctx.createLinearGradient(0, GROUND_Y, 0, H);
    pg.addColorStop(0, '#9b78e8');
    pg.addColorStop(1, '#4a2390');
    ctx.fillStyle = pg;
    ctx.fillRect(0, GROUND_Y, W, H - GROUND_Y);
    ctx.strokeStyle = 'rgba(255,255,255,0.35)';
    ctx.lineWidth = 2;
    BUBBLES.forEach(b => {
      const y = GROUND_Y + (((b.y - t * b.v * 0.06 - GROUND_Y) % (H - GROUND_Y)) + (H - GROUND_Y)) % (H - GROUND_Y);
      const x = (((b.x - camX * 0.5) % 900) + 900) % 900;
      ctx.beginPath(); ctx.arc(x, y, b.r, 0, Math.PI * 2); ctx.stroke();
    });
  }

  function drawServer(p, t) {
    const x = p.x, w = p.w;
    const g = ctx.createLinearGradient(0, GROUND_Y, 0, H);
    g.addColorStop(0, '#c4a6ff');
    g.addColorStop(1, '#7d54d6');
    ctx.fillStyle = g;
    rr(x, GROUND_Y, w, H - GROUND_Y + 30, 10);
    ctx.fill();
    ctx.strokeStyle = OUTLINE;
    ctx.lineWidth = 3;
    ctx.stroke();

    // light cap on top
    ctx.fillStyle = '#f3e8ff';
    rr(x + 2, GROUND_Y + 2, w - 4, 7, 4);
    ctx.fill();

    // antenna with heart bulb on some servers
    if (p.seed > 5) {
      ctx.strokeStyle = OUTLINE;
      ctx.lineWidth = 3;
      ctx.beginPath(); ctx.moveTo(x + 10, GROUND_Y); ctx.lineTo(x + 10, GROUND_Y - 14); ctx.stroke();
      ctx.fillStyle = Math.sin(t / 300 + p.seed) > 0 ? '#ff8fd0' : '#ffc6e8';
      heartPath(x + 10, GROUND_Y - 20, 4);
      ctx.fill();
    }

    // cute face
    const fx = x + w / 2, fy = GROUND_Y + 25;
    const blink = ((t + p.seed * 700) % 3600) < 130;
    ctx.fillStyle = '#3b1d6e';
    if (blink) {
      ctx.fillRect(fx - 12, fy - 1, 7, 2); ctx.fillRect(fx + 5, fy - 1, 7, 2);
    } else {
      ctx.beginPath(); ctx.ellipse(fx - 9, fy, 3, 4, 0, 0, Math.PI * 2); ctx.ellipse(fx + 9, fy, 3, 4, 0, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = '#fff';
      ctx.beginPath(); ctx.arc(fx - 8, fy - 1.5, 1.1, 0, Math.PI * 2); ctx.arc(fx + 10, fy - 1.5, 1.1, 0, Math.PI * 2); ctx.fill();
    }
    ctx.fillStyle = 'rgba(255,143,208,0.75)';
    ctx.beginPath(); ctx.ellipse(fx - 16, fy + 6, 4, 2.5, 0, 0, Math.PI * 2); ctx.ellipse(fx + 16, fy + 6, 4, 2.5, 0, 0, Math.PI * 2); ctx.fill();
    ctx.strokeStyle = '#3b1d6e';
    ctx.lineWidth = 2;
    ctx.lineCap = 'round';
    ctx.beginPath(); ctx.arc(fx, fy + 4, 4, 0.15 * Math.PI, 0.85 * Math.PI); ctx.stroke();

    // label tag
    ctx.font = 'bold 11px ' + FONT;
    ctx.textAlign = 'center';
    const tw = Math.min(w - 12, ctx.measureText(p.label).width + 12);
    ctx.fillStyle = '#f3e8ff';
    rr(fx - tw / 2, GROUND_Y + 40, tw, 15, 7);
    ctx.fill();
    ctx.fillStyle = '#5b2a9e';
    ctx.fillText(p.label, fx, GROUND_Y + 51);

    // rack slots with blinking lights
    for (let i = 0, y = GROUND_Y + 64; y < H - 8; i++, y += 16) {
      ctx.fillStyle = '#5b2a9e';
      rr(x + 7, y, w - 14, 10, 5);
      ctx.fill();
      const on = Math.sin(t / 260 + p.seed * 3 + i * 1.7) > 0.5;
      ctx.fillStyle = on ? '#ff8fd0' : '#d6bfff';
      ctx.beginPath(); ctx.arc(x + 14, y + 5, 2.5, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = '#7d54d6';
      rr(x + 22, y + 3, Math.max(4, w - 36), 4, 2);
      ctx.fill();
    }

    // perfect port (pink, sparkling)
    ctx.fillStyle = '#ff8fd0';
    rr(x + w / 2 - 6, GROUND_Y - 4, 12, 5, 2);
    ctx.fill();
    ctx.strokeStyle = '#c2358f';
    ctx.lineWidth = 1.5;
    ctx.stroke();
    const sp = 0.6 + 0.4 * Math.sin(t / 250 + p.seed);
    ctx.fillStyle = 'rgba(255,255,255,' + sp.toFixed(2) + ')';
    sparklePath(x + w / 2, GROUND_Y - 12, 4 * sp + 1);
    ctx.fill();
  }

  function drawFinish(p, t) {
    const x = p.x, w = p.w;
    // checkered finish line
    for (let r = 0; r < 2; r++) {
      for (let i = 0; i * 8 < w - 4; i++) {
        ctx.fillStyle = (i + r) % 2 ? '#ffffff' : '#5b2a9e';
        ctx.fillRect(x + 2 + i * 8, GROUND_Y + 2 + r * 6, Math.min(8, w - 4 - i * 8), 6);
      }
    }
    const lx = x + 14, rx = x + w - 14;
    ctx.strokeStyle = OUTLINE; ctx.lineWidth = 3; ctx.lineCap = 'round';
    ctx.beginPath(); ctx.moveTo(lx, GROUND_Y); ctx.lineTo(lx, GROUND_Y - 40); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(rx, GROUND_Y); ctx.lineTo(rx, GROUND_Y - 64); ctx.stroke();
    // bunting string
    const cx = x + w / 2, y0 = GROUND_Y - 40, yc = GROUND_Y - 14;
    ctx.lineWidth = 1.5;
    ctx.beginPath(); ctx.moveTo(lx, y0); ctx.quadraticCurveTo(cx, yc, rx, y0 + 2); ctx.stroke();
    const cols = ['#ff8fd0', '#d9c2ff', '#ffd86b'];
    for (let i = 0; i < 7; i++) {
      const u = (i + 0.5) / 7, v = 1 - u;
      const bx = v * v * lx + 2 * v * u * cx + u * u * rx;
      const by = v * v * y0 + 2 * v * u * yc + u * u * (y0 + 2);
      ctx.fillStyle = cols[i % 3];
      ctx.beginPath(); ctx.moveTo(bx - 5, by); ctx.lineTo(bx + 5, by); ctx.lineTo(bx, by + 10); ctx.closePath(); ctx.fill();
    }
    // waving flag with a heart
    const wave = Math.sin(t / 150) * 3;
    ctx.fillStyle = '#ff8fd0'; ctx.strokeStyle = '#c2358f'; ctx.lineWidth = 2; ctx.lineJoin = 'round';
    ctx.beginPath();
    ctx.moveTo(rx, GROUND_Y - 64);
    ctx.quadraticCurveTo(rx - 14, GROUND_Y - 62 + wave, rx - 30, GROUND_Y - 56 + wave * 1.5);
    ctx.quadraticCurveTo(rx - 14, GROUND_Y - 52 - wave, rx, GROUND_Y - 46);
    ctx.closePath(); ctx.fill(); ctx.stroke();
    ctx.fillStyle = '#fff';
    heartPath(rx - 12, GROUND_Y - 55 + wave * 0.5, 3.2); ctx.fill();
    // sparkle on top of the pole
    const sp = 0.6 + 0.4 * Math.sin(t / 200);
    ctx.fillStyle = 'rgba(255,230,120,' + sp.toFixed(2) + ')';
    sparklePath(rx, GROUND_Y - 70, 5 * sp + 2); ctx.fill();
  }

  function drawGem(g, t) {
    const y = g.y + Math.sin(t / 300 + g.x) * 2.5;
    ctx.save();
    ctx.translate(g.x, y);

    if (g.type === 'shield') {
      ctx.fillStyle = 'rgba(255,179,225,0.45)';
      ctx.strokeStyle = '#ff8fd0';
      ctx.lineWidth = 2.5;
      ctx.beginPath(); ctx.arc(0, 0, 12, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
      ctx.fillStyle = '#ff6fbd';
      heartPath(0, -1, 4.5);
      ctx.fill();
      ctx.fillStyle = 'rgba(255,255,255,0.8)';
      ctx.beginPath(); ctx.arc(-4, -6, 2, 0, Math.PI * 2); ctx.fill();
      ctx.restore();
      return;
    }

    const s = 1 + 0.1 * Math.sin(t / 200 + g.x);
    ctx.scale(s, s);
    ctx.fillStyle = '#ffd86b';
    ctx.strokeStyle = '#f2a93b';
    ctx.lineWidth = 2;
    ctx.lineJoin = 'round';
    starPath(0, 0, 9, Math.sin(t / 500 + g.x) * 0.25);
    ctx.fill(); ctx.stroke();
    ctx.fillStyle = '#fff';
    ctx.beginPath(); ctx.arc(-2.5, -3, 1.6, 0, Math.PI * 2); ctx.fill();
    ctx.restore();
  }

  function drawVirus(v, t) {
    const vx = vposX(v), vy = vposY(v) + (v.fly ? 0 : Math.sin(t / 200 + vx) * 2);
    ctx.save();
    ctx.translate(vx, vy);

    // wings for flying bugs
    if (v.fly) {
      const fl = Math.sin(t / 60) * 0.5;
      ctx.fillStyle = 'rgba(255,255,255,0.85)';
      ctx.strokeStyle = '#d9c2ff';
      ctx.lineWidth = 1.5;
      [-1, 1].forEach(d => {
        ctx.save();
        ctx.scale(d, 1);
        ctx.rotate(-0.6 - fl);
        ctx.beginPath(); ctx.ellipse(11, -8, 10, 6, 0, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
        ctx.restore();
      });
    }

    // little spikes
    ctx.fillStyle = '#ff5c8a';
    ctx.save();
    ctx.rotate(v.fly ? 0 : t / 900);
    for (let i = 0; i < 8; i++) {
      ctx.rotate(Math.PI / 4);
      ctx.beginPath();
      ctx.moveTo(-3, -8); ctx.lineTo(0, -17); ctx.lineTo(3, -8);
      ctx.closePath(); ctx.fill();
    }
    ctx.restore();

    // body
    ctx.fillStyle = '#ff7aa2';
    ctx.strokeStyle = '#a3194f';
    ctx.lineWidth = 2.5;
    ctx.beginPath(); ctx.arc(0, 0, 11, 0, Math.PI * 2); ctx.fill(); ctx.stroke();

    // grumpy eyes
    ctx.fillStyle = '#fff';
    ctx.beginPath(); ctx.arc(-4, -1, 3.2, 0, Math.PI * 2); ctx.arc(4, -1, 3.2, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = '#3b1d6e';
    ctx.beginPath(); ctx.arc(-3.5, -0.5, 1.5, 0, Math.PI * 2); ctx.arc(4.5, -0.5, 1.5, 0, Math.PI * 2); ctx.fill();
    ctx.strokeStyle = '#a3194f';
    ctx.lineWidth = 1.8;
    ctx.beginPath();
    ctx.moveTo(-7, -6); ctx.lineTo(-2, -4);
    ctx.moveTo(7, -6); ctx.lineTo(2, -4);
    ctx.stroke();
    ctx.beginPath(); ctx.arc(0, 7, 3, 1.15 * Math.PI, 1.85 * Math.PI); ctx.stroke();
    ctx.restore();
  }

  function drawStick(t) {
    if (stick.len <= 0) return;
    ctx.save();
    ctx.translate(stick.x, GROUND_Y);
    ctx.rotate(stick.angle);
    ctx.lineCap = 'round';
    // outline
    ctx.strokeStyle = OUTLINE;
    ctx.lineWidth = 9;
    ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(0, -stick.len); ctx.stroke();
    // candy pink cable
    ctx.strokeStyle = '#ffb3e1';
    ctx.lineWidth = 5;
    ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(0, -stick.len); ctx.stroke();
    // moving white dots
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 3;
    ctx.setLineDash([1, 14]);
    ctx.lineDashOffset = t / 14;
    ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(0, -stick.len); ctx.stroke();
    ctx.setLineDash([]);

    // cute RJ45 plug at the tip
    ctx.fillStyle = '#f3e8ff';
    ctx.strokeStyle = OUTLINE;
    ctx.lineWidth = 2;
    rr(-6, -stick.len - 11, 12, 12, 3);
    ctx.fill(); ctx.stroke();
    ctx.fillStyle = '#ff8fd0';
    ctx.fillRect(-3.5, -stick.len - 9, 2, 4);
    ctx.fillRect(-1, -stick.len - 9, 2, 4);
    ctx.fillRect(1.5, -stick.len - 9, 2, 4);
    ctx.restore();
  }

  function drawHero(t) {
    const walking = state === 'walking' && !inAir;
    const bob = walking ? Math.abs(Math.sin(t / 70)) * 3 : (state === 'idle' ? Math.sin(t / 350) * 1.2 : 0);
    const ox = heroX - HERO_W / 2;
    const oy = GROUND_Y + heroY - bob;
    const step = walking ? Math.sin(t / 70) * 3 : 0;

    // sparkle trail
    trail.forEach(tr => {
      ctx.fillStyle = 'rgba(255,255,255,' + tr.a.toFixed(2) + ')';
      sparklePath(tr.x - HERO_W / 2 - 8, GROUND_Y - 14 + tr.y, 4 * tr.a + 1);
      ctx.fill();
    });

    // ground shadow
    if (state !== 'dropping') {
      const h = Math.min(1, Math.abs(heroY) / 90);
      ctx.fillStyle = 'rgba(91,42,158,' + (0.25 * (1 - h * 0.6)).toFixed(2) + ')';
      ctx.beginPath();
      ctx.ellipse(ox, GROUND_Y + 1, 14 * (1 - h * 0.4), 3, 0, 0, Math.PI * 2);
      ctx.fill();
    }

    // face mood
    let face = 'smile';
    if (state === 'dropping' || (invuln > 55 && mood > 0 && !perfectText)) face = 'sad';
    else if (perfectText || (mood > 0 && invuln <= 0)) face = 'happy';
    else if (state === 'growing') face = 'focus';
    else if (inAir) face = 'wow';

    ctx.save();
    if (invuln > 0 && Math.floor(invuln / 6) % 2 === 0) ctx.globalAlpha = 0.45;
    ctx.translate(ox, oy);
    const sy = squash, sx = 1 + (1 - squash) * 0.6;
    ctx.scale(sx, sy);
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';

    // fluffy tail
    ctx.fillStyle = '#fff';
    ctx.strokeStyle = OUTLINE;
    ctx.lineWidth = 2;
    ctx.beginPath(); ctx.arc(-15, -9, 5.5, 0, Math.PI * 2); ctx.fill(); ctx.stroke();

    // floppy ears
    const flap = (walking || inAir) ? Math.sin(t / 90) * 0.25 + (inAir ? 0.4 : 0) : Math.sin(t / 500) * 0.06;
    [[-6, -0.28 - flap], [7, 0.22 + flap * 0.6]].forEach((e, k) => {
      ctx.save();
      ctx.translate(e[0], -27);
      ctx.rotate(e[1] - (k ? 0 : 0));
      ctx.fillStyle = '#efe0ff';
      ctx.strokeStyle = OUTLINE;
      ctx.lineWidth = 2;
      ctx.beginPath(); ctx.ellipse(0, -9, 5.5, 11, 0, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
      ctx.fillStyle = '#ffb3e1';
      ctx.beginPath(); ctx.ellipse(0, -8, 2.6, 7, 0, 0, Math.PI * 2); ctx.fill();
      ctx.restore();
    });

    // feet
    ctx.fillStyle = '#fff';
    ctx.strokeStyle = OUTLINE;
    ctx.lineWidth = 2;
    ctx.beginPath(); ctx.ellipse(-6 + step, -2.5, 6, 3.5, 0, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
    ctx.beginPath(); ctx.ellipse(7 - step, -2.5, 6, 3.5, 0, 0, Math.PI * 2); ctx.fill(); ctx.stroke();

    // round body / head
    const bg = ctx.createRadialGradient(-4, -22, 3, 0, -16, 16);
    bg.addColorStop(0, '#ffffff');
    bg.addColorStop(1, '#e6d2ff');
    ctx.fillStyle = bg;
    ctx.beginPath(); ctx.arc(0, -16, 14, 0, Math.PI * 2); ctx.fill();
    ctx.stroke();

    // scarf
    ctx.fillStyle = '#ff8fd0';
    ctx.strokeStyle = '#c2358f';
    ctx.lineWidth = 1.5;
    rr(-11, -7, 22, 5, 2.5);
    ctx.fill(); ctx.stroke();
    const sw = Math.sin(t / 110) * 2 + ((walking || inAir) ? 3 : 0);
    ctx.beginPath();
    ctx.moveTo(-10, -6);
    ctx.lineTo(-19 - sw, -3 + Math.sin(t / 90));
    ctx.lineTo(-17 - sw, -8);
    ctx.lineTo(-10, -4);
    ctx.closePath();
    ctx.fill(); ctx.stroke();

    // eyes
    const ex = [-4.5, 6.5], ey = -17;
    if (face === 'happy') {
      ctx.strokeStyle = '#3b1d6e'; ctx.lineWidth = 2;
      ex.forEach(x => { ctx.beginPath(); ctx.arc(x, ey + 1, 2.6, 1.1 * Math.PI, 1.9 * Math.PI); ctx.stroke(); });
    } else if (face === 'sad') {
      ctx.strokeStyle = '#3b1d6e'; ctx.lineWidth = 2;
      ex.forEach(x => { ctx.beginPath(); ctx.arc(x, ey + 2, 2.4, 0.15 * Math.PI, 0.85 * Math.PI); ctx.stroke(); });
      ctx.fillStyle = '#8fe3ff';
      ctx.beginPath(); ctx.ellipse(ex[1] + 3, ey + 6 + (t / 80) % 4, 1.6, 2.4, 0, 0, Math.PI * 2); ctx.fill();
    } else if ((t % 3200) < 120) {
      ctx.strokeStyle = '#3b1d6e'; ctx.lineWidth = 2;
      ex.forEach(x => { ctx.beginPath(); ctx.moveTo(x - 2.5, ey); ctx.lineTo(x + 2.5, ey); ctx.stroke(); });
    } else {
      const ry = face === 'wow' ? 4.6 : 3.8;
      ctx.fillStyle = '#3b1d6e';
      ex.forEach(x => { ctx.beginPath(); ctx.ellipse(x, ey, 2.8, ry, 0, 0, Math.PI * 2); ctx.fill(); });
      ctx.fillStyle = '#fff';
      ex.forEach(x => {
        ctx.beginPath(); ctx.arc(x + 0.8, ey - 1.6, 1.2, 0, Math.PI * 2); ctx.fill();
        ctx.beginPath(); ctx.arc(x - 1, ey + 1.4, 0.6, 0, Math.PI * 2); ctx.fill();
      });
    }
    // blush
    ctx.fillStyle = 'rgba(255,143,208,0.7)';
    ctx.beginPath(); ctx.ellipse(-9, -11, 3.2, 2, 0, 0, Math.PI * 2); ctx.ellipse(11, -11, 3.2, 2, 0, 0, Math.PI * 2); ctx.fill();
    // mouth
    ctx.strokeStyle = '#3b1d6e'; ctx.lineWidth = 1.8;
    if (face === 'wow') {
      ctx.fillStyle = '#3b1d6e';
      ctx.beginPath(); ctx.ellipse(1, -10.5, 2, 2.6, 0, 0, Math.PI * 2); ctx.fill();
    } else if (face === 'sad') {
      ctx.beginPath(); ctx.arc(1, -7.5, 3, 1.15 * Math.PI, 1.85 * Math.PI); ctx.stroke();
    } else if (face === 'happy') {
      ctx.fillStyle = '#ff6fa0';
      ctx.beginPath(); ctx.arc(1, -11.5, 3.6, 0, Math.PI); ctx.closePath(); ctx.fill();
      ctx.stroke();
    } else if (face === 'focus') {
      ctx.beginPath(); ctx.moveTo(-1, -10); ctx.lineTo(3, -10); ctx.stroke();
    } else {
      ctx.beginPath(); ctx.arc(1, -12, 3, 0.15 * Math.PI, 0.85 * Math.PI); ctx.stroke();
    }

    // little hands
    ctx.fillStyle = '#fff';
    ctx.strokeStyle = OUTLINE;
    ctx.lineWidth = 2;
    if (state === 'growing') {
      ctx.beginPath(); ctx.arc(13, -26 - Math.sin(t / 60) * 1.5, 4, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
    } else if (inAir || perfectText) {
      ctx.beginPath(); ctx.arc(14, -24, 3.8, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
      ctx.beginPath(); ctx.arc(-13, -24, 3.8, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
    } else {
      const sw2 = walking ? Math.sin(t / 70) * 3 : 0;
      ctx.beginPath(); ctx.arc(13, -11 + sw2, 3.6, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
    }

    // shield bubble
    if (shield) {
      ctx.strokeStyle = 'rgba(255,111,189,' + (0.65 + 0.3 * Math.sin(t / 150)).toFixed(2) + ')';
      ctx.lineWidth = 3;
      ctx.beginPath(); ctx.arc(0, -17, 26, 0, Math.PI * 2); ctx.stroke();
      ctx.fillStyle = 'rgba(255,179,225,0.22)';
      ctx.fill();
      ctx.fillStyle = 'rgba(255,255,255,0.8)';
      ctx.beginPath(); ctx.arc(-14, -32, 3, 0, Math.PI * 2); ctx.fill();
    }
    ctx.restore();
  }

  function bigText(txt, x, y, size, fill, stroke) {
    ctx.font = '800 ' + size + 'px ' + FONT;
    ctx.textAlign = 'center';
    ctx.lineJoin = 'round';
    ctx.lineWidth = Math.max(4, size / 6);
    ctx.strokeStyle = stroke;
    ctx.strokeText(txt, x, y);
    ctx.fillStyle = fill;
    ctx.fillText(txt, x, y);
  }

  function draw(t) {
    ctx.setTransform(SC, 0, 0, SC, 0, EXTRA * SC);
    if (shake > 0) ctx.translate(rand(-shake, shake), rand(-shake, shake));
    drawBackground(t);

    ctx.save();
    ctx.translate(-camX, 0);
    platforms.forEach(p => {
      if (p.x + p.w > camX - 10 && p.x < camX + W + 10) {
        drawServer(p, t);
        if (p.finish) drawFinish(p, t);
        p.gems.forEach(g => { if (!g.taken) drawGem(g, t); });
        if (p.virus) drawVirus(p.virus, t);
      }
    });
    drawStick(t);
    drawHero(t);

    particles.forEach(p => {
      ctx.globalAlpha = Math.max(0, p.life / p.max);
      ctx.fillStyle = p.c;
      ctx.fillRect(p.x, p.y, p.s || 3, p.s || 3);
    });
    ctx.globalAlpha = 1;

    popups.forEach(p => {
      ctx.globalAlpha = Math.max(0, p.life / p.max);
      bigText(p.txt, p.x, p.y, 17, p.col, '#fff');
    });
    ctx.globalAlpha = 1;

    if (perfectText) {
      ctx.globalAlpha = Math.min(1, perfectText.t / 30);
      const label = perfectText.n >= 2 ? 'PERFECT x' + perfectText.n + '! +' + perfectText.b : 'PERFECT! +' + perfectText.b;
      bigText(label, perfectText.x, GROUND_Y - 80 - (80 - perfectText.t) * 0.4, 20, '#ff6fbd', '#fff');
      ctx.globalAlpha = 1;
    }
    ctx.restore();

    // ---- screen-space UI (no shake) ----
    ctx.setTransform(SC, 0, 0, SC, 0, 0);

    // level badge
    ctx.fillStyle = 'rgba(255,255,255,0.85)';
    rr(10, 8, 86, 26, 13);
    ctx.fill();
    ctx.strokeStyle = '#d9c2ff'; ctx.lineWidth = 2; ctx.stroke();
    ctx.font = '800 14px ' + FONT;
    ctx.textAlign = 'center';
    ctx.fillStyle = '#5b2a9e';
    ctx.fillText('STAGE ' + level, 53, 27);

    // progress to next level
    const prog = (cur % STAGE_LEN) / STAGE_LEN;
    ctx.fillStyle = 'rgba(255,255,255,0.6)';
    rr(10, 38, 86, 8, 4); ctx.fill();
    ctx.fillStyle = '#ff8fd0';
    if (prog > 0) { rr(10, 38, Math.max(8, 86 * prog), 8, 4); ctx.fill(); }
    const wdn = WORLDS[(level - 1) % WORLDS.length];
    ctx.font = '700 12px ' + FONT;
    ctx.textAlign = 'left';
    ctx.lineWidth = 3; ctx.strokeStyle = '#fff'; ctx.lineJoin = 'round';
    ctx.strokeText(wdn.emoji + ' ' + wdn.name, 10, 62);
    ctx.fillStyle = '#5b2a9e';
    ctx.fillText(wdn.emoji + ' ' + wdn.name, 10, 62);

    ctx.save();
    ctx.translate(0, EXTRA);
    if (levelText) {
      ctx.globalAlpha = Math.min(1, levelText.t / 30);
      bigText('STAGE ' + level + '!', W / 2, 115, 44, '#ffffff', '#8b5cf6');
      const lw = WORLDS[(level - 1) % WORLDS.length];
      bigText(lw.emoji + ' ' + lw.name, W / 2, 150, 22, '#ff6fbd', '#fff');
      ctx.globalAlpha = 1;
    }

    // first-time hint
    if (state === 'idle' && score === 0 && cur === 0 && !modalOpen()) {
      ctx.globalAlpha = 0.7 + 0.3 * Math.sin(t / 250);
      bigText('Hold to stretch the cable!', W / 2, 165, 26, '#ffffff', '#8b5cf6');
      ctx.font = '700 15px ' + FONT;
      ctx.lineWidth = 4; ctx.strokeStyle = '#8b5cf6';
      ctx.strokeText('(mouse, touch or SPACE)  \u2022  reach the next server!', W / 2, 190);
      ctx.fillStyle = '#fff';
      ctx.fillText('(mouse, touch or SPACE)  \u2022  reach the next server!', W / 2, 190);
      ctx.globalAlpha = 1;
    }

    ctx.restore();

    if (flash > 0) {
      ctx.fillStyle = 'rgba(255,111,160,' + flash.toFixed(2) + ')';
      ctx.fillRect(0, 0, W, H + EXTRA);
    }
  }

  // ================= LOOP =================
  let last = performance.now();
  function loop(now) {
    const dt = Math.min((now - last) / 16.667, 3);
    last = now;

    if (!modalOpen()) update(dt);

    // quiz countdown
    if (!quizModal.hidden && !answered) {
      qTime -= dt / 60;
      const f = Math.max(0, qTime / qTimeMax);
      const fill = $('qTimerFill');
      fill.style.width = (f * 100) + '%';
      fill.classList.toggle('low', f < 0.3);
      if (f < 0.3 && Math.ceil(qTime) !== lastTick) {
        lastTick = Math.ceil(qTime);
        tone(1000, 0.05, 'sine', 0.05);
      }
      if (qTime <= 0) answer(-1);
    }

    draw(now);
    requestAnimationFrame(loop);
  }

  // ================= START =================
  buildChips();
  buildDeck();
  resetGame();
  openMenu('start');
  requestAnimationFrame(loop);
})();
