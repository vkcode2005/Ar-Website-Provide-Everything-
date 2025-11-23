// ---------------- Sidebar close logic ----------------

// Sidebar ke andar kisi bhi link pe click -> menu band
document.querySelectorAll('.sidebar a').forEach(link => {
    link.addEventListener('click', () => {
        const checkbox = document.querySelector('.hamburger-menu input');
        if (checkbox) checkbox.checked = false;
    });
});

// Bahar click karne pe sidebar band
document.addEventListener('click', function (e) {
    const sidebar = document.querySelector('.sidebar');
    const hamburger = document.querySelector('.hamburger-menu');
    if (!sidebar || !hamburger) return;

    if (!sidebar.contains(e.target) && !hamburger.contains(e.target)) {
        const checkbox = document.querySelector('.hamburger-menu input');
        if (checkbox) checkbox.checked = false;
    }
});

// ---------------- Search ----------------

function searchContent() {
    const inputElement = document.getElementById('searchInput');
    if (!inputElement) return;

    const input = inputElement.value.toLowerCase();
    const cards = document.querySelectorAll('.content-card');

    cards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        const description = card.querySelector('p').textContent.toLowerCase();

        if (title.includes(input) || description.includes(input)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// ---------------- Data: category list + details ----------------

// Category ke andar ka list (Anime section me ye cards dikhne wale)
const categoryItems = {
    anime: [

        {
            id: "one-piece",
            title: "One Piece",
            image: "/images/One-Piece-Logo.png",
            short: "Pirate adventure of Monkey D. Luffy."
        },
        {
            id: "naruto",
            title: "Naruto",
            image: "/images/Naruto Logo.jpeg",
            short: "A ninja who dreams of becoming Hokage."
        },
        {
            id: "aot",
            title: "Attack on Titan",
            image: "/images/Attack-on-Titan-Logo.png",
            short: "Humans vs Titans with dark twists."
        },
        {
            id: "hxh",
            title: "Hunter x Hunter",
            image: "/images/Hunter-x-Hunter-Logo.png",
            short: "Gon’s journey to become a Hunter."
        }
    ],
    movie: [
        {
            id: "inception",
            title: "Inception",
            image: "/images/f0a3dcc2876e054687ebb018afb83dcb.jpg",
            short: "Mind-bending sci-fi heist in dreams."
        },
        {
            id: "interstellar",
            title: "interstellar",
            image: "/images/interstellar-movie-hd-wallpaper-and-poster.jpeg",
            short: "Mind-bending sci-fi heist in dreams."
        },
        {
            id: "kgf chapter 1",
            title: "kgf chapter 1",
            image: "/images/JNC8q4nY-Ichd.jpg",
            short: "Story of a boy rising to power."
        },
        {
            id: "RRR",
            title: "RRR",
            image: "/images/1d09c0a8beccf3ae479e3ebb80926e76.jpg",
            short: "Story of two fighters Adventure."
        }
    ],
    tech: [
        {
            id: "web-dev",
            title: "How to Start Web Development",
            image: "/images/logo-html-5-css-javascript-source-code-for-the-taking-23.png",
            short: "HTML, CSS, JS together build websites — HTML structures the content, CSS designs the layout, and JavaScript adds logic and interactivity."
        }, {
            id: "Frontend vs Backend",
            title: "Frontend vs Backend – What’s the difference?",
            image: "/images/0_frontendvsbackend_d4289130.png",
            short: "The frontend is what users see and interact with, while the backend is the behind-the-scenes system that stores data and powers the application."
        }, {
            id: "What is Responsive Design?",
            title: "What is Responsive Design?",
            image: "/images/Responsive-Logos-1-1155x770.jpg",
            short: "Responsive design means creating websites that automatically adjust and look good on all screen sizes — mobiles, tablets, and desktops."
        }, {
            id: "How to use Google Search Console?",
            title: "How to use Google Search Console",
            image: "/images/pngegg.png",
            short: "Google Search Console helps you monitor, analyze, and improve how your website appears in Google search results.."
        }
    ],
    study: [
        {
            id: "dsa-notes",
            title: "DSA Notes for Beginners",
            image: "/images/1_4ZcW5tSdizlbtDQyVpRTuA.webp",
            short: "Arrays, Stack, Queue ka short summary."
        },
        {
            id: "dbms-notes",
            title: "Dbms Notes for Beginners",
            image: "/images/database-management-system-dbms-vector-icon-style-illustration-logo-computer-software-application-interacting-user-82839042.jpg",
            short: "DBMS is a subject that teaches how data is stored, managed, and handled securely in a database.."
        },
        {
            id: "Oops-notes",
            title: "Oops Notes for Beginners",
            image: "/images/COLOURBOX41732943.webp",
            short: "OOPS is a subject that teaches how to build programs using objects, classes, and concepts like inheritance and polymorphism.."
        },
        {
            id: "Signal&system-notes",
            title: "Signal&system Notes for Beginners",
            image: "/images/signals-systems-handwritten-study-notes.jpg",
            short: "Signals and Systems is a subject that explains how signals are generated, processed, and analyzed in communication and electronic systems."
        }

    ]
};

// Har “id” ke liye detailed page ka data
const postsData = {
    "one-piece": {
        title: "One Piece – Beginner Friendly Guide",
        image: "/images/One-Piece-Logo.png",
        content: `
            <p><strong>One Piece</strong> ek long-running shonen anime hai jisme Monkey D. Luffy Pirate King banne nikalta hai.</p>
            <p>Starting me <em>East Blue Saga</em> aati hai jahan Luffy apni crew banata hai – Zoro, Nami, Usopp, Sanji, etc.</p>
            <p>Show ka main charm hai:</p>
            <ul>
                <li>World-building (islands, seas, powers)</li>
                <li>Emotional backstories (specially Nami & Robin)</li>
                <li>Comedy + action ka mix</li>
            </ul>
            <p>Agar tum long anime dekh sakte ho to yeh must-watch hai. Rating: 9/10.</p>
        `
    },
    "naruto": {
        title: "Naruto – From Zero to Hokage",
        image: "/images/Naruto Logo.jpeg",
        content: `
            <p><strong>Naruto</strong> ek ninja ladke ki story hai jo village ka leader, Hokage, banna chahta hai.</p>
            <p>Isme strong emotional moments, friendship/rivalry (Naruto vs Sasuke) aur iconic fights hain.</p>
            <p>Filler episodes zyada hain, lekin main story bohot strong hai.</p>
        `
    },
    "aot": {
        title: "Attack on Titan – Dark & Political Masterpiece",
        image: "/images/Attack-on-Titan-Logo.png",
        content: `
            <p><strong>Attack on Titan</strong> shuru me sirf Titans vs humans lagta hai, lekin dheere-dheere political, philosophical aur moral grey zone me chala jata hai.</p>
            <p>Plot twists, OST aur tension iska main highlight hai.</p>
        `
    },
    "hxh": {
        title: "Hunter x Hunter – Not Your Typical Shonen",
        image: "/images/Hunter-x-Hunter-Logo.png",
        content: `
            <p><strong>Hunter x Hunter</strong> ek simple adventure se start hota hai lekin har arc alag flavour ke saath kaafi mature ho jata hai.</p>
            <p>Greed Island, Chimera Ant arc, Yorknew City – sab top tier writing ke examples hain.</p>
        `
    },
    "inception": {
        title: "Inception – Dreams Inside Dreams",
        image: "/images/f0a3dcc2876e054687ebb018afb83dcb.jpg",
        content: `
            <p><strong>Inception</strong> ek sci-fi thriller hai jahan logon ke dreams ke andar ghus ke ideas plant kiye jaate hain.</p>
            <p>Multiple dream layers, time dilation, open ending – sab milke isse ek rewatch-worthy movie banate hain.</p>
        `
    },
    "interstellar": {
        title: "interstellar",
        image: "/images/interstellar-movie-hd-wallpaper-and-poster.jpeg",
        content: `
            <p><strong>Interstellar</strong> ek sci-fi thriller hai jisme ye time travel 3rd dimension jaisi cheezo per based hai .</p>
            <p>Multiple dream layers, time dilation, open ending – sab milke isse ek rewatch-worthy movie banate hain.</p>
        `
    }, "kgf chapter 1": {
        title: "KGF Chapter 1 – Power and Ambition",
        image: "/images/JNC8q4nY-Ichd.jpg",
        content: `
            <p><strong>KGF</strong>"KGF" ek gritty action-drama hai jo Rocky ki journey ko follow karti hai — ek aisa ladka jo Mumbai ki sadkon par janm leta hai aur duniya ka sabse powerful aadmi banne ka vaada karta hai. Uski zindagi tab badalti hai jab woh Kolar Gold Fields bheja jata hai, jahan hazaaron log slavery aur zulm ke neeche dabaye gaye hote hain. Rocky dheere-dheere mining empire, mafia networks aur political power struggles ke beech apni pehchaan banata hai. Film uski ambition, badlaav, rebellion aur ek messiah-jaisi image ko highlight karti hai, saath hi high-intensity action, emotional depth aur heroic elevation ke saath story ko grand scale par portray karti hai..</p>
        `
    }, "RRR": {
        title: "RRR – Epic Tale of Friendship and Revolt",
        image: "/images/1d09c0a8beccf3ae479e3ebb80926e76.jpg",
        content: `
            <p><strong>RRR</strong>"RRR" ek epic period action-drama hai jo do fictionalized revolutionaries, Komaram Bheem aur Alluri Sitarama Raju, ki kahani ko explore karti hai. British rule ke dauran set, film shuru hoti hai jab Bheem ek tribal ladki ko bachane ke liye gupt mission par hota hai, jabki Ram British forces ke andar ek disciplined aur determined officer ke roop mein dikhai deta hai. Kismet dono ko mila deti hai, aur woh ek powerful dosti bana lete hain — bina yeh jaane ki unka maksad ek-dusre se takraata hai. Kahani dheere-dheere dosti, dhokha, sacrifice, aur azaadi ki bhavna ko bada canvas par unfold karti hai. Grand action sequences, emotional stakes, music, aur patriotism ke blend ke saath film ek high-voltage cinematic experience deti hai.</p>
        `
    },



    "web-dev": {
        title: "Web Development Start Karne ka Simple Roadmap",
        image: "/images/logo-html-5-css-javascript-source-code-for-the-taking-23.png",
        content: `
            <p>Step 1: HTML basics – tags, headings, paragraphs, links, images.</p>
            <p>Step 2: CSS – layout, colors, fonts, responsive design.</p>
            <p>Step 3: JavaScript – basic logic, DOM, events.</p>
            <p>Step 4: Ek chhota project banao, jaise tum apni AR website bana rahe ho 🙂</p>
        `
    },
    "Frontend vs Backend": {
        title: "Frontend vs Backend – What’s the difference?",
        image: "/images/0_frontendvsbackend_d4289130.png",
        content: `
           <section>
  <h2>Frontend (Client-side)</h2>
  <p>This is the visible part of a website — everything the user can see, click, read, or interact with.</p>

  <h3>Includes:</h3>
  <ul>
    <li>Layout and design</li>
    <li>Buttons, menus, forms</li>
    <li>Animations and visuals</li>
    <li>User experience (UX)</li>
  </ul>

  <h3>Common Frontend Languages/Tools:</h3>
  <ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
    <li>Frameworks like React, Angular, Vue</li>
  </ul>

  <h3>Example:</h3>
  <p>When you open a website and see a signup form — that’s frontend.</p>
</section>

<hr>

<section>
  <h2>Backend (Server-side)</h2>
  <p>This is the hidden part that processes data, runs logic, and communicates with the database.</p>

  <h3>Includes:</h3>
  <ul>
    <li>User authentication (login system)</li>
    <li>Database storage and retrieval</li>
    <li>Server logic</li>
    <li>APIs</li>
  </ul>

  <h3>Common Backend Languages/Tools:</h3>
  <ul>
    <li>Node.js</li>
    <li>Python (Django, Flask)</li>
    <li>PHP</li>
    <li>Java</li>
    <li>Databases like MySQL, MongoDB, PostgreSQL</li>
  </ul>

  <h3>Example:</h3>
  <p>When you submit the signup form and your account gets created — that’s backend working.</p>
</section>

            
        `
    },

    "What is Responsive Design?": {
        title: "What is Responsive Design?",
        image: "/images/Responsive-Logos-1-1155x770.jpg",
        content: `
<section>
  <h2>What is Responsive Design?</h2>
  <p>Responsive design ka matlab hota hai aisi website banana jo har screen size par theek se adjust ho jaaye — mobile, tablet, laptop, ya desktop.</p>

  <h3>Why Responsive Design is Important?</h3>
  <ul>
    <li>Mobile users bhi site comfortably use kar sakte hain</li>
    <li>Layout screen ke hisaab se self-adjust ho jata hai</li>
    <li>SEO ranking improve hoti hai (Google mobile-friendly sites ko prefer karta hai)</li>
  </ul>

  <h3>How Responsive Design Works?</h3>
  <ul>
    <li><strong>Fluid Layouts:</strong> Width fixed nahi hoti, percentage me hoti hai</li>
    <li><strong>Flexible Images:</strong> Images automatically shrink/expand hoti hain</li>
    <li><strong>Media Queries:</strong> CSS rules device screen ke size ke hisaab se change hote hain</li>
  </ul>

  <h3>Example (Simple Explanation)</h3>
  <p>Agar tum website mobile me open karte ho aur content automatically chhota ho kar mobile layout me aa jaye — woh responsive design hota hai.</p>
</section>

  
            
        `
    }, "How to use Google Search Console?": {
        title: "How to use Google Search Console?",
        image: "/images/pngegg.png",
        content: `
         <section>
  <h2>What is Google Search Console?</h2>
  <p>Google Search Console (GSC) is a free tool by Google that allows website owners to track website performance, fix indexing issues, submit sitemaps, and understand how users find their site on search results. It is essential for improving SEO, boosting visibility, and maintaining a healthy website.</p>
</section>

<section>
  <h2>Step-by-Step: How to Use Google Search Console</h2>

  <h3>1. Add and Verify Your Website</h3>
  <p>Steps to begin:</p>
  <ul>
    <li>Sign in with your Google account</li>
    <li>Add your website URL as a Property</li>
    <li>Verify ownership using:
    <ul>
      <li>HTML file upload</li>
      <li>Meta tag</li>
      <li>DNS record</li>
      <li>Google Analytics (optional)</li>
    </ul>
    </li>
  </ul>

  <h3>2. Submit Your Sitemap</h3>
  <p>A sitemap helps Google crawl your pages faster.</p>
  <ul>
    <li>Go to Sitemaps</li>
    <li>Enter: <code>sitemap.xml</code></li>
    <li>Submit and wait for processing</li>
  </ul>

  <h3>3. Check Index Coverage</h3>
  <p>This shows which pages are indexed and which have issues.</p>
  <ul>
    <li>See pages marked as Indexed, Excluded, or Error</li>
    <li>Identify crawl issues</li>
    <li>Request indexing for important pages</li>
  </ul>

  <h3>4. Monitor Search Performance</h3>
  <p>Under the Performance report, you can track:</p>
  <ul>
    <li>Clicks</li>
    <li>Impressions</li>
    <li>CTR (Click-Through Rate)</li>
    <li>Top keywords users search</li>
    <li>Best performing pages</li>
    <li>Countries & devices</li>
  </ul>
  <p>This helps improve SEO strategy.</p>

  <h3>5. Fix Page Experience & Mobile Issues</h3>
  <p>You can check:</p>
  <ul>
    <li>Mobile usability</li>
    <li>Core Web Vitals</li>
    <li>HTTPS status</li>
  </ul>
  <p>Improving these boosts ranking and user experience.</p>

  <h3>6. URL Inspection Tool</h3>
  <p>Use it to:</p>
  <ul>
    <li>Check indexing status of a page</li>
    <li>Detect crawling problems</li>
    <li>Request “Index Now” after updates</li>
  </ul>

  <h3>7. Track Backlinks (External links)</h3>
  <p>You can see:</p>
  <ul>
    <li>Sites linking to you</li>
    <li>Top linked pages</li>
    <li>Anchor text</li>
  </ul>
  <p>Backlinks improve authority and ranking.</p>
</section>

<section>
  <h2>Why Google Search Console is Important</h2>
  <ul>
    <li>Helps pages get indexed faster</li>
    <li>Shows how Google views your site</li>
    <li>Identifies SEO problems</li>
    <li>Helps increase organic traffic</li>
    <li>Essential for bloggers, businesses, developers, and students</li>
  </ul>
</section>


        `
    },


    "dsa-notes": {
        title: "DSA Notes – Quick Revision Sheet",
        image: "/images/1_4ZcW5tSdizlbtDQyVpRTuA.webp",
        content: `
           <section>
  <h2>DSA Notes</h2>
  <p>Our website also offers free DSA notes to help students strengthen their problem-solving and coding logic. DSA is crucial because it is used in competitive programming, technical interviews, and efficient software development. With these notes, students can improve their analytical thinking and prepare confidently for placements and real-world programming tasks.</p>
</section>



        `
    },
    "dbms-notes": {
        title: "Dbms Notes – Quick Revision Sheet",
        image: "/images/database-management-system-dbms-vector-icon-style-illustration-logo-computer-software-application-interacting-user-82839042.jpg",
        content: `
              <section>
           <h2>DBMS Notes</h2>
  <p>Our website offers free DBMS notes to help students understand how data is stored, organized, and managed efficiently. DBMS is an essential subject because it forms the backbone of applications that rely on databases such as banking systems, e-commerce platforms, and management software. These notes make learning easier and support students in building strong fundamentals in data handling.</p>
</section>
        `
    },
    "Oops-notes": {
        title: "Oops Notes – Quick Revision Sheet",
        image: "/images/COLOURBOX41732943.webp",
        content: `
           <section>
  <h2>OOPS Notes</h2>
  <p>We provide free OOPS notes for students who want to learn the core principles of modern programming. OOPS is important because concepts like classes, objects, inheritance, and polymorphism are widely used in software development, app building, and popular languages like Java, C++, and Python. Our notes help learners understand these concepts in a simple and practical way.</p>
</section>

        `
    },
    "Signal&system-notes": {
        title: "Signal&system Notes – Quick Revision Sheet",
        image: "/images/signals-systems-handwritten-study-notes.jpg",
        content: `
            <section>
  <h2>Signals and Systems Notes</h2>
  <p>We provide free Signals and Systems notes for students pursuing electronics, communication, and engineering studies. This subject is important because it explains how signals are processed, analyzed, and transmitted — essential knowledge for fields like telecommunications, control systems, audio processing, and embedded technologies. The notes are simplified to help learners understand complex concepts more comfortably.</p>
</section>

        `
    }
};

const categoryTitles = {
    anime: "Anime Section",
    movie: "Movie Section",
    tech: "Tech Blogs",
    study: "Study & Notes"
};

// ---------------- Views ----------------

const homeSection = document.querySelector('.content-section');
const listSection = document.getElementById('listView');
const postSection = document.getElementById('postView');

// HOME → CATEGORY LIST (Anime → One Piece, Naruto...)
function openCategory(category) {
    const items = categoryItems[category];
    if (!items || !listSection || !homeSection) return;

    const heading = categoryTitles[category] || "Category";

    listSection.innerHTML = `
        <button class="btn back-btn" id="backToHome">← Back</button>
        <h1>${heading}</h1>
        <div class="content-grid">
            ${items.map(item => `
                <div class="content-card js-open-post" data-id="${item.id}">
                    <img src="${item.image}" alt="${item.title}">
                    <h3>${item.title}</h3>
                    <p>${item.short}</p>
                    <a href="#" class="btn">Read More</a>
                </div>
            `).join('')}
        </div>
    `;

    homeSection.style.display = 'none';
    postSection.style.display = 'none';
    listSection.style.display = 'block';

    const backBtn = document.getElementById('backToHome');
    if (backBtn) {
        backBtn.addEventListener('click', showHomeView);
    }

    setupPostCardClicks(listSection);
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// CATEGORY LIST → DETAIL PAGE
function openPost(id) {
    if (!postSection) return;

    const post = postsData[id];
    if (!post) return;

    postSection.innerHTML = `
        <button class="btn back-btn" id="backToList">← Back</button>
        <h1>${post.title}</h1>
        <img src="${post.image}" alt="${post.title}">
        ${post.content}
    `;

    if (homeSection) homeSection.style.display = 'none';
    if (listSection) listSection.style.display = 'none';
    postSection.style.display = 'block';

    const backBtn = document.getElementById('backToList');
    if (backBtn) {
        backBtn.addEventListener('click', showListView);
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Wapas Home
function showHomeView() {
    if (homeSection) homeSection.style.display = 'block';
    if (listSection) listSection.style.display = 'none';
    if (postSection) postSection.style.display = 'none';
}

// Wapas Category list (detail se)
function showListView() {
    if (listSection) listSection.style.display = 'block';
    if (postSection) postSection.style.display = 'none';
}

// Category cards pe click
function setupCategoryClicks() {
    const categoryCards = document.querySelectorAll('.js-open-category');
    categoryCards.forEach(card => {
        card.addEventListener('click', (e) => {
            e.preventDefault();
            const category = card.dataset.category;
            openCategory(category);
        });
    });
}

// List section ke cards pe click
function setupPostCardClicks(container) {
    const cards = container.querySelectorAll('.js-open-post');
    cards.forEach(card => {
        card.addEventListener('click', (e) => {
            e.preventDefault();
            const id = card.dataset.id;
            openPost(id);
        });
    });
}

// ---------------- Loader + init ----------------

window.addEventListener('load', () => {
    const loader = document.querySelector('.loader');
    const grid = document.querySelector('.content-grid');

    if (loader) {
        setTimeout(() => {
            loader.style.display = 'none';
            if (grid) {
                grid.style.display = 'grid';
            }
        }, 500); // thoda sa delay
    }

    setupCategoryClicks();
});

// ---------------- Back to top button ----------------

const backToTopBtn = document.querySelector('.back-to-top');

if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.style.display = 'block';
        } else {
            backToTopBtn.style.display = 'none';
        }
    });
}
