export const profile = {
  firstName: "SURISETTI",
  lastName: "BHARGAV PAVAN SAI",
  role: "Cybersecurity Analyst",
  location: "Andhra Pradesh, India",
  email: "bhargavsurisetti02@gmail.com",
  phone: "+91 9989341901",
  github: "https://github.com/Bhargav-Surisetti",
  linkedin: "https://www.linkedin.com/in/bhargav-pavan-sai-surisetti-b47243330",
  summary:
    "Cybersecurity practitioner with hands-on experience in malware analysis, SOC operations, and vulnerability assessment. Focused on threat detection, incident response, and building resilient defenses across network and cloud environments.",
};

export const coreExperience = {
  company: "C-DAC Hyderabad",
  companyFull: "Centre for Development of Advanced Computing",
  title: "Cybersecurity Intern",
  period: "FEB 2026 — AUG 2026",
  location: "Hyderabad, India",
  bullets: [
    "Triaged suspicious files for the security team, detonating samples inside isolated virtual environments to analyse behaviour and contain risk.",
    "Built FastAPI and Flask automation tools for malicious URL/IP detection and dataset monitoring, cutting manual investigation effort.",
    "Investigated 50+ security events through log analysis, IOC validation, and vulnerability assessment, sharpening SOC detection accuracy.",
    "Authored installation guides and security hardening procedures, standardising deployment across the analysis environment.",
  ],
  highlights: [
    {
      name: "Malware Analysis Sandbox",
      detail:
        "Architected a web-based sandbox (Sandboxie-Plus, VMware Workstation, FastAPI, Windows VMs) to safely detonate suspicious files — automating behavioural analysis, snapshot restoration, and artifact collection via PowerShell/vmrun, integrating Procmon, Sysmon, Regshot, PEStudio, and FakeNet-NG for heuristic risk scoring.",
    },
    {
      name: "SOC Log Monitoring Lab",
      detail:
        "Deployed a 4-VM detection lab (Kali Linux, Windows 10, Metasploitable3) with centralised, SHA-256-verified SMB log forwarding; validated coverage by simulating Nmap-based attacks against Windows Event IDs.",
    },
  ],
  stack: ["Sandboxie-Plus", "VMware", "FastAPI", "Sysmon", "MITRE ATT&CK", "PowerShell"],
};

export const internships = [
  {
    company: "Shamgar Software Solutions",
    title: "Cybersecurity Analyst Intern",
    period: "NOV 2025 — JAN 2026",
    detail:
      "Selected for a project-based internship covering live cybersecurity projects, SOC-related tasks, and security analysis under industry mentorship.",
  },
  {
    company: "Palo Alto Networks",
    title: "Cybersecurity Virtual Internship",
    period: "NOV 2025 — DEC 2025",
    detail:
      "Examined SOC use cases and real security incidents across network and cloud environments, building applied exposure to defensive security practice.",
  },
  {
    company: "Zscaler Academy",
    title: "Zero Trust Cloud Security Virtual Internship",
    period: "JUL 2025 — SEP 2025",
    detail:
      "Built foundations in network security and cloud protection, secure access implementation, threat prevention, and risk management. Certified: Fundamentals of Cybersecurity (EDU-102).",
  },
  {
    company: "AIMERS & Indian Servers",
    title: "Cybersecurity and Ethical Hacking Internship",
    period: "APR 2025 — JUN 2025",
    detail:
      "Practised penetration testing, vulnerability assessment, and risk mitigation across simulated attack scenarios while adhering to legal and ethical standards.",
  },
];

export type Project = {
  title: string;
  year: string;
  summary: string;
  bullets: string[];
  tags: string[];
  repo: string;
  repoName: string;
};

const GH = "https://github.com/Bhargav-Surisetti";

export const projects: Project[] = [
  {
    title: "SIEM Implementation in Azure Cloud",
    year: "2025",
    summary:
      "Microsoft Sentinel SIEM deployment centralising security logs with end-to-end incident investigation.",
    bullets: [
      "Centralised security logs across cloud resources with Microsoft Sentinel.",
      "Ran incident investigations and threat correlation, reducing response time by 20%.",
      "Executed remediation actions to resolve identified incidents.",
    ],
    tags: ["Sentinel", "Azure", "SIEM"],
    repo: `${GH}/microsoft-sentinel-siem-project`,
    repoName: "microsoft-sentinel-siem-project",
  },
  {
    title: "AI-Enabled Incident Response Automation",
    year: "2025",
    summary:
      "ChatGPT-assisted incident response assistant wired into Sentinel via Azure Logic Apps playbooks.",
    bullets: [
      "Automated analysis of 50+ alerts daily inside Azure Cloud.",
      "Integrated AI workflows into Microsoft Sentinel, improving remediation speed by 40%.",
      "Enforced role-based access controls for secure automation and data integrity.",
    ],
    tags: ["Logic Apps", "OpenAI", "SOAR"],
    repo: `${GH}/AI-SIEM-ChatGPT-Integration`,
    repoName: "AI-SIEM-ChatGPT-Integration",
  },
  {
    title: "Multi Honeypot Platform",
    year: "2025",
    summary:
      "T-Pot honeypot on Azure Cloud providing continuous threat visibility across attack surfaces.",
    bullets: [
      "Deployed T-Pot Honeypot on Azure to widen threat visibility.",
      "Configured network and VM security parameters for 24/7 monitoring uptime.",
      "Analysed 10+ intrusion attempts, categorising attacks for proactive defence.",
    ],
    tags: ["T-Pot", "Azure", "Threat Intel"],
    repo: `${GH}/tpot-honeypot-on-azure-cloud`,
    repoName: "tpot-honeypot-on-azure-cloud",
  },
  {
    title: "Vulnerability Assessment Lab",
    year: "2025",
    summary:
      "Nessus-driven assessment lab scanning simulated systems with credentialed and non-credentialed sweeps.",
    bullets: [
      "Configured Kali Linux on VirtualBox with Nessus across 10+ simulated systems.",
      "Identified 50+ vulnerabilities with severity mapping.",
      "Applied 5+ remediation strategies and validated fixes on vulnerable software.",
    ],
    tags: ["Nessus", "Kali Linux", "VAPT"],
    repo: `${GH}/nessus-vulnerability-assessment`,
    repoName: "nessus-vulnerability-assessment",
  },
  {
    title: "Metasploitable2 PenTest Project",
    year: "2025",
    summary:
      "Full scanning, enumeration, and exploitation workflow against Metasploitable2 with mapped reporting.",
    bullets: [
      "Enumerated targets with Nmap, Enum4Linux, and OpenVAS, finding 20+ exploitable weaknesses.",
      "Prioritised critical findings (CVSS > 7.0) with documented remediation steps.",
      "Improved target security posture by 30% through validated reporting.",
    ],
    tags: ["Nmap", "OpenVAS", "Metasploit"],
    repo: `${GH}/Metasploitable2-PenTest-Project`,
    repoName: "Metasploitable2-PenTest-Project",
  },
  {
    title: "IP and TCP Analysis using Wireshark",
    year: "2025",
    summary:
      "Packet-level study of IP and TCP behaviour across real captured traffic flows.",
    bullets: [
      "Analysed 1,000+ packets to examine IP and TCP behaviour.",
      "Improved troubleshooting accuracy by 25% by detecting anomalies in five packet flows.",
      "Reinforced OSI and TCP/IP understanding through real traffic analysis.",
    ],
    tags: ["Wireshark", "TCP/IP", "Cisco"],
    repo: `${GH}/wireshark-ip-tcp-analysis-cisco`,
    repoName: "wireshark-ip-tcp-analysis-cisco",
  },
];

export const hackathons = [
  {
    year: "2026",
    title: "TCS HackQuest 2026",
    summary:
      "Advanced through two competitive rounds of a national-level cybersecurity challenge.",
    bullets: [
      "Participated in cybersecurity-focused challenges covering offensive security and problem solving.",
      "Advanced through two competitive rounds of TCS HackQuest 2026.",
    ],
    tags: ["Cybersecurity", "CTF", "Ethical Hacking"],
    repoName: "",
    repo: "",
  },

  {
    year: "2026",
    title: "Breach Point CTF 2026",
    summary:
      "Participated in a 24-hour national-level cybersecurity Capture The Flag competition.",
    bullets: [
      "Solved cybersecurity challenges across multiple security domains.",
      "Participated in the 24-hour Breach Point CTF at Malla Reddy University, Hyderabad.",
    ],
    tags: ["CTF", "Cybersecurity", "Ethical Hacking"],
    repoName: "",
    repo: "",
  },

  {
    year: "2025",
    title: "PSB's FinTech Cybersecurity Hackathon 2025",
    summary:
      "Proposed and documented a cybersecurity solution addressing real fintech security challenges.",
    bullets: [
      "Designed security controls targeting fintech-specific attack paths.",
      "Documented the threat model and mitigation approach end to end.",
    ],
    tags: ["Threat Modelling", "FinTech", "Cybersecurity"],
    repoName: "PSB-s-FinTech-Cybersecurity-Hackathon-2025",
    repo: "https://github.com/Bhargav-Surisetti/PSB-s-FinTech-Cybersecurity-Hackathon-2025-",
  },

  {
    year: "2025",
    title: "KPMG Cybersecurity Hackathon 2025",
    summary:
      "Participated in a cybersecurity-focused Capture The Flag challenge.",
    bullets: [
      "Competed in the KPMG Cybersecurity Hackathon 2025 CTF.",
      "Applied cybersecurity concepts to solve security challenges.",
    ],
    tags: ["CTF", "Cybersecurity"],
    repoName: "",
    repo: "",
  },
];

export const skillGroups = [
  {
    label: "Security Operations",
    items: [
      "Malware Analysis",
      "VAPT",
      "SIEM Monitoring",
      "SOC Operations",
      "Incident Response",
      "MITRE ATT&CK",
    ],
  },
  {
    label: "Tools & Platforms",
    items: [
      "Microsoft Sentinel",
      "Sandboxie-Plus",
      "Nessus",
      "Burp Suite",
      "Nmap / Zenmap",
      "Sysmon",
      "Wireshark",
      "T-Pot",
    ],
  },
  {
    label: "Systems & Cloud",
    items: [
      "Linux / Kali Linux",
      "Windows Server",
      "VMware / VirtualBox / UTM",
      "Azure",
      "AWS",
      "Metasploitable",
    ],
  },
  {
    label: "Logs & Networking",
    items: [
      "Windows Event Logs",
      "IOC Analysis",
      "PowerShell Logging",
      "TCP/IP, DNS, SMB",
      "OSI Model",
      "Web App Security",
    ],
  },
  {
    label: "Programming",
    items: ["Python", "PowerShell", "FastAPI", "SQL (Basics)", "HTML/CSS (Basics)"],
  },
];

export const certifications = [
  { name: "CCNA: Introduction to Networks", issuer: "Cisco Networking Academy", year: "2024–25" },
  {
    name: "CCNA: Switching, Routing & Wireless Essentials",
    issuer: "Cisco Networking Academy",
    year: "2024–25",
  },
  { name: "Introduction to Cybersecurity", issuer: "Cisco Networking Academy", year: "2024–25" },
  { name: "Fundamentals of Cybersecurity (EDU-102)", issuer: "Zscaler Academy", year: "2025" },
  {
    name: "Machine Learning for Cyber Security Bootcamp",
    issuer: "C-DAC & FutureSkills Prime",
    year: "2025",
  },
  { name: "AWS Academy Cloud Foundations", issuer: "AWS Academy", year: "2025" },
];

export const achievements = [
  "Advanced through two competitive rounds of TCS HackQuest 2026, a national-level cybersecurity challenge.",
  "Competed in Breach Point CTF 2026, a 24-hour national CTF at Malla Reddy University, Hyderabad.",
  "Proposed a fintech security solution at PSB's FinTech Cybersecurity Hackathon 2025.",
  "Competed in the KPMG Cybersecurity Hackathon 2025 CTF.",
];

export const education = [
  {
    degree: "B.Tech",
    field: "Electronics & Communication Engineering",
    school:
      "Sagi Rama Krishnam Raju Engineering College (Autonomous), Bhimavaram",
    period: "Jul 2023 — Apr 2026",
    score: "CGPA 8.69/10",

    minor: {
      degree: "Minor Degree",
      field: "Computer Science & Engineering (CSE)",
      score: "CGPA 7.90/10",
    },
  },

  {
    degree: "Diploma",
    field: "Electronics & Communication Engineering",
    school:
      "A.A.N.M & V.V.R.S.R Polytechnic College, Gudlavalleru",
    period: "Aug 2020 — Apr 2023",
    score: "93%",
  },
];
