// src/data/projects.js

export const PROJECT_CATEGORIES = [
  { id: "robotics", label: "Robotics & Automation", icon: "", accent: "from-cyan-500 to-blue-500" },
  { id: "cv", label: "Computer Vision", icon: "i ", accent: "from-purple-400 to-cyan-500" },
  { id: "ai", label: "AI & Machine Learning", icon: " ", accent: "from-cyan-400 to-purple-400" },
  { id: "web", label: "Web Development", icon: "", accent: "from-cyan-300 to-purple-400" },
  { id: "iot", label: "IoT & Embedded", icon: "", accent: "from-purple-400 to-blue-500" },
  { id: "hardware", label: "Hardware & Electronics", icon: "a", accent: "from-yellow-400 to-cyan-400" },
  { id: "sustain", label: "Sustainability & Innovation", icon: "", accent: "from-green-400 to-cyan-400" }
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
- **Mecanum Wheel Drive System**: Enables true holonomic motion with 360A degrees maneuverability
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
  - 1000I14F decoupling for transient current handling
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

*This project represents the intersection of mechanical engineering, embedded systems, and modern software developmentashowcasing the complete product development lifecycle from initial concept to functional prototype.*
`,
  github: "https://github.com/sahas-eashan/OmniDirectionalRobot-EN2160",
  media: [
    {
      type: "image",
      src: `${import.meta.env.BASE_URL}omni1.jpg`,
      alt: "Bluetooth Joystick Web Controller - Real-time Robot Control Interface"
    },
    {
      type: "image",
      src: `${import.meta.env.BASE_URL}omni3.jpg`,
      alt: "Bluetooth Joystick Web Controller - Real-time Robot Control Interface"
    },
,
    {
      type: "image",
      src: `${import.meta.env.BASE_URL}omni4.jpg`,
      alt: "Bluetooth Joystick Web Controller - Real-time Robot Control Interface"
    },
        {
      type: "image",
      src: `${import.meta.env.BASE_URL}omniweb.jpg`,
      alt: "Bluetooth Joystick Web Controller - Real-time Robot Control Interface"
    },
    {
      type: "video",
      src: `${import.meta.env.BASE_URL}omni_vid.mp4`,
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
## IESL RoboGames 2024 a University Category

A national robotics challenge where I led technical development and hands-on implementation from simulation to real-world roboticsaculminating in a **2nd Runner-Up finish**.

---

### **Competition Overview**

The RoboGames 2024 featured multi-stage, multi-round challenges:
- **Completion Round (Webots Simulation):** E-puck robot navigating a 2.5m A 2.5m maze, visiting colored walls in a specific sequence.
- **Elimination Round:** Larger 5m A 5m maze with hazardous zones (fire pits), survivor rescue (locating green squares), and advanced mapping.
- **Finals (Physical Robot):** Transitioned to a real-world Kobuki robot platform, requiring real-time vision and sensor-based autonomy.

---

### **Technical Contributions & Solutions**

#### **Completion Round**
- Developed a **flood-fill algorithm** for efficient maze pathfinding, ensuring the robot could robustly reach colored walls from any starting position.
- Optimized low-level robot controls for precise navigation and minimal collision.

#### **Elimination Round**
- Implemented **TrAmaux Search** and **Depth-First Search (DFS)** algorithms for complex maze exploration and survivor (target) localization.
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

###   **Project Media**
Photos from the IESL Robogames, workshops, and the final robot setup.

---

  `,
  github: "https://github.com/sahas-eashan/BB-Alr-8",
  media: [
  {
    type: "image",
    src: `${import.meta.env.BASE_URL}robo1.jpg`,
    alt: "RoboGames Team and Robot - 1"
  },
  {
    type: "image",
    src: `${import.meta.env.BASE_URL}robo2.jpg`,
    alt: "RoboGames Team and Robot - 2"
  },
  {
    type: "image",
    src: `${import.meta.env.BASE_URL}robo3.jpg`,
    alt: "RoboGames Workshop/Session"
  },
  {
    type: "image",
    src: `${import.meta.env.BASE_URL}robo4.jpg`,
    alt: "Maze Completion - E-puck Simulation"
  },
  {
    type: "image",
    src: `${import.meta.env.BASE_URL}robo5.jpg`,
    alt: "Final Round Preparation"
  },
  {
    type: "image",
    src: `${import.meta.env.BASE_URL} robo6.jpg`,
    alt: "Kobuki Robot in Action"
  },
  {
    type: "image",
    src: `${import.meta.env.BASE_URL}robo7.png`,
    alt: "Team Collaboration at RoboGames"
  },
  {
    type: "image",
    src: `${import.meta.env.BASE_URL} robo8.jpg`,
    alt: "RoboGames - Award Ceremony"
  },
  // YouTube video link as external resource (embed if supported, or provide as external link)
  {
    type: "video",
    src: "https://www.youtube.com/watch?v=kNw_bI8qk0k&embeds_referring_euri=https%3A%2F%2Fwww.pankajabalasooriya.me%2F&source_ve_path=OTY3MTQ",
    alt: "RoboGames 2024 a Finals Demonstration Video"
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

###  **Key Features**

- **Line Navigation:** IR sensor arrays and color sensors for robust path following.
- **Bar Counting:** Detects and counts horizontal bars along the path using encoders and IR sensors.
- **Maze Navigation:** Navigates a physical maze with survivor rescue and box manipulation objectives.
- **Box Arrangement:** Custom robot arm (SolidWorks design) with gripper and rack-pinion mechanism powered by servo motors. Capable of sorting boxes by height, detected using a Sharp IR sensor.
- **Color Line & Dashed Line Following:** Combines TCS34725 color sensor and TCRT5000 IR array for color and dashed line tracking.
- **Portal & Chamber Navigation:** ToF and ultrasonic sensors for portal/doorway detection and chamber insertion tasks.
- **Coin Drop Mechanism:** Detects uneven terrain and wall proximity to accurately drop a coin on a target.
- **Comprehensive Task Sequencing:** Adapts to sensor input and task outcomes, integrating all subsystems for smooth operation.

---

###  i  **Design Overview**

- **Sensors:** Ultrasonic, Sharp IR (for distance/height), TCS34725 color sensor, REKHA TCRT5000 IR array.
- **Actuators:** MG90S servos for robotic arm and gripper; JGA25-370 DC motors for wheel drive.
- **Microcontroller:** Arduino Mega 2560 for all system control, sensor fusion, and motion routines.
- **Chassis:** Dual-layer acrylic board, custom SolidWorks arm, gripper, rack-and-pinion for linear actuation.
- **Mechanics:** Compact, robust, with modular mounting for easy task switching.

---

###  **Algorithms & Task Logic**

- **Line Following:** Calibrated REKHA array with feedback control; color verification with TCS34725.
- **Bar Counting:** Encoders and IR sensors; real-time duration tracking to differentiate barcodes.
- **Maze Navigation:** Hardcoded optimal path with sensor-based correction (PD control, encoders).
- **Box Sorting:** Height measured via Sharp IR sensor; sorting order based on detected color.
- **Portal/Chamber Navigation:** ToF sensor for distance monitoring, ultrasonic for obstacle avoidance.
- **Coin Drop:** Terrain and wall detection; precise mechanism for task completion.

---

###  a **Team & Responsibilities**

- **Eshan S.G.S:** Maze-solving, line following, tasks 2, 3, 4, 8; testing and integration.
- **Manawadu M.D:** Arm/chassis design, box arrangement algorithms, tasks 6, 7.
- **Wickramasinghe S.D:** Power circuit, assembly, task 1, coin drop.
- **Gunasekara V.G.V:** SolidWorks arm/chassis design, coding for tasks 6, 7.
- **Ravishan B.B.N:** Circuit design, assembly, portal navigation (task 5), testing.

---

###   **Project Media**

Below are selected images of the robot, mechanisms, and competition action.  

---

  `,
  github: "https://github.com/sahas-eashan/Robotic-Design-Project",
media: [
  {
    type: "image",
    src: `${import.meta.env.BASE_URL}robotic1.jpg`,
    alt: "Robotic Design Project - Overview"
  },
  {
    type: "image",
    src: `${import.meta.env.BASE_URL} robotic2.jpg`,
    alt: "Robotic Design Project - Closeup"
  },
  {
    type: "image",
    src: `${import.meta.env.BASE_URL}robotic3.jpg`,
    alt: "Robotic Design Project - Task Execution"
  },
  {
    type: "video",
    src: `${import.meta.env.BASE_URL}robotic_demo.mp4`,
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
## MicroMouse V1 2023 a SLIIT Robofest

As **Team PulzTrones** (Sahas Eashan, Pankaja Balasooriya, Chamath Diunugala, Banuka Liyanage, Chandupa Dineshara, and Yehen Asuramuni), we tackled the university-level SLIIT Robofest 2024 MicroMouse challenge!

---

### **Technical Highlights**

- **STM32-Based Control:**  
  The robotas brain is an STM32 microcontroller, providing real-time responsiveness and robust embedded performance.
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
  Every team member contributed to code, hardware tuning, and testingagrowing together as robotics engineers.

---

### **Outcome**

While our micromouse didnat fully solve the final maze, it came impressively close!  
The journey taught us invaluable lessons in embedded control, sensor integration, and real-world problem solving. Weare excited to keep building on these skills for future robotics challenges.

---
  `,
  github: "https://github.com/sahas-eashan/MicroMouseV1_2023",
  media: [
    {
      type: "image",
      src: `${import.meta.env.BASE_URL}mouse.jpg`,  // <-- Your mouse mascot here
      alt: "MicroMouse Mascot"
    },
    {
      type: "video",
      src: `${import.meta.env.BASE_URL}mouse.mp4`,
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
## FastLine Follower a Dextron 2024, ITUM

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

This experience strengthened my problem-solving, teamwork, and technical skills. Iam looking forward to more challenges in robotics and innovation!

`,
  github: "https://github.com/sahas-eashan/speed-obo-robotics-team-gen3",
  media: [
    {
      type: "image",
      src: `${import.meta.env.BASE_URL}speed.jpg`,
      alt: "FastLine Follower - Competition Ready"
    },
    {
      type: "image",
      src: `${import.meta.env.BASE_URL}speed2.jpg`,
      alt: "FastLine Follower - Team Collaboration"
    },
    {
      type: "image",
      src: `${import.meta.env.BASE_URL}speed3.jpg`,
      alt: "FastLine Follower - Sensor Array Closeup"
    },
    {
      type: "image",
      src: `${import.meta.env.BASE_URL}speed4.jpg`,
      alt: "FastLine Follower - On the Track"
    }
  ]
},
,

  // --- Computer Vision ---
{
  id: "robogames-cv",
  category: "cv",
  title: "RoboGames 2024 a Computer Vision System",
  description: "Robust OpenCV-based real-time vision for autonomous robotics: color detection, object recognition, and sensor fusion.",
  detail: `
## RoboGames 2024 a Computer Vision & Perception

The computer vision subsystem was a core enabler of our RoboGames 2024 robotas autonomy. We engineered a real-time visual perception pipeline to identify, localize, and interact with task-specific objects using classical vision techniquesaintegral to high-stakes navigation and decision making.

---

###  **Vision System Features**

- **Real-Time Color Detection:**  
  OpenCV-based HSV color-space filtering to reliably isolate and detect target colors (walls, survivors, hazards) across changing lighting.
- **Object Recognition & Localization:**  
  Contour extraction and bounding box analysis to determine positions of colored objectsaused for goal navigation, survivor detection, and interaction triggers.
- **Adaptive Filtering:**  
  Morphological operations and dynamic thresholding for noise reduction, maintaining accuracy under competitive arena lighting.
- **Sensor Fusion:**  
  Combined camera vision results with feedback from IMU, wheel encoders, and IR sensors to improve localization, orientation, and obstacle avoidance.
- **Autonomous Integration:**  
  Vision system outputs were directly linked to the robotas finite state machine, activating behaviors like:
  - Navigating to colored targets (walls)
  - Identifying green asurvivora zones
  - Avoiding mapped fire pits and obstacles

---

###  i  **Technical Approach**

- **Hardware:**  
  RGB cameras (Kinect and onboard webcam) captured live streams for processing.
- **Software:**  
  OpenCV (Python/C++), running on an embedded Linux PC for frame-by-frame analysis.
- **Algorithms:**  
  HSV thresholding, binary masking, contour finding, and geometric feature extraction.
- **Control Flow:**  
  Vision outputs set state machine transitions and action priorities, making vision tightly coupled to autonomy.

---

###  **Competition Impact**

- Enabled the robot to robustly **perceive, plan, and act** in real time, bridging the gap from simulated to real-world tasks.
- Showcased resilience to lighting and environmental noise, contributing directly to our 2nd Runner-Up result at IESL RoboGames 2024.

---

`,
  media: [
    {
      type: "image",
      src: `${import.meta.env.BASE_URL}robo1.jpg`,
      alt: "RoboGames 2024 Robot a Camera and Vision Setup"
    },
    {
      type: "image",
      src: `${import.meta.env.BASE_URL}robo7.png`,
      alt: "Team Collaboration a RoboGames 2024"
    },
    {
      type: "video",
      src: "https://www.youtube.com/watch?v=kNw_bI8qk0k&embeds_referring_euri=https%3A%2F%2Fwww.pankajabalasooriya.me%2F&source_ve_path=OTY3MTQ",
      alt: "RoboGames 2024 a Finals Demonstration Video"
    }
  ]
},


  // --- AI ---
{
  id: "lake-water-quality",
  category: "ai",
  title: "Lake Water Quality Prediction System",
  description: "End-to-end ML + IoT pipeline forecasting pH, turbidity, and conductivity from an 80K-location lake dataset with ESP32 edge and AWS Lambda deployments.",
  detail: `
## Lake Water Quality Prediction System

**Dataset:** High resolution archive of Chinese lakes and reservoirs from 2000-2023 with pH, turbidity (NTU), and conductivity (uS/cm) readings across 80,000+ monitoring locations.

---

### Why this project
Manual sampling could not scale for multi-decade, multi-lake monitoring. This system automates ingestion, cleaning, model training, and deployment so lake health warnings can be delivered before conditions become unsafe.

- **Physics-aware cleaning:** Enforces pH 0-14, removes negative sensor artefacts, and processes 15M+ sequences in memory-safe chunks while versioning each dataset revision.
- **Classical baselines:** XGBoost delivered the lowest MSE for single-location pilots, LightGBM followed closely, and SARIMA served as the transparent control model.
- **Global forecasting:** Multi-feature, multi-step LSTM in PyTorch predicts 12 months of pH, turbidity, and conductivity from the previous year using mixed precision, gradient scaling, adaptive schedulers, and early stopping (~767,585 sequences per epoch).

---

### Cloud inference (FastAPI + Docker + AWS Lambda)
- FastAPI service containerised with Docker and published to AWS ECR.
- Runs on AWS Lambda with custom memory/timeout, fronted by API Gateway at `/waterquality-lambda`.
- Supports on-demand predictions for field teams via HTTPS.

![System pipeline showing IoT sensors feeding ESP32 edge, AWS Lambda, and prediction outputs.](${import.meta.env.BASE_URL}water-quality-pipeline.png)

---

### Edge deployment (ESP32 + m2cgen)
- XGBoost models exported to C headers with m2cgen for on-device inference.
- Firmware reads calibrated pH, turbidity, and conductivity sensors, renders to an OLED display, and syncs readings to the cloud.
- Button-driven UI lets operators trigger sampling cycles and review latest forecasts in the field.

![ESP32 hardware assembly with pH, turbidity, and conductivity probes connected to custom PCBs.](${import.meta.env.BASE_URL}water-quality-hardware.png)

---

### Training insights
Training logs confirm convergence: validation loss steadily improves through epochs 26-30, with the best checkpoint saved at loss 0.21866 while the learning rate holds at 0.002.

![PyTorch training log highlighting best checkpoints during LSTM training.](${import.meta.env.BASE_URL}water-quality-training.png)

---

### Next steps
- Stream predictions for multiple lake clusters through the same REST interface.
- Build a lightweight dashboard for live trend visualisation.
- Explore TinyML variants so recurrent models can eventually join the ESP32 edge device.

  `,
  github: "https://github.com/sahas-eashan/Lake-Water-Quality-Prediction-System",
  tech: ["Python", "PyTorch", "XGBoost", "LightGBM", "FastAPI", "Docker", "AWS Lambda", "ESP32", "m2cgen", "MQTT"],
  media: [
    {
      type: "image",
      src: `${import.meta.env.BASE_URL}water-quality-hardware.png`,
      alt: "ESP32 edge prototype with pH, turbidity, and conductivity sensors"
    },
    {
      type: "image",
      src: `${import.meta.env.BASE_URL}water-quality-pipeline.png`,
      alt: "IoT sensors to ESP32 edge to AWS Lambda pipeline"
    },
    {
      type: "image",
      src: `${import.meta.env.BASE_URL}water-quality-training.png`,
      alt: "LSTM training log showing best checkpoints"
    }
  ]
},
{
  id: "agentic-ai",
  category: "ai",
  title: "Agentic AI Practice",
  description: "Modular, multi-agent system for web search, finance, and document Q&Aareal-time reasoning and collaboration.",
  detail: `
## Agentic AI Practice a Multi-Agent LLM System

Developed an advanced agentic AI platform using Ollama (Llama 3.1.8B) and PHI-playground to orchestrate multiple specialized agents for real-world information retrieval, reasoning, and synthesis.

---

### **Key Features**
- **Collaborative Multi-Agent Architecture:**  
  - Separate agents for web search (DuckDuckGo), finance (yfinance), and PDF document Q&A.
  - Agents communicate, share information, and synthesize coordinated, comprehensive responses.
- **Tool-Enabled Reasoning:**  
  - Real-time web news, financial data, and semantic PDF search via custom function/tool-calling.
  - Every agent provides explicit sources for trust and transparency.
- **Supervisor Agent:**  
  - Delegates tasks, manages information flow, and assembles final output using all sub-agent responses.
- **PHI-Playground Integration:**  
  - Fast prototyping, debugging, and visibility into agent actions, tool calls, and reasoning steps.

---

### **Technologies**
- **LLM:** Ollama (Llama 3.1.8B)
- **Framework:** PHI-playground (Python)
- **APIs/Tools:** DuckDuckGo, yfinance, custom PDF QA
- **Dockerized pgvector:** For storing vector embeddings and efficient document search

---

### **Impact**
- Demonstrated modular, transparent, and extensible multi-agent architecture
- Enabled trustworthy, real-time, and explainable AI answers across domains

---

*Open-source code and full details available on GitHub.*
`,
  github: "https://github.com/sahas-eashan/Agentic_AI_Practice",
media: [
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80",
    alt: "Abstract neural network data visualization"
  }
]
},


  // --- Web ---
{
  id: "bioplastics-website",
  category: "web",
  title: "Bioplastics Revolution Website",
  description: "React-based site for Bioplastics project: modern UI, responsive, interactive.",
  detail: `
## Bioplastics Revolution a Website

A professional, fully responsive website built for the Bioplastics Revolution project. Developed using the latest **React + Vite** stack, the site showcases sustainable marine plastic solutions and innovative, seaweed-based biodegradable products.

---

###  **Key Features**
- **Modern UI/UX:** Intuitive layout with interactive components and rich visuals
- **Responsive Design:** Seamless experience across mobile, tablet, and desktop devices
- **Project Gallery:** High-quality images highlighting bioplastics products and environmental impact
- **Contact Form:** Built-in secure form for inquiries and collaborations
- **Performance Optimized:** Fast load times, clean codebase, and minimal bundle size thanks to Vite

---

###  **Deployment**
- **Hosting:** Deployed for free using [GitHub Pages](https://pages.github.com/)
- **CI/CD:** Automated build and deployment pipeline integrated with the GitHub repository
- **Open Source:** Full source code and deployment instructions available on GitHub

---

*This project demonstrates modern web development practices and eco-friendly innovation, making sustainable solutions accessible to a wider audience.*

  `,
  github: "https://github.com/sahas-eashan/WEB_bioplastics_revolution_",
  media: [
    {
      type: "image",
      src: `${import.meta.env.BASE_URL}web1.png`,
      alt: "Bioplastics Website Home Page"
    },
    {
      type: "image",
      src: `${import.meta.env.BASE_URL}web2.png`,
      alt: "Project Gallery and Product Listings"
    },
    {
      type: "image",
      src: `${import.meta.env.BASE_URL}web3.png`,
      alt: "Contact Form and Responsive Layout"
    }
  ]
}
,

  // --- IoT ---
{
  id: "esp32-medibox",
  category: "iot",
  title: "ESP32 Medibox Simulation a EN2853",
  description: "ESP32 Medibox: reminders, environmental monitoring, notifications, and smart servo controlasimulated in PlatformIO & Wokwi.",
  detail: `
## ESP32 Medibox a IoT Simulation (EN2853)

A full-featured smart medicine box developed on ESP32 and **simulated with PlatformIO and Wokwi**. Designed for the EN2853 Embedded Systems course, the project demonstrates practical IoT integration for healthcare, environmental monitoring, and user interaction.

---

###  **Key Features**

- **Medicine Reminders:**  
  Configurable alarms with on-device controls (OLED display, buttons, buzzer, LEDs) for scheduled medication alerts.

- **Environmental Monitoring:**  
  Real-time temperature and humidity readings (DHT22), with automatic alerts for abnormal ranges.

- **Light Intensity Management:**  
  LDR-based ambient light detection with servo-controlled shade; automated via MQTT-configurable sampling intervals and thresholds.

- **Smart Controls & Notifications:**  
  - User menu to set timezone, alarms, snooze, or cancel.
  - Push notifications and data reporting via MQTT.

- **OLED UI:**  
  Intuitive menu navigation and live status display.

---

###  i  **Tech Stack**

- **ESP32**, PlatformIO (C++)
- **Wokwi**: Cloud-based simulation for embedded prototyping
- **Adafruit SSD1306 OLED, DHT22, LDR, Servo**
- **WiFi & MQTT** for real-time data and control

---

### ai  **Simulation Only**

This project is **fully simulated** (not on physical hardware), leveraging [Wokwi](https://wokwi.com/) for circuit emulation and [PlatformIO](https://platformio.org/) for code development and testing.  
All featuresatimers, alarms, environmental monitoring, servo control, and network communicationaare demonstrated in a safe, reproducible simulated environment.

---

###   **Project Media**

- OLED display menu and alarm demo
- Simulation of servo/LEDs in Wokwi
- MQTT data reporting

---

  `,
  github: "https://github.com/sahas-eashan/ESP32-Medibox-Project---EN2853",
  media: [
    {
      type: "image",
      src: `${import.meta.env.BASE_URL}medi3.png`,
      alt: "ESP32 Medibox Simulation OLED Menu"
    },
    {
      type: "video",
      src: `${import.meta.env.BASE_URL}medi1.mp4`,
      alt: "Medibox OLED Display and Alarm Demo"
    },
    {
      type: "video",
      src: `${import.meta.env.BASE_URL}medi2.mp4`,
      alt: "Wokwi Servo, LED, and MQTT Simulation"
    }
  ]
}
,
{
  id: "shoe-cleaning-machine",
  category: "iot",
  title: "Shoe Cleaning and Drying Machine (EN1190)",
  description: "A fully functional, automated shoe cleaning and drying system with custom enclosure, PCB, and 3D-printed parts.",
  detail: `
## Shoe Cleaning and Drying Machine a EN1190

Designed and built for the EN1190 Engineering Design Project, this machine automates both the cleaning and drying of shoes in a single, user-friendly device.

---

### **Key Features**

- **Automated Shoe Cleaning & Drying:**  
  Place your shoes, select a mode, and the machine handles cleaning followed by efficient air-drying.
- **Custom Enclosure:**  
  Durable, compact housing with easily accessible controls.
- **PCB and Electronics:**  
  Fully custom-designed PCB for all system control and user interface.
- **3D-Printed Parts:**  
  Precision-fitted mechanical parts for shoe holders and cleaning modules.
- **Efficient Air Circulation:**  
  Integrated fan system for rapid, thorough drying.

---

### 14i  **Project Gallery**

- **Enclosure:** Assembled and open view.
- **PCB:** Custom electronics for automation.
- **3D-Printed Components:** Shoe holders and cleaning tools.
- **Enclosure CAD:** Full mechanical design files included.

---

###  **Documentation & Files**

- Full project documentation and CAD files are available in the repository.
- Includes hardware schematics, firmware, and all 3D/2D files.

---

###  **Team Members**

- Ravishan BBN
- Eashan SGS
- Wickramasinghe SD
- Manawadu MD

---
  `,
  github: "https://github.com/sahas-eashan/shoe-cleaning-drying-machine", // Replace with your real repo if needed
  media: [
    {
      type: "image",
      src: `${import.meta.env.BASE_URL}shoe1.jpg`,
      alt: "Shoe Cleaning Machine a Enclosure Open View"
    },
    {
      type: "image",
      src: `${import.meta.env.BASE_URL}shoe2.jpg`,
      alt: "Shoe Cleaning Machine a PCB and Electronics"
    },
    {
      type: "image",
      src: `${import.meta.env.BASE_URL}shoe3.jpg`,
      alt: "Shoe Cleaning Machine a 3D Printed Components"
    },
    {
      type: "image",
      src: `${import.meta.env.BASE_URL}shoe4.jpg`,
      alt: "Shoe Cleaning Machine a CAD Enclosure Design"
    },
    {
      type: "video",
      src: `${import.meta.env.BASE_URL}shoe5.mp4`,
      alt: "Shoe Cleaning and Drying Machine a Demo Video"
    }
  ]
}
,

  // --- Hardware ---
{
  id: "linear-psu",
  category: "hardware",
  title: "Linear Power Supply Design",
  description: "10V 10A linear PSU: advanced voltage regulation, dual-layer PCB, full protection suite.",
  detail: `
## Linear Power Supply Design a 10V, 10A Precision Lab Supply

A comprehensive linear power supply designed and built for EN2090 Laboratory Practice, meeting rigorous specs for stable 10V/10A output. The project involved complete analog circuit design, simulation, custom PCB, thermal engineering, and safety features.

---

### **Core Features**

- **Stable 10V/10A Output:** Drives 100W loads with high precision, low ripple, and excellent transient response.
- **Analog Regulation:** TIP142G Darlington transistor with 1N4738A zener and potentiometer for fine voltage adjustment.
- **Current Limiting:** Automatic protection to prevent output current from exceeding 10A, ensuring safety for both load and supply.
- **Complete Protection Suite:**
  - Overload/short-circuit protection via high-power resistors and 12A fast-blow fuse.
  - Advanced thermal management with heat sinks and 12V DC fan.
- **Double-layer PCB:** Robust copper traces sized to IPC-2221 for 10A continuous current, with careful thermal and safety layout.
- **Custom Enclosure:** SolidWorks-designed case with optimized airflow, minimalistic interface, and secure AC/DC separation.
- **Simulation & Testing:** Multisim simulations, oscilloscope testing, and data analysis for ripple, load regulation, and efficiency.

---

### **Technical Highlights**

- **Rectification:** KBPC3510 bridge rectifier, handles >35A, with smoothing by three 12,000I14F capacitors (total 36,000I14F).
- **Voltage Regulation:** Potentiometer-adjustable, with zener-based feedback and high-power pass element.
- **Current Sensing:** Parallel shunt resistors (0.22I) and 2N5551 transistor for responsive limiting.
- **Thermal Design:** Heat sinks on power devices, fan cooling, and vented enclosure for safe operation at full load.
- **Load & Efficiency Data:** Oscilloscope-based validation showed ripple below 20mV and output voltage within A0.2V of setpoint under varying load.

---

`,
  media: [
    {
      type: "image",
      src: `${import.meta.env.BASE_URL}ana1.png`,
      alt: "Linear Power Supply a Final Product"
    },
    {
      type: "image",
      src: `${import.meta.env.BASE_URL}ana2.jpg`,
      alt: "PCB Layout a High Current Design"
    },
    {
      type: "image",
      src: `${import.meta.env.BASE_URL}ana3.jpg`,
      alt: "Enclosure a Front View"
    },
    {
      type: "image",
      src: `${import.meta.env.BASE_URL}ana4.jpg`,
      alt: "Enclosure a Side View"
    }

  ]
}
,

  // --- Sustainability ---
{
  id: "bioplastic-revo",
  category: "sustain",
  title: "Bioplastic Revolution a Ocean's Gift",
  description: "Biodegradable cling films and bags from Sri Lankan seaweed. Eco-innovation against marine plastic pollution.",
  detail: `
## PlastiSea a Seaweed-Based Bioplastics to Combat Plastic Pollution

**Finalist at PLEASE Hack 2025 | "Best Environment Project" Award, Tyumen Ideathon**

---

###  Project Overview

PlastiSea is a pioneering eco-innovation tackling Sri Lankaas plastic crisis by developing 100% biodegradable, non-toxic bioplastics from locally sourced seaweed. These new-age materialsacovering straws, bags, and cling filmsaare designed to fully replace single-use plastics, being safe for wildlife and compliant with Sri Lankan eco-bans.

Our vision extends beyond material science: weave integrated a smart digital platform to track seaweed sourcing, production, and environmental impact, delivering true transparency and quality assurance **from sea to shelf**.

---

### **Key Features**

- **Made from renewable seaweed** a Lower carbon and energy footprint than petro-plastics.
- **Supports coastal communities** a Empowers local farmers through new economic opportunities in sustainable aquaculture.
- **Truly biodegradable** a Safe for marine life, dissolves naturally, and complies with eco-regulations.
- **Smart monitoring platform** a Tracks every step from seaweed harvest to product delivery, enabling environmental stewardship.
- **Scalable impact** a Model deployable across coastal nations for a plastic-free future.

---

### **Achievements**

-  **Finalists** a PLEASE Hack 2025, South Asia (Plastic Free Rivers & Seas for South Asia Project)
-  **Best Environment Project** a Tyumen Ideathon, Tyumen State University, Russia

---

### **Team Bioplastic Revolution  degrees**

- Sahas Eshan
- Demitha Manawadu
- Banuka Liyanage
- Ridmini Hasari
- Benuri Edirisinghe

**Mentors:**  
Prof. Jagath Premachandra  
Roshan Salinda Narasinghage

---

### **More**

- [GitHub Project Repository](https://github.com/sahas-eashan/Bioplastic-Revolution)
- [Website Source Code](https://github.com/sahas-eashan/Bioplastic-Revolution_web)
- [YouTube Demo](https://youtu.be/Mx4AK1pfUDk?si=KuaUEP0_82QkifbX)

---

### **Media**

Gallery and demo video below.

`,
  github: "https://github.com/sahas-eashan/Bioplastic-Revolution",
  media: [
    {
      type: "image",
      src: `${import.meta.env.BASE_URL}bio1.jpg`,
      alt: "Bioplastic Revolution a Ocean's Gift a Product"
    },
    {
      type: "image",
      src: `${import.meta.env.BASE_URL}bio2.jpg`,
      alt: "Seaweed Harvesting for Bioplastic"
    },
    {
      type: "image",
      src: `${import.meta.env.BASE_URL}bio3.jpeg`,
      alt: "Biodegradable Straws and Bags"
    },
    {
      type: "image",
      src: `${import.meta.env.BASE_URL}bio4.jpg`,
      alt: "Community Engagement with Seaweed Farmers"
    },
    {
      type: "video",
      src: `${import.meta.env.BASE_URL}bio5.mp4`,
      alt: "Bioplastic Revolution a YouTube Demo"
    }
  ]
}

];


