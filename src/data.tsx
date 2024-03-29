export type Item = {
  kannada: string;
  telugu: string;
};

export const dataFromWord = [
  { telugu: "నేను", kannada: "నాను" },
  { telugu: "ననుు", kannada: "ననునుు" },
  { telugu: "నాకు", kannada: "ననగె" },
  { telugu: "నాది", kannada: "ననుదు" },
  { telugu: "నా యొక్క", kannada: "నను" },
  { telugu: "నేనే", kannada: "నానే" },
  { telugu: "మేము", kannada: "నావు" },
  { telugu: "మమమల్ను", kannada: "నమమనుు" },
  { telugu: "మాకు", kannada: "నమగె" },
  { telugu: "మాది", kannada: "నమమదు" },
  { telugu: "మా యొక్క", kannada: "నమమ" },
  { telugu: "మేమే", kannada: "నావే" },
  { telugu: "నువుు", kannada: "నీను" },
  { telugu: "నినుు", kannada: "నినునుు" },
  { telugu: "నీకు", kannada: "నినగె" },
  { telugu: "నీది", kannada: "నినుదు" },
  { telugu: "నీ యొక్క", kannada: "నిను" },
  { telugu: "నువేు", kannada: "నీనే" },
  { telugu: "అతను", kannada: "ఆతను" },
  { telugu: "అతనిని", kannada: "ఆతననుు" },
  { telugu: "అతనికి", kannada: "ఆతనిగె" },
  { telugu: "అతనిది", kannada: "ఆతనదు" },
  { telugu: "అతని యొక్క", kannada: "అవన" },
  { telugu: "అతనే", kannada: "తానే ఆతనే" },
  { telugu: "ఆమె", kannada: "ఆకె అవళు" },
  { telugu: "ఆమెను", kannada: "ఆకెయనుు" },
  { telugu: "ఆమెకు", kannada: "ఆకెగె" },
  { telugu: "ఆమెది", kannada: "ఆకెయదు" },
  { telugu: "ఆమె యొక్క", kannada: "అవళ" },
  { telugu: "ఆమే", kannada: "అవళే" },
  { telugu: "అది", kannada: "అదు" },
  { telugu: "దానిని", kannada: "అదర్దు" },
  { telugu: "దానికి", kannada: "అదకె" },
  { telugu: "దానిది", kannada: "అదర్దు" },
  { telugu: "దాని యొక్క", kannada: "అదకెక" },
  { telugu: "అదే", kannada: "అదే" },
  { telugu: "వారు", kannada: "అవరు" },
  { telugu: "వారిని", kannada: "అవర్నుు" },
  { telugu: "వారికి", kannada: "అవరిగె" },
  { telugu: "వారిది", kannada: "అవర్దు" },
  { telugu: "వారి యొక్క", kannada: "అవరిగె సేరిదు" },
  { telugu: "వారే", kannada: "అవరే" },
  { telugu: "అర్థంచేసుకో", kannada: "అర్థ మాడికొ." },
  { telugu: "అముమ", kannada: "మారు." },
  { telugu: "ఆలోచంచు", kannada: "ఆలోచసు." },
  { telugu: "ఆపు", kannada: "నిల్నలసు." },
  { telugu: "ఇవుు", kannada: "కొడు." },
  { telugu: "ఉండు", kannada: "ఇరు." },
  { telugu: "ఎకుక", kannada: "హత్తత." },
  { telugu: "క్లువు", kannada: "భేటి." },
  { telugu: "కొను", kannada: "కొండుకొ." },
  { telugu: "కోయు", kannada: "కుయ్దు." },
  { telugu: "చదువు", kannada: "ఓదు." },
  { telugu: "చూడు", kannada: "నోడు." },
  { telugu: "చెపుు", kannada: "హేళు." },
  { telugu: "చేయు", kannada: "మాడు." },
  { telugu: "తిను", kannada: "తినుు." },
  { telugu: "తీసుకో", kannada: "తెగెదుకో." },
  { telugu: "తెరువు", kannada: "తెరె." },
  { telugu: "త్రాగు", kannada: "కుడి." },
  { telugu: "నిద్రపో", kannada: "నిద్దు మాడు." },
  { telugu: "నవుు", kannada: "నగు." },
  { telugu: "నిలబడు", kannada: "నింత్యో." },
  { telugu: "పంచు", kannada: "హంచు." },
  { telugu: "పంపు", kannada: "క్ళుహిసు." },
  { telugu: "పట్టటకో", kannada: "హిడిదుకో" },
  { telugu: "పరిగెత్తత", kannada: "ఓడు." },
  { telugu: "పాడు", kannada: "డు." },
  { telugu: "పిలువు", kannada: "క్రె." },
  { telugu: "పెట్టట", kannada: "ఇడు." },
  { telugu: "మాట్లలడు", kannada: "మాతాడు." },
  { telugu: "మూయు", kannada: "ముచుు." },
  { telugu: "మేలోక", kannada: "ఎచెుత్యక." },
  { telugu: "రా", kannada: "బా." },
  { telugu: "విడిచపెట్టట", kannada: "బిట్టటబిడు." },
  { telugu: "విను", kannada: "కేళు." },
  { telugu: "వెళుు", kannada: "హోగు." },
  { telugu: "వ్రాయు", kannada: "బరె." },
  { telugu: "నువుు అర్థంచేసుకో", kannada: "నీను అర్థమాడికొ." },
  { telugu: "నువుు అముమ", kannada: "నీను మారు." },
  { telugu: "నువుు ఆలోచంచు", kannada: "నీను ఆలోచసు." },
  { telugu: "నువుు ఆపు", kannada: "నీను నిల్నలసు." },
  { telugu: "నువుు ఇవుు", kannada: "నీను కొడు." },
  { telugu: "నువుు ఉండు", kannada: "నీను ఇరు." },
  { telugu: "నువుు ఎకుక", kannada: "నీను హత్తత." },
  { telugu: "నువుు క్లువు", kannada: "నీను భేటి." },
  { telugu: "నువుు కొను", kannada: "నీను కొండుకొ." },
  { telugu: "నువుు కోయు", kannada: "నీను కుయ్దు." },
  { telugu: "నువుు చదువు", kannada: "నీను ఓదు." },
  { telugu: "నువుు చూడు", kannada: "నీను నోడు." },
  { telugu: "నువుు చెపుు", kannada: "నీను హేళు." },
  { telugu: "నువుు చేయు", kannada: "నీను మాడు." },
  { telugu: "నువుు తిను", kannada: "నీను తినుు." },
  { telugu: "వెళ్ళు", kannada: "హోగు" },
  { telugu: "పాడు", kannada: "డు" },
  { telugu: "మాట్లాడు", kannada: "మాతాడు" },
  { telugu: "కొను", kannada: "కొండు కో" },
  { telugu: "తిను", kannada: "తినున" },
  { telugu: "చద్దవ్వ", kannada: "ఓద్ద" },
  { telugu: "త్రాగు", kannada: "కడి" },
  { telugu: "నిద్రంచు", kannada: "నిద్రస్" },
  { telugu: "ఇచుి", kannada: "కొడు" },
  { telugu: "చెల్ాంచు", kannada: "సల్ాస్" },
  { telugu: "నుండి", kannada: "యుంద" },
  { telugu: "కు/ కి", kannada: "గె" },
  { telugu: "లో", kannada: "అల్లా యల్లా / దల్లా" },
  { telugu: "మీద", kannada: "మేల్మ" },
  { telugu: "తో", kannada: "ఒుందిగె" },
  { telugu: "వదద", kannada: "బళి" },
  { telugu: "తరువాత", kannada: "నుంతర" },
  { telugu: "ముందు", kannada: "ముంద్ద" },
  { telugu: "కొరకు/ కోసుం", kannada: "క్లకగి/గాగి" },
  { telugu: "గురుంచి", kannada: "కురతు/బగెగ" },
  { telugu: "ఎదురుగా", kannada: "ఎదురనల్లా" },
  { telugu: "అవతల", kannada: "ఆచె" },
  { telugu: "వరకు", kannada: "వరెగె" },
  { telugu: "వైపు", kannada: "క్డెగె" },
  { telugu: "ప్రక్కన", kannada: "ప్క్కదల్లా" },
  { telugu: "వెనక్", kannada: "హిుంభాగ్" },
  { telugu: "క్రుంద", kannada: "క్కళగె" },
  { telugu: "దగ్గర", kannada: "హత్తతర" },
  { telugu: "వెళ్ళగలను", kannada: "హోగ బల్లెను" },
  { telugu: "వెళ్ళలేను", kannada: "హోగ లారెను" },
  { telugu: "వెళ్ళగలిగాను", kannada: "హోగక్యాయితు." },
  { telugu: "వెళ్ళలేకపోయాను", kannada: "హోగక్యాగలిలె." },
  { telugu: "వెళ్ళవచ్చు", kannada: "హోగబహుదు" },
  { telugu: "వెళ్ళకపోవచ్చు", kannada: "హోగ లారద ే ఇరబహుదు." },
  { telugu: "వెళ్ళళ ఉండవచ్చు", kannada: "హోగ (ఇ)రబహుదు" },
  { telugu: "వెళ్ళళ ఉండకపోవచ్చు", kannada: "హోగ దేనే ఇరబహుదాగతుత" },
  { telugu: "వెళ్లళలి", kannada: "హోగబేకు" },
  { telugu: "వెళ్ళకూడదు", kannada: "హోగబారదు" },
  { telugu: "వెళుళతూ ఉండేవాడిని", kannada: "హోగాతయిద్దె." },
  { telugu: "వెళ్లతను", kannada: "హోగుత్తతనె" },
  { telugu: "తెలుగులో", kannada: "క్ననడంలో" },
  { telugu: "వెళ్ళ---గానే", kannada: "హోద--- కూడలే," },
  { telugu: "వెళ్ళళన---అప్పుడు", kannada: "హో---దాగ," },
  { telugu: "వెళ్ళళన ---తర్వాత", kannada: "హోద---నంతర," },
  { telugu: "వెళ్ళళ ---మందు", kannada: "హోగువ -- మనన /మంచె" },
  { telugu: "వెళ్ళళన-అప్ుటికి", kannada: "హో--దరూ," },
  { telugu: "వెళ్ళళతే-- అట్లయితే", kannada: "హోగి---ఇదదరె," },
  { telugu: "వెళ్ళళ ---కూడా", kannada: "హోగి---కూడ" },
  { telugu: "వెళ్ళళనందు---వల్ల", kannada: "హోగి---ఇదదరింద," },
  { telugu: "వెళ్ళళం---అంతవరకు", kannada: "హొగువ---వరెగూ" },
  { telugu: "వెళ్తూ---ఉండగా", kannada: "హొగు---తిూదాదగ," },
  { telugu: "వెళ్ళళతే---తప్ు", kannada: "హోదరె---హొరతు," },
  { telugu: "వెళ్ళళన---అప్పుడల్లల", kannada: "హో---దాగల్లల్లల," },
  { telugu: "నేను పంపు తున్నాను.", kannada: "న్నను కళుహిసుత్తిద్దేనె." },
  { telugu: "మేము పంపు తున్నాము.", kannada: "న్నవు కళుహిసుత్తిద్దేవె." },
  { telugu: "నువుు పంపు తున్నావు.", kannada: "నీను కళుహిసుత్తిరువె." },
  { telugu: "అతను పంపు తున్నాడు.", kannada: "అవను కళుహిసుత్తిద్దేనె ." },
  { telugu: "ఆమె పంపు తూ ఉంది.", kannada: "అవళు కళుహిసుత్తిద్దేళె." },
  { telugu: "వారు పంపు తున్నారు.", kannada: "అవరు కళుహిసుత్తిద్దేరె." },
  { telugu: "నేను అముుతున్నాను", kannada: "న్నను మారుత్తిద్దేనె." },
  { telugu: "మేము అముుతున్నాము", kannada: "న్నవు మారుత్తిద్దేవె." },
  { telugu: "నువుు అముుతున్నావు", kannada: "నీను మారుత్తిరువె." },
  { telugu: "అతను అముుతున్నాడు", kannada: "అవను మారుత్తిద్దేనె." },
  { telugu: "ఆమె అముుతూ ఉంది", kannada: "అవళు మారుత్తిద్దేళె." },
  { telugu: "వారు అముుతున్నారు", kannada: "అవరు మారుత్తిద్దేరె." },
  { telugu: "నేను నేరుుకంటున్నాను", kannada: "న్నను కలియుత్తిద్దేనె." },
  { telugu: "మేము నేరుుకంటున్నాము", kannada: "న్నవు కలియుత్తిద్దేవె." },
  { telugu: "నువుు నేరుుకంటున్నావు", kannada: "నీను కలియుత్తిరువె." },
  { telugu: "అతను నేరుుకంటున్నాడు", kannada: "అవను కలియుత్తిద్దేనె." },
  { telugu: "ఆమె నేరుుకంటూఉంది", kannada: "అవళు కలియుత్తిద్దేళె." },
  { telugu: "వారు నేరుుకంటున్నారు", kannada: "అవరు కలియుత్తిద్దేరె." },
  { telugu: "నేను పంపా ను", kannada: "న్నను కళుహిసిదె." },
  { telugu: "మేము పంపా ము", kannada: "న్నవు కళుహిసిదెవు." },
  { telugu: "నువుు పంపా వు", kannada: "నీను కళుహిసిదె." },
  { telugu: "అతను పంపాడు", kannada: "అవను కళుహిసిదను." },
  { telugu: "ఆమె పంపిం ది", kannada: "అవళు కళుహిసిదళు." },
  { telugu: "వారు పంపా రు", kannada: "అవరు కళుహిసిదరు." },
  { telugu: "నేను అమాును", kannada: "న్నను మారిదె." },
  { telugu: "మేము అమాుము", kannada: "న్నవు మారిదెవు." },
  { telugu: "నువుు అమాువు", kannada: "నీను మారిదె." },
  { telugu: "అతను అమాుడు", kannada: "అవను మారిదను." },
  { telugu: "ఆమె అమ్ుంది", kannada: "అవళు మారిదళు." },
  { telugu: "వారు అమాురు", kannada: "అవరు మారిదరు." },
  { telugu: "నేను నేరుుకన్నాను", kannada: "న్నను కలితుకండె." },
  { telugu: "మేము నేరుుకన్నాము", kannada: "న్నవు కలితుకండెవు." },
  { telugu: "నువుు నేరుుకన్నావు", kannada: "నీను కలితుకండె." },
  { telugu: "అతను నేరుుకన్నాడు", kannada: "అవను కలితుకండను." },
  { telugu: "ఆమె నేరుుకంది", kannada: "అవళు కలితుకండళు." },
  { telugu: "వారు నేరుుకన్నారు", kannada: "అవరు కలితుకండరు." },
  { telugu: "నేను పంపు తాను", kannada: "న్నను కళుహిసుత్తినె." },
  { telugu: "మేము పంపు తాము", kannada: "న్నవు కళుహిసుత్తివె." },
  { telugu: "నువుు పంపు తావు", kannada: "నీను కళుహిసువె." },
  { telugu: "అతను పంపు తాడు", kannada: "అవను కళుహిసుతాినె." },
  { telugu: "ఆమె పంపు తుంది", kannada: "అవళు కళుహిసుతాిళె." },
  { telugu: "వారు పంపు తారు", kannada: "అవరు కళుహిసుతాిరె." },
  { telugu: "నేను అముుతాను", kannada: "న్నను మారుత్తినె." },
  { telugu: "మేము అముుతాము", kannada: "న్నవు మారుత్తివె." },
  { telugu: "నువుు అముుతావు", kannada: "నీను మారువె." },
  { telugu: "అతను అముుతాడు", kannada: "అవను మారుతాినె." },
  { telugu: "ఆమె అముు తుంది", kannada: "అవళు మారుతాిళె." },
  { telugu: "వారు అముుతారు", kannada: "అవరు మారుతాిరె.." },
  { telugu: "నేను కలుసాిను", kannada: "న్నను భేటియాగుత్తినె." },
  { telugu: "మేము కలుసాిము", kannada: "న్నవు భేటియాగుత్తివె." },
  { telugu: "నువుు కలుసాివు", kannada: "నీను భేటియాగువె." },
  { telugu: "అతను కలుసాిడు", kannada: "అవను భేటియాగుతాినె." },
  { telugu: "ఆమె కలుసుింది", kannada: "అవళు భేటియాగుతాిళె." },
  { telugu: "వారు కలుసాిరు", kannada: "అవరు భేటియాగుతాిరె." },
  { telugu: "నీ వయసు ఎంత?", kannada: "నిన్న వయసుు ఎష్టు?" },
  {
    telugu: "నా వయసు 22.",
    kannada: "(ఇరవై రండు) న్న్న వయసుు 22 (ఇప్పత్తెరడు).",
  },
  { telugu: "నీ పేరు ఏమిటి?", kannada: "నిన్న హెసరు ఏను ?" },
  { telugu: "నా పేరు కిరణ్.", kannada: "న్న్న హెసరు కిరణ్." },
  { telugu: "నీ యొక్క బరువు ఎంత?", kannada: "నిన్న తూక్ ఎష్టు?" },
  {
    telugu: "నా యొక్క బరువు 55 (యాభై ఐదు) కిలోలు.",
    kannada: "న్న్న తూక్ 55 (ఐవత్తతెదు) కిలోగళు.",
  },
  { telugu: "నీ యొక్క హోదా ఏమిటి?", kannada: "నిన్న ఉద్యోగ ఏను?" },
  { telugu: "నేను క్ంపెనీకి మేనేజర్.", kannada: "నాను క్ంపెనిగె మేనేజర్." },
  {
    telugu: "నువుు ఎక్కడ కూరగాయలు కంటావు?",
    kannada: "నీను ఎలిల తరకరిగళు కళుావె ?",
  },
  {
    telugu: "నేను మారేకట్లల కూరగాయలు కంటాను.",
    kannada: "నాను మారకటనలిల తరకరిగళు కళుాత్తెనె.",
  },
  { telugu: "నీ ఇలుల ఎక్కడ వుంది?", kannada: "నిన్న మనె ఎలిల ఇదె?" },
  { telugu: "నా ఇలుల ముంబాయిలో ఉంది.", kannada: "న్న్న మనె ముంబైన్లిల ఇదె." },
  { telugu: "మీ ఆఫీసు ఎక్కడ ఉంది?", kannada: "నిమమ ఆఫీస్ ఎలిల ఇదె?" },
  {
    telugu: "మా ఆఫీసు ప్క్క వీధిలో ఉంది.",
    kannada: "న్మమ ఆఫీస్ ప్క్కద బీదియలిల ఇదె.",
  },
  { telugu: "రైలేు నిల్యం ఎక్కడ వుంది?", kannada: "రైలేు నిల్య ఎలిల ఇదె?" },
  {
    telugu: "రైలేునిల్యం (రైలేునేుషన్) ప్క్క వీధిలో వుంది.",
    kannada: "రైలేు నిల్య (రైలేు స్టుషన్) ప్క్కద బీదియలిల ఇదె.",
  },
  { telugu: "మన్ జాత్త పిత ఎవరు?", kannada: "న్మమ ద్దశపిత యారు?" },
  { telugu: "మన్ జాత్త పిత మతమగాంధీ.", kannada: "న్మమ ద్దశపిత మతమగాంధీ." },
  { telugu: "ఎవరు కఫీని తయారుచేశారు?", kannada: "యారు కఫియనున తయారిసిదరు?" },
  { telugu: "అమమ కఫీని తయారుచేశారు.", kannada: "తాయి కఫియనున తయారిసిదరు." },
  { telugu: "ఎవరు వంట చేశారు?", kannada: "యారు అడిగె మాడిదరు?" },
  { telugu: "నేను వంట చేశాను.", kannada: "నాను అడిగె మాడిదె." },
  {
    telugu: "ఈ ప్నిని సమరావంతంగా ఎవరు చేస్యెరు?",
    kannada: "ఈ కెల్సవనున సమరానీయవాగ యారు మాడుతాెర?",
  },
  {
    telugu: "ఆమె ఈ ప్నిని సమరావంతంగా చేసుెంది.",
    kannada: "ఆకె ఈ కెల్సవనున సమరానీయవాగ మాడుతాెళె.",
  },
  {
    telugu: "మీ ఇంటిలో ఎవరు ఎకుకవ సంపాదిసుెనానరు?",
    kannada: "నిమమ మనెయలిల యారు హెచ్చు సంపాదిసుత్తెదాదర ?",
  },
  {
    telugu: "నువుు న్నున ఎందుకు అరాంచేసుకోలేదు?",
    kannada: "నీను న్న్ననున ఏకె అరా మాడికళాలిల్ల?",
  },
  { telugu: "నువుు నిజం చెప్పడం లేదు.", kannada: "నీను నిజ హేళుతాె ఇల్ల." },
  {
    telugu: "నువుు అక్కడికి ఎందుకు వెళాావు?",
    kannada: "నీను అలిలగె ఏకె హోదె?",
  },
  {
    telugu: "నేను అక్కడికి నా మిత్రుడిన క్లువడానికి వెళాాను.",
    kannada: "నాను అలిలగె న్న్న మిత్రన్నున భేటియాగలు హోదె.",
  },
  {
    telugu: "నువుు ఎందుకు పేప్రిన చించ్చవు?",
    kannada: "నీను ఏకె పేప్రనున హ్రిదె?",
  },
  {
    telugu: "అది ఒక్ ప్నికిరాని పేప్రు.",
    kannada: "అదు ఒందు కెల్సకెక బారద పేప్రు.",
  },
  {
    telugu: "ఎందుకు నీ సమయానిన వృధ్య చేసుకుంటునానవు?",
    kannada: "ఏకె నిన్న సమయవనున వోరా మాడికళుాత్తెరువె?",
  },
  {
    telugu: "ఈ ప్నికి ఎకుకవ సమయం తీసుకుంటున్నది.",
    kannada: "ఈ కెల్సకెక హెచిున్ సమయ త్తగెదుకళుాత్తెదె.",
  },
  { telugu: "ఆమె ఎందుకు వసోెంది?", kannada: "ఆకె ఏకె బరుత్తెదాదళె?" },
  { telugu: "మీ నాన్న ఎలా వునానరు?", kannada: "నిమమ తందె హేగె ఇదాదర?" },
  { telugu: "ఆయన్ బాగునానరు.", kannada: "అవరు చెనానగదాదర." },
  { telugu: "నువుు ఎలా వునానవు?", kannada: "నీను హేగె ఇరువె?" },
  { telugu: "నేను బాగునానను.", kannada: "నాను చెనానగద్దదనె." },
  { telugu: "మీ ఆరోగోం ఎలా వుంది?", kannada: "నిమమ ఆరోగో హేగె ఇదె?" },
  { telugu: "ప్రాులేదు.", kannada: "ప్రవాగల్ల." },
  {
    telugu: "నువుు వివానికి ఎలా వస్యెవు?",
    kannada: "నీను వివాహ్కెక హేగె బరువె?",
  },
  {
    telugu: "నేను నా భారోత వివానికి వస్యెను.",
    kannada: "నాను న్న్న హెండత్తయొందిగె వివాహ్కెక బరుత్తెనె.",
  },
  { telugu: "నేను ఎత్తుగా ఉన్నాన్న?", kannada: "న్నను ఎత్ురవాగి ఇరువెనే?" },
  {
    telugu: "అవును, నువుు ఎత్తుగా ఉన్నావు.",
    kannada: "హౌదు, నీను ఎత్ురవాగి ఇరువె .",
  },
  {
    telugu: "లేదు, నువుు ఎత్తుగా లేవు.",
    kannada: "ఇల్ల, నీను ఎత్ురవాగి ఇల్ల.",
  },
  {
    telugu: "నేను త్ప్పులు లేకుండా చదువుత్తన్నాన్న?",
    kannada: "న్నను త్ప్పుగళు ఇల్లదె ఓదుత్తురువెనే?",
  },
  {
    telugu: "అవును, నువుు త్ప్పులు లేకుండా చదువుత్తన్నావు.",
    kannada: "హౌదు, నీను త్ప్పుగళు ఇల్లదె ఓదుత్తురువే.",
  },
  {
    telugu: "లేదు, నువుు సరిగా చదువటుంలేదు.",
    kannada: "ఇల్ల, నీను సరియాగి ఓదుత్తుల్ల.",
  },
  {
    telugu: "నేను వేగుంగా చదువుత్తన్నాన్న?",
    kannada: "న్నను బేగ ఓదుత్తురువెనే",
  },
  { telugu: "ఇది నిజమా?", kannada: "ఇదు నిజవే?" },
  { telugu: "అవును, అది నిజుం.", kannada: "హౌదు, అదు నిజ." },
  { telugu: "లేదు, అది నిజుం కాదు.", kannada: "ఇల్ల, అదు నిజ అల్ల." },
  { telugu: "ఈరోజు వేడిగా ఉుందా?", kannada: "ఈ దిన్ బిసియాగి ఇదెయే?" },
  {
    telugu: "అవును, ఈ రోజు వేడిగా ఉుంది.",
    kannada: "హౌదు, ఈ దిన్ బిసియాగి ఇదె.",
  },
  {
    telugu: "లేదు, ఈ రోజు వేడిగా లేదు.",
    kannada: "ఇల్ల, ఈ దిన్ బిసియాగి అల్ల.",
  },
  { telugu: "ఇది చాలా ḅర్ఫదా?", kannada: "ఇదు త్తుంబ బెలేనె?" },
  { telugu: "అవును, ఇది ḅర్ఫదు.", kannada: "హౌదు, ఇదు త్తుంబ బెలె." },
  { telugu: "నువుు ప్రత్త రోజూ వసాువా?", kannada: "నీను ప్రత్తదిన్న బరువెయా?" },
  {
    telugu: "అవును, నేను ప్రత్త రోజూ వసాును.",
    kannada: "హౌదు, న్నను ప్రత్త దిన్న బరుతేునె",
  },
  {
    telugu: "లేదు, నేను ప్రత్తరోజూ రాను.",
    kannada: "ఇల్ల, న్నను ప్రత్తదిన్న బరువుదిల్ల.",
  },
  { telugu: "నీ దగగర పెనుా ఉుందా?", kannada: "నిన్ా హత్తుర పెనుా ఇదెయే?" },
  {
    telugu: "అవును, న్న దగగర పెనుా ఉుంది.",
    kannada: "హౌదు, న్న్ా హత్తుర పెనుా ఇదె",
  },
  {
    telugu: "లేదు, న్న దగగర పెనుా లేదు.",
    kannada: "ఇల్ల, న్న్ా హత్తుర పెనుా ఇల్ల.",
  },
  {
    telugu: "మీక ఎకెవ వివరాలు కావాలా?",
    kannada: "నిమ్గె హెచిచన్ వివరగళు బేకే?",
  },
  {
    telugu: "అవును, న్నక ఎకెవ వివరాలు కావాలి.",
    kannada: "హౌదు, న్న్గె హెచిచన్ వివరగళు బేక",
  },
  {
    telugu: "మ్న్ుం ఇుంట్టకి త్సళ్ుం వేశామా?",
    kannada: "న్నవు మ్నెగె బీగకిదెేవేయే?",
  },
  {
    telugu: "అవును, మ్న్ుం ఇుంట్టకి త్సళ్ుం వేశామ్మ.",
    kannada: "హౌదు, న్నవు మ్నెగె బీగకిదెవు.",
  },
  {
    telugu: "లేదు, మ్న్ుం ఇుంట్టకి త్సళ్ుం వేయలేదు.",
    kannada: "ఇల్ల, న్నవు మ్నెగె బీగకలిల్ల.",
  },
  {
    telugu: "అత్ను త్న్ చదువుని ప్యరిు చేశాడా?",
    kannada: "ఆత్ను త్న్ా ఓదనుా ప్యరిు మాడిదెనే?",
  },
  {
    telugu: "అవును, అత్ను త్న్ చదువుని ప్యరిు చేశాడు.",
    kannada: "హౌదు, ఆత్ను త్న్ా ఓదనుా ప్యరిు మాడిదను.",
  },
  {
    telugu: "లేదు, అత్ను త్న్ చదువుని ప్యరిు చేయలేదు.",
    kannada: "ఇల్ల, ఆత్ను త్న్ా ఓదనుా ప్యరిు మాడలిల్ల.",
  },
  {
    telugu: "ఆమె కారాక్రమ్ుంలో న్నటాుం చేసిుందా?",
    kannada: "ఆకె కారాక్రమ్దలిల న్నటా మాడిదళే?",
  },
  {
    telugu: "అవును, ఆమె కారాక్రమ్ుంలో న్నటాుం చేసిుంది.",
    kannada: "హౌదు, ఆకె కారాక్రమ్దలిల న్నటా మాడిదళు.",
  },
];

const dataFromTxtRaw = [
  "నేను",
  "నాను",
  "నాకు",
  "ననగె",
  "ననుు",
  "ననునుు",
  "నాది",
  "ననుదు",
  "నా యొక్క",
  "నను",
  "నేనే",
  "నానే",
  "మేము",
  "నావు",
  "మాకు",
  "నమగె",
  "మా యొక్క",
  "నమమ",
  "మమమల్ను",
  "నమమనుు",
  "మాది",
  "నమమదు",
  "మేమే",
  "నావే",
  "నువుు",
  "నీను",
  "నీకు",
  "నినగె",
  "నినుు",
  "నినునుు",
  "నీది",
  "నినుదు",
  "నీ యొక్క",
  "నిను",
  "అతను",
  "ఆతను",
  "అతనికి",
  "ఆతనిగె",
  "అతని యొక్క",
  "అవన",
  "నువేు",
  "నీనే",
  "అతనిని",
  "ఆతననుు",
  "అతనిది",
  "ఆతనదు",
  "అతనే",
  "తానే ఆతనే",
  "ఆమె",
  "ఆకె అవళు",
  "ఆమెకు",
  "ఆకెగె",
  "ఆమెను",
  "ఆకెయనుు",
  "ఆమెది",
  "ఆకెయదు",
  "ఆమే",
  "అవళే",
  "అది",
  "అదు",
  "ఆమె యొక్క",
  "అవళ",
  "దానిని",
  "అదర్దు",
  "దానికి",
  "అదకె",
  "దాని యొక్క",
  "అదకెక",
  "దానిది",
  "అదర్దు",
  "అదే",
  "అదే",
  "వారు",
  "అవరు",
  "వారికి",
  "అవరిగె",
  "వారిని",
  "అవర్నుు",
  "వారిది",
  "అవర్దు",
  "వారి యొక్క",
  "అవరిగె సేరిదు",
  "వారే",
  "అవరే",
  "అర్థంచేసుకో",
  "అర్థ మాడికొ.",
  "ఆలోచంచు",
  "ఆలోచసు.",
  "ఇవుు",
  "కొడు.",
  "ఎకుక",
  "హత్తత.",
  "కొను",
  "కొండుకొ.",
  "అముమ",
  "మారు.",
  "ఆపు",
  "నిల్నలసు.",
  "ఉండు",
  "ఇరు.",
  "క్లువు",
  "భేటి.",
  "కోయు",
  "కుయ్దు.",
  "చూడు",
  "నోడు.",
  "చదువు",
  "ఓదు.",
  "చెపుు",
  "హేళు.",
  "చేయు",
  "మాడు.",
  "తీసుకో",
  "తెగెదుకో.",
  "త్రాగు",
  "కుడి.",
  "తిను",
  "తినుు.",
  "తెరువు",
  "తెరె.",
  "నిద్రపో",
  "నిద్దు మాడు.",
  "నవుు",
  "నగు.",
  "పంచు",
  "హంచు.",
  "నిలబడు",
  "నింత్యో.",
  "పంపు",
  "క్ళుహిసు.",
  "పట్టటకో",
  "హిడిదుకో",
  "పరిగెత్తత",
  "ఓడు.",
  "పిలువు",
  "క్రె.",
  "మాట్లలడు",
  "మాతాడు.",
  "పాడు",
  "హాడు.",
  "పెట్టట",
  "ఇడు.",
  "మూయు",
  "ముచుు.",
  "మేలోక",
  "ఎచెుత్యక.",
  "రా",
  "బా.",
  "విను",
  "కేళు.",
  "వ్రాయు",
  "బరె.",
  "నువుు అర్థంచేసుకో",
  "నీను అర్థమాడికొ.",
  "విడిచపెట్టట",
  "బిట్టటబిడు.",
  "వెళుు",
  "హోగు.",
  "నువుు అముమ",
  "నీను మారు.",
  "నువుు ఆపు",
  "నీను నిల్నలసు.",
  "నువుు ఆలోచంచు",
  "నీను ఆలోచసు.",
  "నువుు ఇవుు",
  "నీను కొడు.",
  "నువుు ఉండు",
  "నీను ఇరు.",
  "నువుు ఎకుక",
  "నీను హత్తత.",
  "నువుు క్లువు",
  "నీను భేటి.",
  "నువుు కొను",
  "నీను కొండుకొ.",
  "నువుు కోయు",
  "నీను కుయ్దు.",
  "నువుు చూడు",
  "నీను నోడు.",
  "నువుు చదువు",
  "నీను ఓదు.",
  "నువుు చెపుు",
  "నీను హేళు.",
  "నువుు చేయు",
  "నీను మాడు.",
  "నువుు తిను",
  "నీను తినుు.",
  "1. వెళ్ళు",
  "హోగు",
  "2. పాడు",
  "హాడు",
  "3. మాట్లాడు",
  "మాతాడు",
  "4. కొను",
  "కొండు కో",
  "5. తిను",
  "తినున",
  "6. చద్దవ్వ",
  "ఓద్ద",
  "7. త్రాగు",
  "కడి",
  "8. నిద్రంచు",
  "నిద్రస్",
  "9. ఇచుి",
  "కొడు",
  "10. చెల్ాంచు",
  "సల్ాస్",
  "నుండి",
  "యుంద",
  "లో",
  "అల్లా యల్లా / దల్లా",
  "కు/ కి",
  "మీద",
  "తో",
  "వదద",
  "తరువాత",
  "ముందు",
  "కొరకు/ కోసుం",
  "గురుంచి",
  "ఎదురుగా",
  "అవతల",
  "వరకు",
  "వైపు",
  "ప్రక్కన",
  "వెనక్",
  "క్రుంద",
  "దగ్గర",
  "గె",
  "మేల్మ",
  "ఒుందిగె",
  "బళి",
  "నుంతర",
  "ముంద్ద",
  "క్లకగి/గాగి",
  "కురతు/బగెగ",
  "ఎదురనల్లా",
  "ఆచె",
  "వరెగె",
  "క్డెగె",
  "ప్క్కదల్లా",
  "హిుంభాగ్",
  "క్కళగె",
  "హత్తతర",
  "వెళ్ళగలను",
  "హోగ బల్లెను",
  "వెళ్ళలేను",
  "హోగ లారెను",
  "వెళ్ళగలిగాను",
  "హోగక్యాయితు.",
  "వెళ్ళలేకపోయాను",
  "హోగక్యాగలిలె.",
  "వెళ్ళవచ్చు",
  "హోగబహుదు",
  "వెళ్ళకపోవచ్చు",
  "హోగ లారదే ఇరబహుదు.",
  "వెళ్ళళ ఉండవచ్చు",
  "హోగ (ఇ)రబహుదు",
  "వెళ్ళళ ఉండకపోవచ్చు",
  "హోగ దేనే ఇరబహుదాగతుత",
  "వెళ్లళలి",
  "హోగబేకు",
  "వెళ్ళకూడదు",
  "హోగబారదు",
  "వెళుళతూ ఉండేవాడిని",
  "హోగాతయిద్దె.",
  "వెళ్లతను",
  "హోగుత్తతనె",
  "1. వెళ్ళ---గానే",
  "హోద--- కూడలే,",
  "3. వెళ్ళళన ---తర్వాత",
  "హోద ---- నంతర,",
  "5. వెళ్ళళన-అప్ుటికి",
  "హో----దరూ,",
  "7. వెళ్ళళ ---కూడా",
  "హోగి----కూడ",
  "2. వెళ్ళళన---అప్పుడు",
  "హో----దాగ,",
  "4. వెళ్ళళ ---మందు",
  "హోగువ -- మనన /మంచె",
  "6. వెళ్ళళతే-- అట్లయితే",
  "హోగి----ఇదదరె,",
  "8. వెళ్ళళనందు---వల్ల",
  "హోగి ----- ఇదదరింద,",
  "10. వెళ్తూ---ఉండగా",
  "హొగు----తిూదాదగ,",
  "12. వెళ్ళళన---అప్పుడల్లల",
  "హో----దాగల్లల్లల,",
  "9. వెళ్ళళం---అంతవరకు",
  "11. వెళ్ళళతే---తప్ు",
  "హొగువ-----వరెగూ",
  "హోదరె ---హొరతు,",
  "1. నీ వయసు ఎంత?",
  "నిన్న వయసుు ఎష్టు?",
  "నా వయసు 22. (ఇరవై రండు)",
  "న్న్న వయసుు 22 (ఇప్పత్తెరడు).",
  "2. నీ పేరు ఏమిటి?",
  "నిన్న హెసరు ఏను ?",
  "నా పేరు కిరణ్.",
  "న్న్న హెసరు కిరణ్.",
  "3. నీ యొక్క బరువు ఎంత?",
  "నిన్న తూక్ ఎష్టు?",
  "నా యొక్క బరువు 55 (యాభై ఐదు) కిలోలు.",
  "న్న్న తూక్ 55 (ఐవత్తతెదు) కిలోగళు.",
  "4. నీ యొక్క హోదా ఏమిటి?",
  "నిన్న ఉద్యోగ ఏను?",
  "నేను క్ంపెనీకి మేనేజర్.",
  "నాను క్ంపెనిగె మేనేజర్.",
  "1. నువుు ఎక్కడ కూరగాయలు కంటావు?",
  "నీను ఎలిల తరకరిగళు కళుావె ?",
  "నేను మారేకట్లల కూరగాయలు కంటాను.",
  "నాను మారకటనలిల తరకరిగళు కళుాత్తెనె.",
  "2. నీ ఇలుల ఎక్కడ వుంది?",
  "నిన్న మనె ఎలిల ఇదె?",
  "నా ఇలుల ముంబాయిలో ఉంది.",
  "న్న్న మనె ముంబైన్లిల ఇదె.",
  "3. మీ ఆఫీసు ఎక్కడ ఉంది?",
  "నిమమ ఆఫీస్ ఎలిల ఇదె?",
  "మా ఆఫీసు ప్క్క వీధిలో ఉంది.",
  "న్మమ ఆఫీస్ ప్క్కద బీదియలిల ఇదె.",
  "4. రైలేు నిల్యం ఎక్కడ వుంది?",
  "రైలేు నిల్య ఎలిల ఇదె?",
  "రైలేునిల్యం (రైలేునేుషన్) ప్క్క వీధిలో వుంది.",
  "రైలేు నిల్య (రైలేు స్టుషన్) ప్క్కద బీదియలిల ఇదె.",
  "1. మన్ జాత్త పిత ఎవరు?",
  "న్మమ ద్దశపిత యారు?",
  "మన్ జాత్త పిత మహాతమగాంధీ.",
  "న్మమ ద్దశపిత మహాతమగాంధీ.",
  "2. ఎవరు కఫీని తయారుచేశారు?",
  "యారు కఫియనున తయారిసిదరు?",
  "అమమ కఫీని తయారుచేశారు.",
  "తాయి కఫియనున తయారిసిదరు.",
  "3. ఎవరు వంట చేశారు?",
  "యారు అడిగె మాడిదరు?",
  "నేను వంట చేశాను.",
  "నాను అడిగె మాడిదె.",
  "4. ఈ ప్నిని సమరావంతంగా ఎవరు చేస్యెరు?",
  "ఈ కెల్సవనున సమరానీయవాగ యారు మాడుతాెర?",
  "ఆమె ఈ ప్నిని సమరావంతంగా చేసుెంది.",
  "ఆకె ఈ కెల్సవనున సమరానీయవాగ మాడుతాెళె.",
  "5. మీ ఇంటిలో ఎవరు ఎకుకవ సంపాదిసుెనానరు?",
  "నిమమ మనెయలిల యారు హెచ్చు సంపాదిసుత్తెదాదర ?",
  "1. నువుు న్నున ఎందుకు అరాంచేసుకోలేదు?",
  "నీను న్న్ననున ఏకె అరా మాడికళాలిల్ల?",
  "నువుు నిజం చెప్పడం లేదు.",
  "నీను నిజ హేళుతాె ఇల్ల.",
  "2. నువుు అక్కడికి ఎందుకు వెళాావు?",
  "నీను అలిలగె ఏకె హోదె?",
  "నేను అక్కడికి నా మిత్రుడిన క్లువడానికి వెళాాను.",
  "నాను అలిలగె న్న్న మిత్రన్నున భేటియాగలు హోదె.",
  "3. నువుు ఎందుకు పేప్రిన చించ్చవు?",
  "నీను ఏకె పేప్రనున హ్రిదె?",
  "అది ఒక్ ప్నికిరాని పేప్రు.",
  "అదు ఒందు కెల్సకెక బారద పేప్రు.",
  "4. ఎందుకు నీ సమయానిన వృధ్య చేసుకుంటునానవు?",
  "ఏకె నిన్న సమయవనున వోరా మాడికళుాత్తెరువె?",
  "ఈ ప్నికి ఎకుకవ సమయం తీసుకుంటున్నది.",
  "ఈ కెల్సకెక హెచిున్ సమయ త్తగెదుకళుాత్తెదె.",
  "5. ఆమె ఎందుకు వసోెంది?",
  "ఆకె ఏకె బరుత్తెదాదళె?",
  "1. మీ నాన్న ఎలా వునానరు?",
  "నిమమ తందె హేగె ఇదాదర?",
  "ఆయన్ బాగునానరు.",
  "అవరు చెనానగదాదర.",
  "2. నువుు ఎలా వునానవు?",
  "నీను హేగె ఇరువె?",
  "నేను బాగునానను.",
  "నాను చెనానగద్దదనె.",
  "3. మీ ఆరోగోం ఎలా వుంది?",
  "నిమమ ఆరోగో హేగె ఇదె?",
  "ప్రాులేదు.",
  "ప్రవాగల్ల.",
  "4. నువుు వివాహానికి ఎలా వస్యెవు?",
  "నీను వివాహ్కెక హేగె బరువె?",
  "నేను నా భారోత వివాహానికి వస్యెను.",
  "నాను న్న్న హెండత్తయొందిగె వివాహ్కెక బరుత్తెనె.",
  "1. నేను ఎత్తుగా ఉన్నాన్న?",
  "న్నను ఎత్ురవాగి ఇరువెనే?",
  "అవును, నువుు ఎత్తుగా ఉన్నావు.",
  "హౌదు, నీను ఎత్ురవాగి ఇరువె .",
  "లేదు, నువుు ఎత్తుగా లేవు.",
  "ఇల్ల, నీను ఎత్ురవాగి ఇల్ల.",
  "2. నేను త్ప్పులు లేకుండా చదువుత్తన్నాన్న?",
  "న్నను త్ప్పుగళు ఇల్లదె ఓదుత్తురువెనే?",
  "అవును, నువుు త్ప్పులు లేకుండా చదువుత్తన్నావు.",
  "హౌదు, నీను త్ప్పుగళు ఇల్లదె ఓదుత్తురువే.",
  "లేదు, నువుు సరిగా చదువటుంలేదు.",
  "ఇల్ల, నీను సరియాగి ఓదుత్తుల్ల.",
  "3. నేను వేగుంగా చదువుత్తన్నాన్న?",
  "న్నను బేగ ఓదుత్తురువెనే",
  "1. ఇది నిజమా?",
  "ఇదు నిజవే?",
  "అవును, అది నిజుం.",
  "హౌదు, అదు నిజ.",
  "లేదు, అది నిజుం కాదు.",
  "ఇల్ల, అదు నిజ అల్ల.",
  "2. ఈరోజు వేడిగా ఉుందా?",
  "ఈ దిన్ బిసియాగి ఇదెయే?",
  "అవును, ఈ రోజు వేడిగా ఉుంది.",
  "హౌదు, ఈ దిన్ బిసియాగి ఇదె.",
  "లేదు, ఈ రోజు వేడిగా లేదు.",
  "ఇల్ల, ఈ దిన్ బిసియాగి అల్ల.",
  "3. ఇది చాలా ఖర్ఫదా?",
  "ఇదు త్తుంబ బెలేనె?",
  "అవును, ఇది ఖర్ఫదు.",
  "హౌదు, ఇదు త్తుంబ బెలె.",
  "1. నువుు ప్రత్త రోజూ వసాువా?",
  "నీను ప్రత్తదిన్న బరువెయా?",
  "అవును, నేను ప్రత్త రోజూ వసాును.",
  "హౌదు, న్నను ప్రత్త దిన్న బరుతేునె",
  "లేదు, నేను ప్రత్తరోజూ రాను.",
  "ఇల్ల, న్నను ప్రత్తదిన్న బరువుదిల్ల.",
  "2. నీ దగగర పెనుా ఉుందా?",
  "నిన్ా హత్తుర పెనుా ఇదెయే?",
  "అవును, న్న దగగర పెనుా ఉుంది.",
  "హౌదు, న్న్ా హత్తుర పెనుా ఇదె",
  "లేదు, న్న దగగర పెనుా లేదు.",
  "ఇల్ల, న్న్ా హత్తుర పెనుా ఇల్ల.",
  "3. మీక ఎకెవ వివరాలు కావాలా?",
  "నిమ్గె హెచిచన్ వివరగళు బేకే?",
  "అవును, న్నక ఎకెవ వివరాలు కావాలి.",
  "హౌదు, న్న్గె హెచిచన్ వివరగళు బేక",
  "1. మ్న్ుం ఇుంట్టకి త్సళ్ుం వేశామా?",
  "న్నవు మ్నెగె బీగ హాకిదెేవేయే?",
  "అవును, మ్న్ుం ఇుంట్టకి త్సళ్ుం వేశామ్మ.",
  "హౌదు, న్నవు మ్నెగె బీగ హాకిదెవు.",
  "లేదు, మ్న్ుం ఇుంట్టకి త్సళ్ుం వేయలేదు.",
  "ఇల్ల, న్నవు మ్నెగె బీగ హాకలిల్ల.",
  "2. అత్ను త్న్ చదువుని ప్యరిు చేశాడా?",
  "ఆత్ను త్న్ా ఓదనుా ప్యరిు మాడిదెనే?",
  "అవును, అత్ను త్న్ చదువుని ప్యరిు చేశాడు.",
  "హౌదు, ఆత్ను త్న్ా ఓదనుా ప్యరిు మాడిదను.",
  "లేదు, అత్ను త్న్ చదువుని ప్యరిు చేయలేదు.",
  "ఇల్ల, ఆత్ను త్న్ా ఓదనుా ప్యరిు మాడలిల్ల.",
  "3. ఆమె కారాక్రమ్ుంలో న్నటాుం చేసిుందా?",
  "ఆకె కారాక్రమ్దలిల న్నటా మాడిదళే?",
  "అవును, ఆమె కారాక్రమ్ుంలో న్నటాుం చేసిుంది.",
  "హౌదు, ఆకె కారాక్రమ్దలిల న్నటా మాడిదళు.",
  "నేను పంపు తాను",
  "న్నను కళుహిసుత్తినె",
  "మేము పంపు తాము",
  "న్నవు కళుహిసుత్తివె",
  "నువుు పంపు తావు",
  "నీను కళుహిసువె",
  "అతను పంపు తాడు",
  "అవను కళుహిసుతాినె",
  "ఆమె పంపు తుంది",
  "అవళు కళుహిసుతాిళె",
  "వారు పంపు తారు",
  "అవరు కళుహిసుతాిరె",
  "నేను అముుతాను",
  "న్నను మారుత్తినె",
  "మేము అముుతాము",
  "న్నవు మారుత్తివె",
  "నువుు అముుతావు",
  "నీను మారువె",
  "అతను అముుతాడు",
  "అవను మారుతాినె",
  "ఆమె అముు తుంది",
  "అవళు మారుతాిళె",
  "వారు అముుతారు",
  "అవరు మారుతాిరె",
  "నేను కలుసాిను",
  "న్నను భేటియాగుత్తినె",
  "మేము కలుసాిము",
  "న్నవు భేటియాగుత్తివె",
  "నువుు కలుసాివు",
  "నీను భేటియాగువె",
  "అతను కలుసాిడు",
  "అవను భేటియాగుతాినె",
  "ఆమె కలుసుింది",
  "అవళు భేటియాగుతాిళె",
  "వారు కలుసాిరు",
  "అవరు భేటియాగుతాిరె",
  "నేను పంపు తున్నాను.",
  "న్నను కళుహిసుత్తిద్దేనె.",
  "మేము పంపు తున్నాము.",
  "న్నవు కళుహిసుత్తిద్దేవె.",
  "నువుు పంపు తున్నావు.",
  "నీను కళుహిసుత్తిరువె.",
  "అతను పంపు తున్నాడు.",
  "అవను కళుహిసుత్తిద్దేనె.",
  "ఆమె పంపు తూ ఉంది.",
  "అవళు కళుహిసుత్తిద్దేళె.",
  "వారు పంపు తున్నారు.",
  "అవరు కళుహిసుత్తిద్దేరె.",
  "నేను అముుతున్నాను.",
  "న్నను మారుత్తిద్దేనె.",
  "మేము అముుతున్నాము.",
  "న్నవు మారుత్తిద్దేవె.",
  "నువుు అముుతున్నావు.",
  "నీను మారుత్తిరువె.",
  "అతను అముుతున్నాడు.",
  "అవను మారుత్తిద్దేనె.",
  "ఆమె అముుతూ ఉంది.",
  "అవళు మారుత్తిద్దేళె.",
  "వారు అముుతున్నారు.",
  "అవరు మారుత్తిద్దేరె.",
  "నేను నేరుుకంటున్నాను.",
  "న్నను కలియుత్తిద్దేనె.",
  "మేము నేరుుకంటున్నాము.",
  "న్నవు కలియుత్తిద్దేవె.",
  "నువుు నేరుుకంటున్నావు.",
  "నీను కలియుత్తిరువె.",
  "అతను నేరుుకంటున్నాడు.",
  "అవను కలియుత్తిద్దేనె.",
  "ఆమె నేరుుకంటూఉంది.",
  "అవళు కలియుత్తిద్దేళె.",
  "వారు నేరుుకంటున్నారు.",
  "అవరు కలియుత్తిద్దేరె.",
  "నేను పంపాను.",
  "న్నను కళుహిసిదె.",
  "మేము పంపా ము.",
  "న్నవు కళుహిసిదెవు.",
  "నువుు పంపా వు.",
  "నీను కళుహిసిదె.",
  "అతను పంపాడు.",
  "అవను కళుహిసిదను.",
  "ఆమె పంపిం ది.",
  "అవళు కళుహిసిదళు.",
  "వారు పంపా రు.",
  "అవరు కళుహిసిదరు.",
  "నేను అమాును.",
  "న్నను మారిదె.",
  "మేము అమాుము.",
  "న్నవు మారిదెవు.",
  "నువుు అమాువు.",
  "నీను మారిదె.",
  "అతను అమాుడు.",
  "అవను మారిదను.",
  "ఆమె అమ్ుంది.",
  "అవళు మారిదళు.",
  "వారు అమాురు.",
  "అవరు మారిదరు.",
  "నేను నేరుుకన్నాను.",
  "న్నను కలితుకండె.",
  "మేము నేరుుకన్నాము.",
  "న్నవు కలితుకండెవు.",
  "నువుు నేరుుకన్నావు.",
  "నీను కలితుకండె.",
  "అతను నేరుుకన్నాడు.",
  "అవను కలితుకండను.",
  "ఆమె నేరుుకంది.",
  "అవళు కలితుకండళు.",
  "వారు నేరుుకన్నారు.",
  "అవరు కలితుకండరు.",
];
let n = dataFromTxtRaw.length;
const dataFromTxt = [];
for (let i = 0; i < dataFromTxtRaw.length; i += 2) {
  dataFromTxt.push({
    telugu: dataFromTxtRaw[i],
    kannada: dataFromTxtRaw[i + 1],
  });
}
export const data = dataFromTxt;
