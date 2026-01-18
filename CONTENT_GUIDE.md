# Portfolio Content Management Guide

This guide explains how to add, edit, or remove content from your portfolio website.

## 📄 Quick Reference

| Content Type | Location | Type | Deployment |
|--------------|----------|------|------------|
| **Experience** | `src/data/profile.js` → `EXPERIENCE` | Static | Vercel auto-deploy on push |
| **Education** | `src/data/profile.js` → `EDUCATION` | Static | Vercel auto-deploy on push |
| **Skills** | `src/data/profile.js` → `SKILLS` | Static | Vercel auto-deploy on push |
| **Projects** | Backend database | Dynamic | Requires backend update |
| **Profile Info** | `src/data/profile.js` → `PROFILE` | Static | Vercel auto-deploy on push |
| **Contact Messages** | Backend database | Dynamic | Automatic (user submissions) |

---

## 🎯 Editing Static Content (Experience, Education, Skills, Profile)

### Location
All static content is centralized in:
```
portfolio-fullstack/src/data/profile.js
```

### How to Edit

1. **Open the file:**
   ```bash
   cd /Users/roshank/Documents/portfolio-fullstack
   code src/data/profile.js
   ```

2. **Make your changes** (examples below)

3. **Deploy to production:**
   ```bash
   npm run build  # Test locally first
   git add src/data/profile.js
   git commit -m "Update portfolio content"
   git push
   ```
   
   ✅ Vercel automatically deploys in ~1 minute!

---

### Adding a New Work Experience

Edit the `EXPERIENCE` array in `profile.js`:

```javascript
export const EXPERIENCE = [
  {
    company: "Your New Company",
    role: "Your Role Title",
    duration: "Jan 2026 - Present",
    location: "City, Country",
    type: "Full-time / Internship / Contract",
    description: "Brief overview of your role",
    responsibilities: [
      "Key responsibility 1",
      "Key responsibility 2 with quantifiable results (e.g., 'Improved performance by 40%')",
      "Technical achievement 3"
    ],
    tech: ["Technology 1", "Technology 2", "Technology 3"]
  },
  // ... existing experiences
];
```

**Example:**
```javascript
{
  company: "Amazon Web Services",
  role: "Software Development Engineer Intern",
  duration: "May 2026 - Aug 2026",
  location: "Seattle, USA",
  type: "Internship",
  description: "Backend development for AWS Lambda team",
  responsibilities: [
    "Built serverless APIs using Node.js and API Gateway, reducing latency by 35%",
    "Implemented automated testing with Jest, achieving 95% code coverage",
    "Collaborated with team of 8 engineers using Agile/Scrum"
  ],
  tech: ["Node.js", "AWS Lambda", "DynamoDB", "TypeScript", "Jest"]
}
```

---

### Adding a New Education Entry

Edit the `EDUCATION` array:

```javascript
export const EDUCATION = [
  {
    degree: "Your Degree",
    field: "Your Field of Study",
    institution: "University Name",
    location: "City, Country",
    duration: "Start Year - End Year",
    gpa: "X.XX/4.0",  // Optional
    achievements: [
      "Dean's List",
      "Research project title"
    ],
    coursework: [
      "Course 1",
      "Course 2"
    ]
  },
  // ... existing education
];
```

---

### Adding/Editing Skills

Edit the `SKILLS` object:

```javascript
export const SKILLS = {
  "Backend Development": {
    items: ["Java", "Spring Boot", "Python", "Node.js", "PostgreSQL"],
    icon: "🔧"
  },
  "Cloud & DevOps": {
    items: ["AWS (ECS, RDS, ALB)", "Docker", "Terraform", "CI/CD", "Linux"],
    icon: "☁️"
  },
  "New Category": {
    items: ["Skill 1", "Skill 2", "Skill 3"],
    icon: "🚀"  // Pick an emoji
  }
};
```

**Tips:**
- Keep skills grouped by logical categories
- List most important/recent skills first
- Use emojis that represent the category

---

### Editing Your Profile Info

Edit the `PROFILE` object:

```javascript
export const PROFILE = {
  name: "Your Name",
  email: "your.email@example.com",
  phone: "+1 234 567 8900",
  location: "Your City, Country",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername"
};
```

This updates the Contact page and footer links.

---

## 🚀 Editing Dynamic Content (Projects)

Projects are stored in the **backend database** (PostgreSQL on AWS RDS).

### Option 1: Direct Database Access (Recommended for bulk updates)

```bash
# Connect to your RDS database
psql -h <RDS_ENDPOINT> -U roshan -d portfolio_db

# View existing projects
SELECT id, title FROM projects;

# Add a new project
INSERT INTO projects (title, description, project_type, github_link, image_url, created_at, updated_at)
VALUES (
  'My New Project',
  'Detailed description of what it does, technologies used, and impact',
  'PERSONAL_PROJECT',
  'https://github.com/rosh2525/project-repo',
  'https://via.placeholder.com/300x200?text=Project+Name',
  NOW(),
  NOW()
);

# Update an existing project
UPDATE projects 
SET description = 'New description', updated_at = NOW()
WHERE id = 1;

# Delete a project
DELETE FROM projects WHERE id = 7;
```

**To get your RDS endpoint:**
```bash
cd /Users/roshank/Documents/portfolio-aws/terraform
terraform output rds_endpoint
```

### Option 2: Using Backend API (For programmatic updates)

You can use curl or a REST client to interact with the backend:

```bash
# Create a new project (requires implementing POST /api/v1/projects)
curl -X POST http://portfolio-alb-930071618.us-east-1.elb.amazonaws.com/api/v1/projects \
  -H "Content-Type: application/json" \
  -d '{
    "title": "New Project",
    "description": "Description here",
    "projectType": "PERSONAL_PROJECT",
    "githubLink": "https://github.com/...",
    "imageUrl": "https://..."
  }'
```

**Note:** The POST endpoint for projects isn't implemented yet. If you need it, let me know!

### Option 3: Seed Data (For fresh deployments)

Edit the database initialization file (if you're rebuilding from scratch):

```bash
cd /Users/roshank/Documents/portfolio/src/main/resources
# Edit data.sql or create a data seeding class
```

---

## 📝 Content Best Practices

### For Experience Descriptions:
- ✅ Start with action verbs (Built, Designed, Implemented, Optimized)
- ✅ Include quantifiable results (e.g., "Improved performance by 40%")
- ✅ Mention technologies used
- ❌ Avoid vague statements like "Worked on various projects"

### For Project Descriptions:
- ✅ Explain the problem you solved
- ✅ List key technologies (prominently)
- ✅ Mention architecture (e.g., "microservices", "serverless")
- ✅ Include metrics if available ("Handles 10k+ requests/day")

### For Skills:
- ✅ Group by category (Frontend, Backend, Cloud, etc.)
- ✅ List most relevant/recent skills first
- ✅ Be specific (e.g., "AWS ECS" not just "AWS")

---

## 🔄 Deployment Workflow

### Frontend Changes (Experience, Skills, Education, Profile)

```bash
cd /Users/roshank/Documents/portfolio-fullstack

# 1. Edit src/data/profile.js
# 2. Test locally
npm run dev
# Visit http://localhost:5173 and verify changes

# 3. Build for production
npm run build

# 4. Deploy
git add src/data/profile.js
git commit -m "Update experience/skills/education"
git push

# ✅ Vercel auto-deploys in ~60 seconds
```

### Backend Changes (Projects, new features)

```bash
cd /Users/roshank/Documents/portfolio

# 1. Make code changes
# 2. Test locally
./mvnw spring-boot:run

# 3. Build and deploy
./mvnw clean package -DskipTests
docker build -t portfolio-api:latest .
docker tag portfolio-api:latest 483259567910.dkr.ecr.us-east-1.amazonaws.com/portfolio-api:latest

# Login to ECR
aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin 483259567910.dkr.ecr.us-east-1.amazonaws.com

# Push
docker push 483259567910.dkr.ecr.us-east-1.amazonaws.com/portfolio-api:latest

# Force ECS to deploy new image
aws ecs update-service \
  --cluster portfolio-cluster \
  --service portfolio-api-service \
  --force-new-deployment \
  --region us-east-1

# ✅ ECS deploys in ~2-3 minutes
```

---

## 🎨 Customizing Colors & Styling

### Global Theme Colors

Edit `portfolio-fullstack/src/index.css`:

```css
/* Current gradient */
.bg-gradient-to-br {
  background: linear-gradient(to bottom right, #your-color-1, #your-color-2);
}

/* Accent colors */
.text-blue-500 { color: #your-accent-color; }
```

### Tailwind Configuration

Edit `portfolio-fullstack/tailwind.config.js`:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        'brand-primary': '#your-color',
        'brand-secondary': '#your-color'
      }
    }
  }
}
```

---

## 📊 Viewing Contact Form Submissions

Contact messages are stored in the database. To view them:

```bash
# Connect to database
psql -h <RDS_ENDPOINT> -U roshan -d portfolio_db

# View all messages
SELECT 
  name, 
  email, 
  subject, 
  message, 
  created_at 
FROM contact_messages 
ORDER BY created_at DESC;

# Count messages
SELECT COUNT(*) FROM contact_messages;
```

**Future Enhancement:** Build an admin dashboard to view these in a UI!

---

## 🚨 Troubleshooting

### "Changes don't appear on the website"
1. Check if Vercel deployment succeeded: https://vercel.com/dashboard
2. Clear your browser cache (Cmd+Shift+R)
3. Wait 1-2 minutes for CDN propagation

### "Backend changes not reflecting"
1. Check ECS deployment status:
   ```bash
   aws ecs describe-services --cluster portfolio-cluster --services portfolio-api-service --region us-east-1
   ```
2. Check CloudWatch logs for errors:
   ```bash
   aws logs tail /ecs/portfolio-api --follow --region us-east-1
   ```

### "Projects not showing"
- Frontend fetches from AWS backend
- If backend is down, it shows demo/fallback data
- Check backend health: `http://portfolio-alb-930071618.us-east-1.elb.amazonaws.com/actuator/health`

---

## 📞 Quick Commands Reference

```bash
# Frontend: Update static content
cd /Users/roshank/Documents/portfolio-fullstack
# Edit src/data/profile.js, then:
npm run build && git add -A && git commit -m "Update content" && git push

# Backend: Deploy new code
cd /Users/roshank/Documents/portfolio
./mvnw clean package -DskipTests
docker build -t portfolio-api:latest . && \
docker tag portfolio-api:latest 483259567910.dkr.ecr.us-east-1.amazonaws.com/portfolio-api:latest && \
docker push 483259567910.dkr.ecr.us-east-1.amazonaws.com/portfolio-api:latest && \
aws ecs update-service --cluster portfolio-cluster --service portfolio-api-service --force-new-deployment --region us-east-1

# Check frontend deployment
curl -I https://dev-roshankumar.vercel.app

# Check backend health
curl http://portfolio-alb-930071618.us-east-1.elb.amazonaws.com/actuator/health

# Connect to database
psql -h $(cd /Users/roshank/Documents/portfolio-aws/terraform && terraform output -raw rds_endpoint) -U roshan -d portfolio_db
```

---

## 🎓 Need Help?

- **Frontend code**: React + Vite + Tailwind CSS
- **Backend code**: Java + Spring Boot
- **Infrastructure**: AWS ECS + RDS + ALB (managed by Terraform)
- **Deployment**: Vercel (frontend), AWS ECR + ECS (backend)

All code is in:
- Frontend: `/Users/roshank/Documents/portfolio-fullstack`
- Backend: `/Users/roshank/Documents/portfolio`
- Infrastructure: `/Users/roshank/Documents/portfolio-aws`
