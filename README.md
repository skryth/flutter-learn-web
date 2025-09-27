# Flutter Learn Web

Flutter Learning Platform is a modern educational platform for learning Flutter and Dart, providing interactive lessons, practical assignments, and progress tracking. This repository contains the frontend part of the project.

📍Live Preview(soon)

## Features

- **Interactive lessons**: Step-by-step learning of Flutter with theory and practice.
- **Practical assignments**:
  - Tasks for filling in the gaps in the code.
  - Choosing the correct options.
  - Testing knowledge through real-life examples.
- **Progress tracking**: Statistics on completed lessons and correct answers.
- **Module system**: Structured learning from basics to advanced topics.

## Planned Features

- Multiple assignments per lesson
- Video lessons

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/skryth/flutter-learn-web.git
   cd flutter-learn-web
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Configure environment variables:
   - Create a `.env` file in the root directory if it does not exist.
   - Add necessary variables (e.g., API endpoint for the backend):
     
     ```env
     VITE_HOST=http://your-api-endpoint
     ```

4. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open your browser and navigate to `http://localhost:5173` (or the port specified by Vite).

## Usage

### For students:
1. **Log in**: create an account to track your progress.
2. **Select a module**: start with the basics or choose a topic that interests you.
3. **Study the lessons**: read the theory and complete the practical assignments.

### For teachers:
1. Engage students in the lesson with minimal effort.
2. View student progress via a temporary link.
3. Analyze results by module and topic.

## Contributing

Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes and commit (`git commit -m "feat: add your feature"`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a Pull Request.

## Tech Stack
- **Frontend**: [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **State Management**: [Redux Toolkit](https://redux-toolkit.js.org/)
- **Code syntax**: [React Syntax Highlighter](https://www.npmjs.com/package/react-syntax-highlighter)
- **Markdown рендеринг**: [React Markdown](https://www.npmjs.com/package/react-markdown)

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For issues, feature requests, or questions, please open an issue on the [GitHub Issues page](https://github.com/rusty-response/rusty-response-web/issues).

