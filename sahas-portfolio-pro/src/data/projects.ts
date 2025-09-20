export interface Project {
  id: string;
  category: string;
  title: string;
  description: string;
  detail: string;
  github?: string;
  live?: string;
  techStack: string[];
  featured: boolean;
  year: string;
  image: string;
  images?: string[];
}

export const PROJECT_CATEGORIES = [
  { id: "robotics", label: "Robotics & Automation", icon: "🤖" },
  { id: "cv", label: "Computer Vision", icon: "👁️" },
  { id: "ai", label: "AI & Machine Learning", icon: "🧠" },
  { id: "web", label: "Web Development", icon: "🌐" },
  { id: "iot", label: "IoT & Embedded", icon: "🔬" },
  { id: "hardware", label: "Hardware & Electronics", icon: "⚡" },
  { id: "sustain", label: "Sustainability & Innovation", icon: "🌱" }
];

export const PROJECTS: Project[] = [
  {
    id: "omni-robot",
    category: "robotics",
    title: "Omni-Directional Robot",
    description: "Award-winning omnidirectional robot featuring custom PCB design, closed-loop control, A* path planning, and real-time web interface for precise indoor navigation.",
    detail: `## Omni-Directional Robot with Mecanum Wheels

A cutting-edge omnidirectional robot platform that showcases the perfect fusion of **advanced hardware design**, **intelligent software control**, and **modern web technologies**. This comprehensive robotics project demonstrates expertise across embedded systems, PCB design, control theory, and full-stack development.

### **Project Highlights**
- **Competition-Ready Performance**: Engineered for EDR module with precision navigation capabilities
- **Custom Hardware**: 4-layer PCB design with professional-grade components and thermal management
- **Intelligent Control**: Dual-loop closed-loop motor control with real-time feedback
- **Modern Interface**: Web-based A* path planning and joystick control systems
- **Distributed Architecture**: RS485 communication with impedance-matched differential signaling

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

### **Technical Specifications**
- **Microcontroller**: STM32F446RE - 180MHz ARM Cortex-M4 with FPU
- **Motor Drivers**: Dual VNH5019 - Dagaya Pulse Duo configuration
- **Control Frequency**: Dual-loop system - 20Hz velocity loop, 10Hz current loop
- **Communication**: RS485 differential signaling, Bluetooth connectivity
- **Power Architecture**: Multi-rail design - 24V motor / 7V logic / 3.3V MCU`,
    github: "https://github.com/sahas-eashan/OmniDirectionalRobot-EN2160",
    techStack: ["STM32", "Altium Designer", "C++", "JavaScript", "PCB Design", "Control Systems"],
    featured: true,
    year: "2024",
    image: "/images/omni1.jpg",
    images: ["/images/omni1.jpg", "/images/omni3.jpg", "/images/omni4.jpg", "/images/omniweb.jpg"]
  },
  {
    id: "robogames-2024",
    category: "robotics",
    title: "IESL RoboGames 2024",
    description: "2nd Runner-Up in national robotics competition featuring autonomous navigation, computer vision, and sensor fusion for robust robotics solutions.",
    detail: `## IESL RoboGames 2024 – University Category

A national robotics challenge where I led technical development and hands-on implementation from simulation to real-world robotics—culminating in a **2nd Runner-Up finish**.

### **Competition Overview**
The RoboGames 2024 featured multi-stage, multi-round challenges:
- **Completion Round (Webots Simulation):** E-puck robot navigating a 2.5m × 2.5m maze
- **Elimination Round:** Larger 5m × 5m maze with hazardous zones and survivor rescue
- **Finals (Physical Robot):** Real-world Kobuki robot platform with computer vision

### **Technical Contributions & Solutions**
- **Flood-fill algorithm** for efficient maze pathfinding
- **Trémaux Search** and **Depth-First Search (DFS)** for complex exploration
- **OpenCV-based computer vision** pipeline with color detection and contour analysis
- **Sensor fusion**: Integrated wheel encoders, IMU, and IR sensors for localization

### **Impact & Achievements**
- **2nd Runner-Up** in highly competitive university robotics field
- Demonstrated ability to bridge simulation algorithms to real-world platforms
- Gained expertise in autonomous robotics, sensor fusion, and real-world systems`,
    github: "https://github.com/sahas-eashan/BB-Alr-8",
    techStack: ["Python", "OpenCV", "ROS", "Webots", "Computer Vision", "Sensor Fusion"],
    featured: true,
    year: "2024",
    image: "/images/robo1.jpg",
    images: ["/images/robo1.jpg", "/images/robo2.jpg", "/images/robo3.jpg", "/images/robo4.jpg"]
  },
  {
    id: "bioplastic-revolution",
    category: "sustain",
    title: "Bioplastic Revolution – Ocean's Gift",
    description: "PLEASE Hack 2025 Finalist: Biodegradable cling films and bags from Sri Lankan seaweed. Eco-innovation against marine plastic pollution.",
    detail: `## PlastiSea – Seaweed-Based Bioplastics to Combat Plastic Pollution

**Finalist at PLEASE Hack 2025 | "Best Environment Project" Award, Tyumen Ideathon**

### Project Overview
PlastiSea is a pioneering eco-innovation tackling Sri Lanka's plastic crisis by developing 100% biodegradable, non-toxic bioplastics from locally sourced seaweed. These materials—covering straws, bags, and cling films—are designed to fully replace single-use plastics.

### **Key Features**
- **Made from renewable seaweed** – Lower carbon and energy footprint than petro-plastics
- **Supports coastal communities** – Empowers local farmers through sustainable aquaculture
- **Truly biodegradable** – Safe for marine life, dissolves naturally
- **Smart monitoring platform** – Tracks every step from seaweed harvest to product delivery
- **Scalable impact** – Model deployable across coastal nations

### **Achievements**
- 🏆 **Finalists** – PLEASE Hack 2025, South Asia
- 🌱 **Best Environment Project** – Tyumen Ideathon, Russia

### **Applications**
Perfect for industrial automation, research platforms, autonomous navigation systems, and IoT manufacturing environments.`,
    github: "https://github.com/sahas-eashan/Bioplastic-Revolution",
    live: "https://github.com/sahas-eashan/Bioplastic-Revolution_web",
    techStack: ["React", "Sustainability", "Innovation", "Product Design", "Environmental Science"],
    featured: true,
    year: "2025",
    image: "/images/bio1.jpg",
    images: ["/images/bio1.jpg", "/images/bio2.jpg", "/images/bio3.jpeg", "/images/bio4.jpg"]
  },
  {
    id: "agentic-ai",
    category: "ai",
    title: "Agentic AI Practice",
    description: "Modular, multi-agent system for web search, finance, and document Q&A—real-time reasoning and collaboration.",
    detail: `## Agentic AI Practice – Multi-Agent LLM System

Developed an advanced agentic AI platform using Ollama (Llama 3.1.8B) and PHI-playground to orchestrate multiple specialized agents for real-world information retrieval, reasoning, and synthesis.

### **Key Features**
- **Collaborative Multi-Agent Architecture**: Separate agents for web search, finance, and PDF Q&A
- **Tool-Enabled Reasoning**: Real-time web news, financial data, and semantic PDF search
- **Supervisor Agent**: Delegates tasks and manages information flow
- **PHI-Playground Integration**: Fast prototyping and debugging visibility

### **Technologies**
- **LLM:** Ollama (Llama 3.1.8B)
- **Framework:** PHI-playground (Python)
- **APIs/Tools:** DuckDuckGo, yfinance, custom PDF QA
- **Vector Store:** Dockerized pgvector for document embeddings

### **Impact**
Demonstrated modular, transparent, and extensible multi-agent architecture enabling trustworthy, real-time, and explainable AI answers across domains.`,
    github: "https://github.com/sahas-eashan/Agentic_AI_Practice",
    techStack: ["Python", "LLMs", "Ollama", "Vector Databases", "Multi-Agent Systems", "AI"],
    featured: false,
    year: "2024",
    image: "/images/ai-project.jpg"
  },
  {
    id: "linear-psu",
    category: "hardware",
    title: "Linear Power Supply Design",
    description: "10V 10A linear PSU: advanced voltage regulation, dual-layer PCB, full protection suite.",
    detail: `## Linear Power Supply Design – 10V, 10A Precision Lab Supply

A comprehensive linear power supply designed and built for EN2090 Laboratory Practice, meeting rigorous specs for stable 10V/10A output.

### **Core Features**
- **Stable 10V/10A Output**: Drives 100W loads with high precision and low ripple
- **Analog Regulation**: TIP142G Darlington transistor with precise voltage control
- **Current Limiting**: Automatic protection preventing >10A output
- **Complete Protection Suite**: Overload, short-circuit, and thermal protection
- **Double-layer PCB**: IPC-2221 compliant traces for 10A continuous current
- **Custom Enclosure**: SolidWorks-designed case with optimized airflow

### **Technical Highlights**
- **Rectification**: KBPC3510 bridge rectifier with 36,000μF smoothing
- **Voltage Regulation**: Potentiometer-adjustable with zener feedback
- **Current Sensing**: Parallel shunt resistors for responsive limiting
- **Thermal Design**: Heat sinks, fan cooling, and vented enclosure
- **Performance**: <20mV ripple, ±0.2V regulation under varying load`,
    techStack: ["Analog Electronics", "PCB Design", "Power Systems", "SolidWorks", "Circuit Analysis"],
    featured: false,
    year: "2024",
    image: "/images/ana1.png",
    images: ["/images/ana1.png", "/images/ana2.jpg", "/images/ana3.jpg", "/images/ana4.jpg"]
  },
  {
    id: "esp32-medibox",
    category: "iot",
    title: "ESP32 Medibox Simulation",
    description: "ESP32 Medibox: reminders, environmental monitoring, notifications, and smart servo control—simulated in PlatformIO & Wokwi.",
    detail: `## ESP32 Medibox – IoT Simulation (EN2853)

A full-featured smart medicine box developed on ESP32 and simulated with PlatformIO and Wokwi. Demonstrates practical IoT integration for healthcare and environmental monitoring.

### **Key Features**
- **Medicine Reminders**: Configurable alarms with OLED display and controls
- **Environmental Monitoring**: Real-time temperature and humidity readings (DHT22)
- **Light Intensity Management**: LDR-based detection with servo-controlled shade
- **Smart Controls**: User menu for timezone, alarms, and notifications
- **OLED UI**: Intuitive navigation and live status display

### **Tech Stack**
- **ESP32**, PlatformIO (C++)
- **Wokwi**: Cloud-based simulation for embedded prototyping
- **Sensors**: Adafruit SSD1306 OLED, DHT22, LDR, Servo
- **Communication**: WiFi & MQTT for real-time data and control

### **Simulation Features**
Fully simulated environment demonstrating timers, alarms, environmental monitoring, servo control, and network communication in a safe, reproducible environment.`,
    github: "https://github.com/sahas-eashan/ESP32-Medibox-Project---EN2853",
    techStack: ["ESP32", "IoT", "C++", "PlatformIO", "MQTT", "Wokwi Simulation"],
    featured: false,
    year: "2024",
    image: "/images/medi3.png"
  }
];