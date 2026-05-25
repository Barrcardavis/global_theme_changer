🌗 Global Theme Changer (React + Context API)
A React application that implements a global light/dark theme switcher using the Context API. The theme state is shared across the entire application, allowing all components to update instantly when the user toggles between modes. This project was built as part of the Global Theme/Dark Mode Switcher assignment.

🚀 Features
Global theme state using React Context API

ThemeProvider for managing theme logic

Light/Dark mode toggle button

Dynamic UI styling based on current theme

Clean, minimal UI

Fully responsive and easy to extend

📁 Project Structure
src/
  ThemeContext.jsx
  ThemeSwitcher.jsx
  App.jsx
  main.jsx
  index.css

🛠️ Installation & Setup
1. Clone the repository:
git clone https://github.com/Barrcardavis/global_theme_changer
cd global_theme_changer

2. Install dependencies:
npm install

3. Run the development server
npm run dev

🎨 How It Works
ThemeContext.jsx
Holds the global theme state (light or dark)

Provides a toggleTheme() function

Wraps the entire application via <ThemeProvider>

ThemeSwitcher.jsx
Uses useContext() to access theme + toggle function

Renders a button that switches between 🌙 and ☀️

App.jsx
Applies theme-based CSS classes to the main container

🧪 Test Cases (Required for Assignment)
✅ Normal Test Cases
1. Initial Load Defaults to Light Mode
Action: Start the app

Expected Result:

Background is white

Text is black

Button shows “🌙 Dark Mode”

2. Toggle Once
Action: Click the toggle button one time

Expected Result:

Background switches to dark

Text becomes white

Button shows “☀️ Light Mode”

3. Toggle Twice
Action: Click toggle twice

Expected Result:

Theme returns to light mode

UI updates instantly

⚠️ Edge Test Cases
4. Rapid Clicking (Spam Toggle)
Action: Click the toggle button repeatedly, quickly

Expected Result:

No errors or crashes

Theme flips correctly each time

App remains stable

5. Multiple Components React to Theme
Action: Add or view multiple components using the theme

Expected Result:

All components update instantly

No mismatched colors or stale UI

6. Empty UI Container Still Applies Theme
Action: Remove or hide content inside the main container

Expected Result:

Background color still changes

Theme remains globally applied

📹 Video Demonstration Requirements
Your video should include:

App running in the browser

Demonstration of all 6 test cases

Clear explanation of how the theme context works

Showing the file structure and key components

📚 Technologies Used
React (Vite)

JavaScript (ES6+)

React Context API

CSS

👤 Author
David A. Davis  
GitHub: https://github.com/Barrcardavis
