
# Masterplan: EdgeReq Analytics

## App Overview and Objectives
EdgeReq Analytics is a collaborative, automated threat modeling tool designed to integrate into the Secure Software Development Lifecycle (SDLC). The MVP will focus specifically on **analyzing software requirements** to identify weaknesses that may result in downstream security risks. It aims to connect principles of good requirements engineering (clarity, completeness, consistency, etc.) to known threat models and mitigation strategies.

## Target Audience
- Startups and mid-sized DevOps teams
- Security-conscious engineering teams adopting secure SDLC practices
- Organizations aiming to prevent security flaws early in the design phase
- Compliance-driven teams working within regulatory frameworks like PCI DSS, GDPR, OWASP, or NIST

## Core Features and Functionality (MVP Scope)
- **Requirements Document Upload**: Users can upload textual requirements (e.g., PDFs, Word, plaintext).
- **Automated Requirements Analysis**: System applies rules to detect ambiguity, incompleteness, inconsistency, etc., and correlates these findings to potential security issues.
- **Threat Linking**: Identified issues are mapped to known threats from libraries such as MITRE EMB3D.
- **Countermeasure Suggestions**: Recommendations for remediation are provided based on threat context.
- **Traceability Mapping**: Traceability between requirements, identified threats, and countermeasures.
- **Project Scoping**: Each analysis is scoped to a project; multiple projects can be managed by users.

## High-Level Technical Stack Recommendations
- **Frontend**: Next.js (React-based) for scalability, SSR benefits, and rich UX  
- **Backend**: NestJS for modular and maintainable APIs  
- **Database**: **ArangoDB** — multi-model (document and graph), ideal for:
  - Representing complex relationships between requirements, threats, and countermeasures  
  - Efficient querying of graph-based structures (e.g., traceability links)  
  - Flexible schema evolution as the data model matures  
- **Authentication**: SSO via OAuth2/SAML (Okta, Azure AD, etc.)  
- **File Uploads**: AWS S3 (or compatible object storage) for requirement documents  
- **Infrastructure**: Cloud-first deployment (AWS or Azure) for accessibility, integrations, and scalability

## Conceptual Data Model
- **User**: Auth identity, roles, permissions
- **Project**: Represents a scope of analysis; owned by users/teams
- **RequirementDocument**: Uploaded by users; parsed into structured units
- **RequirementUnit**: Parsed or annotated line/item from a document
- **Threat**: Mapped to requirement units when risk indicators are present
- **Countermeasure**: Linked to threats and requirements
- **TraceLink**: Graph connections between requirements, threats, countermeasures, and context

## User Interface Design Principles
- Clean, structured UI to upload and annotate requirements
- Inline highlighting of issues with contextual suggestions
- Sidebar for threat summaries and recommendations
- Table view to review and manage traceability and relationships

## Security Considerations
- Encrypted storage for uploaded documents
- Role-based access control for user actions and visibility
- Audit logging of actions and updates
- Secure integration with identity providers (SSO)
- Document parsing sandbox to prevent exploitation

## Development Phases or Milestones
### Phase 1: MVP - Requirement Risk Analyzer
- User login via SSO
- Upload & parse requirements documents
- Apply rules engine to detect poor requirement practices
- Map to threat patterns (from MITRE EMB3D or internal DB)
- Generate and view linked countermeasures
- Store and retrieve projects in ArangoDB

### Phase 2: Collaborative Modeling
- Diagram editor (draw.io style)
- Real-time multi-user editing
- Component-level metadata and rule analysis
- Threat model versioning and history

### Phase 3: Integration & Automation
- ALM tool integration (e.g., Jira)
- Slack/Teams messaging extensions
- Compliance mapping engine (OWASP/NIST)

### Phase 4: Enterprise Scaling
- Advanced permissions and role delegation
- Reporting dashboards
- API access for enterprise workflows
- Offline or Desktop (Tauri) support

## Potential Challenges and Solutions
| Challenge | Solution |
|----------|----------|
| Requirement document parsing and ambiguity detection | NLP-assisted parsing with rule-based layering |
| Modeling relationships between entities | Use ArangoDB’s graph model for efficient traceability |
| Mapping vague requirements to concrete threats | Use contextual NLP tagging and linked metadata |
| Onboarding new users and teams | Build guided workflows and examples inside the platform |

## Future Expansion Possibilities
- AI-assisted threat suggestion and requirement validation
- Browser-based diagramming tied to requirement nodes
- Support for custom libraries and tagging
- Role-driven dashboards and reporting
- Multi-language document parsing
- Full-fledged API platform for integration into pipelines
