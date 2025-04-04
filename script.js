// script.js

const questions = [
  {
    question: "भारत की राजधानी क्या है?",
    options: ["मुंबई", "नई दिल्ली", "कोलकाता", "चेन्नई"],
    answer: 1,
    explanation: "नई दिल्ली भारत की राजधानी है।"
  },
  {
    question: "सौर मंडल में लाल ग्रह किसे कहा जाता है?",
    options: ["पृथ्वी", "मंगल", "बृहस्पति", "शुक्र"],
    answer: 1,
    explanation: "मंगल ग्रह को लाल ग्रह कहा जाता है।"
  },
  {
    question: "जन गण मन किसने लिखा?",
    options: ["रवींद्रनाथ टैगोर", "बंकिम चंद्र", "सरोजिनी नायडू", "महात्मा गांधी"],
    answer: 0,
    explanation: "रवींद्रनाथ टैगोर ने जन गण मन लिखा।"
  },
  {
    question: "विषम संख्या चुनिए: 2, 3, 5, 7, 11, 14, 17",
    options: ["3", "11", "14", "17"],
    answer: 2,
    explanation: "14 एक अभाज्य संख्या है।"
  },
  {
    question: "श्रृंखला में अगली संख्या: 1, 4, 9, 16, ?",
    options: ["20", "25", "30", "36"],
    answer: 1,
    explanation: "यह वर्ग संख्याओं की श्रृंखला है। 5×5 = 25"
  },
  {
    question: "भारत का पहला प्रधानमंत्री कौन था?",
    options: ["सुभाष चंद्र बोस", "डॉ. राजेन्द्र प्रसाद", "जवाहरलाल नेहरू", "लाल बहादुर शास्त्री"],
    answer: 2,
    explanation: "जवाहरलाल नेहरू भारत के पहले प्रधानमंत्री थे।"
  },
  {
    question: "भारत में कितने राज्य हैं? (2024 तक)",
    options: ["28", "29", "30", "31"],
    answer: 0,
    explanation: "2024 तक भारत में 28 राज्य हैं।"
  },
  {
    question: "घड़ी में 3:15 बजे कोण कितना होगा?",
    options: ["0°", "7.5°", "15°", "30°"],
    answer: 1,
    explanation: "घंटे और मिनट की सुई के बीच 7.5 डिग्री का कोण होता है।"
  },
  {
    question: "यदि TRAIN को 81295 कोड किया गया है, तो RAIN का कोड क्या होगा?",
    options: ["1295", "8195", "2195", "8295"],
    answer: 0,
    explanation: "'T' = 8, बाकी RAIN = 1295।"
  },
  {
    question: "एक त्रिभुज में सभी कोणों का योगफल कितना होता है?",
    options: ["90°", "180°", "270°", "360°"],
    answer: 1,
    explanation: "त्रिभुज के सभी कोणों का योग हमेशा 180° होता है।"
  },
  {
    question: "भारत का राष्ट्रीय पशु कौन है?",
    options: ["सिंह", "हाथी", "बाघ", "गैंडा"],
    answer: 2,
    explanation: "बाघ भारत का राष्ट्रीय पशु है।"
  },
  {
    question: "2, 4, 8, 16, ? अगला संख्या क्या होगी?",
    options: ["18", "20", "32", "24"],
    answer: 2,
    explanation: "हर संख्या पिछले का दोगुना है, तो 16 × 2 = 32।"
  },
  {
    question: "स्वतंत्रता दिवस कब मनाया जाता है?",
    options: ["15 अगस्त", "26 जनवरी", "2 अक्टूबर", "14 नवंबर"],
    answer: 0,
    explanation: "भारत 15 अगस्त को स्वतंत्र हुआ था।"
  },
  {
    question: "दिए गए विकल्पों में से विषम शब्द चुनिए: कार, बस, ट्रक, सेब",
    options: ["कार", "बस", "ट्रक", "सेब"],
    answer: 3,
    explanation: "सेब एक फल है, बाकी वाहन हैं।"
  },
  {
    question: "‘जल जीवन का आधार है’ यह किससे संबंधित है?",
    options: ["पर्यावरण", "स्वास्थ्य", "संगीत", "विज्ञान"],
    answer: 0,
    explanation: "जल पर्यावरण और जीवन का मूल है।"
  },
  {
    question: "यदि CAT = 3120, तो DOG = ?",
    options: ["4157", "4715", "4156", "5134"],
    answer: 0,
    explanation: "D=4, O=15, G=7 → 4157।"
  },
  {
    question: "भारत के संविधान का निर्माता कौन था?",
    options: ["महात्मा गांधी", "डॉ. अम्बेडकर", "नेहरू", "सरदार पटेल"],
    answer: 1,
    explanation: "डॉ. भीमराव अंबेडकर संविधान के प्रमुख निर्माता थे।"
  },
  {
    question: "‘हजारों मिल का सफर एक कदम से शुरू होता है’ यह किसका कथन है?",
    options: ["महात्मा गांधी", "लाओ त्से", "नेपोलियन", "रवींद्रनाथ टैगोर"],
    answer: 1,
    explanation: "यह लाओ त्से का प्रसिद्ध कथन है।"
  },
  {
    question: "5 × 5 + 5 = ?",
    options: ["55", "30", "25", "50"],
    answer: 1,
    explanation: "5×5 = 25; 25 + 5 = 30।"
  },
  {
    question: "भारत के राष्ट्रपति का कार्यकाल कितने वर्षों का होता है?",
    options: ["4", "5", "6", "7"],
    answer: 1,
    explanation: "भारत में राष्ट्रपति का कार्यकाल 5 वर्षों का होता है।"
  },
  {
    question: "यदि एक वर्ग की भुजा 4 सेमी है, उसका क्षेत्रफल क्या होगा?",
    options: ["8", "12", "16", "24"],
    answer: 2,
    explanation: "वर्ग का क्षेत्रफल = भुजा² = 4×4 = 16।"
  },
  {
    question: "सौरमंडल में सबसे बड़ा ग्रह कौन सा है?",
    options: ["पृथ्वी", "शुक्र", "बृहस्पति", "मंगल"],
    answer: 2,
    explanation: "बृहस्पति सबसे बड़ा ग्रह है।"
  },
  {
    question: "IQ का पूरा रूप क्या होता है?",
    options: ["Intelligent Quantity", "Idea Quotient", "Intelligence Quotient", "Intellect Quiz"],
    answer: 2,
    explanation: "IQ का मतलब Intelligence Quotient होता है।"
  },
  {
    question: "3, 6, 9, 12, ? अगली संख्या क्या होगी?",
    options: ["15", "14", "16", "18"],
    answer: 0,
    explanation: "यह 3 का पहाड़ा है।"
  },
  {
    question: "भारत के वर्तमान राष्ट्रपति (2024) कौन हैं?",
    options: ["राम नाथ कोविंद", "द्रौपदी मुर्मू", "प्रणव मुखर्जी", "नरेंद्र मोदी"],
    answer: 1,
    explanation: "द्रौपदी मुर्मू वर्तमान राष्ट्रपति हैं।"
  },
  {
    question: "दिए गए शब्दों में से कौन सा फल नहीं है: सेब, केला, आम, आलू",
    options: ["सेब", "केला", "आम", "आलू"],
    answer: 3,
    explanation: "आलू एक सब्ज़ी है।"
  },
  {
    question: "पहाड़ों की रानी किसे कहा जाता है?",
    options: ["शिमला", "दार्जिलिंग", "मनाली", "ऊटी"],
    answer: 1,
    explanation: "दार्जिलिंग को पहाड़ों की रानी कहा जाता है।"
  },
  {
    question: "यदि 3 आदमी 3 दिन में एक काम करते हैं, तो 6 आदमी वही काम कितने दिन में करेंगे?",
    options: ["1", "1.5", "2", "3"],
    answer: 1,
    explanation: "आदमी दोगुना तो समय आधा यानी 1.5 दिन।"
  },
  {
    question: "कंप्यूटर का मस्तिष्क किसे कहा जाता है?",
    options: ["मॉनिटर", "RAM", "CPU", "कीबोर्ड"],
    answer: 2,
    explanation: "CPU को कंप्यूटर का मस्तिष्क कहा जाता है।"
  },
  {
    question: "यदि A = 1, B = 2, ..., Z = 26, तो ACE = ?",
    options: ["9", "15", "11", "12"],
    answer: 1,
    explanation: "A=1, C=3, E=5; योग = 1+3+5 = 9।"
  },
  {
    question: "भारत का राष्ट्रीय फूल कौन सा है?",
    options: ["गुलाब", "कमल", "सूरजमुखी", "चमेली"],
    answer: 1,
    explanation: "कमल भारत का राष्ट्रीय फूल है।"
  },
  {
    question: "शून्य की खोज किसने की?",
    options: ["आर्यभट्ट", "गैलीलियो", "न्यूटन", "रामानुजन"],
    answer: 0,
    explanation: "शून्य की खोज आर्यभट्ट ने की थी।"
  },
  {
    question: "भारत का राष्ट्रीय पक्षी कौन है?",
    options: ["तोता", "मोर", "हंस", "गौरैया"],
    answer: 1,
    explanation: "मोर भारत का राष्ट्रीय पक्षी है।"
  },
  {
    question: "26 जनवरी को क्या मनाया जाता है?",
    options: ["स्वतंत्रता दिवस", "गणतंत्र दिवस", "गांधी जयंती", "बाल दिवस"],
    answer: 1,
    explanation: "26 जनवरी को गणतंत्र दिवस मनाया जाता है।"
  },
  {
    question: "‘जय जवान जय किसान’ किसने कहा?",
    options: ["इंदिरा गांधी", "लाल बहादुर शास्त्री", "नेहरू", "राजीव गांधी"],
    answer: 1,
    explanation: "यह नारा लाल बहादुर शास्त्री ने दिया था।"
  },
  {
    question: "भारत के पहले राष्ट्रपति कौन थे?",
    options: ["जवाहरलाल नेहरू", "डॉ. राजेन्द्र प्रसाद", "विवेकानंद", "सरदार पटेल"],
    answer: 1,
    explanation: "डॉ. राजेन्द्र प्रसाद भारत के पहले राष्ट्रपति थे।"
  },
  {
    question: "पृथ्वी सूर्य के चारों ओर कितने दिन में चक्कर लगाती है?",
    options: ["30", "180", "365", "400"],
    answer: 2,
    explanation: "पृथ्वी 365 दिन में सूर्य का एक चक्कर लगाती है।"
  },
  {
    question: "किस ग्रह को 'शनि' कहते हैं?",
    options: ["Saturn", "Mars", "Venus", "Jupiter"],
    answer: 0,
    explanation: "Saturn का हिंदी नाम शनि है।"
  },
  {
    question: "स्मार्टफोन किस श्रेणी में आता है?",
    options: ["हार्डवेयर", "सॉफ्टवेयर", "डिवाइस", "इनपुट"],
    answer: 2,
    explanation: "स्मार्टफोन एक इलेक्ट्रॉनिक डिवाइस है।"
  },
  {
    question: "LOGIC शब्द में कितने अक्षर हैं?",
    options: ["3", "4", "5", "6"],
    answer: 2,
    explanation: "L, O, G, I, C – कुल 5 अक्षर।"
  },
  {
    question: "निम्न में से विषम शब्द चुनिए: कुत्ता, बिल्ली, बकरी, पतंग",
    options: ["कुत्ता", "बिल्ली", "बकरी", "पतंग"],
    answer: 3,
    explanation: "पतंग जानवर नहीं है।"
  },
  {
    question: "7, 14, 21, 28, ?",
    options: ["30", "32", "35", "36"],
    answer: 2,
    explanation: "यह 7 का पहाड़ा है। 7×5 = 35"
  },
  {
    question: "‘सत्यमेव जयते’ कहाँ से लिया गया है?",
    options: ["गीता", "महाभारत", "उपनिषद", "रामायण"],
    answer: 2,
    explanation: "यह उपनिषद से लिया गया है।"
  },
  {
    question: "‘भारत छोड़ो आंदोलन’ कब हुआ था?",
    options: ["1857", "1942", "1920", "1930"],
    answer: 1,
    explanation: "भारत छोड़ो आंदोलन 1942 में हुआ था।"
  },
  {
    question: "संसद भवन कहाँ स्थित है?",
    options: ["मुंबई", "कोलकाता", "नई दिल्ली", "चेन्नई"],
    answer: 2,
    explanation: "संसद भवन नई दिल्ली में है।"
  },
  {
    question: "‘माई एक्सपेरिमेंट्स विद ट्रूथ’ किसकी आत्मकथा है?",
    options: ["नेहरू", "गांधीजी", "पटेल", "राजेन्द्र प्रसाद"],
    answer: 1,
    explanation: "यह महात्मा गांधी की आत्मकथा है।"
  },
  {
    question: "अगर एक घोड़ा चार पैरों पर खड़ा है, तो दो घोड़े कितने पैरों पर खड़े होंगे?",
    options: ["6", "8", "4", "12"],
    answer: 1,
    explanation: "2 घोड़े = 2×4 = 8 पैर।"
  },
  {
    question: "यदि B = 2 और D = 4, तो Z = ?",
    options: ["24", "25", "26", "27"],
    answer: 2,
    explanation: "Z अंग्रेजी वर्णमाला का 26वां अक्षर है।"
  },
  {
    question: "लाल किले का निर्माण किसने कराया था?",
    options: ["अकबर", "जहांगीर", "शाहजहां", "औरंगजेब"],
    answer: 2,
    explanation: "लाल किला शाहजहां द्वारा बनवाया गया था।"
  },
  {
    question: "WHO का पूरा नाम क्या है?",
    options: ["World Hope Organization", "World Health Organization", "World Human Org", "None"],
    answer: 1,
    explanation: "WHO = World Health Organization।"
  },
  {
    question: "‘जय हिंद’ नारा किसने दिया?",
    options: ["नेहरू", "सुभाष चंद्र बोस", "गांधी", "भगत सिंह"],
    answer: 1,
    explanation: "‘जय हिंद’ नारा नेताजी सुभाष चंद्र बोस ने दिया।"
  },
  {
    question: "5 किलो = ? ग्राम",
    options: ["500", "5000", "50", "50000"],
    answer: 1,
    explanation: "1 किलो = 1000 ग्राम, तो 5×1000 = 5000 ग्राम।"
  },
  {
    question: "यदि 8 × 2 = 16, तो 8 × 4 = ?",
    options: ["24", "30", "32", "36"],
    answer: 2,
    explanation: "8×4 = 32।"
  },
  {
    question: "दुनिया का सबसे बड़ा महाद्वीप कौन सा है?",
    options: ["अफ्रीका", "एशिया", "यूरोप", "ऑस्ट्रेलिया"],
    answer: 1,
    explanation: "एशिया सबसे बड़ा महाद्वीप है।"
  },
  {
    question: "हवा में सबसे अधिक कौन सी गैस होती है?",
    options: ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "हाइड्रोजन", "नाइट्रोजन"],
    answer: 3,
    explanation: "हवा में लगभग 78% नाइट्रोजन होती है।"
  },
  {
    question: "समुंदर का खारा पानी मीठा कैसे किया जाता है?",
    options: ["उबालकर", "छानकर", "वाष्पीकरण से", "बर्फ जमाकर"],
    answer: 2,
    explanation: "वाष्पीकरण से पानी मीठा किया जाता है।"
  },
  {
    question: "कंप्यूटर का फुल फॉर्म क्या है?",
    options: ["Common Operating Machine", "Computer", "Central Office Machine", "None"],
    answer: 0,
    explanation: "C.O.M.P.U.T.E.R – Common Operating Machine Purposely Used for Technological and Educational Research"
  },
  {
    question: "सौरमंडल का सबसे गर्म ग्रह कौन है?",
    options: ["मंगल", "शुक्र", "पृथ्वी", "बुध"],
    answer: 1,
    explanation: "शुक्र ग्रह सबसे गर्म है।"
  },
  {
    question: "‘एकता में बल है’ – यह किस प्रकार का वाक्य है?",
    options: ["लोकोक्ति", "समाचार", "आदेश", "शब्दार्थ"],
    answer: 0,
    explanation: "यह एक प्रसिद्ध लोकोक्ति है।"
  },
  {
    question: "क्या कंप्यूटर खुद निर्णय ले सकता है?",
    options: ["हाँ", "नहीं", "कभी-कभी", "सिर्फ सॉफ्टवेयर से"],
    answer: 1,
    explanation: "कंप्यूटर इंसानों जैसा खुद निर्णय नहीं ले सकता।"
  },
  {
    question: "NDA का पूरा नाम क्या है?",
    options: ["National Duty Academy", "National Defense Academy", "New Delhi Authority", "None"],
    answer: 1,
    explanation: "NDA = National Defense Academy।"
  },
  {
    question: "हिंद महासागर में सबसे बड़ा द्वीप कौन सा है?",
    options: ["श्रीलंका", "मालदीव", "मेडागास्कर", "अंडमान"],
    answer: 2,
    explanation: "मेडागास्कर हिंद महासागर का सबसे बड़ा द्वीप है।"
  },
  {
    question: "भारत का सबसे लंबा नदी पुल कौन सा है?",
    options: ["ब्रह्मपुत्र पुल", "महात्मा गांधी सेतु", "भूपेन हजारिका सेतु", "राजीव सेतु"],
    answer: 2,
    explanation: "भूपेन हजारिका सेतु भारत का सबसे लंबा पुल है।"
  },
  {
    question: "हवा महल किस शहर में है?",
    options: ["जयपुर", "उदयपुर", "जोधपुर", "दिल्ली"],
    answer: 0,
    explanation: "हवा महल राजस्थान के जयपुर शहर में स्थित है।"
  },
  {
    question: "सौरमंडल का सबसे बड़ा ग्रह कौन है?",
    options: ["पृथ्वी", "मंगल", "बृहस्पति", "शनि"],
    answer: 2,
    explanation: "बृहस्पति ग्रह सबसे बड़ा है।"
  },
  {
    question: "दुनिया की सबसे ऊँची पर्वत चोटी कौन सी है?",
    options: ["K2", "माउंट एवरेस्ट", "कंचनजंघा", "नंदा देवी"],
    answer: 1,
    explanation: "माउंट एवरेस्ट दुनिया की सबसे ऊँची चोटी है।"
  },
  {
    question: "स्वतंत्रता संग्राम के नायक 'भगत सिंह' का जन्म कब हुआ?",
    options: ["23 मार्च 1907", "28 सितम्बर 1907", "15 अगस्त 1908", "2 अक्टूबर 1905"],
    answer: 1,
    explanation: "भगत सिंह का जन्म 28 सितम्बर 1907 को हुआ था।"
  },
  {
    question: "भारत का संविधान कब लागू हुआ?",
    options: ["15 अगस्त 1947", "26 जनवरी 1950", "26 नवम्बर 1949", "30 जनवरी 1950"],
    answer: 1,
    explanation: "संविधान 26 जनवरी 1950 को लागू हुआ।"
  },
  {
    question: "एक दर्जन में कितने आइटम होते हैं?",
    options: ["6", "10", "12", "24"],
    answer: 2,
    explanation: "1 दर्जन = 12 आइटम।"
  },
  {
    question: "भारत में कितने केंद्र शासित प्रदेश हैं (2024 तक)?",
    options: ["5", "6", "7", "8"],
    answer: 3,
    explanation: "भारत में वर्तमान में 8 केंद्र शासित प्रदेश हैं।"
  },
  {
    question: "पानी का रासायनिक सूत्र क्या है?",
    options: ["CO2", "O2", "H2O", "NaCl"],
    answer: 2,
    explanation: "H2O पानी का रासायनिक सूत्र है।"
  },
  {
    question: "भारत के पहले उप-प्रधानमंत्री कौन थे?",
    options: ["राजेन्द्र प्रसाद", "सरदार पटेल", "नेहरू", "लाल बहादुर शास्त्री"],
    answer: 1,
    explanation: "सरदार वल्लभभाई पटेल पहले उप-प्रधानमंत्री थे।"
  },
  {
    question: "Google किस देश की कंपनी है?",
    options: ["भारत", "चीन", "अमेरिका", "जापान"],
    answer: 2,
    explanation: "Google अमेरिका की कंपनी है।"
  },
  {
    question: "RAM का फुल फॉर्म क्या है?",
    options: ["Read Around Memory", "Random Access Memory", "Run And Manage", "None"],
    answer: 1,
    explanation: "RAM = Random Access Memory"
  },
  {
    question: "RGB में R का मतलब क्या होता है?",
    options: ["Rotate", "Red", "Read", "Rate"],
    answer: 1,
    explanation: "RGB: Red, Green, Blue"
  },
  {
    question: "कंप्यूटर का दिमाग किसे कहते हैं?",
    options: ["मॉनिटर", "माउस", "CPU", "कीबोर्ड"],
    answer: 2,
    explanation: "CPU को कंप्यूटर का दिमाग कहा जाता है।"
  },
  {
    question: "स्मार्टफोन में इस्तेमाल होने वाला OS कौन सा है?",
    options: ["Windows", "Android", "Linux", "macOS"],
    answer: 1,
    explanation: "Android स्मार्टफोन के लिए OS है।"
  },
  {
    question: "SI unit of Force क्या है?",
    options: ["Watt", "Pascal", "Joule", "Newton"],
    answer: 3,
    explanation: "Force की SI Unit Newton होती है।"
  },
  {
    question: "भारत में कितने राज्य हैं (2024 तक)?",
    options: ["28", "29", "30", "27"],
    answer: 0,
    explanation: "2024 तक भारत में 28 राज्य हैं।"
  },
  {
    question: "ताजमहल किसने बनवाया?",
    options: ["अकबर", "शाहजहाँ", "जहाँगीर", "औरंगजेब"],
    answer: 1,
    explanation: "ताजमहल शाहजहाँ ने बनवाया।"
  },
  {
    question: "‘जन-गण-मन’ किसने लिखा?",
    options: ["महात्मा गांधी", "रविन्द्रनाथ टैगोर", "सुभाष चंद्र बोस", "बाल गंगाधर तिलक"],
    answer: 1,
    explanation: "जन गण मन रविन्द्रनाथ टैगोर ने लिखा।"
  },
  {
    question: "100 पैसे = कितने रुपये?",
    options: ["10", "1", "0.1", "1000"],
    answer: 1,
    explanation: "100 पैसे = 1 रुपया।"
  },
  {
    question: "भारत का सबसे बड़ा राज्य (क्षेत्रफल) कौन सा है?",
    options: ["उत्तर प्रदेश", "मध्य प्रदेश", "राजस्थान", "बिहार"],
    answer: 2,
    explanation: "राजस्थान सबसे बड़ा राज्य है।"
  },
  {
    question: "एक leap year में कितने दिन होते हैं?",
    options: ["365", "366", "364", "360"],
    answer: 1,
    explanation: "लीप वर्ष में 366 दिन होते हैं।"
  },
  {
    question: "कंप्यूटर में CTRL + C क्या करता है?",
    options: ["कट", "कॉपी", "पेस्ट", "क्लोज़"],
    answer: 1,
    explanation: "CTRL + C का मतलब होता है कॉपी करना।"
  },
  {
    question: "ISRO किस देश की स्पेस एजेंसी है?",
    options: ["भारत", "रूस", "चीन", "अमेरिका"],
    answer: 0,
    explanation: "ISRO भारत की स्पेस एजेंसी है।"
  },
  {
    question: "भारत में कुल कितनी भाषाएं संविधान में मान्यता प्राप्त हैं?",
    options: ["22", "18", "25", "15"],
    answer: 0,
    explanation: "संविधान में 22 भाषाएं मान्यता प्राप्त हैं।"
  },
  {
    question: "किस ग्रह के सबसे अधिक चंद्रमा हैं?",
    options: ["शनि", "बृहस्पति", "मंगल", "पृथ्वी"],
    answer: 1,
    explanation: "बृहस्पति के सबसे अधिक चंद्रमा हैं।"
  },
  {
    question: "ICU का फुल फॉर्म क्या है?",
    options: ["Instant Care Unit", "Intensive Care Unit", "International Care Unit", "None"],
    answer: 1,
    explanation: "ICU = Intensive Care Unit"
  },
  {
    question: "सबसे पहला मोबाइल फोन कब बना था?",
    options: ["1983", "1990", "2000", "2010"],
    answer: 0,
    explanation: "पहला मोबाइल फोन 1983 में बना था।"
  },
  {
    question: "ATM का फुल फॉर्म क्या है?",
    options: ["All Time Money", "Any Time Money", "Automated Teller Machine", "Automatic Time Machine"],
    answer: 2,
    explanation: "ATM = Automated Teller Machine"
  }
  
  
  // और प्रश्न यहाँ जोड़ें
];

let current = 0;
let score = 0;
let timer;
let timeLeft = 30;
let shuffled = [];

window.onload = () => {
  shuffled = [...questions].sort(() => 0.5 - Math.random());
  loadQuestion();
};

function loadQuestion() {
  clearInterval(timer);
  timeLeft = 30;
  document.getElementById("timer").textContent = `⏳ समय: ${timeLeft}s`;
  timer = setInterval(updateTimer, 1000);

  const q = shuffled[current];
  document.getElementById("question").textContent = `Q${current + 1}. ${q.question}`;

  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  q.options.forEach((opt, index) => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.className = "option-btn";
    btn.onclick = () => checkAnswer(index);
    optionsDiv.appendChild(btn);
  });

  document.getElementById("explanation").textContent = "";
  document.getElementById("result").textContent = "";
}

function updateTimer() {
  timeLeft--;
  document.getElementById("timer").textContent = `⏳ समय: ${timeLeft}s`;
  if (timeLeft === 0) {
    clearInterval(timer);
    showExplanation(-1);
  }
}

function checkAnswer(index) {
  clearInterval(timer);
  const q = shuffled[current];
  const buttons = document.querySelectorAll(".option-btn");

  if (index === q.answer) {
    score += 2;
    buttons[index].classList.add("correct");
    setTimeout(nextQuestion, 800);
  } else {
    score -= 0.25;
    buttons[index].classList.add("wrong");
    buttons[q.answer].classList.add("correct");
    showExplanation(index);
  }

  buttons.forEach(btn => btn.disabled = true);
}

function showExplanation(selected) {
  const q = shuffled[current];
  document.getElementById("explanation").textContent = `📘 स्पष्टीकरण: ${q.explanation}`;
}

function nextQuestion() {
  if (current < shuffled.length - 1) {
    current++;
    loadQuestion();
  } else {
    showResult();
  }
}

function prevQuestion() {
  if (current > 0) {
    current--;
    loadQuestion();
  }
}

function showResult() {
  document.getElementById("question").textContent = "🎉 क्विज़ समाप्त!";
  document.getElementById("options").innerHTML = "";
  document.getElementById("explanation").textContent = "";
  document.getElementById("timer").textContent = "";

  const percentage = (score / (shuffled.length * 2)) * 100;
  let remark = "";
  if (percentage < 50) remark = "😓 कमजोर प्रदर्शन, सुधार की आवश्यकता है";
  else if (percentage < 70) remark = "🙂 औसत, बेहतर कर सकते हो";
  else if (percentage < 90) remark = "😀 अच्छा, थोड़ी और मेहनत करें";
  else remark = "🌟 उत्कृष्ट प्रदर्शन!";

  document.getElementById("result").textContent = `अंक: ${score.toFixed(2)} / ${shuffled.length * 2} → ${remark}`;
}

function restartQuiz() {
  current = 0;
  score = 0;
  shuffled = [...questions].sort(() => 0.5 - Math.random());
  loadQuestion();
}

const toggle = document.getElementById("darkModeToggle");
toggle.addEventListener("change", () => {
  document.body.classList.toggle("dark-mode", toggle.checked);
});
