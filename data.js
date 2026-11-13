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
  },
  {
    year: 1501,
    title: "Basel and Schaffhausen Join",
    description: "Basel and Schaffhausen join the Swiss Confederacy after the Swabian War, expanding it to eleven members."
  },
  {
    year: 1502,
    title: "Da Gama Returns",
    description: "Vasco da Gama returns to India with an armed fleet, turning Portuguese exploration into violent imperial expansion."
  },
  {
    year: 1503,
    title: "Portugal Fortifies Kochi",
    description: "The Portuguese build Fort Emmanuel at Kochi with local royal permission, establishing their first fortress in India."
  },
  {
    year: 1503,
    title: "Casa de Contratación Founded",
    description: "Spain establishes Seville’s Casa de Contratación to regulate American trade, migration, navigation, and the growing colonial empire."
  },
  {
    year: 1504,
    title: "Michelangelo Completes David",
    description: "Michelangelo completes David; Florence installs the colossal marble statue outside Palazzo della Signoria as a republican symbol."
  },
  {
    year: 1505,
    title: "Michelangelo Summoned to Rome",
    description: "Pope Julius II summons Michelangelo to design his monumental tomb, beginning a troubled forty-year project."
  },
  {
    year: 1506,
    title: "Pontifical Swiss Guard Founded",
    description: "One hundred fifty Swiss soldiers enter Rome, formally beginning their enduring service protecting the pope."
  },
  {
    year: 1507,
    title: "America Receives Its Name",
    description: "Martin Waldseemüller labels the newly recognized continent “America,” honoring navigator Amerigo Vespucci on his revolutionary world map."
  },
  {
    year: 1508,
    title: "Colonization of Puerto Rico Begins",
    description: "Juan Ponce de León establishes Caparra, beginning Spain’s colonial settlement of Puerto Rico."
  },
  {
    year: 1509,
    title: "Ponce de León Governs Puerto Rico",
    description: "King Ferdinand appoints Ponce de León governor, consolidating Spanish settlement and gold mining across Puerto Rico."
  },
  {
    year: 1510,
    title: "Portugal Captures Goa",
    description: "Afonso de Albuquerque captures Goa from Bijapur, establishing the future capital of Portugal’s Asian empire."
  },
  {
    year: 1510,
    title: "Spain Creates Settlement",
    description: "Vasco Núñez de Balboa founds Santa María del Darién, Spain’s first permanent settlement on mainland America."
  },
  {
    year: 1511,
    title: "Conquest of Cuba Begins",
    description: "Diego Velázquez begins conquering Cuba, founding Baracoa as Spain’s first permanent settlement on the island."
  },
  {
    year: 1512,
    title: "Portuguese Reach the Spice Islands",
    description: "António de Abreu’s expedition reaches Banda, becoming the first recorded European voyage to the Spice Islands."
  },
  {
    year: 1512,
    title: "Sistine Chapel Ceiling Completed",
    description: "Michelangelo unveils his completed Sistine Chapel ceiling, transforming biblical narrative into a defining achievement of Western art."
  },
  {
    year: 1513,
    title: "Portuguese Reach China",
    description: "Jorge Álvares reaches China by sea, initiating Portuguese contact and future trade with the Ming Empire."
  },
  {
    year: 1513,
    title: "Ponce de León Reaches Florida",
    description: "Juan Ponce de León reaches and names Florida while searching for new lands northwest of Puerto Rico."
  },
  {
    year: 1514,
    title: "Swiss Domination of Milan Continues",
    description: "The Confederates maintain Massimiliano Sforza as Milan’s duke, effectively controlling the duchy before Marignano."
  },
  {
    year: 1515,
    title: "Swiss Defeated at Marignano",
    description: "Francis I defeats the Swiss Confederates near Milan, ending their attempt to dominate northern Italy."
  },
  {
    year: 1516,
    title: "Bavaria Issues the Reinheitsgebot",
    description: "Bavaria’s dukes restrict beer ingredients to barley, hops, and water under the celebrated Reinheitsgebot."
  },
  {
    year: 1517,
    title: "Luther Issues the Ninety-Five Theses",
    description: "Martin Luther challenges indulgence sales, helping ignite the Protestant Reformation and transform European politics."
  },
  {
    year: 1518,
    title: "Cortés Prepares His Mexico Expedition",
    description: "Cuba’s governor appoints Hernán Cortés to command an expedition to explore, trade, and establish settlements in Mexico."
  },
  {
    year: 1519,
    title: "Cortés Enters Tenochtitlan",
    description: "Hernán Cortés lands in Mexico, forms Indigenous alliances, and enters Tenochtitlan as Moctezuma’s guest."
  },
  {
    year: 1520,
    title: "Tenochtitlan Expels Cortés",
    description: "Mexica forces drive Cortés from Tenochtitlan during La Noche Triste; Moctezuma dies amid the uprising."
  },
  {
    year: 1521,
    title: "Fall of Tenochtitlan",
    description: "Spanish and Indigenous allied forces capture Tenochtitlan after a devastating siege, ending the independent Mexica Empire."
  },
  {
    year: 1522,
    title: "First Circumnavigation Completed",
    description: "Juan Sebastián Elcano returns the Victoria and 18 survivors to Spain, completing history’s first circumnavigation (Magellan died during travels)."
  },
  {
    year: 1522,
    title: "Luther Publishes His German New Testament",
    description: "Luther publishes his German New Testament, making scripture widely accessible and shaping written German."
  },
  {
    year: 1523,
    title: "Zürich Backs Zwingli’s Reformation",
    description: "Zürich’s council endorses Zwingli after public disputations, giving civic authority to the city’s Reformation."
  },
  {
    year: 1524,
    title: "Zürich Removes Church Images",
    description: "Zürich’s government orders religious images removed from churches as Zwingli’s Reformation transforms public worship."
  },
  {
    year: 1525,
    title: "Prussia Becomes the First Protestant State",
    description: "Albert secularizes the Teutonic Order’s lands as Lutheran Prussia, creating Europe’s first Protestant state."
  },
  {
    year: 1526,
    title: "Baden Disputation Divides Switzerland",
    description: "The Baden Disputation strengthens Catholic opposition to Zwingli, exposing Switzerland’s deepening confessional division."
  },
  {
    year: 1527,
    title: "Sack of Rome",
    description: "Mutinous troops of Charles V sack Rome; 147 Swiss Guards die protecting Pope Clement VII."
  },
  {
    year: 1528,
    title: "Bern Adopts the Reformation",
    description: "After a major disputation, Bern adopts Zwinglian reform, abolishes monasteries, and assumes control of the church."
  },
  {
    year: 1528,
    title: "Pizarro Reaches the Inca Empire",
    description: "Pizarro reaches Tumbes, gaining his first direct evidence of the wealthy and powerful Inca Empire."
  },
  {
    year: 1529,
    title: "The Kappel Milk Soup",
    description: "Catholic and Reformed Swiss armies avoid battle at Kappel, symbolized by their legendary shared milk soup."
  },
  {
    year: 1529,
    title: "First Ottoman Siege of Vienna",
    description: "Suleiman’s Ottoman army besieges Vienna but withdraws, halting its immediate advance into Central Europe."
  },
  {
    year: 1530,
    title: "Augsburg Confession Presented",
    description: "Lutheran princes present their beliefs to Charles V, establishing Lutheranism’s central statement of faith."
  },
  {
    year: 1530,
    title: "Portugal Begins Colonizing Brazil",
    description: "Portugal sends Martim Afonso de Sousa to secure Brazil’s coast and establish permanent colonial settlements."
  },
  {
    year: 1531,
    title: "Schmalkaldic League Formed",
    description: "German Protestant princes and cities form the Schmalkaldic League for mutual defence against imperial religious enforcement."
  },
  {
    year: 1531,
    title: "Pizarro Establishes a Foothold",
    description: "Pizarro’s third expedition establishes a foothold at Coaque in present-day Ecuador while awaiting reinforcements."
  },
  {
    year: 1532,
    title: "Atahualpa Captured at Cajamarca",
    description: "Pizarro ambushes and captures Atahualpa at Cajamarca with a small Spanish force and Indigenous allies."
  },
  {
    year: 1532,
    title: "São Vicente Founded in Brazil",
    description: "Martim Afonso de Sousa founds São Vicente, Brazil’s first permanent Portuguese settlement and an early sugar centre."
  },
  {
    year: 1533,
    title: "Atahualpa Executed and Cuzco Captured",
    description: "After receiving an enormous ransom, Pizarro executes Atahualpa, occupies Cuzco, and installs Manco Inca."
  },
  {
    year: 1533,
    title: "Henry VIII Excommunicated",
    description: "Clement VII conditionally excommunicates Henry VIII of England, named “Defender of the Faith” for opposing Luther twelve years earlier."
  },
  {
    year: 1534,
    title: "Henry VIII Becomes Head of England’s Church",
    description: "Parliament declares Henry supreme head of the Church of England, formally severing Rome’s ecclesiastical authority."
  },
  {
    year: 1535,
    title: "Pizarro Founds Lima",
    description: "Pizarro founds Lima as Spain’s coastal capital and administrative centre for its emerging Peruvian colony."
  },
  {
    year: 1535,
    title: "Thomas More Executed",
    description: "Henry VIII executes former chancellor Thomas More for refusing to recognize royal supremacy over the English Church."
  },
  {
    year: 1536,
    title: "Anne Boleyn Executed",
    description: "Anne Boleyn is executed on disputed treason charges; Henry VIII marries Jane Seymour eleven days later."
  },
  {
    year: 1536,
    title: "Calvin Publishes the Institutes",
    description: "John Calvin publishes his Institutes, providing a systematic foundation for Reformed Protestant theology."
  },
  {
    year: 1537,
    title: "Ottomans Besiege Corfu",
    description: "Ottoman forces besiege Venetian Corfu but withdraw after strong resistance, beginning another Ottoman–Venetian war."
  },
  {
    year: 1538,
    title: "Ottomans Triumph at Preveza",
    description: "Barbarossa defeats the larger Holy League fleet, establishing Ottoman naval dominance in the eastern Mediterranean."
  },
  {
    year: 1539,
    title: "De Soto Lands in Florida",
    description: "De Soto lands in Florida, beginning a violent three-year march through southeastern Indigenous societies."
  },
  {
    year: 1540,
    title: "Europeans Reach the Grand Canyon",
    description: "García López de Cárdenas’s party becomes the first recorded European group to see the Grand Canyon."
  },
  {
    year: 1541,
    title: "Santiago de Chile Founded",
    description: "Pedro de Valdivia founds Santiago as a base for Spain’s conquest and colonization of Chile."
  },
  {
    year: 1542,
    title: "Orellana Navigates the Amazon",
    description: "Francisco de Orellana’s expedition completes the first recorded European voyage down the Amazon to the Atlantic."
  },
  {
    year: 1543,
    title: "Portuguese Reach Japan",
    description: "Portuguese traders reach Tanegashima and introduce matchlock firearms, soon transforming warfare throughout Japan."
  },
  {
    year: 1543,
    title: "Copernicus Publishes His Heliocentric Theory",
    description: "Copernicus publishes De Revolutionibus, placing the Sun rather than Earth at the centre of the planetary system."
  },
  {
    year: 1544,
    title: "Japan Begins Manufacturing Matchlock Guns",
    description: "Japanese gunsmiths rapidly reproduce the Portuguese matchlock, beginning its transformation of warfare during the Sengoku period."
  },
  {
    year: 1545,
    title: "Potosí Silver Exploitation Begins",
    description: "Spaniards begin exploiting Cerro Rico’s enormous silver deposits in modern-day Bolivia, reshaping colonial labour and global trade."
  },
  {
    year: 1546,
    title: "Silver Discovered at Zacatecas",
    description: "Spanish prospectors find rich silver deposits at Zacatecas in modern-day Mexico, creating a major colonial mining centre."
  },
  {
    year: 1547,
    title: "Ivan IV Crowned First Russian Tsar",
    description: "Ivan the Terrible adopts the title of tsar, asserting an imperial and increasingly autocratic vision of Muscovite rule."
  },
  {
    year: 1548,
    title: "Government-General of Brazil Created",
    description: "Portugal centralizes Brazil’s colonies, appointing Tomé de Sousa governor-general and ordering a fortified capital at Bahia."
  },
  {
    year: 1549,
    title: "Salvador Becomes Brazil’s First Capital",
    description: "Portugal founds Salvador da Bahia as Brazil’s first capital and headquarters of centralized colonial government."
  },
  {
    year: 1550,
    title: "Valladolid Debate Begins",
    description: "Las Casas and Sepúlveda debate the morality and legality of Spain’s conquest of Indigenous Americans."
  },
  {
    year: 1551,
    title: "University of San Marcos Founded",
    description: "Spain charters San Marcos in Lima, today recognized as the Americas’ oldest continuously operating university."
  },
  {
    year: 1552,
    title: "Las Casas Condemns Colonial Atrocities",
    description: "Las Casas publishes his influential indictment of Spanish violence and exploitation against Indigenous Americans."
  },
  {
    year: 1553,
    title: "Michael Servetus Executed in Geneva",
    description: "Geneva burns the Spanish physician for heresy, exposing religious intolerance within the Protestant Reformation."
  },
  {
    year: 1553,
    title: "Royal University of Mexico Opens",
    description: "The university begins teaching theology, law, medicine and arts, expanding higher education in New Spain."
  },
  {
    year: 1554,
    title: "São Paulo Founded",
    description: "Jesuit missionaries establish a college in Brazil, creating the settlement that grows into the city of São Paulo."
  },
  {
    year: 1555,
    title: "Peace of Augsburg",
    description: "The Holy Roman Empire legally recognises Lutheranism alongside Catholicism. Secular princes gain the right to choose between the two faiths for their territories. It included the famous formula “cuius regio eius religio” (“whose realm, his religion”)."
  },
  {
    year: 1556,
    title: "Shaanxi Earthquake Devastates China",
    description: "A catastrophic earthquake strikes Shaanxi and neighbouring regions during the Ming dynasty. Traditionally estimated to have caused around 830,000 deaths, including its aftermath, it is widely regarded as the deadliest earthquake in recorded history."
  },
  {
    year: 1557,
    title: "Portuguese Settlement Established at Macau",
    description: "Ming authorities permit Portuguese merchants to establish a permanent trading settlement at Macau for annual rent."
  },
  {
    year: 1558,
    title: "Elizabeth I Becomes Queen",
    description: "Elizabeth succeeds her half-sister Mary I as ruler of England, beginning the Elizabethan era."
  },
  {
    year: 1559,
    title: "Elizabethan Religious Settlement",
    description: "Parliament restores royal supremacy over England’s Church and establishes Protestant worship through the Acts of Supremacy and Uniformity."
  },
  {
    year: 1560,
    title: "Nicot Sends Tobacco to France",
    description: "French ambassador Jean Nicot sends tobacco from Lisbon to Catherine de’ Medici as a headache remedy. Nicotine is named after him."
  },
  {
    year: 1561,
    title: "Madrid Becomes Spain’s Capital",
    description: "Philip II transfers his court from Toledo to Madrid, establishing the city as Spain’s political centre."
  },
  {
    year: 1562,
    title: "French Wars of Religion Begin",
    description: "Catholic troops massacre Protestant worshippers at Wassy, helping ignite decades of religious warfare to decide France’s religion."
  },
  {
    year: 1563,
    title: "Northern Seven Years’ War Begins",
    description: "Sweden fights Denmark-Norway, Lübeck and Poland-Lithuania, beginning seven years of warfare over dominance in northern Europe."
  },
  {
    year: 1564,
    title: "Spain Sails for the Philippines",
    description: "Miguel López de Legazpi departs Mexico, launching the expedition that establishes Spain’s enduring Philippine presence."
  },
  {
    year: 1565,
    title: "Great Siege of Malta Repelled",
    description: "The Knights Hospitaller and Maltese defenders withstand an Ottoman siege, preserving their strategically important island stronghold."
  },
  {
    year: 1565,
    title: "Spanish Found St. Augustine",
    description: "Pedro Menéndez de Avilés establishes Florida’s enduring settlement, now the oldest continuously inhabited European-founded city in the continental United States."
  },
  {
    year: 1566,
    title: "Valletta Founded",
    description: "Following the Ottoman siege, the Knights Hospitaller lay the foundation stone of Malta’s fortified future capital, named Valletta."
  },
  {
    year: 1567,
    title: "Caracas Founded",
    description: "Spanish conquistador Diego de Losada establishes Santiago de León de Caracas, the future Venezuelan capital, following fierce Indigenous resistance."
  },
  {
    year: 1568,
    title: "Nobunaga Enters Kyoto",
    description: "Japanese warlord Oda Nobunaga enters the imperial capital and installs Ashikaga Yoshiaki as shogun, greatly expanding his influence."
  },
  {
    year: 1569,
    title: "Mercator Publishes World Map",
    description: "Gerardus Mercator introduces his famous projection, depicting constant compass courses as straight lines to aid navigation."
  },
  {
    year: 1570,
    title: "Nobunaga Wins at Anegawa",
    description: "Oda Nobunaga and Tokugawa Ieyasu defeat the allied Azai and Asakura clans near Japan’s Lake Biwa."
  },
  {
    year: 1571,
    title: "Nobunaga Destroys Mount Hiei’s Monasteries",
    description: "Oda Nobunaga’s forces burn the powerful Buddhist complex near Kyoto, massacring monks and civilians sheltering there."
  },
  {
    year: 1572,
    title: "Nobunaga Challenges the Shogun",
    description: "Oda Nobunaga issues seventeen articles criticising Ashikaga Yoshiaki’s conduct, deepening the political rupture that leads to the shogun’s expulsion the following year."
  },
  {
    year: 1572,
    title: "Saint Bartholomew’s Day Massacre",
    description: "Catholics massacre thousands of French Protestants, beginning in Paris; survivors flee abroad, including to Geneva."
  },
  {
    year: 1573,
    title: "Nobunaga Ends Ashikaga Rule",
    description: "Oda Nobunaga expels Shogun Ashikaga Yoshiaki from Kyoto, effectively ending the Muromachi shogunate and strengthening his campaign to unify Japan."
  },
  {
    year: 1573,
    title: "Drake Captures Spanish Treasure",
    description: "Francis Drake and French allies ambush a mule train carrying gold and silver across Panama, returning to England with substantial riches."
  },
  {
    year: 1574,
    title: "Nobunaga Crushes Nagashima",
    description: "Oda Nobunaga destroys the fortified Ikkō-ikki communities at Nagashima, burning trapped defenders and civilians alive after years of resistance to his expansion."
  },
  {
    year: 1575,
    title: "Nobunaga Wins at Nagashino",
    description: "Oda Nobunaga and Tokugawa Ieyasu defeat Takeda Katsuyori’s army in Japan, demonstrating the devastating effectiveness of massed firearms behind defensive palisades. Nobunaga decided to give every man three guns, which resulted in a continuous fire, which proved highly effective."
  },
  {
    year: 1576,
    title: "Drake Returns from Ireland",
    description: "Francis Drake returns to England with Thomas Doughty, strengthening court connections that help secure backing for his next major overseas expedition."
  },
  {
    year: 1577,
    title: "Drake Begins Circumnavigation",
    description: "Francis Drake sails from Plymouth with five ships, beginning the voyage that carries him around the world while raiding Spain’s overseas empire."
  },
  {
    year: 1578,
    title: "Drake Enters the Pacific",
    description: "Francis Drake navigates the Strait of Magellan; subsequent storms scatter his fleet, leaving the Golden Hind to continue his global voyage."
  },
  {
    year: 1579,
    title: "Drake Reaches California",
    description: "Francis Drake lands on North America’s Pacific coast and repairs the Golden Hind. When ambushed by local folks, Drake became friendly with natives. He claimed the land for the English Queen and called it Nova Albion."
  },
  {
    year: 1580,
    title: "Drake Completes Circumnavigation",
    description: "Francis Drake returns to Plymouth aboard the Golden Hind, becoming the first English commander to circumnavigate the globe, carrying rich Spanish plunder."
  },
  {
    year: 1580,
    title: "Iberian Union Begins",
    description: "Philip II’s forces defeat his Portuguese rival at Alcântara, securing Portugal’s crown and bringing both kingdoms under one monarch while preserving separate institutions."
  },
  {
    year: 1581,
    title: "Drake Receives Knighthood",
    description: "Elizabeth I honours Francis Drake aboard the Golden Hind at Deptford following his circumnavigation; a French diplomat performs the actual knighting ceremony."
  },
  {
    year: 1581,
    title: "Dutch Reject Philip II",
    description: "The Act of Abjuration renounces the Spanish king’s sovereignty over rebellious provinces, asserting that rulers who oppress their subjects may be replaced."
  },
  {
    year: 1582,
    title: "Nobunaga Dies at Honnō-ji",
    description: "Betrayed by general Akechi Mitsuhide, Oda Nobunaga dies in Kyoto; Hideyoshi soon defeats Mitsuhide, positioning himself to continue Japan’s unification."
  },
  {
    year: 1582,
    title: "Gregorian Calendar Introduced",
    description: "Pope Gregory XIII replaces the Julian calendar; in the first adopting Catholic countries, October 4 is followed immediately by October 15."
  },
  {
    year: 1583,
    title: "Hideyoshi Wins at Shizugatake",
    description: "Hideyoshi defeats rival Shibata Katsuie, strengthening his position as Nobunaga’s successor, and begins constructing Osaka Castle as his new power base."
  },
  {
    year: 1584,
    title: "William of Orange Assassinated",
    description: "Balthasar Gérard shoots the Dutch Revolt’s leading figure in Delft, depriving resistance to Spanish rule of its most prominent political leader."
  },
  {
    year: 1585,
    title: "England Backs the Dutch Rebels",
    description: "Through the Treaty of Nonsuch, Elizabeth I commits troops and financial support, bringing England into direct military confrontation with Spain."
  },
  {
    year: 1586,
    title: "Drake Raids Spain’s American Empire",
    description: "Francis Drake captures Santo Domingo and Cartagena, exacting substantial ransoms, then destroys St Augustine in Florida during his Atlantic campaign."
  },
  {
    year: 1587,
    title: "Drake Raids Cádiz",
    description: "Francis Drake destroys Spanish shipping inside Cádiz harbour, disrupting Armada preparations; Elizabeth’s revised orders forbidding attacks on Spanish ports fail to reach him."
  },
  {
    year: 1588,
    title: "Spanish Armada Defeated",
    description: "The Spanish Armada was launched with around 150 heavily armed ships. This massive deployment of Spanish naval might was meant first to overthrow England, but suffered logistical difficulties."
  },
  {
    year: 1589,
    title: "English Counter-Armada Fails",
    description: "Francis Drake and John Norris lead a disastrous expedition against Spain and Portugal, failing to capture Lisbon and suffering devastating losses."
  },
  {
    year: 1590,
    title: "Hideyoshi Reunifies Japan",
    description: "Toyotomi Hideyoshi defeats the Hōjō clan at Odawara, bringing Japan’s major warlords under his authority after generations of civil warfare."
  },
  {
    year: 1591,
    title: "Hideyoshi Plans Korean Invasion",
    description: "After Korea refuses passage for an attack on Ming China, Toyotomi Hideyoshi announces his intention to invade, preparing the following year’s campaign."
  },
  {
    year: 1592,
    title: "Japan Invades Korea",
    description: "Toyotomi Hideyoshi launches an invasion aimed at creating unity and conquering China, beginning a devastating war involving Japanese, Korean and Ming Chinese forces."
  },
  {
    year: 1592,
    title: "Madre de Deus Captured",
    description: "English privateers seize the Portuguese carrack Madre de Deus near the Azores as it returns from India along Portugal’s Asian trade route."
  },
  {
    year: 1593,
    title: "Shakespeare’s First Published Work",
    description: "Venus and Adonis appears in print, establishing Shakespeare’s reputation as a poet before any of his plays are published in England."
  },
  {
    year: 1594,
    title: "Shakespeare’s Theatre Company Forms",
    description: "The Lord Chamberlain’s Men emerges in London, with Shakespeare as actor, playwright and shareholder; the company later builds the celebrated Globe Theatre."
  },
  {
    year: 1595,
    title: "Dutch Fleet Sails for Asia",
    description: "Cornelis de Houtman departs with four ships on the first Dutch expedition to the East Indies, challenging Portugal’s lucrative spice trade."
  },
  {
    year: 1596,
    title: "Dutch Fleet Reaches Java",
    description: "Cornelis de Houtman’s expedition arrives at Banten in present-day Indonesia, opening direct Dutch access to Asian spice markets despite violent commercial disputes."
  },
  {
    year: 1596,
    title: "English Forces Capture Cádiz",
    description: "An expedition led by the Earl of Essex and Lord Howard captures and sacks Spain’s major Atlantic port during the Anglo-Spanish War."
  },
  {
    year: 1597,
    title: "Korean Victory at Myeongnyang",
    description: "During Japan’s renewed invasion, Admiral Yi Sun-sin defeats a much larger Japanese fleet with thirteen warships, preserving Korea’s remaining naval resistance."
  },
  {
    year: 1598,
    title: "Hideyoshi Dies; Japan Withdraws",
    description: "Toyotomi Hideyoshi’s death triggers Japanese withdrawal from Korea, ending the devastating invasions and leaving his young heir dependent on powerful rival regents."
  },
  {
    year: 1599,
    title: "Globe Theatre Opens",
    description: "Shakespeare’s company opens the Globe in London, creating the playhouse where audiences first experience many of his greatest tragedies, histories and comedies."
  },
  {
    year: 1600,
    title: "East India Company Founded",
    description: "Elizabeth I grants English merchants a royal charter for eastern trade, establishing the company that later becomes a major colonial power in India."
  },
  {
    year: 1601,
    title: "English East India Company Sets Sail",
    description: "James Lancaster commands the company’s first expedition to Asia, seeking spices and trading opportunities in what is now Indonesia."
  },
  {
    year: 1601,
    title: "Russia’s Great Famine Begins",
    description: "Severe weather destroys harvests, beginning a famine lasting until 1603 and deepening the instability of Russia’s Time of Troubles."
  },
  {
    year: 1602,
    title: "Dutch East India Company Founded",
    description: "Dutch trading companies merge into the VOC, granted a monopoly over Dutch trade in Asia and powers to wage war, conclude treaties and establish colonies."
  },
  {
    year: 1603,
    title: "England and Scotland Share a King",
    description: "Elizabeth I dies, ending the Tudor dynasty. Scotland’s James VI succeeds as James I of England, uniting the crowns while both kingdoms retain separate institutions."
  },
  {
    year: 1603,
    title: "Tokugawa Shogunate Established",
    description: "Tokugawa Ieyasu becomes shogun, establishing his military government at Edo, present-day Tokyo. His dynasty will rule Japan for more than 250 years."
  },
  {
    year: 1604,
    title: "Galileo Formulates the Law of Falling Bodies",
    description: "Galileo Galilei states that falling distance grows with time squared: doubling the falling time quadruples the distance, a crucial step towards modern mechanics."
  },
  {
    year: 1604,
    title: "Kepler’s Supernova Appears",
    description: "A brilliant new star becomes visible, observed by Johannes Kepler. It is the most recent supernova in our Milky Way witnessed with the naked eye."
  },
  {
    year: 1605,
    title: "Don Quixote Published",
    description: "Miguel de Cervantes publishes the first part of Don Quixote, following a knight obsessed with chivalric romances and his practical companion, Sancho Panza."
  },
  {
    year: 1605,
    title: "Quirós Seeks the Unknown Southern Continent",
    description: "Pedro Fernández de Quirós sails from Peru on a Spanish expedition to find Terra Australis Incognita, the vast southern continent Europeans believed existed."
  },
  {
    year: 1606,
    title: "Janszoon Reaches Australia",
    description: "Dutch navigator Willem Janszoon lands on Cape York Peninsula aboard the Duyfken, making the first recorded European contact with Australia’s Indigenous peoples and charting its northern coast."
  },
  {
    year: 1607,
    title: "Jamestown Founded",
    description: "English colonists establish Jamestown in present-day Virginia, the first permanent English settlement in North America and a foothold for the future Thirteen Colonies."
  },
  {
    year: 1607,
    title: "Dutch Defeat Spain at Gibraltar",
    description: "A Dutch fleet attacks and defeats Spanish warships at Gibraltar during the Eighty Years’ War. Dutch commander Jacob van Heemskerck dies in the battle."
  },
  {
    year: 1608,
    title: "Champlain Founds Quebec",
    description: "Samuel de Champlain establishes a fortified trading settlement on the Saint Lawrence River in present-day Canada, laying the foundations of Quebec City and a lasting French colonial presence."
  },
  {
    year: 1609,
    title: "Hudson Explores His Namesake River",
    description: "Sailing for the Dutch East India Company, English navigator Henry Hudson explores the river in present-day New York while searching for a passage to Asia."
  },
  {
    year: 1610,
    title: "Hudson Enters Hudson Bay",
    description: "Seeking a Northwest Passage to Asia, Henry Hudson explores the vast bay in present-day Canada that now bears his name, before ice traps his ship for winter."
  },
  {
    year: 1611,
    title: "Hudson Cast Adrift",
    description: "Mutineers abandon Henry Hudson, his son and seven companions in a small boat after wintering in present-day Canada. They are never seen again."
  },
  {
    year: 1611,
    title: "King James Bible Published",
    description: "An English Bible commissioned by James I appears, becoming one of the most influential translations in the English-speaking world and shaping religious language for centuries."
  },
  {
    year: 1612,
    title: "Russian Militia Retakes Moscow",
    description: "Forces led by Kuzma Minin and Dmitry Pozharsky compel the Polish garrison to surrender, ending its occupation of Moscow during Russia’s Time of Troubles."
  },
  {
    year: 1613,
    title: "Romanov Dynasty Begins",
    description: "Sixteen-year-old Michael Romanov is elected tsar of Russia after years of turmoil, founding the dynasty that will rule until the revolution of 1917."
  },
  {
    year: 1614,
    title: "Pocahontas Marries John Rolfe",
    description: "Pocahontas, daughter of Powhatan, marries English tobacco planter John Rolfe in Virginia, helping end the First Anglo-Powhatan War and establish a temporary peace."
  },
  {
    year: 1615,
    title: "Don Quixote’s Second Part Published",
    description: "Miguel de Cervantes publishes the conclusion of Don Quixote, continuing the adventures of the idealistic knight and Sancho Panza ten years after the first part."
  },
  {
    year: 1616,
    title: "Dirk Hartog Lands in Western Australia",
    description: "Dutch captain Dirk Hartog reaches an island off Western Australia and leaves an inscribed pewter plate, preserving physical evidence of his voyage aboard the Eendracht."
  },
  {
    year: 1616,
    title: "Dutch Navigators Round Cape Horn",
    description: "Willem Schouten and Jacob le Maire become the first recorded Europeans to round Cape Horn, establishing a route into the Pacific south of the Strait of Magellan."
  },
  {
    year: 1617,
    title: "Istanbul’s Blue Mosque Completed",
    description: "Commissioned by Sultan Ahmed I, the monumental mosque is completed in Istanbul, its cascading domes, six minarets and blue tiles becoming landmarks of Ottoman architecture."
  },
  {
    year: 1618,
    title: "Defenestration of Prague Sparks Thirty Years’ War",
    description: "Protestant nobles throw two Catholic royal officials and their secretary from a Prague Castle window over religious grievances. All survive, but the incident sparks the Bohemian Revolt and Thirty Years’ War."
  },
  {
    year: 1618,
    title: "Walter Raleigh Executed",
    description: "After his failed search for El Dorado and his men’s unauthorised attack on a Spanish settlement, Raleigh is beheaded at Westminster under a revived treason sentence. Inspecting the axe, he reportedly remarks: “This is a sharp medicine, but it is a physician for all diseases and miseries.”"
  },
  {
    year: 1619,
    title: "Dutch Establish Batavia",
    description: "Jan Pieterszoon Coen establishes Batavia on the site of Jayakarta, present-day Jakarta, creating a fortified centre for the Dutch East India Company’s expanding Asian empire."
  },
  {
    year: 1620,
    title: "Mayflower Settlers Establish Plymouth",
    description: "The Mayflower reaches present-day Massachusetts. Its passengers agree to the Mayflower Compact and establish Plymouth Colony, including a community of English religious separatists known as the Pilgrims."
  },
  {
    year: 1621,
    title: "Plymouth Harvest Feast Becomes Thanksgiving Symbol",
    description: "English colonists and Wampanoag people share a harvest gathering at Plymouth, later remembered as the “First Thanksgiving,” following an agreement of mutual support."
  },
  {
    year: 1621,
    title: "Dutch West India Company Founded",
    description: "The Dutch Republic charters the West India Company, granting extensive rights over Atlantic trade and colonisation, expanding Dutch ambitions in the Americas and along Africa’s coast."
  },
  {
    year: 1622,
    title: "Portugal Loses Hormuz",
    description: "Safavid Persian troops, supported by English East India Company ships, capture Hormuz in present-day Iran, ending Portuguese control of a strategic gateway to Persian Gulf trade."
  },
  {
    year: 1623,
    title: "Dutch West India Company Reaches New Netherland",
    description: "The company sends the Mackreel to New Netherland, including present-day New York, expanding Dutch trading activity."
  },
  {
    year: 1624,
    title: "Settlers Arrive in New Netherland",
    description: "Families sent by the Dutch West India Company establish permanent settlements in present-day New York and neighbouring areas, turning an existing trading presence into a colonial society."
  },
  {
    year: 1625,
    title: "New Amsterdam Founding Year",
    description: "The Dutch West India Company directs the establishment of a fort and settlement on Manhattan, laying the foundations of New Amsterdam, the future New York City."
  },
  {
    year: 1626,
    title: "St Peter’s Basilica Consecrated",
    description: "Pope Urban VIII consecrates the rebuilt St Peter’s Basilica in Rome, marking a milestone in the monumental project begun in 1506 and shaped by architects including Michelangelo."
  },
  {
    year: 1627,
    title: "Dutch Chart Australia’s Southern Coast",
    description: "Captain François Thijssen, carrying official Pieter Nuyts aboard the Gulden Zeepaert, charts approximately 1,500 kilometres of southern Australia, greatly extending European geographical knowledge of the continent."
  },
  {
    year: 1628,
    title: "Dutch Chart Australia’s Northwest Coast",
    description: "Gerrit Frederikszoon de Witt sails the Vianen along approximately 370 kilometres of Australia’s northwest coast, adding the Pilbara region to Dutch maps as “De Witt’s Land.”"
  },
  {
    year: 1629,
    title: "Batavia Shipwreck Leads to Massacre",
    description: "The Dutch ship Batavia strikes a reef off Western Australia. Among the stranded survivors, mutineers seize power and murder men, women and children before rescuers intervene."
  },
  {
    year: 1630,
    title: "Boston Founded by Puritan Settlers",
    description: "John Winthrop’s settlers establish Boston in present-day Massachusetts, creating a centre for the Massachusetts Bay Colony. Massachusetts takes its name from the Indigenous Massachusett people, meaning roughly ‘at the great hill.’"
  },
  {
    year: 1631,
    title: "Vesuvius Erupts Catastrophically",
    description: "Mount Vesuvius erupts near Naples, sending a towering ash cloud and destructive flows across surrounding settlements, beginning a new period of sustained volcanic activity."
  },
  {
    year: 1632,
    title: "Galileo Publishes His Dialogue",
    description: "Galileo’s Dialogue Concerning the Two Chief World Systems compares Earth-centred and Sun-centred astronomy while favouring Copernicus, setting the stage for his trial the following year."
  },
  {
    year: 1633,
    title: "Galileo Condemned by the Inquisition",
    description: "The Roman Inquisition forces Galileo Galilei to renounce his support for Earth’s motion around the Sun. He spends his remaining years under house arrest."
  },
  {
    year: 1634,
    title: "Maryland’s Colonists Arrive",
    description: "Leonard Calvert’s settlers land in Maryland and establish St. Mary’s City, the colony’s first capital, following the charter granted in 1632. King Charles I of England specified that the name for the new colony was to be called Maryland in honor of his wife."
  },
  {
    year: 1635,
    title: "Roger Williams Banished",
    description: "Massachusetts Bay orders Roger Williams’s banishment after he challenges colonial authority, defends Indigenous land ownership and argues that civil government should not enforce religious beliefs."
  },
  {
    year: 1636,
    title: "Roger Williams Founds Providence",
    description: "After fleeing Massachusetts, Roger Williams establishes Providence in present-day Rhode Island with Narragansett assistance, creating a refuge based on religious liberty and separation of church and state."
  },
  {
    year: 1636,
    title: "Qing Dynasty Proclaimed",
    description: "Hong Taiji proclaims himself emperor and renames his Manchurian state the Great Qing, establishing the dynasty that later conquers China from the Ming."
  },
  {
    year: 1637,
    title: "Descartes Publishes His Method",
    description: "René Descartes publishes Discourse on the Method, including “I think, therefore I am,” alongside scientific essays that connect geometry with algebra and examine optics and weather."
  },
  {
    year: 1637,
    title: "Dutch Tulip Bubble Bursts",
    description: "Speculative trading in tulip bulbs collapses in the Netherlands as prices plunge in early 1637, ending the frenzy remembered as tulip mania."
  },
  {
    year: 1638,
    title: "Galileo’s Two New Sciences Published",
    description: "Despite his condemnation and house arrest, Galileo’s final major book appears in the Netherlands, presenting his studies of motion and the strength of materials."
  },
  {
    year: 1638,
    title: "Pedro Teixeira Reaches Quito",
    description: "Portuguese explorer Pedro Teixeira reaches Quito in present-day Ecuador after ascending the Amazon and Napo rivers from Brazil, then continuing overland."
  },
  {
    year: 1639,
    title: "Teixeira Completes His Amazon Expedition",
    description: "Pedro Teixeira returns downstream to Belém in present-day Brazil, completing his Amazon expedition. Jesuit Cristóbal de Acuña accompanies him and documents the journey."
  },
  {
    year: 1640,
    title: "Portugal Breaks from the Iberian Union",
    description: "A coup in Lisbon proclaims João IV king, ending the union with Spain begun in 1580 and launching Portugal’s Restoration War to defend its independence."
  },
  {
    year: 1641,
    title: "Dutch Capture Malacca from Portugal",
    description: "Dutch forces and their Johor allies seize Malacca in present-day Malaysia from Portugal, ending Portuguese rule begun in 1511 and strengthening Dutch power in Southeast Asia."
  },
  {
    year: 1642,
    title: "Tasman Reaches Tasmania and New Zealand",
    description: "Dutch explorer Abel Tasman makes the first recorded European sightings of Tasmania and New Zealand. His expedition encounters Māori at Golden Bay, where four crewmen are killed."
  },
  {
    year: 1643,
    title: "Tasman Visits Tonga and Sights Fiji",
    description: "Continuing his Pacific voyage, Abel Tasman obtains food and water in Tonga before sighting northern Fiji, extending European geographical knowledge of the Pacific islands."
  },
  {
    year: 1644,
    title: "Qing Conquest of Ming",
    description: "Li Zicheng’s rebels capture Beijing, prompting the Chongzhen Emperor’s suicide. Manchu-led Qing forces subsequently seize the capital, while Ming loyalists continue resisting in southern China."
  },
  {
    year: 1645,
    title: "Qing Conquest Sweeps Southern China",
    description: "Qing forces capture Yangzhou and massacre its inhabitants before taking Nanjing, overthrowing the Southern Ming court there."
  },
  {
    year: 1646,
    title: "Dutch Attacks Repelled in the Philippines",
    description: "Spanish forces supported by Filipino crews repel Dutch naval attacks in the Battles of La Naval de Manila, preserving Spanish control against Dutch expansion."
  },
  {
    year: 1647,
    title: "Gracián Publishes The Art of Worldly Wisdom",
    description: "Spanish Jesuit Baltasar Gracián publishes Oráculo manual y arte de prudencia, a collection of concise maxims offering advice on judgment, conduct and navigating society."
  },
  {
    year: 1648,
    title: "Peace of Westphalia Ends the Thirty Years’ War",
    description: "European powers conclude peace, formally recognizing Swiss independence from the Holy Roman Empire. A separate treaty with Spain also recognizes the Dutch Republic’s independence."
  },
  {
    year: 1649,
    title: "Charles I Executed; England Becomes a Commonwealth",
    description: "Following his defeat in the English Civil Wars, Charles I is tried for treason and beheaded. Parliament abolishes the monarchy and House of Lords, declaring England a Commonwealth."
  },
  {
    year: 1650,
    title: "Cromwell Defeats the Scots at Dunbar",
    description: "Oliver Cromwell’s army crushes Scottish forces on September 3, securing a major victory for the English Commonwealth during its invasion of Scotland."
  },
  {
    year: 1651,
    title: "Cromwell Wins at Worcester",
    description: "Oliver Cromwell defeats Charles II’s predominantly Scottish army on September 3, ending the final major Royalist campaign of the English Civil Wars. Charles escapes into exile."
  },
  {
    year: 1651,
    title: "England Passes the Navigation Act",
    description: "Parliament restricts imports to English ships or vessels from the goods’ country of origin, challenging Dutch dominance of maritime trade and increasing tensions between the republics."
  },
  {
    year: 1652,
    title: "First Anglo-Dutch War Begins",
    description: "Maritime rivalry erupts into war between England’s Commonwealth and the Dutch Republic, following the Navigation Act of 1651. Their fleets fight for control of trade and shipping routes."
  },
  {
    year: 1652,
    title: "Dutch Establish the Cape Settlement",
    description: "Jan van Riebeeck establishes a Dutch East India Company supply station at Table Bay in present-day South Africa, laying the foundations of Cape Town and expanding colonial settlement on Khoikhoi lands."
  },
  {
    year: 1653,
    title: "Cromwell Becomes Lord Protector",
    description: "After dissolving the Rump Parliament, Oliver Cromwell becomes Lord Protector of England, Scotland and Ireland under a written constitution, concentrating executive power in the new Protectorate."
  },
  {
    year: 1654,
    title: "First Anglo-Dutch War Ends",
    description: "England’s Commonwealth and the Dutch Republic conclude the Peace of Westminster, ending the naval war begun in 1652 while leaving their underlying commercial rivalry unresolved."
  },
  {
    year: 1655,
    title: "England Captures Jamaica",
    description: "English forces seize Jamaica from Spain during Oliver Cromwell’s Caribbean campaign, beginning English rule over an island that becomes a major centre of sugar production and enslaved labour."
  },
  {
    year: 1656,
    title: "England’s Navy Strikes Spain’s Treasure Fleet",
    description: "During England’s war with Spain, Richard Stayner’s squadron captures or destroys Spanish treasure ships off Cádiz, disrupting American silver shipments and strengthening Cromwell’s naval campaign."
  },
  {
    year: 1657,
    title: "Great Fire of Meireki Devastates Edo",
    description: "Fire destroys roughly 60% of Edo, present-day Tokyo, killing tens of thousands and burning the castle keep. Reconstruction introduces wider streets and new firebreaks."
  },
  {
    year: 1658,
    title: "Oliver Cromwell Dies; Richard Succeeds",
    description: "Oliver Cromwell dies after ruling as Lord Protector since 1653. His son Richard succeeds him, but his brief rule ends in 1659 as the Protectorate unravels."
  },
  {
    year: 1659,
    title: "Protectorate Collapses; Richard Cromwell Resigns",
    description: "Under army pressure, Oliver Cromwell’s son Richard resigns in May, ending the Protectorate. The restored Rump Parliament and army leaders struggle for control, paving the way for the monarchy’s restoration in 1660."
  },
  {
    year: 1660,
    title: "Charles II Restored; English Monarchy Returns",
    description: "Following the Protectorate’s collapse, Parliament invites Charles II, son of the executed Charles I, to reclaim the throne. He enters London on May 29, ending eleven years of republican government."
  },
  {
    year: 1660,
    title: "Royal Society Founded in London",
    description: "Following a lecture by Christopher Wren, scholars establish a society devoted to understanding nature through observation and experiment. The institution becomes the Royal Society, receiving its first royal charter in 1662."
  },
  {
    year: 1661,
    title: "Louis XIV “Sun King” Begins His Personal Rule",
    description: "After Cardinal Mazarin dies, France’s Louis XIV decides to govern without a chief minister. Already king since 1643, the “Sun King” now takes direct control of government, strengthening royal authority."
  },
  {
    year: 1662,
    title: "Boyle Publishes His Gas Law",
    description: "Robert Boyle publishes the relationship now called Boyle’s law: at constant temperature, a gas’s pressure increases as its volume decreases. His experiments help establish a mathematical understanding of gases."
  },
  {
    year: 1663,
    title: "Dutch Capture Cochin from Portugal",
    description: "Dutch East India Company forces seize Cochin, present-day Kochi in India, ending Portuguese rule there. The conquest strengthens Dutch influence over the Malabar Coast and its lucrative pepper trade."
  },
  {
    year: 1664,
    title: "New Amsterdam Becomes New York",
    description: "An English fleet forces Dutch governor Peter Stuyvesant to surrender New Amsterdam. England takes control of New Netherland and renames the city New York after James, Duke of York, brother of Charles II."
  },
  {
    year: 1665,
    title: "Great Plague Devastates London",
    description: "A major plague outbreak kills an estimated 100,000 Londoners, roughly a fifth of the population. Authorities shut infected households and restrict gatherings as the epidemic overwhelms the city."
  },
  {
    year: 1665,
    title: "Second Anglo-Dutch War Begins",
    description: "Commercial and colonial rivalry erupts into declared war between England and the Dutch Republic. England wins a major naval victory at Lowestoft, where the Dutch flagship explodes, killing its commander."
  },
  {
    year: 1666,
    title: "Great Fire Devastates London",
    description: "Beginning in a Pudding Lane bakery on September 2, fire destroys around 13,200 houses and old St Paul’s Cathedral. It burns roughly four-fifths of the City of London over three days, leaving about 100,000 people homeless."
  },
  {
    year: 1667,
    title: "Dutch Raid the Medway; Peace Ends the War",
    description: "Dutch warships strike deep into England’s Medway naval anchorage, burning ships and capturing the Royal Charles. The humiliating attack is followed by the Treaty of Breda, ending the Second Anglo-Dutch War."
  },
  {
    year: 1668,
    title: "Spain Recognises Portuguese Independence",
    description: "The Treaty of Lisbon ends the Portuguese Restoration War, begun in 1640 after Portugal breaks from the Iberian Union. Spain recognises Portugal’s independence and sovereignty."
  },
  {
    year: 1668,
    title: "Henry Morgan Sacks Portobelo",
    description: "After raiding Puerto Príncipe in Cuba, Welsh buccaneer Henry Morgan captures the fortified Spanish treasure port of Portobelo, in present-day Panama. He established his reputation as a formidable Caribbean raider."
  },
  {
    year: 1669,
    title: "Henry Morgan Raids Maracaibo",
    description: "Morgan’s buccaneers plunder Maracaibo and Gibraltar, in present-day Venezuela, with eight ships. Trapped by a Spanish squadron, they use a disguised fireship to destroy its flagship, then outmanoeuvre the remaining defences and escape with their loot, making Morgan the king of all buccaneers."
  },
  {
    year: 1670,
    title: "Henry Morgan Prepares to Attack Panama",
    description: "Commissioned by Jamaica’s governor, Morgan assembles a large buccaneer fleet of thirty ships at Cape Tiburon, in present-day Haiti. In December, his captains agree to attack Panama City."
  },
  {
    year: 1671,
    title: "Henry Morgan Sacks Panama City",
    description: "After crossing the Isthmus of Panama, Morgan’s buccaneers defeat Spanish defenders and plunder Panama City. Fire devastates the settlement during the attack, culminating in Morgan’s most famous raid."
  },
  {
    year: 1672,
    title: "Henry Morgan Arrested After the Panama Raid",
    description: "English authorities arrest Morgan and send him to London following his attack on Spanish Panama after the 1670 peace treaty. He is never tried, and his fortunes later recover: Charles II knights him in 1674."
  },
  {
    year: 1672,
    title: "Dutch “Disaster Year”",
    description: "France, England, Münster and Cologne attack the Dutch Republic. William of Orange rises to power as stadtholder, while a mob murders Johan and Cornelis de Witt in The Hague amid the crisis."
  },
  {
    year: 1673,
    title: "Three Feudatories’ Revolt Begins",
    description: "When the Kangxi Emperor moves to dismantle powerful southern military domains, general Wu Sangui rebels against the Qing. The uprising spreads across southern China, beginning an eight-year civil war that threatens the dynasty’s hold on the region."
  },
  {
    year: 1674,
    title: "Henry Morgan Knighted",
    description: "Despite his arrest after the Panama raid, Morgan receives a knighthood from Charles II and appointment as lieutenant-governor of Jamaica. The former buccaneer becomes a royal official, returning to the Caribbean in 1675."
  },
  {
    year: 1675,
    title: "Morgan Returns to Jamaica",
    description: "After receiving his knighthood and appointment in 1674, Henry Morgan returns to Port Royal as lieutenant-governor. He survives a shipwreck near present-day Haiti during the voyage, completing his transition from buccaneer commander to colonial official."
  },
  {
    year: 1676,
    title: "Morgan Accused of Aiding Buccaneers",
    description: "Jamaica’s governor, Lord Vaughan, accuses Henry Morgan of supporting illegal privateers and obstructing efforts to suppress their raids. The dispute exposes tensions between Morgan’s buccaneer connections and his responsibilities as lieutenant-governor."
  },
  {
    year: 1677,
    title: "Buccaneers Sack Santa Marta",
    description: "Buccaneers including English captain John Coxon capture Santa Marta, on the Caribbean coast of present-day Colombia. They plunder the Spanish town and carry off its governor and bishop as hostages for ransom."
  },
  {
    year: 1678,
    title: "Buccaneer History Published",
    description: "Alexandre Exquemelin publishes The Buccaneers of America in Dutch in Amsterdam. Drawing on his experiences among Caribbean buccaneers, including Henry Morgan’s expeditions, the book becomes an influential source for the history and popular image of piracy."
  },
  {
    year: 1679,
    title: "Buccaneers Plunder Gulf of Honduras",
    description: "John Coxon, Bartholomew Sharp and fellow buccaneers raid Spanish storehouses in the Gulf of Honduras. They return to Jamaica with roughly 500 chests of indigo dye, alongside cacao, cochineal and other loot."
  },
  {
    year: 1679,
    title: "Habeas Corpus Protections Strengthened",
    description: "England’s Parliament passes the Habeas Corpus Act, strengthening procedures that require authorities to bring prisoners before a court. The law reinforces an existing safeguard against unlawful detention rather than creating the right from scratch."
  },
  {
    year: 1680,
    title: "Pueblo Revolt in New Mexico",
    description: "Led by Popé, Pueblo peoples in New Mexico rise against Spanish rule and religious persecution, driving Spanish colonists from Santa Fe. Spanish forces return in 1692."
  },
  {
    year: 1681,
    title: "Three Feudatories’ Revolt Ends",
    description: "Qing forces capture Kunming, ending the eight-year rebellion begun in 1673. Victory eliminates powerful regional rivals and consolidates the Kangxi Emperor’s authority over southern China, marking a decisive step in strengthening Qing rule."
  },
  {
    year: 1682,
    title: "La Salle Claims Louisiana",
    description: "René-Robert Cavelier de La Salle reaches the Mississippi’s mouth and claims its vast drainage basin for France, naming it Louisiana after Louis XIV. This formed the basis of a French claim to a vast part of North America."
  },
  {
    year: 1683,
    title: "Ottoman Siege of Vienna Broken",
    description: "A relief army led by Poland’s King Jan III Sobieski defeats the Ottomans outside Vienna on September 12. The victory ends a two-month siege and marks a major turning point in the struggle between the Habsburg and Ottoman empires."
  },
  {
    year: 1684,
    title: "Holy League Forms Against Ottomans",
    description: "Backed by Pope Innocent XI, the Habsburg monarchy, Poland–Lithuania and Venice form an alliance against the Ottoman Empire. Following Vienna’s relief in 1683, the coalition coordinates renewed offensives on land and sea."
  },
  {
    year: 1685,
    title: "Holy League Pushes Ottomans Back",
    description: "The pope-backed alliance advances against Ottoman positions. Habsburg forces capture Nové Zámky in present-day Slovakia, while Venetian forces seize Koroni in Greece, expanding the counteroffensive into Ottoman-held territory."
  },
  {
    year: 1686,
    title: "Holy League Recaptures Buda",
    description: "Habsburg-led forces capture Buda, part of present-day Budapest, ending Ottoman rule established in 1541. The victory advances the Holy League’s reconquest of Hungary, though the siege leaves the city devastated and depopulated."
  },
  {
    year: 1687,
    title: "Newton Publishes the Principia",
    description: "Isaac Newton sets out his three laws of motion and his law of universal gravitation. The same force that makes objects fall on Earth also keeps the Moon in orbit. Newton’s Laws: (1) An object’s velocity stays constant (possibly zero) unless a net force acts on it. (2) Net force equals mass times acceleration. (3) When one object exerts a force on another, the second exerts an equal and opposite force on the first."
  },
  {
    year: 1688,
    title: "England’s Glorious Revolution Begins",
    description: "Invited by seven English leaders, William of Orange lands in Devon with a Dutch army. As officers desert him, King James II flees to France. In 1689, Parliament offers the crown jointly to William and his wife Mary, James’s daughter."
  },
  {
    year: 1689,
    title: "English Bill of Rights",
    description: "William of Orange and Mary become joint monarchs. The Bill bars the Crown from levying taxes or suspending laws without Parliament’s consent."
  },
  {
    year: 1690,
    title: "Battle of the Boyne",
    description: "William of Orange defeats his father-in-law, the deposed James II, in Ireland as James fights to regain the throne lost in the Glorious Revolution."
  },
  {
    year: 1691,
    title: "Treaty of Limerick Ends Williamite War",
    description: "A year after the Boyne, James II’s supporters surrender Limerick to William III’s forces. The treaty allows Jacobite soldiers to leave Ireland for France."
  },
  {
    year: 1692,
    title: "Spain Claims New Mexico Again",
    description: "Twelve years after the Pueblo Revolt, Diego de Vargas claims Santa Fe for Spain in a plaza ceremony, then returns to El Paso."
  },
  {
    year: 1693,
    title: "Spanish Settlers Retake New Mexico",
    description: "Vargas returns with soldiers and settlers. Pueblo defenders resist, then surrender. Spanish forces execute captured warriors and force their families into servitude."
  },
  {
    year: 1694,
    title: "Henry Every Turns Pirate",
    description: "After months without pay, Every and his crew seize the Charles II at A Coruña, Spain, rename it Fancy, and sail for the Indian Ocean."
  },
  {
    year: 1695,
    title: "Henry Every Plunders Mughal Pilgrim Ship",
    description: "English pirates seize the Ganj-i-Sawai as it carries pilgrims home from Mecca. Mughal authorities hold the English East India Company responsible. He then sailed for the Bahamas and evaded capture."
  },
  {
    year: 1696,
    title: "Peter the Great Captures Azov",
    description: "After his failed siege in 1695, Peter sends a new fleet down the Don. Russian ships cut Ottoman supply lines, and the fortress surrenders."
  },
  {
    year: 1697,
    title: "Peter the Great’s Grand Embassy",
    description: "A year after taking Azov, the Russian tsar travels to Western Europe. In Amsterdam, he works as an apprentice carpenter to learn Dutch shipbuilding."
  },
  {
    year: 1698,
    title: "Savery Patents a Steam Pump",
    description: "English inventor Thomas Savery patents a pump designed to drain flooded mines. It condenses steam to draw water in, then uses steam pressure to raise it."
  },
  {
    year: 1698,
    title: "Captain Kidd Captures the Quedagh Merchant",
    description: "Scottish privateer William Kidd seizes a merchant ship off India, arguing its French papers justify the capture. He later faces trial for piracy and is executed in London in 1701."
  },
  {
    year: 1699,
    title: "Savery Demonstrates His Steam Pump",
    description: "On June 14, Thomas Savery shows London’s Royal Society how a working model of his pump, patented in 1698, uses steam to raise water."
  },
  {
    year: 1699,
    title: "Treaty of Karlowitz",
    description: "Sixteen years after the siege of Vienna, the Ottoman Empire recognises Habsburg control over most of Hungary and Transylvania, redrawing the political map of central Europe."
  },
  {
    year: 1699,
    title: "Dampier Reaches Shark Bay",
    description: "Aboard HMS Roebuck, English explorer William Dampier reaches Western Australia, charts the coast and collects plant specimens that survive his ship’s wreck in 1701."
  },
  {
    year: 1700,
    title: "Dampier Names New Britain",
    description: "Continuing his Pacific voyage, English explorer William Dampier charts a passage separating New Guinea from the island he names New Britain, in present-day Papua New Guinea."
  }
];
