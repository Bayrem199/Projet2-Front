import React, { useState } from "react";
import { Chatbot, createChatBotMessage } from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import './ai.css';
import background from "../images/9999.png";

// Ajout des réponses multilingues complètes
const multilanguageResponses = {
  greeting: {
    fr: [
      "Salut يا وحش ! Je suis ravi de t'aider dans ton parcours fitness ! 💪",
      "Je suis ton coach virtuel spécialisé en musculation, nutrition et bien-être. Comment puis-je t'aider aujourd'hui ?"
    ],
    en: [
      "Hi يا وحش! I'm excited to help you on your fitness journey! 💪",
      "I'm your virtual coach specialized in bodybuilding, nutrition, and wellness. How can I assist you today?"
    ],
    es: [
      "¡Hola يا وحش! ¡Estoy emocionado de ayudarte en tu viaje fitness! 💪",
      "Soy tu entrenador virtual especializado en musculación, nutrición y bienestar. ¿Cómo puedo ayudarte hoy?"
    ],
    ar: [
      "مرحباً يا وحش! أنا متحمس لمساعدتك في رحلتك الرياضية! 💪",
      "أنا مدربك الافتراضي المتخصص في كمال الأجسام والتغذية والعافية. كيف يمكنني مساعدتك اليوم؟"
    ]
  },
  nutrition: {
    fr: [
      "Voici mes recommandations nutritionnelles :\n\n" +
      "1. Apports quotidiens :\n" +
      "• Protéines : 1.6-2.2g/kg\n" +
      "• Glucides : 4-7g/kg\n" +
      "• Lipides : 0.5-1.5g/kg\n\n" +
      "2. Timing des repas :\n" +
      "• 3-4 repas principaux\n" +
      "• Collation pré-entraînement\n" +
      "• Repas post-entraînement"
    ],
    en: [
      "Here are my nutritional recommendations:\n\n" +
      "1. Daily intake:\n" +
      "• Protein: 1.6-2.2g/kg\n" +
      "• Carbs: 4-7g/kg\n" +
      "• Fats: 0.5-1.5g/kg\n\n" +
      "2. Meal timing:\n" +
      "• 3-4 main meals\n" +
      "• Pre-workout snack\n" +
      "• Post-workout meal"
    ],
    es: [
      "Aquí están mis recomendaciones nutricionales:\n\n" +
      "1. Ingesta diaria:\n" +
      "• Proteínas: 1.6-2.2g/kg\n" +
      "• Carbohidratos: 4-7g/kg\n" +
      "• Grasas: 0.5-1.5g/kg\n\n" +
      "2. Horario de comidas:\n" +
      "• 3-4 comidas principales\n" +
      "• Merienda pre-entrenamiento\n" +
      "• Comida post-entrenamiento"
    ],
    ar: [
      "إليك توصياتي الغذة:\n\n" +
      "1. الناول اليومي:\n" +
      "• البروتين: 1.6-2.2 جرام/كجم\n" +
      "• الكربوهيدرات: 4-7 جرام/كجم\n" +
      "• الدهون: 0.5-1.5 جرام/كجم\n\n" +
      "2. توقيت الوجبات:\n" +
      "• 3-4 وجبات رئيسية\n" +
      "• وجبة خفيفة قبل التمرين\n" +
      "• وجبة بعد التمرين"
    ]
  },
  // ... Ajoutez d'autres catégories de réponses multilingues
};

class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    // Récupérer la langue du state
    const currentLanguage = this.state?.currentLanguage || 'fr';
    
    // Pour l'arabe, on vérifie si le message contient des caractères arabes
    const isArabicMessage = /[\u0600-\u06FF]/.test(message);
    const lowerMessage = isArabicMessage ? message : message.toLowerCase();

    // Détection des salutations
    const greetings = {
      fr: ['bonjour', 'salut', 'bonsoir', 'coucou'],
      en: ['hello', 'hi', 'hey', 'good'],
      es: ['hola', 'buenos', 'buenas'],
      ar: ['مرحبا', 'السلام', 'اهلا', 'صباح', 'مساء']
    };

    if (greetings[currentLanguage].some(g => lowerMessage.includes(g))) {
      this.actionProvider.handleGreeting(currentLanguage);
      return;
    }

    // Détection des questions sur les programmes
    const programKeywords = {
      fr: ['programme', 'entrainement', 'exercice', 'routine'],
      en: ['program', 'workout', 'exercise', 'routine'],
      es: ['programa', 'ejercicio', 'entrenamiento', 'rutina'],
      ar: ['برنامج', 'تمرين', 'تدريب', 'روتين', 'تمارين']
    };

    if (programKeywords[currentLanguage].some(k => lowerMessage.includes(k))) {
      this.actionProvider.handleProgram(currentLanguage);
      return;
    }

    // Détection des questions sur la nutrition
    const nutritionKeywords = {
      fr: ['nutrition', 'manger', 'alimentation', 'repas', 'protéine'],
      en: ['nutrition', 'eat', 'food', 'meal', 'protein'],
      es: ['nutrición', 'comer', 'alimento', 'comida', 'proteína'],
      ar: ['تغذية', 'اكل', 'طعام', 'وجبة', 'بروتين', 'غذاء']
    };

    if (nutritionKeywords[currentLanguage].some(k => lowerMessage.includes(k))) {
      this.actionProvider.handleNutrition(currentLanguage);
      return;
    }

    // Si aucun mot-clé n'est détecté, on envoie le message par défaut
    this.actionProvider.handleDefault(currentLanguage);
  }
}

class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  handleGreeting = (language) => {
    const greetings = {
      fr: "Salut يا وحش ! Je suis ravi de t'aider dans ton parcours fitness ! 💪",
      en: "Hi يا وحش! I'm excited to help you on your fitness journey! 💪",
      es: "¡Hola يا وحش! ¡Estoy emocionado de ayudarte en tu viaje fitness! 💪",
      ar: "مرحباً يا وحش! أنا متحمس لمساعدتك في رحلتك الرياضية! 💪"
    };
    
    this.updateChatbotState(this.createChatBotMessage(greetings[language] || greetings.fr));
  };

  handleProgram = (language) => {
    const programs = {
      fr: [
        "Voici un programme optimisé pour tes objectifs 💪\n\n" +
        "JOUR 1 - PUSH (Pousser) :\n" +
        "• Développé couché : 4x8-12\n" +
        "• Développé militaire : 3x10-12\n" +
        "• Dips : 3x10\n" +
        "• Extensions triceps : 3x12-15",
        
        "JOUR 2 - PULL (Tirer) :\n" +
        "• Tractions : 4x8-10\n" +
        "• Rowing barre : 3x10-12\n" +
        "• Curl biceps : 3x12\n" +
        "• Face-pull : 3x15",
        
        "JOUR 3 - LEGS (Jambes) :\n" +
        "• Squats : 4x8-12\n" +
        "• Soulevé de terre : 4x8-10\n" +
        "• Leg press : 3x12-15\n" +
        "• Extensions mollets : 4x15-20"
      ],
      en: [
        "Here's an optimized program for your goals 💪\n\n" +
        "DAY 1 - PUSH:\n" +
        "• Bench Press: 4x8-12\n" +
        "• Military Press: 3x10-12\n" +
        "• Dips: 3x10\n" +
        "• Triceps Extensions: 3x12-15",
        
        "DAY 2 - PULL:\n" +
        "• Pull-ups: 4x8-10\n" +
        "• Barbell Row: 3x10-12\n" +
        "• Biceps Curl: 3x12\n" +
        "• Face-pull: 3x15",
        
        "DAY 3 - LEGS:\n" +
        "• Squats: 4x8-12\n" +
        "• Deadlift: 4x8-10\n" +
        "• Leg Press: 3x12-15\n" +
        "• Calf Raises: 4x15-20"
      ],
      es: [
        "Aquí tienes un programa optimizado para tus objetivos 💪\n\n" +
        "DÍA 1 - EMPUJE:\n" +
        "• Press de banca: 4x8-12\n" +
        "• Press militar: 3x10-12\n" +
        "• Fondos: 3x10\n" +
        "• Extensiones de tríceps: 3x12-15",
        
        "DÍA 2 - TIRÓN:\n" +
        "• Dominadas: 4x8-10\n" +
        "• Remo con barra: 3x10-12\n" +
        "• Curl de bíceps: 3x12\n" +
        "• Face-pull: 3x15",
        
        "DÍA 3 - PIERNAS:\n" +
        "• Sentadillas: 4x8-12\n" +
        "• Peso muerto: 4x8-10\n" +
        "• Prensa de piernas: 3x12-15\n" +
        "• Elevaciones de gemelos: 4x15-20"
      ],
      ar: [
        "إليك برنامج متكامل لتحقيق أهدافك 💪\n\n" +
        "اليوم 1 - تمارين الدفع:\n" +
        "• بنش بريس: 4×8-12\n" +
        "• ضغط عسكري: 3×10-12\n" +
        "• غطس: 3×10\n" +
        "• تمارين الترايسبس: 3×12-15",
        
        "اليوم 2 - تمارين السحب:\n" +
        "• عقلة: 4×8-10\n" +
        "• سحب البار: 3×10-12\n" +
        "• تمارين البايسبس: 3×12\n" +
        "• فيس بول: 3×15",
        
        "اليوم 3 - تمارين الأرجل:\n" +
        "• سكوات: 4×8-12\n" +
        "• ديدليفت: 4×8-10\n" +
        "• بريس الرجل: 3×12-15\n" +
        "• تمارين السمانة: 4×15-20"
      ]
    };

    programs[language]?.forEach(message => {
      this.updateChatbotState(this.createChatBotMessage(message));
    }) || programs.fr.forEach(message => {
      this.updateChatbotState(this.createChatBotMessage(message));
    });
  };

  handleMuscleGroup = (muscle, language) => {
    const exercises = {
      chest: {
        fr: "Voici les meilleurs exercices pour les pectoraux :\n" +
            "1. Développé couché\n" +
            "2. Dips\n" +
            "3. Écarté avec haltères\n" +
            "4. Push-ups",
        en: "Here are the best exercises for chest:\n" +
            "1. Bench Press\n" +
            "2. Dips\n" +
            "3. Dumbbell Flyes\n" +
            "4. Push-ups",
        es: "Aquí están los mejores ejercicios para el pecho:\n" +
            "1. Press de banca\n" +
            "2. Fondos\n" +
            "3. Aperturas con mancuernas\n" +
            "4. Flexiones",
        ar: "إليك أفضل تمارين الصدر:\n" +
            "1. بنش بريس\n" +
            "2. غطس\n" +
            "3. فلاي بالدمبل\n" +
            "4. ضغط"
      },
      back: {
        fr: "Voici les meilleurs exercices pour le dos :\n" +
            "1. Tractions\n" +
            "2. Rowing barre\n" +
            "3. Rowing un bras\n" +
            "4. Tirage poitrine",
        en: "Here are the best exercises for back:\n" +
            "1. Pull-ups\n" +
            "2. Barbell Row\n" +
            "3. One-arm Row\n" +
            "4. Lat Pulldown",
        es: "Aquí están los mejores ejercicios para la espalda:\n" +
            "1. Dominadas\n" +
            "2. Remo con barra\n" +
            "3. Remo a una mano\n" +
            "4. Jalón al pecho",
        ar: "إليك أفضل تمارين الظهر:\n" +
            "1. عقلة\n" +
            "2. سحب البار\n" +
            "3. سحب دمبل\n" +
            "4. بولداون"
      }
    };

    this.updateChatbotState(
      this.createChatBotMessage(exercises[muscle][language] || exercises[muscle].fr)
    );
  };

  handleDefault = (language) => {
    const defaultMessages = {
      fr: "Je suis là pour t'aider ! Voici les sujets sur lesquels je peux te conseiller :\n\n" +
          "📋 Programmes d'entraînement\n" +
          "💪 Exercices par muscle\n" +
          "🥗 Nutrition et suppléments\n" +
          "🔄 Récupération\n" +
          "⚡ Progression\n" +
          "Pose-moi une question sur l'un de ces sujets !",
      en: "I'm here to help! Here are the topics I can advise you on:\n\n" +
          "📋 Training programs\n" +
          "💪 Exercises by muscle\n" +
          "🥗 Nutrition and supplements\n" +
          "🔄 Recovery\n" +
          "⚡ Progression\n" +
          "Ask me a question about any of these topics!",
      es: "¡Estoy aquí para ayudarte! Estos son los temas sobre los que puedo aconsejarte:\n\n" +
          "📋 Programas de entrenamiento\n" +
          "💪 Ejercicios por músculo\n" +
          "🥗 Nutrición y suplementos\n" +
          "🔄 Recuperación\n" +
          "⚡ Progresión\n" +
          "¡Hazme una pregunta sobre cualquiera de estos temas!",
      ar: "أنا هنا للمساعدة! إليك المواضيع الت   يمكنني تقديم المشورة بشأنها:\n\n" +
          "📋 برامج التدريب\n" +
          "💪 تمارين لكل عضلة\n" +
          "🥗 التغذية والمكملات\n" +
          "🔄 التعافي\n" +
          "⚡ التقدم\n" +
          "اسألني عن أي من هذه المواضيع!"
    };

    this.updateChatbotState(
      this.createChatBotMessage(defaultMessages[language] || defaultMessages.fr)
    );
  };

  handleNutrition = (language) => {
    const nutritionMessages = {
      fr: "Voici mes conseils nutritionnels :\n\n" +
          "1. Protéines : 1.6-2.2g/kg/jour\n" +
          "2. Glucides : 4-7g/kg/jour\n" +
          "3. Lipides : 0.5-1.5g/kg/jour",
      en: "Here are my nutrition tips:\n\n" +
          "1. Protein: 1.6-2.2g/kg/day\n" +
          "2. Carbs: 4-7g/kg/day\n" +
          "3. Fats: 0.5-1.5g/kg/day",
      es: "Aquí están mis consejos nutricionales:\n\n" +
          "1. Proteínas: 1.6-2.2g/kg/día\n" +
          "2. Carbohidratos: 4-7g/kg/día\n" +
          "3. Grasas: 0.5-1.5g/kg/día",
      ar: "إليك نصائحي الغذائية:\n\n" +
          "1. البروتين: 1.6-2.2 جرام/كجم/يوم\n" +
          "2. الكربوهيدرات: 4-7 جرام/كجم/يوم\n" +
          "3. الدهون: 0.5-1.5 جرام/كجم/يوم"
    };

    this.updateChatbotState(
      this.createChatBotMessage(nutritionMessages[language] || nutritionMessages.fr)
    );
  };

  updateChatbotState = (message) => {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };
}

const AI = () => {
  const [showChat, setShowChat] = useState(false);
  const [language, setLanguage] = useState('fr');

  const getInitialMessage = (lang) => {
    switch(lang) {
      case 'fr':
        return "Salut يا وحش ! Je suis ravi de t'aider dans ton parcours fitness ! 💪\n" +
               "Je suis ton coach virtuel spécialisé en musculation, nutrition et bien-être. Comment puis-je t'aider aujourd'hui ?";
      case 'en':
        return "Hi يا وحش! I'm excited to help you on your fitness journey! 💪\n" +
               "I'm your virtual coach specialized in bodybuilding, nutrition, and wellness. How can I assist you today?";
      case 'es':
        return "¡Hola يا وحش! ¡Estoy emocionado de ayudarte en tu viaje fitness! 💪\n" +
               "Soy tu entrenador virtual especializado en musculación, nutrición y bienestar. ¿Cómo puedo ayudarte hoy?";
      case 'ar':
        return "مرحباً يا وحش! أنا متحمس لمساعدتك في رحلتك الرياضية! 💪\n" +
               "أنا مدربك الافتراضي المتخصص في كمال الأجسام والتغذية والعافية. كيف يمكنني مساعدتك اليوم؟";
      default:
        return "Salut يا وحش ! Je suis ravi de t'aider dans ton parcours fitness ! 💪";
    }
  };

  const config = {
    initialMessages: [
      createChatBotMessage(getInitialMessage(language))
    ],
    state: {
      currentLanguage: language
    },
    botName: "MultiCoach",
    customStyles: {
      botMessageBox: {
        backgroundColor: "#333333",
      },
      chatButton: {
        backgroundColor: "#E50914",
      },
    },
    widgets: []
  };

  return (
    <div className="ai-container" style={{ backgroundImage: `url(${background})` }}>
      <div className={`background ${showChat ? 'fade-out' : ''}`}>
        <div className="background-content">
          <h1>Bienvenue sur ton Coach Musculation Virtuel</h1>
          <p>Pose tes questions et améliore tes performances avec des conseils personnalisés !</p>
          <button className="chat-toggle" onClick={() => setShowChat(!showChat)}>
            {showChat ? "Fermer le Chat" : "Commencer le Chat"}
          </button>
        </div>
      </div>

      {showChat && (
        <div className="chat-container">
          <div className="language-selector">
            {[
              { code: 'fr', name: 'Français' },
              { code: 'en', name: 'English' },
              { code: 'es', name: 'Español' },
              { code: 'ar', name: 'العربية' }
            ].map(lang => (
              <button
                key={lang.code}
                onClick={() => setLanguage(lang.code)}
                className={`language-button ${language === lang.code ? 'active' : ''}`}
              >
                {lang.name}
              </button>
            ))}
          </div>
          <Chatbot
            config={config}
            actionProvider={ActionProvider}
            messageParser={MessageParser}
            messageHistory={[]}
            placeholderText={
              language === 'fr' ? "Écrivez votre message ici..." :
              language === 'en' ? "Write your message here..." :
              language === 'es' ? "Escribe tu mensaje aquí..." :
              "اكتب رسالتك هنا يا وحش ..."
            }
            headerText={
              language === 'fr' ? "Monstre de Musculation" :
              language === 'en' ? "Monstre du Fitness" :
              language === 'es' ? "Monstruo del Fitness" :
              "وحش اللياقة البدنية البدنية"
            }
            key={language}
          />
        </div>
      )}
    </div>
  );
};

export default AI;