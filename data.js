const YEAR_EVENTS = [
  {
    year: 1000,
    title: "Leif goes Vinland",
    description: "Around 1000, according to later Icelandic sagas, Leif Erikson reached a North American land called Vinland. L’Anse aux Meadows confirms Norse activity in 1021, but cannot securely be identified as Leif’s landing."
  },
  {
    year: 1001,
    title: "Brick Liaodi Started",
    description: "Song China begins building Dingzhou’s 84-metre brick pagoda, later used to watch enemy movements."
  },
  {
    year: 1002,
    title: "St. Brice Massacre",
    description: "English king Æthelred the Unready orders all Danes in England to be killed after the intensity of their Vikings raids increased; provoking Sweyn I of Denmark's invasion in 1003."
  },
  {
    year: 1003,
    title: "Sweyn I’s Invasion",
    description: "Sweyn Forkbeard launches a renewed invasion of England in 1003, perhaps encouraged by the 1002 massacre and also aimed at tribute and conquest."
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
    description: "Around 1020–1030, Radbot and Bishop Werner built the Habichtsburg in Aargau, ancestral seat from which the Habsburg dynasty later took its name."
  },
  {
    year: 1021,
    title: "Vikings in North America",
    description: "Norse settlers cut timber at L’Anse aux Meadows, the earliest precisely dated European activity in the Americas."
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
    description: "Song China issues standardized government jiaozi notes, helping create the world’s first major paper currency system. It started preparations in 1023."
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
    title: "Cnut Takes Norway",
    description: "Cnut conquers Norway with local support, forcing King Olaf Haraldsson to flee into exile in Novgorod."
  },
  {
    year: 1029,
    title: "Olaf Plans Return",
    description: "Exiled at Yaroslav the Wise’s court, Olaf prepares to reclaim Norway after Cnut’s regent Håkon drowns."
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
    title: "Short Pope",
    description: "Pope Damasus II dies after only twenty-three days, one of the shortest papal reigns in history."
  },
  {
    year: 1049,
    title: "Reims Council",
    description: "Pope Leo IX holds the Council of Reims, attacking simony, clerical marriage and corruption in the medieval Church."
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
    title: "Henry IV Kidnapped at Kaiserswerth",
    description: "Archbishop Anno kidnaps eleven-year-old Henry IV and seizes control of the German royal government."
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
    title: "First Crusade Falters",
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
    title: "Henry IV Dies Deposed",
    description: "The emperor once kidnapped at Kaiserswerth and triumphant in Rome died deposed and excommunicated in Liège."
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
    title: "Song Victory at Heshangyuan",
    description: "Wu Jie’s Southern Song army crushed a Jin invasion, protecting the gateway to Sichuan."
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
    title: "Stephen Secures Rule",
    description: "Pope Innocent II recognises Stephen as king, strengthening his disputed claim against Henry I’s daughter, Empress Matilda."
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
    title: "The Faithful Wives of Weinsberg",
    description: "Women reportedly carried their husbands from a besieged castle, exploiting King Conrad III’s promise. The siege is securely dated 21 December 1140, although the celebrated episode may be legendary."
  },
  {
    year: 1141,
    title: "King Stephen Captured",
    description: "King Stephen of England was captured at Lincoln, briefly giving Empress Matilda control during the Anarchy (“Lady of the English”)."
  },
  {
    year: 1142,
    title: "Matilda Escapes",
    description: "Matilda retreats to Oxford Castle during the Anarchy, reportedly fleeing across snow and ice at night."
  },
  {
    year: 1143,
    title: "King Stephen Defeat",
    description: "King Stephen was defeated near Wilton Abbey, escaping capture while his steward held off Matilda’s forces."
  },
  {
    year: 1144,
    title: "Edessa Falls",
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
    title: "Second Crusade Collapses in Damascus",
    description: "The Second Crusade failed at Damascus, leaving Edessa unrecovered and weakening Crusader confidence in the Holy Land."
  },
  {
    year: 1149,
    title: "Second Crusaders Crushed",
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
    title: "Song Printed Map",
    description: "In Song China, Yang Jia’s encyclopedia included the oldest known printed terrain map, showing western China."
  },
  {
    year: 1156,
    title: "Hōgen Rebellion",
    description: "A succession dispute over Japan’s imperial throne erupted in Kyoto, helping shift power toward samurai military dominance."
  },
  {
    year: 1157,
    title: "Calatrava Defence",
    description: "After the Templars abandon Calatrava, Abbot Raymond of Fitero volunteers to defend the frontier fortress."
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
    title: "Song Gunpowder Navy",
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
    description: "A Crusader army advanced into Egypt, beginning a brutal contest for control of the Nile. It started in 1163."
  },
  {
    year: 1165,
    title: "Egypt Prize",
    description: "Crusader Jerusalem and Syria struggled for influence over Fatimid Egypt, the richest prize between Africa and the Holy Land."
  },
  {
    year: 1166,
    title: "Battles for Nile",
    description: "Syrian forces returned to Egypt in late 1166, drawing Crusader Jerusalem into a renewed struggle for Cairo and the Nile."
  },
  {
    year: 1167,
    title: "Giza Battle with Saladin",
    description: "Crusader and Syrian armies fought near Giza, including a young Saladin, beginning his rise in the struggle for Cairo and the Nile."
  },
  {
    year: 1168,
    title: "Bilbeis Massacre",
    description: "A Crusader army massacred Bilbeis, pushing Fatimid Cairo away from Jerusalem and toward Syrian protection."
  },
  {
    year: 1169,
    title: "Saladin Vizier from Egypt",
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
    title: "Jerusalem Crusader Tax",
    description: "England and France imposed a huge crusade tax (“Saladin Tithe” to fund the campaign to recover Jerusalem from Saladin."
  },
  {
    year: 1189,
    title: "Acre Besieged in Third Crusade",
    description: "Guy of Lusignan begins the siege of Acre with Richard the Lionheart on his way."
  },
  {
    year: 1190,
    title: "Teutonic Hospital in Acre",
    description: "German crusaders founded a field hospital at Acre, later linked to the rise of the Teutonic Order."
  },
  {
    year: 1191,
    title: "Lionheart Captures Acre",
    description: "Richard the Lionheart captured Acre and defeated Saladin at Arsuf, giving the Third Crusade its greatest victories."
  },
  {
    year: 1192,
    title: "Third Crusade Ends",
    description: "Richard the Lionheart and Saladin agreed the Treaty of Jaffa, leaving Jerusalem Muslim but open to Christian pilgrims."
  },
  {
    year: 1192,
    title: "Yoritomo Named Shogun",
    description: "Japan’s first shogunate began at Kamakura, where military rulers governed while the emperor remained symbolically important."
  },
  {
    year: 1193,
    title: "Saladin Dies",
    description: "Saladin died in Damascus months after the Third Crusade, leaving his Ayyubid empire divided among relatives. The Kamakura military government had operated since 1185."
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
    title: "Fourth Crusade Gathers",
    description: "At a tournament in Écry, leading French nobles take the cross and form the Fourth Crusade’s first army."
  },
  {
    year: 1200,
    title: "Egypt Route Chosen for Fourth Crusade",
    description: "Crusader leaders planned a sea expedition against Egypt, unknowingly setting the path toward Venice and Constantinople."
  },
  {
    year: 1201,
    title: "Venice Contract for Fourth Crusade",
    description: "Crusader leaders hired Doge Enrico Dandolo’s Venice to carry 33,500 men, 4,500 horses and 50 war galleys."
  },
  {
    year: 1202,
    title: "Zara Sacked in Fourth Crusade",
    description: "Unable to pay Venice for transport, crusaders attacked Christian Zara for Doge Enrico Dandolo, corrupting the Fourth Crusade."
  },
  {
    year: 1203,
    title: "Golden Horn Opened",
    description: "Fourth Crusade and Venetian forces capture Galata’s tower, break the harbor chain, and sail into the Golden Horn at Constantinople."
  },
  {
    year: 1204,
    title: "Constantinople Sacked",
    description: "Fourth Crusade and Venetian forces storm Constantinople, replacing Byzantine rule with a fragile Catholic crusader state."
  },
  {
    year: 1205,
    title: "Adrianople Disaster",
    description: "Bulgarian forces defeats the Latin Empire near Adrianople, capturing Emperor Baldwin I only one year after Constantinople’s conquest."
  },
  {
    year: 1206,
    title: "Temüjin Unites Mongols",
    description: "After defeating rival steppe powers, Temüjin receives the title Genghis Khan at a great kurultai and reorganizes Mongolia for conquest."
  },
  {
    year: 1207,
    title: "Mongols Enter China",
    description: "Mongol forces push into Western Xia’s Ordos region, marking an early step toward conquest beyond the steppe."
  },
  {
    year: 1208,
    title: "Francis Embraces Poverty",
    description: "Hearing Christ’s instructions to the apostles, Francis embraced radical poverty and began preaching around Assisi."
  },
  {
    year: 1209,
    title: "Franciscan Travels to Rome",
    description: "Francis of Assisi and his companions travel to Rome, seeking approval for the poverty movement to grow into an order."
  },
  {
    year: 1210,
    title: "Western Xia Submits",
    description: "After Genghis Khan’s invasion, Western Xia accepts Mongol overlordship, giving tribute and support to the Mongols."
  },
  {
    year: 1211,
    title: "Great Wall Breached",
    description: "Mongol armies break through Jin frontier defences, pushing past Great Wall lines into northern China."
  },
  {
    year: 1212,
    title: "Reconquista Turns",
    description: "Christian armies defeat the Almohads at Las Navas de Tolosa, a major turning point in the Reconquista."
  },
  {
    year: 1213,
    title: "Mongols Move towards Zhongdu",
    description: "Mongol armies attack Jin territory again, moving toward the imperial capital Zhongdu, modern Beijing."
  },
  {
    year: 1214,
    title: "The Battle of Bouvines",
    description: "Philip II defeats an English-imperial coalition at Bouvines, strengthening France and weakening King John before Magna Carta."
  },
  {
    year: 1215,
    title: "Magna Carta",
    description: "English barons force King John to accept Magna Carta, limiting royal power and shaping later constitutional ideas."
  },
  {
    year: 1216,
    title: "Louis Invades",
    description: "Prince Louis of France lands in England, backed by rebel barons who want to replace King John."
  },
  {
    year: 1217,
    title: "Sandwich Battle",
    description: "English ships defeat French reinforcements near Sandwich, cutting off Prince Louis’s invasion and ending his hopes."
  },
  {
    year: 1217,
    title: "Fifth Crusade Begins",
    description: "European crusaders assemble at Acre and campaign in the Holy Land, beginning a Fifth Crusade against the Ayyubids."
  },
  {
    year: 1218,
    title: "Otrar Incident",
    description: "A Mongol trade caravan is seized at Otrar by the Khwarazmian governor, provoking Genghis Khan’s conquest of Central Asia."
  },
  {
    year: 1219,
    title: "Damietta Captured Fifth Crusade",
    description: "Fifth Crusade forces capture Egypt’s strategic port of Damietta after an eighteen-month siege, hoping to exchange it for Jerusalem."
  },
  {
    year: 1220,
    title: "Samarkand Falls",
    description: "Mongol armies take Samarkand, one of Central Asia’s greatest cities, breaking the Khwarazmian Empire’s main power base."
  },
  {
    year: 1221,
    title: "Fifth Crusade Collapses",
    description: "Trapped during their advance toward Cairo, the crusaders surrender Damietta and abandon the Fifth Crusade."
  },
  {
    year: 1222,
    title: "Golden Bull",
    description: "Andrew II issues Hungary’s Golden Bull, limiting royal power and confirming noble rights to resist unlawful kings."
  },
  {
    year: 1223,
    title: "Expeditionary Mongols in Ukraine",
    description: "The Mongols win a decisive battle at Kalka river near today’s eastern Ukraine, foreshadowing their later conquest of Rus’."
  },
  {
    year: 1224,
    title: "Francis Stigmata",
    description: "Francis of Assisi receives the stigmata (wounds of christ) while praying on Mount La Verna, a defining miracle in Franciscan memory."
  },
  {
    year: 1225,
    title: "Expeditionary Mongols Return",
    description: "After their Ukrainian steppe raid, Subutai’s army returns east to Genghis Khan before the final Western Xia campaign."
  },
  {
    year: 1226,
    title: "Mongols Punish Western Xia",
    description: "Genghis Khan begins his final campaign against Western Xia, punishing the Tangut kingdom’s disobedience."
  },
  {
    year: 1227,
    title: "Genghis Khan Dies",
    description: "Genghis Khan dies during the final campaign against Western Xia, leaving his empire to expand under his four sons."
  },
  {
    year: 1228,
    title: "Diplomatic Sixth Crusade",
    description: "Frederick II leaves Brindisi for the Holy Land, despite papal excommunication, beginning the unusual Sixth Crusade and preparing to win Jerusalem through negotiation rather than conquest."
  },
  {
    year: 1229,
    title: "Jerusalem Returned Diplomatically",
    description: "Frederick II signs the Treaty of Jaffa with al-Kamil, restoring Jerusalem to Christian control without major fighting."
  },
  {
    year: 1230,
    title: "Frederick Reconciled",
    description: "Pope Gregory IX readmits Frederick II to the Church after his excommunicated crusade regained Jerusalem."
  },
  {
    year: 1231,
    title: "Mongols Invade Korea",
    description: "Already conquering northern China, Ögedei Khan’s Mongols invade Korea, beginning decades of warfare and eventual submission."
  },
  {
    year: 1232,
    title: "Mongols Besiege Kaifeng",
    description: "Jin defenders use fire lances and thunder-crash bombs against Mongols besieging their capital, Kaifeng."
  },
  {
    year: 1233,
    title: "Song Joins Mongols",
    description: "The Southern Song allies with the Mongols as Emperor Aizong flees Kaifeng toward the Jin dynasty’s final stronghold."
  },
  {
    year: 1234,
    title: "Jin Dynasty Ends",
    description: "Mongol and Southern Song forces capture Caizhou, destroying the Jin dynasty after twenty-three years of Mongol warfare."
  },
  {
    year: 1235,
    title: "Karakorum Capital",
    description: "Ögedei develops Karakorum as the Mongol Empire’s permanent capital and administrative centre."
  },
  {
    year: 1235,
    title: "Mongols Target Europe",
    description: "Ögedei’s great council authorizes a vast western campaign under Batu and Subutai against the Volga region and Europe."
  },
  {
    year: 1236,
    title: "Mongols Invade Bulgaria",
    description: "Batu Khan and Subutai conquer Volga Bulgaria, opening the Mongols’ great western invasion toward Russia and Europe."
  },
  {
    year: 1237,
    title: "Mongols Invade Rus’",
    description: "Batu Khan’s armies destroy Ryazan, beginning the full-scale Mongol conquest of the Rus’ principalities."
  },
  {
    year: 1238,
    title: "Mongols destroy Moscow",
    description: "Batu Khan’s Mongols capture and burn Moscow during their devastating conquest of northeastern Rus’."
  },
  {
    year: 1239,
    title: "Mongols destroy Chernigov",
    description: "Batu Khan’s Mongols capture and sack Chernigov, extending their conquest into the southern Rus’ principalities."
  },
  {
    year: 1240,
    title: "Mongols destroy Kyiv",
    description: "Batu Khan’s Mongols capture and devastate Kyiv, completing their conquest of the Rus’ heartlands and opening the route west."
  },
  {
    year: 1241,
    title: "Khan Ögedei Dies",
    description: "Great Khan Ögedei dies while Mongol armies occupy Hungary, creating a succession crisis before their 1242 withdrawal."
  },
  {
    year: 1242,
    title: "Mongols Withdraw",
    description: "After reaching Austria and approaching Vienna, Mongol armies withdraw east following Ögedei Khan’s death and the succession tradition."
  },
  {
    year: 1243,
    title: "Mongols Subjugate Seljuks",
    description: "Mongols crush the Seljuk Sultanate of Rum at Köse Dağ, making much of Anatolia tributary to the empire."
  },
  {
    year: 1244,
    title: "Jerusalem Lost",
    description: "Khwarazmian refugees and mercenaries, displaced by the Mongols, sack Jerusalem while fighting for Egypt’s Ayyubid sultan."
  },
  {
    year: 1245,
    title: "Pope contacts Mongol",
    description: "Pope Innocent IV sends Franciscan envoys carrying letters to the Mongols, opening direct diplomatic communication with their empire."
  },
  {
    year: 1246,
    title: "Mongols Receives Papal Envoy",
    description: "Güyük, newly elected Great Khan of the Mongol Empire, answers papal envoys by demanding the pope and Europe submit to Mongol rule."
  },
  {
    year: 1247,
    title: "Mongols Report Returns",
    description: "Giovanni da Pian del Carpine returns from Güyük Khan’s court, bringing Europe its first detailed eyewitness account of the Mongols."
  },
  {
    year: 1248,
    title: "Seventh Crusade",
    description: "Louis IX sails from France with a vast crusading army, planning to recover Jerusalem by first conquering Egypt."
  },
  {
    year: 1249,
    title: "Seventh Crusade Captures Damietta",
    description: "Louis IX’s Seventh Crusade lands in Egypt and rapidly captures Damietta, intending to advance along the Nile toward Cairo."
  },
  {
    year: 1250,
    title: "Seventh Crusade Fails",
    description: "Egyptian forces destroy Louis IX’s crusading army at Fariskur and capture the French king, ending the Seventh Crusade’s Egyptian campaign."
  },
  {
    year: 1251,
    title: "Buddhist Canon Completed",
    description: "Goryeo completes the Tripitaka Koreana after sixteen years of carving of 81,000 wooden printing blocks, seeking divine protection against repeated Mongol invasions."
  },
  {
    year: 1252,
    title: "Kublai Goes South",
    description: "Möngke orders his brother Kublai to campaign against the Dali Kingdom, opening the Mongol advance into southwestern China."
  },
  {
    year: 1253,
    title: "Kublai Conquers Dali",
    description: "Kublai Khan’s Mongol army conquers the Dali Kingdom, extending Mongol control into Yunnan and opening routes toward Southeast Asia."
  },
  {
    year: 1254,
    title: "Möngke Meets Rubruck",
    description: "Franciscan traveller William of Rubruck meets Great Khan Möngke at Karakorum and describes the diverse Mongol capital in remarkable detail."
  },
  {
    year: 1255,
    title: "Hulagu Goes West",
    description: "Möngke sends his brother Hulagu into Iran, beginning the Mongol campaign that will destroy Baghdad and establish the Ilkhanate."
  },
  {
    year: 1256,
    title: "Mongols Takes Assassin’s Castle",
    description: "Alamut Falls: Hulagu’s Mongols capture Alamut, modern-day northern Iran, destroying the political power of the group known as the Assassins."
  },
  {
    year: 1257,
    title: "Samalas Erupts",
    description: "Mount Samalas on Lombok erupts catastrophically, producing the largest stratospheric sulfur release of the Common Era and disrupting global climate."
  },
  {
    year: 1258,
    title: "Baghdad Falls",
    description: "Hulagu’s Mongols capture and devastate Baghdad, kill Caliph al-Mustaʿsim, and end the Abbasid Caliphate’s rule from the city."
  },
  {
    year: 1259,
    title: "Möngke Khan Dies",
    description: "Great Khan Möngke dies during the siege of Diaoyu Fortress in China, triggering a Mongol succession crisis and civil war."
  },
  {
    year: 1260,
    title: "Mongol Civil War",
    description: "Kublai Khan and Ariq Böke both claim the title of Great Khan, beginning a four-year succession war."
  },
  {
    year: 1261,
    title: "Byzantium Restored",
    description: "Nicaean forces recapture Constantinople, ending the Latin Empire founded by crusaders and restoring Byzantine rule after fifty-seven years of exile."
  },
  {
    year: 1262,
    title: "Mongols Fight Mongols",
    description: "Berke of the Golden Horde attacks Hulagu’s Ilkhanate in the Caucasus, opening the first major war between Mongol successor states"
  },
  {
    year: 1263,
    title: "Mongol Rivalry Deepens",
    description: "Fighting between Berke’s Golden Horde and Hulagu’s Ilkhanate disrupts trade and accelerates the Mongol Empire’s political fragmentation."
  },
  {
    year: 1264,
    title: "Mongol Civil War Ends",
    description: "Ariq Böke surrenders to his brother Kublai, ending their four-year struggle for control of the Mongol Empire."
  },
  {
    year: 1265,
    title: "Crusader Cities Fall",
    description: "Mamluk Sultan Baybars captures Caesarea, Haifa, and Arsuf, steadily dismantling the remaining Crusader territories along the Levantine coast."
  },
  {
    year: 1266,
    title: "Safed Crusader Fortress Falls",
    description: "Mamluk sultan Baybars captures the Templars’ powerful fortress at Safed, further weakening the remaining Crusader Kingdom of Jerusalem."
  },
  {
    year: 1267,
    title: "Learning Reimagined",
    description: "Roger Bacon sends Pope Clement IV his Opus Majus, advocating mathematics, languages, optics, and experimentation as foundations for reforming knowledge."
  },
  {
    year: 1268,
    title: "Kublai Besiege Xiangyang",
    description: "Mongol forces begin the prolonged siege of Xiangyang, a crucial campaign in Kublai Khan’s conquest of the Southern Song."
  },
  {
    year: 1269,
    title: "Kublai Introduces Imperial Script",
    description: "Kublai Khan officially introduces Phagpa’s script, designed to write the many languages governed across his expanding empire."
  },
  {
    year: 1270,
    title: "Eighth Crusade Starts/Ends",
    description: "Louis IX leads a crusade against Tunis, but disease devastates the army and kills the French king before any major conquest."
  },
  {
    year: 1271,
    title: "Ninth Crusade",
    description: "England’s Prince Edward reached Acre and forced Baybars to suspend the campaign against the remaining Crusader states."
  },
  {
    year: 1272,
    title: "Ninth Crusade Ends with Truce",
    description: "A truce ends Edward’s crusade, preserving the remaining Crusader states for a time; Acre was their principal centre, not their sole surviving stronghold."
  },
  {
    year: 1273,
    title: "Habsburg Rise",
    description: "Rudolf of Habsburg was elected German king, ending the Great Interregnum and launching his dynasty’s remarkable ascent."
  },
  {
    year: 1274,
    title: "Mongols Invade Japan",
    description: "Kublai Khan’s Yuan and Korean forces attacked Kyūshū, but Japanese resistance and a disputed storm forced their withdrawal."
  },
  {
    year: 1275,
    title: "Marco Polo Reaches China",
    description: "Marco Polo reportedly reached Kublai Khan’s court, completing his journey along trade routes secured by the Pax Mongolica. (Arrival year approximate.)"
  },
  {
    year: 1276,
    title: "Mongols takes Song Capital",
    description: "Mongol forces captured Lin’an and accepted the young Song emperor’s surrender, although loyalists resisted until 1279."
  },
  {
    year: 1277,
    title: "Song Court Flees South",
    description: "Emperor Duanzong and Song loyalists fled further south along China’s coast after a powerful official in Quanzhou sided with the Mongols."
  },
  {
    year: 1278,
    title: "Final Song Emperor",
    description: "After Emperor Duanzong died, his six-year-old brother Zhao Bing became the last Song emperor while fleeing Mongol forces."
  },
  {
    year: 1279,
    title: "Song Defeated, Mongol China",
    description: "With the Song defeated at the Battle of Yamen, Kublai Khan reunited China under Mongol rule after more than three centuries of division."
  },
  {
    year: 1280,
    title: "Plan for Second Japan Invasion",
    description: "Kublai Khan ordered preparations for a second, far larger Mongol invasion of Japan, launched the following year."
  },
  {
    year: 1281,
    title: "Divine Wind Saves Japan",
    description: "Kublai Khan’s enormous second invasion of Japan failed after Japanese resistance and a devastating typhoon (“Kamikaze”) destroyed much of his fleet."
  },
  {
    year: 1282,
    title: "Habsburg Austria",
    description: "Rudolf of Habsburg granted Austria and Styria to his sons, shifting the Habsburg dynasty’s power eastward from its Aargau homeland."
  },
  {
    year: 1283,
    title: "Aarau Town Rights",
    description: "Rudolf of Habsburg granted Aarau town rights, strengthening Habsburg rule in present-day Switzerland."
  },
  {
    year: 1284,
    title: "Brugg Town Rights",
    description: "Rudolf of Habsburg granted Brugg town rights modelled on Aarau, strengthening his dynasty’s Aargau homeland"
  },
  {
    year: 1285,
    title: "Bern Receives Imperial Tax",
    description: "Rudolf imposed an imperial tax on Bern, driving the city into opposition against the Swiss-born Habsburg king."
  },
  {
    year: 1286,
    title: "Bernese War Begins",
    description: "Bern attacked Wimmis and destroyed its fortified town, beginning conflict against the Habsburg-aligned barons of Weissenburg."
  },
  {
    year: 1287,
    title: "Medieval Swiss House",
    description: "The House of Bethlehem was built in Schwyz, becoming Europe’s oldest wooden house still standing today."
  },
  {
    year: 1288,
    title: "Bern Resists",
    description: "Bern survived two sieges by Rudolf of Habsburg, continuing its resistance before suffering defeat at Schosshalde in 1289."
  },
  {
    year: 1289,
    title: "Bern Defeated",
    description: "Habsburg forces ambushed Bern’s army at Schosshalde, forcing the city to pay imperial taxes and reparations."
  },
  {
    year: 1290,
    title: "Savoy Secures Geneva’s Vidomnat",
    description: "Geneva’s bishop formally enfeoffed Amadeus V of Savoy with the vidomnat, strengthening Savoyard authority within the city."
  },
  {
    year: 1291,
    title: "Swiss Confederacy Begins",
    description: "Uri, Schwyz and Unterwalden formed a defensive alliance, traditionally marking the foundation of the Swiss Confederacy."
  },
  {
    year: 1291,
    title: "Acre Falls",
    description: "Mamluk forces captured Acre, eliminating the last major Crusader stronghold on the Levantine mainland."
  },
  {
    year: 1292,
    title: "Zürich Defeated",
    description: "Habsburg forces defeated Zürich near Winterthur, forcing peace and weakening the anti-Habsburg alliance formed with Uri and Schwyz."
  },
  {
    year: 1293,
    title: "Kamakura Earthquake",
    description: "A devastating earthquake struck Japan’s political capital Kamakura, reportedly killing more than 23,000 people."
  },
  {
    year: 1294,
    title: "Genoa Defeats Venice",
    description: "An outnumbered Genoese fleet destroyed the Venetians off Laiazzo by fastening its ships into a defensive platform"
  },
  {
    year: 1295,
    title: "Marco Polo Returns",
    description: "Marco Polo returned to Venice after twenty-four years travelling through Asia and serving at Kublai Khan’s court."
  },
  {
    year: 1296,
    title: "Stone of Scone",
    description: "Edward I defeated Scotland at Dunbar, deposed John Balliol and carried the sacred Stone of Scone to London."
  },
  {
    year: 1297,
    title: "Stirling Bridge Victory",
    description: "William Wallace revolted and defeated a larger English army, igniting Scotland’s struggle for independence. He was defeated the following year, resigning as Guardian of Scotland."
  },
  {
    year: 1298,
    title: "Battle of Curzola",
    description: "Genoa devastated Venice’s fleet near modern Korčula; Marco Polo was reportedly captured and later dictated his travels."
  },
  {
    year: 1299,
    title: "Ottoman State Begins",
    description: "Osman I established an independent frontier principality in Anatolia, traditionally marking the beginning of the Ottoman Empire."
  },
  {
    year: 1300,
    title: "First Holy Year",
    description: "Pope Boniface VIII proclaimed the first official Jubilee, a special year of pilgrimage, repentance and indulgences, drawing enormous crowds to Rome."
  },
  {
    year: 1301,
    title: "Dante’s Downfall Begins",
    description: "Dante, Florence’s former prior, went to Rome to oppose papal intervention, the Black Guelphs seized power, leading to his exile the following year."
  },
  {
    year: 1302,
    title: "Dante Exiled",
    description: "Florence formally exiled Dante for corruption and political opposition, beginning the banishment during which he wrote much of the Divine Comedy."
  },
  {
    year: 1303,
    title: "Crete Earthquake",
    description: "A massive earthquake and tsunami devastated Crete and Alexandria, severely damaging its ancient lighthouse, one of the Seven Wonders."
  },
  {
    year: 1304,
    title: "Wallace’s Last Resistance",
    description: "While most Scottish leaders submitted to Edward I, William Wallace continued resisting and escaping English capture."
  },
  {
    year: 1305,
    title: "William Wallace Executed",
    description: "English forces captured Scottish resistance leader William Wallace near Glasgow. He was tried and brutally executed in London."
  },
  {
    year: 1306,
    title: "Hospitallers Invade Rhodes",
    description: "The Knights Hospitaller landed on Rhodes and began conquering the Byzantine island, which became their fortified headquarters for two centuries."
  },
  {
    year: 1307,
    title: "Templars Arrested",
    description: "On Friday, 13 October, Philip IV ordered mass arrests of Knights Templar across France, beginning the persecution that destroyed the crusading order."
  },
  {
    year: 1308,
    title: "Teutonic Knights Seize Gdańsk",
    description: "The Teutonic Knights captured Gdańsk, killed many inhabitants and seized Pomerelia, beginning a bitter conflict with Poland."
  },
  {
    year: 1309,
    title: "Teutonic Headquarters Moves",
    description: "The Teutonic Knights moved their headquarters from Venice to Malbork Castle, making Prussia the centre of their expanding state."
  },
  {
    year: 1309,
    title: "Papacy Moves to Avignon",
    description: "Pope Clement V transfers the papal court from Italy to Avignon, beginning the Avignon Papacy. Seven successive popes reside there under strong French influence, leading critics to call the period the papacy’s “Babylonian Captivity.”"
  },
  {
    year: 1310,
    title: "Templars Burned",
    description: "Philip IV had 54 Templars burned near Paris after they retracted forced confessions and tried to defend their order."
  },
  {
    year: 1311,
    title: "Council of Vienne Opens",
    description: "Pope Clement V opened the council to judge the Templars. Under French pressure, it dissolved them in 1312."
  },
  {
    year: 1312,
    title: "Council of Vienne Dissolves Templar",
    description: "Pope Clement V dissolved the Knights Templar under pressure from Philip IV, ending the crusading order after nearly two centuries."
  },
  {
    year: 1313,
    title: "Templars Final Judgment",
    description: "Pope Clement V appointed three cardinals to judge imprisoned Templar leaders, including Grandmaster Jacques de Molay, setting the stage for their execution the following year."
  },
  {
    year: 1314,
    title: "Einsiedeln Raided",
    description: "Schwyz raided the Habsburg-protected abbey during a territorial dispute, escalating tensions that helped provoke the Morgarten campaign."
  },
  {
    year: 1315,
    title: "Battle of Morgarten",
    description: "Forest cantons ambushed and defeated Duke Leopold’s Habsburg army, strengthening the alliance that became the Old Swiss Confederacy."
  },
  {
    year: 1316,
    title: "Swiss Privileges Confirmed",
    description: "Louis IV confirmed Uri, Schwyz and Unterwalden’s imperial privileges, strengthening their autonomy after Morgarten and defying the Habsburgs."
  },
  {
    year: 1317,
    title: "Portuguese Navy Established",
    description: "King Denis appointed Genoese Manuel Pessanha admiral, giving Portugal a permanent royal navy that later enabled its maritime expansion."
  },
  {
    year: 1318,
    title: "Order of Christ Planned",
    description: "King Denis sent envoys to negotiate a Portuguese order inheriting Templar property, laying foundations for the Order of Christ."
  },
  {
    year: 1319,
    title: "Order of Christ Recognized",
    description: "Pope John XXII recognized Portugal’s Order of Christ, which inherited Templar property and later supported Portuguese maritime expansion."
  },
  {
    year: 1320,
    title: "Dante’s Scientific Lecture",
    description: "Dante presented “Quaestio de Aqua et Terra”, his only scientific work, examining why land rises above the Earth’s waters."
  },
  {
    year: 1321,
    title: "Dante’s Final Masterpiece",
    description: "Dante completed the Divine Comedy around 1321 before dying in Ravenna, leaving a masterpiece of Italian and Western literature."
  },
  {
    year: 1322,
    title: "English Nobles Rebellion Crushed",
    description: "Edward II defeated rebellious nobles at Boroughbridge and executed their leader, Thomas of Lancaster, who later inspired a popular saintly cult."
  },
  {
    year: 1323,
    title: "Ockham’s Logic",
    description: "William of Ockham wrote the Summa Logicae, developing logic and nominalism behind the simplicity principle later called Ockham’s razor."
  },
  {
    year: 1324,
    title: "Mansa Musa’s Golden Pilgrimage",
    description: "Mansa Musa crossed the Sahara toward Mecca; lavish spending in Cairo advertised Mali’s wealth and devalued gold."
  },
  {
    year: 1325,
    title: "Tenochtitlán Founded",
    description: "According to traditional chronology, the Mexica founded Tenochtitlán at the place where, according to legend, an eagle devoured a snake, now depicted on Mexico’s flag."
  },
  {
    year: 1326,
    title: "Ottomans Capture Bursa",
    description: "Orhan captured Byzantine Bursa after a long siege, giving the growing Ottoman state its first major city and future capital."
  },
  {
    year: 1327,
    title: "English King Abdicates",
    description: "Edward II was forced to abdicate, and fourteen-year-old Edward III was crowned while Queen Isabella and Roger Mortimer, who led the revolt, governed."
  },
  {
    year: 1328,
    title: "Scotland’s Independence Recognized",
    description: "England recognized Scotland as independent and Robert the Bruce as king, ending the First War of Scottish Independence."
  },
  {
    year: 1329,
    title: "Robert the Bruce Dies",
    description: "Scotland’s liberator died after achieving independence, leaving his crown to five-year-old David II and his heart for crusade."
  },
  {
    year: 1330,
    title: "Bruce’s Heart Goes to Battle",
    description: "Sir James Douglas died fighting Granada at Teba while carrying Robert the Bruce’s heart toward the Holy Land."
  },
  {
    year: 1331,
    title: "War against Kamakura Shogunate",
    description: "Emperor Go-Daigo rebels against Japan’s Kamakura shogunate, beginning the Genkō War. His resistance eventually topples the shogunate and briefly restores imperial rule in 1333."
  },
  {
    year: 1332,
    title: "Lucerne Joins the Swiss Confederacy",
    description: "Lucerne forms an alliance with Uri, Schwyz and Unterwalden, becoming the Confederacy’s fourth member and its first city. The pact begins its expansion beyond the three original rural communities."
  },
  {
    year: 1333,
    title: "Kamakura Shogunate Falls",
    description: "Imperial loyalists capture Kamakura and destroy the Hōjō regime. Japan’s first shogunate collapses, allowing Emperor Go-Daigo to begin the short-lived Kenmu Restoration of direct imperial rule."
  },
  {
    year: 1334,
    title: "Kenmu Restoration Faces Discontent",
    description: "Emperor Go-Daigo sought to consolidate direct imperial rule, but disputes over land and inadequate rewards for many samurai weakened support for the Kenmu Restoration."
  },
  {
    year: 1335,
    title: "Kenmu Restoration Collapses",
    description: "Ashikaga Takauji defeats Hōjō loyalists without imperial authorization. He remains in Kamakura and rebels against Emperor Go-Daigo, beginning the collapse of the Kenmu Restoration"
  },
  {
    year: 1336,
    title: "Japan Splits Between Two Imperial Courts",
    description: "Ashikaga Takauji defeats Emperor Go-Daigo’s forces at Minatogawa and captures Kyoto. He installs Emperor Kōmyō, while Go-Daigo establishes a rival court at Yoshino, beginning nearly sixty years of divided imperial rule."
  },
  {
    year: 1337,
    title: "Hundred Years’ War Begins",
    description: "Philip VI declares Edward III’s French territories confiscated, while Edward challenges Philip’s right to France’s throne. Their dispute begins the intermittent Hundred Years’ War, fought between England and France until 1453."
  },
  {
    year: 1338,
    title: "Ashikaga Shogunate Begins",
    description: "Ashikaga Takauji receives the title of shogun and formally establishes Japan’s second warrior government. Based in Kyoto, the Ashikaga shogunate rules Japan for over two centuries."
  },
  {
    year: 1339,
    title: "Battle of Laupen",
    description: "Bern and troops from Uri, Schwyz and Unterwalden defeat a coalition led by Fribourg and regional nobles. Their cooperation strengthens Bern’s relationship with the Confederates and prepares its admission to the Swiss Confederacy in 1353."
  },
  {
    year: 1340,
    title: "England Destroys the French Fleet at Sluys",
    description: "Edward III wins a crushing naval victory at Sluys, capturing or destroying most of the French fleet. The triumph removes the immediate threat of invasion and allows English armies to cross the Channel during the Hundred Years’ War."
  },
  {
    year: 1340,
    title: "Christian Kingdoms Triumph at Río Salado",
    description: "Castile and Portugal defeat the combined armies of Morocco’s Marinid dynasty and Muslim Granada near Tarifa. The battle prevents another major North African invasion and becomes a decisive turning point in the Reconquista."
  },
  {
    year: 1341,
    title: "Petrarch Is Crowned Poet Laureate",
    description: "Petrarch receives the laurel crown on Rome’s Capitoline Hill in a deliberate revival of an ancient tradition. The ceremony symbolizes the rediscovery of classical culture that defines Renaissance humanism. Famous Quote: \"Whatever the world finds pleasing is but a brief dream\""
  },
  {
    year: 1342,
    title: "Siege of Algeciras Begins",
    description: "Alfonso XI of Castile besieges Algeciras, the Marinid Empire’s principal Iberian port. Supported by Aragonese and Genoese fleets, he seeks to close this strategic gateway for armies crossing from North Africa."
  },
  {
    year: 1343,
    title: "Battle of the Strait",
    description: "Algeciras’s Marinid defenders fire primitive cannon at the Castilian besiegers, among Europe’s earliest recorded uses of gunpowder artillery."
  },
  {
    year: 1344,
    title: "Algeciras Falls to Castile",
    description: "Starved by a tightening land and naval blockade, Algeciras surrenders to Alfonso XI after a twenty-one-month siege. Castile gains the Marinids’ principal European port, leaving them only Gibraltar."
  },
  {
    year: 1345,
    title: "Ponte Vecchio Is Rebuilt",
    description: "Florence completes the present Ponte Vecchio after the previous bridge was destroyed by floods. Its innovative three segmental arches support rows of shops, making it one of the world’s most recognizable medieval bridges."
  },
  {
    year: 1346,
    title: "England Triumphs at Crécy",
    description: "Edward III’s smaller English army decisively defeats Philip VI of France at Crécy. English longbowmen repel repeated attacks, making it the first great English victory of the Hundred Years’ War."
  },
  {
    year: 1347,
    title: "The Black Death Reaches Europe",
    description: "Trading ships carry plague from the Black Sea into Mediterranean ports, reaching Constantinople and Sicily. The pandemic rapidly spreads across Europe."
  },
  {
    year: 1348,
    title: "Black Death Spreads Across Europe",
    description: "Plague spreads from Mediterranean ports through Italy, France, Iberia and England, killing millions."
  },
  {
    year: 1349,
    title: "The Black Death Reaches Scandinavia",
    description: "Plague ships carry the Black Death to Norway, where it spreads rapidly from ports including Bergen and Oslo."
  },
  {
    year: 1350,
    title: "Plague Ends the Siege of Gibraltar",
    description: "The Black Death strikes Alfonso XI’s Castilian army while it besieges Muslim-held Gibraltar. Alfonso refuses to withdraw and dies of plague, forcing his forces to abandon their attempted Reconquista conquest."
  },
  {
    year: 1351,
    title: "Zürich Joins the Swiss Confederacy",
    description: "Threatened by Austria after Zürich’s mayor Rudolf Brun executed political opponents, the city forms an alliance with Uri, Schwyz, Unterwalden and Lucerne. Zürich becomes the Confederacy’s fifth member and its first major imperial city."
  },
  {
    year: 1352,
    title: "Glarus and Zug Join the Swiss Confederacy",
    description: "Confederate forces occupy Habsburg-controlled Glarus and besiege Zug, compelling both to conclude alliances with the Confederates. Traditionally regarded as the sixth and seventh members, they remain contested by the Habsburgs for decades."
  },
  {
    year: 1353,
    title: "Bern Joins the Swiss Confederacy",
    description: "Bern concludes an “eternal alliance” with Uri, Schwyz and Unterwalden on 6 March. Its accession completes the Confederacy of the Eight Cantons, whose membership remains unchanged until 1481."
  },
  {
    year: 1354,
    title: "Ibn Battuta Completes His Great Journey",
    description: "Ibn Battuta returns to Morocco after nearly thirty years of travel through Africa, Asia and Europe. He has covered approximately 117,000 kilometres, probably travelling farther than any other known premodern explorer. His experiences are soon recorded in the Rihla."
  },
  {
    year: 1355,
    title: "Venice Executes Its Own Doge",
    description: "Doge Marino Faliero attempts to overthrow Venice’s aristocratic republic and make himself ruler. After the conspiracy is exposed, the eighty-year-old doge is beheaded and his portrait symbolically erased from the Doge’s Palace."
  },
  {
    year: 1356,
    title: "Basel Earthquake Devastates the Region",
    description: "A magnitude 6.6 earthquake and subsequent fires destroy much of Basel and numerous surrounding castles. It remains the strongest historically documented earthquake in Switzerland."
  },
  {
    year: 1357,
    title: "Construction of Charles Bridge Begins",
    description: "Emperor Charles IV begins building Prague’s monumental stone bridge across the Vltava, replacing one damaged by the flood of 1342. Legend dates its foundation to 9 July at 5:31, creating the palindrome 135797531, though the precise time is not historically certain."
  },
  {
    year: 1358,
    title: "Red Turbans Threaten Mongol Rule",
    description: "Liu Futong’s Red Turbans, a widespread peasant and religious movement rebelling against China’s Mongol-led Yuan dynasty, capture the former Song capital Kaifeng, and establish their restored Song regime there."
  },
  {
    year: 1359,
    title: "Mongol-led Yuan Recapture Kaifeng",
    description: "Yuan general Chaghan Temur retakes Kaifeng and drives out the Red Turban regime. Although this reverses the rebels’ greatest northern conquest, the wider uprising continues."
  },
  {
    year: 1359,
    title: "Golden Horde’s Great Troubles",
    description: "Khan Berdi Beg dies, probably murdered, ending the Golden Horde’s stable succession. Rival claimants begin the twenty-year Great Troubles, during which more than twenty khans compete for power, weakening Mongol control over the Russian principalities."
  },
  {
    year: 1360,
    title: "France Mints the First Franc",
    description: "France introduces the gold franc à cheval to help finance King John II’s ransom following his capture by England. This is the first appearance of the franc, a currency name later adopted by Switzerland and several other countries."
  },
  {
    year: 1361,
    title: "Pestis Secunda Returns to Europe",
    description: "A major second wave of plague, known as the pestis secunda, strikes Europe only a decade after the Black Death."
  },
  {
    year: 1362,
    title: "Grote Mandrenke Strikes Europe",
    description: "A catastrophic North Sea storm tide overwhelms dikes and destroys settlements along the coasts of the Netherlands, northern Germany and Denmark. Known as the Grote Mandrenke, or “Great Drowning of Men,” it kills tens of thousands and permanently reshapes parts of the coastline."
  },
  {
    year: 1363,
    title: "Red Turbans Win at Lake Poyang",
    description: "Zhu Yuanzhang’s smaller fleet defeats rival rebel emperor Chen Youliang using fire ships. The victory makes Zhu the strongest contender to replace China’s Mongol-led Yuan dynasty, enabling him to found the Ming dynasty in 1368."
  },
  {
    year: 1364,
    title: "University of Kraków Is Founded",
    description: "Casimir III the Great establishes Poland’s first university on 12 May. Initially teaching liberal arts, medicine and law, it later becomes the Jagiellonian University, where Nicolaus Copernicus studies during the 1490s."
  },
  {
    year: 1365,
    title: "University of Vienna Is Founded",
    description: "Duke Rudolf IV establishes the University of Vienna on 12 March. Named the Alma Mater Rudolphina after its founder, it becomes Austria’s oldest university and the oldest continuously operating university in the present-day German-speaking world."
  },
  {
    year: 1366,
    title: "Castilian Civil War",
    description: "Supported by French mercenaries, Henry of Trastámara invades Castile and drives his half-brother Pedro I into exile. Henry is crowned King of Castile and León, beginning an international struggle involving France and England within the wider Hundred Years’ War."
  },
  {
    year: 1367,
    title: "Zhu Yuanzhang Eliminates His Greatest Rival",
    description: "Zhu captures Suzhou and defeats rival rebel ruler Zhang Shicheng, securing control over the prosperous lower Yangtze region. With his Chinese rivals eliminated, Zhu can attack the Mongol-led Yuan dynasty and found the Ming in 1368."
  },
  {
    year: 1368,
    title: "Ming Dynasty Replaces Mongol Rule",
    description: "Former peasant and Red Turban commander Zhu Yuanzhang proclaims himself the Hongwu Emperor and establishes the Ming dynasty at Nanjing. His armies capture the Yuan capital, ending nearly a century of Mongol rule over China and forcing the Yuan court north into Mongolia."
  },
  {
    year: 1369,
    title: "Ming Establish Confucian Schools",
    description: "One year after overthrowing Mongol rule, the Hongwu Emperor orders every county in China to establish a Confucian school. The policy helps the new Ming dynasty restore Chinese institutions and train officials after decades of rebellion."
  },
  {
    year: 1370,
    title: "Timur Establishes the Timurid Empire",
    description: "Timur becomes supreme ruler of Transoxiana. Establishing his capital at Samarkand, he begins the Timurid Empire and the conquests that will extend from Central Asia into Persia, India, Russia and the Middle East."
  },
  {
    year: 1371,
    title: "Ming Restrict Maritime Trade",
    description: "The Hongwu Emperor introduces the haijin, or “sea ban,” restricting private overseas commerce to combat piracy and enforce the imperial tribute system."
  },
  {
    year: 1372,
    title: "Anglo-Portuguese Treaty of Tagilde",
    description: "King Ferdinand I of Portugal concludes the Treaty of Tagilde with representatives of England’s John of Gaunt. Formalized by another treaty in 1373, it begins the world’s oldest continuously operating diplomatic alliance."
  },
  {
    year: 1373,
    title: "England and Portugal Forge Enduring Alliance",
    description: "King Edward III of England and King Ferdinand I and Queen Leonor of Portugal sign the Treaty of London, promising perpetual friendship and mutual assistance. Building on the 1372 Treaty of Tagilde, it establishes the alliance generally regarded as the world’s oldest still in force."
  },
  {
    year: 1374,
    title: "Europe’s Great Dancing Mania Begins",
    description: "Hundreds of people begin dancing uncontrollably in Aachen, continuing until they collapse from exhaustion. The mysterious “dancing plague” spreads along the Rhine into present-day Belgium, France, Luxembourg and the Netherlands; its cause remains unknown."
  },
  {
    year: 1375,
    title: "Florence Rebels Against the Pope",
    description: "Florence organizes numerous cities against Pope Gregory XI, beginning the War of the Eight Saints. Its name refers to eight Florentine officials who directed the struggle, which helps persuade Gregory to return the papacy from Avignon to Rome in 1377."
  },
  {
    year: 1376,
    title: "Pope Urged to come Back to Rome",
    description: "Italian mystic Catherine of Siena travels to Avignon, where she personally urges Pope Gregory XI to reform the Church, make peace with Florence and restore the papacy to Rome."
  },
  {
    year: 1377,
    title: "Papacy Returns Permanently to Rome",
    description: "Pope Gregory XI enters Rome on 17 January, ending nearly seven decades of papal residence in Avignon and permanently restoring Rome as the pope’s principal seat."
  },
  {
    year: 1378,
    title: "Two Rival Popes Divide Western Christianity",
    description: "After Gregory XI dies, the cardinals elect Urban VI in Rome but soon reject him and elect Clement VII, who establishes a rival court at Avignon. The Western Schism divides Catholic Europe between competing popes until 1417."
  },
  {
    year: 1379,
    title: "Genoa Nearly Conquers Venice",
    description: "Genoese forces defeat Venice’s fleet and capture Chioggia at the southern edge of the Venetian Lagoon, bringing Venice close to collapse."
  },
  {
    year: 1380,
    title: "Genoese Fleet Starved",
    description: "The Genoese find themselves blockaded inside the lagoon. Starving and unable to escape, their forces surrender."
  },
  {
    year: 1381,
    title: "Venice and Genoa Make Peace",
    description: "The Treaty of Turin ends the War of Chioggia, preserving Venice after its near-defeat by Genoa."
  },
  {
    year: 1382,
    title: "Ming Conquer Yunnan",
    description: "Ming armies conquer Yuan-held Yunnan, extending the dynasty’s rule into southwestern China."
  },
  {
    year: 1383,
    title: "Portugal’s Succession Crisis Begins",
    description: "King Ferdinand dies without a son, triggering Portugal’s succession crisis and John of Aviz’s revolt."
  },
  {
    year: 1384,
    title: "Plague Saves Lisbon from Castile",
    description: "Plague forces Castile to abandon Lisbon’s siege, preserving Portuguese resistance during the succession crisis."
  },
  {
    year: 1385,
    title: "Swiss-Habsburg War Begins",
    description: "Swiss towns attack Habsburg strongholds, beginning the Sempach War that culminates in their decisive 1386 victory."
  },
  {
    year: 1386,
    title: "Swiss Confederates Triumph at Sempach",
    description: "Swiss Confederates defeat Habsburg forces at Sempach, killing Duke Leopold III and weakening Austrian power."
  },
  {
    year: 1387,
    title: "Glarus Declares Independence",
    description: "Glarus held its first documented Landsgemeinde and adopted its first Landessatzung. Its independence was then militarily secured at Näfels in 1388."
  },
  {
    year: 1388,
    title: "Glarus Triumphs at Näfels",
    description: "Outnumbered Glarus and Confederate allies defeat Habsburgs at Näfels, securing independence still commemorated by an annual pilgrimage"
  },
  {
    year: 1389,
    title: "Swiss-Habsburg War Ends",
    description: "A Swiss–Habsburg truce confirms Confederate wartime conquests, concluding the Sempach War after Näfels."
  },
  {
    year: 1390,
    title: "Byzantium Loses Its Last Anatolian City",
    description: "Ottomans capture Philadelphia, Byzantium’s last Anatolian city, forcing rival princes Manuel and John to assist them militarily."
  },
  {
    year: 1391,
    title: "Timur Defeats the Golden Horde",
    description: "Timur defeats Tokhtamysh’s Golden Horde at the Kondurcha River, temporarily weakening his former ally’s regional political power."
  },
  {
    year: 1392,
    title: "League of Bologna Resists Milan",
    description: "Florence forms the League of Bologna with six Italian states to resist Gian Galeazzo Visconti’s Milanese expansion. The alliance included Florence, Bologna, Padua, Ferrara, Imola, Faenza and Ravenna"
  },
  {
    year: 1393,
    title: "Sempacherbrief Unites the Eight Cantons",
    description: "The Sempacherbrief unites all eight Confederate members, regulates warfare and recognizes Glarus as an equal Confederate partner."
  },
  {
    year: 1394,
    title: "Twenty Years’ Peace Secures Swiss Gains",
    description: "The Confederates and Habsburg Austria extend their truce for twenty years, confirming Swiss territorial gains after Sempach."
  },
  {
    year: 1395,
    title: "Grey League Is Founded",
    description: "Regional nobles and valley communities establish the Grey League, which later helps form Switzerland’s canton of Graubünden."
  },
  {
    year: 1396,
    title: "Crusade of Nicopolis Is Crushed",
    description: "Ottomans defeat a multinational crusading army at Nicopolis, decisively strengthening Sultan Bayezid I’s dominance across the Balkans."
  },
  {
    year: 1397,
    title: "Medici Bank Is Founded",
    description: "Giovanni di Bicci de’ Medici establishes the Medici Bank in Florence, financing his family’s later political ascent."
  },
  {
    year: 1398,
    title: "Timur Sacks Delhi",
    description: "Timur defeats the Delhi Sultanate, sacks its capital and massacres inhabitants, devastating northern India for generations afterward."
  },
  {
    year: 1399,
    title: "Timur Begins His Seven-Year Campaign",
    description: "Returning from India, Timur launches his seven-year campaign westward, devastating Georgia before attacking Syria and the Ottomans."
  },
  {
    year: 1400,
    title: "Timur Sacks Aleppo",
    description: "Timur defeats the Mamluk army at Aleppo, sacks the city and advances toward Damascus before year’s end."
  },
  {
    year: 1401,
    title: "Timur Sacks Damascus",
    description: "Timur captured and devastated Damascus, massacring inhabitants and deporting celebrated artisans to his capital, Samarkand."
  },
  {
    year: 1401,
    title: "Florence’s Bronze-Door Contest",
    description: "Florence’s Baptistery competition pitted Ghiberti against Brunelleschi, launching two defining careers of the Renaissance."
  },
  {
    year: 1402,
    title: "Timur wins Battle of Ankara",
    description: "Timur defeated and captured Ottoman Sultan Bayezid, plunging the Ottoman realm into an eleven-year civil war."
  },
  {
    year: 1403,
    title: "Timur’s Final Georgian Invasion",
    description: "Timur captured Birtvisi and devastated Georgia, forcing George VII to accept tribute while retaining Christian rule"
  },
  {
    year: 1404,
    title: "Ming–Japanese Trade Formalized",
    description: "The Ming recognized Ashikaga Yoshimitsu as “King of Japan,” formalizing tributary trade between China and Japan."
  },
  {
    year: 1405,
    title: "Death of Timur",
    description: "Timur died while marching against Ming China, triggering succession struggles and fragmentation throughout his vast empire."
  },
  {
    year: 1405,
    title: "Zheng He’s First Voyage",
    description: "Zheng He departed with an enormous Ming fleet, beginning seven expeditions across the Indian Ocean."
  },
  {
    year: 1406,
    title: "Ming Begin Forbidden City Construction",
    description: "Construction began on Beijing’s Forbidden City, China’s imperial and ceremonial center for the following five centuries."
  },
  {
    year: 1407,
    title: "Zheng He Defeats the Pirate Fleet",
    description: "Returning from India, Zheng He defeated Chen Zuyi’s pirate fleet near Palembang and captured its leader."
  },
  {
    year: 1407,
    title: "Ming Conquers Vietnam",
    description: "Ming forces conquered Đại Ngu and annexed it as Jiaozhi, beginning two decades of Chinese occupation."
  },
  {
    year: 1408,
    title: "Yongle Encyclopedia Completed",
    description: "Ming scholars completed the Yongle Encyclopedia, an unprecedented handwritten compilation of Chinese knowledge spanning 11,095 volumes. The world’s largest general encyclopedia for nearly six centuries."
  },
  {
    year: 1409,
    title: "Council of Pisa creates Three Popes",
    description: "The Council of Pisa tried ending the Western Schism by electing Alexander V, creating three popes instead."
  },
  {
    year: 1410,
    title: "Battle of Grunwald",
    description: "Polish–Lithuanian forces crushed the Teutonic Order, permanently shifting Central Europe’s balance of power."
  },
  {
    year: 1411,
    title: "Treaty of Ayllón",
    description: "Portugal and Castile made peace, enabling Portugal’s turn toward North African conquest and eventual overseas exploration."
  },
  {
    year: 1412,
    title: "Medici Become Papal Bankers",
    description: "John XXIII made the Medici Bank his papal fiscal agent, greatly accelerating the Florentine family’s rise."
  },
  {
    year: 1413,
    title: "Ottoman Empire Reunified",
    description: "Mehmed I defeated his brother Musa at Çamurlu, ending the Ottoman Interregnum and reunifying the empire."
  },
  {
    year: 1414,
    title: "Council of Constance Opens",
    description: "Church leaders assembled to end the Western Schism, reform the Church and confront Jan Hus, and the emerging Hussite movement"
  },
  {
    year: 1415,
    title: "Portugal Conquers Ceuta",
    description: "Portugal captured Ceuta in North Africa, establishing the first foothold of its emerging overseas empire."
  },
  {
    year: 1416,
    title: "Battle of Gallipoli",
    description: "Venice destroyed an Ottoman fleet off Gallipoli, confirming Venetian naval supremacy across the fifteenth-century Aegean."
  },
  {
    year: 1417,
    title: "Council of Constance Creates One Pope",
    description: "The Council of Constance elected Martin V, ending nearly forty years of rival papacies in Western Christianity."
  },
  {
    year: 1418,
    title: "Portuguese Reach Porto Santo",
    description: "João Gonçalves Zarco and Tristão Vaz sighted Porto Santo, launching Portugal’s systematic exploration of Madeira."
  },
  {
    year: 1419,
    title: "Portuguese Reach Madeira",
    description: "Portuguese navigators reached Madeira, extending Atlantic exploration beyond Porto Santo and preparing permanent colonization."
  },
  {
    year: 1420,
    title: "Prince Henry Leads Order of Christ",
    description: "Prince Henry became the Order’s administrator, gaining resources later used for Portuguese maritime expansion."
  },
  {
    year: 1421,
    title: "Ming Government Moves to Beijing",
    description: "Yongle transferred the imperial administration from Nanjing, establishing Beijing as China’s enduring capital."
  },
  {
    year: 1422,
    title: "Swiss lose Battle of Arbedo",
    description: "Milanese forces defeated Swiss Confederates near, recovering southern Alpine territories and halting expansion beyond the Gotthard."
  },
  {
    year: 1423,
    title: "Venice Takes Thessalonica",
    description: "Byzantium transferred Thessalonica to Venice, whose occupation provoked a prolonged struggle against the Ottoman Empire."
  },
  {
    year: 1424,
    title: "Ghiberti Completes the North Doors",
    description: "After two decades, Ghiberti completed twenty-eight bronze panels depicting Christ’s life for the Florence Baptistery."
  },
  {
    year: 1425,
    title: "Madeira’s Colonization Begins",
    description: "Portugal organized Madeira’s permanent settlement, developing an Atlantic colony eventually dominated by sugar production."
  },
  {
    year: 1426,
    title: "First Capitulate of Milan",
    description: "Swiss cantons relinquished their southern conquests after Arbedo but retained customs exemptions for merchants travelling to Milan."
  },
  {
    year: 1427,
    title: "Portuguese Sight the Azores",
    description: "Diogo de Silves is traditionally credited with sighting the Azores during a Portuguese Atlantic voyage."
  },
  {
    year: 1428,
    title: "Siege of Orléans Begins",
    description: "Anglo-Burgundian forces besieged the strategic Loire city, threatening the survival of Charles VII’s cause."
  },
  {
    year: 1429,
    title: "Siege of Orléans Lifted",
    description: "Joan of Arc inspired French forces to break the English siege, reversing the Hundred Years’ War’s momentum."
  },
  {
    year: 1430,
    title: "Ottoman Conquest of Thessalonica",
    description: "Murad II captured Venice-held Thessalonica, consolidating Ottoman control of Macedonia and the northern Aegean."
  },
  {
    year: 1431,
    title: "Joan of Arc Executed",
    description: "A pro-English church court condemned Joan for heresy, burning the nineteen-year-old at Rouen."
  },
  {
    year: 1432,
    title: "Santa Maria Reached",
    description: "Gonçalo Velho is traditionally credited with reaching Santa Maria, advancing Portugal’s exploration of the Azores."
  },
  {
    year: 1433,
    title: "Zheng He’s Final Voyage Ends",
    description: "His treasure fleet returned to China, concluding three decades of unprecedented Ming expeditions across the Indian Ocean."
  },
  {
    year: 1434,
    title: "Cape Bojador Rounded",
    description: "Gil Eanes passed the feared cape for Prince Henry, enabling sustained Portuguese exploration along western Africa."
  },
  {
    year: 1435,
    title: "Henry Advances Atlantic Exploration",
    description: "Prince Henry dispatched Gil Eanes and Afonso Baldaia fifty leagues beyond Cape Bojador."
  },
  {
    year: 1436,
    title: "Brunelleschi’s Dome Completed",
    description: "Florence completed its vast self-supporting cathedral dome, transforming Renaissance architecture and engineering."
  },
  {
    year: 1437,
    title: "Ulugh Beg’s Star Catalogue",
    description: "Ulugh Beg’s Samarkand astronomers recorded positions for 1,018 stars, creating the era’s most accurate stellar catalogue."
  },
  {
    year: 1438,
    title: "Pachacuti Transforms the Inca State",
    description: "Traditional chronology dates Pachacuti’s Chanca victory and transformation of Cusco into the expanding Inca Empire."
  },
  {
    year: 1439,
    title: "Gutenberg’s Secret Experiments Revealed",
    description: "A Strasbourg lawsuit documented Gutenberg’s press, metals, and moulds, suggesting early experiments with movable-type printing."
  },
  {
    year: 1440,
    title: "Old Zürich War Begins",
    description: "After Zürich contests the Toggenburg inheritance with Schwyz, Confederate forces invade, forcing Zürich to surrender the Höfe."
  },
  {
    year: 1441,
    title: "Berner Spruchbrief to Arbitrate",
    description: "Bern’s arbitration returns Grüningen to Zürich while confirming local rights, temporarily stabilizing the conflict after Zürich’s defeat."
  },
  {
    year: 1442,
    title: "Zürich Allies with the Habsburgs",
    description: "Zürich sought Habsburg support against Schwyz and Glarus over the Toggenburg inheritance and strategic Alpine trade routes."
  },
  {
    year: 1443,
    title: "Battle of St. Jakob an der Sihl",
    description: "Confederates defeated Zürich outside its walls; Mayor Rudolf Stüssi died defending the retreat across the Sihl."
  },
  {
    year: 1444,
    title: "Murder of Greifensee",
    description: "After capturing Greifensee, Confederate troops execute nearly its entire Zürich garrison, remembered as the Murder of Greifensee."
  },
  {
    year: 1445,
    title: "Battle of Wollerau",
    description: "Zürich’s twelve-ship fleet battles Schwyz’s larger force on Lake Zürich, the Old Zurich War’s greatest naval engagement."
  },
  {
    year: 1446,
    title: "Ragaz Victory and Constance Truce",
    description: "Confederates defeat Habsburg forces at Ragaz; exhausted belligerents sign the Constance truce, ending six years of warfare."
  },
  {
    year: 1447,
    title: "Arbitration Reopens Peace Talks",
    description: "Augsburg’s mayor rules Zürich must accept Confederate arbitration; negotiations at Einsiedeln focus on war guilt and reparations"
  },
  {
    year: 1448,
    title: "Peace Talks Remain Stalled",
    description: "The Constance truce holds, but disputes over war guilt and compensation prevent Zürich and Confederates from reaching peace."
  },
  {
    year: 1449,
    title: "Bern Revives Peace Negotiations",
    description: "Bern mediates renewed negotiations as Zürich grows estranged from Habsburg, preparing the compromise reached the following year."
  },
  {
    year: 1450,
    title: "Peace of Einsiedeln",
    description: "Zürich reconciled with the Confederates, dissolved its Habsburg alliance, and relinquished claims to disputed Toggenburg territories."
  },
  {
    year: 1451,
    title: "Mehmed II Returns as Sultan",
    description: "After Murad II’s death, nineteen-year-old Mehmed regained the Ottoman throne and began preparing Constantinople’s conquest."
  },
  {
    year: 1452,
    title: "Ghiberti Completes the Gates of Paradise",
    description: "After twenty-seven years, Ghiberti completed ten gilded bronze panels whose perspective and naturalism transformed Renaissance sculpture."
  },
  {
    year: 1452,
    title: "Dum Diversas Issued",
    description: "Pope Nicholas V authorized Portugal to conquer non-Christians and enslave captives, providing religious justification for Atlantic expansion."
  },
  {
    year: 1453,
    title: "Fall of Constantinople",
    description: "Mehmed II captured Constantinople, ending the Byzantine Empire and establishing the city as the Ottoman capital."
  },
  {
    year: 1453,
    title: "Hundred Years’ War Ends",
    description: "French artillery destroyed Talbot’s English army at the Battle of Castillon, effectively ending the Hundred Years’ War."
  },
  {
    year: 1454,
    title: "Lombard Wars Ends",
    description: "Milan and Venice ended the Lombard Wars, establishing a balance of power that stabilized Renaissance Italy, and a united Christian front."
  },
  {
    year: 1455,
    title: "Gutenberg Bible Appears",
    description: "The first finished copies appeared around in Mainz, Germany, demonstrating how movable metal type could reproduce books on an unprecedented scale."
  },
  {
    year: 1456,
    title: "Siege of Belgrade",
    description: "John Hunyadi repelled Mehmed II’s forces, halting the Ottoman advance toward Central Europe for decades."
  },
  {
    year: 1457,
    title: "Battle of Albulena",
    description: "Skanderbeg’s concealed Albanian forces surprised and routed a much larger Ottoman army."
  },
  {
    year: 1458,
    title: "Ottomans Capture the Acropolis",
    description: "Athens’s Florentine rulers surrendered the Acropolis, completing Mehmed II’s incorporation of the city into his empire."
  },
  {
    year: 1459,
    title: "Serbia Falls to Ottomans",
    description: "Mehmed II captured Smederevo, ending the Serbian Despotate and transforming Serbia into an Ottoman province."
  },
  {
    year: 1460,
    title: "Southern Greece (Morea) Falls",
    description: "Mehmed II captured Mystras, extinguishing the Byzantine Despotate of Morea, medieval name for the Peloponnese in southern Greece."
  },
  {
    year: 1461,
    title: "Empire of Trebizond Falls",
    description: "Mehmed II captured Trebizond, ending the last surviving Byzantine successor empire eight years after Constantinople’s fall."
  },
  {
    year: 1462,
    title: "Castile Captures Gibraltar",
    description: "Castilian forces captured Gibraltar from Granada, permanently ending more than seven centuries of Muslim control."
  },
  {
    year: 1463,
    title: "Ottoman–Venetian War Begins",
    description: "Venice declared war on the Ottomans, beginning a sixteen-year struggle over Greece and the Aegean."
  },
  {
    year: 1464,
    title: "Venice Invades the Southern Greece",
    description: "Venice sent Sigismondo Malatesta with a major army to recover southern Greece from the Ottomans."
  },
  {
    year: 1465,
    title: "Venice Rejects Ottoman Peace",
    description: "Mehmed II sent peace feelers, but Venice distrusted him and continued its costly Aegean war."
  },
  {
    year: 1466,
    title: "Venice Attacks Ottoman Greece",
    description: "Vettore Cappello captured three Aegean islands and attacked Athens, before Venice suffered defeat at Patras."
  },
  {
    year: 1467,
    title: "Ōnin War Begins",
    description: "A shogunal succession dispute ignited civil war, devastated Kyoto and opened Japan’s Warring States period."
  },
  {
    year: 1468,
    title: "Swiss–Habsburg Waldshut War",
    description: "Swiss forces invaded Habsburg lands and besieged Waldshut, compelling Duke Sigismund to pay an indemnity."
  },
  {
    year: 1469,
    title: "Fernão Gomes Receives African Monopoly",
    description: "Afonso V granted Gomes exclusive Guinea trade, requiring roughly 500 kilometres of new coastal exploration annually."
  },
  {
    year: 1470,
    title: "Fernão Gomes Expand African Voyages",
    description: "Gomes’s captains mapped new West African coastline while seeking gold, ivory, pepper and trading communities."
  },
  {
    year: 1471,
    title: "Portuguese Reach Ghana",
    description: "Santarém and Escobar reached Gold Coast and Príncipe in modern-day Ghana."
  },
  {
    year: 1472,
    title: "World’s Oldest Surviving Bank Founded",
    description: "Siena founded a public charitable lender that evolved into the world’s oldest bank still operating."
  },
  {
    year: 1473,
    title: "Charles Is Denied a Crown",
    description: "Emperor Frederick III abandons Charles the Bold’s coronation at Trier, frustrating his dream of a Burgundian kingdom."
  },
  {
    year: 1474,
    title: "Swiss Enter Burgundian Wars",
    description: "Bern declares war on Burgundy; Swiss-led forces defeat a Burgundian army at Héricourt, opening the Burgundian Wars."
  },
  {
    year: 1475,
    title: "Battle on the Planta",
    description: "Valaisans and Confederate allies defeat Savoy outside Sion, securing Lower Valais and blocking Burgundy’s Italian reinforcements."
  },
  {
    year: 1476,
    title: "Grandson and Murten",
    description: "Swiss forces defeat Charles at Grandson and Murten, seizing his treasure and shattering his military power."
  },
  {
    year: 1477,
    title: "Charles Dies at Nancy",
    description: "Lorrainer and Swiss forces defeat Charles the Bold at Nancy, killing him and ending Burgundian power. The famous German mnemonic is: «Bei Grandson das Gut, bei Murten den Mut, bei Nancy das Blut»."
  },
  {
    year: 1478,
    title: "Spanish Inquisition Begins",
    description: "Pope Sixtus IV authorizes the Spanish Inquisition, allowing Isabella and Ferdinand to prosecute suspected religious heresy."
  },
  {
    year: 1479,
    title: "Treaty of Alcáçovas Divides World",
    description: "Portugal and Castile end their succession war and divide Atlantic expansion, foreshadowing the Treaty of Tordesillas."
  },
  {
    year: 1479,
    title: "Venice Accepts Ottoman Victory",
    description: "Venice ends its sixteen-year war with Mehmed II, surrendering territories while restoring trade within the Ottoman Empire."
  },
  {
    year: 1480,
    title: "Ottomans Invade Italy",
    description: "Ottoman forces capture Otranto in southern Italy, creating panic that Mehmed II intends to conquer Rome."
  },
  {
    year: 1481,
    title: "Treaty of Stans",
    description: "The Treaty of Stans resolves Confederate divisions, while Fribourg and Solothurn become its ninth and tenth members."
  },
  {
    year: 1482,
    title: "Elmina Castle Built",
    description: "Portugal builds Elmina Castle in modern-day Ghana, creating its first permanent trading fortress in sub-Saharan Africa."
  },
  {
    year: 1483,
    title: "Princes in the Tower",
    description: "England’s young princes disappear in the Tower of London after their uncle Richard III takes the throne."
  },
  {
    year: 1484,
    title: "Portugal Rejects Columbus",
    description: "Portugal rejects Columbus’s westward route to Asia because experts correctly judge his distance calculations far too small."
  },
  {
    year: 1485,
    title: "Tudors Win at Bosworth",
    description: "Henry Tudor defeats and kills Richard III at Bosworth, ending Plantagenet rule and founding England’s Tudor dynasty."
  },
  {
    year: 1486,
    title: "Tudor Rose Marriage",
    description: "Henry VII marries Elizabeth of York, uniting Lancastrian and Yorkist claims and creating the symbolic Tudor Rose."
  },
  {
    year: 1486,
    title: "Pico’s 900 Theses",
    description: "Pico della Mirandola publishes 900 theses reconciling Christian, Jewish, Islamic, classical, and mystical philosophical traditions."
  },
  {
    year: 1487,
    title: "Final Battle of the Roses",
    description: "Henry VII defeats Lambert Simnel’s Yorkist army at Stoke Field, traditionally ending the Wars of the Roses."
  },
  {
    year: 1488,
    title: "Dias Rounds Africa",
    description: "Bartolomeu Dias becomes the first European to round southern Africa, proving a route toward the Indian Ocean."
  },
  {
    year: 1489,
    title: "Leonardo Studies the Skull",
    description: "Leonardo sections a human skull, producing remarkably accurate drawings that pioneer scientific anatomical illustration."
  },
  {
    year: 1490,
    title: "Leonardo Creates Vitruvian Man",
    description: "Leonardo draws the Vitruvian Man, uniting human anatomy, geometry, and Renaissance ideals of proportional harmony."
  },
  {
    year: 1491,
    title: "Granada Agrees to Surrender",
    description: "Boabdil signs Granada’s surrender terms, promising Muslims religious and legal protections before the city’s 1492 handover."
  },
  {
    year: 1492,
    title: "Granada Falls",
    description: "Boabdil surrenders Granada to Ferdinand and Isabella, ending the last Muslim-ruled state in Iberia."
  },
  {
    year: 1492,
    title: "Columbus Reaches the Caribbean",
    description: "After Granada, Spain sponsors Columbus, who reaches the Bahamas, Cuba, and Hispaniola with the Niña, Pinta, and Santa María."
  },
  {
    year: 1493,
    title: "Spanish Colonization Begins",
    description: "Columbus returns with captured Taínos, then leads seventeen ships establishing permanent Spanish colonization on Hispaniola."
  },
  {
    year: 1494,
    title: "Treaty of Tordesillas",
    description: "Spain and Portugal divide overseas claims along a meridian 370 leagues west of the Cape Verde Islands, assigning lands west to Castile and east to Portugal."
  },
  {
    year: 1495,
    title: "Syphilis Epidemic Begins",
    description: "A devastating syphilis epidemic erupts during the Italian Wars, becoming Europe’s first clearly documented outbreak."
  },
  {
    year: 1496,
    title: "Cabot Authorized to Explore",
    description: "Henry VII authorizes John Cabot to explore and claim Atlantic lands, preparing England’s 1497 North American voyage."
  },
  {
    year: 1497,
    title: "Cabot Reaches North America",
    description: "John Cabot reaches North America under Henry VII’s authority, supporting England’s later territorial claims across the Atlantic."
  },
  {
    year: 1498,
    title: "Da Gama Reaches India",
    description: "Vasco da Gama reaches Calicut after rounding Africa, opening a direct European–Asian maritime trade route."
  },
  {
    year: 1498,
    title: "The Last Supper Completed",
    description: "Leonardo completes The Last Supper in Milan, creating a Renaissance masterpiece that begins deteriorating almost immediately."
  },
  {
    year: 1499,
    title: "Swiss Win Swabian War",
    description: "Swiss forces defeat Maximilian at Dornach; the Treaty of Basel grants exemption from imperial courts and taxes."
  },
  {
    year: 1499,
    title: "Vespucci Explores Venezuela",
    description: "Alonso de Ojeda and Amerigo Vespucci explore South America’s northern coast, including Venezuela and Lake Maracaibo."
  },
  {
    year: 1500,
    title: "Cabral Reaches Brazil",
    description: "Pedro Álvares Cabral reaches present-day Brazil and claims its coast for Portugal."
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
    title: "Ponce de León Receives Florida Commission",
    description: "After his 1513 voyage, the Spanish Crown authorises Juan Ponce de León to establish settlements in Florida and Bimini."
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
    title: "Clement VII Suspends Henry VIII’s Excommunication",
    description: "Clement VII declares Henry’s marriage to Anne Boleyn invalid and suspends the excommunication sentence. Paul III publishes the bull of excommunication in 1538."
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
    description: "Portugal establishes a government-general for Brazil and orders a fortified settlement at the Bay of All Saints to serve as its seat."
  },
  {
    year: 1549,
    title: "Salvador Becomes Brazil’s First Capital",
    description: "Portugal appoints Tomé de Sousa as Brazil’s first governor-general. He founds Salvador on the Bay of All Saints as the seat of colonial government."
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
    description: "Portuguese merchants establish a lasting trading settlement at Macau on China’s southern coast under Ming authority."
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
    title: "Istanbul’s Blue Mosque Formally Inaugurated",
    description: "Sultan Ahmed I’s six-minaret mosque is formally inaugurated in Istanbul on June 9, after opening for worship in 1616."
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
    title: "Spanish Forces Retake Santa Fe",
    description: "Diego de Vargas returns with settlers and soldiers. After Pueblo defenders surrender, Spanish forces execute captured warriors and force their families into servitude."
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
