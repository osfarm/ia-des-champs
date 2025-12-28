export interface GlossaryTerm {
  id: string;
  page: number;
  index: number;
  mot: string;
  definition: string;
}

export const glossaryTerms: GlossaryTerm[] = [
  { id: "abonnement", page: 11, index: 1, mot: "Abonnement", definition: "Contrat par lequel un client paie régulièrement pour accéder à un service ou produit, comme un logiciel ou une plateforme numérique." },
  { id: "acces-a-internet", page: 11, index: 2, mot: "Accès à Internet", definition: "Possibilité pour un utilisateur ou un appareil de se connecter au réseau mondial qu'est Internet." },
  { id: "acteur-du-changement", page: 11, index: 3, mot: "Acteur du changement", definition: "Personne, organisation ou entité qui initie, soutient ou participe activement à une transformation." },
  { id: "administration-publique", page: 11, index: 4, mot: "Administration publique", definition: "Ensemble des services et organismes chargés de la gestion des affaires publiques et de l'application des décisions gouvernementales." },
  { id: "affinage-de-modele-fine-tuning", page: 11, index: 5, mot: "Affinage de modèle (Fine-tuning)", definition: "Processus d'ajustement d'un modèle d'intelligence artificielle pré-entraîné sur un ensemble de données spécifiques pour améliorer ses performances sur une tâche particulière." },
  { id: "agent-ia", page: 11, index: 6, mot: "Agent IA", definition: "Entité logicielle autonome capable d'interagir avec son environnement, de prendre des décisions et d'exécuter des actions sans intervention humaine directe." },
  { id: "agroecologie", page: 11, index: 7, mot: "Agroécologie", definition: "Approche agricole qui intègre les principes écologiques dans la conception et la gestion des systèmes agricoles, visant à les rendre plus durables et résilients." },
  { id: "agroequipement", page: 12, index: 8, mot: "Agroéquipement", definition: "Ensemble des machines, outils et équipements utilisés dans les exploitations agricoles pour les travaux de culture, d'élevage et de transformation." },
  { id: "agroforesterie", page: 12, index: 9, mot: "Agroforesterie", definition: "Système de production agricole qui associe des arbres ou des arbustes à des cultures et/ou à de l'élevage sur une même parcelle." },
  { id: "algorithme", page: 12, index: 10, mot: "Algorithme", definition: "Suite finie et ordonnée d'opérations ou d'instructions permettant de résoudre un problème ou d'effectuer une tâche." },
  { id: "algorithme-de-classification", page: 12, index: 11, mot: "Algorithme de classification", definition: "Algorithme d'apprentissage automatique qui catégorise des données en différentes classes ou catégories prédéfinies." },
  { id: "algorithme-de-regression", page: 12, index: 12, mot: "Algorithme de régression", definition: "Algorithme d'apprentissage automatique utilisé pour prédire une valeur numérique continue en fonction de variables d'entrée." },
  { id: "alimentation-en-eau", page: 12, index: 13, mot: "Alimentation en eau", definition: "Ensemble des systèmes et processus permettant d'approvisionner en eau une exploitation agricole ou un territoire." },
  { id: "alliance-interoperabilite-ia-agroequipement", page: 12, index: 14, mot: "Alliance interopérabilité IA agroéquipement", definition: "Consortium ou groupement visant à établir des standards communs pour permettre aux équipements agricoles de différentes marques de communiquer et d'échanger des données." },
  { id: "amelioration-genetique", page: 12, index: 15, mot: "Amélioration génétique", definition: "Ensemble des techniques visant à modifier le patrimoine génétique des plantes ou des animaux pour améliorer leurs caractéristiques." },
  { id: "analyse-de-donnees", page: 13, index: 16, mot: "Analyse de données", definition: "Processus d'inspection, de nettoyage et de modélisation des données dans le but d'en extraire des informations utiles et d'appuyer la prise de décision." },
  { id: "analyse-des-sols", page: 13, index: 17, mot: "Analyse des sols", definition: "Ensemble des techniques permettant d'évaluer les propriétés physiques, chimiques et biologiques d'un sol agricole." },
  { id: "analyse-predictive", page: 13, index: 18, mot: "Analyse prédictive", definition: "Utilisation de données historiques, d'algorithmes statistiques et de techniques d'apprentissage automatique pour identifier la probabilité de résultats futurs." },
  { id: "annotation-de-donnees", page: 13, index: 19, mot: "Annotation de données", definition: "Processus d'ajout d'informations (étiquettes, tags) à des données brutes pour permettre aux algorithmes d'apprentissage automatique de les comprendre et d'apprendre à partir d'elles." },
  { id: "anthropocene", page: 13, index: 20, mot: "Anthropocène", definition: "Époque géologique proposée caractérisée par l'impact significatif des activités humaines sur la géologie et les écosystèmes de la Terre." },
  { id: "anthropomorphisme", page: 13, index: 21, mot: "Anthropomorphisme", definition: "Tendance à attribuer des caractéristiques humaines (émotions, intentions, comportements) à des entités non humaines, y compris les systèmes d'IA." },
  { id: "api-interface-de-programmation", page: 14, index: 22, mot: "API (Interface de programmation)", definition: "Ensemble de protocoles et d'outils permettant à différents logiciels de communiquer entre eux." },
  { id: "apprentissage-automatique", page: 14, index: 23, mot: "Apprentissage automatique", definition: "Branche de l'intelligence artificielle qui permet aux machines d'apprendre à partir de données sans être explicitement programmées." },
  { id: "apprentissage-non-supervise", page: 14, index: 24, mot: "Apprentissage non supervisé", definition: "Méthode d'apprentissage automatique où l'algorithme apprend à partir de données non étiquetées, cherchant à découvrir des structures cachées." },
  { id: "apprentissage-par-renforcement", page: 14, index: 25, mot: "Apprentissage par renforcement", definition: "Type d'apprentissage automatique où un agent apprend à prendre des décisions en interagissant avec un environnement et en recevant des récompenses ou pénalités." },
  { id: "apprentissage-profond", page: 14, index: 26, mot: "Apprentissage profond", definition: "Sous-domaine de l'apprentissage automatique utilisant des réseaux de neurones à plusieurs couches pour modéliser des abstractions de haut niveau dans les données." },
  { id: "apprentissage-supervise", page: 14, index: 27, mot: "Apprentissage supervisé", definition: "Méthode d'apprentissage automatique où l'algorithme apprend à partir de données étiquetées, associant des entrées à des sorties connues." },
  { id: "arbre-de-decision", page: 15, index: 28, mot: "Arbre de décision", definition: "Modèle d'apprentissage automatique utilisant une structure arborescente pour représenter des décisions et leurs conséquences possibles." },
  { id: "architecture-de-modele", page: 15, index: 29, mot: "Architecture de modèle", definition: "Structure et organisation des composants d'un modèle d'intelligence artificielle, définissant comment les données sont traitées." },
  { id: "assistant-virtuel", page: 15, index: 30, mot: "Assistant virtuel", definition: "Application logicielle utilisant l'IA pour comprendre et répondre aux demandes des utilisateurs en langage naturel." },
  { id: "attention-mecanisme-d", page: 15, index: 31, mot: "Attention (Mécanisme d')", definition: "Technique en apprentissage profond permettant à un modèle de se concentrer sur les parties les plus pertinentes des données d'entrée lors du traitement." },
  { id: "auto-encodeur", page: 15, index: 32, mot: "Auto-encodeur", definition: "Type de réseau de neurones qui apprend à compresser des données puis à les reconstruire, utilisé notamment pour la réduction de dimensionnalité." },
  { id: "automatisation", page: 15, index: 33, mot: "Automatisation", definition: "Utilisation de technologies pour exécuter des tâches avec une intervention humaine minimale ou nulle." },
  { id: "bande-passante", page: 16, index: 34, mot: "Bande passante", definition: "Capacité maximale de transmission de données d'un réseau de communication, généralement mesurée en bits par seconde." },
  { id: "base-de-donnees", page: 16, index: 35, mot: "Base de données", definition: "Système organisé pour stocker, gérer et récupérer des informations de manière efficace." },
  { id: "benchmark", page: 16, index: 36, mot: "Benchmark", definition: "Test standardisé utilisé pour évaluer et comparer les performances de systèmes, algorithmes ou modèles d'IA." },
  { id: "biais-algorithmique", page: 16, index: 37, mot: "Biais algorithmique", definition: "Erreur systématique dans les résultats d'un algorithme due à des préjugés dans les données d'entraînement ou dans la conception de l'algorithme." },
  { id: "bien-commun", page: 16, index: 38, mot: "Bien commun", definition: "Ressource, service ou valeur partagée par une communauté et qui bénéficie à tous ses membres." },
  { id: "bien-etre-animal", page: 16, index: 39, mot: "Bien-être animal", definition: "État physique et mental d'un animal par rapport aux conditions dans lesquelles il vit et meurt." },
  { id: "big-data", page: 17, index: 40, mot: "Big data", definition: "Ensemble de données massives, variées et générées à grande vitesse, nécessitant des technologies spécifiques pour être collectées, stockées et analysées." },
  { id: "biodiversite", page: 17, index: 41, mot: "Biodiversité", definition: "Diversité de toutes les formes de vie sur Terre, incluant les espèces animales, végétales, les écosystèmes et les ressources génétiques." },
  { id: "blockchain", page: 17, index: 42, mot: "Blockchain", definition: "Technologie de stockage et de transmission d'informations transparente, sécurisée et fonctionnant sans organe central de contrôle." },
  { id: "boite-noire", page: 17, index: 43, mot: "Boîte noire", definition: "Système dont le fonctionnement interne n'est pas visible ou compréhensible par l'utilisateur, qui n'observe que les entrées et les sorties." },
  { id: "bot", page: 17, index: 44, mot: "Bot", definition: "Programme informatique automatisé capable d'exécuter des tâches répétitives, souvent utilisé pour interagir avec des utilisateurs ou d'autres systèmes." },
  { id: "calibration", page: 17, index: 45, mot: "Calibration", definition: "Processus d'ajustement d'un système, capteur ou modèle pour garantir la précision et la fiabilité de ses mesures ou prédictions." },
  { id: "capacite-de-stockage", page: 18, index: 46, mot: "Capacité de stockage", definition: "Volume de données qu'un système ou un dispositif peut conserver, généralement mesuré en octets (Ko, Mo, Go, To)." },
  { id: "capteur", page: 18, index: 47, mot: "Capteur", definition: "Dispositif qui détecte et mesure des grandeurs physiques ou chimiques de l'environnement et les convertit en signaux exploitables." },
  { id: "cartographie-de-precision", page: 18, index: 48, mot: "Cartographie de précision", definition: "Technique de création de cartes détaillées utilisant des technologies avancées (GPS, drones, satellites) pour représenter avec exactitude un territoire." },
  { id: "centre-de-donnees", page: 18, index: 49, mot: "Centre de données", definition: "Infrastructure physique regroupant des équipements informatiques (serveurs, stockage, réseaux) pour le traitement et le stockage de données à grande échelle." },
  { id: "chaine-de-valeur", page: 18, index: 50, mot: "Chaîne de valeur", definition: "Ensemble des activités interconnectées qu'une entreprise ou un secteur réalise pour créer de la valeur, de la matière première au produit final." },
  { id: "changement-climatique", page: 18, index: 51, mot: "Changement climatique", definition: "Modification durable du climat à l'échelle mondiale ou régionale, principalement causée par les activités humaines émettant des gaz à effet de serre." },
  { id: "chatbot", page: 19, index: 52, mot: "Chatbot", definition: "Programme informatique conçu pour simuler une conversation humaine, généralement utilisé pour le service client ou l'assistance." },
  { id: "circuit-court", page: 19, index: 53, mot: "Circuit court", definition: "Mode de commercialisation des produits agricoles avec un nombre limité d'intermédiaires entre le producteur et le consommateur." },
  { id: "classification-dimage", page: 19, index: 54, mot: "Classification d'image", definition: "Tâche d'apprentissage automatique consistant à attribuer une ou plusieurs étiquettes (catégories) à une image." },
  { id: "cloud-computing", page: 19, index: 55, mot: "Cloud computing", definition: "Modèle informatique permettant d'accéder à des ressources (serveurs, stockage, applications) via Internet, à la demande et en paiement à l'usage." },
  { id: "clustering", page: 19, index: 56, mot: "Clustering", definition: "Technique d'apprentissage non supervisé qui regroupe des données similaires en ensembles (clusters) sans étiquettes préalables." },
  { id: "cobotique", page: 19, index: 57, mot: "Cobotique", definition: "Discipline combinant la robotique et l'interaction homme-machine, où robots et humains collaborent dans un espace de travail partagé." },
  { id: "code-source", page: 20, index: 58, mot: "Code source", definition: "Ensemble d'instructions écrites dans un langage de programmation, constituant la base d'un logiciel avant sa compilation ou interprétation." },
  { id: "competences-numeriques", page: 20, index: 59, mot: "Compétences numériques", definition: "Ensemble des capacités permettant d'utiliser efficacement les technologies numériques, d'accéder à l'information et de communiquer en ligne." },
  { id: "complexite-computationnelle", page: 20, index: 60, mot: "Complexité computationnelle", definition: "Mesure des ressources (temps, mémoire) nécessaires pour exécuter un algorithme en fonction de la taille des données d'entrée." },
  { id: "connectivite", page: 20, index: 61, mot: "Connectivité", definition: "Capacité à établir des connexions et à communiquer entre différents appareils, systèmes ou réseaux." },
  { id: "conseil-strategique", page: 20, index: 62, mot: "Conseil stratégique", definition: "Accompagnement professionnel visant à aider une organisation à définir et atteindre ses objectifs à long terme." },
  { id: "consommation-energetique", page: 20, index: 63, mot: "Consommation énergétique", definition: "Quantité d'énergie utilisée par un système, appareil ou processus, généralement mesurée en watts ou kilowattheures." },
  { id: "couche-neuronale", page: 21, index: 64, mot: "Couche neuronale", definition: "Niveau de traitement dans un réseau de neurones artificiels, composé de plusieurs neurones interconnectés." },
  { id: "couverture-reseau", page: 21, index: 65, mot: "Couverture réseau", definition: "Étendue géographique où un réseau de communication (mobile, Internet) est disponible et fonctionnel." },
  { id: "creativite-artificielle", page: 21, index: 66, mot: "Créativité artificielle", definition: "Capacité de systèmes d'IA à générer des œuvres originales (art, musique, texte) imitant ou inspirant la créativité humaine." },
  { id: "crise-ecologique", page: 21, index: 67, mot: "Crise écologique", definition: "Situation de dégradation majeure des écosystèmes et de la biodiversité, menaçant l'équilibre environnemental et les conditions de vie sur Terre." },
  { id: "culture-numerique", page: 21, index: 68, mot: "Culture numérique", definition: "Ensemble des pratiques, valeurs et connaissances liées à l'utilisation des technologies numériques dans la société." },
  { id: "cyberattaque", page: 21, index: 69, mot: "Cyberattaque", definition: "Action malveillante visant à compromettre, endommager ou accéder de manière non autorisée à des systèmes informatiques." },
  { id: "cybersecurite", page: 22, index: 70, mot: "Cybersécurité", definition: "Ensemble des pratiques, technologies et processus visant à protéger les systèmes informatiques contre les menaces numériques." },
  { id: "cycle-de-vie", page: 22, index: 71, mot: "Cycle de vie", definition: "Ensemble des étapes par lesquelles passe un produit, système ou organisme, de sa création à sa fin de vie." },
  { id: "data-scientist", page: 22, index: 72, mot: "Data scientist", definition: "Professionnel spécialisé dans l'analyse et l'interprétation de données complexes pour en extraire des informations utiles à la prise de décision." },
  { id: "datalab", page: 22, index: 73, mot: "Datalab", definition: "Espace ou équipe dédiés à l'exploration, l'analyse et la valorisation des données au sein d'une organisation." },
  { id: "decarbonation", page: 22, index: 74, mot: "Décarbonation", definition: "Processus de réduction des émissions de dioxyde de carbone dans l'atmosphère par la transformation des modes de production et de consommation." },
  { id: "decision-algorithmique", page: 22, index: 75, mot: "Décision algorithmique", definition: "Décision prise ou assistée par un algorithme, souvent dans des processus automatisés ou semi-automatisés." },
  { id: "decodeur", page: 23, index: 76, mot: "Décodeur", definition: "Composant d'un modèle d'IA (notamment dans les transformers) qui génère une sortie à partir d'une représentation interne encodée." },
  { id: "deep-learning", page: 23, index: 77, mot: "Deep learning", definition: "Voir \"Apprentissage profond\". Technique d'apprentissage automatique utilisant des réseaux de neurones à plusieurs couches." },
  { id: "democratisation-de-lia", page: 23, index: 78, mot: "Démocratisation de l'IA", definition: "Mouvement visant à rendre l'intelligence artificielle accessible à un plus grand nombre d'utilisateurs et d'organisations." },
  { id: "detection-anomalies", page: 23, index: 79, mot: "Détection anomalies", definition: "Identification de données ou comportements qui s'écartent significativement de la norme, souvent utilisée pour la sécurité ou la maintenance." },
  { id: "detection-dobjet", page: 23, index: 80, mot: "Détection d'objet", definition: "Tâche de vision par ordinateur consistant à localiser et identifier des objets spécifiques dans une image ou une vidéo." },
  { id: "developpement-durable", page: 23, index: 81, mot: "Développement durable", definition: "Mode de développement répondant aux besoins présents sans compromettre la capacité des générations futures à répondre aux leurs." },
  { id: "diagnostic-agricole", page: 24, index: 82, mot: "Diagnostic agricole", definition: "Évaluation systématique de l'état d'une exploitation agricole ou d'une parcelle pour identifier les problèmes et optimiser les pratiques." },
  { id: "diffusion-de-linnovation", page: 24, index: 83, mot: "Diffusion de l'innovation", definition: "Processus par lequel une innovation se propage au sein d'une population ou d'un marché au fil du temps." },
  { id: "dispositif-connecte", page: 24, index: 84, mot: "Dispositif connecté", definition: "Appareil équipé de capteurs et d'une connexion réseau permettant de collecter et échanger des données." },
  { id: "diversite-culturale", page: 24, index: 85, mot: "Diversité culturale", definition: "Variété des espèces et variétés cultivées sur une exploitation ou un territoire, contribuant à la résilience des systèmes agricoles." },
  { id: "donnee-dentree", page: 24, index: 86, mot: "Donnée d'entrée", definition: "Information fournie à un système ou algorithme pour être traitée et produire un résultat." },
  { id: "donnee-de-sortie", page: 24, index: 87, mot: "Donnée de sortie", definition: "Résultat produit par un système ou algorithme après traitement des données d'entrée." },
  { id: "donnees-satellitaires", page: 25, index: 88, mot: "Données satellitaires", definition: "Informations collectées par des satellites en orbite, utilisées notamment pour l'observation de la Terre et l'agriculture de précision." },
  { id: "donnees-structurees", page: 25, index: 89, mot: "Données structurées", definition: "Données organisées selon un schéma prédéfini, facilitant leur stockage, recherche et analyse (ex: bases de données relationnelles)." },
  { id: "drone", page: 25, index: 90, mot: "Drone", definition: "Aéronef sans pilote à bord, commandé à distance ou de manière autonome, utilisé pour diverses applications dont l'agriculture." },
  { id: "droit-a-lerreur", page: 25, index: 91, mot: "Droit à l'erreur", definition: "Principe permettant aux individus ou organisations de faire des erreurs sans être immédiatement sanctionnés, favorisant l'apprentissage et l'innovation." },
  { id: "droits-numeriques", page: 25, index: 92, mot: "Droits numériques", definition: "Ensemble des droits fondamentaux appliqués à l'espace numérique, incluant la vie privée, la liberté d'expression et l'accès à l'information." },
  { id: "ecologie-des-donnees", page: 25, index: 93, mot: "Écologie des données", definition: "Approche considérant les données comme un écosystème, étudiant leurs interactions, leur cycle de vie et leur impact environnemental." },
  { id: "economie-circulaire", page: 26, index: 94, mot: "Économie circulaire", definition: "Modèle économique visant à réduire le gaspillage en réutilisant, réparant et recyclant les ressources le plus longtemps possible." },
  { id: "economie-de-la-connaissance", page: 26, index: 95, mot: "Économie de la connaissance", definition: "Système économique où la création, diffusion et utilisation de la connaissance sont les principaux moteurs de croissance." },
  { id: "ecosysteme-numerique", page: 26, index: 96, mot: "Écosystème numérique", definition: "Ensemble interconnecté d'acteurs, technologies et pratiques évoluant dans l'environnement digital." },
  { id: "education-numerique", page: 26, index: 97, mot: "Éducation numérique", definition: "Enseignement et apprentissage utilisant les technologies numériques, incluant la formation aux compétences digitales." },
  { id: "effet-rebond", page: 26, index: 98, mot: "Effet rebond", definition: "Phénomène où les gains d'efficacité obtenus par une technologie sont compensés par une augmentation de l'utilisation." },
  { id: "elevage-de-precision", page: 26, index: 99, mot: "Élevage de précision", definition: "Application de technologies (capteurs, IA) pour surveiller et optimiser la santé, le bien-être et la productivité des animaux d'élevage." },
  { id: "embedding", page: 27, index: 100, mot: "Embedding", definition: "Représentation numérique de données (mots, images) sous forme de vecteurs dans un espace de dimension réduite." },
  { id: "empreinte-carbone", page: 27, index: 101, mot: "Empreinte carbone", definition: "Quantité totale de gaz à effet de serre émise directement ou indirectement par une activité, un produit ou une organisation." },
  { id: "empreinte-ecologique", page: 27, index: 102, mot: "Empreinte écologique", definition: "Mesure de la surface terrestre nécessaire pour produire les ressources consommées et absorber les déchets générés par une population." },
  { id: "encodeur", page: 27, index: 103, mot: "Encodeur", definition: "Composant d'un modèle d'IA qui transforme les données d'entrée en une représentation interne utilisable par le système." },
  { id: "energie-renouvelable", page: 27, index: 104, mot: "Énergie renouvelable", definition: "Source d'énergie naturellement reconstituée à l'échelle humaine (solaire, éolien, hydraulique, biomasse)." },
  { id: "enjeu-ethique", page: 27, index: 105, mot: "Enjeu éthique", definition: "Question morale soulevée par une technologie ou pratique, concernant son impact sur les individus, la société ou l'environnement." },
  { id: "enrichissement-de-donnees", page: 28, index: 106, mot: "Enrichissement de données", definition: "Processus d'amélioration de la qualité des données en ajoutant des informations supplémentaires provenant de sources externes." },
  { id: "ensemble-de-donnees", page: 28, index: 107, mot: "Ensemble de données", definition: "Collection structurée d'informations utilisées pour l'entraînement, la validation ou le test de modèles d'apprentissage automatique." },
  { id: "entrainement-de-modele", page: 28, index: 108, mot: "Entraînement de modèle", definition: "Processus par lequel un algorithme d'apprentissage automatique ajuste ses paramètres à partir de données pour améliorer ses performances." },
  { id: "entrepreneuriat-agricole", page: 28, index: 109, mot: "Entrepreneuriat agricole", definition: "Création et développement d'entreprises dans le secteur agricole, souvent associé à l'innovation et à la prise de risque." },
  { id: "environnement-de-developpement", page: 28, index: 110, mot: "Environnement de développement", definition: "Ensemble des outils, logiciels et configurations utilisés par les développeurs pour créer et tester des applications." },
  { id: "epandage-de-precision", page: 28, index: 111, mot: "Épandage de précision", definition: "Technique d'application d'intrants agricoles (engrais, pesticides) à doses variables selon les besoins spécifiques de chaque zone de la parcelle." },
  { id: "ergonomie", page: 29, index: 112, mot: "Ergonomie", definition: "Étude de l'adaptation des outils, machines et environnements de travail aux capacités et limites humaines." },
  { id: "ethique-de-lia", page: 29, index: 113, mot: "Éthique de l'IA", definition: "Réflexion et principes moraux encadrant le développement et l'utilisation de l'intelligence artificielle de manière responsable." },
  { id: "evaluation-de-modele", page: 29, index: 114, mot: "Évaluation de modèle", definition: "Processus de mesure des performances d'un modèle d'apprentissage automatique selon des critères définis (précision, rappel, etc.)." },
  { id: "experience-utilisateur", page: 29, index: 115, mot: "Expérience utilisateur", definition: "Ensemble des perceptions et réactions d'une personne lors de l'utilisation d'un produit, système ou service numérique." },
  { id: "explicabilite", page: 29, index: 116, mot: "Explicabilité", definition: "Capacité d'un système d'IA à fournir des explications compréhensibles sur ses décisions et prédictions." },
  { id: "exploitation-agricole", page: 29, index: 117, mot: "Exploitation agricole", definition: "Unité économique de production agricole comprenant les terres, bâtiments, équipements et ressources humaines." },
  { id: "exploration-de-donnees", page: 30, index: 118, mot: "Exploration de données", definition: "Processus d'analyse préliminaire des données pour découvrir des motifs, anomalies et relations significatives." },
  { id: "extraction-de-caracteristiques", page: 30, index: 119, mot: "Extraction de caractéristiques", definition: "Technique de transformation des données brutes en un ensemble de caractéristiques pertinentes pour l'apprentissage automatique." },
  { id: "fabrication-numerique", page: 30, index: 120, mot: "Fabrication numérique", definition: "Processus de production utilisant des technologies numériques (impression 3D, découpe laser) pour créer des objets physiques." },
  { id: "feedback", page: 30, index: 121, mot: "Feedback", definition: "Retour d'information sur les résultats d'une action, utilisé pour ajuster et améliorer les performances d'un système." },
  { id: "ferme-connectee", page: 30, index: 122, mot: "Ferme connectée", definition: "Exploitation agricole équipée de technologies numériques (capteurs, IoT, logiciels) pour collecter et analyser des données en temps réel." },
  { id: "filiere-agricole", page: 30, index: 123, mot: "Filière agricole", definition: "Ensemble des acteurs et activités impliqués dans la production, transformation et distribution d'un type de produit agricole." },
  { id: "formation-continue", page: 31, index: 124, mot: "Formation continue", definition: "Processus d'apprentissage tout au long de la vie professionnelle pour actualiser et développer ses compétences." },
  { id: "foret-aleatoire", page: 31, index: 125, mot: "Forêt aléatoire", definition: "Algorithme d'apprentissage automatique utilisant un ensemble d'arbres de décision pour améliorer la précision des prédictions." },
  { id: "fraude-detection-de", page: 31, index: 126, mot: "Fraude (Détection de)", definition: "Utilisation d'algorithmes pour identifier des comportements ou transactions suspects dans de grands ensembles de données." },
  { id: "frugalite-numerique", page: 31, index: 127, mot: "Frugalité numérique", definition: "Approche visant à réduire l'impact environnemental du numérique par une utilisation sobre et efficace des technologies." },
  { id: "gan-reseau-generatif-antagoniste", page: 31, index: 128, mot: "GAN (Réseau génératif antagoniste)", definition: "Architecture de deep learning composée de deux réseaux en compétition, utilisée pour générer des données synthétiques réalistes." },
  { id: "generalisation", page: 31, index: 129, mot: "Généralisation", definition: "Capacité d'un modèle d'apprentissage automatique à performer correctement sur des données qu'il n'a pas vues lors de l'entraînement." },
  { id: "generation-de-texte", page: 32, index: 130, mot: "Génération de texte", definition: "Production automatique de texte par un système d'IA, souvent basée sur des modèles de langage." },
  { id: "genomique", page: 32, index: 131, mot: "Génomique", definition: "Étude de l'ensemble des gènes d'un organisme, de leur structure, fonction et évolution." },
  { id: "geolocalisation", page: 32, index: 132, mot: "Géolocalisation", definition: "Détermination de la position géographique d'un objet ou d'une personne à l'aide de technologies comme le GPS." },
  { id: "gestion-de-leau", page: 32, index: 133, mot: "Gestion de l'eau", definition: "Ensemble des pratiques visant à optimiser l'utilisation des ressources en eau dans l'agriculture." },
  { id: "gestion-des-donnees", page: 32, index: 134, mot: "Gestion des données", definition: "Ensemble des processus de collecte, stockage, organisation et maintenance des données tout au long de leur cycle de vie." },
  { id: "gestion-des-risques", page: 32, index: 135, mot: "Gestion des risques", definition: "Processus d'identification, d'évaluation et de traitement des risques potentiels affectant une activité ou une organisation." },
  { id: "gouvernance-des-donnees", page: 33, index: 136, mot: "Gouvernance des données", definition: "Cadre définissant les politiques, procédures et responsabilités pour la gestion des données au sein d'une organisation." },
  { id: "gpu-processeur-graphique", page: 33, index: 137, mot: "GPU (Processeur graphique)", definition: "Processeur spécialisé dans le calcul parallèle, largement utilisé pour l'entraînement de modèles d'apprentissage profond." },
  { id: "gradient", page: 33, index: 138, mot: "Gradient", definition: "Vecteur indiquant la direction et l'amplitude de la plus grande augmentation d'une fonction, utilisé pour optimiser les modèles d'IA." },
  { id: "green-it", page: 33, index: 139, mot: "Green IT", definition: "Pratiques visant à réduire l'impact environnemental des technologies de l'information par une conception et utilisation plus durables." },
  { id: "hallucination", page: 33, index: 140, mot: "Hallucination", definition: "Génération par un modèle d'IA d'informations incorrectes ou inventées présentées comme vraies." },
  { id: "hardware", page: 33, index: 141, mot: "Hardware", definition: "Composants physiques d'un système informatique (processeurs, mémoire, capteurs) par opposition aux logiciels." },
  { id: "haute-valeur-environnementale", page: 34, index: 142, mot: "Haute valeur environnementale", definition: "Certification française reconnaissant les exploitations agricoles respectant des pratiques favorables à l'environnement." },
  { id: "hybridation-homme-machine", page: 34, index: 143, mot: "Hybridation homme-machine", definition: "Collaboration entre humains et systèmes automatisés combinant les forces de chacun pour améliorer les performances." },
  { id: "hyperparametre", page: 34, index: 144, mot: "Hyperparamètre", definition: "Paramètre défini avant l'entraînement d'un modèle d'IA qui influence le processus d'apprentissage (ex: taux d'apprentissage)." },
  { id: "ia-de-confiance", page: 34, index: 145, mot: "IA de confiance", definition: "Intelligence artificielle conçue pour être fiable, transparente, équitable et respectueuse des droits fondamentaux." },
  { id: "ia-faible", page: 34, index: 146, mot: "IA faible", definition: "Système d'IA spécialisé dans une tâche spécifique, sans conscience ni compréhension générale." },
  { id: "ia-forte", page: 34, index: 147, mot: "IA forte", definition: "Concept théorique d'une IA dotée de capacités cognitives équivalentes ou supérieures à l'intelligence humaine générale." },
  { id: "ia-generative", page: 35, index: 148, mot: "IA générative", definition: "Système d'intelligence artificielle capable de créer de nouveaux contenus (texte, images, musique) à partir de modèles appris." },
  { id: "ia-responsable", page: 35, index: 149, mot: "IA responsable", definition: "Approche du développement de l'IA intégrant des considérations éthiques, sociales et environnementales." },
  { id: "identification-des-especes", page: 35, index: 150, mot: "Identification des espèces", definition: "Utilisation de technologies (IA, capteurs) pour reconnaître automatiquement les espèces animales ou végétales." },
  { id: "image-satellite", page: 35, index: 151, mot: "Image satellite", definition: "Photographie de la Terre prise depuis l'espace, utilisée pour l'observation et l'analyse des territoires." },
  { id: "imagerie-hyperspectrale", page: 35, index: 152, mot: "Imagerie hyperspectrale", definition: "Technique d'acquisition d'images dans de nombreuses bandes spectrales, permettant une analyse détaillée des caractéristiques des surfaces." },
  { id: "inclusion-numerique", page: 35, index: 153, mot: "Inclusion numérique", definition: "Processus visant à réduire la fracture numérique en permettant à tous d'accéder aux technologies et de les utiliser." },
  { id: "indicateur-de-performance", page: 36, index: 154, mot: "Indicateur de performance", definition: "Mesure quantifiable utilisée pour évaluer le succès d'une activité ou d'une stratégie par rapport à des objectifs définis." },
  { id: "inference", page: 36, index: 155, mot: "Inférence", definition: "Processus par lequel un modèle d'IA entraîné fait des prédictions ou prend des décisions sur de nouvelles données." },
  { id: "information-geographique", page: 36, index: 156, mot: "Information géographique", definition: "Données associées à une localisation spatiale, utilisées dans les systèmes d'information géographique (SIG)." },
  { id: "infrastructure-numerique", page: 36, index: 157, mot: "Infrastructure numérique", definition: "Ensemble des équipements, réseaux et systèmes permettant le fonctionnement des services numériques." },
  { id: "innovation-ouverte", page: 36, index: 158, mot: "Innovation ouverte", definition: "Modèle d'innovation utilisant des flux de connaissances internes et externes pour accélérer le développement de nouveaux produits." },
  { id: "intelligence-artificielle", page: 36, index: 159, mot: "Intelligence artificielle", definition: "Domaine de l'informatique visant à créer des systèmes capables de réaliser des tâches nécessitant habituellement l'intelligence humaine." },
  { id: "intelligence-collective", page: 37, index: 160, mot: "Intelligence collective", definition: "Capacité émergente d'un groupe à résoudre des problèmes complexes grâce à la collaboration et au partage de connaissances." },
  { id: "interface-homme-machine", page: 37, index: 161, mot: "Interface homme-machine", definition: "Point de contact entre un utilisateur humain et un système informatique, permettant l'interaction et l'échange d'informations." },
  { id: "internet-des-objets", page: 37, index: 162, mot: "Internet des objets", definition: "Réseau d'objets physiques connectés à Internet, équipés de capteurs et capables d'échanger des données." },
  { id: "interoperabilite", page: 37, index: 163, mot: "Interopérabilité", definition: "Capacité de différents systèmes, dispositifs ou applications à fonctionner ensemble et à échanger des informations." },
  { id: "interpretation-des-donnees", page: 37, index: 164, mot: "Interprétation des données", definition: "Processus d'analyse et de compréhension des données pour en extraire des significations et des conclusions." },
  { id: "intrant-agricole", page: 37, index: 165, mot: "Intrant agricole", definition: "Ensemble des produits et ressources utilisés dans la production agricole (semences, engrais, pesticides, eau, énergie)." },
  { id: "irrigation-intelligente", page: 38, index: 166, mot: "Irrigation intelligente", definition: "Système d'arrosage utilisant des capteurs et des algorithmes pour optimiser l'apport en eau selon les besoins réels des cultures." },
  { id: "jeu-de-donnees-benchmark", page: 38, index: 167, mot: "Jeu de données (benchmark)", definition: "Collection de données standardisée utilisée pour évaluer et comparer les performances de différents algorithmes ou modèles." },
  { id: "langage-naturel", page: 38, index: 168, mot: "Langage naturel", definition: "Langue utilisée par les humains pour communiquer (par opposition aux langages de programmation)." },
  { id: "latence", page: 38, index: 169, mot: "Latence", definition: "Délai entre l'envoi d'une requête et la réception de la réponse dans un système informatique ou un réseau." },
  { id: "lidar", page: 38, index: 170, mot: "LiDAR", definition: "Technologie de télédétection utilisant des impulsions laser pour mesurer les distances et créer des modèles 3D précis." },
  { id: "llm-grand-modele-de-langage", page: 38, index: 171, mot: "LLM (Grand modèle de langage)", definition: "Modèle d'intelligence artificielle entraîné sur d'immenses quantités de texte pour comprendre et générer du langage naturel." },
  { id: "logiciel-libre", page: 39, index: 172, mot: "Logiciel libre", definition: "Programme informatique dont le code source est ouvert et librement modifiable, utilisable et distribuable par tous." },
  { id: "machine-learning", page: 39, index: 173, mot: "Machine learning", definition: "Voir \"Apprentissage automatique\". Domaine de l'IA permettant aux ordinateurs d'apprendre à partir de données." },
  { id: "maintenance-predictive", page: 39, index: 174, mot: "Maintenance prédictive", definition: "Approche utilisant l'analyse de données et l'IA pour anticiper les pannes d'équipements avant qu'elles ne surviennent." },
  { id: "marketplace", page: 39, index: 175, mot: "Marketplace", definition: "Plateforme en ligne mettant en relation acheteurs et vendeurs pour la commercialisation de produits ou services." },
  { id: "matrice-de-confusion", page: 39, index: 176, mot: "Matrice de confusion", definition: "Tableau visualisant les performances d'un modèle de classification en comparant les prédictions aux valeurs réelles." },
  { id: "metadonnees", page: 39, index: 177, mot: "Métadonnées", definition: "Données fournissant des informations sur d'autres données (description, format, source, date de création, etc.)." },
  { id: "methode-agile", page: 40, index: 178, mot: "Méthode agile", definition: "Approche de gestion de projet favorisant la flexibilité, la collaboration et les livraisons itératives de produits." },
  { id: "metrique-devaluation", page: 40, index: 179, mot: "Métrique d'évaluation", definition: "Mesure quantitative utilisée pour évaluer la performance d'un modèle d'apprentissage automatique." },
  { id: "microcontroleur", page: 40, index: 180, mot: "Microcontrôleur", definition: "Circuit intégré programmable de petite taille utilisé pour contrôler des dispositifs électroniques et des capteurs." },
  { id: "modele-de-fondation", page: 40, index: 181, mot: "Modèle de fondation", definition: "Grand modèle d'IA pré-entraîné sur des données massives, pouvant être adapté à diverses tâches spécifiques." },
  { id: "modele-predictif", page: 40, index: 182, mot: "Modèle prédictif", definition: "Système statistique ou d'apprentissage automatique conçu pour prédire des résultats futurs à partir de données historiques." },
  { id: "modularite", page: 40, index: 183, mot: "Modularité", definition: "Conception d'un système en composants indépendants et interchangeables facilitant la maintenance et l'évolution." },
  { id: "monoculture", page: 41, index: 184, mot: "Monoculture", definition: "Pratique agricole consistant à cultiver une seule espèce végétale sur une grande surface, année après année." },
  { id: "moteur-de-recherche", page: 41, index: 185, mot: "Moteur de recherche", definition: "Système permettant de trouver des informations sur Internet ou dans une base de données à partir de mots-clés." },
  { id: "multimodalite", page: 41, index: 186, mot: "Multimodalité", definition: "Capacité d'un système d'IA à traiter et combiner plusieurs types de données (texte, image, audio, vidéo)." },
  { id: "ndvi-indice-de-vegetation", page: 41, index: 187, mot: "NDVI (Indice de végétation)", definition: "Mesure calculée à partir d'images satellites indiquant la vigueur et la santé de la végétation d'une zone." },
  { id: "neurone-artificiel", page: 41, index: 188, mot: "Neurone artificiel", definition: "Unité de base d'un réseau de neurones artificiels, inspirée du fonctionnement des neurones biologiques." },
  { id: "nlp-traitement-du-langage-naturel", page: 41, index: 189, mot: "NLP (Traitement du langage naturel)", definition: "Domaine de l'IA permettant aux ordinateurs de comprendre, interpréter et générer du langage humain." },
  { id: "normalisation", page: 42, index: 190, mot: "Normalisation", definition: "Transformation des données pour les ramener à une échelle commune, facilitant leur comparaison et leur traitement." },
  { id: "numerisation", page: 42, index: 191, mot: "Numérisation", definition: "Processus de conversion d'informations ou de processus analogiques en format numérique." },
  { id: "observation-de-la-terre", page: 42, index: 192, mot: "Observation de la Terre", definition: "Collecte d'informations sur la surface terrestre à l'aide de satellites, drones ou autres capteurs à distance." },
  { id: "open-data", page: 42, index: 193, mot: "Open data", definition: "Données librement accessibles, utilisables et redistribuables par tous, sans restrictions." },
  { id: "open-source", page: 42, index: 194, mot: "Open source", definition: "Modèle de développement logiciel où le code source est rendu public et peut être modifié par la communauté." },
  { id: "operateur-de-donnees", page: 42, index: 195, mot: "Opérateur de données", definition: "Entité qui collecte, traite et met à disposition des données pour le compte d'utilisateurs ou d'organisations." },
  { id: "optimisation", page: 43, index: 196, mot: "Optimisation", definition: "Processus de recherche de la meilleure solution parmi un ensemble de possibilités selon des critères définis." },
  { id: "parcelle-agricole", page: 43, index: 197, mot: "Parcelle agricole", definition: "Unité de terrain cultivée ou exploitée de manière homogène au sein d'une exploitation agricole." },
  { id: "parametres-dun-modele", page: 43, index: 198, mot: "Paramètres d'un modèle", definition: "Variables internes d'un modèle d'apprentissage automatique ajustées pendant l'entraînement." },
  { id: "partage-de-donnees", page: 43, index: 199, mot: "Partage de données", definition: "Mise à disposition de données entre différents acteurs ou systèmes, dans un cadre défini de gouvernance." },
  { id: "patrimoine-numerique", page: 43, index: 200, mot: "Patrimoine numérique", definition: "Ensemble des ressources numériques (données, logiciels, contenus) constituant un héritage collectif à préserver." },
  { id: "performance-environnementale", page: 43, index: 201, mot: "Performance environnementale", definition: "Résultats mesurables des activités d'une organisation en matière de protection de l'environnement." },
  { id: "phytosanitaire", page: 44, index: 202, mot: "Phytosanitaire", definition: "Relatif à la protection des végétaux contre les maladies, parasites et mauvaises herbes." },
  { id: "pilotage-de-lirrigation", page: 44, index: 203, mot: "Pilotage de l'irrigation", definition: "Gestion optimisée de l'apport en eau aux cultures basée sur des données et indicateurs agronomiques." },
  { id: "plateforme-numerique", page: 44, index: 204, mot: "Plateforme numérique", definition: "Infrastructure en ligne permettant l'interaction entre différents utilisateurs ou services numériques." },
  { id: "poids-dun-reseau", page: 44, index: 205, mot: "Poids d'un réseau", definition: "Valeurs numériques des connexions entre neurones d'un réseau de neurones, ajustées pendant l'entraînement." },
  { id: "precision", page: 44, index: 206, mot: "Précision", definition: "Mesure de la proportion de prédictions correctes parmi toutes les prédictions positives d'un modèle." },
  { id: "prediction", page: 44, index: 207, mot: "Prédiction", definition: "Estimation d'un résultat futur ou inconnu produite par un modèle d'apprentissage automatique." },
  { id: "preprocessing", page: 45, index: 208, mot: "Preprocessing", definition: "Étape de préparation des données brutes avant leur utilisation pour l'entraînement d'un modèle d'IA." },
  { id: "prise-de-decision", page: 45, index: 209, mot: "Prise de décision", definition: "Processus cognitif de sélection d'une action parmi plusieurs alternatives, pouvant être assisté par l'IA." },
  { id: "productivite", page: 45, index: 210, mot: "Productivité", definition: "Rapport entre la production obtenue et les ressources utilisées pour l'obtenir." },
  { id: "programme-informatique", page: 45, index: 211, mot: "Programme informatique", definition: "Ensemble d'instructions écrites pour être exécutées par un ordinateur afin d'accomplir une tâche." },
  { id: "prompt", page: 45, index: 212, mot: "Prompt", definition: "Instruction ou question donnée à un système d'IA générative pour orienter sa réponse ou sa création." },
  { id: "propriete-intellectuelle", page: 45, index: 213, mot: "Propriété intellectuelle", definition: "Ensemble des droits légaux protégeant les créations de l'esprit (inventions, œuvres, marques)." },
  { id: "protection-des-donnees", page: 46, index: 214, mot: "Protection des données", definition: "Ensemble des mesures juridiques et techniques visant à garantir la confidentialité et la sécurité des données personnelles." },
  { id: "prototype", page: 46, index: 215, mot: "Prototype", definition: "Version préliminaire d'un produit ou système utilisée pour tester et valider des concepts." },
  { id: "puissance-de-calcul", page: 46, index: 216, mot: "Puissance de calcul", definition: "Capacité d'un système informatique à traiter des opérations, généralement mesurée en opérations par seconde." },
  { id: "qualite-des-donnees", page: 46, index: 217, mot: "Qualité des données", definition: "Mesure de la fiabilité, complétude, cohérence et précision des données pour leur utilisation prévue." },
  { id: "quantification", page: 46, index: 218, mot: "Quantification", definition: "Processus de réduction de la précision des paramètres d'un modèle pour diminuer sa taille et accélérer son exécution." },
  { id: "rag-generation-augmentee", page: 46, index: 219, mot: "RAG (Génération augmentée)", definition: "Technique combinant récupération d'informations et génération de texte pour produire des réponses plus précises et contextualisées." },
  { id: "rappel", page: 47, index: 220, mot: "Rappel", definition: "Mesure de la proportion d'éléments pertinents correctement identifiés par un modèle parmi tous les éléments pertinents." },
  { id: "reconnaissance-de-formes", page: 47, index: 221, mot: "Reconnaissance de formes", definition: "Capacité d'un système à identifier et classifier des motifs ou structures dans des données (images, sons, etc.)." },
  { id: "reconnaissance-faciale", page: 47, index: 222, mot: "Reconnaissance faciale", definition: "Technologie d'identification ou de vérification de l'identité d'une personne à partir des caractéristiques de son visage." },
  { id: "reglementation", page: 47, index: 223, mot: "Réglementation", definition: "Ensemble des règles juridiques encadrant une activité ou un secteur, comme l'utilisation de l'IA." },
  { id: "regression-lineaire", page: 47, index: 224, mot: "Régression linéaire", definition: "Méthode statistique modélisant la relation entre une variable dépendante et une ou plusieurs variables indépendantes." },
  { id: "renforcement-positif", page: 47, index: 225, mot: "Renforcement positif", definition: "Mécanisme d'apprentissage où un comportement est encouragé par une récompense." },
  { id: "reseau-de-neurones", page: 48, index: 226, mot: "Réseau de neurones", definition: "Structure d'apprentissage automatique inspirée du cerveau humain, composée de couches de neurones artificiels interconnectés." },
  { id: "resilience", page: 48, index: 227, mot: "Résilience", definition: "Capacité d'un système à absorber les perturbations, à se réorganiser et à maintenir ses fonctions essentielles." },
  { id: "ressource-numerique", page: 48, index: 228, mot: "Ressource numérique", definition: "Tout élément numérique (logiciel, données, service) utilisable pour créer de la valeur ou accomplir une tâche." },
  { id: "robotique-agricole", page: 48, index: 229, mot: "Robotique agricole", definition: "Application de robots et systèmes automatisés aux travaux agricoles (désherbage, récolte, surveillance)." },
  { id: "rotation-des-cultures", page: 48, index: 230, mot: "Rotation des cultures", definition: "Pratique agricole alternant différentes cultures sur une même parcelle pour préserver la fertilité du sol." },
  { id: "score", page: 48, index: 231, mot: "Score", definition: "Valeur numérique attribuée par un modèle pour quantifier une probabilité, une pertinence ou une qualité." },
  { id: "securite-alimentaire", page: 49, index: 232, mot: "Sécurité alimentaire", definition: "Situation où tous les individus ont accès à une alimentation suffisante, saine et nutritive." },
  { id: "segmentation-dimage", page: 49, index: 233, mot: "Segmentation d'image", definition: "Technique de vision par ordinateur divisant une image en régions distinctes correspondant à différents objets ou zones." },
  { id: "semence", page: 49, index: 234, mot: "Semence", definition: "Graine ou partie de plante utilisée pour la reproduction et la culture de nouvelles plantes." },
  { id: "simulation", page: 49, index: 235, mot: "Simulation", definition: "Modélisation informatique reproduisant le comportement d'un système réel pour l'étudier ou le prédire." },
  { id: "sobriete-numerique", page: 49, index: 236, mot: "Sobriété numérique", definition: "Démarche visant à réduire la consommation de ressources numériques tout en maintenant les usages essentiels." },
  { id: "solution-logicielle", page: 49, index: 237, mot: "Solution logicielle", definition: "Ensemble d'applications et outils informatiques répondant à un besoin spécifique d'un utilisateur ou d'une organisation." },
  { id: "souverainete-alimentaire", page: 50, index: 238, mot: "Souveraineté alimentaire", definition: "Droit des peuples à définir leurs propres politiques agricoles et alimentaires." },
  { id: "souverainete-numerique", page: 50, index: 239, mot: "Souveraineté numérique", definition: "Capacité d'un État ou d'une organisation à maîtriser ses données, infrastructures et technologies numériques." },
  { id: "startup", page: 50, index: 240, mot: "Startup", definition: "Jeune entreprise innovante à fort potentiel de croissance, souvent dans le secteur technologique." },
  { id: "stockage-de-donnees", page: 50, index: 241, mot: "Stockage de données", definition: "Conservation de données numériques sur des supports physiques ou dans des infrastructures cloud." },
  { id: "surapprentissage", page: 50, index: 242, mot: "Surapprentissage", definition: "Phénomène où un modèle apprend trop précisément les données d'entraînement, perdant sa capacité de généralisation." },
  { id: "systeme-expert", page: 50, index: 243, mot: "Système expert", definition: "Programme informatique reproduisant les capacités de décision d'un expert humain dans un domaine spécifique." },
  { id: "taux-dapprentissage", page: 51, index: 244, mot: "Taux d'apprentissage", definition: "Hyperparamètre contrôlant l'amplitude des ajustements des poids d'un réseau de neurones pendant l'entraînement." },
  { id: "telecommunication", page: 51, index: 245, mot: "Télécommunication", definition: "Transmission d'informations à distance par des moyens électroniques (téléphone, Internet, satellite)." },
  { id: "teledetection", page: 51, index: 246, mot: "Télédétection", definition: "Ensemble des techniques permettant d'obtenir des informations sur un objet ou une zone sans contact direct." },
  { id: "test-de-turing", page: 51, index: 247, mot: "Test de Turing", definition: "Épreuve proposée par Alan Turing pour évaluer la capacité d'une machine à imiter l'intelligence humaine." },
  { id: "token", page: 51, index: 248, mot: "Token", definition: "Unité de base du texte (mot, sous-mot ou caractère) utilisée par les modèles de langage pour le traitement." },
  { id: "tracabilite", page: 51, index: 249, mot: "Traçabilité", definition: "Capacité à suivre et documenter l'historique, l'utilisation ou la localisation d'un produit ou d'une donnée." },
  { id: "traitement-des-donnees", page: 52, index: 250, mot: "Traitement des données", definition: "Ensemble des opérations effectuées sur des données (collecte, stockage, analyse, transformation) pour en extraire de la valeur." },
  { id: "transfert-dapprentissage", page: 52, index: 251, mot: "Transfert d'apprentissage", definition: "Technique utilisant un modèle pré-entraîné sur une tâche pour améliorer les performances sur une tâche différente mais liée." },
  { id: "transformation-digitale", page: 52, index: 252, mot: "Transformation digitale", definition: "Processus d'intégration des technologies numériques dans tous les aspects d'une organisation pour améliorer ses performances." },
  { id: "transformer", page: 52, index: 253, mot: "Transformer", definition: "Architecture de réseau de neurones utilisant des mécanismes d'attention, à la base des grands modèles de langage actuels." },
  { id: "transparence-algorithmique", page: 52, index: 254, mot: "Transparence algorithmique", definition: "Principe selon lequel le fonctionnement et les décisions d'un algorithme doivent être compréhensibles et explicables." },
  { id: "tri-automatique", page: 52, index: 255, mot: "Tri automatique", definition: "Utilisation de machines et d'IA pour séparer automatiquement des objets selon leurs caractéristiques." },
  { id: "utilisation-des-sols", page: 53, index: 256, mot: "Utilisation des sols", definition: "Façon dont un territoire est exploité (agriculture, urbanisation, forêt) et les changements qui y sont apportés." },
  { id: "validation-croisee", page: 53, index: 257, mot: "Validation croisée", definition: "Technique d'évaluation de modèles divisant les données en sous-ensembles pour tester la robustesse des résultats." },
  { id: "valorisation-des-donnees", page: 53, index: 258, mot: "Valorisation des données", definition: "Processus de création de valeur économique ou sociétale à partir de l'exploitation et l'analyse de données." },
  { id: "variabilite-intra-parcellaire", page: 53, index: 259, mot: "Variabilité intra-parcellaire", definition: "Différences de caractéristiques (sol, rendement, besoin en eau) au sein d'une même parcelle agricole." },
  { id: "veille-technologique", page: 53, index: 260, mot: "Veille technologique", definition: "Surveillance continue des évolutions techniques et scientifiques dans un domaine pour anticiper les innovations." },
  { id: "vision-par-ordinateur", page: 53, index: 261, mot: "Vision par ordinateur", definition: "Domaine de l'IA permettant aux ordinateurs d'interpréter et comprendre le contenu visuel d'images ou vidéos." },
  { id: "vulnerabilite", page: 54, index: 262, mot: "Vulnérabilité", definition: "Faille ou faiblesse d'un système pouvant être exploitée pour compromettre sa sécurité ou son fonctionnement." },
  { id: "zone-humide", page: 54, index: 263, mot: "Zone humide", definition: "Écosystème caractérisé par la présence d'eau (marais, tourbières), jouant un rôle crucial dans la biodiversité et le cycle de l'eau." }
];

// Fonction pour créer un slug à partir du mot
export function createSlug(mot: string): string {
  return mot
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

// Obtenir tous les termes groupés par première lettre
export function getTermsByLetter(): Record<string, GlossaryTerm[]> {
  const grouped: Record<string, GlossaryTerm[]> = {};
  
  glossaryTerms.forEach(term => {
    const firstLetter = term.mot.charAt(0).toUpperCase();
    if (!grouped[firstLetter]) {
      grouped[firstLetter] = [];
    }
    grouped[firstLetter].push(term);
  });
  
  return grouped;
}

// Obtenir toutes les lettres disponibles
export function getAvailableLetters(): string[] {
  const letters = new Set<string>();
  glossaryTerms.forEach(term => {
    letters.add(term.mot.charAt(0).toUpperCase());
  });
  return Array.from(letters).sort();
}

// Rechercher des termes
export function searchTerms(query: string): GlossaryTerm[] {
  const lowercaseQuery = query.toLowerCase();
  return glossaryTerms.filter(term => 
    term.mot.toLowerCase().includes(lowercaseQuery) ||
    term.definition.toLowerCase().includes(lowercaseQuery)
  );
}

// Obtenir un terme par son ID
export function getTermById(id: string): GlossaryTerm | undefined {
  return glossaryTerms.find(term => term.id === id);
}

// Obtenir les termes précédent et suivant
export function getAdjacentTerms(currentId: string): { prev: GlossaryTerm | null; next: GlossaryTerm | null } {
  const currentIndex = glossaryTerms.findIndex(term => term.id === currentId);
  
  return {
    prev: currentIndex > 0 ? glossaryTerms[currentIndex - 1] : null,
    next: currentIndex < glossaryTerms.length - 1 ? glossaryTerms[currentIndex + 1] : null
  };
}