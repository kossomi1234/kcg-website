document.getElementById('y').textContent=new Date().getFullYear();
var FR={
'About':'À propos','Services':'Services','Founder':'Fondateur','Register':'S’inscrire','Contact':'Contact',
'Learn':'Apprendre','Protect':'Protéger','Stay Secure':'Rester en sécurité',
'Building a Safer':'Construire un','Digital Chad.':'Tchad numérique plus sûr.',
'Kossomi CyberGuard (KCG) trains, protects and advises individuals, schools and organizations so Chad can thrive online with confidence.':'Kossomi CyberGuard (KCG) forme, protège et conseille les particuliers, les écoles et les organisations pour que le Tchad avance en toute confiance dans le monde numérique.',
'Explore our services':'Découvrir nos services','Get in touch':'Nous contacter',
'About KCG':'À propos de KCG',
'Kossomi CyberGuard is a Chadian cybersecurity organization dedicated to making the digital world safer for everyone. We combine education, hands-on training and practical security services to help people and organizations understand threats, defend against them and stay secure.':'Kossomi CyberGuard est une organisation tchadienne de cybersécurité qui œuvre pour un monde numérique plus sûr pour tous. Nous associons éducation, formation pratique et services de sécurité concrets pour aider les personnes et les organisations à comprendre les menaces, s’en défendre et rester en sécurité.',
'Cybersecurity knowledge made clear and practical.':'Des connaissances en cybersécurité claires et pratiques.',
'Defensive skills and services to safeguard what matters.':'Des compétences et des services de défense pour protéger l’essentiel.',
'Lasting habits and support for a safer digital life.':'Des habitudes durables et un accompagnement pour une vie numérique plus sûre.',
'Our Courses & Services':'Nos formations et services',
'Six ways KCG helps you learn, protect and stay secure.':'Six façons dont KCG vous aide à apprendre, à vous protéger et à rester en sécurité.',
'Cybersecurity Education':'Éducation à la cybersécurité','Structured courses that take learners from the fundamentals to real-world security skills.':'Des cours structurés qui mènent les apprenants des bases jusqu’aux compétences de sécurité du monde réel.',
'Digital Safety Awareness':'Sensibilisation à la sécurité numérique','Practical sessions on phishing, passwords, scams and safe online habits for everyday users.':'Des séances pratiques sur l’hameçonnage, les mots de passe, les arnaques et les bons réflexes en ligne pour tous.',
'Ethical Hacking Training':'Formation en piratage éthique','Learn to think like an attacker, legally and responsibly, in order to defend better.':'Apprenez à raisonner comme un attaquant, de façon légale et responsable, pour mieux vous défendre.',
'Network Security':'Sécurité des réseaux','Securing networks and systems so organizations can reduce risk and stay resilient.':'Sécuriser les réseaux et les systèmes pour que les organisations réduisent les risques et restent résilientes.',
'Research & Innovation':'Recherche et innovation','Local research and new ideas that address Chad’s own cybersecurity challenges.':'Une recherche locale et de nouvelles idées pour relever les défis de cybersécurité propres au Tchad.',
'Consulting Services':'Services de conseil','Expert guidance to assess your security, plan improvements and build a safer organization.':'Un accompagnement d’experts pour évaluer votre sécurité, planifier les améliorations et bâtir une organisation plus sûre.',
'Meet the Founder':'Rencontrez le fondateur','Founder, Kossomi CyberGuard · Chad':'Fondateur, Kossomi CyberGuard · Tchad',
'Register with KCG':'Inscrivez-vous chez KCG',
'Create your KCG profile to join our courses and trainings. Fields marked * are required.':'Créez votre profil KCG pour rejoindre nos cours et formations. Les champs marqués d’un * sont obligatoires.',
'Username *':'Nom d’utilisateur *','Last name *':'Nom de famille *','Phone number 1 *':'Numéro de téléphone 1 *','Phone number 2':'Numéro de téléphone 2','(optional)':'(facultatif)','Email address *':'Adresse e-mail *','Country *':'Pays *','City *':'Ville *',
'Captcha * – type the characters you see':'Captcha * – saisissez les caractères affichés',
'e.g. kcg_student':'ex. kcg_etudiant','Last name':'Nom de famille','you@example.com':'vous@exemple.com','Start typing…':'Commencez à écrire…','e.g. N’Djamena':'ex. N’Djamena','Captcha':'Captcha','Captcha image':'Image du captcha','New captcha':'Nouveau captcha','Language':'Langue',
'Contact Us':'Contactez-nous','Interested in a course, a workshop or a security consultation? Send us a message.':'Une formation, un atelier ou une consultation en sécurité vous intéresse ? Écrivez-nous.',
'Your name':'Votre nom','Your email':'Votre e-mail','How can we help?':'Comment pouvons-nous vous aider ?','Send message':'Envoyer le message',
'Kossomi CyberGuard (KCG) · Learn • Protect • Stay Secure · Building a Safer Digital Chad.':'Kossomi CyberGuard (KCG) · Apprendre • Protéger • Rester en sécurité · Construire un Tchad numérique plus sûr.',
'Chad':'Tchad','Cameroon':'Cameroun','Central African Republic':'République centrafricaine','Nigeria':'Nigéria','Sudan':'Soudan','Libya':'Libye','Senegal':'Sénégal','Ivory Coast':'Côte d’Ivoire','Morocco':'Maroc','Algeria':'Algérie','Tunisia':'Tunisie','Egypt':'Égypte','Belgium':'Belgique','United States':'États-Unis','United Kingdom':'Royaume-Uni','Germany':'Allemagne',
'Username: 3–30 letters, numbers, _ or . only.':'Nom d’utilisateur : 3 à 30 lettres, chiffres, _ ou . uniquement.',
'Please enter your last name.':'Veuillez saisir votre nom de famille.','Please enter a valid phone number 1.':'Veuillez saisir un numéro de téléphone 1 valide.',
'Phone number 2 is not valid (or leave it empty).':'Le numéro de téléphone 2 n’est pas valide (ou laissez-le vide).',
'Please enter a valid email address.':'Veuillez saisir une adresse e-mail valide.','Please enter your country.':'Veuillez saisir votre pays.','Please enter your city.':'Veuillez saisir votre ville.',
'Password *':'Mot de passe *','Confirm password *':'Confirmer le mot de passe *','At least 8 characters, with letters, numbers and a special character (e.g. @ # $ !).':'Au moins 8 caractères, avec des lettres, des chiffres et un caractère spécial (ex. @ # $ !).',
'Password must be at least 8 characters.':'Le mot de passe doit contenir au moins 8 caractères.','Passwords do not match.':'Les mots de passe ne correspondent pas.',
'Password must include letters, numbers and a special character (e.g. @ # $ !).':'Le mot de passe doit contenir des lettres, des chiffres et un caractère spécial (ex. @ # $ !).',
'Captcha is incorrect. Try the new one.':'Le captcha est incorrect. Essayez le nouveau.',
'Thank you! Your email app will open to send your registration.':'Merci ! Votre application e-mail va s’ouvrir pour envoyer votre inscription.'
};
var lang='en';
try{lang=localStorage.getItem('kcgLang')||(function(){var l=(navigator.language||'en').slice(0,2).toLowerCase();return ['fr','ar','es','pt'].indexOf(l)>-1?l:'en'})()}catch(e){}
FR['Courses']='Formations';FR['Search']='Rechercher';FR['Search the site…']='Rechercher sur le site…';FR['No results found.']='Aucun résultat.';
FR.TITLE='Kossomi CyberGuard (KCG) – Construire un Tchad numérique plus sûr';
var K=['About','Services','Founder','Register','Contact','Learn','Protect','Stay Secure','Building a Safer','Digital Chad.','Kossomi CyberGuard (KCG) trains, protects and advises individuals, schools and organizations so Chad can thrive online with confidence.','Explore our services','Get in touch','About KCG','Kossomi CyberGuard is a Chadian cybersecurity organization dedicated to making the digital world safer for everyone. We combine education, hands-on training and practical security services to help people and organizations understand threats, defend against them and stay secure.','Cybersecurity knowledge made clear and practical.','Defensive skills and services to safeguard what matters.','Lasting habits and support for a safer digital life.','Our Courses & Services','Six ways KCG helps you learn, protect and stay secure.','Cybersecurity Education','Structured courses that take learners from the fundamentals to real-world security skills.','Digital Safety Awareness','Practical sessions on phishing, passwords, scams and safe online habits for everyday users.','Ethical Hacking Training','Learn to think like an attacker, legally and responsibly, in order to defend better.','Network Security','Securing networks and systems so organizations can reduce risk and stay resilient.','Research & Innovation','Local research and new ideas that address Chad’s own cybersecurity challenges.','Consulting Services','Expert guidance to assess your security, plan improvements and build a safer organization.','Meet the Founder','Founder, Kossomi CyberGuard · Chad','Register with KCG','Create your KCG profile to join our courses and trainings. Fields marked * are required.','Username *','Last name *','Phone number 1 *','Phone number 2','(optional)','Email address *','Country *','City *','Password *','Confirm password *','At least 8 characters, with letters, numbers and a special character (e.g. @ # $ !).','Captcha * – type the characters you see','e.g. kcg_student','Last name','you@example.com','Start typing…','e.g. N’Djamena','Captcha','Captcha image','New captcha','Language','Contact Us','Interested in a course, a workshop or a security consultation? Send us a message.','Your name','Your email','How can we help?','Send message','Kossomi CyberGuard (KCG) · Learn • Protect • Stay Secure · Building a Safer Digital Chad.','Username: 3–30 letters, numbers, _ or . only.','Please enter your last name.','Please enter a valid phone number 1.','Phone number 2 is not valid (or leave it empty).','Please enter a valid email address.','Please enter your country.','Please enter your city.','Password must be at least 8 characters.','Passwords do not match.','Password must include letters, numbers and a special character (e.g. @ # $ !).','Captcha is incorrect. Try the new one.','Thank you! Your email app will open to send your registration.','TITLE','Search','Search the site…','No results found.','Courses'];
var AR=['من نحن','الخدمات','المؤسس','التسجيل','اتصل بنا','تعلّم','احمِ','ابقَ آمنًا','نبني','تشادًا رقميًا أكثر أمانًا.','تقوم كوسومي سايبرجارد (KCG) بتدريب الأفراد والمدارس والمؤسسات وحمايتهم وتقديم المشورة لهم حتى يزدهر تشاد على الإنترنت بثقة.','اكتشف خدماتنا','تواصل معنا','حول KCG','كوسومي سايبرجارد منظمة تشادية للأمن السيبراني تعمل على جعل العالم الرقمي أكثر أمانًا للجميع. نجمع بين التعليم والتدريب العملي وخدمات الأمن التطبيقية لمساعدة الأفراد والمؤسسات على فهم التهديدات والدفاع ضدها والبقاء في أمان.','معرفة بالأمن السيبراني واضحة وعملية.','مهارات وخدمات دفاعية لحماية ما يهم.','عادات دائمة ودعم لحياة رقمية أكثر أمانًا.','دوراتنا وخدماتنا','ست طرق تساعدك بها KCG على التعلّم والحماية والبقاء آمنًا.','التعليم في الأمن السيبراني','دورات منظمة تنقل المتعلمين من الأساسيات إلى مهارات الأمن في الواقع العملي.','التوعية بالسلامة الرقمية','جلسات عملية حول التصيّد الإلكتروني وكلمات المرور والاحتيال وعادات الاستخدام الآمن لجميع المستخدمين.','التدريب على الاختراق الأخلاقي','تعلّم أن تفكر كالمهاجم، بشكل قانوني ومسؤول، لتدافع بشكل أفضل.','أمن الشبكات','تأمين الشبكات والأنظمة لتقليل المخاطر وتعزيز مرونة المؤسسات.','البحث والابتكار','بحث محلي وأفكار جديدة تعالج تحديات الأمن السيبراني الخاصة بتشاد.','خدمات الاستشارات','إرشاد الخبراء لتقييم أمنك وتخطيط التحسينات وبناء مؤسسة أكثر أمانًا.','تعرّف على المؤسس','المؤسس، كوسومي سايبرجارد · تشاد','سجّل لدى KCG','أنشئ ملفك الشخصي في KCG للانضمام إلى دوراتنا وتدريباتنا. الحقول المعلّمة بـ * إلزامية.','اسم المستخدم *','اسم العائلة *','رقم الهاتف 1 *','رقم الهاتف 2','(اختياري)','البريد الإلكتروني *','الدولة *','المدينة *','كلمة المرور *','تأكيد كلمة المرور *','8 أحرف على الأقل، مع حروف وأرقام ورمز خاص (مثل @ # $ !).','الكابتشا * – اكتب الأحرف التي تراها','مثال: kcg_student','اسم العائلة','you@example.com','ابدأ الكتابة…','مثال: انجامينا','الكابتشا','صورة الكابتشا','كابتشا جديدة','اللغة','اتصل بنا','هل تهتم بدورة أو ورشة عمل أو استشارة أمنية؟ أرسل لنا رسالة.','اسمك','بريدك الإلكتروني','كيف يمكننا مساعدتك؟','إرسال الرسالة','كوسومي سايبرجارد (KCG) · تعلّم • احمِ • ابقَ آمنًا · نبني تشادًا رقميًا أكثر أمانًا.','اسم المستخدم: من 3 إلى 30 حرفًا أو رقمًا أو _ أو . فقط.','يرجى إدخال اسم العائلة.','يرجى إدخال رقم هاتف 1 صالح.','رقم الهاتف 2 غير صالح (أو اتركه فارغًا).','يرجى إدخال بريد إلكتروني صالح.','يرجى إدخال الدولة.','يرجى إدخال المدينة.','يجب أن تتكون كلمة المرور من 8 أحرف على الأقل.','كلمتا المرور غير متطابقتين.','يجب أن تتضمن كلمة المرور حروفًا وأرقامًا ورمزًا خاصًا (مثل @ # $ !).','الكابتشا غير صحيحة. جرّب الجديدة.','شكرًا لك! سُيفتح تطبيق البريد لإرسال تسجيلك.','كوسومي سايبرجارد (KCG) – نبني تشادًا رقميًا أكثر أمانًا','بحث','ابحث في الموقع…','لا توجد نتائج.','الدورات'];
var ES=['Acerca de','Servicios','Fundador','Registro','Contacto','Aprende','Protege','Mantente seguro','Construyendo un','Chad digital más seguro.','Kossomi CyberGuard (KCG) forma, protege y asesora a particulares, escuelas y organizaciones para que Chad prospere en línea con confianza.','Explora nuestros servicios','Ponte en contacto','Acerca de KCG','Kossomi CyberGuard es una organización chadiana de ciberseguridad dedicada a hacer el mundo digital más seguro para todos. Combinamos educación, formación práctica y servicios de seguridad aplicados para ayudar a personas y organizaciones a comprender las amenazas, defenderse de ellas y mantenerse seguras.','Conocimientos de ciberseguridad claros y prácticos.','Habilidades y servicios defensivos para proteger lo que importa.','Hábitos duraderos y apoyo para una vida digital más segura.','Nuestros cursos y servicios','Seis maneras en que KCG te ayuda a aprender, protegerte y mantenerte seguro.','Educación en ciberseguridad','Cursos estructurados que llevan a los estudiantes desde los fundamentos hasta habilidades de seguridad del mundo real.','Concienciación sobre seguridad digital','Sesiones prácticas sobre phishing, contraseñas, estafas y hábitos seguros en línea para todos los usuarios.','Formación en hacking ético','Aprende a pensar como un atacante, de forma legal y responsable, para defenderte mejor.','Seguridad de redes','Protección de redes y sistemas para que las organizaciones reduzcan riesgos y se mantengan resilientes.','Investigación e innovación','Investigación local y nuevas ideas que abordan los desafíos de ciberseguridad propios de Chad.','Servicios de consultoría','Asesoramiento experto para evaluar tu seguridad, planificar mejoras y construir una organización más segura.','Conoce al fundador','Fundador, Kossomi CyberGuard · Chad','Regístrate en KCG','Crea tu perfil KCG para unirte a nuestros cursos y formaciones. Los campos marcados con * son obligatorios.','Nombre de usuario *','Apellido *','Teléfono 1 *','Teléfono 2','(opcional)','Correo electrónico *','País *','Ciudad *','Contraseña *','Confirmar contraseña *','Al menos 8 caracteres, con letras, números y un carácter especial (p. ej. @ # $ !).','Captcha * – escribe los caracteres que ves','p. ej. kcg_estudiante','Apellido','tu@ejemplo.com','Empieza a escribir…','p. ej. Yamena','Captcha','Imagen del captcha','Nuevo captcha','Idioma','Contáctanos','¿Te interesa un curso, un taller o una consultoría de seguridad? Envíanos un mensaje.','Tu nombre','Tu correo electrónico','¿Cómo podemos ayudarte?','Enviar mensaje','Kossomi CyberGuard (KCG) · Aprende • Protege • Mantente seguro · Construyendo un Chad digital más seguro.','Nombre de usuario: de 3 a 30 letras, números, _ o . únicamente.','Introduce tu apellido.','Introduce un número de teléfono 1 válido.','El teléfono 2 no es válido (o déjalo vacío).','Introduce un correo electrónico válido.','Introduce tu país.','Introduce tu ciudad.','La contraseña debe tener al menos 8 caracteres.','Las contraseñas no coinciden.','La contraseña debe incluir letras, números y un carácter especial (p. ej. @ # $ !).','El captcha es incorrecto. Prueba con el nuevo.','¡Gracias! Se abrirá tu aplicación de correo para enviar tu registro.','Kossomi CyberGuard (KCG) – Construyendo un Chad digital más seguro','Buscar','Buscar en el sitio…','No se encontraron resultados.','Cursos'];
var PT=['Sobre','Serviços','Fundador','Cadastro','Contacto','Aprenda','Proteja','Fique seguro','Construindo um','Chade digital mais seguro.','A Kossomi CyberGuard (KCG) forma, protege e aconselha indivíduos, escolas e organizações para que o Chade prospere online com confiança.','Conheça os nossos serviços','Entre em contacto','Sobre a KCG','A Kossomi CyberGuard é uma organização chadiana de cibersegurança dedicada a tornar o mundo digital mais seguro para todos. Combinamos educação, formação prática e serviços de segurança aplicados para ajudar pessoas e organizações a compreender as ameaças, defender-se e manter-se seguras.','Conhecimento de cibersegurança claro e prático.','Competências e serviços defensivos para proteger o que importa.','Hábitos duradouros e apoio para uma vida digital mais segura.','Os nossos cursos e serviços','Seis formas como a KCG ajuda a aprender, a proteger-se e a manter-se seguro.','Educação em cibersegurança','Cursos estruturados que levam os alunos dos fundamentos às competências de segurança do mundo real.','Sensibilização para a segurança digital','Sessões práticas sobre phishing, palavras-passe, burlas e hábitos seguros online para todos os utilizadores.','Formação em hacking ético','Aprenda a pensar como um atacante, de forma legal e responsável, para se defender melhor.','Segurança de redes','Proteção de redes e sistemas para que as organizações reduzam riscos e se mantenham resilientes.','Investigação e inovação','Investigação local e novas ideias que respondem aos desafios de cibersegurança do próprio Chade.','Serviços de consultoria','Orientação especializada para avaliar a sua segurança, planear melhorias e construir uma organização mais segura.','Conheça o fundador','Fundador, Kossomi CyberGuard · Chade','Registe-se na KCG','Crie o seu perfil KCG para participar nos nossos cursos e formações. Os campos marcados com * são obrigatórios.','Nome de utilizador *','Apelido *','Telefone 1 *','Telefone 2','(opcional)','Endereço de e-mail *','País *','Cidade *','Palavra-passe *','Confirmar palavra-passe *','Pelo menos 8 caracteres, com letras, números e um carácter especial (ex. @ # $ !).','Captcha * – escreva os caracteres que vê','ex. kcg_aluno','Apelido','voce@exemplo.com','Comece a escrever…','ex. N’Djamena','Captcha','Imagem do captcha','Novo captcha','Idioma','Fale connosco','Interessado num curso, workshop ou consultoria de segurança? Envie-nos uma mensagem.','O seu nome','O seu e-mail','Como podemos ajudar?','Enviar mensagem','Kossomi CyberGuard (KCG) · Aprenda • Proteja • Fique seguro · Construindo um Chade digital mais seguro.','Nome de utilizador: 3 a 30 letras, números, _ ou . apenas.','Introduza o seu apelido.','Introduza um número de telefone 1 válido.','O telefone 2 não é válido (ou deixe-o vazio).','Introduza um endereço de e-mail válido.','Introduza o seu país.','Introduza a sua cidade.','A palavra-passe deve ter pelo menos 8 caracteres.','As palavras-passe não coincidem.','A palavra-passe deve incluir letras, números e um carácter especial (ex. @ # $ !).','O captcha está incorreto. Experimente o novo.','Obrigado! A sua aplicação de e-mail vai abrir para enviar o seu registo.','Kossomi CyberGuard (KCG) – Construindo um Chade digital mais seguro','Pesquisar','Pesquisar no site…','Nenhum resultado encontrado.','Cursos'];
function mk(a){var o={};K.forEach(function(k,i){o[k]=a[i]});return o}
var D={fr:FR,ar:mk(AR),es:mk(ES),pt:mk(PT)};
function T(s){var d=D[lang];return d&&d[s]?d[s]:s}
var L={en:{h:'Courses in Detail',s:'Full details for each KCG course. Durations and formats are indicative and can be adapted to your group.',ov:'Overview',who:'Who it’s for',pre:'Prerequisites',mod:'What you will learn',out:'Outcomes',reg:'Register for this course'},
fr:{h:'Nos formations en détail',s:'Tous les détails de chaque formation KCG. Les durées et formats sont indicatifs et adaptables à votre groupe.',ov:'Présentation',who:'Public concerné',pre:'Prérequis',mod:'Ce que vous apprendrez',out:'Résultats attendus',reg:'S’inscrire à cette formation'},
ar:{h:'تفاصيل الدورات',s:'تفاصيل كاملة لكل دورة من دورات KCG. المدد والأشكال استرشادية ويمكن تكييفها مع مجموعتك.',ov:'نظرة عامة',who:'لمن هذه الدورة',pre:'المتطلبات المسبقة',mod:'ما ستتعلمه',out:'النتائج',reg:'سجّل في هذه الدورة',note:'تفاصيل الدورات متوفرة بالإنجليزية والفرنسية.'},
es:{h:'Cursos en detalle',s:'Todos los detalles de cada curso de KCG. Las duraciones y formatos son orientativos y adaptables a tu grupo.',ov:'Resumen',who:'A quién va dirigido',pre:'Requisitos previos',mod:'Lo que aprenderás',out:'Resultados',reg:'Inscribirme en este curso',note:'Los detalles de los cursos están disponibles en inglés y francés.'},
pt:{h:'Cursos em detalhe',s:'Todos os detalhes de cada curso da KCG. As durações e formatos são indicativos e adaptáveis ao seu grupo.',ov:'Visão geral',who:'A quem se destina',pre:'Pré-requisitos',mod:'O que vai aprender',out:'Resultados',reg:'Inscrever-me neste curso',note:'Os detalhes dos cursos estão disponíveis em inglês e francês.'}};
var C={en:[
{t:'Cybersecurity Education',lvl:'Beginner to intermediate',dur:'8 weeks',fmt:'In person or online, with weekly practice',ov:'A complete foundation in cybersecurity: how attacks work, how to defend against them, and how to start a career in the field.',who:'Students, teachers, IT beginners, professionals and anyone who wants to understand cybersecurity.',pre:'Basic computer and internet skills. No prior security knowledge needed.',mods:['Introduction to cybersecurity and today’s threat landscape','Computer and operating system security','Networking fundamentals: IP, DNS, Wi-Fi and firewalls','Passwords, authentication and multi-factor authentication','Malware, phishing and social engineering','Data protection, privacy and backups','Risk, security policies and incident response basics','Career paths and certifications, plus a final mini-project'],out:['Understand the main cyber threats and how they work','Secure your own devices, accounts and data','Build a personal or organizational security plan','Be ready for intermediate courses such as Ethical Hacking and Network Security']},
{t:'Digital Safety Awareness',lvl:'All levels',dur:'Half-day to 2-day workshop',fmt:'Group workshop in person or online, adapted to schools, businesses and communities',ov:'Simple, practical workshops that teach everyday online safety.',who:'Individuals, families, students, teachers, employees, associations and small businesses.',pre:'None. If you use a phone or a computer, you can join.',mods:['Recognizing phishing, fake messages and online scams','Safe use of social media and messaging apps such as WhatsApp and Facebook','Safer mobile money and online payments','Strong passwords, password managers and two-step verification','Protecting children and teenagers online','Public Wi-Fi, shared computers and phone safety','Spotting fake news and manipulated content','What to do if your account is hacked or your device is lost'],out:['Safer everyday online habits','A simple personal security checklist','Confidence to spot and report scams','Optional phishing simulation for teams']},
{t:'Ethical Hacking Training',lvl:'Intermediate',dur:'12 weeks',fmt:'Hands-on labs in authorized environments, in person or online',ov:'Learn how attackers think and how to test systems legally and responsibly, so you can find weaknesses and fix them before criminals do.',who:'Aspiring security professionals, IT staff, developers and advanced students.',pre:'Basic networking and Linux skills, or completion of Cybersecurity Education.',mods:['Law, ethics and rules of engagement: authorization comes first','Linux and scripting for security work','Reconnaissance and open-source intelligence (OSINT)','Scanning, enumeration and vulnerability assessment','Web application security and the OWASP Top 10','Wireless and network attack concepts in isolated labs','Password security and system hardening','Professional reporting and responsible disclosure','Capstone: a full authorized lab assessment with a written report'],out:['Practical penetration-testing skills in lab environments','Ability to write clear, professional security reports','A strong ethical and legal foundation','Preparation for certifications such as CEH or eJPT']},
{t:'Network Security',lvl:'Intermediate',dur:'8 weeks',fmt:'Lab-based, in person or online',ov:'Learn to design, secure and monitor networks so organizations can prevent attacks and recover quickly.',who:'IT technicians, network administrators, and IT staff of schools and businesses.',pre:'Basic networking knowledge (IP addressing, routers, switches).',mods:['Secure network design and segmentation','Firewalls and access control','VPNs and secure remote access','Securing Wi-Fi, routers and switches','Intrusion detection and network monitoring','Logging, alerts and an introduction to SIEM','Vulnerability scanning and patch management','Incident response and recovery planning'],out:['Harden a small or medium network step by step','Set up monitoring and basic detection','Create a network security checklist and response plan']},
{t:'Research & Innovation',lvl:'Intermediate to advanced',dur:'Ongoing programs and projects (3–6 months)',fmt:'Project-based with mentoring, individual or team',mh:'What you will work on',ov:'A program for curious minds who want to study cybersecurity challenges in Chad and Africa and build local solutions.',who:'University students, researchers, developers, innovators and partner organizations.',pre:'Interest in research and basic cybersecurity knowledge.',mods:['Research methods and how to define a security problem','Studying local threats: scams, mobile payment fraud and data protection gaps','Surveys, data collection and analysis','Building prototypes and open-source security tools','Writing and publishing research papers and awareness guides','Hackathons, competitions and community challenges','Partnerships with universities, businesses and institutions'],out:['Published reports, guides or prototypes','Practical experience for CVs and further study','Locally relevant solutions for Chad’s digital security']},
{t:'Consulting Services',lvl:'For organizations',dur:'Tailored to each project',fmt:'On-site or remote engagement',mh:'What we offer',ov:'Expert support to understand your security risks and build a clear, realistic plan to reduce them.',who:'Schools, businesses, NGOs, public institutions and startups.',pre:'None. We begin by discussing your needs.',mods:['Security risk assessment','Network and systems security review','Security policies and staff guidelines','Staff training and awareness sessions','Data protection and privacy guidance','Incident response planning','Security roadmap and priorities'],out:['A clear report with findings and priorities','A step-by-step improvement plan','Better-trained staff and stronger protection','Optional follow-up support']}
],fr:[
{t:'Éducation à la cybersécurité',lvl:'Débutant à intermédiaire',dur:'8 semaines',fmt:'En présentiel ou en ligne, avec pratique hebdomadaire',ov:'Des bases complètes en cybersécurité : comment fonctionnent les attaques, comment s’en défendre et comment démarrer une carrière dans le domaine.',who:'Étudiants, enseignants, débutants en informatique, professionnels et toute personne souhaitant comprendre la cybersécurité.',pre:'Compétences de base en informatique et sur Internet. Aucune connaissance préalable en sécurité requise.',mods:['Introduction à la cybersécurité et aux menaces actuelles','Sécurité des ordinateurs et des systèmes d’exploitation','Bases des réseaux : IP, DNS, Wi-Fi et pare-feu','Mots de passe, authentification et authentification multifacteur','Logiciels malveillants, hameçonnage et ingénierie sociale','Protection des données, vie privée et sauvegardes','Risques, politiques de sécurité et bases de la réponse aux incidents','Parcours professionnels et certifications, avec un mini-projet final'],out:['Comprendre les principales cybermenaces et leur fonctionnement','Sécuriser vos appareils, comptes et données','Élaborer un plan de sécurité personnel ou pour une organisation','Être prêt pour les formations intermédiaires comme le piratage éthique et la sécurité des réseaux']},
{t:'Sensibilisation à la sécurité numérique',lvl:'Tous niveaux',dur:'Atelier d’une demi-journée à 2 jours',fmt:'Atelier collectif en présentiel ou en ligne, adapté aux écoles, entreprises et communautés',ov:'Des ateliers simples et pratiques pour apprendre à rester en sécurité en ligne au quotidien.',who:'Particuliers, familles, élèves, enseignants, employés, associations et petites entreprises.',pre:'Aucun. Il suffit d’utiliser un téléphone ou un ordinateur.',mods:['Reconnaître l’hameçonnage, les faux messages et les arnaques en ligne','Utiliser en sécurité les réseaux sociaux et les messageries comme WhatsApp et Facebook','Sécuriser le mobile money et les paiements en ligne','Mots de passe solides, gestionnaires de mots de passe et vérification en deux étapes','Protéger les enfants et les adolescents en ligne','Wi-Fi public, ordinateurs partagés et sécurité du téléphone','Repérer les fausses informations et les contenus manipulés','Que faire si votre compte est piraté ou votre appareil perdu'],out:['Des habitudes en ligne plus sûres au quotidien','Une liste de contrôle de sécurité personnelle simple','La confiance pour repérer et signaler les arnaques','Simulation d’hameçonnage en option pour les équipes']},
{t:'Formation en piratage éthique',lvl:'Intermédiaire',dur:'12 semaines',fmt:'Travaux pratiques en environnements autorisés, en présentiel ou en ligne',ov:'Apprenez comment pensent les attaquants et comment tester des systèmes de façon légale et responsable, afin de trouver les failles et les corriger avant les criminels.',who:'Futurs professionnels de la sécurité, personnel informatique, développeurs et étudiants avancés.',pre:'Bases en réseaux et en Linux, ou avoir suivi l’Éducation à la cybersécurité.',mods:['Droit, éthique et règles d’engagement : l’autorisation avant tout','Linux et scripts pour la sécurité','Reconnaissance et renseignement en sources ouvertes (OSINT)','Analyse, énumération et évaluation des vulnérabilités','Sécurité des applications web et OWASP Top 10','Concepts d’attaques réseau et sans fil dans des laboratoires isolés','Sécurité des mots de passe et durcissement des systèmes','Rapports professionnels et divulgation responsable','Projet final : une évaluation complète en laboratoire autorisé, avec rapport écrit'],out:['Des compétences pratiques de test d’intrusion en laboratoire','La capacité de rédiger des rapports de sécurité clairs et professionnels','Une solide base éthique et juridique','Une préparation aux certifications comme CEH ou eJPT']},
{t:'Sécurité des réseaux',lvl:'Intermédiaire',dur:'8 semaines',fmt:'Travaux pratiques en laboratoire, en présentiel ou en ligne',ov:'Apprenez à concevoir, sécuriser et surveiller des réseaux pour que les organisations préviennent les attaques et se rétablissent vite.',who:'Techniciens informatiques, administrateurs réseau, responsables informatiques d’écoles et d’entreprises.',pre:'Connaissances de base en réseaux (adressage IP, routeurs, commutateurs).',mods:['Conception sécurisée et segmentation des réseaux','Pare-feu et contrôle d’accès','VPN et accès distant sécurisé','Sécurisation du Wi-Fi, des routeurs et des commutateurs','Détection d’intrusion et surveillance réseau','Journalisation, alertes et introduction au SIEM','Analyse de vulnérabilités et gestion des correctifs','Réponse aux incidents et plan de reprise'],out:['Durcir pas à pas un réseau de petite ou moyenne taille','Mettre en place une surveillance et une détection de base','Créer une liste de contrôle de sécurité réseau et un plan de réponse']},
{t:'Recherche et innovation',lvl:'Intermédiaire à avancé',dur:'Programmes et projets continus (3 à 6 mois)',fmt:'Par projet avec mentorat ; individuel ou en équipe',mh:'Sur quoi vous travaillerez',ov:'Un programme pour les esprits curieux qui veulent étudier les défis de cybersécurité au Tchad et en Afrique et construire des solutions locales.',who:'Étudiants universitaires, chercheurs, développeurs, innovateurs et organisations partenaires.',pre:'Intérêt pour la recherche et connaissances de base en cybersécurité.',mods:['Méthodes de recherche et définition d’un problème de sécurité','Étude des menaces locales : arnaques, fraude au paiement mobile et lacunes de protection des données','Enquêtes, collecte et analyse de données','Création de prototypes et d’outils de sécurité open source','Rédaction et publication d’articles de recherche et de guides de sensibilisation','Hackathons, compétitions et défis communautaires','Partenariats avec les universités, entreprises et institutions'],out:['Rapports, guides ou prototypes publiés','Une expérience pratique pour le CV et la poursuite d’études','Des solutions adaptées à la sécurité numérique du Tchad']},
{t:'Services de conseil',lvl:'Pour les organisations',dur:'Adaptée à chaque projet',fmt:'Mission sur site ou à distance',mh:'Ce que nous proposons',ov:'Un accompagnement d’experts pour comprendre vos risques de sécurité et bâtir un plan clair et réaliste pour les réduire.',who:'Écoles, entreprises, ONG, institutions publiques et startups.',pre:'Aucun. Nous commençons par discuter de vos besoins.',mods:['Évaluation des risques de sécurité','Audit de la sécurité des réseaux et des systèmes','Politiques de sécurité et consignes pour le personnel','Formations et sessions de sensibilisation du personnel','Conseils sur la protection des données et la vie privée','Planification de la réponse aux incidents','Feuille de route et priorités de sécurité'],out:['Un rapport clair avec constats et priorités','Un plan d’amélioration étape par étape','Un personnel mieux formé et une meilleure protection','Un suivi en option']}
]};
function el(t,c,x){var e=document.createElement(t);if(c)e.className=c;if(x!=null)e.textContent=x;return e}
function renderCourses(){
  var l=L[lang]||L.en,cs=C[lang]||C.en,list=document.getElementById('cl');
  document.getElementById('ch').textContent=l.h;
  document.getElementById('cs').textContent=l.s+(C[lang]?'':' '+(l.note||''));
  list.textContent='';
  cs.forEach(function(c,i){
    var d=el('details','card course'),sm=el('summary');
    sm.appendChild(el('div','num',i+1));
    var w=el('span');w.appendChild(el('b',0,c.t));w.appendChild(el('small',0,c.lvl+' · '+c.dur));sm.appendChild(w);d.appendChild(sm);
    var b=el('div','body'),m=el('div','meta');
    [c.lvl,c.dur,c.fmt].forEach(function(x){m.appendChild(el('span',0,x))});b.appendChild(m);
    function sec(h,x){var s=el('div');s.appendChild(el('h4',0,h));if(Array.isArray(x)){var u=el('ul');x.forEach(function(y){u.appendChild(el('li',0,y))});s.appendChild(u)}else s.appendChild(el('p',0,x));b.appendChild(s)}
    sec(l.ov,c.ov);sec(l.who,c.who);sec(l.pre,c.pre);sec(c.mh||l.mod,c.mods);sec(l.out,c.out);
    var a=el('a','btn',l.reg);a.href='#register';a.style.justifySelf='start';b.appendChild(a);
    d.appendChild(b);list.appendChild(d);
  });
}
var LT={en:{nav:'Cybersecurity',h:'Cybersecurity and Its Types',s:'Cybersecurity is the practice of protecting people, devices, networks and data from digital attacks. Here are its main types, the threats each one faces and how they are defended.',ov:'What it is',th:'Common threats',pr:'How it is protected',ex:'Everyday example',ln:'See related courses'},
fr:{nav:'Cybersécurité',h:'La cybersécurité et ses types',s:'La cybersécurité consiste à protéger les personnes, appareils, réseaux et données contre les attaques numériques. Voici ses principaux types, les menaces de chacun et la façon de s’en défendre.',ov:'De quoi s’agit-il',th:'Menaces courantes',pr:'Comment se protéger',ex:'Exemple du quotidien',ln:'Voir les formations associées'},
ar:{nav:'الأمن السيبراني',h:'الأمن السيبراني وأنواعه',s:'الأمن السيبراني هو حماية الأشخاص والأجهزة والشبكات والبيانات من الهجمات الرقمية. فيما يلي أنواعه الرئيسية والتهديدات التي يواجهها كل نوع وطرق الدفاع عنه.',ov:'ما هو',th:'التهديدات الشائعة',pr:'كيف تتم الحماية',ex:'مثال من الحياة اليومية',ln:'اطلع على الدورات ذات الصلة',note:'تفاصيل هذا القسم متوفرة بالإنجليزية والفرنسية.'},
es:{nav:'Ciberseguridad',h:'La ciberseguridad y sus tipos',s:'La ciberseguridad es la práctica de proteger personas, dispositivos, redes y datos frente a ataques digitales. Estos son sus principales tipos, las amenazas de cada uno y cómo se defienden.',ov:'Qué es',th:'Amenazas comunes',pr:'Cómo se protege',ex:'Ejemplo cotidiano',ln:'Ver cursos relacionados',note:'Los detalles de esta sección están disponibles en inglés y francés.'},
pt:{nav:'Cibersegurança',h:'A cibersegurança e os seus tipos',s:'A cibersegurança é a prática de proteger pessoas, dispositivos, redes e dados contra ataques digitais. Eis os principais tipos, as ameaças de cada um e como se defendem.',ov:'O que é',th:'Ameaças comuns',pr:'Como se protege',ex:'Exemplo do dia a dia',ln:'Ver cursos relacionados',note:'Os detalhes desta secção estão disponíveis em inglês e francês.'}};
var TY={en:{intro:[
{t:'Goals of cybersecurity (the CIA triad)',items:['Confidentiality: only authorized people can see the information','Integrity: information stays accurate and unaltered','Availability: systems and data are there when needed']},
{t:'Common cyber threats',items:['Malware: harmful software such as viruses, worms, trojans and spyware','Ransomware: locks or encrypts data and demands payment','Phishing and social engineering: tricking people into giving access or information','Denial-of-service (DDoS): overwhelming a service so it stops working','Password attacks: guessing, stealing or reusing credentials','Man-in-the-middle: secretly intercepting communication','Web attacks such as SQL injection and XSS','Insider threats: misuse or mistakes by people with access','Zero-day exploits: attacks on flaws not yet fixed','Supply-chain attacks: compromising a trusted supplier or software update']},
{t:'How defense works (the five functions)',items:['Identify: know your assets and risks','Protect: put safeguards in place','Detect: spot attacks quickly','Respond: contain and handle incidents','Recover: restore systems and learn lessons']}],
types:[
{t:'Network Security',ov:'Protects the networks that connect computers, phones and servers, and the data that travels across them.',th:['Unauthorized access','Denial-of-service (DDoS) attacks','Man-in-the-middle attacks and eavesdropping','Rogue Wi-Fi access points'],pr:['Firewalls and network segmentation','VPNs and encryption in transit (TLS)','Intrusion detection and prevention (IDS/IPS)','Secure Wi-Fi (WPA3) and strong router settings'],ex:'A school separating its student Wi-Fi from the administration network.'},
{t:'Information (Data) Security',ov:'Protects data wherever it is stored or sent, keeping it private, accurate and available. It includes privacy and data protection.',th:['Data breaches and leaks','Theft or loss of devices and drives','Ransomware that locks or destroys data','Unauthorized changes to records'],pr:['Encryption at rest and in transit','Access control and data classification','Regular, tested backups (the 3-2-1 rule)','Data protection and retention policies'],ex:'An organization encrypting student or customer records and backing them up every week.'},
{t:'Application Security',ov:'Builds and tests software, websites and apps so they cannot be easily abused.',th:['SQL injection and cross-site scripting (XSS)','Broken authentication and weak sessions','Insecure APIs and misconfiguration','Vulnerable third-party libraries'],pr:['Secure coding practices and code review','Testing: SAST, DAST and penetration tests','Input validation and the OWASP Top 10 checklist','Regular updates and dependency scanning'],ex:'A developer validating every field on a registration form.'},
{t:'Cloud Security',ov:'Protects data, apps and services hosted on cloud platforms such as AWS, Azure and Google Cloud.',th:['Misconfigured storage open to the public','Stolen cloud credentials and keys','Insecure interfaces and APIs','Account takeover and shared-responsibility gaps'],pr:['Strong identity controls and MFA','Encryption and key management','Cloud security posture monitoring','Least-privilege permissions and logging'],ex:'Making sure an online folder of documents is private by default.'},
{t:'Endpoint Security',ov:'Secures the devices people use every day: laptops, desktops and servers.',th:['Malware, viruses and ransomware','Infected USB drives','Unpatched operating systems','Fileless, in-memory attacks'],pr:['Antivirus and EDR (endpoint detection and response)','Automatic updates and patching','Disk encryption and device hardening','USB and application controls'],ex:'Keeping every office laptop updated, encrypted and protected by security software.'},
{t:'Mobile Security',ov:'Protects smartphones and tablets, and the apps and data on them.',th:['Malicious or fake apps','Phishing by SMS and WhatsApp (smishing)','SIM-swap fraud','Lost or stolen phones'],pr:['Install apps only from official stores','Screen lock, biometrics and device encryption','Mobile device management (MDM) for organizations','Remote locate and wipe'],ex:'Protecting a mobile money account with a PIN, an app lock and two-step verification.'},
{t:'Identity and Access Management (IAM)',ov:'Makes sure the right people have the right access to the right resources, and nobody else.',th:['Weak, reused or stolen passwords','Credential stuffing and brute force','Excessive privileges','Account takeover'],pr:['Multi-factor authentication (MFA)','Single sign-on and password managers','Least privilege and role-based access','Regular access reviews and removing access when people leave'],ex:'Removing a former employee’s access to every system on their last day.'},
{t:'Operational Security (OPSEC)',ov:'The processes and decisions for handling and protecting sensitive information day to day.',th:['Oversharing on social media','Poor handling of sensitive documents','Insider mistakes or misuse','Unsafe sharing of files and credentials'],pr:['Identify which information is critical','Define who may see and share it','Clear procedures and approvals','Regular monitoring and review'],ex:'A team agreeing never to share passwords in chat or post internal screenshots online.'},
{t:'Internet of Things (IoT) Security',ov:'Secures connected devices such as cameras, smart TVs, sensors and smart meters.',th:['Default or weak passwords','Outdated firmware','Devices turned into botnets','Unencrypted communication'],pr:['Change default passwords immediately','Update firmware regularly','Place devices on a separate network','Disable features and ports you do not use'],ex:'Putting security cameras on their own network with a strong, unique password.'},
{t:'Critical Infrastructure Security',ov:'Protects the systems society depends on: power, water, telecoms, banking, transport and healthcare, including industrial control systems (ICS/SCADA).',th:['Targeted attacks and ransomware on essential services','Attacks on industrial control systems','Supply-chain compromises','Insider threats'],pr:['Isolation between IT and operational systems','Continuous monitoring and incident response','Strict access and change management','Regulation, standards and regular drills'],ex:'A power company monitoring its control network around the clock.'},
{t:'Disaster Recovery and Business Continuity',ov:'Plans and tools that let an organization keep working, or restart quickly, after an attack, failure or disaster.',th:['Ransomware outages','Hardware failure, fire or flood','Power or internet loss','Human error'],pr:['Offline and offsite backups with tested restores','Documented recovery plans (RTO and RPO)','Redundant systems and power','Regular drills and updates'],ex:'A hospital restoring its patient records system from backup within hours.'},
{t:'Security Awareness (End-User Security)',ov:'Teaches people to spot and avoid threats, because people are often the first target.',th:['Phishing and spear phishing','Social engineering and impersonation','Unsafe passwords and habits','Accidental data exposure'],pr:['Regular training and awareness sessions','Phishing simulations','Clear ways to report problems','A culture where people ask before they click'],ex:'An employee reporting a suspicious email instead of clicking the link.'}
]},
fr:{intro:[
{t:'Les objectifs de la cybersécurité (triade CIA)',items:['Confidentialité : seules les personnes autorisées voient l’information','Intégrité : l’information reste exacte et non modifiée','Disponibilité : les systèmes et données sont accessibles quand on en a besoin']},
{t:'Principales cybermenaces',items:['Logiciels malveillants : virus, vers, chevaux de Troie et logiciels espions','Rançongiciels : verrouillent ou chiffrent les données et exigent un paiement','Hameçonnage et ingénierie sociale : tromper les gens pour obtenir un accès ou des informations','Déni de service (DDoS) : saturer un service pour l’arrêter','Attaques de mots de passe : deviner, voler ou réutiliser des identifiants','Homme du milieu : intercepter secrètement les communications','Attaques web comme l’injection SQL et XSS','Menaces internes : abus ou erreurs de personnes ayant des accès','Exploits zero-day : attaques sur des failles non encore corrigées','Attaques de la chaîne d’approvisionnement : compromettre un fournisseur ou une mise à jour de confiance']},
{t:'Comment fonctionne la défense (les cinq fonctions)',items:['Identifier : connaître vos actifs et vos risques','Protéger : mettre en place des protections','Détecter : repérer rapidement les attaques','Répondre : contenir et gérer les incidents','Récupérer : rétablir les systèmes et tirer les leçons']}],
types:[
{t:'Sécurité des réseaux',ov:'Protège les réseaux qui relient ordinateurs, téléphones et serveurs, ainsi que les données qui y circulent.',th:['Accès non autorisé','Attaques par déni de service (DDoS)','Attaques de l’homme du milieu et écoute clandestine','Points d’accès Wi-Fi frauduleux'],pr:['Pare-feu et segmentation du réseau','VPN et chiffrement en transit (TLS)','Détection et prévention d’intrusion (IDS/IPS)','Wi-Fi sécurisé (WPA3) et bons réglages du routeur'],ex:'Une école qui sépare le Wi-Fi des élèves du réseau de l’administration.'},
{t:'Sécurité de l’information (des données)',ov:'Protège les données où qu’elles soient stockées ou envoyées, pour qu’elles restent confidentielles, exactes et disponibles. Inclut la vie privée et la protection des données.',th:['Violations et fuites de données','Vol ou perte d’appareils et de disques','Rançongiciels qui verrouillent ou détruisent les données','Modifications non autorisées des dossiers'],pr:['Chiffrement au repos et en transit','Contrôle d’accès et classification des données','Sauvegardes régulières et testées (règle 3-2-1)','Politiques de protection et de conservation des données'],ex:'Une organisation qui chiffre les dossiers de ses élèves ou clients et les sauvegarde chaque semaine.'},
{t:'Sécurité des applications',ov:'Conçoit et teste les logiciels, sites web et applications pour qu’ils ne puissent pas être détournés facilement.',th:['Injection SQL et failles XSS','Authentification faible et sessions fragiles','API non sécurisées et mauvaises configurations','Bibliothèques tierces vulnérables'],pr:['Pratiques de codage sécurisé et revue de code','Tests : SAST, DAST et tests d’intrusion','Validation des entrées et liste OWASP Top 10','Mises à jour régulières et analyse des dépendances'],ex:'Un développeur qui valide chaque champ d’un formulaire d’inscription.'},
{t:'Sécurité du cloud',ov:'Protège les données, applications et services hébergés sur des plateformes cloud comme AWS, Azure et Google Cloud.',th:['Stockage mal configuré et ouvert au public','Identifiants et clés cloud volés','Interfaces et API non sécurisées','Prise de contrôle de comptes et lacunes de responsabilité partagée'],pr:['Contrôles d’identité forts et MFA','Chiffrement et gestion des clés','Surveillance de la posture de sécurité du cloud','Droits au moindre privilège et journalisation'],ex:'S’assurer qu’un dossier de documents en ligne est privé par défaut.'},
{t:'Sécurité des terminaux',ov:'Sécurise les appareils utilisés au quotidien : ordinateurs portables, de bureau et serveurs.',th:['Logiciels malveillants, virus et rançongiciels','Clés USB infectées','Systèmes d’exploitation non mis à jour','Attaques sans fichier, en mémoire'],pr:['Antivirus et EDR (détection et réponse sur les terminaux)','Mises à jour et correctifs automatiques','Chiffrement des disques et durcissement des appareils','Contrôle des clés USB et des applications'],ex:'Garder tous les ordinateurs d’un bureau à jour, chiffrés et protégés.'},
{t:'Sécurité mobile',ov:'Protège les smartphones, les tablettes ainsi que leurs applications et données.',th:['Applications malveillantes ou factices','Hameçonnage par SMS et WhatsApp (smishing)','Fraude par échange de SIM','Téléphones perdus ou volés'],pr:['Installer des applications uniquement depuis les boutiques officielles','Verrouillage d’écran, biométrie et chiffrement','Gestion des appareils mobiles (MDM) pour les organisations','Localisation et effacement à distance'],ex:'Protéger un compte de mobile money avec un code PIN, un verrou d’application et la vérification en deux étapes.'},
{t:'Gestion des identités et des accès (IAM)',ov:'Garantit que les bonnes personnes ont le bon accès aux bonnes ressources, et personne d’autre.',th:['Mots de passe faibles, réutilisés ou volés','Bourrage d’identifiants et force brute','Privilèges excessifs','Prise de contrôle de comptes'],pr:['Authentification multifacteur (MFA)','Authentification unique et gestionnaires de mots de passe','Moindre privilège et accès par rôle','Revues d’accès régulières et retrait des accès au départ'],ex:'Supprimer l’accès d’un ancien employé à tous les systèmes dès son dernier jour.'},
{t:'Sécurité opérationnelle (OPSEC)',ov:'Les processus et décisions qui encadrent la manipulation et la protection des informations sensibles au quotidien.',th:['Partage excessif sur les réseaux sociaux','Mauvaise gestion des documents sensibles','Erreurs ou abus d’initiés','Partage dangereux de fichiers et d’identifiants'],pr:['Identifier les informations critiques','Définir qui peut les voir et les partager','Procédures et validations claires','Surveillance et révision régulières'],ex:'Une équipe qui s’engage à ne jamais partager de mots de passe par message ni publier de captures d’écran internes.'},
{t:'Sécurité de l’Internet des objets (IoT)',ov:'Sécurise les appareils connectés comme les caméras, téléviseurs intelligents, capteurs et compteurs intelligents.',th:['Mots de passe par défaut ou faibles','Micrologiciels obsolètes','Appareils transformés en botnets','Communications non chiffrées'],pr:['Changer immédiatement les mots de passe par défaut','Mettre à jour régulièrement les micrologiciels','Placer les appareils sur un réseau séparé','Désactiver les fonctions et ports inutiles'],ex:'Mettre les caméras de surveillance sur leur propre réseau avec un mot de passe fort et unique.'},
{t:'Sécurité des infrastructures critiques',ov:'Protège les systèmes dont la société dépend : énergie, eau, télécoms, banques, transports et santé, y compris les systèmes de contrôle industriels (ICS/SCADA).',th:['Attaques ciblées et rançongiciels sur les services essentiels','Attaques sur les systèmes de contrôle industriels','Compromissions de la chaîne d’approvisionnement','Menaces internes'],pr:['Isolation entre systèmes informatiques et systèmes opérationnels','Surveillance continue et réponse aux incidents','Gestion stricte des accès et des changements','Réglementation, normes et exercices réguliers'],ex:'Une compagnie d’électricité qui surveille son réseau de contrôle 24 h/24.'},
{t:'Reprise après sinistre et continuité d’activité',ov:'Plans et outils qui permettent à une organisation de continuer à fonctionner, ou de redémarrer vite, après une attaque, une panne ou une catastrophe.',th:['Arrêts causés par un rançongiciel','Panne matérielle, incendie ou inondation','Coupure d’électricité ou d’Internet','Erreur humaine'],pr:['Sauvegardes hors ligne et hors site, restaurations testées','Plans de reprise documentés (RTO et RPO)','Systèmes et alimentation redondants','Exercices et mises à jour réguliers'],ex:'Un hôpital qui restaure son système de dossiers patients depuis une sauvegarde en quelques heures.'},
{t:'Sensibilisation à la sécurité (utilisateurs)',ov:'Apprend aux personnes à repérer et éviter les menaces, car elles sont souvent la première cible.',th:['Hameçonnage et harponnage','Ingénierie sociale et usurpation d’identité','Mots de passe et habitudes à risque','Exposition accidentelle de données'],pr:['Formations et sessions de sensibilisation régulières','Simulations d’hameçonnage','Canaux clairs pour signaler les problèmes','Une culture où l’on demande avant de cliquer'],ex:'Un employé qui signale un e-mail suspect au lieu de cliquer sur le lien.'}
]}};
function addSec(b,h,x){var s=el('div');s.appendChild(el('h4',0,h));if(Array.isArray(x)){var u=el('ul');x.forEach(function(y){u.appendChild(el('li',0,y))});s.appendChild(u)}else s.appendChild(el('p',0,x));b.appendChild(s)}
function renderTypes(){
  var l=LT[lang]||LT.en,d=TY[lang],c=d||TY.en;
  document.getElementById('tn').textContent=l.nav;
  document.getElementById('th2').textContent=l.h;
  document.getElementById('ts').textContent=l.s+(d?'':' '+(l.note||''));
  var ti=document.getElementById('ti'),tl=document.getElementById('tl');ti.textContent='';tl.textContent='';
  c.intro.forEach(function(x){var k=el('div','card');k.appendChild(el('h3',0,x.t));var u=el('ul');u.style.cssText='margin:8px 0 0;padding-inline-start:20px;color:var(--muted)';x.items.forEach(function(y){u.appendChild(el('li',0,y))});k.appendChild(u);ti.appendChild(k)});
  c.types.forEach(function(t,i){
    var dt=el('details','card course'),sm=el('summary');
    sm.appendChild(el('div','num',i+1));sm.appendChild(el('b',0,t.t));dt.appendChild(sm);
    var b=el('div','body');
    addSec(b,l.ov,t.ov);addSec(b,l.th,t.th);addSec(b,l.pr,t.pr);addSec(b,l.ex,t.ex);
    var a=el('a','btn alt',l.ln);a.href='#courses';a.style.justifySelf='start';b.appendChild(a);
    dt.appendChild(b);tl.appendChild(dt);
  });
}
var P={en:{home:'Home',dash:'Dashboard',learn:'My Learning',courses:'Courses',certs:'Certificates',profile:'Profile',signin:'Sign in',welcome:'Welcome, {n}!',signTitle:'Sign in to your learning portal',signSub:'Create a learner profile to enroll in courses, track your progress and earn certificates. Your progress is saved on this device.',name:'Full name',user:'Username',start:'Start learning',bad:'Enter your full name and a username (3–30 letters, numbers, _ or .).',enrolledN:'Enrolled courses',prog:'In progress',done:'Completed',overall:'Overall progress',cont:'Continue learning',nextL:'Next lesson',none:'You have not enrolled in any course yet.',browse:'Browse courses',rec:'Recommended for you',enroll:'Enroll',continue:'Continue',getc:'View certificate',noCert:'You have no certificates yet. Complete every lesson of a course to earn one.',view:'View',dl:'Download',print:'Print',close:'Close',certTitle:'Certificate of Completion',certThis:'This certifies that',certDone:'has successfully completed the course',certDate:'Date',certId:'Certificate ID',certFounder:'Founder, Kossomi CyberGuard',joined:'Member since',save:'Save',saved:'Saved',reset:'Reset my progress',logout:'Log out',sure:'Click again to confirm',note:'Demo portal: your profile and progress are stored only in this browser on this device, and certificates cannot be verified online yet.',pct:'complete',unenroll:'Unenroll',lessonsDone:'lessons completed',login:'Log in',signup:'Sign up',loginTitle:'Welcome back',loginSub:'Log in to continue learning and see your certificates.',signupTitle:'Create your account',signupSub:'Join KCG to enroll in courses, track your progress and earn certificates.',idl:'Username or email',email:'Email address',pass:'Password',pass2:'Confirm password',passHint:'At least 8 characters, with letters, numbers and a special character (e.g. @ # $ !).',mUser:'Username: 3–30 letters, numbers, _ or . only.',mName:'Please enter your full name.',mEmail:'Please enter a valid email address.',mPw:'Password must be at least 8 characters with letters, numbers and a special character.',mMatch:'Passwords do not match.',mExists:'This username or email is already registered on this device.',mBad:'Incorrect username/email or password.',mSec:'Your browser cannot protect passwords on this page. Please use a modern browser over HTTPS.',noAcc:'No account yet?',haveAcc:'Already have an account?',delAcc:'Delete my account',authNote:'Demo accounts are stored only in this browser on this device, so you cannot log in from another device yet.',wait:'Please wait…'},
fr:{home:'Accueil',dash:'Tableau de bord',learn:'Mon apprentissage',courses:'Formations',certs:'Certificats',profile:'Profil',signin:'Connexion',welcome:'Bienvenue, {n} !',signTitle:'Connectez-vous à votre espace d’apprentissage',signSub:'Créez un profil d’apprenant pour vous inscrire aux formations, suivre votre progression et obtenir des certificats. Votre progression est enregistrée sur cet appareil.',name:'Nom complet',user:'Nom d’utilisateur',start:'Commencer à apprendre',bad:'Saisissez votre nom complet et un nom d’utilisateur (3 à 30 lettres, chiffres, _ ou .).',enrolledN:'Formations suivies',prog:'En cours',done:'Terminées',overall:'Progression globale',cont:'Continuer à apprendre',nextL:'Prochaine leçon',none:'Vous n’êtes inscrit à aucune formation pour le moment.',browse:'Voir les formations',rec:'Recommandé pour vous',enroll:'S’inscrire',continue:'Continuer',getc:'Voir le certificat',noCert:'Vous n’avez pas encore de certificat. Terminez toutes les leçons d’une formation pour en obtenir un.',view:'Voir',dl:'Télécharger',print:'Imprimer',close:'Fermer',certTitle:'Certificat de réussite',certThis:'Il est certifié que',certDone:'a terminé avec succès la formation',certDate:'Date',certId:'N° de certificat',certFounder:'Fondateur, Kossomi CyberGuard',joined:'Membre depuis',save:'Enregistrer',saved:'Enregistré',reset:'Réinitialiser ma progression',logout:'Se déconnecter',sure:'Cliquez à nouveau pour confirmer',note:'Espace de démonstration : votre profil et votre progression sont stockés uniquement dans ce navigateur, sur cet appareil, et les certificats ne sont pas encore vérifiables en ligne.',pct:'terminé',unenroll:'Se désinscrire',lessonsDone:'leçons terminées',login:'Se connecter',signup:'Créer un compte',loginTitle:'Bon retour',loginSub:'Connectez-vous pour continuer à apprendre et voir vos certificats.',signupTitle:'Créez votre compte',signupSub:'Rejoignez KCG pour vous inscrire aux formations, suivre votre progression et obtenir des certificats.',idl:'Nom d’utilisateur ou e-mail',email:'Adresse e-mail',pass:'Mot de passe',pass2:'Confirmer le mot de passe',passHint:'Au moins 8 caractères, avec des lettres, des chiffres et un caractère spécial (ex. @ # $ !).',mUser:'Nom d’utilisateur : 3 à 30 lettres, chiffres, _ ou . uniquement.',mName:'Veuillez saisir votre nom complet.',mEmail:'Veuillez saisir une adresse e-mail valide.',mPw:'Le mot de passe doit contenir au moins 8 caractères avec des lettres, des chiffres et un caractère spécial.',mMatch:'Les mots de passe ne correspondent pas.',mExists:'Ce nom d’utilisateur ou cet e-mail est déjà enregistré sur cet appareil.',mBad:'Nom d’utilisateur/e-mail ou mot de passe incorrect.',mSec:'Votre navigateur ne peut pas protéger les mots de passe sur cette page. Utilisez un navigateur récent en HTTPS.',noAcc:'Pas encore de compte ?',haveAcc:'Vous avez déjà un compte ?',delAcc:'Supprimer mon compte',authNote:'Comptes de démonstration : stockés uniquement dans ce navigateur, sur cet appareil ; vous ne pouvez donc pas encore vous connecter depuis un autre appareil.',wait:'Veuillez patienter…'}};
function pl(){return P[lang]||P.en}
var DB=(function(){try{return JSON.parse(localStorage.getItem('kcgAccounts'))||{users:{},cur:''}}catch(e){return {users:{},cur:''}}})();
DB.users=DB.users||{};
var S=(DB.cur&&DB.users[DB.cur])?DB.users[DB.cur]:{e:{}};
S.e=S.e||{};
function save(){try{if(S.u)DB.users[DB.cur]=S;localStorage.setItem('kcgAccounts',JSON.stringify(DB))}catch(e){}}
var PV=['dashboard','my-learning','portal-courses','certificates','profile','login','signup'],curView='',openC=-1;
function cs(){return C[lang]||C.en}
function pr(i){var e=S.e[i];return e?Math.round(100*e.d.length/cs()[i].mods.length):0}
function bar(p){var b=el('div','bar'),f=el('i');f.style.width=p+'%';b.appendChild(f);return b}
function go(h){location.hash=h}
function mkId(){return 'KCG-'+new Date().getFullYear()+'-'+Math.random().toString(36).slice(2,8).toUpperCase()}
function fmtDate(t){return new Date(t).toLocaleDateString(lang==='en'?'en-GB':lang,{day:'numeric',month:'long',year:'numeric'})}
function route(){
  var h=location.hash.slice(1),inP=PV.indexOf(h)>-1,pt=document.getElementById('portal'),was=!pt.hidden;
  pt.hidden=!inP;document.getElementById('top').hidden=inP;curView=inP?h:'';
  document.getElementById('cm').hidden=true;
  renderPortal();
  if(inP)window.scrollTo(0,0);
  else if(was){var t=h&&document.getElementById(h);if(t)t.scrollIntoView();else window.scrollTo(0,0)}
}
function renderPortal(){
  var p=pl();
  document.getElementById('pn').textContent=S.u?p.dash:p.login;
  document.getElementById('pn').setAttribute('href',S.u?'#dashboard':'#login');
  var pu=document.getElementById('pu');pu.textContent=p.signup;pu.hidden=!!S.u;
  if(!curView)return;
  var tabs=document.getElementById('pt'),v=document.getElementById('pv');tabs.textContent='';v.textContent='';
  (S.u?[['top',p.home],['dashboard',p.dash],['my-learning',p.learn],['portal-courses',p.courses],['certificates',p.certs],['profile',p.profile]]:[['top',p.home],['login',p.login],['signup',p.signup]]).forEach(function(t){var a=el('a',t[0]===curView?'on':0,t[1]);a.href='#'+t[0];tabs.appendChild(a)});
  if(!S.u){if(curView!=='login'&&curView!=='signup'){go('login');return}return authView(v,curView)}
  if(curView==='login'||curView==='signup'){go('dashboard');return}
  ({'dashboard':vDash,'my-learning':vLearn,'portal-courses':vCourses,'certificates':vCerts,'profile':vProfile})[curView](v);
}
function signIn(v){
  var p=pl(),k=el('div','card');k.style.cssText='max-width:520px;margin:0 auto;display:grid;gap:10px';
  k.appendChild(el('h2',0,p.signTitle));var sp2=el('p',0,p.signSub);sp2.style.color='var(--muted)';k.appendChild(sp2);
  var i1=document.createElement('input');i1.maxLength=60;i1.autocomplete='name';
  var i2=document.createElement('input');i2.maxLength=30;i2.autocomplete='username';
  var m=el('div');m.style.cssText='min-height:1.4em;color:#ff6b7a;font-weight:600';
  var b=el('button','btn',p.start);
  b.onclick=function(){var n=i1.value.trim(),u=i2.value.trim();if(n.length<2||!/^[A-Za-z0-9_.]{3,30}$/.test(u)){m.textContent=p.bad;return}S.u={n:n,un:u,j:Date.now()};S.e=S.e||{};save();if(curView==='dashboard')renderPortal();else go('dashboard')};
  [el('label',0,p.name),i1,el('label',0,p.user),i2,m,b].forEach(function(x){k.appendChild(x)});v.appendChild(k);
}
function sha(s){return crypto.subtle.digest('SHA-256',new TextEncoder().encode(s)).then(function(h){return Array.prototype.map.call(new Uint8Array(h),function(x){return ('0'+x.toString(16)).slice(-2)}).join('')})}
function rnd(){var a=new Uint8Array(16);crypto.getRandomValues(a);return Array.prototype.map.call(a,function(x){return ('0'+x.toString(16)).slice(-2)}).join('')}
function authView(v,mode){
  var p=pl(),su=mode==='signup',k=el('div','card');
  k.style.cssText='max-width:520px;margin:0 auto;display:grid;gap:10px';
  k.appendChild(el('h2',0,su?p.signupTitle:p.loginTitle));
  var s=el('p',0,su?p.signupSub:p.loginSub);s.style.color='var(--muted)';k.appendChild(s);
  function inp(type,ac,max){var i=document.createElement('input');i.type=type;i.autocomplete=ac;i.maxLength=max||120;return i}
  function add(label,i){k.appendChild(el('label',0,label));k.appendChild(i)}
  var nm,un,em,id,pw,pw2;
  if(su){nm=inp('text','name',60);un=inp('text','username',30);em=inp('email','email');pw=inp('password','new-password',64);pw2=inp('password','new-password',64);
    add(p.name,nm);add(p.user,un);add(p.email,em);add(p.pass,pw);
    var hn=el('div',0,p.passHint);hn.style.cssText='color:var(--muted);font-size:.85rem;margin-top:-4px';k.appendChild(hn);add(p.pass2,pw2)}
  else{id=inp('text','username',120);pw=inp('password','current-password',64);add(p.idl,id);add(p.pass,pw)}
  var m=el('div');m.style.cssText='min-height:1.4em;color:#ff6b7a;font-weight:600';k.appendChild(m);
  var b=el('button','btn',su?p.signup:p.login);k.appendChild(b);
  var alt=el('p');alt.style.cssText='text-align:center;color:var(--muted);margin:6px 0 0';
  alt.appendChild(document.createTextNode((su?p.haveAcc:p.noAcc)+' '));
  var a=el('a',0,su?p.login:p.signup);a.href=su?'#login':'#signup';a.style.color='var(--cyan)';alt.appendChild(a);k.appendChild(alt);
  var nt=el('p',0,p.authNote);nt.style.cssText='color:var(--muted);font-size:.8rem;margin:8px 0 0';k.appendChild(nt);
  k.addEventListener('keydown',function(e){if(e.key==='Enter'){e.preventDefault();b.click()}});
  function err(t){m.style.color='#ff6b7a';m.textContent=t;b.disabled=false}
  function busy(){b.disabled=true;m.style.color='var(--muted)';m.textContent=p.wait}
  b.onclick=function(){
    m.textContent='';
    if(!(window.crypto&&crypto.subtle))return err(p.mSec);
    var pwv=pw.value;
    if(su){
      var n=nm.value.trim(),u=un.value.trim(),e=em.value.trim().toLowerCase();
      if(n.length<2)return err(p.mName);
      if(!/^[A-Za-z0-9_.]{3,30}$/.test(u))return err(p.mUser);
      if(!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(e))return err(p.mEmail);
      if(pwv.length<8||!/[A-Za-z]/.test(pwv)||!/[0-9]/.test(pwv)||!/[^A-Za-z0-9]/.test(pwv))return err(p.mPw);
      if(pwv!==pw2.value)return err(p.mMatch);
      var key=u.toLowerCase();
      if(DB.users[key]||Object.keys(DB.users).some(function(x){return DB.users[x].u.em===e}))return err(p.mExists);
      busy();var salt=rnd();
      sha(salt+':'+pwv).then(function(h){DB.users[key]={u:{n:n,un:u,em:e,j:Date.now()},e:{},salt:salt,hash:h};DB.cur=key;S=DB.users[key];save();go('dashboard')}).catch(function(){err(p.mSec)});
    }else{
      var q=id.value.trim().toLowerCase(),k2=DB.users[q]?q:Object.keys(DB.users).filter(function(x){return DB.users[x].u.em===q})[0],rec=k2&&DB.users[k2];
      busy();
      sha((rec?rec.salt:'x')+':'+pwv).then(function(h){
        if(rec&&h===rec.hash){DB.cur=k2;S=rec;S.e=S.e||{};save();go('dashboard')}else err(p.mBad)
      }).catch(function(){err(p.mSec)});
    }
  };
  v.appendChild(k);
}
function enrollBtn(i){
  var p=pl(),e=S.e[i],b=el('button','btn',e?p.continue:p.enroll);
  b.onclick=function(){if(!e){S.e[i]={d:[]};S.last=i;save()}openC=i;go('my-learning');if(curView==='my-learning')renderPortal()};
  return b;
}
function courseCard(i){
  var c=cs()[i],k=el('div','card'),m=el('div','meta');
  k.appendChild(el('h3',0,c.t));m.style.margin='8px 0';[c.lvl,c.dur].forEach(function(x){m.appendChild(el('span',0,x))});k.appendChild(m);
  var q=el('p',0,c.ov);q.style.cssText='color:var(--muted);margin-bottom:12px';k.appendChild(q);k.appendChild(enrollBtn(i));return k;
}
function vDash(v){
  var p=pl(),ids=Object.keys(S.e),dn=ids.filter(function(i){return S.e[i].c}).length,tot=0,dd=0;
  ids.forEach(function(i){tot+=cs()[i].mods.length;dd+=S.e[i].d.length});
  var pc=tot?Math.round(100*dd/tot):0;
  v.appendChild(el('h2',0,p.welcome.replace('{n}',S.u.n.split(' ')[0])));
  var g=el('div','grid');g.style.margin='20px 0';
  [[ids.length,p.enrolledN],[ids.length-dn,p.prog],[dn,p.done]].forEach(function(s){var k=el('div','card stat');k.appendChild(el('b',0,s[0]));k.appendChild(el('span',0,s[1]));g.appendChild(k)});
  v.appendChild(g);
  var ov=el('div','card');ov.appendChild(el('h3',0,p.overall+': '+pc+'%'));ov.appendChild(bar(pc));v.appendChild(ov);
  var cur=(S.last in S.e&&!S.e[S.last].c)?S.last:ids.filter(function(i){return !S.e[i].c})[0];
  var h=el('h3',0,p.cont);h.style.margin='26px 0 10px';v.appendChild(h);
  if(cur===undefined){var q0=el('p',0,p.none);q0.style.color='var(--muted)';v.appendChild(q0);var bb=el('button','btn',p.browse);bb.onclick=function(){go('portal-courses')};v.appendChild(bb)}
  else{var c=cs()[cur],k=el('div','card');k.appendChild(el('h3',0,c.t));k.appendChild(bar(pr(cur)));
    var nx=c.mods.filter(function(m,j){return S.e[cur].d.indexOf(j)<0})[0];
    var q=el('p',0,p.nextL+': '+(nx||''));q.style.cssText='color:var(--muted);margin:10px 0';k.appendChild(q);
    k.appendChild(enrollBtn(+cur));v.appendChild(k)}
  var rec=cs().map(function(c,i){return i}).filter(function(i){return !S.e[i]}).slice(0,3);
  if(rec.length){var h2=el('h3',0,p.rec);h2.style.margin='30px 0 10px';v.appendChild(h2);var g2=el('div','grid');rec.forEach(function(i){g2.appendChild(courseCard(i))});v.appendChild(g2)}
}
function vLearn(v){
  var p=pl(),ids=Object.keys(S.e);
  v.appendChild(el('h2',0,p.learn));
  if(!ids.length){var q=el('p',0,p.none);q.style.cssText='color:var(--muted);margin:16px 0';v.appendChild(q);var bb=el('button','btn',p.browse);bb.onclick=function(){go('portal-courses')};v.appendChild(bb);return}
  var lst=el('div','courses');lst.style.marginTop='18px';
  ids.forEach(function(i){
    i=+i;var c=cs()[i],e=S.e[i],d=el('details','card course');if(openC===i)d.open=true;
    var sm=el('summary'),w=el('span');w.appendChild(el('b',0,c.t));w.appendChild(el('small',0,pr(i)+'% '+p.pct+' · '+e.d.length+'/'+c.mods.length+' '+p.lessonsDone));sm.appendChild(w);d.appendChild(sm);
    var b=el('div','body');b.appendChild(bar(pr(i)));
    c.mods.forEach(function(m,j){
      var lb=el('label','lesson'),cb=document.createElement('input');cb.type='checkbox';cb.checked=e.d.indexOf(j)>-1;
      cb.onchange=function(){var en=S.e[i],k=en.d.indexOf(j);if(cb.checked&&k<0)en.d.push(j);if(!cb.checked&&k>-1)en.d.splice(k,1);S.last=i;
        if(en.d.length===c.mods.length&&!en.c){en.c=Date.now();en.id=mkId()}
        openC=i;save();renderPortal()};
      lb.appendChild(cb);lb.appendChild(el('span',0,m));b.appendChild(lb);
    });
    var r=el('div','btns');r.style.cssText='justify-content:flex-start;margin-top:10px';
    if(e.c){var cbn=el('button','btn',p.getc);cbn.onclick=function(){showCert(i)};r.appendChild(cbn)}
    else{var un=el('button','btn alt',p.unenroll);un.onclick=function(){delete S.e[i];save();renderPortal()};r.appendChild(un)}
    b.appendChild(r);d.appendChild(b);lst.appendChild(d);
  });
  v.appendChild(lst);
}
function vCourses(v){var g=el('div','grid');v.appendChild(el('h2',0,pl().courses));g.style.marginTop='18px';cs().forEach(function(c,i){g.appendChild(courseCard(i))});v.appendChild(g)}
function vCerts(v){
  var p=pl(),ids=Object.keys(S.e).filter(function(i){return S.e[i].c});
  v.appendChild(el('h2',0,p.certs));
  if(!ids.length){var q=el('p',0,p.noCert);q.style.cssText='color:var(--muted);margin-top:16px';v.appendChild(q);return}
  var g=el('div','grid');g.style.marginTop='18px';
  ids.forEach(function(i){var e=S.e[i],k=el('div','card');k.appendChild(el('h3',0,cs()[i].t));
    var q=el('p',0,fmtDate(e.c)+' · '+p.certId+': '+e.id);q.style.cssText='color:var(--muted);margin:8px 0 12px;font-size:.9rem';k.appendChild(q);
    var b=el('button','btn',p.view);b.onclick=function(){showCert(+i)};k.appendChild(b);g.appendChild(k)});
  v.appendChild(g);
}
function vProfile(v){
  var p=pl();v.appendChild(el('h2',0,p.profile));profilePic(v);
  var k=el('div','card');k.style.cssText='max-width:520px;margin-top:18px;display:grid;gap:10px';
  var i1=document.createElement('input');i1.value=S.u.n;i1.maxLength=60;
  var sv=el('button','btn',p.save);sv.onclick=function(){var n=i1.value.trim();if(n.length<2)return;S.u.n=n;save();sv.textContent=p.saved;setTimeout(function(){sv.textContent=p.save},1500)};
  [el('label',0,p.name),i1,el('label',0,p.user),el('div',0,'@'+S.u.un),el('label',0,p.joined),el('div',0,fmtDate(S.u.j)),sv].forEach(function(x){k.appendChild(x)});
  v.appendChild(k);
  function two(txt,fn){var b=el('button','btn alt',txt),t=0;b.onclick=function(){if(t){fn();return}b.textContent=p.sure;t=setTimeout(function(){t=0;b.textContent=txt},3000)};return b}
  var r=el('div','btns');r.style.cssText='justify-content:flex-start;margin-top:16px';
  r.appendChild(two(p.reset,function(){S.e={};S.last=undefined;save();renderPortal()}));
  r.appendChild(two(p.logout,function(){DB.cur='';S={e:{}};save();go('login')}));
  r.appendChild(two(p.delAcc,function(){delete DB.users[DB.cur];DB.cur='';S={e:{}};save();go('login')}));
  v.appendChild(r);
  var n=el('p',0,p.note);n.style.cssText='color:var(--muted);font-size:.85rem;margin-top:18px';v.appendChild(n);
}
function drawCert(i){
  var p=pl(),e=S.e[i],c=cs()[i],cv=document.createElement('canvas');cv.width=1600;cv.height=1130;var x=cv.getContext('2d');
  x.fillStyle='#fff';x.fillRect(0,0,1600,1130);
  x.strokeStyle='#0b1f5c';x.lineWidth=18;x.strokeRect(30,30,1540,1070);
  x.strokeStyle='#fcd116';x.lineWidth=5;x.strokeRect(62,62,1476,1006);
  var im=document.querySelector('.hero img');
  if(im&&im.naturalWidth){var w=340,h=Math.round(w*im.naturalHeight/im.naturalWidth);try{x.drawImage(im,800-w/2,90,w,h)}catch(er){}}
  x.textAlign='center';
  function t(s,y,size,st,col,ax,al){var f=size;x.textAlign=al||'center';do{x.font=st+' '+f+'px Georgia,serif';f-=2}while(x.measureText(s).width>(ax||1300)&&f>18);x.fillStyle=col;x.fillText(s,arguments[7]||800,y)}
  t('KOSSOMI CYBERGUARD (KCG)',405,40,'bold','#0b1f5c');
  t(p.certTitle.toUpperCase(),485,60,'bold','#0b1f5c');
  t(p.certThis,550,32,'italic','#444');
  t(S.u.n,645,84,'italic','#0b1f5c');
  x.fillStyle='#fcd116';x.fillRect(420,668,760,4);
  t(p.certDone,730,32,'italic','#444');
  t(c.t,800,56,'bold','#0b1f5c');
  t(c.lvl+' · '+c.dur,852,28,'normal','#555');
  x.fillStyle='#0b1f5c';x.fillRect(150,960,380,2);x.fillRect(1070,960,380,2);
  t(fmtDate(e.c),945,28,'normal','#0b1f5c',380,'center',340);
  t(p.certDate,1000,22,'normal','#666',380,'center',340);
  t('Moussa Kosso Kamkala',945,28,'italic','#0b1f5c',380,'center',1260);
  t(p.certFounder,1000,20,'normal','#666',380,'center',1260);
  t(p.certId+': '+e.id,1035,24,'normal','#0b1f5c',600,'center',800);
  x.fillStyle='#002664';x.fillRect(640,1048,107,10);x.fillStyle='#fcd116';x.fillRect(747,1048,106,10);x.fillStyle='#ce1126';x.fillRect(853,1048,107,10);
  return cv;
}
function showCert(i){
  var p=pl(),m=document.getElementById('cm'),im=new Image();m.textContent='';
  im.src=drawCert(i).toDataURL('image/png');im.alt=p.certTitle;m.appendChild(im);
  var r=el('div','btns'),pb=el('button','btn',p.print),dl=el('a','btn alt',p.dl),cb=el('button','btn alt',p.close);
  pb.onclick=function(){window.print()};dl.href=im.src;dl.download='KCG-certificate-'+S.e[i].id+'.png';cb.onclick=function(){m.hidden=true};
  r.appendChild(pb);r.appendChild(dl);r.appendChild(cb);m.appendChild(r);m.hidden=false;
}
var CCS='AF:93 AL:355 DZ:213 AS:1684 AD:376 AO:244 AI:1264 AG:1268 AR:54 AM:374 AW:297 AU:61 AT:43 AZ:994 BS:1242 BH:973 BD:880 BB:1246 BY:375 BE:32 BZ:501 BJ:229 BM:1441 BT:975 BO:591 BA:387 BW:267 BR:55 IO:246 BN:673 BG:359 BF:226 BI:257 KH:855 CM:237 CA:1 CV:238 KY:1345 CF:236 TD:235 CL:56 CN:86 CO:57 KM:269 CG:242 CD:243 CK:682 CR:506 CI:225 HR:385 CU:53 CW:599 CY:357 CZ:420 DK:45 DJ:253 DM:1767 DO:1809 EC:593 EG:20 SV:503 GQ:240 ER:291 EE:372 SZ:268 ET:251 FK:500 FO:298 FJ:679 FI:358 FR:33 GF:594 PF:689 GA:241 GM:220 GE:995 DE:49 GH:233 GI:350 GR:30 GL:299 GD:1473 GP:590 GU:1671 GT:502 GG:44 GN:224 GW:245 GY:592 HT:509 HN:504 HK:852 HU:36 IS:354 IN:91 ID:62 IR:98 IQ:964 IE:353 IM:44 IL:972 IT:39 JM:1876 JP:81 JE:44 JO:962 KZ:7 KE:254 KI:686 KP:850 KR:82 XK:383 KW:965 KG:996 LA:856 LV:371 LB:961 LS:266 LR:231 LY:218 LI:423 LT:370 LU:352 MO:853 MG:261 MW:265 MY:60 MV:960 ML:223 MT:356 MH:692 MQ:596 MR:222 MU:230 YT:262 MX:52 FM:691 MD:373 MC:377 MN:976 ME:382 MS:1664 MA:212 MZ:258 MM:95 NA:264 NR:674 NP:977 NL:31 NC:687 NZ:64 NI:505 NE:227 NG:234 NU:683 NF:672 MK:389 MP:1670 NO:47 OM:968 PK:92 PW:680 PS:970 PA:507 PG:675 PY:595 PE:51 PH:63 PL:48 PT:351 PR:1787 QA:974 RE:262 RO:40 RU:7 RW:250 KN:1869 LC:1758 VC:1784 WS:685 SM:378 ST:239 SA:966 SN:221 RS:381 SC:248 SL:232 SG:65 SX:1721 SK:421 SI:386 SB:677 SO:252 ZA:27 SS:211 ES:34 LK:94 SD:249 SR:597 SE:46 CH:41 SY:963 TW:886 TJ:992 TZ:255 TH:66 TL:670 TG:228 TO:676 TT:1868 TN:216 TR:90 TM:993 TC:1649 TV:688 UG:256 UA:380 AE:971 GB:44 US:1 UY:598 UZ:998 VU:678 VA:379 VE:58 VN:84 VG:1284 VI:1340 EH:212 YE:967 ZM:260 ZW:263';
var CCM={},CCN={};CCS.split(' ').forEach(function(s){var a=s.split(':');CCM[a[0]]=a[1]});
function setCode(inp,code){inp.value=(code?'+'+code+' ':'')+inp.value.replace(/^\+\d+\s*/,'')}
function fillCodes(){
  var dn;try{dn=new Intl.DisplayNames([lang],{type:'region'})}catch(e){return}
  var lab={en:'Country code',fr:'Indicatif du pays',ar:'رمز الدولة',es:'Prefijo del país',pt:'Indicativo do país'}[lang]||'Country code';
  var rows=Object.keys(CCM).map(function(i){var nm;try{nm=dn.of(i)}catch(e){nm=i}
    return {i:i,n:nm||i,f:String.fromCodePoint.apply(null,i.split('').map(function(ch){return 0x1F1E6+ch.charCodeAt(0)-65}))}});
  rows.sort(function(a,b){return a.n.localeCompare(b.n,lang)});
  CCN={};rows.forEach(function(r){CCN[norm(r.n)]=r.i});
  ['rp1','rp2'].forEach(function(id){
    var inp=document.getElementById(id),sel=document.getElementById('cc-'+id);
    if(!sel){sel=document.createElement('select');sel.id='cc-'+id;sel.style.marginBottom='6px';inp.parentNode.insertBefore(sel,inp);inp.maxLength=24;
      sel.onchange=function(){setCode(inp,sel.value?CCM[sel.value]:'')}}
    var cur=sel.value;sel.setAttribute('aria-label',lab);sel.textContent='';
    var o0=document.createElement('option');o0.value='';o0.textContent=lab;sel.appendChild(o0);
    rows.forEach(function(r){var o=document.createElement('option');o.value=r.i;o.textContent=r.f+' '+r.n+' (+'+CCM[r.i]+')';sel.appendChild(o)});
    sel.value=cur;
  });
  if(!window._ccl){window._ccl=1;document.getElementById('rc').addEventListener('input',function(){
    var iso=CCN[norm(this.value.trim())];if(!iso)return;
    ['rp1','rp2'].forEach(function(id){var inp=document.getElementById(id),sel=document.getElementById('cc-'+id);
      if(/^(\+\d+\s*)?$/.test(inp.value)){sel.value=iso;setCode(inp,CCM[iso])}})})}
}
var DM={en:{dnav:'Free demo',ynav:'Payment',dh:'Free Demo',ds:'See how KCG teaches before you pay. Try a free mini-lesson right now, or book a free live demo session with our team.',qt:'Try a free mini-lesson',qs:'Digital Safety Basics: 5 quick questions',qstart:'Start the mini-lesson',qq:'Question',qof:'of',qnext:'Next',qfinish:'See my score',qscore:'Your score',qgood:'Excellent! You have strong digital safety habits.',qmid:'Good start! Our Digital Safety Awareness course will help you go further.',qlow:'Thanks for trying! Our beginner courses will teach you these essentials.',qagain:'Try again',qcta:'Book a free live demo',correct:'Correct!',wrong:'Not quite.',bt:'Book a free live demo session',bs:'Tell us what you would like to see and when. We will contact you to confirm.',fname:'Full name',fcont:'Phone or email',fcourse:'Course you are interested in',ffmt:'Format',fon:'Online',fin:'In person',fwhen:'Preferred day and time',fmsg:'Message (optional)',fsend:'Request free demo',fmiss:'Please fill in your name, contact and course.',fok:'Thank you! Your email app will open to send your request.',
ph:'Payment Details',ps:'Simple, clear steps to pay for your course. Only use the payment details published on this page.',s1:'Choose a course and register',s2:'Pay with one of the methods below',s3:'Send us your proof of payment',s4:'Receive confirmation and access to your course',stepsT:'How to pay',mm:'Mobile money',bank:'Bank transfer',cash:'Cash / in person',accName:'Account name',number:'Number',bankName:'Bank',accNo:'Account number',iban:'IBAN / RIB',soon:'Payment details are shared on request. Contact us and we will send them to you.',pricesT:'Course fees',price:'Fee',ask:'Contact us',proofT:'I have paid: send my proof of payment',pname:'Full name',pcourse:'Course',pamt:'Amount paid',pmeth:'Payment method',pref:'Transaction reference',psend:'Send proof of payment',pmiss:'Please fill in your name, course, payment method and transaction reference.',pok:'Thank you! Your email app will open to send your proof of payment.',safe:'Security tip: KCG will never ask for your PIN or password. Only pay to the details shown on this page, and keep your transaction reference.'},
fr:{dnav:'Démo gratuite',ynav:'Paiement',dh:'Démo gratuite',ds:'Découvrez comment KCG enseigne avant de payer. Essayez une mini-leçon gratuite tout de suite, ou réservez une séance de démonstration en direct gratuite avec notre équipe.',qt:'Essayez une mini-leçon gratuite',qs:'Bases de la sécurité numérique : 5 questions rapides',qstart:'Commencer la mini-leçon',qq:'Question',qof:'sur',qnext:'Suivant',qfinish:'Voir mon score',qscore:'Votre score',qgood:'Excellent ! Vous avez de très bons réflexes de sécurité numérique.',qmid:'Bon début ! Notre formation Sensibilisation à la sécurité numérique vous aidera à aller plus loin.',qlow:'Merci d’avoir essayé ! Nos formations pour débutants vous apprendront ces bases.',qagain:'Réessayer',qcta:'Réserver une démo gratuite en direct',correct:'Correct !',wrong:'Pas tout à fait.',bt:'Réserver une séance de démo gratuite en direct',bs:'Dites-nous ce que vous aimeriez voir et quand. Nous vous contacterons pour confirmer.',fname:'Nom complet',fcont:'Téléphone ou e-mail',fcourse:'Formation qui vous intéresse',ffmt:'Format',fon:'En ligne',fin:'En présentiel',fwhen:'Jour et heure souhaités',fmsg:'Message (facultatif)',fsend:'Demander la démo gratuite',fmiss:'Veuillez renseigner votre nom, votre contact et la formation.',fok:'Merci ! Votre application e-mail va s’ouvrir pour envoyer votre demande.',
ph:'Détails de paiement',ps:'Des étapes simples et claires pour payer votre formation. Utilisez uniquement les coordonnées de paiement publiées sur cette page.',s1:'Choisissez une formation et inscrivez-vous',s2:'Payez avec l’un des moyens ci-dessous',s3:'Envoyez-nous votre preuve de paiement',s4:'Recevez la confirmation et l’accès à votre formation',stepsT:'Comment payer',mm:'Mobile money',bank:'Virement bancaire',cash:'Espèces / en personne',accName:'Nom du compte',number:'Numéro',bankName:'Banque',accNo:'Numéro de compte',iban:'IBAN / RIB',soon:'Les détails de paiement sont communiqués sur demande. Contactez-nous et nous vous les enverrons.',pricesT:'Tarifs des formations',price:'Tarif',ask:'Nous contacter',proofT:'J’ai payé : envoyer ma preuve de paiement',pname:'Nom complet',pcourse:'Formation',pamt:'Montant payé',pmeth:'Moyen de paiement',pref:'Référence de la transaction',psend:'Envoyer la preuve de paiement',pmiss:'Veuillez renseigner votre nom, la formation, le moyen de paiement et la référence de la transaction.',pok:'Merci ! Votre application e-mail va s’ouvrir pour envoyer votre preuve de paiement.',safe:'Conseil de sécurité : KCG ne vous demandera jamais votre PIN ni votre mot de passe. Payez uniquement aux coordonnées indiquées sur cette page et gardez votre référence de transaction.'}};
var QZ={en:[
{q:'You get this SMS: “Your mobile money account is blocked. Send your PIN to this number to unblock it.” What do you do?',o:['Send my PIN quickly to unblock the account','Ignore it, never share my PIN, and contact my operator through official channels','Reply to ask for more details'],a:1,e:'Operators never ask for your PIN. Never share it, even with someone who says they work for them.'},
{q:'Which password is the strongest?',o:['kosso1990','Chad2024','T7!rainy-Goat$42'],a:2,e:'Long, unpredictable passwords with letters, numbers and symbols are best. Avoid names and years.'},
{q:'What does two-step verification (2FA) do?',o:['Adds a second proof, such as a code, on top of your password','Makes your password shorter','Deletes your data if you are hacked'],a:0,e:'Even if someone steals your password, they are missing the second item needed to get in.'},
{q:'You are in a café and want to check your bank account. What is the safest choice?',o:['Use the free public Wi-Fi','Use your phone’s mobile data or a trusted VPN','Ask the café for the Wi-Fi password and use it'],a:1,e:'Public Wi-Fi can be watched by others. Mobile data is safer for sensitive accounts.'},
{q:'A friend messages you: “Click here to win a free phone!” with a strange link. What do you do?',o:['Click quickly before the offer ends','Do not click, check with your friend another way, and delete the message','Forward it to everyone'],a:1,e:'Your friend’s account may have been hacked. A surprising link, even from someone you know, deserves a check.'}],
fr:[
{q:'Vous recevez ce SMS : « Votre compte mobile money est bloqué. Envoyez votre code PIN à ce numéro pour le débloquer. » Que faites-vous ?',o:['J’envoie vite mon PIN pour débloquer le compte','J’ignore le message, je ne partage jamais mon PIN et je contacte mon opérateur par ses canaux officiels','Je réponds pour demander plus de détails'],a:1,e:'Les opérateurs ne demandent jamais votre PIN. Ne le partagez jamais, même avec quelqu’un qui dit travailler pour eux.'},
{q:'Quel mot de passe est le plus solide ?',o:['kosso1990','Tchad2024','T7!pluie-Chevre$42'],a:2,e:'Un mot de passe long et imprévisible, avec lettres, chiffres et symboles, est le meilleur. Évitez les prénoms et les années.'},
{q:'À quoi sert la vérification en deux étapes (2FA) ?',o:['Elle ajoute une deuxième preuve, comme un code, en plus du mot de passe','Elle raccourcit votre mot de passe','Elle supprime vos données en cas de piratage'],a:0,e:'Même si quelqu’un vole votre mot de passe, il lui manque le deuxième élément pour entrer.'},
{q:'Vous êtes dans un café et voulez consulter votre compte bancaire. Quel est le choix le plus sûr ?',o:['Utiliser le Wi-Fi public gratuit','Utiliser les données mobiles de votre téléphone ou un VPN de confiance','Demander le mot de passe du Wi-Fi au café et l’utiliser'],a:1,e:'Le Wi-Fi public peut être surveillé par d’autres. Les données mobiles sont plus sûres pour les comptes sensibles.'},
{q:'Un ami vous écrit : « Clique ici pour gagner un téléphone gratuit ! » avec un lien étrange. Que faites-vous ?',o:['Je clique vite avant la fin de l’offre','Je ne clique pas, je vérifie avec mon ami par un autre moyen et je supprime le message','Je le transfère à tout le monde'],a:1,e:'Le compte de votre ami a peut-être été piraté. Un lien surprenant, même venant d’un proche, mérite une vérification.'}]};
function mkI(t,ml){var i=document.createElement('input');i.type=t||'text';i.maxLength=ml||120;return i}
function mkS(arr){var s=document.createElement('select');arr.forEach(function(t){var o=document.createElement('option');o.textContent=t;s.appendChild(o)});return s}
function fld(box,label,node){box.appendChild(el('label',0,label));box.appendChild(node)}
function msgBox(){var m=el('div');m.style.cssText='min-height:1.4em;font-weight:600';return m}
function renderDemo(){
  var d=DM[lang]||DM.en,qz=QZ[lang]||QZ.en;
  ['dn','hd'].forEach(function(id){var e=document.getElementById(id);if(e)e.textContent=d.dnav});
  document.getElementById('yn').textContent=d.ynav;
  document.getElementById('dmh').textContent=d.dh;document.getElementById('dms').textContent=d.ds;
  var g=document.getElementById('dmg');g.textContent='';
  var qc=el('div','card'),bk=el('div','card');
  qc.appendChild(el('h3',0,d.qt));var qs=el('p',0,d.qs);qs.style.cssText='color:var(--muted);margin:6px 0 14px';qc.appendChild(qs);
  var box=el('div');qc.appendChild(box);
  var qi=0,sc=0;
  function start(){box.textContent='';var b=el('button','btn',d.qstart);b.onclick=function(){qi=0;sc=0;show()};box.appendChild(b)}
  function show(){
    box.textContent='';var x=qz[qi];
    box.appendChild(el('small',0,d.qq+' '+(qi+1)+' '+d.qof+' '+qz.length));
    box.appendChild(bar(Math.round(100*qi/qz.length)));
    var q=el('p',0,x.q);q.style.cssText='font-weight:700;margin:6px 0 12px';box.appendChild(q);
    var fb=el('div');fb.style.cssText='margin:6px 0;min-height:1.4em';
    var opts=[];
    x.o.forEach(function(t,k){
      var b=el('button','btn alt',t);b.style.cssText='display:block;width:100%;text-align:start;margin-bottom:8px;border-radius:14px';
      b.onclick=function(){
        opts.forEach(function(o){o.disabled=true});
        var ok=k===x.a;if(ok)sc++;
        b.style.borderColor=ok?'#22c55e':'#ef4444';opts[x.a].style.borderColor='#22c55e';
        fb.textContent='';fb.appendChild(el('strong',0,(ok?d.correct:d.wrong)+' '));fb.appendChild(document.createTextNode(x.e));
        var nb=el('button','btn',qi<qz.length-1?d.qnext:d.qfinish);nb.style.marginTop='10px';
        nb.onclick=function(){qi++;if(qi<qz.length)show();else fin()};fb.appendChild(el('div')).appendChild(nb);
      };
      opts.push(b);box.appendChild(b);
    });
    box.appendChild(fb);
  }
  function fin(){
    box.textContent='';box.appendChild(el('h3',0,d.qscore+': '+sc+'/'+qz.length));
    box.appendChild(bar(Math.round(100*sc/qz.length)));
    var m=el('p',0,sc>=4?d.qgood:sc>=2?d.qmid:d.qlow);m.style.margin='10px 0 14px';box.appendChild(m);
    var r=el('div','btns');r.style.justifyContent='flex-start';
    var a=el('button','btn alt',d.qagain);a.onclick=function(){qi=0;sc=0;show()};
    var c=el('button','btn',d.qcta);c.onclick=function(){bk.scrollIntoView({behavior:'smooth',block:'center'})};
    r.appendChild(a);r.appendChild(c);box.appendChild(r);
  }
  start();g.appendChild(qc);
  bk.style.cssText='display:grid;gap:8px;align-content:start';
  bk.appendChild(el('h3',0,d.bt));var bs=el('p',0,d.bs);bs.style.cssText='color:var(--muted);margin-bottom:6px';bk.appendChild(bs);
  var n1=mkI('text',60),n2=mkI('text',80),cr=mkS(cs().map(function(c){return c.t})),fm=mkS([d.fon,d.fin]),wh=mkI('text',80),ms=document.createElement('textarea');ms.maxLength=400;ms.style.minHeight='80px';
  fld(bk,d.fname,n1);fld(bk,d.fcont,n2);fld(bk,d.fcourse,cr);fld(bk,d.ffmt,fm);fld(bk,d.fwhen,wh);fld(bk,d.fmsg,ms);
  var m=msgBox();bk.appendChild(m);var sb=el('button','btn',d.fsend);bk.appendChild(sb);
  sb.onclick=function(){
    if(n1.value.trim().length<2||n2.value.trim().length<5){m.style.color='#ef4444';m.textContent=d.fmiss;return}
    m.style.color='#16a34a';m.textContent=d.fok;
    var body='Name: '+n1.value.trim()+'\nContact: '+n2.value.trim()+'\nCourse: '+cr.value+'\nFormat: '+fm.value+'\nPreferred time: '+(wh.value.trim()||'-')+'\nMessage: '+(ms.value.trim()||'-');
    location.href='mailto:'+EMAIL+'?subject='+encodeURIComponent('Free demo request – '+cr.value)+'&body='+encodeURIComponent(body);
  };
  g.appendChild(bk);
}
function renderPay(){
  var d=DM[lang]||DM.en,c=cs(),b=document.getElementById('pyb');b.textContent='';
  document.getElementById('pyh').textContent=d.ph;document.getElementById('pys').textContent=d.ps;
  function h(t){var x=el('h3',0,t);x.style.margin='30px 0 12px';b.appendChild(x)}
  h(d.stepsT);var g1=el('div','grid');
  [d.s1,d.s2,d.s3,d.s4].forEach(function(t,i){var k=el('div','card');k.appendChild(el('div','num',i+1));k.appendChild(el('p',0,t));g1.appendChild(k)});b.appendChild(g1);
  h(d.mm+' · '+d.bank+' · '+d.cash);var g2=el('div','grid');
  function meth(title,lines){
    var k=el('div','card'),any=false;k.appendChild(el('h3',0,title));
    lines.forEach(function(l){if(!l[1])return;any=true;var r=el('p');r.style.cssText='margin:6px 0;color:var(--muted)';
      if(l[0])r.appendChild(document.createTextNode(l[0]+': '));var v=el('strong',0,l[1]);v.style.color='var(--text)';r.appendChild(v);k.appendChild(r)});
    if(!any){var q=el('p',0,d.soon);q.style.cssText='color:var(--muted);margin-top:8px';k.appendChild(q)}
    g2.appendChild(k);
  }
  meth(d.mm,PAY.mm.map(function(m){return [m.op+(m.name?' ('+m.name+')':''),m.num]}));
  meth(d.bank,[[d.bankName,PAY.bank.name],[d.accName,PAY.bank.acc],[d.accNo,PAY.bank.num],[d.iban,PAY.bank.iban]]);
  meth(d.cash,[['',PAY.cash]]);
  b.appendChild(g2);
  h(d.pricesT);var pc=el('div','card');
  c.forEach(function(x,i){var r=el('div','prow');r.appendChild(el('span',0,x.t));var pv=PAY.prices[i];r.appendChild(el('strong',0,(pv===undefined||pv===null||pv==='')?d.ask:(pv+' '+PAY.cur)));pc.appendChild(r)});
  b.appendChild(pc);
  h(d.proofT);var pf=el('div','card');pf.style.cssText='display:grid;gap:8px;max-width:560px';
  var a1=mkI('text',60),a2=mkS(c.map(function(x){return x.t})),a3=mkI('text',30),a4=mkS([d.mm,d.bank,d.cash]),a5=mkI('text',60);
  fld(pf,d.pname,a1);fld(pf,d.pcourse,a2);fld(pf,d.pamt,a3);fld(pf,d.pmeth,a4);fld(pf,d.pref,a5);
  var m=msgBox();pf.appendChild(m);var sb=el('button','btn',d.psend);pf.appendChild(sb);
  sb.onclick=function(){
    if(a1.value.trim().length<2||a5.value.trim().length<3){m.style.color='#ef4444';m.textContent=d.pmiss;return}
    m.style.color='#16a34a';m.textContent=d.pok;
    var body='Name: '+a1.value.trim()+'\nCourse: '+a2.value+'\nAmount: '+(a3.value.trim()||'-')+'\nMethod: '+a4.value+'\nTransaction reference: '+a5.value.trim();
    location.href='mailto:'+EMAIL+'?subject='+encodeURIComponent('Payment proof – '+a1.value.trim())+'&body='+encodeURIComponent(body);
  };
  b.appendChild(pf);
  var sf=el('p',0,d.safe);sf.style.cssText='margin-top:24px;padding:14px 18px;border-inline-start:4px solid var(--yellow);background:var(--card);border-radius:12px;color:var(--muted)';b.appendChild(sf);
}
var CB=new Image();CB.src='images/certificate-bg.jpg';
function drawCert(i){
  var p=pl(),e=S.e[i],c=cs()[i],cv=document.createElement('canvas');cv.width=1536;cv.height=1024;var x=cv.getContext('2d');
  if(CB.complete&&CB.naturalWidth)x.drawImage(CB,0,0,1536,1024);else{x.fillStyle='#fff';x.fillRect(0,0,1536,1024)}
  var NV='#0c185c',SF='"Times New Roman",Times,"Liberation Serif",Georgia,serif';
  function t(s,cx,y,size,st,max){var f=size;do{x.font=st+' '+f+'px '+SF;f-=2}while(x.measureText(s).width>max&&f>16);x.textAlign='center';x.fillStyle=NV;x.fillText(s,cx,y)}
  t('KOSSOMI CYBERGUARD',768,83,66,'bold',700);
  t(S.u.n,890,479,56,'italic bold',960);
  t(p.certDone,772,548,40,'italic',1000);
  t(c.t,772,590,46,'bold',1000);
  t(fmtDate(e.c),385,805,30,'italic',320);
  t(p.certId+': '+e.id,385,886,22,'normal',330);
  t('Moussa Kosso Kamkala',1196,800,34,'italic bold',380);
  t(lang==='fr'?'Directeur g\u00e9n\u00e9ral':'Chief Executive Officer',1196,850,32,'italic bold',380);
  t('Kossomi CyberGuard',1196,886,32,'italic bold',380);
  return cv;
}
var sb=null,FILES={},LOADED=false;
try{if(SUPABASE_URL&&SUPABASE_ANON_KEY&&window.supabase)sb=window.supabase.createClient(SUPABASE_URL,SUPABASE_ANON_KEY)}catch(e){sb=null}
LOADED=!sb;S={e:{}};DB.cur='';
function save(){}
PV.push('owner');
Object.assign(P.en,{cfg:'Login is not connected yet. The site owner must paste the Supabase URL and key at the top of the page code (see SETUP-GUIDE.md). Until then, Log in and Sign up cannot work.',actMsg:'Account created! We sent you an email: click the activation link in it, then come back and log in.',notConf:'Please activate your account first: click the link in the email we sent you.',st_pending:'Awaiting payment',st_submitted:'Payment under review',st_rejected:'Payment not confirmed',payInstr:'To activate this course, pay using the details in the Payment section, then send your transaction reference below.',seePay:'See payment details',reviewing:'Thank you! We are reviewing your payment. You will receive an email as soon as your course is active.',rejectedMsg:'We could not confirm your payment. Please check your details and send the reference again.',submitBtn:'Send payment proof',files:'Course videos and files',noFiles:'No materials have been uploaded yet.',open:'Open',mRef:'Please enter your transaction reference.',phone:'Phone (with country code)',country:'Country',city:'City',loading:'Loading\u2026',dup:'This email or username is already registered.'});
Object.assign(P.fr,{cfg:'La connexion n\u2019est pas encore configur\u00e9e. Le propri\u00e9taire du site doit coller l\u2019URL et la cl\u00e9 Supabase en haut du code de la page (voir SETUP-GUIDE.md). Tant que ce n\u2019est pas fait, la connexion et l\u2019inscription ne peuvent pas fonctionner.',actMsg:'Compte cr\u00e9\u00e9 ! Nous vous avons envoy\u00e9 un e-mail : cliquez sur le lien d\u2019activation, puis revenez vous connecter.',notConf:'Veuillez d\u2019abord activer votre compte : cliquez sur le lien de l\u2019e-mail que nous vous avons envoy\u00e9.',st_pending:'En attente de paiement',st_submitted:'Paiement en cours de v\u00e9rification',st_rejected:'Paiement non confirm\u00e9',payInstr:'Pour activer cette formation, payez avec les coordonn\u00e9es de la section Paiement, puis envoyez votre r\u00e9f\u00e9rence de transaction ci-dessous.',seePay:'Voir les d\u00e9tails de paiement',reviewing:'Merci ! Nous v\u00e9rifions votre paiement. Vous recevrez un e-mail d\u00e8s que votre formation sera active.',rejectedMsg:'Nous n\u2019avons pas pu confirmer votre paiement. V\u00e9rifiez vos informations et renvoyez la r\u00e9f\u00e9rence.',submitBtn:'Envoyer la preuve de paiement',files:'Vid\u00e9os et fichiers de la formation',noFiles:'Aucun support n\u2019a encore \u00e9t\u00e9 ajout\u00e9.',open:'Ouvrir',mRef:'Veuillez saisir la r\u00e9f\u00e9rence de votre transaction.',phone:'T\u00e9l\u00e9phone (avec indicatif)',country:'Pays',city:'Ville',loading:'Chargement\u2026',dup:'Cet e-mail ou ce nom d\u2019utilisateur est d\u00e9j\u00e0 enregistr\u00e9.'});

async function loadAll(){
  if(!sb)return;
  try{
    var ses=(await sb.auth.getSession()).data.session;
    if(!ses){S={e:{}};FILES={};return}
    var uid=ses.user.id;
    var r=await Promise.all([sb.from('profiles').select('*').eq('id',uid).single(),sb.from('enrollments').select('*').eq('user_id',uid),sb.from('course_files').select('*').order('created_at')]);
    var pr=r[0].data;if(!pr){S={e:{}};return}
    S={u:{id:uid,n:pr.full_name||'',un:pr.username||'',em:pr.email||ses.user.email,j:new Date(pr.created_at).getTime(),role:pr.role,pic:pr.avatar||''},e:{}};
    (r[1].data||[]).forEach(function(en){S.e[en.course_id-1]={eid:en.id,status:en.status,d:en.progress||[],c:en.completed_at?new Date(en.completed_at).getTime():undefined,id:en.cert_id}});
    FILES={};(r[2].data||[]).forEach(function(f){(FILES[f.course_id-1]=FILES[f.course_id-1]||[]).push(f)});
  }catch(e){}finally{LOADED=true;renderPortal()}
}
if(sb){sb.auth.onAuthStateChange(function(ev,ses){
  setTimeout(function(){
    if(ev==='SIGNED_IN'&&ses){
      var now=Date.now(),last=0;try{last=+localStorage.getItem('kcgLastLog')||0}catch(e){}
      if(now-last>1800000){try{localStorage.setItem('kcgLastLog',String(now))}catch(e){}
        sb.from('logins').insert({user_id:ses.user.id}).then(function(){});
        sb.from('profiles').update({last_login:new Date(now).toISOString()}).eq('id',ses.user.id).then(function(){})}
      if(/access_token|type=/.test(location.hash))go('dashboard');
    }
    loadAll();
  },0)})}

function renderPortal(){
  var p=pl(),own=!!(S.u&&S.u.role==='owner'),pn=document.getElementById('pn');
  pn.textContent=own?'Owner':(S.u?p.dash:p.login);pn.setAttribute('href',own?'#owner':(S.u?'#dashboard':'#login'));
  var pu=document.getElementById('pu');pu.textContent=p.signup;pu.hidden=!!S.u;
  if(!curView)return;
  var tabs=document.getElementById('pt'),v=document.getElementById('pv');tabs.textContent='';v.textContent='';
  var base=[['top',p.home],['dashboard',p.dash],['my-learning',p.learn],['portal-courses',p.courses],['certificates',p.certs],['profile',p.profile]];
  if(own)base.push(['owner','Owner']);
  (S.u?base:[['top',p.home],['login',p.login],['signup',p.signup]]).forEach(function(t){var a=el('a',t[0]===curView?'on':0,t[1]);a.href='#'+t[0];tabs.appendChild(a)});
  if(sb&&!LOADED){v.appendChild(el('p',0,p.loading));return}
  if(!S.u){if(curView!=='login'&&curView!=='signup'){go('login');return}return authView(v,curView)}
  if(curView==='login'||curView==='signup'){go('dashboard');return}
  if(curView==='owner'&&!own){go('dashboard');return}
  ({'dashboard':vDash,'my-learning':vLearn,'portal-courses':vCourses,'certificates':vCerts,'profile':vProfile,'owner':vOwner})[curView](v);
}

function authView(v,mode){
  var p=pl(),su=mode==='signup',k=el('div','card');
  k.style.cssText='max-width:520px;margin:0 auto;display:grid;gap:10px';
  k.appendChild(el('h2',0,su?p.signupTitle:p.loginTitle));
  if(!sb){var q=el('p',0,p.cfg);q.style.color='var(--muted)';k.appendChild(q);v.appendChild(k);return}
  var s=el('p',0,su?p.signupSub:p.loginSub);s.style.color='var(--muted)';k.appendChild(s);
  function inp(type,ac,max){var i=document.createElement('input');i.type=type;i.autocomplete=ac;i.maxLength=max||120;return i}
  function add(label,i){k.appendChild(el('label',0,label));k.appendChild(i)}
  var nm,un,ph,co,ci,pw2,em=inp('email','email'),pw=inp('password',su?'new-password':'current-password',64);
  if(su){nm=inp('text','name',60);un=inp('text','username',30);ph=inp('tel','tel',24);co=inp('text','country-name',60);ci=inp('text','address-level2',60);pw2=inp('password','new-password',64);
    add(p.name,nm);add(p.user,un);add(p.email,em);add(p.phone,ph);add(p.country,co);add(p.city,ci);add(p.pass,pw);
    var hn=el('div',0,p.passHint);hn.style.cssText='color:var(--muted);font-size:.85rem;margin-top:-4px';k.appendChild(hn);add(p.pass2,pw2)}
  else{add(p.email,em);add(p.pass,pw)}
  var m=el('div');m.style.cssText='min-height:1.4em;color:#ef4444;font-weight:600';k.appendChild(m);
  var b=el('button','btn',su?p.signup:p.login);k.appendChild(b);
  var alt=el('p');alt.style.cssText='text-align:center;color:var(--muted);margin:6px 0 0';
  alt.appendChild(document.createTextNode((su?p.haveAcc:p.noAcc)+' '));
  var a=el('a',0,su?p.login:p.signup);a.href=su?'#login':'#signup';a.style.color='var(--cyan)';alt.appendChild(a);k.appendChild(alt);
  k.addEventListener('keydown',function(e){if(e.key==='Enter'){e.preventDefault();b.click()}});
  function err(t){m.style.color='#ef4444';m.textContent=t;b.disabled=false}
  function busy(){b.disabled=true;m.style.color='var(--muted)';m.textContent=p.wait}
  b.onclick=async function(){
    m.textContent='';
    var e=em.value.trim().toLowerCase(),pwv=pw.value;
    if(!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(e))return err(p.mEmail);
    if(su){
      var n=nm.value.trim(),u=un.value.trim();
      if(n.length<2)return err(p.mName);
      if(!/^[A-Za-z0-9_.]{3,30}$/.test(u))return err(p.mUser);
      if(pwv.length<8||!/[A-Za-z]/.test(pwv)||!/[0-9]/.test(pwv)||!/[^A-Za-z0-9]/.test(pwv))return err(p.mPw);
      if(pwv!==pw2.value)return err(p.mMatch);
      busy();
      var r=await sb.auth.signUp({email:e,password:pwv,options:{data:{full_name:n,username:u,phone:ph.value.trim(),country:co.value.trim(),city:ci.value.trim()},emailRedirectTo:location.href.split('#')[0]}});
      if(r.error)return err(/database|already|registered|duplicate/i.test(r.error.message)?p.dup:r.error.message);
      if(r.data.user&&r.data.user.identities&&r.data.user.identities.length===0)return err(p.dup);
      b.disabled=false;m.style.color='#16a34a';m.textContent=p.actMsg;
    }else{
      busy();
      var r2=await sb.auth.signInWithPassword({email:e,password:pwv});
      if(r2.error)return err(/confirm/i.test(r2.error.message)?p.notConf:p.mBad);
      await loadAll();go('dashboard');
    }
  };
  v.appendChild(k);
}

function enrollBtn(i){
  var p=pl(),e=S.e[i],b=el('button','btn',e?p.continue:p.enroll);
  b.onclick=async function(){
    if(!S.u){go('login');return}
    if(!e){b.disabled=true;var r=await sb.from('enrollments').insert({user_id:S.u.id,course_id:i+1});if(r.error){b.disabled=false;return}await loadAll()}
    openC=i;go('my-learning');if(curView==='my-learning')renderPortal();
  };
  return b;
}

function vLearn(v){
  var p=pl(),d0=DM[lang]||DM.en,ids=Object.keys(S.e);
  v.appendChild(el('h2',0,p.learn));
  if(!ids.length){var q=el('p',0,p.none);q.style.cssText='color:var(--muted);margin:16px 0';v.appendChild(q);var bb=el('button','btn',p.browse);bb.onclick=function(){go('portal-courses')};v.appendChild(bb);return}
  var lst=el('div','courses');lst.style.marginTop='18px';
  ids.forEach(function(k){
    var i=+k,c=cs()[i],e=S.e[i],paid=e.status==='paid',d=el('details','card course');if(openC===i)d.open=true;
    var sm=el('summary'),w=el('span');w.appendChild(el('b',0,c.t));
    w.appendChild(el('small',0,paid?(pr(i)+'% '+p.pct+' \u00b7 '+e.d.length+'/'+c.mods.length+' '+p.lessonsDone):p['st_'+e.status]));
    sm.appendChild(w);d.appendChild(sm);
    var b=el('div','body');
    if(!paid){
      var t=el('p',0,e.status==='submitted'?p.reviewing:(e.status==='rejected'?p.rejectedMsg+' ':'')+p.payInstr);t.style.color='var(--muted)';b.appendChild(t);
      if(e.status!=='submitted'){
        var me=mkS([d0.mm,d0.bank,d0.cash]),rf=mkI('text',60),am=mkI('text',30),mg=msgBox();
        fld(b,d0.pmeth,me);fld(b,d0.pref,rf);fld(b,d0.pamt,am);b.appendChild(mg);
        var r=el('div','btns');r.style.cssText='justify-content:flex-start';
        var sd=el('button','btn',p.submitBtn);
        sd.onclick=async function(){
          if(rf.value.trim().length<3){mg.style.color='#ef4444';mg.textContent=p.mRef;return}
          sd.disabled=true;
          await sb.from('enrollments').update({status:'submitted',method:me.value,reference:rf.value.trim(),amount:am.value.trim()}).eq('id',e.eid);
          openC=i;await loadAll();
        };
        var sp3=el('a','btn alt',p.seePay);sp3.href='#payment';
        r.appendChild(sd);r.appendChild(sp3);
        if(e.status==='pending'){var un=el('button','btn alt',p.unenroll);un.onclick=async function(){await sb.from('enrollments').delete().eq('id',e.eid);await loadAll()};r.appendChild(un)}
        b.appendChild(r);
      }
    }else{
      b.appendChild(bar(pr(i)));
      c.mods.forEach(function(m,j){
        var lb=el('label','lesson'),cb=document.createElement('input');cb.type='checkbox';cb.checked=e.d.indexOf(j)>-1;
        cb.onchange=async function(){
          var en=S.e[i],kk=en.d.indexOf(j);if(cb.checked&&kk<0)en.d.push(j);if(!cb.checked&&kk>-1)en.d.splice(kk,1);
          var upd={progress:en.d};
          if(en.d.length===c.mods.length&&!en.c){en.c=Date.now();en.id=mkId();upd.completed_at=new Date(en.c).toISOString();upd.cert_id=en.id}
          openC=i;await sb.from('enrollments').update(upd).eq('id',en.eid);await loadAll();
        };
        lb.appendChild(cb);lb.appendChild(el('span',0,m));b.appendChild(lb);
      });
      var fh=el('h4',0,p.files);fh.style.cssText='margin:16px 0 4px;color:var(--cyan);font-size:.8rem;text-transform:uppercase;letter-spacing:.6px';b.appendChild(fh);
      var fl=FILES[i]||[];
      if(!fl.length){var nf=el('p',0,p.noFiles);nf.style.color='var(--muted)';b.appendChild(nf)}
      fl.forEach(function(f){
        var row=el('div','prow');row.appendChild(el('span',0,(f.kind==='video'?'\u25b6 ':'\ud83d\udcc4 ')+f.title));
        var ob=el('button','btn alt',p.open);ob.style.padding='6px 14px';
        ob.onclick=async function(){
          var u=await sb.storage.from('course-files').createSignedUrl(f.path,3600);
          if(!u.data)return;
          if(f.kind==='video'){var vd=document.createElement('video');vd.controls=true;vd.autoplay=true;vd.src=u.data.signedUrl;vd.style.cssText='width:100%;border-radius:12px;margin:8px 0;background:#000';row.after(vd);ob.disabled=true}
          else window.open(u.data.signedUrl,'_blank');
        };
        row.appendChild(ob);b.appendChild(row);
      });
      var r3=el('div','btns');r3.style.cssText='justify-content:flex-start;margin-top:12px';
      if(e.c){var cbn=el('button','btn',p.getc);cbn.onclick=function(){showCert(i)};r3.appendChild(cbn)}
      b.appendChild(r3);
    }
    d.appendChild(b);lst.appendChild(d);
  });
  v.appendChild(lst);
}

function vProfile(v){
  var p=pl();v.appendChild(el('h2',0,p.profile));profilePic(v);
  var k=el('div','card');k.style.cssText='max-width:520px;margin-top:18px;display:grid;gap:10px';
  var i1=document.createElement('input');i1.value=S.u.n;i1.maxLength=60;
  var sv=el('button','btn',p.save);
  sv.onclick=async function(){var n=i1.value.trim();if(n.length<2)return;await sb.from('profiles').update({full_name:n}).eq('id',S.u.id);S.u.n=n;sv.textContent=p.saved;setTimeout(function(){sv.textContent=p.save},1500)};
  [el('label',0,p.name),i1,el('label',0,p.user),el('div',0,'@'+S.u.un),el('label',0,p.email),el('div',0,S.u.em),el('label',0,p.joined),el('div',0,fmtDate(S.u.j)),sv].forEach(function(x){k.appendChild(x)});
  v.appendChild(k);
  var lo=el('button','btn alt',p.logout);lo.style.marginTop='16px';
  lo.onclick=async function(){await sb.auth.signOut();S={e:{}};FILES={};go('login');renderPortal()};
  v.appendChild(lo);
}

/* ===== OWNER DASHBOARD ===== */
function orow(cells){var r=el('div','prow');r.style.cssText='flex-wrap:wrap;align-items:center';cells.forEach(function(c){var s=typeof c==='string'?el('span',0,c):c;s.style.flex='1 1 150px';r.appendChild(s)});return r}
function osec(parent,title){var h=el('h3',0,title);h.style.margin='30px 0 10px';parent.appendChild(h);var c=el('div','card');parent.appendChild(c);return c}
function dt(x){return x?new Date(x).toLocaleString():'-'}
async function vOwner(v){
  var oh=el('div');oh.style.cssText='display:flex;align-items:center;gap:14px';oh.appendChild(avatarNode(72));oh.appendChild(el('h2',0,'Owner dashboard'));v.appendChild(oh);
  var w=el('div');v.appendChild(w);w.appendChild(el('p',0,pl().loading));
  var r=await Promise.all([
    sb.from('profiles').select('*').order('created_at',{ascending:false}),
    sb.from('enrollments').select('*, profiles(full_name,email,phone)').order('created_at',{ascending:false}),
    sb.from('logins').select('at, profiles(full_name,email)').order('at',{ascending:false}).limit(40),
    sb.from('course_files').select('*').order('created_at',{ascending:false})]);
  w.textContent='';
  var bad=r.map(function(x){return x.error}).filter(Boolean)[0];
  if(bad){w.appendChild(el('p',0,'Could not load data: '+bad.message));return}
  var st=r[0].data,en=r[1].data,lg=r[2].data,fl=r[3].data,cn=cs();
  var g=el('div','grid');g.style.margin='18px 0';
  [[st.filter(function(s){return s.role==='student'}).length,'Students'],[en.filter(function(e){return e.status==='paid'}).length,'Paid enrollments'],[en.filter(function(e){return e.status==='submitted'}).length,'Payments to review'],[en.filter(function(e){return e.status==='pending'}).length,'Awaiting payment']].forEach(function(s){var k=el('div','card stat');k.appendChild(el('b',0,s[0]));k.appendChild(el('span',0,s[1]));g.appendChild(k)});
  w.appendChild(g);
  function setSt(id,s){return sb.from('enrollments').update(s==='paid'?{status:'paid',approved_at:new Date().toISOString()}:{status:s}).eq('id',id).then(function(){renderPortal()})}
  var c1=osec(w,'Course purchases and payments');
  if(!en.length)c1.appendChild(el('p',0,'No enrollments yet.'));
  en.forEach(function(e){
    var pf=e.profiles||{},acts=el('span');
    if(e.status!=='paid'){var ap=el('button','btn','Approve');ap.style.cssText='padding:6px 14px;margin:2px';ap.onclick=function(){ap.disabled=true;setSt(e.id,'paid')};acts.appendChild(ap)}
    if(e.status==='submitted'||e.status==='pending'){var rj=el('button','btn alt','Reject');rj.style.cssText='padding:6px 14px;margin:2px';rj.onclick=function(){rj.disabled=true;setSt(e.id,'rejected')};acts.appendChild(rj)}
    c1.appendChild(orow([(pf.full_name||'')+' \u00b7 '+(pf.email||'')+(pf.phone?' \u00b7 '+pf.phone:''),(cn[e.course_id-1]||{}).t||('Course '+e.course_id),e.status.toUpperCase(),(e.method||'-')+' \u00b7 '+(e.reference||'-')+(e.amount?' \u00b7 '+e.amount:''),dt(e.created_at),acts]));
  });
  var c2=osec(w,'Upload course videos and files');
  var cr=document.createElement('select');cn.forEach(function(c,i){var o=document.createElement('option');o.value=i+1;o.textContent=c.t;cr.appendChild(o)});
  var ti=mkI('text',100),fi=document.createElement('input');fi.type='file';fi.accept='video/*,application/pdf,.doc,.docx,.ppt,.pptx,.xls,.xlsx,.zip,.txt,image/*';
  c2.style.cssText='display:grid;gap:8px';
  fld(c2,'Course',cr);fld(c2,'Title (shown to students)',ti);fld(c2,'File or video',fi);
  var um=msgBox();c2.appendChild(um);var ub=el('button','btn','Upload');c2.appendChild(ub);
  ub.onclick=async function(){
    var f=fi.files[0];if(!f){um.style.color='#ef4444';um.textContent='Choose a file first.';return}
    var cid=+cr.value,path=cid+'/'+Date.now()+'-'+f.name.replace(/[^A-Za-z0-9._-]/g,'_');
    um.style.color='var(--muted)';um.textContent='Uploading\u2026 please wait.';ub.disabled=true;
    var u=await sb.storage.from('course-files').upload(path,f,{contentType:f.type||undefined});
    if(u.error){um.style.color='#ef4444';um.textContent='Upload failed: '+u.error.message;ub.disabled=false;return}
    var ins=await sb.from('course_files').insert({course_id:cid,title:ti.value.trim()||f.name,kind:(f.type||'').indexOf('video')===0?'video':'file',path:path,size:f.size});
    if(ins.error){um.style.color='#ef4444';um.textContent='Saved the file but not its record: '+ins.error.message;ub.disabled=false;return}
    openC=-1;renderPortal();
  };
  var c3=osec(w,'Uploaded videos and files');
  if(!fl.length)c3.appendChild(el('p',0,'Nothing uploaded yet.'));
  fl.forEach(function(f){
    var del=el('button','btn alt','Delete');del.style.padding='6px 14px';
    del.onclick=async function(){del.disabled=true;await sb.storage.from('course-files').remove([f.path]);await sb.from('course_files').delete().eq('id',f.id);renderPortal()};
    c3.appendChild(orow([(f.kind==='video'?'\u25b6 ':'\ud83d\udcc4 ')+f.title,(cn[f.course_id-1]||{}).t||'',Math.round((f.size||0)/1024/1024*10)/10+' MB',dt(f.created_at),del]));
  });
  var c4=osec(w,'Students');
  st.forEach(function(s){c4.appendChild(orow([(s.full_name||'')+' (@'+(s.username||'')+')',s.email||'',s.phone||'-',(s.country||'-')+' / '+(s.city||'-'),'Joined '+dt(s.created_at),'Last login '+dt(s.last_login)]))});
  var c5=osec(w,'Recent logins');
  if(!lg.length)c5.appendChild(el('p',0,'No logins recorded yet.'));
  lg.forEach(function(l){var pf=l.profiles||{};c5.appendChild(orow([(pf.full_name||'')+' \u00b7 '+(pf.email||''),dt(l.at)]))});
}

var OWNER_PIC='images/owner.jpg';
var PICB={en:'Change photo',fr:'Changer la photo',ar:'\u062a\u063a\u064a\u064a\u0631 \u0627\u0644\u0635\u0648\u0631\u0629',es:'Cambiar foto',pt:'Alterar foto'};
function initials(){var n=((S.u&&S.u.n)||'?').trim().split(/\s+/);return (((n[0]||'?')[0])+((n[1]||'')[0]||'')).toUpperCase()}
function avatarNode(sz){
  var a=el('div','avatar');a.style.cssText='width:'+sz+'px;height:'+sz+'px;font-size:'+Math.round(sz*0.36)+'px;flex:none';
  var src=S.u&&(S.u.pic||((S.u.role==='owner'&&typeof OWNER_PIC!=='undefined')?OWNER_PIC:''));
  if(src){var im=document.createElement('img');im.src=src;im.alt=S.u.n||'';a.appendChild(im)}else a.textContent=initials();
  return a;
}
function setPic(d){
  S.u.pic=d;save();
  if(typeof sb!=='undefined'&&sb)sb.from('profiles').update({avatar:d}).eq('id',S.u.id).then(function(){renderPortal()});
  else renderPortal();
}
function profilePic(v){
  var box=el('div');box.style.cssText='display:flex;align-items:center;gap:16px;margin:16px 0;flex-wrap:wrap';
  box.appendChild(avatarNode(110));
  var fi=document.createElement('input');fi.type='file';fi.accept='image/*';fi.hidden=true;
  var bt=el('button','btn alt',PICB[lang]||PICB.en);bt.onclick=function(){fi.click()};
  fi.onchange=function(){
    var f=fi.files[0];if(!f)return;var rd=new FileReader();
    rd.onload=function(){var im=new Image();im.onload=function(){
      var c=document.createElement('canvas');c.width=c.height=240;var x=c.getContext('2d'),s=Math.min(im.width,im.height);
      x.drawImage(im,(im.width-s)/2,(im.height-s)/2,s,s,0,0,240,240);setPic(c.toDataURL('image/jpeg',0.82))};im.src=rd.result};
    rd.readAsDataURL(f);
  };
  box.appendChild(bt);box.appendChild(fi);v.appendChild(box);
}
var store=new Map();
function applyLang(){
  renderCourses();renderTypes();renderPortal();renderDemo();renderPay();
  var w=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT),n,nodes=[];
  while((n=w.nextNode())){var p=n.parentNode.tagName;if(p!=='SCRIPT'&&p!=='STYLE'&&p!=='BUTTON'||n.parentNode.id!=='lang'&&p==='BUTTON')nodes.push(n)}
  nodes.forEach(function(n){
    if(!store.has(n))store.set(n,n.nodeValue);
    var o=store.get(n),t=o.trim();
    if(!t)return;
    n.nodeValue=T(t)!==t?o.replace(t,T(t)):o;
  });
  document.querySelectorAll('[placeholder],[alt],[aria-label]').forEach(function(el){
    ['placeholder','alt','aria-label'].forEach(function(a){
      if(!el.hasAttribute(a))return;
      var k='data-o-'+a;if(!el.hasAttribute(k))el.setAttribute(k,el.getAttribute(a));
      var o=el.getAttribute(k);el.setAttribute(a,T(o));
    });
  });
  document.documentElement.lang=lang;
  document.title=lang==='en'?'Kossomi CyberGuard (KCG) – Building a Safer Digital Chad':T('TITLE');
  document.getElementById('lang').value=lang;
  document.documentElement.dir=lang==='ar'?'rtl':'ltr';
  fillCodes();
  try{
    var dn=new Intl.DisplayNames([lang],{type:'region'}),dl=document.getElementById('countries'),names=[];
    'AF AL DZ AS AD AO AI AG AR AM AW AU AT AZ BS BH BD BB BY BE BZ BJ BM BT BO BA BW BR IO BN BG BF BI KH CM CA CV KY CF TD CL CN CO KM CG CD CK CR CI HR CU CW CY CZ DK DJ DM DO EC EG SV GQ ER EE SZ ET FK FO FJ FI FR GF PF GA GM GE DE GH GI GR GL GD GP GU GT GG GN GW GY HT HN HK HU IS IN ID IR IQ IE IM IL IT JM JP JE JO KZ KE KI KP KR XK KW KG LA LV LB LS LR LY LI LT LU MO MG MW MY MV ML MT MH MQ MR MU YT MX FM MD MC MN ME MS MA MZ MM NA NR NP NL NC NZ NI NE NG NU NF MK MP NO OM PK PW PS PA PG PY PE PH PL PT PR QA RE RO RU RW KN LC VC WS SM ST SA SN RS SC SL SG SX SK SI SB SO ZA SS ES LK SD SR SE CH SY TW TJ TZ TH TL TG TO TT TN TR TM TC TV UG UA AE GB US UY UZ VU VA VE VN VG VI EH YE ZM ZW'.split(' ').forEach(function(c){var nm=dn.of(c);if(nm&&nm!==c)names.push(nm)});
    names.sort(function(a,b){return a.localeCompare(b,lang)});
    dl.innerHTML='';names.forEach(function(nm){var o=document.createElement('option');o.value=nm;dl.appendChild(o)});
  }catch(e){}
  var m=document.getElementById('rmsg');if(m)m.textContent='';
}
document.getElementById('lang').onchange=function(){
  lang=this.value;
  try{localStorage.setItem('kcgLang',lang)}catch(e){}
  applyLang();
};
applyLang();
var sp=document.getElementById('sp'),sq=document.getElementById('sq'),sr=document.getElementById('sr');
function norm(s){return s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'')}
function items(){var out=[];
  document.querySelectorAll('section h2,.card,.pillar,.founder,.hero h1,.hero .lead').forEach(function(el){
    var h=el.querySelector('h3,b')||(/^H[12]$/.test(el.tagName)?el:null);
    var text=el.textContent.replace(/\s+/g,' ').trim();
    out.push({el:el,title:(h?h.textContent:text).trim().replace(/\s+/g,' ').slice(0,80),text:text});
  });return out}
function closeSearch(){sp.hidden=true}
function runSearch(){
  var q=sq.value.trim(),n=0,first=null;sr.textContent='';if(!q)return null;
  var nq=norm(q);
  items().forEach(function(it){
    if(n>=8)return;
    var i=norm(it.text).indexOf(nq);if(i<0)return;
    n++;
    var a=document.createElement('a');a.href='#';
    var b=document.createElement('strong');b.textContent=it.title;a.appendChild(b);
    var s=document.createElement('small'),st=Math.max(0,i-30),seg=it.text.slice(st,i+nq.length+60),k=i-st;
    s.appendChild(document.createTextNode((st>0?'…':'')+seg.slice(0,k)));
    var hl=document.createElement('mark');hl.textContent=seg.slice(k,k+nq.length);s.appendChild(hl);
    s.appendChild(document.createTextNode(seg.slice(k+nq.length)+'…'));
    a.appendChild(s);
    a.onclick=function(e){e.preventDefault();closeSearch();it.el.scrollIntoView({behavior:'smooth',block:'center'});it.el.classList.add('flash');setTimeout(function(){it.el.classList.remove('flash')},2200)};
    sr.appendChild(a);if(!first)first=a;
  });
  if(!n){var p=document.createElement('div');p.style.cssText='padding:10px 12px;color:var(--muted)';p.textContent=T('No results found.');sr.appendChild(p)}
  return first;
}
document.getElementById('sb').onclick=function(){if(sp.hidden){sp.hidden=false;sq.focus()}else closeSearch()};
sq.addEventListener('input',runSearch);
sq.addEventListener('keydown',function(e){if(e.key==='Escape')closeSearch();if(e.key==='Enter'){e.preventDefault();var f=runSearch();if(f)f.click()}});
window.addEventListener('hashchange',route);route();
var code='';
function draw(){
  var cv=document.getElementById('cv'),x=cv.getContext('2d'),A='ABCDEFGHJKLMNPQRSTUVWXYZ23456789',i;
  code='';for(i=0;i<5;i++)code+=A[Math.floor(Math.random()*A.length)];
  x.fillStyle='#eef3ff';x.fillRect(0,0,190,56);
  for(i=0;i<7;i++){x.strokeStyle='rgba('+(Math.random()*150|0)+','+(Math.random()*150|0)+',200,.5)';x.beginPath();x.moveTo(Math.random()*190,Math.random()*56);x.lineTo(Math.random()*190,Math.random()*56);x.stroke();}
  for(i=0;i<5;i++){x.save();x.translate(18+i*34,34);x.rotate((Math.random()-.5)*.6);x.font='bold '+(26+Math.random()*8|0)+'px monospace';x.fillStyle='#0b1f5c';x.fillText(code[i],0,0);x.restore();}
}
draw();
document.getElementById('rr').onclick=function(){draw();document.getElementById('rcap').value=''};
document.getElementById('rf').addEventListener('submit',function(ev){
  ev.preventDefault();
  var v=function(i){return document.getElementById(i).value.trim()},m=document.getElementById('rmsg');
  var bad=function(t){m.className='err';m.textContent=T(t)};
  var ph=/^\+?[0-9 ()\-]{7,20}$/;
  if(!/^[A-Za-z0-9_.]{3,30}$/.test(v('ru')))return bad('Username: 3–30 letters, numbers, _ or . only.');
  if(v('rl').length<2)return bad('Please enter your last name.');
  if(!ph.test(v('rp1')))return bad('Please enter a valid phone number 1.');
  if(v('rp2').replace(/^\+\d+\s*$/,'')&&!ph.test(v('rp2')))return bad('Phone number 2 is not valid (or leave it empty).');
  if(!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v('re')))return bad('Please enter a valid email address.');
  if(!v('rc'))return bad('Please enter your country.');
  if(!v('rt'))return bad('Please enter your city.');
  if(document.getElementById('rpw').value.length<8)return bad('Password must be at least 8 characters.');
  var pw=document.getElementById('rpw').value;
  if(!/[A-Za-z]/.test(pw)||!/[0-9]/.test(pw)||!/[^A-Za-z0-9]/.test(pw))return bad('Password must include letters, numbers and a special character (e.g. @ # $ !).');
  if(document.getElementById('rpw').value!==document.getElementById('rpw2').value)return bad('Passwords do not match.');
  if(v('rcap').toUpperCase()!==code){draw();document.getElementById('rcap').value='';return bad('Captcha is incorrect. Try the new one.');}
  var body='Username: '+v('ru')+'\nLast name: '+v('rl')+'\nPhone 1: '+v('rp1')+'\nPhone 2: '+(v('rp2').replace(/^\+\d+\s*$/,'')?v('rp2'):'-')+'\nEmail: '+v('re')+'\nCountry: '+v('rc')+'\nCity: '+v('rt');
  m.className='ok';document.getElementById('rpw').value='';document.getElementById('rpw2').value='';m.textContent=T('Thank you! Your email app will open to send your registration.');
  location.href='mailto:'+EMAIL+'?subject='+encodeURIComponent('KCG registration – '+v('ru'))+'&body='+encodeURIComponent(body);
});
document.getElementById('f').addEventListener('submit',function(ev){
  ev.preventDefault();
  var g=function(i){return document.getElementById(i).value};
  var body="Name: "+g('n')+"\nEmail: "+g('e')+"\nInterested in: "+g('s')+"\n\n"+g('m');
  location.href="mailto:"+EMAIL+"?subject="+encodeURIComponent("KCG inquiry – "+g('s'))+"&body="+encodeURIComponent(body);
});
