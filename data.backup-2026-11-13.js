const YEAR_EVENTS = [
  {
    year: 1000,
    title: "Leif goes Vinland",
    description: "Norse explorer, Leif Eriksson the Lucky, was blown of course and landed on the North American continent as the first European at L’Anse aux Meadows. He called the land Vinland (Land of Wine)."
  },
  {
    year: 1001,
    title: "Brick Liaodi Started",
    description: "Song China begins building Dingzhou’s 84-metre brick pagoda, later used to watch enemy movements."
  },
  {
    year: 1002,
    title: "St Brice Massace",
    description: "English king Æthelred the Unready orders all Danes in England to be killed after the intensity of their Vikings raids increased; provoking Sweyn I of Denmark's invasion in 1003."
  },
  {
    year: 1003,
    title: "Sweyn I’s Invasion",
    description: "Sweyn I of Denmark begins his first invasion of England, leading punitive expeditions in 1003 and 1004 in retaliation for the St. Brice’s Day massacre."
  },
  {
    year: 1004,
    title: "Death of Erik the Red",
    description: "He was exiled from Iceland in about 986 and subsequentlz decided to explore the land to the west (Greenland). He named the country Greenland, in the belief that a good name would attract settlers."
  },
  {
    year: 1005,
    title: "House of Knowledge",
    description: "Fatimid Caliph al-Hakim founded the House of Knowledge in Cairo, equipped with a vast library from Islamic philosophy and law to physics and astronomy. It became a centre for philosophers and theologians."
  },
  {
    year: 1006,
    title: "SN 1006",
    description: "A supernova that has likely been the brightest observed stellar event in recorded history is observed and described in China, Japan, the Middle East, Europe; supposed to have provided enough light to read a book at night."
  },
  {
    year: 1007,
    title: "Peace Danegeld",
    description: "Æthelred, King of England, pays Danish raiders 36,000 pounds of silver, buying two years’ peace while exposing England’s weakness."
  },
  {
    year: 1008,
    title: "Royal Fleet",
    description: "Æthelred, King of England, orders England to build a large war fleet, hoping to resist renewed Danish Viking attacks."
  },
  {
    year: 1009,
    title: "Sepulchre Destroyed",
    description: "Fatimid caliph al-Hakim orders Jerusalem’s Church of the Holy Sepulchre (traditional site of Christ’s crucifixion) demolished, shocking medieval Christian communities. This action later provoked the crusades."
  },
  {
    year: 1010,
    title: "Book of Kings Completed",
    description: "The Persian Book of Kings is completed in 50’000 verses, preserving Iran’s legendary rulers, heroes and identity."
  },
  {
    year: 1011,
    title: "Enchiridion Completed",
    description: "English monk Byrhtferth completes his Enchiridion, explaining computus, astronomy and learning to young monks. It includes the eight capital sins (gluttony, lust, greed, anger, sloth, sadness, vainglory and pride)"
  },
  {
    year: 1012,
    title: "Huge Danegeld",
    description: "Æthelred, King of England, pays Viking forces 48,000 pounds of silver, one of England’s largest recorded Danegeld payments."
  },
  {
    year: 1013,
    title: "First Viking King",
    description: "Sweyn Forkbeard is accepted as king of England after Æthelred flees, creating brief Danish rule."
  },
  {
    year: 1014,
    title: "Battle of Clontarf",
    description: "Brian Boru defeats a Norse-Irish alliance near Dublin, but dies in battle, weakening hopes for a united Irish kingdom."
  },
  {
    year: 1015,
    title: "Cnut Invades",
    description: "Danish prince Cnut returns to England with a fleet, beginning the campaign that makes him king the following year."
  },
  {
    year: 1016,
    title: "Cnut Takes England",
    description: "Cnut becomes king after defeating Edmund Ironside, linking England to Denmark and later Norway."
  },
  {
    year: 1017,
    title: "Cnut Marries",
    description: "Cnut marries Emma of Normandy, Æthelred’s widow, legitimizing Danish rule and linking England to Normandy."
  },
  {
    year: 1018,
    title: "Cnut Inherits Denmark",
    description: "Cnut inherits Denmark after Harald’s death, joining England and Denmark under one ruler."
  },
  {
    year: 1019,
    title: "Basel Münster",
    description: "Emperor Henry II attends Basel Minster’s consecration, making it holy and beginning a cathedral story still standing today."
  },
  {
    year: 1020,
    title: "Hawk’s Castle",
    description: "The Habichtsburg is built in Aargau, ancestral seat from which the Habsburg dynasty later took its name."
  },
  {
    year: 1021,
    title: "Tale of Genji Complete",
    description: "The Tale of Genji is complete, becoming Japan’s great court novel and the first psychological novel."
  },
  {
    year: 1022,
    title: "Orléans Heresy",
    description: "French authorities burn condemned heretics at Orléans, one of medieval Western Europe’s first recorded heresy executions."
  },
  {
    year: 1023,
    title: "Darkened Britain",
    description: "A solar eclipse crosses Britain and Ireland, turning daylight strange and likely inspiring ominous medieval interpretations."
  },
  {
    year: 1024,
    title: "Song Paper Money",
    description: "Song China issues standardized government jiaozi notes, helping create the world’s first major paper currency system."
  },
  {
    year: 1025,
    title: "Medical Canon",
    description: "Ibn Sina (Avicenna) completes the Canon of Medicine, later becoming Europe’s standard medical textbook for centuries, systematizing medical knowledge that later shaped European universities for centuries."
  },
  {
    year: 1026,
    title: "Helgeå Battle",
    description: "Cnut’s Anglo-Danish fleet fights Norwegian and Swedish rivals, helping secure his dominance around the North Sea."
  },
  {
    year: 1027,
    title: "Book of Healing",
    description: "Ibn Sina (Avicenna) publishes his vast philosophical and scientific encyclopedia, aiming to “heal” ignorance through reason and knowledge."
  },
  {
    year: 1028,
    title: "North Sea Empire",
    description: "Cnut drives Olaf II into exile, adding Norway to his England-Denmark realm and completing his North Sea empire."
  },
  {
    year: 1029,
    title: "Acupuncture Manual",
    description: "Song physician Wang Weiyi writes an illustrated acupuncture manual, standardizing treatment points for medical teaching and examinations."
  },
  {
    year: 1030,
    title: "Stiklestad Battle",
    description: "Olaf II is killed trying to retake Norway, later becoming Saint Olaf and Norway’s royal martyr."
  },
  {
    year: 1031,
    title: "Córdoba Collapses",
    description: "The Caliphate of Córdoba is abolished after civil war, fragmenting into rival kingdoms, prompting northern christian kingdoms to expand."
  },
  {
    year: 1032,
    title: "Burgundy Inherited",
    description: "Burgundy’s last independent king dies childless, pulling the Alpine kingdom into the Holy Roman Empire."
  },
  {
    year: 1033,
    title: "End-Time Eclipse",
    description: "A solar eclipse and harsh weather intensify European fears, one thousand years after Christ’s crucifixion. As predicted in the Book of Revelation: “And when the thousand years are expired, Satan shall be loosed out of his prison.”"
  },
  {
    year: 1034,
    title: "Bona Raid",
    description: "Pisan and Genoese fleets attack Bona, today’s Annaba in Algeria, showing rising Italian naval power in the Mediterranean."
  },
  {
    year: 1035,
    title: "Cnut Dies",
    description: "Cnut the Great dies, breaking the North Sea empire he built across England, Denmark and Norway."
  },
  {
    year: 1036,
    title: "Flower Sermon",
    description: "The Buddha’s wordless flower sermon first appears in Buddhist literature, where his smiling student symbolizes direct insight beyond scripture. The historical Buddha, Siddhartha Gautama, probably lived in northern India and Nepal around the 5th century BCE."
  },
  {
    year: 1037,
    title: "Avicenna Dies",
    description: "Persian polymath Ibn Sina, known as Avicenna, dies, famous for his Canon of Medicine and Book of Healing."
  },
  {
    year: 1038,
    title: "Hardrada in Sicily",
    description: "Future Norwegian king Harald Hardrada joins the Byzantine emperor Byzantine and starts the campaign to reconquer Sicily from Muslim rule."
  },
  {
    year: 1039,
    title: "Duncan Raids",
    description: "Scotland’s king raided Durham unsuccessfully, weakening his reputation before his fatal conflict with Macbeth."
  },
  {
    year: 1040,
    title: "Macbeth Crowned",
    description: "Macbeth Crowned: Macbeth killed Duncan in battle near Moray and became king of Scotland, later inspiring Shakespeare’s tragedy."
  },
  {
    year: 1041,
    title: "Hardrada Bulgar-Burner",
    description: "Future Norwegian king Harald Hardrada helps Byzantium crush Peter Delyan’s Bulgarian revolt, earning the saga nickname “Bulgar-burner.”"
  },
  {
    year: 1042,
    title: "Hardrada Escapes",
    description: "Future Norwegian king Harald Hardrada leaves Byzantine service, escaping through Kievan Rus with wealth, battlefield fame and royal ambitions."
  },
  {
    year: 1043,
    title: "Edward Crowned",
    description: "Edward the Confessor becomes king of England after Harthacnut’s sudden death, restoring the old Wessex royal line."
  },
  {
    year: 1044,
    title: "Song Gunpowder Formula",
    description: "Song China’s Wujing Zongyao records the earliest known gunpowder formulas, transforming warfare through chemistry."
  },
  {
    year: 1045,
    title: "Papacy Sold",
    description: "Benedict IX resigns after selling the papacy to his godfather, creating one of medieval Rome’s strangest scandals."
  },
  {
    year: 1046,
    title: "Hardrada Crowned",
    description: "Harald Hardrada becomes co-king of Norway, turning his Byzantine wealth and battlefield fame into royal power."
  },
  {
    year: 1047,
    title: "William Survives",
    description: "Young William of Normandy defeats rebellious barons at Val-ès-Dunes, securing power before his later conquest of England."
  },
  {
    year: 1048,
    title: "Shortest Pope",
    description: "Pope Damasus II dies after only twenty-three days, one of the shortest papal reigns in history."
  },
  {
    year: 1049,
    title: "Reims Council",
    description: "Pope Leo IX holds the Council of Reims, attacking simony, clerical marriage and corruption in the medieval Church"
  },
  {
    year: 1050,
    title: "Westminster Rebuilt",
    description: "Edward the Confessor begins enlarging Westminster Abbey, laying foundations for England’s future coronation church and royal shrine."
  },
  {
    year: 1051,
    title: "Danegeld Abolished",
    description: "Edward the Confessor abolishes the heregeld, ending England’s hated military tax rooted in Viking-age warfare."
  },
  {
    year: 1052,
    title: "Phoenix Hall Founded",
    description: "A temple is founded near Kyoto as Japan enters mappō, the feared age when Buddhist teachings were believed to decline."
  },
  {
    year: 1053,
    title: "Phoenix Hall Completed",
    description: "The temple’s Phoenix Hall is completed, visualizing Pure Land hopes for salvation during Japan’s feared Buddhist age of decline."
  },
  {
    year: 1054,
    title: "Great Schism",
    description: "Rome and Constantinople exchanged excommunications, symbolising the split between Catholic and Orthodox Christianity."
  },
  {
    year: 1055,
    title: "Brick Pagoda Completed",
    description: "Song China completes Dingzhou’s 84-metre Liaodi Pagoda, a Buddhist tower later used to watch enemy movements. It still stands today."
  },
  {
    year: 1056,
    title: "Wooden Pagoda Completed",
    description: "Liao China builds Fogong Temple’s wooden pagoda, now the world’s oldest and tallest surviving wooden pagoda."
  },
  {
    year: 1057,
    title: "Macbeth Killed",
    description: "Scotland’s real King Macbeth is killed at Lumphanan, far from Shakespeare’s later murder-haunted legend."
  },
  {
    year: 1058,
    title: "Ten-Thousand Word Memorial",
    description: "Wang Anshi submits his Ten Thousand Word Memorial, arguing Song China needs stronger state reforms, trained officials, and economic stimulation."
  },
  {
    year: 1059,
    title: "Cardinal Elections",
    description: "Pope Nicholas II decrees that cardinals should elect future popes, reducing aristocratic and imperial control over Rome."
  },
  {
    year: 1060,
    title: "Wang Promoted",
    description: "Wang Anshi is promoted to the Song capital, bringing his reform ideas closer to power after the Ten Thousand Word Memorial."
  },
  {
    year: 1061,
    title: "Papal Split",
    description: "Two competing popes divide Rome, one backed by nobles and emperor, the other by cardinals after election reforms."
  },
  {
    year: 1062,
    title: "Marrakesh Founded",
    description: "The Almoravids found Marrakesh, soon making it their capital and a lasting centre of Moroccan power."
  },
  {
    year: 1063,
    title: "St Mark’s Basilica",
    description: "Venice begins rebuilding St Mark’s Basilica, turning its merchant wealth into a glittering sacred landmark."
  },
  {
    year: 1064,
    title: "Barbastro Crusade",
    description: "A papally backed European army captures Barbastro in Muslim Spain, sometimes called a crusade before the Crusades."
  },
  {
    year: 1065,
    title: "Westminster Consecrated",
    description: "Edward the Confessor’s new Westminster Abbey is consecrated, days before his death. He was buried there."
  },
  {
    year: 1066,
    title: "Norman Conquest",
    description: "William of Normandy wins at the Battle of Hastings, ending Anglo-Saxon rule and transforming England’s language, law and aristocracy."
  },
  {
    year: 1066,
    title: "Halley’s Comet",
    description: "Halley’s Comet appears in spring 1066, later embroidered into the Bayeux Tapestry as an omen of conquest."
  },
  {
    year: 1066,
    title: "Hardrada Invades",
    description: "Norwegian king Harald Hardrada attacks Yorkshire and marches toward York, beginning the final great Viking invasion of England."
  },
  {
    year: 1067,
    title: "London Tower",
    description: "William the Conqueror begins fortifying London after 1066, laying the foundations for the later Tower of London."
  },
  {
    year: 1068,
    title: "Exeter Besieged",
    description: "William the Conqueror besieges Exeter for eighteen days, showing Norman rule remained violently contested."
  },
  {
    year: 1069,
    title: "Northern Harrying",
    description: "William the Conqueror devastates northern England after rebellion, using scorched-earth tactics to crush resistance."
  },
  {
    year: 1070,
    title: "York Devastated",
    description: "After northern rebellions, Norman violence and famine devastate Yorkshire, deepening the trauma of conquest."
  },
  {
    year: 1071,
    title: "Battle of Manzikert",
    description: "Seljuk Turks defeat Byzantium at Manzikert, opening Anatolia to muslim settlement and weakening imperial power."
  },
  {
    year: 1072,
    title: "Scotland Submits",
    description: "Malcolm III of Scotland submits to William the Conqueror, showing Norman power reaching beyond England."
  },
  {
    year: 1073,
    title: "Gregory Elected",
    description: "Hildebrand becomes Pope Gregory VII, launching reforms that challenge royal control over bishops and reshape medieval Europe."
  },
  {
    year: 1074,
    title: "Clerical Celibacy",
    description: "Pope Gregory VII orders married priests to separate from their wives, intensifying Church reform and provoking resistance."
  },
  {
    year: 1075,
    title: "Papal Supremacy",
    description: "Gregory VII’s Dictatus Papae claims the pope can depose emperors, sharpening the conflict between Church and monarchy."
  },
  {
    year: 1076,
    title: "Emperor Excommunicated",
    description: "Gregory VII excommunicates Holy Roman Emperor Henry IV after he rejects papal authority, turning Church reform into an imperial crisis."
  },
  {
    year: 1077,
    title: "Walk to Canossa",
    description: "Excommunicated emperor Henry IV crosses the Alps and waits barefoot in the snow at Canossa, seeking Gregory VII’s forgiveness and political survival."
  },
  {
    year: 1078,
    title: "White Tower",
    description: "William the Conqueror begins building London’s White Tower, projecting Norman royal power over the conquered city."
  },
  {
    year: 1079,
    title: "El Cid Cabra Victory",
    description: "El Cid defeats Granada’s forces near Cabra while collecting tribute, boosting fame but creating court enemies."
  },
  {
    year: 1080,
    title: "Henry creates Antipope",
    description: "Holy Roman Emperor Henry IV backs Clement III as rival pope, turning the conflict with Gregory VII into an open Church schism"
  },
  {
    year: 1081,
    title: "El Cid Exiled",
    description: "Castilian knight Rodrigo Díaz is exiled from court, beginning his legendary career as a mercenary leader in divided Iberia."
  },
  {
    year: 1082,
    title: "Henry Besieges Rome",
    description: "Emperor Henry IV besieges Rome to force out Pope Gregory VII, whose reforms challenged imperial control."
  },
  {
    year: 1083,
    title: "Henry Takes Rome",
    description: "Holy Roman Emperor Henry IV captures much of Rome, forcing Pope Gregory VII into Castel Sant’Angelo."
  },
  {
    year: 1084,
    title: "Henry Crowned Emperor",
    description: "Antipope Clement III crowns Henry IV emperor in Rome, while Gregory VII is trapped and later rescued by Normans."
  },
  {
    year: 1085,
    title: "Toledo Captured",
    description: "Alfonso VI captures Toledo from Muslim rule, giving Christian Iberia a major cultural, political and symbolic centre."
  },
  {
    year: 1086,
    title: "Almoravids Invade",
    description: "North African Almoravids enter Iberia after Toledo’s fall, defeating Alfonso VI and slowing Christian expansion."
  },
  {
    year: 1087,
    title: "El Cid Back to Court",
    description: "After Alfonso VI’s defeat by the Almoravids, El Cid returns from exile to negotiate with taifa kingdoms."
  },
  {
    year: 1088,
    title: "Bologna University",
    description: "Europe’s oldest university is traditionally founded at Bologna, becoming a major centre for Roman and canon law."
  },
  {
    year: 1089,
    title: "El Cid pressures Valencia",
    description: "Castilian knight Rodrigo Díaz, known as El Cid, forces Valencia to pay tribute, beginning his rise as an independent Iberian warlord."
  },
  {
    year: 1090,
    title: "Assassin Fortress",
    description: "The Alamut Castle in Persia is captured, creating the fortress network later feared for its assassins (“Hashashins”)."
  },
  {
    year: 1091,
    title: "Almoravids take Seville",
    description: "Almoravids take Seville from its taifa ruler, replacing local Muslim dynasties with North African control in al-Andalus."
  },
  {
    year: 1092,
    title: "Almoravids absorb Southern Iberia",
    description: "Almoravids absorb major taifa kingdoms, replacing local Muslim rulers with North African rule across much of al-Andalus."
  },
  {
    year: 1093,
    title: "El Cid besieges Valencia",
    description: "El Cid exploits Valencia’s political chaos and Almoravid pressure, beginning the siege that leads to his conquest in 1094."
  },
  {
    year: 1094,
    title: "El Cid captures Valencia",
    description: "El Cid captures Valencia and rules it independently, soon defending the city against Almoravid attacks."
  },
  {
    year: 1095,
    title: "First Crusade",
    description: "Pope Urban II calls Christians to armed pilgrimage at the Council of Clermont, launching the First Crusade toward Jerusalem (“God wills it”)."
  },
  {
    year: 1096,
    title: "Depart First Crusade",
    description: "The first organized crusader armies leave western Europe, beginning the armed journey toward Constantinople and Jerusalem."
  },
  {
    year: 1097,
    title: "Nicaea Captured",
    description: "Crusaders and Byzantines capture the Seljuk capital Nicaea, today’s İznik in Turkey, giving the First Crusade its first major victory."
  },
  {
    year: 1098,
    title: "Antioch Captured",
    description: "Crusaders take Antioch, today’s Antakya in Turkey, through betrayal inside the walls, securing a key city on the road toward Jerusalem."
  },
  {
    year: 1099,
    title: "Jerusalem Captured",
    description: "Crusaders capture Jerusalem after a siege, massacre many inhabitants and establish a Latin Christian kingdom."
  },
  {
    year: 1100,
    title: "Jerusalem Kingdom",
    description: "Baldwin I becomes ruler of Jerusalem, turning the crusader conquest into a more stable Latin kingdom."
  },
  {
    year: 1101,
    title: "Second Crusade Fails",
    description: "Follow-up crusader armies are destroyed in Anatolia, showing that initial success was difficult to repeat."
  },
  {
    year: 1102,
    title: "Battle of Ramla",
    description: "Baldwin I survives a crushing attack near Ramla, showing how fragile the new Kingdom of Jerusalem remained."
  },
  {
    year: 1103,
    title: "Tripoli Siege",
    description: "Crusaders continue pressure on Tripoli, showing the Latin states expanding beyond Jerusalem, Antioch and Edessa."
  },
  {
    year: 1104,
    title: "Crusader Port",
    description: "Acre falls to Baldwin I and Genoese allies, giving the crusader kingdom a major harbour for trade, pilgrims and reinforcements."
  },
  {
    year: 1105,
    title: "Emperor/Father Imprisoned",
    description: "Henry V captures his father Henry IV, forcing the old emperor to abdicate during the Investiture Controversy."
  },
  {
    year: 1106,
    title: "Song Chinese Atlas",
    description: "Song cartographers create detailed maps and geographic records, reflecting China’s sophisticated state administration and spatial knowledge."
  },
  {
    year: 1107,
    title: "Norwegian Crusade",
    description: "King Sigurd of Norway begins a crusading voyage to Jerusalem, the first crusade led personally by a European king."
  },
  {
    year: 1108,
    title: "Norwegian Crusade Arrival",
    description: "The crusade of King Sigurd of Norway reaches the Mediterranean, showing how far northern Europe joined crusading culture."
  },
  {
    year: 1109,
    title: "Tripoli Captured",
    description: "Crusaders capture Tripoli, today in Lebanon, strengthening Latin control over the eastern Mediterranean coastline."
  },
  {
    year: 1110,
    title: "Beirut Captured",
    description: "Crusaders capture Beirut with naval support, securing sea routes for pilgrims, merchants and reinforcements."
  },
  {
    year: 1111,
    title: "Tyre Besieged",
    description: "Baldwin I begins besieging Fatimid-held Tyre, one of the last major coastal cities outside Crusader control."
  },
  {
    year: 1112,
    title: "Tyre Resists",
    description: "Damascus relieves Fatimid-held Tyre, forcing Baldwin I to abandon his costly Crusader siege and withdraw."
  },
  {
    year: 1113,
    title: "Knights Hospitaller Recognized",
    description: "A Jerusalem hospital community receives papal recognition, becoming the Hospital Order and caring for pilgrims in the Holy Land."
  },
  {
    year: 1114,
    title: "Balearic Campaign",
    description: "Pisan and Catalan fleets attack Muslim-held Mallorca and Ibiza, targeting piracy and expanding Christian naval warfare."
  },
  {
    year: 1115,
    title: "Mallorca Sacked",
    description: "Pisan and Catalan forces capture Madina Mayurqa, today’s Palma, but the Balearic Islands later return to Muslim rule."
  },
  {
    year: 1116,
    title: "Mallorca Restored",
    description: "Muslim rule returns to Mallorca after the Pisan-Catalan raid, showing the campaign was destructive but not permanent conquest."
  },
  {
    year: 1117,
    title: "Crusader Jordan Raids",
    description: "Baldwin I leads raids beyond the Jordan, strengthening Jerusalem’s frontier before his death in 1118."
  },
  {
    year: 1118,
    title: "First Jerusalem Succession",
    description: "The Crusader kingdom passed from Baldwin I to Baldwin II, keeping the fragile Holy Land state stable."
  },
  {
    year: 1119,
    title: "Knights Templars Founded",
    description: "Knights in Jerusalem form the early Templar order, protecting pilgrims and creating one of the most famous military orders."
  },
  {
    year: 1120,
    title: "White Ship Sinks with Henry I",
    description: "Henry I’s only legitimate son dies in a shipwreck, destroying England’s succession plan and setting up the Anarchy."
  },
  {
    year: 1121,
    title: "Baldwin II Secures Frontier",
    description: "King Baldwin II destroyed a Damascene border fortress, defending Jerusalem’s frontier against renewed Muslim pressure."
  },
  {
    year: 1122,
    title: "Venetian Crusade",
    description: "Venice launched a naval crusade to the Levant, bringing ships, soldiers and commercial ambitions into Crusader politics."
  },
  {
    year: 1123,
    title: "Venetian Pact",
    description: "Venice and Jerusalem agreed the Pactum Warmundi, granting major trade privileges in exchange for naval support."
  },
  {
    year: 1124,
    title: "Tyre Captured",
    description: "Crusaders and Venetians seized the wealthy port of Tyre, strengthening Jerusalem and expanding Mediterranean trade."
  },
  {
    year: 1125,
    title: "Jin–Song War",
    description: "The Jin dynasty declared war on Song China, beginning a conflict that would transform East Asia."
  },
  {
    year: 1126,
    title: "Kaifeng Besieged",
    description: "Jin armies besieged the Song capital Kaifeng, beginning the crisis that destroyed the Northern Song dynasty."
  },
  {
    year: 1127,
    title: "Northern Song Falls",
    description: "Jin armies captured Kaifeng and the Song emperors, ending the Northern Song and re-establishing the Song court in the south."
  },
  {
    year: 1128,
    title: "Zengi Unites Power",
    description: "Turkish Muslim ruler Zengi brought Mosul and Aleppo together, creating a stronger threat to the Crusader states."
  },
  {
    year: 1129,
    title: "Rules of Templar Knights",
    description: "The Council of Troyes approved a Latin Rule of 72 clauses, outlining the disciplined ideal of the Templar knight."
  },
  {
    year: 1130,
    title: "Song Yangtze Resistance",
    description: "Southern Song forces trapped a Jin army near the Yangtze River, proving northern conquest could still be resisted."
  },
  {
    year: 1131,
    title: "Antioch Crisis",
    description: "The young prince of Antioch was killed in battle, leaving the northern Crusader frontier more vulnerable to Zengi and regional Muslim powers."
  },
  {
    year: 1132,
    title: "Fire Lance Used",
    description: "Song forces used early gunpowder fire lances at De’an, marking a milestone toward firearms in warfare."
  },
  {
    year: 1133,
    title: "Song Capital Settles",
    description: "The Southern Song court returned to Hangzhou, which became the practical capital of southern China."
  },
  {
    year: 1134,
    title: "Song Counterattack",
    description: "Southern Song armies recovered territory from the Jin, showing China’s southern dynasty could still fight back."
  },
  {
    year: 1135,
    title: "English Anarchy Begins",
    description: "Henry I of England died without a secure male heir, triggering a succession crisis between his nephew and daughter."
  },
  {
    year: 1136,
    title: "Novgorod Republic",
    description: "Novgorod expelled its prince, becoming a powerful merchant republic in northwestern Russia."
  },
  {
    year: 1137,
    title: "Crusaders Defeat at Tripoli",
    description: "Damascene forces defeated Tripoli’s Crusader army, killing its count and weakening the northern Crusader frontier."
  },
  {
    year: 1138,
    title: "Aleppo Earthquake",
    description: "A devastating earthquake struck northern Syria around Aleppo, becoming one of history’s deadliest disasters with 230,000 deaths."
  },
  {
    year: 1139,
    title: "Crossbows Condemned",
    description: "The Second Lateran Council condemned crossbows and bows against Christians, showing Church anxiety over deadly warfare."
  },
  {
    year: 1140,
    title: "Abelard Condemned",
    description: "French thinker Peter Abelard was condemned for controversial theology, showing tensions between reason and Church authority."
  },
  {
    year: 1141,
    title: "King Stephen Captured",
    description: "King Stephen of England was captured at Lincoln, briefly giving Empress Matilda control during the Anarchy (“Lady of the English”)."
  },
  {
    year: 1142,
    title: "Matilda Escapes",
    description: "Stephen of England is released in prisoner-swap and Matilda retreats to Oxford Castle during the Anarchy, reportedly fleeing across snow and ice at night."
  },
  {
    year: 1143,
    title: "King Stephen Defeat",
    description: "King Stephen was defeated near Wilton Abbey, escaping capture while his steward held off Matilda’s forces."
  },
  {
    year: 1144,
    title: "Crusader State Falls",
    description: "Zengi captured Edessa, causing the first major collapse of a Crusader state and triggering calls for the Second Crusade."
  },
  {
    year: 1145,
    title: "Second Crusade Called",
    description: "Pope Eugenius III issued a formal crusade call after Edessa’s fall, launching the Second Crusade movement."
  },
  {
    year: 1146,
    title: "Royals in Second Crusade",
    description: "France’s and Germany’s kings committed to the Second Crusade, planning to aid the Holy Land after Edessa’s fall."
  },
  {
    year: 1147,
    title: "Second Crusade Departs",
    description: "French and German royal armies set out for the Holy Land, beginning the main expedition of the Second Crusade."
  },
  {
    year: 1148,
    title: "Second Crusade Collapses",
    description: "The Second Crusade failed at Damascus, leaving Edessa unrecovered and weakening Crusader confidence in the Holy Land."
  },
  {
    year: 1149,
    title: "Crusaders Crushed",
    description: "The Crusader army of Antioch was destroyed near Inab, strengthening Nur al-Din after the Second Crusade’s failure."
  },
  {
    year: 1150,
    title: "Angkor Wat Completed",
    description: "Around 1150, the Khmer Empire completed Angkor Wat, a vast temple complex and one of humanity’s greatest monuments."
  },
  {
    year: 1151,
    title: "Young Henry Rises",
    description: "Henry, Matilda’s son and Duke of Normandy, inherited Anjou, becoming King Stephen’s strongest rival in England’s civil war."
  },
  {
    year: 1152,
    title: "Young Henry Marries",
    description: "Henry married Eleanor of Aquitaine, adding vast French lands to his rising power."
  },
  {
    year: 1153,
    title: "Anarchy Settled",
    description: "Stephen recognised Henry as heir through the Treaty of Wallingford, ending England’s succession war."
  },
  {
    year: 1154,
    title: "Henry II Crowned",
    description: "Henry II became king of England, founding the Plantagenet dynasty after nearly two decades of civil war (“the Anarchy”)."
  },
  {
    year: 1155,
    title: "Printed Map",
    description: "In Song China, Yang Jia’s encyclopedia included the oldest known printed terrain map, showing western China."
  },
  {
    year: 1156,
    title: "Hōgen Rebellion",
    description: "A succession dispute over Japan’s imperial throne erupted in Kyoto, helping shift power toward samurai military dominance."
  },
  {
    year: 1157,
    title: "Free Fortress",
    description: "Fribourg was founded as a “free fortress” on the Sarine cliffs, becoming a strategic Swiss Zähringen city."
  },
  {
    year: 1158,
    title: "Calatrava Order Founded",
    description: "Spanish monks pledged to defend Calatrava, beginning a major military order of the Reconquista."
  },
  {
    year: 1159,
    title: "Heiji Crisis",
    description: "In late 1159, Japanese court rivalries erupt into the Heiji conflict, helping the Taira defeat the Minamoto."
  },
  {
    year: 1160,
    title: "Heiji Rebellion",
    description: "Rival samurai clans fought in Kyoto, strengthening Taira power and deepening the Minamoto-Taira struggle (started in 1159)."
  },
  {
    year: 1161,
    title: "Gunpowder Navy",
    description: "Song warships used explosive weapons against a Jin fleet at Caishi, helping stop a major invasion of southern China."
  },
  {
    year: 1162,
    title: "Temüjin Born",
    description: "Temüjin, later Genghis Khan, was born on the Mongolian steppe, destined to found history’s largest land empire."
  },
  {
    year: 1163,
    title: "Notre-Dame Begins",
    description: "Construction of Notre-Dame de Paris began on the Île de la Cité, creating a future masterpiece of Gothic architecture."
  },
  {
    year: 1164,
    title: "Crusaders Invade Egypt",
    description: "A Crusader army advanced into Egypt, beginning a brutal contest for control of the Nile."
  },
  {
    year: 1165,
    title: "Egypt Prize",
    description: "Crusader Jerusalem and Syria struggled for influence over Fatimid Egypt, the richest prize between Africa and the Holy Land."
  },
  {
    year: 1166,
    title: "Battles for Nile",
    description: "Syrian forces returned to Egypt, drawing Crusader Jerusalem into a renewed struggle for Cairo and the Nile."
  },
  {
    year: 1167,
    title: "Young Saladin Fights",
    description: "Crusader and Syrian armies fought near Giza, including a young Saladin, beginning his rise in the struggle for Cairo and the Nile."
  },
  {
    year: 1168,
    title: "Bilbeis Massacre",
    description: "A Crusader army massacred Bilbeis, pushing Fatimid Cairo away from Jerusalem and toward Syrian protection."
  },
  {
    year: 1169,
    title: "Saladin Takes Egypt",
    description: "After Syrian forces entered Cairo, Saladin became vizier of Fatimid Egypt, beginning his rise to power."
  },
  {
    year: 1170,
    title: "Saladin Takes Ayla",
    description: "Saladin captured Ayla near today’s Aqaba, threatening Crusader control of routes between Egypt, Arabia and the Red Sea."
  },
  {
    year: 1171,
    title: "Egypt Fatimids Fall",
    description: "Saladin ended the Fatimid Caliphate in Egypt, making Cairo the base of his rising Sunni power."
  },
  {
    year: 1171,
    title: "Venetians Arrested",
    description: "Byzantine authorities arrested Venetians across the empire and confiscated property, shattering Venice–Constantinople relations."
  },
  {
    year: 1172,
    title: "Venetian Disaster",
    description: "Venice’s revenge fleet collapsed from disease and failure, sparking unrest and the murder of its doge."
  },
  {
    year: 1173,
    title: "Pisa Tower Begins",
    description: "Construction began on Pisa’s famous leaning bell tower, later becoming one of medieval Italy’s most iconic monuments."
  },
  {
    year: 1174,
    title: "Saladin Takes Damascus",
    description: "Saladin entered Damascus after his Syrian overlord’s death, beginning his expansion from Egypt into Syria."
  },
  {
    year: 1174,
    title: "Baldwin “The Leper” Crowned",
    description: "The young leper king became ruler of Jerusalem, facing Saladin’s growing power from Egypt and Syria."
  },
  {
    year: 1175,
    title: "Saladin Becomes Sultan",
    description: "The Abbasid caliph recognised Saladin as Sultan of Egypt and Syria, uniting Muslim power against the Crusader states."
  },
  {
    year: 1176,
    title: "Saladin Survives Assassination",
    description: "Disguised Assassins attacked Saladin with daggers near Aleppo, but armour saved him as he consolidated Syria."
  },
  {
    year: 1177,
    title: "Battle of Montgisard",
    description: "The 16-year-old leper king of Jerusalem defeated Saladin near Montgisard, briefly saving the Crusader kingdom."
  },
  {
    year: 1178,
    title: "Templar Frontier Fortress Started",
    description: "Jerusalem began building a powerful castle at Jacob’s Ford, threatening Saladin’s route between Damascus and Egypt."
  },
  {
    year: 1179,
    title: "Templar Frontier Fortress Destroyed",
    description: "Saladin captured and destroyed the Crusader castle at Jacob’s Ford, breaking Jerusalem’s dangerous frontier project."
  },
  {
    year: 1180,
    title: "Saladin Truce",
    description: "Jerusalem and Saladin arranged a two-year truce, briefly pausing the struggle before renewed war."
  },
  {
    year: 1180,
    title: "Genpei War Begins",
    description: "Japan’s Minamoto and Taira clans began a civil war that led to samurai government and the first shogunate."
  },
  {
    year: 1181,
    title: "SN 1181",
    description: "Chinese and Japanese observers recorded a bright new “guest star,” now linked to one of history’s few known supernovae."
  },
  {
    year: 1182,
    title: "Latin Massacre",
    description: "Anti-Latin violence erupted in Constantinople, poisoning relations with Venice, Genoa and the wider Catholic West."
  },
  {
    year: 1183,
    title: "Siege of Kerak",
    description: "Saladin besieged Reynald’s desert fortress after Crusader Red Sea raids threatened Muslim trade and pilgrimage routes."
  },
  {
    year: 1183,
    title: "Kurikara Victory",
    description: "Minamoto forces routed the Taira at Kurikara Pass, turning Japan’s Genpei War against the ruling clan."
  },
  {
    year: 1184,
    title: "Kerak Relieved",
    description: "Saladin besieged Kerak again, but withdrew as Jerusalem’s relief army approached, avoiding a dangerous open battle."
  },
  {
    year: 1185,
    title: "Samurai Rule",
    description: "The Minamoto Clan defeated the Taira Clan, clearing the way for Japan’s first shogunate (Japanese military government)."
  },
  {
    year: 1186,
    title: "Caravan Provocation",
    description: "Reynald of Châtillon plundered a caravan under Saladin’s truce, provoking renewed war between Jerusalem and Saladin."
  },
  {
    year: 1187,
    title: "Battle of Hattin",
    description: "Saladin trapped Jerusalem’s thirsty Crusader army near Hattin, destroying it after Reynald’s truce-breaking provoked war."
  },
  {
    year: 1187,
    title: "Jerusalem Falls",
    description: "Saladin captured Jerusalem after Hattin, ending nearly ninety years of Crusader rule over the holy city."
  },
  {
    year: 1188,
    title: "Tax for Jerusalem",
    description: "England and France imposed a huge crusade tax (“Saladin Tithe” to fund the campaign to recover Jerusalem from Saladin."
  },
  {
    year: 1189,
    title: "Acre Besieged in Third Crusade",
    description: "Jerusalem’s surviving Crusader forces began besieging Acre, opening the main battlefield struggle of the Third Crusade."
  },
  {
    year: 1190,
    title: "Teutonic Hospital in Acre",
    description: "German crusaders founded a field hospital at Acre, later linked to the rise of the Teutonic Order."
  },
  {
    year: 1191,
    title: "Richard Advances",
    description: "Richard the Lionheart captured Acre and defeated Saladin at Arsuf, giving the Third Crusade its greatest victories."
  },
  {
    year: 1192,
    title: "Third Crusade Ends",
    description: "Richard the Lionheart and Saladin agreed the Treaty of Jaffa, leaving Jerusalem Muslim but open to Christian pilgrims."
  },
  {
    year: 1192,
    title: "Shogunate Begins",
    description: "Japan’s first shogunate began at Kamakura, where military rulers governed while the emperor remained symbolically important."
  },
  {
    year: 1193,
    title: "Saladin Dies",
    description: "Saladin died in Damascus months after the Third Crusade, leaving his Ayyubid empire divided among relatives."
  },
  {
    year: 1194,
    title: "Richard Released",
    description: "Richard the Lionheart was freed after paying a huge ransom to the Holy Roman Emperor, ending his captivity after the Third Crusade."
  },
  {
    year: 1195,
    title: "Temüjin Launches First Campaign",
    description: "Temüjin attacked rival Tatars on the eastern steppe, entering the dangerous frontier politics between Mongols and Jin China."
  },
  {
    year: 1196,
    title: "Temüjin First Success",
    description: "Temüjin helped defeat the Tatars with Jin support, restoring prestige before his rise as Genghis Khan."
  },
  {
    year: 1197,
    title: "Acre Window Fall",
    description: "The Holy Land’s Crusader ruler died in Acre after falling from a palace window, deepening succession instability."
  },
  {
    year: 1198,
    title: "Fourth Crusade Called",
    description: "The new pope called a crusade to recover Jerusalem, launching the campaign that later attacked Constantinople."
  },
  {
    year: 1199,
    title: "Fourth Crusade Vow",
    description: "At a tournament in northern France, leading nobles took the cross, turning the crusade call into a real aristocratic movement."
  },
  {
    year: 1200,
    title: "Egypt Route Chosen for Fourth Crusade",
    description: "Crusader leaders planned a sea expedition against Egypt, unknowingly setting the path toward Venice and Constantinople."
  }
];
