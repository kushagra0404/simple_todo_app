# Simple TODO App: Project Instructions

## Project Description
Simple TODO is a minimal web application for organizing and managing personal to-do tasks using sections.

### Requirements
The application should support three basic features:
- Add a new to-do section.
- Add tasks within a section and mark them as completed.
- Clear all tasks within a section or clear the entire to-do list.

### UI/UX Expectations
- Provide an Add Section button to create new sections.
- Each section should be collapsible and expandable.
- Users should be able to add to-do tasks within each section.
- Each task should have a checkbox to mark it as completed. Completed tasks should appear with strikethrough text.
- Users should be able to clear all tasks within a specific section or clear the entire to-do list.
- User should be able to delete a to-do (both new or completed)

## Ground Rules
- **Keep It Simple**: Prefer minimal code, fewer dependencies, and straightforward solutions Avoid overengineering and unnecessary abstractions.
- **Security First**: Follow web security best practices, validate user inputs, prevent common vulnerabilities, and never expose secrets or sensitive information.
- **Minimal Dependencies**: Use only essential, well-maintained libraries. Avoid adding dependencies for functionality that can be implemented simply without them.
- **Production-Ready Quality**: Ensure the application works reliably, handles basic errors gracefully, and is safe to deploy publicly over the internet.
- **Maintainability Over Cleverness**: Write readable, modular code with meaningful names and consistent conventions. Prioritize ease of understanding and future modifications over clever optimizations.

## Tech Stack
- **Frontend**: React + TypeScript.
- **Build Tool**: Vite.
- **Storage**: Browser localStorage; no backend storage or database.

## Other Guidelines

### Architecture: 
Keep task operations entirely on the client.