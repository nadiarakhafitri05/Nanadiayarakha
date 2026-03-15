# My Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features a beautiful purple-themed design with smooth animations and interactive components.

## 🚀 Features

- **Responsive Design**: Optimized for all devices (mobile, tablet, desktop)
- **Modern UI**: Clean, professional design with purple gradient theme
- **Interactive Components**: Smooth animations and hover effects
- **Contact Form**: Functional email sending with EmailJS integration
- **Timeline Layout**: Unique experience section with timeline design
- **Image Gallery**: Certificate showcase with carousel functionality
- **Dark/Light Mode Ready**: Built with design system that supports theming

## 🛠️ Technologies Used

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom gradients
- **UI Components**: shadcn/ui component library
- **Icons**: Lucide React
- **Email Service**: EmailJS for contact form
- **Animations**: Custom CSS transitions and transforms

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (version 18 or higher)
- **npm** or **yarn** package manager
- **Git** for version control

## 🔧 Installation & Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/nadiarakhafitri05/Nanadiayarakha.git
   cd Nanadiayarakha
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:8080` to view the application

## 📜 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality checks

## 📁 Project Structure

```
purple-palette-portfolio/
├── public/                 # Static assets
│   ├── certificateImg/    # Certificate images
│   ├── experienceImg/     # Experience images
│   └── projectImg/        # Project images
├── src/
│   ├── components/        # React components
│   │   ├── ui/           # Reusable UI components
│   │   └── ...           # Page sections
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions
│   ├── pages/            # Page components
│   └── ...
├── package.json
├── tailwind.config.ts
├── vite.config.ts
└── README.md
```

## 📧 Email Configuration

To enable the contact form functionality:

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Set up an email service (Gmail, Outlook, etc.)
3. Create an email template with these variables:
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{message}}` - Message content
4. Update the configuration in `src/components/ContactSection.tsx`

## 🎨 Customization

### Colors & Theme

- Primary purple gradient defined in `tailwind.config.ts`
- Color variables in CSS custom properties
- Easy to modify theme colors

### Content

- Update personal information in component files
- Replace images in `public/` folders
- Modify social links and contact information

### Components

- Modular component structure
- Easy to add/remove sections
- Responsive design patterns

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment to any static hosting service.

### Recommended Deployment Platforms

- **Vercel**: `vercel --prod`
- **Netlify**: Drag and drop the `dist` folder
- **GitHub Pages**: Use GitHub Actions for automated deployment
- **AWS S3 + CloudFront**: For scalable hosting

## 👤 Author

**Nadia Rakha Fitri**

- Email: nadiarakhafitri@gmail.com
- LinkedIn: [nadiarakha05](https://linkedin.com/in/nadiarakha05)
- Instagram: [@nadiarakhaf](https://instagram.com/nadiarakhaf)

**Ramzi Malik**

- Email: ramzimalik07@gmail.com
- LinkedIn: [RamziMalik](https://linkedin.com/in/ramzimalik)
- Instagram: [@ramziii.z](https://instagram.com/ramziii.z)

---

Built with ❤️ using React, TypeScript, and Tailwind CSS
