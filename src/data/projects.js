// src/data/projects.js

export const PROJECT_CATEGORIES = [
  { id: "robotics", label: "Robotics & Automation", icon: "🤖", accent: "from-cyan-500 to-blue-500" },
  { id: "cv", label: "Computer Vision", icon: "👁️", accent: "from-purple-400 to-cyan-500" },
  { id: "ai", label: "AI & Machine Learning", icon: "🧠", accent: "from-cyan-400 to-purple-400" },
  { id: "web", label: "Web Development", icon: "🌐", accent: "from-cyan-300 to-purple-400" },
  { id: "iot", label: "IoT & Embedded", icon: "🔬", accent: "from-purple-400 to-blue-500" },
  { id: "hardware", label: "Hardware & Electronics", icon: "⚡", accent: "from-yellow-400 to-cyan-400" },
  { id: "sustain", label: "Sustainability & Innovation", icon: "🌱", accent: "from-green-400 to-cyan-400" }
];

export const PROJECTS = [
  // --- Robotics ---
{
  id: "omni-robot",
  category: "robotics",
  title: "Omni-Directional Robot ",
  description: "Award-winning omnidirectional robot featuring custom PCB design, closed-loop control, A* path planning, and real-time web interface for precise indoor navigation.",
  detail: `
## Omni-Directional Robot with Mecanum Wheels

A cutting-edge omnidirectional robot platform that showcases the perfect fusion of **advanced hardware design**, **intelligent software control**, and **modern web technologies**. This comprehensive robotics project demonstrates expertise across embedded systems, PCB design, control theory, and full-stack development.

---

### **Project Highlights**
- **Competition-Ready Performance**: Engineered for EDR module with precision navigation capabilities
- **Custom Hardware**: 4-layer PCB design with professional-grade components and thermal management
- **Intelligent Control**: Dual-loop closed-loop motor control with real-time feedback
- **Modern Interface**: Web-based A* path planning and joystick control systems
- **Distributed Architecture**: RS485 communication with impedance-matched differential signaling

---

### **Core Technologies & Innovation**

#### **Mechanical Design Excellence**
- **Mecanum Wheel Drive System**: Enables true holonomic motion with 360° maneuverability
- **Modular Enclosure Design**: Custom-engineered housing with integrated dual cooling fans
- **Thermal Management**: Strategic airflow design ensuring optimal operating temperatures

#### **Advanced Motor Control System**
- **Cascaded Control Architecture**:
  - **Outer Velocity Loop**: 20Hz PI controller for precise speed regulation
  - **Inner Current Loop**: 10Hz PI controller for dynamic response optimization
- **Noise Filtration**: Moving average filter eliminates switching noise from motor drivers
- **Real-time Performance**: Timer interrupt-driven control loops ensure consistent timing

#### **Professional PCB Design**
- **4-Layer Stack-up**: Designed in Altium Designer following STM32 design guidelines
- **Signal Integrity**: Dedicated ground/power planes with EMC compliance
- **Robust Power Management**:
  - Dual power rails (24V motor, 7V logic, 3.3V MCU)
  - 1000μF decoupling for transient current handling
  - L7805 linear regulators with LD1117 low-dropout regulation
- **Industrial Connectivity**:
  - Dual VNH5019 Dagaya Pulse Duo motor drivers
  - JST-XH encoder interfaces for secure connections
  - Screw terminals for reliable motor connections
  - RJ-45 connector for main controller communication

---

### **Intelligent Software & Web Integration**

#### **A* Path Planning Web Application**
- **Interactive GUI**: Drag-and-drop path creation with visual feedback
- **Real-time Navigation**: Live robot tracking with obstacle avoidance
- **Algorithm Visualization**: Path optimization display with cost calculations
- **Responsive Design**: Modern web interface optimized for various devices

#### **Joystick Controller Interface**
- **Bluetooth Integration**: Wireless control with low-latency response
- **Live Telemetry**: Real-time feedback of robot status and sensor data
- **Intuitive Controls**: Smooth analog input with customizable sensitivity
- **Multi-platform Support**: Web-based controller accessible from any device

#### **Communication Architecture**
- **RS485 Differential Signaling**: Noise-immune long-distance communication
- **Bluetooth Connectivity**: Seamless wireless integration with web applications
- **Protocol Optimization**: Efficient data packet structure for real-time control
- **Error Handling**: Robust communication with automatic retry mechanisms

---

### **Technical Specifications**

#### **Core Processing & Control**
- **Microcontroller**: STM32F446RE - 180MHz ARM Cortex-M4 with FPU
- **Motor Drivers**: Dual VNH5019 - Dagaya Pulse Duo configuration  
- **Control Frequency**: Dual-loop system - 20Hz velocity loop, 10Hz current loop
- **Feedback System**: Quadrature encoders - Real-time position and velocity sensing

#### **Power & Communication Systems**
- **Power Architecture**: Multi-rail design - 24V motor / 7V logic / 3.3V MCU
- **Primary Communication**: Dual RS485 - Differential signaling with impedance matching
- **Wireless Control**: Bluetooth - Low-latency web interface integration
- **Connectivity**: Industrial grade - JST-XH encoders, RJ-45 main controller

#### **Mechanical & Thermal Design**
- **Drive System**: Mecanum wheels - True omnidirectional movement capability
- **Enclosure**: Custom modular design - Integrated dual cooling fan system
- **Thermal Management**: Active cooling - Strategic airflow for optimal temperatures
- **PCB Design**: 4-layer professional - Altium Designer, EMC compliant

#### **Software & Interface Features**
- **Path Planning**: A* algorithm - Web-based interactive navigation
- **Manual Control**: Bluetooth joystick - Real-time telemetry and control
- **Data Processing**: Moving average filters - Noise reduction and signal conditioning
- **Real-time Operation**: Timer interrupts - Consistent control loop timing

---


### **Impact & Applications**

This project demonstrates mastery of:
- **Embedded Systems Design**: From concept to working prototype
- **Control Systems Engineering**: Advanced feedback control implementation
- **PCB Design & Manufacturing**: Professional-grade hardware development
- **Full-Stack Development**: Modern web technologies for robot control
- **System Integration**: Seamless hardware-software interaction

**Perfect for applications in:**
- Industrial automation and material handling
- Research and educational robotics platforms
- Autonomous navigation systems
- IoT and smart manufacturing environments

---

*This project represents the intersection of mechanical engineering, embedded systems, and modern software development—showcasing the complete product development lifecycle from initial concept to functional prototype.*
`,
  github: "https://github.com/sahas-eashan/OmniDirectionalRobot-EN2160",
  media: [
    {
      type: "image",
      src: `${import.meta.env.BASE_URL}public/omni1.jpg`,
      alt: "Bluetooth Joystick Web Controller - Real-time Robot Control Interface"
    },
    {
      type: "image",
      src: `${import.meta.env.BASE_URL}public/omni3.jpg`,
      alt: "Bluetooth Joystick Web Controller - Real-time Robot Control Interface"
    },
    {
      type: "image",
      src: `${import.meta.env.BASE_URL}public/omni2.PNG`,
      alt: "Bluetooth Joystick Web Controller - Real-time Robot Control Interface"
    },
    {
      type: "image",
      src: `${import.meta.env.BASE_URL}public/omni4.jpg`,
      alt: "Bluetooth Joystick Web Controller - Real-time Robot Control Interface"
    },
        {
      type: "image",
      src: `${import.meta.env.BASE_URL}public/omniweb.jpg`,
      alt: "Bluetooth Joystick Web Controller - Real-time Robot Control Interface"
    },
    {
      type: "video",
      src: `${import.meta.env.BASE_URL}public/omni_vid.mp4`,
      alt: "Omni-Directional Robot Live Demonstration - Navigation and Control Systems"
    }
  ]
},
  {
  id: "robogames-2024",
  category: "robotics",
  title: "IESL RoboGames 2024 ",
  description: "Award-winning entry for autonomous navigation using Webots simulation and real-world Kobuki robots. Integrated advanced pathfinding, computer vision, and sensor fusion for robust robotics solutions.",
  detail: `
## IESL RoboGames 2024 – University Category

A national robotics challenge where I led technical development and hands-on implementation from simulation to real-world robotics—culminating in a **2nd Runner-Up finish**.

---

### **Competition Overview**

The RoboGames 2024 featured multi-stage, multi-round challenges:
- **Completion Round (Webots Simulation):** E-puck robot navigating a 2.5m × 2.5m maze, visiting colored walls in a specific sequence.
- **Elimination Round:** Larger 5m × 5m maze with hazardous zones (fire pits), survivor rescue (locating green squares), and advanced mapping.
- **Finals (Physical Robot):** Transitioned to a real-world Kobuki robot platform, requiring real-time vision and sensor-based autonomy.

---

### **Technical Contributions & Solutions**

#### **Completion Round**
- Developed a **flood-fill algorithm** for efficient maze pathfinding, ensuring the robot could robustly reach colored walls from any starting position.
- Optimized low-level robot controls for precise navigation and minimal collision.

#### **Elimination Round**
- Implemented **Trémaux Search** and **Depth-First Search (DFS)** algorithms for complex maze exploration and survivor (target) localization.
- Designed return-to-base logic for safe completion after rescue tasks.

#### **Finals (Physical Kobuki Robot)**
- Built robust, real-time **OpenCV-based computer vision** pipeline:
  - Color detection with HSV conversion, masking, and contour analysis.
  - Adaptive filtering for reliable detection under varied lighting.
- **Sensor fusion**: Integrated data from wheel encoders, IMU, and IR sensors for accurate localization and obstacle avoidance.
- Developed autonomous routines for **perception, planning, and action** using onboard vision and sensor data.

---

### **Impact & Achievements**
- **2nd Runner-Up** in a highly competitive university robotics field.
- Demonstrated ability to bridge simulation algorithms to real-world robotic platforms.
- Gained hands-on experience with:
  - Embedded system integration,
  - Vision-based robotics (OpenCV),
  - Sensor-driven navigation,
  - Translating theoretical logic to practical, robust engineering.

> *"The RoboGames 2024 experience deepened my expertise in autonomous robotics, sensor fusion, and real-world systems development."*

---

### 📸 **Project Media**
Photos from the IESL Robogames, workshops, and the final robot setup.

---

  `,
  github: "https://github.com/sahas-eashan/BB-Alr-8",
  media: [
  {
    type: "image",
    src: `${import.meta.env.BASE_URL}public/robo1.jpg`,
    alt: "RoboGames Team and Robot - 1"
  },
  {
    type: "image",
    src: `${import.meta.env.BASE_URL}public/robo2.jpg`,
    alt: "RoboGames Team and Robot - 2"
  },
  {
    type: "image",
    src: `${import.meta.env.BASE_URL}public/robo3.jpg`,
    alt: "RoboGames Workshop/Session"
  },
  {
    type: "image",
    src: `${import.meta.env.BASE_URL}public/robo4.jpg`,
    alt: "Maze Completion - E-puck Simulation"
  },
  {
    type: "image",
    src: `${import.meta.env.BASE_URL}public/robo5.jpg`,
    alt: "Final Round Preparation"
  },
  {
    type: "image",
    src: `${import.meta.env.BASE_URL}public/robo6.jpg`,
    alt: "Kobuki Robot in Action"
  },
  {
    type: "image",
    src: `${import.meta.env.BASE_URL}public/robo7.png`,
    alt: "Team Collaboration at RoboGames"
  },
  {
    type: "image",
    src: `${import.meta.env.BASE_URL}public/robo8.jpg`,
    alt: "RoboGames - Award Ceremony"
  },
  // YouTube video link as external resource (embed if supported, or provide as external link)
  {
    type: "video",
    src: "https://www.youtube.com/watch?v=kNw_bI8qk0k&embeds_referring_euri=https%3A%2F%2Fwww.pankajabalasooriya.me%2F&source_ve_path=OTY3MTQ",
    alt: "RoboGames 2024 – Finals Demonstration Video"
  }

  ]
},

 {
  id: "robotic-design",
  category: "robotics",
  title: "Robotic Design Project",
  description: "A fully autonomous modular robot built for EN2533 competition. Capable of line following, maze solving, box manipulation, color and dashed line tracking, portal navigation, coin drop, and more. All hardware, control, and mechanics are custom designed.",
  detail: `
## Robotic Design Project - EN2533

This project focused on designing and building a robot capable of performing a **diverse set of autonomous tasks** in a competitive environment. Developed for the EN2533 - Robot Design and Competition module, the robot features a **modular architecture** and a custom-designed SolidWorks chassis, enabling sequential execution of complex tasks.

---

### 🚀 **Key Features**

- **Line Navigation:** IR sensor arrays and color sensors for robust path following.
- **Bar Counting:** Detects and counts horizontal bars along the path using encoders and IR sensors.
- **Maze Navigation:** Navigates a physical maze with survivor rescue and box manipulation objectives.
- **Box Arrangement:** Custom robot arm (SolidWorks design) with gripper and rack-pinion mechanism powered by servo motors. Capable of sorting boxes by height, detected using a Sharp IR sensor.
- **Color Line & Dashed Line Following:** Combines TCS34725 color sensor and TCRT5000 IR array for color and dashed line tracking.
- **Portal & Chamber Navigation:** ToF and ultrasonic sensors for portal/doorway detection and chamber insertion tasks.
- **Coin Drop Mechanism:** Detects uneven terrain and wall proximity to accurately drop a coin on a target.
- **Comprehensive Task Sequencing:** Adapts to sensor input and task outcomes, integrating all subsystems for smooth operation.

---

### 🛠️ **Design Overview**

- **Sensors:** Ultrasonic, Sharp IR (for distance/height), TCS34725 color sensor, REKHA TCRT5000 IR array.
- **Actuators:** MG90S servos for robotic arm and gripper; JGA25-370 DC motors for wheel drive.
- **Microcontroller:** Arduino Mega 2560 for all system control, sensor fusion, and motion routines.
- **Chassis:** Dual-layer acrylic board, custom SolidWorks arm, gripper, rack-and-pinion for linear actuation.
- **Mechanics:** Compact, robust, with modular mounting for easy task switching.

---

### 📊 **Algorithms & Task Logic**

- **Line Following:** Calibrated REKHA array with feedback control; color verification with TCS34725.
- **Bar Counting:** Encoders and IR sensors; real-time duration tracking to differentiate barcodes.
- **Maze Navigation:** Hardcoded optimal path with sensor-based correction (PD control, encoders).
- **Box Sorting:** Height measured via Sharp IR sensor; sorting order based on detected color.
- **Portal/Chamber Navigation:** ToF sensor for distance monitoring, ultrasonic for obstacle avoidance.
- **Coin Drop:** Terrain and wall detection; precise mechanism for task completion.

---

### 👨‍💻 **Team & Responsibilities**

- **Eshan S.G.S:** Maze-solving, line following, tasks 2, 3, 4, 8; testing and integration.
- **Manawadu M.D:** Arm/chassis design, box arrangement algorithms, tasks 6, 7.
- **Wickramasinghe S.D:** Power circuit, assembly, task 1, coin drop.
- **Gunasekara V.G.V:** SolidWorks arm/chassis design, coding for tasks 6, 7.
- **Ravishan B.B.N:** Circuit design, assembly, portal navigation (task 5), testing.

---

### 📸 **Project Media**

Below are selected images of the robot, mechanisms, and competition action.  

---

  `,
  github: "https://github.com/sahas-eashan/Robotic-Design-Project",
media: [
  {
    type: "image",
    src: `${import.meta.env.BASE_URL}public/robotic1.jpg`,
    alt: "Robotic Design Project - Overview"
  },
  {
    type: "image",
    src: `${import.meta.env.BASE_URL}public/robotic2.jpg`,
    alt: "Robotic Design Project - Closeup"
  },
  {
    type: "image",
    src: `${import.meta.env.BASE_URL}public/robotic3.jpg`,
    alt: "Robotic Design Project - Task Execution"
  },
  {
    type: "video",
    src: `${import.meta.env.BASE_URL}public/robotic_demo.mp4`,
    alt: "Robotic Design Project - Competition Demo"
  }
]

}
,
{
  id: "micromouse",
  category: "robotics",
  title: "MicroMouse ",
  description: "Autonomous maze-solving robot using STM32, floodfill pathfinding, dual PID control, and real-time sensor feedback.",
  detail: `
## MicroMouse V1 2023 – SLIIT Robofest

As **Team PulzTrones** (Sahas Eashan, Pankaja Balasooriya, Chamath Diunugala, Banuka Liyanage, Chandupa Dineshara, and Yehen Asuramuni), we tackled the university-level SLIIT Robofest 2024 MicroMouse challenge!

---

### **Technical Highlights**

- **STM32-Based Control:**  
  The robot’s brain is an STM32 microcontroller, providing real-time responsiveness and robust embedded performance.
- **Floodfill Pathfinding Algorithm:**  
  Implemented a classic floodfill algorithm for dynamic and efficient maze exploration.
- **Dual PID Controllers:**  
  - **Encoder PID:** Ensures smooth, precise wheel velocity and movement.
  - **Sensor PID:** Dynamically adjusts course based on live sensor input.
- **Sensors:**  
  - **SharpIR distance sensors** for accurate wall and obstacle detection.
  - **Motor encoders** for closed-loop position and speed feedback.

---

### **Project Experience**

- **Real-Time Feedback:**  
  Tuned both motor and sensor PID loops to allow adaptive path correction and stable turns, crucial for traversing complex mazes.
- **Agile Navigation:**  
  The robot could dynamically adjust its path, improving with each attempt as it learned the maze.
- **Team Collaboration:**  
  Every team member contributed to code, hardware tuning, and testing—growing together as robotics engineers.

---

### **Outcome**

While our micromouse didn’t fully solve the final maze, it came impressively close!  
The journey taught us invaluable lessons in embedded control, sensor integration, and real-world problem solving. We’re excited to keep building on these skills for future robotics challenges.

---
  `,
  github: "https://github.com/sahas-eashan/MicroMouseV1_2023",
  media: [
    {
      type: "image",
      src: `${import.meta.env.BASE_URL}public/mouse.jpg`,  // <-- Your mouse mascot here
      alt: "MicroMouse Mascot"
    },
    {
      type: "video",
      src: `${import.meta.env.BASE_URL}public/mouse_demo.mp4`,
      alt: "MicroMouse SLIIT Robofest 2024 Demo"
    }
  ]
}
,
  {
  id: "fastline-follower",
  category: "robotics",
  title: "FastLine Follower",
  description: "High-speed line follower, advanced sensor array, dynamic PID control.",
  detail: `
## FastLine Follower – Dextron 2024, ITUM

Excited to share this achievement!  
I had the opportunity to participate in the **Fast Line-Following Robot Challenge (Dextron 2024)**, organized by the Institute of Technology, University of Moratuwa (ITUM). It was an incredible journey as my team made it to the finals!

I want to extend my heartfelt thanks to my amazing teammates **Anjana Viduranga, Sanuda Nanayakkara, and Kavin Gunasekara** for their hard work, collaboration, and dedication throughout this challenge. Special thanks to **Sanjula Gathsara ayya** for their guidance and support, which was instrumental in our success.

---

### Technical Highlights

- **Dynamic PID Control:** Ensured precise speed and trajectory at high velocities.
- **Advanced Sensor Array:** Enabled accurate detection of complex lines, turns, and intersections.
- **Real-Time Path Prediction:** Adaptive path planning allowed the robot to handle rapid course changes and obstacles.
- **Robust Mechanical & Electronic Design:** Engineered for speed and reliability under competition conditions.

---

This experience strengthened my problem-solving, teamwork, and technical skills. I’m looking forward to more challenges in robotics and innovation!

`,
  github: "https://github.com/sahas-eashan/speed-obo-robotics-team-gen3",
  media: [
    {
      type: "image",
      src: `${import.meta.env.BASE_URL}public/speed.jpg`,
      alt: "FastLine Follower - Competition Ready"
    },
    {
      type: "image",
      src: `${import.meta.env.BASE_URL}public/speed2.jpg`,
      alt: "FastLine Follower - Team Collaboration"
    },
    {
      type: "image",
      src: `${import.meta.env.BASE_URL}public/speed3.jpg`,
      alt: "FastLine Follower - Sensor Array Closeup"
    },
    {
      type: "image",
      src: `${import.meta.env.BASE_URL}public/speed4.jpg`,
      alt: "FastLine Follower - On the Track"
    }
  ]
},
,

  // --- Computer Vision ---
  {
    id: "robogames-cv",
    category: "cv",
    title: "RoboGames Computer Vision System",
    description: "Computer vision pipeline using Kinect for real-time color and object detection.",
    detail: "Sophisticated computer vision pipeline using Kinect for color matching, HSV detection, robust under various lighting, autonomous manipulation.",
    media: [
      {
        type: "image",
        src: `${import.meta.env.BASE_URL}assets/robogames_cv.jpg`,
        alt: "RoboGames Computer Vision System"
      }
    ]
  },

  // --- AI ---
  {
    id: "agentic-ai",
    category: "ai",
    title: "Agentic AI Practice",
    description: "Multi-agent AI systems, web search/finance/PDF agents, advanced orchestration.",
    detail: "AI agents for web search, finance, PDF analysis. Multi-agent collab, orchestration, NLP.",
    github: "https://github.com/sahas-eashan/Agentic_AI_Practice",
    media: [
      {
        type: "image",
        src: `${import.meta.env.BASE_URL}assets/agentic_ai.jpg`,
        alt: "Agentic AI Practice"
      }
    ]
  },

  // --- Web ---
  {
    id: "bioplastics-website",
    category: "web",
    title: "Bioplastics Revolution Website",
    description: "React-based site for Bioplastics project: modern UI, responsive, interactive.",
    detail: "Showcases sustainable marine plastic solutions and seaweed-based biodegradable products. Responsive React + UI/UX.",
    github: "https://github.com/sahas-eashan/WEB_bioplastics_revolution_",
    media: [
      {
        type: "image",
        src: `${import.meta.env.BASE_URL}assets/bioplastics_web.jpg`,
        alt: "Bioplastics Revolution Website"
      }
    ]
  },

  // --- IoT ---
  {
    id: "esp32-medibox",
    category: "iot",
    title: "ESP32 Medibox Simulation – EN2853",
    description: "ESP32 Medibox: reminders, environmental monitoring, notifications.",
    detail: "ESP32-based Medibox: medicine reminders, temp/humidity, alerts via display & push notification.",
    github: "https://github.com/sahas-eashan/ESP32-Medibox-Project---EN2853",
    media: [
      {
        type: "image",
        src: `${import.meta.env.BASE_URL}assets/esp32_medibox.jpg`,
        alt: "ESP32 Medibox Simulation"
      }
    ]
  },
  {
    id: "shoe-cleaner",
    category: "iot",
    title: "Shoe Cleaning and Drying Machine",
    description: "Arduino, custom PCB, fully-automated shoe cleaning/drying.",
    detail: "Automated machine with custom PCB, Arduino, enclosure. Streamlined footwear maintenance.",
    github: "https://github.com/sahas-eashan/Shoe-Cleaning-and-Drying-Machine--Engineering_Design_Project",
    media: [
      {
        type: "image",
        src: `${import.meta.env.BASE_URL}assets/shoe_cleaner.jpg`,
        alt: "Shoe Cleaning and Drying Machine"
      }
    ]
  },

  // --- Hardware ---
  {
    id: "linear-psu",
    category: "hardware",
    title: "Linear Power Supply Design",
    description: "10V 10A linear PSU: advanced voltage regulation, dual-layer PCB.",
    detail: "Designed a precision 10V/10A PSU with current limiting, protection, simulation, thermal management.",
    media: [
      {
        type: "image",
        src: `${import.meta.env.BASE_URL}assets/psu.jpg`,
        alt: "Linear Power Supply Design"
      }
    ]
  },

  // --- Sustainability ---
  {
    id: "bioplastic-revo",
    category: "sustain",
    title: "Bioplastic Revolution – Ocean's Gift",
    description: "Biodegradable cling films and bags from Sri Lankan seaweed.",
    detail: "Initiative to combat marine plastic pollution with innovative bioplastics, seaweed farming, marine pollution tracking.",
    github: "https://github.com/sahas-eashan/Bioplastic-Revolution",
    media: [
      {
        type: "image",
        src: `${import.meta.env.BASE_URL}assets/bioplastics.jpg`,
        alt: "Bioplastic Revolution – Ocean's Gift"
      }
    ]
  }
];
