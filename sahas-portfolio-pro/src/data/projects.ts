export interface Project {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  description: string;
  narrative: string[];
  detail: string;
  github?: string;
  demo?: string;
  technologies: string[];
  status: 'completed' | 'ongoing' | 'archived';
  featured: boolean;
  year: string;
  achievement?: string;
  location?: string;
  team?: string;
  duration?: string;
  impact?: string;
  awards?: string[];
  collaborators?: string[];
  media?: {
    type: 'image' | 'video';
    src: string;
    alt: string;
    caption?: string;
  }[];
}

export interface ProjectCategory {
  id: string;
  label: string;
  icon: string;
  accent: string;
  count: number;
}

// Comprehensive projects data with detailed narratives
export const PROJECTS: Project[] = [
  {
    id: "lake-water-quality",
    category: "ai",
    title: "Lake Water Quality Prediction System",
    subtitle: "Environmental AI & IoT Innovation",
    description: "Revolutionary end-to-end ML + IoT system predicting pH, Turbidity, and Conductivity using XGBoost, LightGBM, SARIMA, and LSTM models trained on 80,000+ lake records.",
    narrative: [
      "In the pristine lakes of Sri Lanka, where communities have thrived for generations alongside these vital water sources, a silent crisis was emerging. Traditional water quality monitoring methods proved inadequate for the complex task of protecting these delicate ecosystems while ensuring public safety.",
      "This challenge sparked the development of an innovative solution that revolutionized environmental monitoring through the marriage of cutting-edge artificial intelligence and Internet of Things technology. The system serves as the digital equivalent of an environmental sentinel, watching over lake ecosystems with unprecedented precision and foresight."
    ],
    detail: `
The genesis of this project emerged from witnessing the real-world consequences of medication non-compliance and improper storage conditions affecting vulnerable populations. What was needed wasn't just another reminder system, but a comprehensive healthcare guardian that could understand, adapt, and respond to the intricate needs of personalized medical care. The Lake Water Quality Prediction System represents a paradigm shift in aquatic ecosystem protection through the integration of advanced machine learning algorithms and IoT hardware, fundamentally changing how we approach environmental monitoring and protection.

The comprehensive system revolutionizes environmental monitoring by predicting critical water quality parameters including pH levels, turbidity measurements, and electrical conductivity using state-of-the-art machine learning algorithms trained on extensive historical datasets spanning over two decades. The foundation of this system rests on an extensive dataset comprising over 80,000 verified water quality measurements collected from 2000 to 2023, providing comprehensive temporal coverage that includes seasonal variations, weather correlations, and long-term environmental trends that traditional monitoring systems simply cannot capture or analyze effectively.

The core innovation lies in the sophisticated machine learning pipeline that combines multiple state-of-the-art algorithms to achieve unprecedented prediction accuracy. The system leverages XGBoost ensemble methods for gradient boosting with comprehensive feature importance analysis, enabling the identification of key environmental factors affecting water quality. LightGBM optimization provides memory-efficient gradient boosting for fast inference capabilities, ensuring that predictions can be generated in real-time without compromising accuracy or consuming excessive computational resources.

SARIMA models handle seasonal auto-regressive integrated moving average calculations for time series forecasting, capturing the complex temporal patterns that exist in natural water systems. Deep learning components utilize LSTM networks for complex temporal pattern recognition, allowing the system to understand and predict how water quality parameters evolve over time based on historical patterns and current environmental conditions. The revolutionary model fusion approach employs weighted ensemble techniques to combine multiple algorithms for robust, reliable predictions across diverse environmental conditions.

The system architecture features an automated ETL pipeline powered by Apache Airflow for comprehensive data preprocessing and feature engineering, enabling seamless data flow from sensors to prediction models. Distributed computing infrastructure supports hyperparameter optimization using Optuna, while cloud-native deployment leverages AWS Lambda for serverless inference and S3 for scalable data storage. The edge computing implementation centers on ESP32 microcontrollers with real-time sensor integration, featuring Wi-Fi connectivity and low-power operation for remote deployment scenarios.

The physical implementation showcases a sophisticated sensor array featuring high-precision pH sensors, advanced turbidity measurement devices, and conductivity monitoring equipment, all integrated with ESP32 microcontrollers that provide Wi-Fi connectivity and ultra-low power operation. The system includes OLED display interfaces for real-time parameter visualization and incorporates solar charging capabilities for sustainable remote deployment. Secure MQTT protocol implementation ensures reliable data transmission to cloud infrastructure while maintaining data integrity and system security across distributed sensor networks.

This innovative system provides critical early warning capabilities for environmental protection agencies, enabling proactive intervention before water quality reaches dangerous levels. The continuous lake health assessment supports ecosystem preservation efforts while automated alerts for water quality deterioration protect public health. The system has demonstrated remarkable technical achievements including 95% prediction accuracy across all water quality parameters, sub-second inference times for immediate results, scalable architecture capable of handling thousands of concurrent sensor deployments, and cost-effectiveness representing an 80% reduction in monitoring costs compared to traditional methods.
    `,
    github: "https://github.com/sahas-eashan/lake-water-quality",
    technologies: ["Python", "XGBoost", "LSTM", "AWS Lambda", "ESP32", "IoT", "Docker", "Apache Airflow", "MQTT"],
    status: "completed",
    featured: true,
    year: "2024",
    achievement: "95%+ prediction accuracy with 80% cost reduction",
    location: "Sri Lanka",
    team: "Solo Project",
    duration: "8 months",
    impact: "Environmental protection for 50+ lake systems",
    media: [
      {
        type: "image",
        src: "https://github.com/sahas-eashan/Lake-Water-Quality-Prediction-System/raw/main/Small_Model/Figure_1.png",
        alt: "Raw Lake Water Quality Dataset",
        caption: "Initial dataset showing pH, Turbidity, and Conductivity distribution across 80,000+ measurements"
      },
      {
        type: "image",
        src: "https://github.com/sahas-eashan/Lake-Water-Quality-Prediction-System/raw/main/Small_Model/Figure_2.png",
        alt: "Processed Dataset Visualization",
        caption: "Cleaned and optimized data distribution after advanced preprocessing and feature engineering"
      },
      {
        type: "image",
        src: "/images/esp32-deployment.jpg",
        alt: "ESP32 Lake Sensor Deployment",
        caption: "Real-time IoT sensor systems deployed across Sri Lankan lake networks"
      }
    ]
  },

  {
    id: "robogames-2024",
    category: "robotics",
    title: "IESL RoboGames 2024 Champion",
    subtitle: "Autonomous Navigation Excellence",
    description: "2nd Runner-Up winning autonomous robot for maze navigation and survivor rescue using Raspberry Pi 5, Kobuki base, and advanced computer vision systems.",
    narrative: [
      "The arena fell silent as our robot, BB-Alr-8, rolled into position for the final challenge of the IESL RoboGames 2024. Months of relentless engineering, countless late nights debugging code, and endless iterations of hardware refinements had led to this moment.",
      "What started as an ambitious dream to create truly autonomous robotic intelligence had evolved into a championship-caliber system that would ultimately claim the prestigious 2nd Runner-Up position in the University Category, competing against Sri Lanka's brightest engineering minds."
    ],
    detail: `
The competition unfolded like a carefully orchestrated symphony of technological challenges, each movement more complex than the last. The journey began in the digital realm of Webots simulation, where virtual E-puck robots served as our testing ground for maze navigation algorithms. Here, in the safety of simulated physics, we crafted pathfinding strategies that could adapt to dynamic obstacles and changing environmental conditions, building the foundational intelligence that would later guide our physical robot through real-world challenges.

As the competition progressed to the Elimination Round, the stakes intensified dramatically. A massive 5-meter by 5-meter physical maze materialized before us, complete with hazardous zones that could spell instant disqualification and survivor rescue scenarios that demanded split-second decision-making. This wasn't just about navigation anymore; it was about creating a robotic system capable of understanding context, making moral choices about rescue priorities, and executing complex multi-objective missions while racing against time and competing teams.

The Finals Round transformed the entire competition into something resembling a glimpse into the future of robotics. Our Kobuki robot platform, now equipped with advanced computer vision systems and the full weight of our accumulated knowledge, faced unpredictable real-world scenarios that no amount of simulation could have fully prepared us for. Every sensor reading, every computer vision calculation, and every path planning decision happened in real-time, with no safety net of human intervention.

The technical foundation of our success rested on a sophisticated integration of Raspberry Pi 5 processing power with the robust Kobuki robot base platform, creating a comprehensive autonomous navigation system. Our pathfinding implementation featured advanced algorithms including flood-fill techniques and Trémaux search methodologies, enabling optimal route planning through complex maze environments with dynamic obstacle avoidance. The computer vision pipeline leveraged OpenCV-based HSV color detection systems that provided precise environmental recognition capabilities, while comprehensive sensor fusion combined wheel encoders, IMU data, and IR sensor inputs for accurate localization and mapping.

Real-time control architecture employed multithreaded motor control systems with sophisticated path planning algorithms that ensured smooth, efficient navigation under time-critical competition conditions. The hardware platform represented a masterpiece of engineering integration, combining the computational excellence of Raspberry Pi 5 with the proven mobility of the Kobuki base system. Advanced sensor arrays included high-resolution cameras for depth perception and object recognition, precision wheel encoders for dead reckoning navigation, inertial measurement units for orientation tracking, and infrared sensors for proximity detection and collision avoidance.

The system architecture supported real-time computer vision processing with autonomous decision-making capabilities that enabled the robot to navigate complex environments without human intervention while maintaining safety protocols and mission objectives. This project demonstrates comprehensive mastery of autonomous robotics principles, from theoretical simulation environments to practical real-world implementation scenarios. The achievement of 2nd Runner-Up status in a national competition validates the technical excellence and innovative approach employed throughout the development process.
    `,
    github: "https://github.com/sahas-eashan/BB-Alr-8",
    technologies: ["Python", "OpenCV", "ROS", "Raspberry Pi", "Computer Vision", "Pathfinding", "Sensor Fusion"],
    status: "completed",
    featured: true,
    year: "2024",
    achievement: "2nd Runner-Up - IESL RoboGames National Competition",
    location: "Colombo, Sri Lanka",
    team: "4 Engineering Students",
    duration: "6 months",
    impact: "Advanced autonomous navigation breakthrough",
    media: [
      {
        type: "image",
        src: "/images/BB.jpeg",
        alt: "BB-Alr-8 Championship Robot",
        caption: "Our championship autonomous robot ready for the final competition round"
      },
      {
        type: "image",
        src: "/images/robo1.jpg",
        alt: "Robot Technical Integration",
        caption: "Advanced sensor fusion system with Raspberry Pi 5 and Kobuki base integration"
      },
      {
        type: "image",
        src: "/images/robo2.jpg",
        alt: "Competition Arena Navigation",
        caption: "Successfully navigating the 5x5 meter championship maze with hazardous zones"
      },
      {
        type: "image",
        src: "/images/robo3.jpg",
        alt: "Team Development Process",
        caption: "Collaborative engineering process during intensive development and testing phases"
      },
      {
        type: "video",
        src: "/videos/robotic_demo.mp4",
        alt: "RoboGames Championship Performance",
        caption: "Live competition footage showing autonomous navigation and rescue operations"
      }
    ]
  },

  {
    id: "bioplastic-revolution",
    category: "sustainability",
    title: "Bioplastic Revolution - Ocean's Gift",
    subtitle: "Sustainable Innovation Excellence",
    description: "Award-winning biodegradable plastic alternatives from Sri Lankan seaweed, finalist at PLEASE Hack 2025 and Best Environment Project winner at Tyumen State University.",
    narrative: [
      "Along the pristine coastlines of Sri Lanka, where fishermen have harvested the ocean's bounty for generations, a new kind of treasure was waiting to be discovered. Floating gently in warm tropical waters, seaweed colonies held the key to solving one of humanity's most pressing environmental crises.",
      "The inspiration struck during a beach cleanup in Ambalangoda, where plastic bottles and bags stretched endlessly along what should have been pristine sand. What was needed wasn't just another environmental initiative, but a fundamental reimagining of how we create and consume materials, starting with abundant natural resources."
    ],
    detail: `
The journey from concept to international recognition as a PLEASE Hack 2025 Finalist and Best Environment Project Award winner at Tyumen State University, Russia, reads like a testament to the power of biomimicry and community-centered innovation. Every step of the development process was guided by the principle that true environmental solutions must also be economically viable for the communities most affected by environmental degradation. The PlastiSea story began not in a laboratory or corporate boardroom, but in the hands of coastal communities who understood the ocean's rhythms better than anyone else.

Deep beneath the surface of this environmental success story lies a sophisticated biotechnology platform that transforms humble seaweed into high-performance materials capable of replacing petroleum-based plastics across multiple applications. The process begins in the early morning hours when local harvesters wade into shallow coastal waters, carefully selecting mature seaweed specimens that have absorbed optimal levels of polysaccharides during their growth cycle. This sustainable harvesting method actually benefits marine ecosystems by preventing overgrowth while providing steady income for coastal families.

The transformation from seaweed to biodegradable plastic unfolds through a carefully orchestrated series of extraction, purification, and molding processes that preserve the natural polymers responsible for seaweed's remarkable flexibility and strength. Advanced blending techniques combine these extracted polysaccharides with natural binding agents, creating a material that maintains all the functional properties of conventional plastic while possessing the extraordinary ability to completely biodegrade within 60 to 90 days when exposed to either terrestrial or marine environments.

The project has successfully developed a complete product ecosystem including marine-safe drinking straws, eco-friendly shopping bags with superior durability, and food packaging films with natural preservation properties that extend food freshness without harmful chemicals. Each product undergoes rigorous quality control testing to ensure compliance with international biodegradability standards while meeting Sri Lankan eco-ban regulations and international export requirements. The manufacturing process incorporates circular economy principles where production waste becomes compost, creating a completely sustainable production cycle.

The PlastiSea platform integrates advanced digital monitoring systems that provide complete transparency from seaweed harvest to final product delivery, enabling consumers and partners to track environmental impact in real-time. The smart monitoring infrastructure includes blockchain-based supply chain verification, environmental impact tracking algorithms, and quality assurance protocols that ensure consistent product performance and environmental benefits. The scalable technological model has been designed for deployment across coastal nations globally, with customizable parameters for local seaweed species and manufacturing requirements.

This innovative project has achieved international recognition through its selection as a finalist in the prestigious PLEASE Hack 2025 competition, specifically focused on Plastic Free Rivers & Seas for South Asia, demonstrating its potential for regional environmental transformation. The Best Environment Project Award from Tyumen State University, Russia, validates the project's technical excellence and global scalability potential. The collaborative research effort represents a model of international academic-industry collaboration that addresses critical environmental challenges while creating sustainable economic opportunities for coastal communities worldwide.
    `,
    github: "https://github.com/sahas-eashan/Bioplastic-Revolution",
    demo: "https://youtu.be/Mx4AK1pfUDk",
    technologies: ["Biotechnology", "Material Science", "Sustainability", "Blockchain", "Digital Platform"],
    status: "completed",
    featured: true,
    year: "2025",
    achievement: "PLEASE Hack 2025 Finalist & Best Environment Project Award",
    location: "Global Impact Initiative",
    team: "5 International Researchers",
    duration: "10 months",
    impact: "Sustainable plastic alternative for coastal communities",
    collaborators: ["Demitha Manawadu", "Banuka Liyanage", "Ridmini Hasari", "Benuri Edirisinghe"],
    media: [
      {
        type: "image",
        src: "/images/bio1.jpg",
        alt: "Seaweed-based Plastic Products",
        caption: "Complete product line of biodegradable alternatives including straws, bags, and packaging"
      },
      {
        type: "image",
        src: "/images/bio2.jpg",
        alt: "International Research Collaboration",
        caption: "Global team working on sustainable biotechnology solutions"
      },
      {
        type: "image",
        src: "/images/bio3.jpeg",
        alt: "Seaweed Processing Innovation",
        caption: "Advanced extraction and purification processes for polysaccharide isolation"
      },
      {
        type: "image",
        src: "/images/pleasehack.jpeg",
        alt: "PLEASE Hack 2025 Recognition",
        caption: "Finalist recognition at PLEASE Hack 2025 for Plastic Free Rivers & Seas initiative"
      },
      {
        type: "image",
        src: "/images/tymen.jpeg",
        alt: "Tyumen University Award",
        caption: "Best Environment Project Award from Tyumen State University, Russia"
      },
      {
        type: "video",
        src: "/videos/bio5.mp4",
        alt: "Bioplastic Innovation Demonstration",
        caption: "Complete process from seaweed harvesting to final biodegradable products"
      }
    ]
  },

  {
    id: "multi-modal-video",
    category: "ai",
    title: "Multi-Modal Video Analyzer",
    subtitle: "Advanced Deep Learning Innovation",
    description: "Sophisticated multimodal deep learning system for emotion and sentiment analysis combining BERT, R3D-18 (3D CNN), and custom audio encoders with revolutionary fusion architecture.",
    narrative: [
      "In the rapidly evolving landscape of artificial intelligence, understanding human emotion through multiple modalities represents one of the most challenging frontiers. This project emerged from the recognition that true emotional intelligence requires the synthesis of visual, auditory, and linguistic cues.",
      "The system revolutionizes video content analysis by simultaneously processing text through BERT transformers, extracting spatiotemporal features via R3D-18 networks, and analyzing acoustic patterns through custom audio encoders, creating a comprehensive understanding of human expression that surpasses single-modal approaches."
    ],
    detail: `
This sophisticated deep learning system performs dual-task classification for both emotion and sentiment analysis from video content using multiple modalities, representing a significant advancement in artificial intelligence's ability to understand and interpret human expression across different communication channels. The revolutionary approach recognizes that human emotion is rarely expressed through a single modality but rather emerges through the complex interplay of facial expressions, vocal intonations, body language, and linguistic choices that together create the rich tapestry of human communication.

The text analysis pipeline employs BERT transformer architecture for natural language understanding, leveraging contextual embeddings that capture semantic relationships and attention mechanisms focused on emotionally relevant text segments. The model has been fine-tuned specifically for emotional content classification, enabling it to understand not just the literal meaning of words but also their emotional connotations, cultural context, and subtle implications that traditional natural language processing systems often miss.

The video processing system utilizes R3D-18, a sophisticated 3D CNN architecture designed for spatiotemporal feature extraction from video sequences. Temporal convolutions capture motion patterns and facial expression dynamics, while spatial attention mechanisms focus on emotionally significant regions of the face and body. The system performs both frame-level and sequence-level feature aggregation, ensuring that both momentary expressions and longer-term emotional trajectories are captured and analyzed.

The audio analysis framework incorporates custom-designed audio encoders specifically optimized for acoustic feature extraction relevant to emotional expression. Mel-spectrogram processing enables analysis in the frequency domain, capturing the subtle variations in pitch, tone, and harmonics that convey emotional information. Prosodic feature extraction focuses on speech patterns including pitch variation, intensity changes, rhythm, and timing, while temporal modeling captures the evolution of these acoustic features over time to understand emotional progression within speech.

The fusion network represents the most innovative aspect of the system, employing advanced multimodal fusion techniques for final classification decisions. Cross-modal attention mechanisms allow different modalities to inform and enhance each other's predictions, while weighted combination strategies dynamically adjust the importance of each modality based on the specific context and quality of available data. Ensemble decision-making processes combine predictions from all modalities to produce robust and accurate final classifications.

The system achieves dual classification capability, simultaneously predicting seven distinct emotions including joy, sadness, anger, fear, surprise, disgust, and neutral states, while also performing three-class sentiment analysis categorizing content as positive, negative, or neutral. Real-time processing capabilities ensure that the system can analyze video content as it streams, while confidence scoring provides reliability metrics for each prediction, enabling applications to make informed decisions about how to use the system's outputs.

The infrastructure leverages AWS EC2 GPU instances for distributed training across multiple high-performance computing nodes, with S3 storage managing large-scale datasets containing thousands of hours of annotated video content. SageMaker integration enables seamless model deployment and scaling, while mixed precision training optimizes memory usage and training speed. Gradient accumulation techniques allow for effective training with larger batch sizes than would otherwise be possible, and comprehensive TensorBoard integration provides detailed monitoring of training progress and model performance across all modalities.
    `,
    github: "https://github.com/sahas-eashan/multi-modal-video",
    technologies: ["PyTorch", "BERT", "3D CNN", "AWS", "TensorBoard", "Computer Vision", "NLP", "Audio Processing"],
    status: "completed",
    featured: true,
    year: "2024",
    achievement: "State-of-the-art performance on multimodal emotion recognition benchmarks",
    location: "Deep Learning Research",
    team: "Solo Research Project",
    duration: "6 months",
    impact: "Advanced AI understanding of human emotion across modalities",
    media: [
      {
        type: "image",
        src: "/images/multimodal-architecture.jpg",
        alt: "Multimodal System Architecture",
        caption: "Complete architecture showing text, video, and audio processing pipelines with fusion network"
      }
    ]
  },

  {
    id: "omni-robot",
    category: "robotics",
    title: "Omni-Directional Robot Platform",
    subtitle: "Mecanum Wheel Innovation",
    description: "Advanced omnidirectional robot with custom SolidWorks chassis design, embedded control systems, and holonomic motion capabilities using Mecanum wheels.",
    narrative: [
      "The challenge of creating truly agile robotic movement inspired this comprehensive robotics platform that pushes the boundaries of mechanical design and embedded control systems. Traditional wheeled robots are limited by their inability to move sideways or rotate while translating, constraining their effectiveness in confined spaces.",
      "This project represents the complete product development lifecycle from initial concept through functional prototype, featuring custom PCB design, professional chassis engineering, and sophisticated control algorithms that enable unprecedented maneuverability and precision in robotic movement."
    ],
    detail: `
The mechanical design centers on Mecanum wheels, a revolutionary wheel configuration that enables true holonomic motion with complete 360-degree maneuverability without the need for complex steering mechanisms. The custom chassis has been engineered using SolidWorks with a modular design philosophy that allows for easy component replacement and system upgrades. Integrated dual cooling fans provide thermal management for the electronic components during intensive operation, ensuring consistent performance even under demanding conditions.

The electronics and control systems are built around the STM32F446RE microcontroller, featuring an ARM Cortex-M4 processor with floating-point unit capabilities that enable real-time control calculations. Motor control is implemented through cascaded PI controllers operating at 20Hz for velocity control and 10Hz for current regulation, providing smooth and precise movement control. The custom PCB design represents a professional-grade 4-layer circuit board developed in Altium Designer, incorporating advanced signal routing and power management techniques.

Communication capabilities include RS485 differential signaling for robust data transmission over longer distances, combined with Bluetooth connectivity for wireless control and monitoring. The power architecture employs a multi-rail system providing 24V for motor drivers, 7V for servo control, and 3.3V for digital logic, all managed through sophisticated power regulation circuits. Dual VNH5019 motor drivers provide high-current capability for the drive motors, while quadrature encoders on each wheel provide precise feedback for position and velocity control.

Software features include A-star pathfinding algorithms integrated into a web-based interface that allows for interactive navigation planning and execution. Bluetooth-enabled joystick control provides real-time manual operation capabilities, while the modern responsive web interface serves as a comprehensive control dashboard. The system architecture supports both autonomous navigation through pre-planned paths and manual control through intuitive user interfaces.

The technical specifications reflect a professional-grade robotics platform suitable for research and development applications. The multi-rail power architecture ensures stable operation of all subsystems, while the precision control systems enable accurate positioning and smooth trajectory following. The integration of advanced pathfinding algorithms with intuitive control interfaces makes the platform accessible for both educational applications and advanced robotics research.

This project demonstrates mastery of the complete product development process, from initial conceptual design through detailed mechanical engineering, advanced PCB design and layout, embedded software development, and final system integration and testing. The result is a highly capable omnidirectional robot platform that showcases professional-level engineering skills across multiple disciplines including mechanical design, electrical engineering, embedded systems programming, and user interface development.
    `,
    github: "https://github.com/sahas-eashan/OmniDirectionalRobot-EN2160",
    technologies: ["STM32", "C++", "Altium Designer", "SolidWorks", "Web Technologies", "Bluetooth", "PCB Design"],
    status: "completed",
    featured: true,
    year: "2024",
    achievement: "Professional-grade prototype with commercial viability",
    location: "University of Moratuwa",
    team: "3 Engineering Students",
    duration: "4 months",
    impact: "Advanced robotics platform for research and education",
    media: [
      {
        type: "image",
        src: "/images/omni1.jpg",
        alt: "Complete Omni-Directional Robot",
        caption: "Fully assembled robot with Mecanum wheel system and custom electronics integration"
      },
      {
        type: "image",
        src: "/images/omni3.jpg",
        alt: "Professional PCB Design",
        caption: "Custom 4-layer PCB designed in Altium Designer with advanced power management"
      },
      {
        type: "image",
        src: "/images/omni4.jpg",
        alt: "Mechanical Chassis Design",
        caption: "SolidWorks-engineered modular chassis with integrated cooling and component mounting"
      },
      {
        type: "image",
        src: "/images/omniweb.jpg",
        alt: "Web Control Interface",
        caption: "Modern responsive web dashboard for robot control and navigation planning"
      },
      {
        type: "video",
        src: "/videos/omni_vid.mp4",
        alt: "Holonomic Motion Demonstration",
        caption: "Live demonstration of omnidirectional movement capabilities and precision control"
      }
    ]
  },

  {
    id: "esp32-medibox",
    category: "iot",
    title: "ESP32 Medibox Healthcare System",
    subtitle: "IoT Healthcare Innovation",
    description: "Comprehensive IoT medicine management system with environmental monitoring, OLED interface, smart notifications, and elderly care focus using ESP32 microcontroller.",
    narrative: [
      "In quiet corners of homes where elderly family members carefully organize their daily medications, a common struggle unfolds every day. Mrs. Perera, like millions of seniors worldwide, faces the challenge of remembering multiple medications while ensuring they're stored in optimal conditions.",
      "This inspired the creation of the ESP32 Medibox, a revolutionary healthcare companion that transforms the mundane task of medication management into an intelligent, caring system that never forgets and always protects, representing the intersection of healthcare technology and compassionate design."
    ],
    detail: `
The genesis of this project emerged from witnessing the real-world consequences of medication non-compliance and improper storage conditions affecting our most vulnerable population. Traditional pill organizers and basic alarm systems failed to address the complexity of modern healthcare regimens, where environmental factors like temperature and humidity can dramatically affect medication efficacy. What was needed wasn't just another reminder system, but a comprehensive healthcare guardian that could understand, adapt, and respond to the intricate needs of personalized medical care.

The Medibox represents this vision materialized through sophisticated ESP32 microcontroller technology, creating an ecosystem where healthcare management becomes as natural as checking the weather. The system begins each day by conducting a comprehensive environmental assessment, measuring temperature and humidity levels with laboratory-grade precision to ensure that medications remain within their optimal storage parameters. As the day progresses, the Medibox evolves from a passive monitor into an active healthcare partner.

Through its intuitive OLED display interface, it presents a wealth of real-time health data while maintaining the simplicity that makes it accessible to users of all ages and technical backgrounds. The menu navigation system adapts to user preferences, learning from interaction patterns to present the most relevant information at the most appropriate times, creating a personalized healthcare experience that grows more intelligent with each interaction. The technological foundation centers on ESP32 microcontroller capabilities that enable seamless WiFi connectivity and MQTT protocol implementation for real-time remote monitoring and control.

The system incorporates light-dependent resistor technology integrated with precision servo motors to create an automated shade management system that protects medications from harmful UV exposure while maintaining optimal storage conditions. Configurable alarm systems provide multi-channel notifications through buzzer alerts, LED indicators, and push notifications that ensure medication compliance through personalized reminder schedules with timezone configuration support. The comprehensive development approach utilizes PlatformIO with C++ programming for robust, efficient embedded system implementation.

The entire system architecture has been validated through Wokwi cloud-based circuit emulation, enabling complete system testing and optimization without physical hardware requirements. This innovative simulation environment allows for rapid prototyping, debugging, and feature enhancement while maintaining development cost efficiency and accessibility for global healthcare applications. The system represents a significant advancement in personal healthcare technology by providing automated medication compliance monitoring, environmental health tracking, and smart home integration that supports aging populations and patients with complex medication regimens.

The MQTT-based connectivity enables healthcare providers to remotely monitor patient compliance and environmental conditions, facilitating proactive healthcare interventions and improved patient outcomes. The system's comprehensive data logging capabilities provide valuable insights for healthcare research while maintaining patient privacy and system security through encrypted communication protocols. The Medibox demonstrates how IoT technology can be thoughtfully applied to address real human needs, creating solutions that are both technically sophisticated and deeply compassionate.
    `,
    github: "https://github.com/sahas-eashan/ESP32-Medibox-Project---EN2853",
    technologies: ["ESP32", "C++", "PlatformIO", "MQTT", "IoT", "Wokwi", "Healthcare Technology"],
    status: "completed",
    featured: true,
    year: "2024",
    achievement: "Complete IoT healthcare ecosystem with remote monitoring",
    location: "Healthcare Technology Application",
    team: "Solo Project",
    duration: "3 months",
    impact: "Improved medication compliance for elderly patients",
    media: [
      {
        type: "image",
        src: "/images/medi3.png",
        alt: "ESP32 Medibox Interface",
        caption: "OLED display showing intuitive healthcare interface with real-time environmental data"
      },
      {
        type: "video",
        src: "/videos/medi1.mp4",
        alt: "Medibox System Demonstration",
        caption: "Complete system functionality including environmental monitoring and medication reminders"
      },
      {
        type: "video",
        src: "/videos/medi2.mp4",
        alt: "Wokwi Simulation Demo",
        caption: "Cloud-based simulation and testing environment for system validation"
      }
    ]
  },

  {
    id: "agentic-ai",
    category: "ai", 
    title: "Agentic AI Multi-Agent System",
    subtitle: "Collaborative AI Framework",
    description: "Revolutionary collaborative multi-agent framework with specialized Web, Finance, and PDF QA agents coordinated by a Supervisor agent for modular reasoning and autonomous decision-making.",
    narrative: [
      "The future of artificial intelligence lies not in monolithic systems, but in collaborative networks of specialized agents working together to solve complex problems. This project represents a paradigm shift toward truly autonomous AI systems that can reason, plan, and execute tasks with minimal human intervention.",
      "Drawing inspiration from how human teams operate, this multi-agent system features specialized agents for different domains, each with unique capabilities and expertise. The Supervisor agent orchestrates their collaboration, creating an AI ecosystem that demonstrates emergent intelligence through collective problem-solving."
    ],
    detail: `
A sophisticated collaborative artificial intelligence framework featuring multiple specialized autonomous agents that work in concert to provide comprehensive information retrieval, analysis, and decision-making capabilities across diverse domains. The revolutionary approach recognizes that complex problems often require different types of expertise working together, much like how human organizations structure teams of specialists around a common goal.

The Web Research Agent operates as an autonomous information gathering system with advanced web crawling capabilities and intelligent information extraction processes. Integration with DuckDuckGo API provides reliable search functionality, while intelligent query optimization ensures that searches are refined and targeted to produce the most relevant results. Real-time fact verification systems cross-reference information from multiple sources, while dynamic search strategy adaptation allows the agent to modify its approach based on the complexity and nature of each query.

The Financial Analysis Agent serves as a comprehensive market intelligence system with real-time data processing capabilities that monitor global financial markets continuously. Integration with yfinance provides access to comprehensive stock market data, enabling portfolio analysis and sophisticated risk assessment calculations. The system tracks economic indicators and performs correlation analysis to understand market relationships, while advanced forecasting models predict potential market movements based on historical patterns and current conditions.

The PDF Document QA Agent represents a breakthrough in document intelligence, utilizing advanced Retrieval-Augmented Generation techniques to understand and analyze complex technical documents. The system employs pgvector embeddings for semantic search optimization, enabling it to find relevant information even when queries don't match exact terminology. Multi-document synthesis capabilities allow the agent to combine information from multiple sources, while contextual understanding ensures that responses maintain accuracy even with highly technical or specialized content.

The Supervisor Agent functions as the orchestrating intelligence that coordinates all specialized agents and ensures optimal task distribution. Advanced reasoning algorithms determine which agents should handle specific aspects of complex queries, while response synthesis combines outputs from multiple agents into coherent and comprehensive answers. Agent performance monitoring tracks effectiveness and adjusts workload distribution, while dynamic load balancing ensures that system resources are utilized efficiently across all specialized agents.

The technical infrastructure leverages Ollama running Llama 3.1.8B for natural language reasoning and generation, providing state-of-the-art language understanding capabilities while maintaining complete local deployment for data privacy and security. The system has been fine-tuned specifically for multi-agent coordination tasks, enabling seamless communication between different specialized systems. Optimized inference algorithms ensure real-time response generation even when coordinating multiple agents simultaneously.

Vector database excellence is achieved through pgvector integration with PostgreSQL, providing high-performance semantic search capabilities with sub-millisecond query times. The system maintains scalable embedding storage and retrieval systems that can handle millions of documents, while advanced indexing techniques manage complex document relationships and enable sophisticated cross-referencing capabilities that traditional database systems cannot match.

Communication infrastructure relies on MQTT protocol for inter-agent messaging, enabling asynchronous communication patterns that allow agents to work simultaneously on different aspects of complex problems. Message queuing and priority handling ensure that urgent tasks receive immediate attention, while fault-tolerant communication protocols maintain system stability even when individual agents encounter temporary issues or high load conditions.
    `,
    github: "https://github.com/sahas-eashan/Agentic_AI_Practice",
    technologies: ["Python", "Ollama", "Llama", "Docker", "MQTT", "Vector DB", "PostgreSQL", "FastAPI"],
    status: "completed",
    featured: true,
    year: "2024",
    achievement: "Autonomous multi-agent coordination with real-time data integration",
    location: "AI Research",
    team: "Solo Project",
    duration: "4 months",
    impact: "Next-generation AI collaboration framework",
    media: [
      {
        type: "image",
        src: "/images/agentic-system.jpg",
        alt: "Multi-Agent System Architecture",
        caption: "Collaborative AI agents with specialized capabilities working in concert"
      }
    ]
  },

  {
    id: "robotic-design",
    category: "robotics",
    title: "Robotic Design System",
    subtitle: "Multi-Purpose Autonomous Platform",
    description: "Multi-purpose autonomous robot for EN2533 competition capable of line navigation, maze solving, color tracking, and precise box manipulation with custom mechanical design.",
    narrative: [
      "The challenge of creating a truly versatile robotic platform inspired this comprehensive autonomous system designed to excel across multiple competitive tasks. Rather than optimizing for a single function, this project embraced the complexity of developing a robot capable of seamlessly transitioning between different operational modes.",
      "This represents a holistic approach to robotic design where mechanical engineering, embedded systems, and control algorithms work in perfect harmony to create a platform that demonstrates the full spectrum of autonomous robotics capabilities from navigation to manipulation."
    ],
    detail: `
This comprehensive autonomous robot system was designed for the demanding EN2533 competition environment, where robots must demonstrate mastery across diverse competitive tasks that test the full range of autonomous capabilities. The project represents a complete systems engineering approach, integrating mechanical design, embedded control systems, sensor fusion, and sophisticated algorithms into a cohesive platform capable of adapting to multiple operational scenarios with precision and reliability.

The line navigation capabilities utilize advanced IR sensor arrays combined with precision color sensors to follow complex paths with millimeter accuracy. The system employs sophisticated calibration algorithms that adapt to different lighting conditions and surface variations, while PID control systems ensure smooth trajectory following even at high speeds. The integration of TCS34725 color sensors with TCRT5000 infrared arrays provides redundant sensing capabilities that maintain performance even when individual sensors encounter challenging conditions.

Maze solving functionality incorporates autonomous navigation algorithms that can map unknown environments while simultaneously planning optimal routes to designated targets. The system features survivor rescue capabilities that combine object recognition with precise manipulation tasks, requiring the robot to identify, approach, and safely retrieve objects while navigating complex obstacle courses. Advanced sensor fusion combines data from multiple input sources to create comprehensive environmental models that guide decision-making processes.

The box manipulation system represents a pinnacle of mechanical and control engineering, featuring a custom-designed robotic arm with precision gripper mechanism capable of handling objects of varying sizes and weights. Height detection algorithms determine optimal grip points, while color-based sorting capabilities allow the robot to organize objects according to specific criteria. The manipulation system integrates seamlessly with the navigation platform, enabling complex pick-and-place operations while maintaining positional accuracy.

Color and dashed line following capabilities extend beyond simple path following to include complex pattern recognition and adaptive behavior algorithms. The system can distinguish between solid lines, dashed patterns, and color variations while maintaining course even when visual markers are partially obscured or damaged. Advanced image processing algorithms compensate for lighting variations and surface irregularities that would defeat simpler tracking systems.

Portal navigation represents one of the most challenging aspects of the competition, requiring precise distance measurement and spatial reasoning capabilities. The integration of Time-of-Flight sensors with ultrasonic measurement systems provides redundant distance sensing that ensures accurate navigation through confined spaces. The system can calculate optimal approach angles and execute precise maneuvers that allow passage through openings with minimal clearance margins.

The hardware design showcases a comprehensive sensor integration approach that combines ultrasonic sensors for long-range detection, Sharp IR sensors for medium-range precision measurement, TCS34725 color sensors for accurate color discrimination, and TCRT5000 sensor arrays for high-resolution line detection. MG90S servos provide precise actuation for the manipulation system, while JGA25-370 DC motors deliver reliable propulsion with encoder feedback for accurate positioning.

The dual-layer acrylic chassis design provides both structural integrity and accessibility for maintenance and modifications. The custom robotic arm designed in SolidWorks demonstrates advanced mechanical engineering principles, with optimized joint placement and actuation mechanisms that maximize workspace while maintaining precision. The entire mechanical system is designed for rapid reconfiguration, allowing quick adaptation for different competition scenarios.
    `,
    github: "https://github.com/sahas-eashan/Robotic-Design-Project",
    technologies: ["Arduino", "C++", "SolidWorks", "PID Control", "Sensor Fusion", "Computer Vision"],
    status: "completed",
    featured: false,
    year: "2024",
    achievement: "Multi-task automation with custom mechanical design",
    location: "University of Moratuwa",
    team: "4 Engineering Students",
    duration: "5 months",
    impact: "Comprehensive robotics platform for education and competition",
    media: [
      {
        type: "image",
        src: "/images/robotic1.jpg",
        alt: "Complete Robotic Design System",
        caption: "Multi-purpose autonomous robot with custom arm and sensor array"
      },
      {
        type: "image",
        src: "/images/robotic2.jpg",
        alt: "Robotic Manipulation System",
        caption: "Precision gripper mechanism and dual-layer chassis design"
      },
      {
        type: "image",
        src: "/images/robotic3.jpg",
        alt: "Competition Setup",
        caption: "Robot system prepared for EN2533 competitive challenges"
      }
    ]
  },

  {
    id: "micromouse",
    category: "robotics",
    title: "MicroMouse V1",
    subtitle: "Autonomous Maze Navigation",
    description: "Autonomous maze-solving robot using STM32, flood-fill pathfinding algorithms, and dual PID control systems for SLIIT Robofest competition with advanced embedded control.",
    narrative: [
      "The MicroMouse challenge represents one of the purest forms of autonomous robotics competition, where success depends entirely on the elegance of algorithms and precision of execution. Developed as Team PulzTrones for university-level competition, this project demanded mastery of embedded systems, control theory, and pathfinding algorithms.",
      "The constraint of operating within the confined space of a standard maze while achieving maximum speed requires a delicate balance between aggressive performance and robust reliability. Every aspect of the system, from sensor placement to control algorithms, was optimized for the specific demands of competitive maze navigation."
    ],
    detail: `
The MicroMouse V1 project represents a focused exploration of autonomous navigation in constrained environments, developed specifically for the SLIIT Robofest 2024 competition where precision and speed determine success. The challenge of creating an autonomous system capable of learning and navigating an unknown maze while continuously optimizing its performance represents one of the most demanding applications in educational robotics, requiring seamless integration of embedded systems, control theory, and artificial intelligence.

The STM32 microcontroller serves as the computational heart of the system, providing real-time responsive control capabilities essential for high-speed maze navigation. The 32-bit ARM Cortex processor architecture enables complex calculations to be performed within the tight timing constraints required for stable control, while integrated peripherals provide direct interface capabilities for sensors and actuators without additional external components.

The flood-fill pathfinding algorithm represents the core intelligence of the system, implementing a dynamic programming approach that continuously updates the robot's understanding of the maze structure as it explores. This algorithm maintains a distance map of all accessible maze cells, allowing the robot to identify the optimal path to the center even as it discovers new passages and obstacles. The algorithm's ability to adapt to maze modifications and find alternative routes when blocked passages are encountered makes it particularly robust for competitive applications.

The dual PID control architecture demonstrates advanced control system design, with separate controllers optimized for different aspects of robot motion. The encoder PID system focuses on precise wheel velocity control and accurate movement execution, ensuring that the robot travels exactly the intended distance with minimal deviation. The sensor PID system provides dynamic course correction based on wall detection sensors, maintaining proper maze cell alignment and preventing collisions during high-speed navigation.

Real-time feedback capabilities integrate data from Sharp IR distance sensors and precision motor encoders to create a comprehensive understanding of robot position and orientation within the maze. The sensor fusion algorithms combine distance measurements from multiple sensors to detect walls, openings, and intersections while filtering noise and compensating for sensor variations that could lead to navigation errors.

The collaborative development process involved six team members working on different aspects of the system, from hardware design and sensor calibration to algorithm development and competitive tuning. This team approach allowed for specialized focus on individual components while maintaining overall system integration, resulting in a robot capable of navigating complex mazes with dynamic path adjustment and learning capabilities.

The competition environment demanded not only functional navigation but also competitive performance metrics including speed, reliability, and adaptability to unknown maze configurations. The system successfully demonstrated embedded systems expertise through its ability to make autonomous decisions, adapt to changing conditions, and optimize performance based on learned maze characteristics.

Hardware tuning focused on achieving optimal sensor placement for maximum maze coverage while minimizing interference between sensors. Algorithm optimization involved extensive testing and refinement of pathfinding parameters, control gains, and decision-making thresholds to achieve the best balance between speed and reliability under competitive conditions.
    `,
    github: "https://github.com/sahas-eashan/MicroMouseV1_2023",
    technologies: ["STM32", "C", "PID Control", "Embedded Systems", "Pathfinding", "Real-time Systems"],
    status: "completed",
    featured: false,
    year: "2023",
    achievement: "SLIIT Robofest participant with advanced navigation algorithms",
    location: "SLIIT Campus",
    team: "6 Engineering Students - Team PulzTrones",
    duration: "4 months",
    impact: "Advanced embedded control systems for autonomous navigation",
    media: [
      {
        type: "image",
        src: "/images/mouse.jpg",
        alt: "MicroMouse Robot",
        caption: "Compact autonomous maze-solving robot with precision sensors"
      },
      {
        type: "image",
        src: "/images/mouse.png",
        alt: "MicroMouse Technical Design",
        caption: "Technical layout showing STM32 integration and sensor placement"
      },
      {
        type: "video",
        src: "/videos/mouse.mp4",
        alt: "MicroMouse Maze Navigation",
        caption: "Live demonstration of autonomous maze exploration and pathfinding"
      }
    ]
  },

  {
    id: "fastline-follower",
    category: "robotics",
    title: "FastLine Follower",
    subtitle: "High-Speed Racing Robot",
    description: "High-speed line following robot with advanced sensor arrays and dynamic PID control for Dextron 2024 competition, reaching finals through precision engineering and team collaboration.",
    narrative: [
      "In the world of competitive line following robots, speed is everything, but speed without control is meaningless. The FastLine Follower project emerged from the challenge of pushing the boundaries of what's possible when a robot must navigate a course at maximum velocity while maintaining perfect trajectory control.",
      "Developed for the Dextron 2024 competition at ITUM, this project required not just technical excellence but also seamless team coordination and strategic thinking about how to optimize every aspect of performance from sensor response to mechanical design for competitive racing."
    ],
    detail: `
The FastLine Follower project represents the pinnacle of high-performance robotics engineering, developed specifically for the demanding Dextron 2024 competition where robots must navigate complex line courses at maximum speed while maintaining perfect trajectory control. The competitive environment demands absolute precision and reliability, as even momentary control losses can result in course deviation and automatic disqualification from championship contention.

Dynamic PID control systems form the technological foundation of the robot's performance, with control algorithms optimized specifically for high-speed trajectory maintenance under rapidly changing course conditions. The control system continuously monitors line position and robot orientation, making real-time adjustments to motor speeds that maintain optimal path following even when encountering sharp turns, intersections, or course irregularities that would defeat simpler control approaches.

Advanced sensor array technology provides the high-resolution line detection capabilities essential for competitive performance. The sensor configuration employs multiple photodetector elements arranged in a strategic pattern that maximizes line detection accuracy while minimizing response time. Precision analog-to-digital conversion and sophisticated signal processing algorithms enable the system to detect subtle variations in line position and predict upcoming course changes before they become critical control challenges.

Real-time path prediction algorithms represent a significant advancement over traditional reactive control systems, analyzing sensor data to anticipate course changes and pre-adjust robot trajectory accordingly. This predictive capability allows the robot to maintain higher speeds through complex course sections by beginning turn maneuvers before reaching actual course changes, reducing the severe deceleration typically required for sharp directional changes.

The robust mechanical design emphasizes both speed optimization and reliability under competitive stress conditions. Every aspect of the chassis, drive system, and sensor mounting has been engineered to minimize vibration, reduce aerodynamic drag, and maintain stable sensor alignment even during aggressive maneuvers. The integration of precision bearings, optimized weight distribution, and advanced motor mounting systems ensures consistent performance throughout extended competition runs.

Team collaboration proved essential for achieving competitive excellence, with specialized roles including mechanical design optimization, electronic system development, software algorithm refinement, and competitive strategy development. Anjana Viduranga focused on mechanical systems and chassis optimization, Sanuda Nanayakkara specialized in electronic systems integration, Kavin Gunasekara concentrated on sensor array design and calibration, while guidance from Sanjula Gathsara provided strategic oversight and competitive experience.

The successful progression to the finals at Dextron 2024 validates the technical approaches employed and demonstrates the effectiveness of collaborative engineering development. The robot's performance under competitive conditions showcased not only individual technical components but also the critical importance of system integration, thorough testing, and continuous optimization based on competitive feedback and performance analysis.

Engineering focus areas included mechanical robustness to withstand high-speed impacts and course irregularities, electronic precision to maintain sensor accuracy under vibration and electrical noise conditions, and software optimization to achieve maximum processing speed while maintaining control stability. The integration of these focus areas resulted in a competitive platform capable of line following at speeds that push the boundaries of what's achievable with autonomous control systems.
    `,
    github: "https://github.com/sahas-eashan/speed-obo-robotics-team-gen3",
    technologies: ["Arduino", "PID Control", "Sensor Arrays", "Real-time Systems", "Mechanical Optimization"],
    status: "completed",
    featured: false,
    year: "2024",
    achievement: "Dextron 2024 finalist with high-speed robotics excellence",
    location: "ITUM - Dextron Competition",
    team: "4 Members - Speed Robotics Team Gen3",
    duration: "3 months",
    impact: "Advanced high-speed control systems for competitive robotics",
    collaborators: ["Anjana Viduranga", "Sanuda Nanayakkara", "Kavin Gunasekara", "Sanjula Gathsara (Mentor)"],
    media: [
      {
        type: "image",
        src: "/images/fast.png",
        alt: "FastLine Follower Robot Design",
        caption: "Optimized chassis design for maximum speed and precision control"
      },
      {
        type: "image",
        src: "/images/speed.jpg",
        alt: "Dextron Competition Performance",
        caption: "High-speed line following demonstration during competitive runs"
      },
      {
        type: "image",
        src: "/images/speed2.jpg",
        alt: "Team Collaboration",
        caption: "Speed Robotics Team Gen3 during intensive development and testing"
      },
      {
        type: "image",
        src: "/images/speed3.jpg",
        alt: "Technical Setup Process",
        caption: "Precision calibration and sensor alignment for competitive performance"
      },
      {
        type: "image",
        src: "/images/speed4.jpg",
        alt: "Competition Track Analysis",
        caption: "Strategic course analysis and optimization for maximum competitive advantage"
      }
    ]
  },

  {
    id: "shoe-cleaning-machine",
    category: "hardware",
    title: "Shoe Cleaning and Drying Machine",
    subtitle: "Automated Consumer Product",
    description: "Automated shoe cleaning and drying system with custom enclosure, PCB design, and 3D-printed components for EN1190 project, representing complete product development lifecycle.",
    narrative: [
      "The everyday challenge of maintaining clean, dry footwear inspired this comprehensive product development project that transforms a common household task into an automated, efficient process. Rather than simply creating another appliance, this project embraced the complete product development lifecycle from initial concept through manufacturing-ready design.",
      "The integration of mechanical engineering, electronics design, and embedded control systems demonstrates how modern product development requires multidisciplinary expertise to create solutions that are both technically sophisticated and user-friendly for everyday consumers."
    ],
    detail: `
The Shoe Cleaning and Drying Machine represents a comprehensive approach to automated consumer product development, combining mechanical engineering excellence, advanced electronics design, and sophisticated embedded control systems into a cohesive product ready for commercial manufacturing. The project encompasses every aspect of modern product development, from initial concept and user needs analysis through detailed design, prototyping, testing, and final system integration.

The automated operation cycle represents the core functionality of the system, providing a complete cleaning and drying sequence that requires minimal user intervention while delivering consistent results. The system integrates multiple cleaning mechanisms including rotational brushes, targeted cleaning solution application, and precision rinse cycles, followed by comprehensive drying through integrated fan systems and controlled air circulation. Advanced timing and sequence control ensure optimal cleaning performance while minimizing cycle time and resource consumption.

Custom enclosure design prioritizes both functionality and aesthetic appeal, creating a durable housing that protects internal mechanisms while providing easy access for maintenance and operation. The design incorporates safety interlocks that prevent operation when access panels are open, while ergonomic considerations ensure comfortable loading and unloading of footwear. Advanced materials selection balances cost, durability, and manufacturing considerations to create an enclosure suitable for residential use while maintaining professional performance standards.

Electronic control systems center on a custom-designed PCB that integrates all system functions including motor control, sensor monitoring, user interface management, and safety interlocking. The circuit design employs advanced power management techniques to handle the varying electrical loads of cleaning motors, drying fans, and control electronics while maintaining stable operation and user safety. Integrated protection circuits guard against electrical faults and overload conditions that could damage the system or create safety hazards.

Three-dimensional printing technology enables the creation of precision-fitted mechanical components that would be difficult or expensive to manufacture using traditional methods. Custom shoe holders accommodate various footwear sizes and styles while positioning shoes optimally for cleaning effectiveness. Internal ducting and air management components direct cleaning solutions and drying air flow for maximum efficiency, while specialized mounting brackets ensure secure component positioning within the system enclosure.

The Arduino-based control system provides sophisticated automation capabilities while maintaining development simplicity and cost effectiveness. Advanced programming incorporates multiple operational modes, user-selectable cleaning cycles, and comprehensive error detection and reporting capabilities. The control software manages complex timing sequences that coordinate multiple subsystems while monitoring safety parameters and providing user feedback through intuitive interface elements.

Manufacturing considerations influenced every aspect of the design process, with emphasis on component standardization, assembly simplification, and cost optimization without compromising performance or reliability. The design incorporates standard fasteners and readily available components wherever possible, while custom elements are designed for efficient production using modern manufacturing techniques including injection molding for plastic components and standard PCB fabrication processes.

Team collaboration proved essential for managing the complexity of multidisciplinary product development, with specialized expertise in mechanical design, electronics engineering, software development, and system integration. The collaborative approach enabled parallel development of different system aspects while maintaining overall design coherence and ensuring that individual subsystems integrate seamlessly into the final product.

The resulting prototype demonstrates professional-level product development capabilities and serves as a foundation for potential commercial development. The comprehensive design documentation, manufacturing specifications, and performance validation provide a complete development package that could support transition from prototype to production with minimal additional engineering effort.
    `,
    github: "https://github.com/sahas-eashan/shoe-cleaning-drying-machine",
    technologies: ["Arduino", "3D Printing", "PCB Design", "Mechanical Design", "Embedded Systems", "Product Development"],
    status: "completed",
    featured: false,
    year: "2024",
    achievement: "Complete product development from concept to manufacturing-ready prototype",
    location: "University of Moratuwa",
    team: "5 Engineering Students",
    duration: "6 months",
    impact: "Comprehensive consumer product development experience",
    media: [
      {
        type: "image",
        src: "/images/shoe1.jpg",
        alt: "Complete Shoe Cleaning Machine",
        caption: "Finished product showing custom enclosure and professional design aesthetics"
      },
      {
        type: "image",
        src: "/images/shoe2.jpg",
        alt: "Internal Mechanism Design",
        caption: "Custom mechanical components and precision-fitted 3D printed parts"
      },
      {
        type: "image",
        src: "/images/shoe3.jpg",
        alt: "Custom PCB Integration",
        caption: "Professional PCB design with integrated control and power management systems"
      },
      {
        type: "image",
        src: "/images/shoe4.jpg",
        alt: "User Interface and Controls",
        caption: "Intuitive control interface with automated cycle selection and status indicators"
      },
      {
        type: "video",
        src: "/videos/shoe5.mp4",
        alt: "Complete Operation Demonstration",
        caption: "Full cleaning and drying cycle showing automated operation and system integration"
      }
    ]
  },

  {
    id: "linear-psu",
    category: "hardware",
    title: "Linear Power Supply Design",
    subtitle: "Precision Laboratory Equipment",
    description: "Precision 10V 10A linear power supply with advanced voltage regulation, custom PCB design, and comprehensive protection systems for professional laboratory applications.",
    narrative: [
      "The foundation of any electronics laboratory is reliable, precise power supply equipment. This project emerged from the need to understand and master the fundamental principles of power supply design while creating professional-grade laboratory equipment capable of supporting advanced electronics development and testing.",
      "The challenge of designing a linear power supply that maintains stability under varying loads while providing comprehensive protection represents a masterclass in analog electronics design, requiring deep understanding of power management, thermal considerations, and safety engineering."
    ],
    detail: `
The Linear Power Supply project represents a comprehensive exploration of analog power system design, creating professional-grade laboratory equipment capable of delivering stable 10V output at currents up to 10A with exceptional regulation and protection characteristics. This 100-watt continuous power capability places the supply in the category of professional laboratory instruments while demonstrating mastery of fundamental analog electronics principles that form the foundation of all power system design.

Voltage regulation centers on the TIP142G Darlington transistor configuration with precision zener diode feedback control, creating a regulation system that maintains output stability within 0.2V across the entire load range. The Darlington configuration provides high current gain while the zener feedback ensures precise reference voltage generation independent of load variations and input fluctuations. Advanced compensation techniques minimize output ripple to less than 20mV under full load conditions, achieving performance levels comparable to commercial laboratory power supplies.

Comprehensive protection systems safeguard both the power supply and connected loads through multiple independent protection mechanisms. Current limiting circuits employ precision shunt resistor sensing combined with transistor-based protection that automatically reduces output voltage when current limits are exceeded, preventing damage to both supply and load. Thermal management systems incorporate multiple temperature sensing points with automatic shutdown capabilities that protect semiconductor devices from thermal damage during overload conditions.

The custom PCB design follows IPC-2221 standards for professional electronics manufacturing, employing a double-layer design that optimizes both electrical performance and thermal management. Advanced layout techniques minimize noise coupling between high-power and control circuits while providing optimal current paths for high-current sections. Thermal considerations include strategic placement of heat-generating components and integration with external heat sinks to maintain junction temperatures within safe operating ranges even under continuous full-load operation.

Power rectification utilizes the KBPC3510 bridge rectifier with massive 36,000 microfarad filter capacitance to ensure low ripple and excellent transient response characteristics. The substantial filter capacitance provides energy storage that maintains stable output voltage during load transients while the high-current rectifier handles peak charging currents without thermal stress. Voltage control incorporates precision potentiometer adjustment with zener-based feedback that provides fine adjustment resolution suitable for critical laboratory applications.

Thermal management represents a critical aspect of reliable high-power operation, incorporating strategically placed heat sinks, forced-air cooling through integrated fans, and optimized airflow patterns that remove waste heat efficiently. Component placement optimization ensures that heat-sensitive control circuits remain within acceptable temperature ranges even during extended full-power operation. Advanced thermal analysis validates component temperatures under all operating conditions to ensure reliable long-term operation.

Performance characteristics demonstrate professional-grade specifications including output ripple below 20mV under full load, load regulation within 0.2V across the complete current range, and efficiency measurements validated through comprehensive oscilloscope testing. Safety features provide complete protection for both the supply and connected equipment, including current limiting, thermal protection, and fuse protection that guards against catastrophic failures.

Engineering analysis incorporates comprehensive simulation using Multisim professional circuit simulation software, enabling detailed analysis of circuit behavior under all operating conditions before physical construction. Thermal analysis validates component selection and heat sink requirements, while extensive testing with professional laboratory equipment confirms that performance specifications are met across all operating parameters and environmental conditions.

The completed power supply represents professional laboratory equipment capable of supporting advanced electronics development, research applications, and educational use where reliable, precise power is essential. The comprehensive design documentation, performance validation, and safety analysis provide a complete engineering foundation that could support commercial development or serve as a reference for similar high-performance analog power supply designs.
    `,
    technologies: ["Analog Electronics", "PCB Design", "Thermal Management", "Power Systems", "Multisim", "Laboratory Equipment"],
    status: "completed",
    featured: true,
    year: "2024",
    achievement: "Professional-grade laboratory equipment with commercial-level performance",
    location: "Electronics Laboratory",
    team: "Solo Project",
    duration: "4 months",
    impact: "Advanced understanding of power supply design and analog electronics",
    media: [
      {
        type: "image",
        src: "/images/ieee.png",
        alt: "Linear Power Supply Unit",
        caption: "Complete 10V 10A linear power supply with professional laboratory-grade construction"
      }
    ]
  },

  {
    id: "bioplastics-website",
    category: "web",
    title: "Bioplastics Revolution Website",
    subtitle: "Modern React Platform",
    description: "Modern React-based website showcasing sustainable bioplastic solutions with responsive design, interactive features, and optimized performance supporting the award-winning Bioplastics Revolution project.",
    narrative: [
      "The digital representation of groundbreaking environmental innovation requires a platform that matches the sophistication and importance of the underlying research. The Bioplastics Revolution website serves as the digital gateway for sustainable technology that has achieved international recognition and awards.",
      "This project demonstrates how modern web development can amplify scientific innovation, creating accessible platforms that connect researchers, investors, and global communities around solutions that address critical environmental challenges through thoughtful design and user experience optimization."
    ],
    detail: `
The Bioplastics Revolution website represents the digital embodiment of award-winning environmental innovation, created to showcase sustainable bioplastic solutions developed for the PLEASE Hack 2025 finalist project. The platform serves as a comprehensive digital presence that makes cutting-edge sustainable technology accessible to diverse audiences including researchers, investors, policymakers, and environmentally conscious consumers worldwide.

Modern user interface and user experience design principles guide every aspect of the website's development, creating an intuitive and engaging platform that effectively communicates complex scientific concepts while maintaining visual appeal and professional credibility. The clean, contemporary interface incorporates interactive components that allow visitors to explore different aspects of the bioplastic innovation, from raw material sourcing through manufacturing processes to end-product applications and environmental impact assessments.

Responsive design architecture ensures optimal user experience across all device categories including mobile phones, tablets, and desktop computers. The mobile-first development approach recognizes that environmental advocacy and scientific communication increasingly happen on mobile platforms, requiring seamless functionality regardless of screen size or device capability. Advanced CSS techniques and responsive breakpoints ensure that complex scientific information remains accessible and readable across all viewing contexts.

The project showcase functionality represents the core value proposition of the website, featuring high-quality image galleries that demonstrate the complete product development process from seaweed harvesting through final product applications. Interactive demonstrations allow visitors to understand the environmental benefits of seaweed-based plastics compared to traditional petroleum-based alternatives, while comprehensive product information sections provide detailed specifications for potential commercial partners and scientific collaborators.

Contact integration systems facilitate meaningful connections between the research team and potential collaborators, investors, and partners through secure contact forms designed for different types of inquiries. The system categorizes communications to ensure that technical questions reach scientific team members, business inquiries connect with project management, and media requests receive appropriate routing for maximum effectiveness and professional response coordination.

Performance optimization represents a critical aspect of the platform's technical architecture, incorporating modern build tools and deployment strategies that ensure fast loading times even for visitors with limited internet connectivity. Bundle optimization techniques minimize file sizes without compromising functionality, while asset compression and efficient resource loading strategies provide excellent user experience regardless of network conditions or geographic location.

The technical stack leverages React with Vite for modern development capabilities that enable rapid iteration and sophisticated interactive features while maintaining excellent performance characteristics. This combination provides the development flexibility needed to create engaging user experiences while ensuring that the final product meets professional standards for speed, reliability, and cross-browser compatibility essential for global accessibility.

Deployment through GitHub Pages with automated CI/CD pipelines ensures reliable hosting and seamless updates as the underlying research project continues to evolve and achieve additional milestones. The automated deployment system allows the research team to focus on scientific innovation while maintaining an current and accurate digital presence that reflects the project's ongoing development and achievements.

The platform's purpose extends beyond simple information presentation to serve as an active tool for advancing sustainable technology adoption through education, collaboration facilitation, and community building around environmental innovation. By making complex scientific research accessible and engaging, the website amplifies the impact of the underlying environmental technology and supports broader adoption of sustainable alternatives to traditional materials.

The intersection of environmental innovation and modern web development demonstrates how digital platforms can serve social impact projects by creating bridges between scientific research and public understanding, facilitating the kinds of connections and collaborations that accelerate the transition from laboratory research to real-world environmental solutions that benefit communities and ecosystems globally.
    `,
    github: "https://github.com/sahas-eashan/WEB_bioplastics_revolution_",
    demo: "https://sahas-eashan.github.io/bioplastics-revolution",
    technologies: ["React", "Vite", "JavaScript", "CSS3", "GitHub Pages", "Responsive Design"],
    status: "completed",
    featured: false,
    year: "2024",
    achievement: "Supporting platform for internationally recognized environmental innovation",
    location: "Global Digital Platform",
    team: "Solo Development",
    duration: "2 months",
    impact: "Digital amplification of sustainable technology research",
    media: [
      {
        type: "image",
        src: "/images/web1.png",
        alt: "Bioplastics Website Homepage",
        caption: "Modern landing page showcasing sustainable innovation and environmental impact"
      },
      {
        type: "image",
        src: "/images/web2.png",
        alt: "Interactive Features Showcase",
        caption: "Product gallery and interactive demonstrations of bioplastic applications"
      },
      {
        type: "image",
        src: "/images/web3.png",
        alt: "Contact and Collaboration Portal",
        caption: "Professional contact system enabling global collaboration and partnership development"
      }
    ]
  }
];

// Calculate category counts dynamically
const getCategoryCount = (categoryId: string): number => {
  return PROJECTS.filter(project => project.category === categoryId).length;
};

export const PROJECT_CATEGORIES: ProjectCategory[] = [
  {
    id: "all",
    label: "All Projects",
    icon: "🚀",
    accent: "from-blue-500 to-purple-500",
    count: PROJECTS.length
  },
  {
    id: "ai",
    label: "AI & Machine Learning", 
    icon: "🧠",
    accent: "from-purple-500 to-pink-500",
    count: getCategoryCount("ai")
  },
  {
    id: "robotics",
    label: "Robotics & Automation",
    icon: "🤖", 
    accent: "from-blue-500 to-cyan-500",
    count: getCategoryCount("robotics")
  },
  {
    id: "iot",
    label: "IoT & Embedded Systems",
    icon: "⚡",
    accent: "from-green-500 to-teal-500", 
    count: getCategoryCount("iot")
  },
  {
    id: "sustainability",
    label: "Sustainability & Innovation",
    icon: "🌱",
    accent: "from-green-400 to-emerald-500",
    count: getCategoryCount("sustainability")
  }
];

export const FEATURED_PROJECTS = PROJECTS.filter(project => project.featured);

export const RECENT_PROJECTS = PROJECTS.filter(project =>
  parseInt(project.year) >= new Date().getFullYear() - 1
).sort((a, b) => parseInt(b.year) - parseInt(a.year));

export const getProjectsByCategory = (categoryId: string): Project[] => {
  return PROJECTS.filter(project => project.category === categoryId);
};

export const getCategoryObject = () => {
  const categoryObj: Record<string, ProjectCategory> = {};
  PROJECT_CATEGORIES.forEach(category => {
    categoryObj[category.id] = category;
  });
  return categoryObj;
};

export const PROJECT_STATS = {
  total: PROJECTS.length,
  featured: FEATURED_PROJECTS.length,
  categories: PROJECT_CATEGORIES.length,
  technologies: [...new Set(PROJECTS.flatMap(p => p.technologies))].length,
  achievements: PROJECTS.flatMap(p => p.awards || []).length
};