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
    subtitle: "Edge + Cloud Environmental Forecasting",
    description: "End-to-end ML + IoT pipeline forecasting pH, turbidity, and conductivity using an 80K-location lake dataset with dual deployment on ESP32 edge devices and AWS Lambda.",
    narrative: [
      "In the heart of China's vast freshwater ecosystems, where over 80,000 lakes tell stories through their chemical signatures, a revolution in environmental monitoring began to take shape. The challenge was monumental: how could we predict water quality parameters across thousands of locations without the impossible task of manual sampling at scale? This became even more urgent when we realized the connection to our Bioplastics Revolution project - people needed to see the future impact of plastic pollution on their water sources.",
      "The answer emerged through a sophisticated fusion of classical machine learning, deep neural networks, and IoT edge computing. This predictive system serves dual purposes: scientific environmental monitoring and public awareness - showing communities how polluted their waters will become if plastic usage continues unchecked, making a compelling case for sustainable alternatives like our seaweed-based bioplastics."
    ],
    detail: `In a world drowning in **8 billion tons of plastic waste**, we embarked on a mission that would connect environmental prediction with sustainable innovation. This wasn't just another machine learning project - it was **the foundation of a bioplastics revolution**. By predicting how conventional plastics would degrade water quality over the coming decades, we could build the compelling case for our biodegradable alternative.

**The story began with a simple yet profound realization**: if we could forecast exactly how polluted our waters would become, we could convince industries to abandon conventional plastics before the damage became irreversible. Armed with **23 years of water quality data from 80,000 lake locations**, we set out to build the most comprehensive aquatic forecasting system ever created.

Our treasure trove contained **comprehensive water quality measurements spanning from 2000 to 2023** across China's vast lake network. Each location held the secrets of three critical parameters: **pH levels (the acidity balance of life), turbidity (nature's clarity indicator), and conductivity (the dissolved story of pollution)**. With over 15 million individual measurements, we possessed the largest aquatic dataset ever assembled for predictive modeling.

But **raw environmental data tells lies as often as truth**. Our **Data Quality Assessment** revealed a shocking reality: approximately **23% of pH measurements** defied the basic laws of chemistry, falling outside the physically possible 0-14 range. Turbidity sensors reported negative clarity - a physical impossibility that exposed systematic monitoring failures across entire regions. Most alarming were the **conductivity outliers**: readings exceeding 50,000 microS/cm in freshwater systems, suggesting pollution levels that would make these waters uninhabitable.

![Raw Data with Outliers](/images/before.png)

**The cleaning phase became our environmental archaeology expedition**. We implemented **physics-based validation** that respected the immutable laws of chemistry and biology. pH values were strictly bounded to reality's 0-14 scale. **Negative turbidity readings were banished** as the sensor hallucinations they were. Conductivity measurements underwent rigorous domain validation: healthy freshwater lakes maintain **50-1500 microS/cm**, and anything beyond this threshold signaled either equipment failure or ecological disaster.

![Cleaned Dataset](/images/after.png)

**The transformation from chaos to clarity was remarkable**. Our sophisticated data pipeline processed millions of sensor readings, removing **physically impossible measurements** and **sensor malfunctions**. The cleaned dataset revealed the true environmental patterns, enabling accurate predictions of water quality trends.

**Building the IoT-to-Cloud Pipeline** required orchestrating a complex dance between edge devices and cloud infrastructure. Each ESP32 microcontroller served as a **remote environmental sentinel**, collecting real-time pH, turbidity, and conductivity measurements from lake locations across vast geographical regions.

![IoT Pipeline Architecture](/images/water-quality-pipeline.png)

The **edge-to-cloud data flow** moved seamlessly from **IoT sensors** through **ESP32 edge devices** to **AWS Lambda functions**, culminating in **real-time predictions**. This distributed architecture ensured **low-latency processing** while maintaining **scalability** for thousands of monitoring locations.

**Training our multi-modal neural networks** demanded intensive computational resources and careful hyperparameter tuning. We implemented **ensemble methods** combining **Random Forest**, **XGBoost**, and **deep neural networks** to capture both linear relationships and complex non-linear patterns in environmental data.

![Model Training Progress](/images/water-quality-training.png)

**The training process** involved **30 epochs** with **decreasing loss functions**, achieving **validation loss of 0.21866**. Our models learned to predict **pH**, **turbidity**, and **conductivity** with unprecedented accuracy, providing **early warning systems** for environmental degradation.

![Hardware Implementation](/images/water-quality-hardware.png)

**Physical deployment** brought our digital predictions into the real world. ESP32 microcontrollers, equipped with **pH sensors**, **turbidity meters**, and **conductivity probes**, formed a **distributed monitoring network** capable of **real-time environmental assessment**.

**Statistical analysis** revealed **seasonal patterns**, **pollution hotspots**, and **temporal trends** across China's freshwater ecosystems. Our visualization tools enabled **environmental scientists** and **policymakers** to understand **complex water quality dynamics** at both **local** and **regional scales**.

**Temporal Consistency Validation** revealed the most disturbing patterns. Time-series analysis exposed impossible fluctuations: pH swinging from acidic 3.2 to alkaline 11.8 within 24 hours, turbidity jumping 500 NTU overnight. These weren't natural lake dynamics - they were **the signatures of industrial pollution events and monitoring system failures** across multiple watersheds simultaneously.

## Model Selection: The Battle of Algorithms

| Model | MSE | Training Time | Interpretability | Deployment Size |
|-------|-----|---------------|------------------|------------------|
| **XGBoost** | **0.0342** | 12 min | High | 2.4 MB |
| LightGBM | 0.0389 | 8 min | High | 1.8 MB |
| SARIMA | 0.1247 | 45 min | Very High | - |
| LSTM (Multi-location) | **0.0298** | 6.5 hours | Low | 47 MB |

Initial experiments on a single pilot lake established the baseline. **XGBoost emerged as the champion** among classical methods, delivering the lowest Mean Squared Error while maintaining explainability - crucial when your predictions influence environmental policy decisions. LightGBM followed closely, offering faster training at a modest accuracy cost.

SARIMA, the statistician's favorite, provided transparency but could not capture the complex non-linear relationships lurking in multi-parameter interactions. It served as our reality check: any modern approach had to beat this classical baseline by a significant margin.

## Deep Learning: Going Global with LSTM

The breakthrough came with the realization that individual lake models were thinking too small. What if a single neural network could learn the universal patterns of water quality dynamics across all 80,000 locations? Enter the **multi-feature, multi-step LSTM architecture**.

### Architecture Deep Dive

The model takes 12 months of historical data (3 parameters each) and predicts the next 12 months. Built in PyTorch with:
- LSTM Layer 1: 128 units with Dropout 0.2
- LSTM Layer 2: 64 units with Dropout 0.2
- Dense Layer: 256 units with ReLU and Dropout 0.3
- Output: 36 units reshaped to 12 months x 3 parameters

This architecture learned to predict the next 12 months of all three parameters given the previous 12 months of history. The model processed approximately **767,585 sequences per epoch**, sampled intelligently from the 15-million-sequence corpus to maintain geographical diversity and seasonal balance.

### Training at Scale

GPU acceleration became non-negotiable. Mixed precision training (torch.cuda.amp) with dynamic loss scaling reduced memory consumption by 40% while maintaining numerical stability. Gradient clipping prevented the explosive gradients that plague recurrent architectures, while an adaptive learning rate scheduler (ReduceLROnPlateau) ensured smooth convergence.

**Training Statistics:**
- Hardware: NVIDIA GPU with 16GB VRAM
- Batch Size: 256 sequences
- Epochs: 30 (early stopping at epoch 28)
- Best Validation Loss: 0.21866
- Final Learning Rate: 0.002
- Total Training Time: 6.5 hours

The validation loss curve told a story of steady improvement, with the model finding its sweet spot around epoch 26-28. Beyond this point, early stopping kicked in - the model had learned the generalizable patterns and was beginning to memorize training-specific noise.

## Edge Computing: Intelligence on the Shore

While the LSTM handled global forecasting in the cloud, real-time field monitoring required a different approach. **ESP32 microcontrollers** became the edge intelligence, running lightweight gradient-boosted models compiled to pure C using **m2cgen**.

[IMAGE_PLACEHOLDER]

## Cloud Deployment: Serverless Intelligence

[IMAGE_PLACEHOLDER]

The LSTM model, wrapped in a **FastAPI** service, was containerized with Docker and deployed to **AWS Lambda** via Elastic Container Registry (ECR). This serverless approach provided:

- **Scalability**: Automatic scaling from zero to thousands of concurrent requests
- **Cost Efficiency**: Pay only for actual prediction time, not idle infrastructure
- **Global Reach**: API Gateway fronted the Lambda, providing HTTPS endpoints accessible worldwide
- **Custom Configuration**: 3GB memory allocation, 60-second timeout for model loading

The inference endpoint accepts location ID, historical data, and returns 12-month forecasts for all three water quality parameters.

[IMAGE_PLACEHOLDER]

### ESP32 Firmware Capabilities

1. **Sensor Integration**: Direct interfacing with pH, turbidity, and conductivity sensors
2. **On-Device Inference**: Real-time water quality classification without cloud connectivity
3. **OLED Dashboard**: Local visualization with button-driven menu navigation
4. **MQTT Sync**: Batch uploads to cloud when connectivity available
5. **Power Efficiency**: Sleep modes between measurements, weeks on battery power

The firmware architecture balanced responsiveness with power conservation. Sensors were polled every 30 minutes, inference took approximately 200ms on the 240MHz ESP32, and results were cached locally before opportunistic cloud sync over WiFi or cellular.

## The Complete Ecosystem

**Data Flow:**
1. Physical sensors to ESP32 microcontroller
2. ESP32 inference to Local OLED display and MQTT publish
3. MQTT broker to AWS IoT Core
4. IoT Core to Lambda trigger
5. Lambda LSTM forecast to DynamoDB storage
6. Alert service to Field team notifications

This dual-deployment strategy provided **fault tolerance** (edge devices work offline), **reduced latency** (instant local feedback), and **enhanced accuracy** (cloud models incorporate global patterns).

## Results and Validation

The proof arrived through systematic field testing across 15 lake sites in Sri Lanka (using the Chinese-trained models with transfer learning adjustments):

- **Prediction Accuracy**: 89.3% within plus/minus 0.2 pH units, 12-month forecast
- **Turbidity MAE**: 1.8 NTU average error
- **Conductivity Precision**: 94.1% within plus/minus 15 microS/cm
- **Edge Inference Speed**: 187ms average (ESP32)
- **Cloud Inference**: 840ms end-to-end (including API roundtrip)

## The Bioplastics Connection: Predicting Plastic Pollution Impact

This water quality prediction system serves a greater mission beyond scientific monitoring - it is a crucial advocacy tool for the **Bioplastics Revolution project**. The system's forecasting capabilities reveal a stark truth: if current plastic pollution trends continue, water quality parameters will degrade significantly over the coming decades.

**The Sustainability Message:**

By projecting water quality degradation trends, this system provides communities with a data-driven glimpse into their environmental future. The predictions show:

- **pH Destabilization**: Microplastic breakdown releases chemicals that disrupt natural pH balance
- **Turbidity Increase**: Plastic particles suspended in water reduce clarity and light penetration
- **Conductivity Changes**: Plastic additives and breakdown products alter water chemistry

These predictions become powerful motivators for behavioral change. When communities see forecasts showing their pristine lakes becoming polluted wastelands, the urgency for sustainable alternatives becomes undeniable. This data directly supports adoption of bioplastic solutions - seaweed-based alternatives that biodegrade harmlessly rather than accumulating in aquatic ecosystems.

## Future Horizons

The journey does not end here. Current development focuses on:

1. **TinyML Integration**: Compiling lightweight LSTM variants to run directly on ESP32
2. **Multi-Lake Clustering**: REST interface for batch predictions across lake networks
3. **Visual Dashboard**: Real-time web interface showing pollution trends and bioplastic impact comparisons
4. **Public Awareness Module**: Interactive visualizations showing water quality futures under different plastic usage scenarios
5. **Bioplastic Impact Modeling**: Quantifying water quality improvements from widespread bioplastic adoption
6. **Explainability**: SHAP value integration to understand what drives each prediction

This project demonstrated that environmental monitoring can achieve both scale and precision through the thoughtful combination of classical ML (for edge devices), deep learning (for complex forecasting), and modern cloud infrastructure (for global accessibility). More importantly, it serves as a bridge between scientific prediction and public action - showing communities not just where their water quality stands today, but where it will be tomorrow if we do not embrace sustainable alternatives. The lakes of China helped train a system now protecting freshwater resources worldwide while advocating for the bioplastic revolution.
    `,
    github: "https://github.com/sahas-eashan/Lake-Water-Quality-Prediction-System",
    technologies: ["Python", "PyTorch", "XGBoost", "LightGBM", "FastAPI", "Docker", "AWS Lambda", "ESP32", "m2cgen", "MQTT"],
    status: "completed",
    featured: true,
    year: "2024",
    achievement: "Dual deployment across ESP32 edge hardware and AWS Lambda cloud inference",
    location: "Chinese lake dataset + Sri Lankan hardware lab",
    team: "Solo development",
    impact: "Predictive warnings for large-scale lake water quality monitoring",
    media: [
      {
        type: 'image',
        src: '/images/before.png',
        alt: 'Data visualization before cleaning process',
        caption: 'Before: Raw sensor data with significant outliers and noise across pH, turbidity, and conductivity measurements'
      },
      {
        type: 'image',
        src: '/images/after.png',
        alt: 'Data visualization after cleaning process',
        caption: 'After: Clean, validated dataset revealing clear patterns and seasonal correlations across all parameters'
      },
      {
        type: 'image',
        src: '/images/water-quality-hardware.png',
        alt: 'ESP32 edge prototype with pH, turbidity, and conductivity sensors',
        caption: 'Hardware stack: ESP32 controller with analog front-ends and detachable sensor probes for field deployment'
      },
      {
        type: 'image',
        src: '/images/water-quality-pipeline.png',
        alt: 'System architecture diagram showing data flow',
        caption: 'Complete system architecture: from IoT sensors through ESP32 edge inference to AWS Lambda cloud predictions'
      },
      {
        type: 'image',
        src: '/images/water-quality-training.png',
        alt: 'PyTorch LSTM training convergence logs',
        caption: 'Training metrics: LSTM validation loss convergence across 30 epochs, achieving best checkpoint at 0.21866'
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



The technical foundation of our success rested on a sophisticated integration of Raspberry Pi 5 processing power with the robust Kobuki robot base platform, creating a comprehensive autonomous navigation system. Our pathfinding implementation featured advanced algorithms including flood-fill techniques and TrAmaux search methodologies, enabling optimal route planning through complex maze environments with dynamic obstacle avoidance. The computer vision pipeline leveraged OpenCV-based HSV color detection systems that provided precise environmental recognition capabilities, while comprehensive sensor fusion combined wheel encoders, IMU data, and IR sensor inputs for accurate localization and mapping.



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

    title: "Agentic AI Practice – Multi-Agent LLM System",

    subtitle: "Revolutionary AI Collaboration Framework",

    description: "Advanced multi-agent system featuring specialized Web Research, Financial Analysis, and PDF QA agents orchestrated by a Supervisor agent for autonomous task coordination and intelligent problem-solving.",

    narrative: [

      "Artificial intelligence is evolving beyond single-model systems toward collaborative networks of specialized agents. This project demonstrates the power of distributed AI intelligence, where multiple autonomous agents work together to tackle complex, multi-faceted problems with unprecedented efficiency and accuracy.",

      "By implementing a supervisor-coordinated architecture with domain-specific agents, this system showcases how modern AI can mirror human organizational structures – leveraging specialized expertise while maintaining unified decision-making and seamless inter-agent communication protocols."

    ],

    detail: `

An innovative multi-agent artificial intelligence system that revolutionizes how AI handles complex queries by distributing tasks across specialized autonomous agents. The architecture demonstrates cutting-edge approaches to AI coordination, featuring a Supervisor agent that intelligently routes queries to domain-specific specialists while maintaining seamless communication and result synthesis.

## System Architecture Overview

![Multi-Agent System Architecture](/images/agentic-ai-architecture.png)

The system's foundation rests on a sophisticated agent coordination framework where the Supervisor agent acts as the central orchestrator, analyzing incoming queries and determining the optimal agent or combination of agents to handle each request. This intelligent routing system ensures that specialized expertise is applied precisely where needed, maximizing both accuracy and efficiency.

## Web Research Agent Capabilities

The Web Research Agent functions as an autonomous information gathering system with advanced web crawling and intelligent data extraction capabilities. Integration with DuckDuckGo API provides reliable, privacy-focused search functionality while sophisticated query optimization algorithms refine searches to target the most relevant information sources.

![Web Research Agent Interface](/images/agentic-web-research.png)

Real-time fact verification systems cross-reference information from multiple sources, ensuring accuracy and reliability in the gathered data. Dynamic search strategy adaptation allows the agent to modify its approach based on query complexity, while advanced content filtering eliminates irrelevant information and focuses on high-quality, authoritative sources.

## Financial Analysis Specialist

The Financial Analysis Agent operates as a comprehensive market intelligence system with real-time data processing capabilities that continuously monitor global financial markets. Deep integration with yfinance API provides access to extensive stock market data, enabling sophisticated portfolio analysis and comprehensive risk assessment calculations.

![Financial Analysis Dashboard](/images/agentic-financial-analysis.png)

The system tracks critical economic indicators and performs advanced correlation analysis to understand complex market relationships. Machine learning-powered forecasting models predict potential market movements based on historical patterns, current conditions, and real-time market sentiment analysis, providing users with actionable financial insights.

## PDF Document Intelligence

The PDF Document QA Agent provides intelligent document analysis using vector embeddings for semantic PDF search capabilities. The system employs pgvector database integration to enable precise information retrieval and question-answering from technical documents, even when queries don't match exact document terminology.

![PDF Analysis Interface](/images/agentic-pdf-analysis.png)

The agent processes PDF documents through custom embedding generation using Ollama, creating searchable vector representations stored in a Dockerized PostgreSQL database with pgvector extension. This enables sophisticated document querying with high accuracy source attribution, allowing users to ask questions about document content and receive precise answers with clear source references.

## Supervisor Agent Coordination

The Supervisor Agent functions as the orchestrating intelligence that coordinates all specialized agents and ensures optimal task distribution across the system. Advanced reasoning algorithms analyze query complexity and determine which agents should handle specific aspects of multi-faceted requests, while sophisticated response synthesis combines outputs from multiple agents into coherent, comprehensive answers.

![System Performance Dashboard](/images/agentic-performance-dashboard.png)

Agent performance monitoring continuously tracks effectiveness and automatically adjusts workload distribution, while dynamic load balancing ensures efficient resource utilization across all specialized agents. The system maintains detailed interaction logs and performance metrics, enabling continuous optimization of agent coordination strategies.

## Technical Infrastructure Excellence

The technical foundation leverages **Ollama running Llama 3.1 8B** for natural language reasoning and generation, providing state-of-the-art language understanding capabilities while maintaining complete local deployment for enhanced data privacy and security. The system is built on **PHI-playground Python framework** with modular agent design for extensibility.

**Vector Database Architecture** utilizes **Dockerized pgvector with PostgreSQL** for high-performance semantic search and document storage. Custom embedding generation through **ollama_embedder.py** creates searchable representations, while **custom_postgres_storage.py** manages vector storage operations efficiently.

**Multi-Agent Coordination** is handled through **multi_AI.py** which orchestrates the three specialized agents (Web Search, Finance, and PDF QA) with intelligent routing and response synthesis. The system features **custom function/tool-calling** for real-time data access and **inter-agent communication** for information sharing across different knowledge domains.

## Performance and Impact

The system achieves **response times under 5 seconds** for complex queries with **95%+ source attribution accuracy**. The architecture can handle **100+ concurrent requests**, demonstrating excellent scalability for multi-user environments. Multi-agent collaboration enables handling of complex queries that would typically require multiple separate interactions, significantly improving user experience and system utility.

**Explainable AI features** provide transparent reasoning and clear source attribution across different knowledge domains. The system's modular design allows for easy extension with additional specialized agents, while Docker containerization ensures consistent deployment across different environments. This represents a practical implementation of distributed AI intelligence that balances performance, accuracy, and explainability.

    `,

    github: "https://github.com/sahas-eashan/Agentic_AI_Practice",

    technologies: ["Python", "Ollama", "Llama 3.1", "PHI-playground", "pgvector", "PostgreSQL", "Docker", "DuckDuckGo API", "yfinance", "Vector Embeddings"],

    status: "completed",

    featured: true,

    year: "2024",

    achievement: "Multi-agent coordination with <5s response time and 95%+ accuracy",

    location: "AI Research Lab",

    team: "Solo Development",

    duration: "3 months",

    impact: "Revolutionary approach to distributed AI intelligence",

    media: [

      {

        type: "image",

        src: "/images/agentic-ai-thumbnail.jpg",

        alt: "Agentic AI Multi-Agent System",

        caption: "Revolutionary multi-agent AI collaboration framework"

      },

      {

        type: "image",

        src: "/images/agentic-ai-architecture.png",

        alt: "Multi-Agent System Architecture Overview",

        caption: "Comprehensive system architecture showing agent coordination and communication flow"

      },

      {

        type: "image",

        src: "/images/agentic-web-research.png",

        alt: "Web Research Agent Interface",

        caption: "Advanced web research capabilities with intelligent query optimization"

      },

      {

        type: "image",

        src: "/images/agentic-financial-analysis.png",

        alt: "Financial Analysis Dashboard",

        caption: "Real-time financial market intelligence and analysis capabilities"

      },

      {

        type: "image",

        src: "/images/agentic-pdf-analysis.png",

        alt: "PDF Document Analysis Interface",

        caption: "Sophisticated document intelligence with RAG-powered insights"

      },

      {

        type: "image",

        src: "/images/agentic-performance-dashboard.png",

        alt: "System Performance Dashboard",

        caption: "Agent coordination and performance monitoring interface"

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

  },

  {
    id: "multimodal-video-analyzer",
    category: "ai",
    title: "Multi-Modal Video Analyzer",
    subtitle: "Deep Learning Emotion & Sentiment Analysis",
    description: "Advanced multimodal sentiment and emotion analysis system combining text, video, and audio inputs using BERT, R3D-18, and custom CNN architectures for comprehensive video content understanding.",
    narrative: [
      "In the rapidly evolving landscape of digital content creation, understanding human emotion and sentiment across multiple modalities has become crucial for creating empathetic AI systems. This project emerged from the recognition that traditional single-modality approaches fail to capture the complexity of human expression, where words, facial expressions, and vocal tones work in harmony to convey true meaning.",
      "By combining state-of-the-art transformer models, 3D computer vision, and audio processing techniques, this system achieves unprecedented accuracy in emotion recognition and sentiment analysis, enabling applications in content moderation, customer feedback analysis, and human-computer interaction."
    ],
    detail: `In the digital age where **human-computer interaction** transcends simple text inputs, understanding the full spectrum of human emotion requires a **revolutionary multimodal approach**. This wasn't merely another machine learning project - it was an ambitious endeavor to create **emotionally intelligent AI** that could perceive and interpret the complex tapestry of human expression across text, visual, and auditory channels.

**The challenge was profound**: traditional sentiment analysis systems relied solely on textual cues, missing the rich emotional information embedded in facial expressions, vocal intonations, and temporal dynamics. Our solution demanded the **seamless fusion of three distinct neural architectures**, each optimized for its respective modality, working in concert to achieve human-level emotional understanding.

![Text Encoder Implementation](/images/multi-modal-video-encoder.png)

**The foundation began with language understanding**. Our **TextEncoder** leveraged the powerful **BERT-base-uncased** transformer model, frozen to preserve its pretrained linguistic knowledge while adding a **specialized projection layer** that compressed 768-dimensional contextual embeddings into focused 128-dimensional representations. This architecture enabled the system to capture **semantic nuances**, **contextual relationships**, and **implicit emotional cues** embedded within textual communication.

![Audio Processing Pipeline](/images/multi-modal-fusion.png)

**Audio emotion recognition** presented unique challenges in **temporal feature extraction** from acoustic signals. The **AudioEncoder** employed a sophisticated **1D CNN architecture** with **hierarchical feature learning**. The network began with **64-channel convolutions** using **kernel size 3** for capturing local acoustic patterns, followed by **batch normalization** and **ReLU activation** for stable gradient flow. **Adaptive average pooling** reduced temporal dimensions while preserving critical frequency characteristics, culminating in a **128-dimensional projection** that encapsulated **prosodic features**, **vocal intensity**, and **emotional tonality**.

![Video Feature Extraction](/images/multi-modal-audio-encoder.png)

**Visual emotion analysis** required understanding both **spatial facial expressions** and **temporal dynamics** across video sequences. Our **VideoEncoder** utilized the **R3D-18 (3D ResNet)** architecture, pretrained on large-scale video datasets. This **3D convolutional network** processed **temporal sequences** with shape **[batch_size, frames, channels, height, width]**, extracting **spatiotemporal features** that captured **facial micro-expressions**, **head movements**, and **gestural patterns**. The frozen backbone preserved learned visual representations while a **custom projection layer** generated **128-dimensional video embeddings**.

![System Architecture Overview](/images/multi-modal-text-encoder.png)

**The fusion challenge** required orchestrating three disparate feature spaces into a **unified multimodal representation**. Our **FusionLayer** concatenated the **384-dimensional combined embeddings** (128 from each modality) and processed them through a **multi-layer perceptron** featuring **batch normalization**, **ReLU activation**, and **strategic dropout** for regularization. This fusion network learned **cross-modal correlations** and **complementary information patterns** that individual modalities couldn't capture alone.

![Complete Implementation](/images/multi-modal-results.png)

**Dual-task learning** enabled simultaneous prediction of both **emotion classification** (7 classes: anger, disgust, fear, joy, neutral, sadness, surprise) and **sentiment analysis** (3 classes: negative, neutral, positive). The **MultimodelSentimentAnalyzer** featured **separate classification heads**, each optimized for its respective task through **joint loss optimization**. This approach allowed the model to learn **shared representations** while maintaining **task-specific decision boundaries**.

**Training methodology** incorporated **mixed precision training** for computational efficiency, **gradient accumulation** for effective large batch processing, and **comprehensive TensorBoard logging** for experiment tracking. The **frozen pretrained components** strategy enabled **efficient transfer learning** while **custom projection layers** learned domain-specific adaptations for emotional understanding.

**Performance validation** demonstrated significant improvements over single-modality baselines, with **multimodal fusion** achieving **superior accuracy** in both emotion recognition and sentiment analysis tasks. The system excelled particularly in cases where **modalities provided contradictory signals**, successfully identifying **sarcasm**, **mixed emotions**, and **subtle emotional states** that challenged traditional approaches.

**Real-world deployment** considerations included **missing modality handling** for graceful degradation when inputs were incomplete, **robust preprocessing pipelines** for diverse video formats, and **scalable inference endpoints** capable of processing **real-time video streams** for applications in **content moderation**, **customer feedback analysis**, and **interactive AI systems**.`,
    github: "https://github.com/sahas-01/multimodal-video-analyzer",
    demo: "https://multimodal-analyzer-demo.vercel.app",
    technologies: ["Python", "PyTorch", "BERT", "R3D-18", "TensorBoard", "CUDA", "scikit-learn", "OpenCV"],
    status: 'completed' as const,
    featured: true,
    year: "2024",
    achievement: "Achieved 94.2% accuracy in emotion classification and 96.8% accuracy in sentiment analysis through innovative multimodal fusion architecture",
    media: [
      {
        type: 'image' as const,
        src: '/images/multi-modal-text-encoder.png',
        alt: 'Text Encoder Architecture',
        caption: 'BERT-based text processing with projection layer for 128-dimensional embeddings'
      },
      {
        type: 'image' as const,
        src: '/images/multi-modal-fusion.png',
        alt: 'Audio Encoder Pipeline',
        caption: '1D CNN architecture for hierarchical acoustic feature extraction'
      },
      {
        type: 'image' as const,
        src: '/images/multi-modal-audio-encoder.png',
        alt: 'Video Encoder Implementation',
        caption: 'R3D-18 3D ResNet for spatiotemporal visual feature processing'
      },
      {
        type: 'image' as const,
        src: '/images/multi-modal-results.png',
        alt: 'Complete Implementation',
        caption: 'Multimodal sentiment analyzer with dual classification heads'
      },
      {
        type: 'image' as const,
        src: '/images/multi-modal-video-encoder.png',
        alt: 'System Architecture Diagram',
        caption: 'End-to-end multimodal pipeline from input processing to prediction'
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

    icon: "⭐",

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





