
# Masterplan: EdgeReq Analytics (Desktop MVP)

## App Overview and Objectives
EdgeReq Analytics is a desktop-first application designed to identify downstream security risks early in the software development lifecycle by analyzing software requirements. By focusing on ambiguity, completeness, consistency, and other best practices for high-quality requirements, EdgeReq Analytics helps ensure that secure software is built from the ground up.

## Target Audience
- Startups and mid-sized DevOps teams
- Security-aware software development teams
- Compliance-driven organizations seeking to reduce security flaws early in development

## Core Features and Functionality (MVP)
- **Requirements Upload**: Users can upload software requirements in supported formats (e.g., DOCX, TXT, PDF).
- **Security Risk Analysis Engine**: Rules-based engine identifies weaknesses based on best practices (e.g., ambiguity, completeness, testability).
- **Threat Mapping**: Link requirement quality issues to known threat patterns and countermeasures from security libraries.
- **Visual Feedback**: Interface highlights potential problem areas with explanations and severity scores.
- **Offline Use**: Desktop-first execution ensures analysis can be done without an internet connection.

## Extended Collaboration Features (Post-MVP)
- **P2P or Cloud Sync**: Optional peer-to-peer or cloud-based sync for collaborative projects
- **Version Control**: Track changes and allow reverting to previous requirement analysis results
- **Commenting and Collaboration**: Allow team members to comment on findings or annotations

## High-Level Technical Stack Recommendations
- **Frontend**: React with Tauri for native desktop capabilities (small bundle size, fast execution)
- **Backend**: Rust-based engine for parsing requirements, running rules, and local data storage
- **Database**: ArangoDB (embedded or local server) for managing linked requirement issues, threats, and countermeasures
- **Optional Cloud Server**: For syncing and multi-user support (WebSockets or WebRTC for P2P)

## Conceptual Data Model (Simplified)
- **Users**: Local profiles with optional cloud login
- **Projects**: Each project contains requirement documents and analysis results
- **Requirements**: Text + metadata (source, upload time, etc.)
- **Risk Findings**: Derived from rules engine, linked to requirement sections
- **Threats & Countermeasures**: Pulled from embedded libraries
- **Sync State**: Tracks changes for synchronization (optional)

## User Interface Design Principles
- Native-feeling desktop app with drag-and-drop document support
- Inline requirement analysis viewer with sidebar threat mapping
- Clear visual indicators for ambiguous, incomplete, or risky requirements

## Security Considerations
- Offline-first to reduce surface area
- Encrypted local data store (optional)
- Optional secure cloud or peer-to-peer sync with end-to-end encryption

## Development Phases or Milestones
**Phase 1: MVP (Local Desktop)**  
- File upload and parsing  
- Requirements analysis engine  
- Basic threat mapping  
- Local-only data storage

**Phase 2: Optional Sync + Multi-User**  
- Cloud sync server or P2P sync (WebSockets, WebRTC)  
- Collaborative comments and versioning  
- User profiles and permissions

**Phase 3: Full Collaboration & Extension**  
- Threat library updates  
- Exportable reports and dashboards  
- Integration with desktop ALM tools (e.g., local Git client parsing)

## Potential Challenges and Solutions
- **Requirement Parsing Complexity**: Natural language complexity; use hybrid rules + pattern matching
- **Performance on Large Documents**: Optimize Rust engine and async processing
- **Sync Conflicts**: Consider CRDTs or OT for peer-to-peer consistency

## Future Expansion Possibilities
- Support for secure design document review
- ML/NLP-based threat predictions
- Compliance auditing features (PCI, OWASP, etc.)
- Cross-platform support (Windows, macOS, Linux)
