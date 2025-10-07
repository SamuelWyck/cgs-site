import devOpsImg from "../assets/servicesImages/devOps.png";
import cloudSecurityImg from "../assets/servicesImages/cloudSecurity.jpg";
import cyberSecurityImg from "../assets/servicesImages/cyberSecurity.jpg";
import codingImg from "../assets/servicesImages/coding.jpg";


const serviceData = [
    {
        title: "Cybersecurity & Risk Management",
        img: cyberSecurityImg,
        bulletPoints: [
            {
                title: "sub-service title",
                description: "Federal Security Control Implementation (NIST SP 800-53, FISCAM, RMF)"
            },
            {
                title: "sub-service title",
                description: "Audit Readiness for DoD and Civilian Agencies"
            },
            {
                title: "sub-service title",
                description: "System Security Plans (SSPs), POA&Ms, RACI Matrices"
            },
            {
                title: "sub-service title",
                description: "Data Privacy & PII Compliance (HIPAA, GDPR principles)"
            },
            {
                title: "sub-service title",
                description: "RMF Lifecycle Compliance and ATO Documentation"
            },
            {
                title: "sub-service title",
                description: "Privileged User Access Reviews and Vulnerability Management"
            }
        ]
    },
    {
        title: "IT Audit, Cloud Security, and GRC",
        img: cloudSecurityImg,
        bulletPoints: [
            {
                title: "sub-service title",
                description: "FISMA & NIST 800-53 based Security Control Assessments"
            },
            {
                title: "sub-service title",
                description: "SOC 1 Report Review and Risk Recommendations"
            },
            {
                title: "sub-service title",
                description: "Governance Dashboards via Jira, ServiceNow, MS Project"
            },
            {
                title: "sub-service title",
                description: "Azure Secure Score Analysis and Reporting"
            },
            {
                title: "sub-service title",
                description: "Automated Form Workflows via PowerApps and SharePoint"
            }
        ]
    },
    {
        title: "Software Engineering & Application Development",
        img: codingImg,
        bulletPoints: [
            {
                title: "sub-service title",
                description: "Agile Web Development: React, Express, HTML, CSS, JavaScript"
            },
            {
                title: "sub-service title",
                description: "Secure Programming Practices (Python, Java, C, SQL)"
            },
            {
                title: "sub-service title",
                description: "Custom Dashboards and Workflow Tools (for audit and compliance)"
            },
            {
                title: "sub-service title",
                description: "RESTful API Design, Postgres Database Integration"
            },
            {
                title: "sub-service title",
                description: "Git-based version control and collaborative development"
            }
        ]
    },
    {
        title: "DevSecOps & Infrastructure",
        img: devOpsImg,
        bulletPoints: [
            {
                title: "sub-service title",
                description: "Virtualized Environment Management (Linux, VirtualBox)"
            },
            {
                title: "sub-service title",
                description: "Infrastructure Hardening and Secure Configuration"
            },
            {
                title: "sub-service title",
                description: "Microsoft Azure Infrastructure Support"
            },
            {
                title: "sub-service title",
                description: "Data Structure Optimization and Algorithm Tuning"
            }
        ]
    }
];



export default serviceData;