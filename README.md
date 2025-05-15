# DailyFocus
Just a simple DailyFocus small app
DailyFocus - To-Do App
DailyFocus is a modern, responsive to-do list web application built with HTML, CSS, and JavaScript. It allows users to manage tasks with features like adding, deleting, marking as complete, and editing tasks, with data persisted using LocalStorage. The app features a sleek glassmorphism design and animated background circles with vibrant gradients for a contemporary aesthetic.
Features

Add Tasks: Enter tasks via an input field and add them by clicking the "Add" button or pressing Enter.
Delete Tasks: Remove tasks with a dedicated "Delete" button.
Mark Complete: Toggle task completion with a checkbox, visually indicated by a strikethrough.
Edit Tasks: Modify existing tasks using an "Edit" button, with options to save or cancel changes.
LocalStorage: Tasks are saved in the browser's LocalStorage, persisting across page refreshes.
Modern Design: Glassmorphism styling with a semi-transparent, blurred container and subtle hover effects (scale animations on buttons).
Animated Background: Two orbiting circles with dynamic gradient colors (violet, pink, blue) enhance the background.
Responsive Layout: Adapts seamlessly to mobile and desktop screens.

Installation

Clone or Download:

Clone this repository or download the project files.

git clone <repository-url>


Project Structure:Ensure the following files are in the same directory:

index.html: The main HTML structure.
styles.css: CSS for styling, including glassmorphism and animated circles.
script.js: JavaScript for functionality and LocalStorage handling.


Run the App:

Open index.html in a modern web browser (e.g., Chrome, Firefox, Safari).
No server or dependencies are required, as the app runs entirely client-side.



Usage

Adding a Task:
Type a task in the input field.
Click the "Add" button or press Enter to add it to the list.


Managing Tasks:
Complete: Check the box next to a task to mark it as complete (strikethrough applied).
Edit: Click the "Edit" button to modify a task. Edit the text, then click "Save" or press Enter to save, or "Cancel" to discard changes.
Delete: Click the "Delete" button to remove a task.


Persistence:
Tasks are automatically saved to LocalStorage and persist after page refresh.


Responsive Design:
The app adjusts for mobile devices, stacking the input and buttons vertically and scaling down background circles.



Styling Highlights

Glassmorphism: The main container uses a gradient background (rgba(255, 255, 255, 0.9) to 0.7), backdrop-filter: blur(20px) saturate(180%), and a subtle border for a frosted-glass effect.
Background Circles: Two circles (circle-one and circle-two) with a gradient (#c084fc, #ec4899, #60a5fa) animate with a color shift (15s) and elliptical orbiting (18s and 22s).
Hover Effects: Buttons scale up slightly (transform: scale(1.05)) on hover with a smooth color transition.
Responsive: Media queries ensure usability on screens as small as 480px.

Technologies

HTML: Structure for the input form and task list.
CSS: Custom styles with CSS variables, gradients, animations, and media queries.
JavaScript: Handles task management, LocalStorage, and dynamic rendering.
No Dependencies: Pure vanilla JavaScript, no external libraries required.

File Details

index.html:
Defines the app structure, including the input form, task list, and background circles.
Links to styles.css and script.js.


styles.css:
Contains all styling, including glassmorphism for the container, button hover effects, and animated background circles.
Uses CSS variables for consistent theming.


script.js:
Manages task CRUD operations (create, read, update, delete) and LocalStorage.
Dynamically renders tasks with edit, delete, and complete functionality.



Screenshots
(Optional: Add screenshots here if desired, e.g., via a hosting service like GitHub or Imgur.)
Contributing
Feel free to fork the repository and submit pull requests for improvements. Suggestions for new features or bug fixes are welcome!
License
This project is open-source and available under the MIT License.
Acknowledgments

Built with modern web technologies for a lightweight, user-friendly experience.
Inspired by 2025 design trends, including glassmorphism and gradient animations.


Last updated: May 15, 2025
